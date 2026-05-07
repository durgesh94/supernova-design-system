import { defineConfig } from "tsup";
import { glob } from "glob";
import path from "path";

const getEntryPoints = async () => {
  const files = await glob("src/components/**/[!.]*.tsx", {
    ignore: "**/*.stories.tsx",
  });
  return files;
};

export default defineConfig(async (options) => ({
  entryPoints: await getEntryPoints(),
  format: ["cjs", "esm"],
  dts: true,
  external: ["react"],
  splitting: true,
  sourcemap: true,
  clean: true,
  ...options,
}));
