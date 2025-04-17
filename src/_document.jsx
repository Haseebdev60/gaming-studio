import React from 'react';

// This file isn't used directly by Vite/React, but the concepts can be applied
// to the index.html and server handling to improve SEO and initial page load.

// The purpose is similar to Next.js _document.jsx to customize the initial HTML

// Note: For Vite, most of this configuration is done in:
// 1. index.html
// 2. vite.config.js 
// 3. static vercel.json for deployment

export default function Document() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0A0A14" />
        <meta
          name="description"
          content="PixelForge Studios - Crafting Worlds Beyond Imagination"
        />
        <title>PixelForge Studios | Crafting Worlds Beyond Imagination</title>
      </head>
      <body>
        <div id="root"></div>
      </body>
    </html>
  );
} 