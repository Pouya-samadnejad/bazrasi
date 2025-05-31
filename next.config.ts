// next.config.js
module.exports = {
  images: {
    domains: ["136.bazresi.ir"],
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/main",
        permanent: true,
      },
    ];
  },
};
