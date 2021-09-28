import { sleep } from 'k6';
import { group, check } from "k6";
import http from "k6/http";
import { randomIntBetween } from "https://jslib.k6.io/k6-utils/1.1.0/index.js";

export let options = {
  stages: [
    { duration: '5m', target: 10 },
    { duration: '5m', target: 20 },
    { duration: '5m', target: 0 },
  ],
  thresholds: {
    http_req_failed: ['rate<0.01'],   // http errors should be less than 1% 
    http_req_duration: ['p(95)<70'], // 95% of requests should be below 50ms
  },
};

export default function() {
let token = getToken();
let params = {
  headers: {
    'Content-Type': 'application/json',
    'Authorization': token,
  },
};

  group('villain test', function() {
    let r = Math.random().toString(36).substring(7);

    // Long user journey
    group('Create user', function() {
      let payload = JSON.stringify({
        username: r,
        score: 0,
      });

      let cures = http.post(`${__ENV.MY_HOSTNAME}/v1/user`,payload, params);

      check(cures, {
        "Create user status 201": r => r.status === 201,
      });

      var times = 10;
      for(var i=0; i < times; i++){
        sleep(randomIntBetween(10, 20));

        let uures = http.put(`${__ENV.MY_HOSTNAME}/v1/user`,payload, params);

        check(uures, {
          "Update user status 204": r => r.status === 204,
        });
      }

      sleep(randomIntBetween(10, 20));

      let gures = http.get(`${__ENV.MY_HOSTNAME}/v1/user`, params);

      check(gures, {
        "Get list of users status 200": r => r.status === 200,
      });

    });

  });
};

function getToken () {
  let params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  let r = Math.random().toString(36).substring(7);
  let payload = JSON.stringify({
    key: r,
  });
  let authres = http.post(`${__ENV.MY_HOSTNAME}/auth/gentoken`,payload, params);
  let token = authres.json().token;
  check(authres, {
    "Create user status 200": r => r.status === 200,
  });
  return token;
}