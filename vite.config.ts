import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
const base = '/fisiopao/';

export default defineConfig(({ mode }) => ({
  base,
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      scope: base,
      base,
      includeAssets: ["favicon.ico", "og-image-fisiopao.svg", "og-image-fisiopao.png", "placeholder.svg", "robots.txt"],
      manifest: {
        name: "Fisiopao - Fisioterapia Domiciliaria en Tunja",
        short_name: "Fisiopao",
        description: "Fisioterapia domiciliaria profesional en Tunja, Boyacá. Atención personalizada en casa y virtual.",
        theme_color: "#22b8a0",
        background_color: "#ffffff",
        display: "standalone",
        start_url: base,
        icons: [
          {
            src: "favicon.ico",
            sizes: "64x64",
            type: "image/x-icon",
          },
        ],
      },
      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,svg,jpg,jpeg,webp,woff2}"],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: "StaleWhileRevalidate",
            options: {
              cacheName: "google-fonts-stylesheets",
              expiration: { maxEntries: 4, maxAgeSeconds: 60 * 60 * 24 * 365 },
            },
          },
          {
            urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
            handler: "StaleWhileRevalidate",
            options: {
              cacheName: "google-fonts-webfonts",
              expiration: { maxEntries: 30, maxAgeSeconds: 60 * 60 * 24 * 365 },
            },
          },
          {
            urlPattern: /^https:\/\/assets\.calendly\.com\/.*/i,
            handler: "StaleWhileRevalidate",
            options: {
              cacheName: "calendly-assets",
              expiration: { maxEntries: 10, maxAgeSeconds: 60 * 60 * 24 },
            },
          },
        ],
      },
    }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
