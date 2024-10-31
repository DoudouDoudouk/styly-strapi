/**
 * A set of functions called "actions" for `api-docs`
 */
import fs from "fs";
import path from "path";

export default {
  openapiJson: async (ctx, next) => {
    try {
      const { major, minor, patch } = ctx.params;
      const version =
        major && minor && patch
          ? `${major}.${minor}.${patch}`
          : strapi
              .plugin("documentation")
              .service("documentation")
              .getDocumentationVersion();

      const openAPISpecsPath = path.join(
        strapi.dirs.app.extensions,
        "documentation",
        "documentation",
        version,
        "full_documentation.json"
      );

      try {
        const documentation = fs.readFileSync(openAPISpecsPath, "utf8");
        const response = JSON.parse(documentation);

        ctx.send(response);
      } catch (e) {
        strapi.log.error(e);
        ctx.badRequest(null, e.message);
      }
    } catch (e) {
      strapi.log.error(e);
    }
  },
};
