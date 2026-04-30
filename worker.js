export default {
async fetch(request) {
if (request.method === “OPTIONS”) {
return new Response(null, {
headers: {
“Access-Control-Allow-Origin”: “*”,
“Access-Control-Allow-Methods”: “POST, OPTIONS”,
“Access-Control-Allow-Headers”: “Content-Type”,
}
});
}

```
const body = await request.json();
const { text, voiceId } = body;

const res = await fetch(
  `https://api.elevenlabs.io/v1/text-to-speech/${voiceId}/stream`,
  {
    method: "POST",
    headers: {
      "xi-api-key": "sk_5bf56ca34467ff22160b2940bf92752264354037363cb06c",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      text,
      model_id: "eleven_turbo_v2",
      voice_settings: { stability: 0.5, similarity_boost: 0.75 }
    })
  }
);

return new Response(res.body, {
  headers: {
    "Content-Type": "audio/mpeg",
    "Access-Control-Allow-Origin": "*",
  }
});
```

}
};
