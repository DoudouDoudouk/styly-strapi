export default {
  routes: [
    {
      method: "GET",
      path: "/openapi.json",
      handler: "api-docs.openapiJson",
      config: {
        auth: false,
        policies: [],
        middlewares: [],
      },
    },
    {
      method: "GET",
      path: "/v:major(\\d+).:minor(\\d+).:patch(\\d+)/openapi.json",
      handler: "api-docs.openapiJson",
      config: {
        auth: false,
        middlewares: [],
        policies: [],
      },
    },
  ],
};
