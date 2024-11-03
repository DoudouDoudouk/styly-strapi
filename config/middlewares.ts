export default [
  "strapi::logger",
  "strapi::errors",
  "strapi::security",
  "strapi::cors",
  "strapi::poweredBy",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "script-src": [
            "'self'",
            "https://cdn.ckeditor.com",
            "http://13.36.34.5:1337",
            "'unsafe-inline'",
          ],
          "script-src-elem": [
            "'self'",
            "https://cdn.ckeditor.com",
            "http://13.36.34.5:1337",
            "'unsafe-inline'",
          ],
          "connect-src": ["'self'", "http://13.36.34.5:1337"],
        },
      },
    },
  },
];
