import Module from "node:module";

const originalResolveFilename = Module._resolveFilename;
Module._resolveFilename = function (request, parent, isMain, options) {
  if (request === "typescript" || request.startsWith("typescript/")) {
    request = request.replace(/^typescript/, "@typescript/typescript6");
  }
  return originalResolveFilename.call(this, request, parent, isMain, options);
};

const { default: nextConfig } = await import("eslint-config-next");

const config = [
  ...nextConfig,
];

export default config;
