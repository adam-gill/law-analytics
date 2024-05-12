/** @type {import('next').NextConfig} */
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
              value: "frame-ancestors 'self' https://fenix-ai-partner.domo.com/",
            },
            {
                key: 'Content-Security-Policy',
                value: "frame-ancestors 'self' https://dev-flrrksi5yy3p8j14.us.auth0.com/",
            }
          ],
        },
      ];
    },
  };
  