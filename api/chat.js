export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

  if (req.method === "OPTIONS") return res.status(204).end();
  if (req.method !== "POST") return res.status(405).json({ error: { message: "Use POST" } });

  const key = process.env.ANTHROPIC_API_KEY || process.env.VITE_ANTHROPIC_API_KEY;
  if (!key) {
    return res.status(500).json({
      error: { message: "ANTHROPIC_API_KEY is not set. Add it to your Vercel project settings or your local Vercel dev environment." }
    });
  }

  const body = typeof req.body === "string" ? JSON.parse(req.body) : req.body || {};

  try {
    const upstream = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "accept": "application/json",
        "x-api-key": key,
        "anthropic-version": "2023-06-01"
      },
      body: JSON.stringify(body)
    });

    const contentType = upstream.headers.get("content-type") || "";
    const data = contentType.includes("application/json") ? await upstream.json() : { error: { message: await upstream.text() } };
    return res.status(upstream.status).json(data);
  } catch (err) {
    return res.status(502).json({
      error: { message: `Upstream call failed: ${err.message}` }
    });
  }
}