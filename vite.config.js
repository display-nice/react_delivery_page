import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";
import { fileURLToPath } from "node:url";

const rootDir = path.dirname(fileURLToPath(import.meta.url));
const resolvePath = (relativePath) => path.resolve(rootDir, relativePath);

export default defineConfig(({ command, isPreview }) => ({
	plugins: [react()],
	// На GitHub Pages проект доступен по вложенному пути,
	// в dev-режиме удобнее корень сайта. Preview показывает
	// production-сборку, поэтому использует тот же base, что и build.
	base: command === "build" || isPreview ? "/react_delivery_page/" : "/",
	// Явно слушаем IPv4: на Windows Vite по умолчанию может занять только ::1,
	// и браузер по адресу localhost/127.0.0.1 получает отказ в соединении.
	server: {
		host: "127.0.0.1",
	},
	preview: {
		host: "127.0.0.1",
	},
	resolve: {
		alias: {
			"@components": resolvePath("src/components"),
			"@css": resolvePath("src/visuals/css"),
			"@fonts": resolvePath("src/visuals/fonts"),
			"@img": resolvePath("src/visuals/img"),
			"@utils": resolvePath("src/utils"),
			"@services": resolvePath("src/services"),
			"@ui": resolvePath("src/ui"),
			"@deliveryPage": resolvePath("src/pages/DeliveryPage"),
			"@pickupModule": resolvePath("src/pages/DeliveryPage/modules/Pickup"),
			"@deliveryModule": resolvePath("src/pages/DeliveryPage/modules/Delivery"),
		},
	},
}));
