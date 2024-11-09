import { createServer } from "node:http";
import { getJson } from "serpapi";

const hostname = "127.0.0.1";
const port = 3000;

const server = createServer(async (req, res) => {
  const allowed_domain = "*"; // Adjust with your domain or localhost port
  res.setHeader("Access-Control-Allow-Origin", allowed_domain);
  res.setHeader("Access-Control-Allow-Methods", "GET");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  const url = new URL(req.url, `http://${req.headers.host}`);
  const searchParams = url.searchParams;
  const query = searchParams.get("query");
  const location = searchParams.get("location");

  try {
    const response = await getJson({
      engine: "google",
      api_key:
        "", // Get your API_KEY first
      q: query,
      location: location,
    });

    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(response));
  } catch (error) {
    res.statusCode = 500;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ error: error.message }));
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
