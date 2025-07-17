import { fileURLToPath } from "url";
import { resolve } from "path";
import fs from "fs";
import { build } from "esbuild";

/** @type {import('astro').AstroAdapter} */
export default function staticAdapter() {
  return {
    name: '@astrojs/adapter-static-manual',
    adapter: {
      name: '@astrojs/adapter-static-manual',
      serverEntrypoint: '@astrojs/adapter-static-manual/entry',
      exports: ['handler']
    }
  };
}