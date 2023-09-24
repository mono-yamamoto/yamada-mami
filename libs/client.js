import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: "yamada-mami",
  apiKey: process.env.API_KEY,
});