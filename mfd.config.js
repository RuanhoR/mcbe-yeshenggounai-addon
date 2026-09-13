// @ts-check
import { defineConfig } from "@mbler/mfd";

export default defineConfig({
  title: { zh: "野生狗奶", en: "YeShengGouNai" },
  mcVersion: { min: "1.26.20", max: "1.26.40" },
  description: {
    zh: `# 野生狗奶

"野生狗奶..." —— Minecraft 基岩版模组，基于 [mbler](https://github.com/RuanhoR/mbler) 与 mcx 构建。

## 安装

选择与你的 Minecraft 版本匹配的 \`dist.mcaddon\` 下载后导入游戏即可。
`,
    en: `# YeShengGouNai

A "wild dog milk..." Minecraft Bedrock Edition addon, built with [mbler](https://github.com/RuanhoR/mbler) and mcx.

## Install

Download the \`dist.mcaddon\` matching your Minecraft version and import it into the game.
`,
  },
  entryAddonManifest: "/assets/manifest.addon.json",
  entryDistAddon: "/assets/dist.mcaddon",
  base: "/yeshenggounai/",
  distEntry: "./dist-page",
  addon: "./dist.mcaddon",
  port: 9527,
});
