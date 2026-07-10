import fs from "fs";
import path from "path";

export default function handler(req, res) {
  const { id } = req.query;

  if (!/^[a-zA-Z0-9_-]{1,40}$/.test(id)) {
    return res.status(400).json({ error: { message: "Invalid client id" } });
  }

  const filePath = path.join(process.cwd(), "data", "clients", `${id}.json`);

  if (!fs.existsSync(filePath)) {
    return res.status(404).json({ error: { message: `No client named ${id}` } });
  }

  const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
  return res.status(200).json(data);
}