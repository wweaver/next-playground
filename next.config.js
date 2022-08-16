const nextConfig = {
    trailingSlash: true,
    outputFileTracing: false,
    poweredByHeader: false,
    redirects: async () => ([
        {
            source: '/hub/river/',
            destination: '/river/',
            statusCode: 301
        }
    ]),
    rewrites: async () => ({
        afterFiles: [
            {
                source: '/river/',
                destination: '/hub/river/'
            }
        ]
    })
};

module.exports = nextConfig;
