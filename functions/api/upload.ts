/**
 * Cloudflare Pages Function - Apps Script Proxy
 * 
 * Location: functions/api/upload.ts
 * This automatically creates the route: a1-engr.com/api/upload
 */

const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwYQyR98-UYVnBzf5_mrloxcwddrvzPxA1JMMcG2IbGdQLSXMSwmZlqYefzAJMNV7F6Nw/exec';

// Handle OPTIONS (CORS preflight)
export const onRequestOptions: PagesFunction = async () => {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Max-Age': '86400',
    },
  });
};

// Handle POST (proxy to Apps Script)
export const onRequestPost: PagesFunction = async (context) => {
  try {
    const body = await context.request.text();
    
    const response = await fetch(APPS_SCRIPT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: body,
    });

    const data = await response.text();

    return new Response(data, {
      status: response.status,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ 
      success: false, 
      error: error.message 
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    });
  }
};
