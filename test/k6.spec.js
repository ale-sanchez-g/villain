import { check } from "k6";
import http from "k6/http";

export default function() {
  let res = http.get("http://localhost:3000/villain");
  let bJSNO = JSON.parse(res.body);

  check(res, {
    "is status 200": r => r.status === 200,
    "body has corona": bJSNO[0].type === "covid19"
  });
}