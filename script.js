import http from "k6/http";
import { sleep } from "k6";

export let options = {
  vus: 100,
  rps: 1000,
  duration: "30s"
};

export default function() {
  let id = Math.floor(Math.random() * 10000000);
  http.get(`http://localhost:3100/popular/${id}`)
};