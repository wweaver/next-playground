const nextConfig = {
    trailingSlash: true,
    rewrites: async () => ({
        afterFiles: [
            {
                source: '/river/',
                destination: '/hub/river/',
            }
        ]
    })
};

module.exports = nextConfig;
