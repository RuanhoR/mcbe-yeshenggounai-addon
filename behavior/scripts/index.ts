import App from "./app.mcx";
import "./Items.mcx";
import { createApp } from "@mbler/mcx";
import { world } from "@minecraft/server";
createApp(App).mount(world);
