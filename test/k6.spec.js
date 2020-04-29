import { group, check } from "k6";
import http from "k6/http";

export let options = {
  vus: 5,
  duration: '30s',
};

export default function() {

  group('villain test', function() {
    let r = Math.random().toString(36).substring(7);

    group('check list of users', function() {
      let res = http.get(`${__ENV.MY_HOSTNAME}/v1/user`);
    
      check(res, {
        "is status 200": r => r.status === 200,
      });
    });

    // Create User
    group('Create user', function() {
      let payload = JSON.stringify({
        username: r,
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

    // Update User flow has 2 sequential reuqests
    group('Update user', function() {
      // Check if user exist
      let res3 = http.get(`${__ENV.MY_HOSTNAME}/v1/user`);
    
      check(res3, {
        "is status 200": r => r.status === 200,
      });

      // Update the user
      let payload = JSON.stringify({
        username: r,
        score: 100,
      });

      let params = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      let res2 = http.put(`${__ENV.MY_HOSTNAME}/v1/user`,payload, params);

      check(res2, {
        "image status 204": r => r.status === 204,
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