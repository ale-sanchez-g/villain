import { group, check } from "k6";
import http from "k6/http";

export default function() {

  group('villain check', function() {
    group('check villain', function() {
      let res = http.get(`${__ENV.MY_HOSTNAME}/villain`);
      let bJSNO = JSON.parse(res.body);
    
      check(res, {
        "is status 200": r => r.status === 200,
        "body has corona": bJSNO[0].type === "covid19",
        "body has image1": bJSNO[0].images[0].id === 1,
        "body has image2": bJSNO[0].images[1].id === 2
      });
      });
    group('check villain image 1', function() {
      let res2 = http.get(`${__ENV.MY_HOSTNAME}/img/covid19_1.jpg`);

      check(res2, {
        "image status 200": r => r.status === 200,
        "body size is 37587 bytes": r => r.body.length == 37587
      });
    });
    group('check villain image 2', function() {
      let res3 = http.get(`${__ENV.MY_HOSTNAME}/img/covid19_2.jpg`);
      console.log(res3.body.length);
      check(res3, {
        "image status 200": r => r.status === 200,
        "body size is 60856 bytes": r => r.body.length == 60856
      });
    });
  });
}