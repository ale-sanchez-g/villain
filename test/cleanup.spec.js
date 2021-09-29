import { group, check } from "k6";
import http from "k6/http";


export default function() {
let token = getToken();
let params = {
  headers: {
    'Content-Type': 'application/json',
    'Authorization': token,
  },
};

  group('Clean up users', function() {

    // Long user journey
    group('Delete users', function() {

      let dures = http.del(`${__ENV.MY_HOSTNAME}/v1/user`,null, params);

      check(dures, {
        "Delete users status 204": r => r.status === 204,
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
    "Application added status 200": r => r.status === 200,
  });
  return token;
}