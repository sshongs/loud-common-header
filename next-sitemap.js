/** @type {import('next-sitemap').IConfig} */

module.exports = {
    siteUrl: process.env.APP_WEBSITE_URL || 'http://localhost',
    generateRobotsTxt: true, 
  }