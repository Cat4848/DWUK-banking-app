import { Response } from "express";

export default function setHeaders(res: Response) {
  res.set("Access-Control-Allow-Origin", "https://herokuapp.com");
  res.set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.set("Access-Control-Allow-Headers", "Content-Type");
}
