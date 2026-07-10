import fs from "fs";
import path from "path";

export default function handler(req, res) {
  const filePath = path.join(process.cwd(), "data", "knowledge-base.json");

  if (!fs.existsSync(filePath)) {
    return res.status(404).json({ error: { message: "knowledge-base.json missing" } });
  }

  const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
  return res.status(200).json(data);
}