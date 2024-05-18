/** @type {import('next').NextConfig} */

const cspHeader = `

    frame-src https://fenix-ai-partner.domo.com https://dev-flrrksi5yy3p8j14.us.auth0.com https://embed.domo.com;
    frame-ancestors 'self' https://fenix-ai-partner.domo.com 'self' https://dev-flrrksi5yy3p8j14.us.auth0.com https://embed.domo.com;
`


// trying to edit CSP to allow iframes here 
// https://nextjs.org/docs/app/building-your-application/configuring/content-security-policy#adding-a-nonce-with-middleware
// https://stackoverflow.com/questions/63989613/how-to-allow-all-frame-ancestors-with-csp-header

export default {
    reactStrictMode: true,
    // ... other configurations (if any)
    async headers() {
      return [
        {
          source: '/(.*)',
          headers: [
            {
              key: 'Content-Security-Policy',
              value: cspHeader.replace(/\n/g, ''),
            },
          ],
        },
      ]
    },
  };
  