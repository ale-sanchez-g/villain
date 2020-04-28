import { group, check } from "k6";
import http from "k6/http";

export default function() {

  group('villain check', function() {
    group('check villain', function() {
      let res = http.get(`${__ENV.MY_HOSTNAME}/v1/user`);
    
      check(res, {
        "is status 200": r => r.status === 200,
      });
      });
    group('check villain image 1', function() {
      let payload = JSON.stringify({
        username: 'aaa',
        score: 0,
      });

      let params = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      let res2 = http.post(`${__ENV.MY_HOSTNAME}/v1/user`,payload, params);

      check(res2, {
        "image status 201": r => r.status === 201,
      });
    });
    group('check api-doc', function() {
      let res3 = http.get(`${__ENV.MY_HOSTNAME}/api-docs`);
    
      check(res3, {
        "is status 200": r => r.status === 200,
      });
      });
  });
}