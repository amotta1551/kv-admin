import { serveDir } from "https://deno.land/std@0.208.0/http/file_server.ts";

const app = {
  async fetch(request: Request) {
    const url = new URL(request.url);
    if (url.pathname.startsWith("/dump")) {
      return await serveDir(request, { fsRoot: "./dump" });
    }
    return new Response("KV Admin is running");
  },
};

export default app;
