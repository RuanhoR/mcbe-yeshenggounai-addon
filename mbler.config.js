// @ts-check
import { defineConfig } from "mbler";
// mbler config
// defineConfig is for IDE's auto-complete
export default defineConfig({
  // description: use in manifest generate
  description: "野生狗奶...MCBE",
  // mcVersion: work on ... mcbe version, e.g 1.26.32
  mcVersion: "1.26.40",
  displayName: "野生狗奶",
  // out code minfiy mode, support: "terser" | "esbuild | "oxc" | false , "terser" | "esbuild" need install on project
  minify: "oxc",
  // out to game in dev(env.BUILD_MODULE != release)
  outGameOnDev: true,
  archive: {
    enabled: false,
  },
  script: {
    main: "index.ts",
    ui: true,
    lang: "mcx",
    UseBeta: true,
  },
  build: {
    // should true
    bundle: true,
    cache: "file",
  },
  outdir: {
    resources: "./dist/res",
    behavior: "./dist/dep",
    // only emit on env.BUILD_MODULE == release
    dist: "./dist.mcaddon",
  },
});
