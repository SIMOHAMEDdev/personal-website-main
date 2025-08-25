import { createSitemap } from 'react-router-sitemap';

const sitemap = createSitemap({
  baseUrl: 'https://simohamed.netlify.app/', // Your domain URL
  routes: [
    { loc: '/', changefreq: 'daily', priority: 1.0 }, // Your single page URL
  ],
});

// Save the sitemap XML data to a file during build
console.log(sitemap.toString());