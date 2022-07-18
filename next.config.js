const nextConfig = {
    trailingSlash: true,
    rewrites: function () {
        return {
            afterFiles: [
                {
                    source: '/river/',
                    destination: '/hub/river/',
                }
            ]
        }
    }
};

module.exports = nextConfig;
