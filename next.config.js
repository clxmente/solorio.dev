/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/github",
        destination: "https://github.com/clxmente",
        permanent: true,
      },
      {
        source: "/linkedin",
        destination: "https://www.linkedin.com/in/clementesolorio/",
        permanent: true,
      },
      {
        source: "/twitter",
        destination: "https://twitter.com/clxmente",
        permanent: true,
      },
      {
        source: "/instagram",
        destination: "https://www.instagram.com/clxmente/",
        permanent: true,
      },
      {
        source: "/discord",
        destination: "https://discord.com/users/393069508027351051",
        permanent: true,
      },
      {
        source: "/spotify",
        destination: "https://open.spotify.com/user/udije5cy07hhruod1t8b9lb7b",
        permanent: true,
      },
    ];
  },
};
