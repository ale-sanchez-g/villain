// Creator: WebInspector 537.36

import { sleep, group } from "k6";
import http from "k6/http";
import { randomIntBetween } from "https://jslib.k6.io/k6-utils/1.1.0/index.js";

export let options = {
  stages: [{ duration: "60s", target: 20 }],
  thresholds: {
    http_req_failed: ['rate<0.01'],   // http errors should be less than 1% 
    http_req_duration: ['p(95)<1700'], // 95% of requests should be below 1.7 seconds
  },
};
export default function main() {
  let randName = Math.random().toString(36).substring(7);
  let response;

  response = http.post(
    "https://responsivefight.herokuapp.com/api/adduser",
    {
      username: randName,
      score: "0",
    },
    {
      headers: {
        Host: "responsivefight.herokuapp.com",
        Connection: "keep-alive",
        "sec-ch-ua":
          '"Google Chrome";v="93", " Not;A Brand";v="99", "Chromium";v="93"',
        Accept: "*/*",
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        "X-Requested-With": "XMLHttpRequest",
        "sec-ch-ua-mobile": "?1",
        "User-Agent":
          "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Mobile Safari/537.36",
        "sec-ch-ua-platform": '"Android"',
        Origin: "https://responsivefight.herokuapp.com",
        "Sec-Fetch-Site": "same-origin",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Dest": "empty",
        Referer: "https://responsivefight.herokuapp.com/",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "en-AU,en;q=0.9,es;q=0.8",
      },
    }
  );
  
  sleep(randomIntBetween(3, 5));

  response = http.post(
    "https://responsivefight.herokuapp.com/api/userstage",
    {
      username: randName,
      stage: "news_1",
    },
    {
      headers: {
        Host: "responsivefight.herokuapp.com",
        Connection: "keep-alive",
        "sec-ch-ua":
          '"Google Chrome";v="93", " Not;A Brand";v="99", "Chromium";v="93"',
        Accept: "*/*",
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        "X-Requested-With": "XMLHttpRequest",
        "sec-ch-ua-mobile": "?1",
        "User-Agent":
          "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Mobile Safari/537.36",
        "sec-ch-ua-platform": '"Android"',
        Origin: "https://responsivefight.herokuapp.com",
        "Sec-Fetch-Site": "same-origin",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Dest": "empty",
        Referer: "https://responsivefight.herokuapp.com/",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "en-AU,en;q=0.9,es;q=0.8",
      },
    }
  );

  sleep(randomIntBetween(3, 5));

  group("page_1 - https://responsivefight.herokuapp.com/covid", function () {
    response = http.get("https://responsivefight.herokuapp.com/covid", {
      headers: {
        Host: "responsivefight.herokuapp.com",
        Connection: "keep-alive",
        "sec-ch-ua":
          '"Google Chrome";v="93", " Not;A Brand";v="99", "Chromium";v="93"',
        "sec-ch-ua-mobile": "?1",
        "sec-ch-ua-platform": '"Android"',
        "Upgrade-Insecure-Requests": "1",
        "User-Agent":
          "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Mobile Safari/537.36",
        Accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
        "Sec-Fetch-Site": "same-origin",
        "Sec-Fetch-Mode": "navigate",
        "Sec-Fetch-User": "?1",
        "Sec-Fetch-Dest": "document",
        Referer: "https://responsivefight.herokuapp.com/",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "en-AU,en;q=0.9,es;q=0.8",
        "If-None-Match": 'W/"18ec-YP6/1YZ8teex4aDuGPd/9o3iIeM"',
      },
    });
    response = http.get(
      "https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css",
      {
        headers: {
          "sec-ch-ua":
            '"Google Chrome";v="93", " Not;A Brand";v="99", "Chromium";v="93"',
          Referer: "https://responsivefight.herokuapp.com/",
          "sec-ch-ua-mobile": "?1",
          "User-Agent":
            "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Mobile Safari/537.36",
          "sec-ch-ua-platform": '"Android"',
        },
      }
    );
    response = http.get(
      "https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js",
      {
        headers: {
          "sec-ch-ua":
            '"Google Chrome";v="93", " Not;A Brand";v="99", "Chromium";v="93"',
          Referer: "https://responsivefight.herokuapp.com/",
          "sec-ch-ua-mobile": "?1",
          "User-Agent":
            "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Mobile Safari/537.36",
          "sec-ch-ua-platform": '"Android"',
        },
      }
    );
    response = http.get(
      "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js",
      {
        headers: {
          "sec-ch-ua":
            '"Google Chrome";v="93", " Not;A Brand";v="99", "Chromium";v="93"',
          Referer: "https://responsivefight.herokuapp.com/",
          Origin: "https://responsivefight.herokuapp.com",
          "sec-ch-ua-mobile": "?1",
          "User-Agent":
            "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Mobile Safari/537.36",
          "sec-ch-ua-platform": '"Android"',
        },
      }
    );
    response = http.get(
      "https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js",
      {
        headers: {
          "sec-ch-ua":
            '"Google Chrome";v="93", " Not;A Brand";v="99", "Chromium";v="93"',
          Referer: "https://responsivefight.herokuapp.com/",
          "sec-ch-ua-mobile": "?1",
          "User-Agent":
            "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Mobile Safari/537.36",
          "sec-ch-ua-platform": '"Android"',
        },
      }
    );
    response = http.get("https://responsivefight.herokuapp.com/covid.css", {
      headers: {
        Host: "responsivefight.herokuapp.com",
        Connection: "keep-alive",
        "sec-ch-ua":
          '"Google Chrome";v="93", " Not;A Brand";v="99", "Chromium";v="93"',
        "sec-ch-ua-mobile": "?1",
        "User-Agent":
          "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Mobile Safari/537.36",
        "sec-ch-ua-platform": '"Android"',
        Accept: "text/css,*/*;q=0.1",
        "Sec-Fetch-Site": "same-origin",
        "Sec-Fetch-Mode": "no-cors",
        "Sec-Fetch-Dest": "style",
        Referer: "https://responsivefight.herokuapp.com/covid",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "en-AU,en;q=0.9,es;q=0.8",
        "If-None-Match": 'W/"186d-17c0db2b8c8"',
        "If-Modified-Since": "Wed, 22 Sep 2021 13:29:49 GMT",
      },
    });
    response = http.get(
      "https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Montserrat&family=Patua+One&family=Roboto&display=swap&family=Alfa%2BSlab%2BOne&family=Montserrat&family=Patua%2BOne&family=Roboto",
      {
        headers: {
          "sec-ch-ua":
            '"Google Chrome";v="93", " Not;A Brand";v="99", "Chromium";v="93"',
          Referer: "",
          "sec-ch-ua-mobile": "?1",
          "User-Agent":
            "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Mobile Safari/537.36",
          "sec-ch-ua-platform": '"Android"',
        },
      }
    );
    response = http.get(
      "https://responsivefight.herokuapp.com/assets/covidmap.jpg",
      {
        headers: {
          Host: "responsivefight.herokuapp.com",
          Connection: "keep-alive",
          "sec-ch-ua":
            '"Google Chrome";v="93", " Not;A Brand";v="99", "Chromium";v="93"',
          "sec-ch-ua-mobile": "?1",
          "User-Agent":
            "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Mobile Safari/537.36",
          "sec-ch-ua-platform": '"Android"',
          Accept:
            "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
          "Sec-Fetch-Site": "same-origin",
          "Sec-Fetch-Mode": "no-cors",
          "Sec-Fetch-Dest": "image",
          Referer: "https://responsivefight.herokuapp.com/covid",
          "Accept-Encoding": "gzip, deflate, br",
          "Accept-Language": "en-AU,en;q=0.9,es;q=0.8",
          Range: "bytes=104537-104537",
          "If-Range": 'W/"7c72f-17c0db2b8c8"',
        },
      }
    );
    response = http.get(
      "https://responsivefight.herokuapp.com/assets/dynamic_thumbnail.jpg",
      {
        headers: {
          Host: "responsivefight.herokuapp.com",
          Connection: "keep-alive",
          "sec-ch-ua":
            '"Google Chrome";v="93", " Not;A Brand";v="99", "Chromium";v="93"',
          "sec-ch-ua-mobile": "?1",
          "User-Agent":
            "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Mobile Safari/537.36",
          "sec-ch-ua-platform": '"Android"',
          Accept:
            "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
          "Sec-Fetch-Site": "same-origin",
          "Sec-Fetch-Mode": "no-cors",
          "Sec-Fetch-Dest": "image",
          Referer: "https://responsivefight.herokuapp.com/covid",
          "Accept-Encoding": "gzip, deflate, br",
          "Accept-Language": "en-AU,en;q=0.9,es;q=0.8",
          "If-None-Match": 'W/"622c5-17c0db2b8c8"',
          "If-Modified-Since": "Wed, 22 Sep 2021 13:29:49 GMT",
        },
      }
    );
    response = http.get(
      "https://responsivefight.herokuapp.com/assets/bus_thumbnail.jpg",
      {
        headers: {
          Host: "responsivefight.herokuapp.com",
          Connection: "keep-alive",
          "sec-ch-ua":
            '"Google Chrome";v="93", " Not;A Brand";v="99", "Chromium";v="93"',
          "sec-ch-ua-mobile": "?1",
          "User-Agent":
            "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Mobile Safari/537.36",
          "sec-ch-ua-platform": '"Android"',
          Accept:
            "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
          "Sec-Fetch-Site": "same-origin",
          "Sec-Fetch-Mode": "no-cors",
          "Sec-Fetch-Dest": "image",
          Referer: "https://responsivefight.herokuapp.com/covid",
          "Accept-Encoding": "gzip, deflate, br",
          "Accept-Language": "en-AU,en;q=0.9,es;q=0.8",
          "If-None-Match": 'W/"184825-17c0db2b8c8"',
          "If-Modified-Since": "Wed, 22 Sep 2021 13:29:49 GMT",
        },
      }
    );
    response = http.get(
      "https://responsivefight.herokuapp.com/assets/restaurant_thumbnail.jpg",
      {
        headers: {
          Host: "responsivefight.herokuapp.com",
          Connection: "keep-alive",
          "sec-ch-ua":
            '"Google Chrome";v="93", " Not;A Brand";v="99", "Chromium";v="93"',
          "sec-ch-ua-mobile": "?1",
          "User-Agent":
            "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Mobile Safari/537.36",
          "sec-ch-ua-platform": '"Android"',
          Accept:
            "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
          "Sec-Fetch-Site": "same-origin",
          "Sec-Fetch-Mode": "no-cors",
          "Sec-Fetch-Dest": "image",
          Referer: "https://responsivefight.herokuapp.com/covid",
          "Accept-Encoding": "gzip, deflate, br",
          "Accept-Language": "en-AU,en;q=0.9,es;q=0.8",
          "If-None-Match": 'W/"127393-17c0db2b8c8"',
          "If-Modified-Since": "Wed, 22 Sep 2021 13:29:49 GMT",
        },
      }
    );
    response = http.get(
      "https://responsivefight.herokuapp.com/assets/office_thumbnail.jpg",
      {
        headers: {
          Host: "responsivefight.herokuapp.com",
          Connection: "keep-alive",
          "sec-ch-ua":
            '"Google Chrome";v="93", " Not;A Brand";v="99", "Chromium";v="93"',
          "sec-ch-ua-mobile": "?1",
          "User-Agent":
            "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Mobile Safari/537.36",
          "sec-ch-ua-platform": '"Android"',
          Accept:
            "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
          "Sec-Fetch-Site": "same-origin",
          "Sec-Fetch-Mode": "no-cors",
          "Sec-Fetch-Dest": "image",
          Referer: "https://responsivefight.herokuapp.com/covid",
          "Accept-Encoding": "gzip, deflate, br",
          "Accept-Language": "en-AU,en;q=0.9,es;q=0.8",
          "If-None-Match": 'W/"91d7-17c0db2b8c8"',
          "If-Modified-Since": "Wed, 22 Sep 2021 13:29:49 GMT",
        },
      }
    );
    response = http.get(
      "https://responsivefight.herokuapp.com/scripts/covid.js",
      {
        headers: {
          Host: "responsivefight.herokuapp.com",
          Connection: "keep-alive",
          "sec-ch-ua":
            '"Google Chrome";v="93", " Not;A Brand";v="99", "Chromium";v="93"',
          "sec-ch-ua-mobile": "?1",
          "User-Agent":
            "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Mobile Safari/537.36",
          "sec-ch-ua-platform": '"Android"',
          Accept: "*/*",
          "Sec-Fetch-Site": "same-origin",
          "Sec-Fetch-Mode": "no-cors",
          "Sec-Fetch-Dest": "script",
          Referer: "https://responsivefight.herokuapp.com/covid",
          "Accept-Encoding": "gzip, deflate, br",
          "Accept-Language": "en-AU,en;q=0.9,es;q=0.8",
          "If-None-Match": 'W/"13b-17c0db2b8c8"',
          "If-Modified-Since": "Wed, 22 Sep 2021 13:29:49 GMT",
        },
      }
    );
    response = http.get(
      "https://fonts.gstatic.com/s/alfaslabone/v10/6NUQ8FmMKwSEKjnm5-4v-4Jh2dJhe_escmA.woff2",
      {
        headers: {
          "sec-ch-ua":
            '"Google Chrome";v="93", " Not;A Brand";v="99", "Chromium";v="93"',
          Referer: "https://fonts.googleapis.com/",
          Origin: "https://responsivefight.herokuapp.com",
          "sec-ch-ua-mobile": "?1",
          "User-Agent":
            "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Mobile Safari/537.36",
          "sec-ch-ua-platform": '"Android"',
        },
      }
    );
    response = http.get(
      "https://fonts.gstatic.com/s/roboto/v29/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2",
      {
        headers: {
          "sec-ch-ua":
            '"Google Chrome";v="93", " Not;A Brand";v="99", "Chromium";v="93"',
          origin: "https://responsivefight.herokuapp.com",
          "sec-ch-ua-mobile": "?1",
          "user-agent":
            "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Mobile Safari/537.36",
          "sec-ch-ua-platform": '"Android"',
          accept: "*/*",
          "x-client-data":
            "CIu2yQEIorbJAQjEtskBCKmdygEI7/LLAQiz+MsBCJ75ywEIv/7LAQie/8sBCOqDzAEIzITMAQjdhMwBGOKgywE=",
          "sec-fetch-site": "cross-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "font",
          referer: "https://fonts.googleapis.com/",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-AU,en;q=0.9,es;q=0.8",
        },
      }
    );
    response = http.get(
      "https://fonts.gstatic.com/s/montserrat/v18/JTUSjIg1_i6t8kCHKm459WlhyyTh89Y.woff2",
      {
        headers: {
          "sec-ch-ua":
            '"Google Chrome";v="93", " Not;A Brand";v="99", "Chromium";v="93"',
          Referer: "https://fonts.googleapis.com/",
          Origin: "https://responsivefight.herokuapp.com",
          "sec-ch-ua-mobile": "?1",
          "User-Agent":
            "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Mobile Safari/537.36",
          "sec-ch-ua-platform": '"Android"',
        },
      }
    );
  });

  sleep(randomIntBetween(5, 10));

  
  group("page_2 - https://responsivefight.herokuapp.com/bus", function () {
    response = http.get("https://responsivefight.herokuapp.com/bus", {
      headers: {
        Host: "responsivefight.herokuapp.com",
        Connection: "keep-alive",
        "sec-ch-ua":
          '"Google Chrome";v="93", " Not;A Brand";v="99", "Chromium";v="93"',
        "sec-ch-ua-mobile": "?1",
        "sec-ch-ua-platform": '"Android"',
        "Upgrade-Insecure-Requests": "1",
        "User-Agent":
          "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Mobile Safari/537.36",
        Accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
        "Sec-Fetch-Site": "same-origin",
        "Sec-Fetch-Mode": "navigate",
        "Sec-Fetch-User": "?1",
        "Sec-Fetch-Dest": "document",
        Referer: "https://responsivefight.herokuapp.com/covid",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "en-AU,en;q=0.9,es;q=0.8",
        "If-None-Match": 'W/"220c-BsTPlCzC/o4wQQj+Ai6St3RN/oQ"',
      },
    });

    response = http.get(
      "https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css",
      {
        headers: {
          "sec-ch-ua":
            '"Google Chrome";v="93", " Not;A Brand";v="99", "Chromium";v="93"',
          Referer: "https://responsivefight.herokuapp.com/",
          "sec-ch-ua-mobile": "?1",
          "User-Agent":
            "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Mobile Safari/537.36",
          "sec-ch-ua-platform": '"Android"',
        },
      }
    );

    response = http.get(
      "https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js",
      {
        headers: {
          "sec-ch-ua":
            '"Google Chrome";v="93", " Not;A Brand";v="99", "Chromium";v="93"',
          Referer: "https://responsivefight.herokuapp.com/",
          "sec-ch-ua-mobile": "?1",
          "User-Agent":
            "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Mobile Safari/537.36",
          "sec-ch-ua-platform": '"Android"',
        },
      }
    );

    response = http.get(
      "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js",
      {
        headers: {
          "sec-ch-ua":
            '"Google Chrome";v="93", " Not;A Brand";v="99", "Chromium";v="93"',
          Referer: "https://responsivefight.herokuapp.com/",
          Origin: "https://responsivefight.herokuapp.com",
          "sec-ch-ua-mobile": "?1",
          "User-Agent":
            "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Mobile Safari/537.36",
          "sec-ch-ua-platform": '"Android"',
        },
      }
    );

    response = http.get(
      "https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js",
      {
        headers: {
          "sec-ch-ua":
            '"Google Chrome";v="93", " Not;A Brand";v="99", "Chromium";v="93"',
          Referer: "https://responsivefight.herokuapp.com/",
          "sec-ch-ua-mobile": "?1",
          "User-Agent":
            "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Mobile Safari/537.36",
          "sec-ch-ua-platform": '"Android"',
        },
      }
    );

    response = http.get("https://responsivefight.herokuapp.com/covid.css", {
      headers: {
        Host: "responsivefight.herokuapp.com",
        Connection: "keep-alive",
        "sec-ch-ua":
          '"Google Chrome";v="93", " Not;A Brand";v="99", "Chromium";v="93"',
        "sec-ch-ua-mobile": "?1",
        "User-Agent":
          "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Mobile Safari/537.36",
        "sec-ch-ua-platform": '"Android"',
        Accept: "text/css,*/*;q=0.1",
        "Sec-Fetch-Site": "same-origin",
        "Sec-Fetch-Mode": "no-cors",
        "Sec-Fetch-Dest": "style",
        Referer: "https://responsivefight.herokuapp.com/bus",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "en-AU,en;q=0.9,es;q=0.8",
        "If-None-Match": 'W/"186d-17c0db2b8c8"',
        "If-Modified-Since": "Wed, 22 Sep 2021 13:29:49 GMT",
      },
    });

    response = http.get(
      "https://responsivefight.herokuapp.com/assets/bus_battle.jpg",
      {
        headers: {
          Host: "responsivefight.herokuapp.com",
          Connection: "keep-alive",
          "sec-ch-ua":
            '"Google Chrome";v="93", " Not;A Brand";v="99", "Chromium";v="93"',
          "sec-ch-ua-mobile": "?1",
          "User-Agent":
            "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Mobile Safari/537.36",
          "sec-ch-ua-platform": '"Android"',
          Accept:
            "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
          "Sec-Fetch-Site": "same-origin",
          "Sec-Fetch-Mode": "no-cors",
          "Sec-Fetch-Dest": "image",
          Referer: "https://responsivefight.herokuapp.com/bus",
          "Accept-Encoding": "gzip, deflate, br",
          "Accept-Language": "en-AU,en;q=0.9,es;q=0.8",
          "If-None-Match": 'W/"39456-17c0db2b8c8"',
          "If-Modified-Since": "Wed, 22 Sep 2021 13:29:49 GMT",
        },
      }
    );

    response = http.get(
      "https://responsivefight.herokuapp.com/assets/bus_intro.jpg",
      {
        headers: {
          Host: "responsivefight.herokuapp.com",
          Connection: "keep-alive",
          "sec-ch-ua":
            '"Google Chrome";v="93", " Not;A Brand";v="99", "Chromium";v="93"',
          "sec-ch-ua-mobile": "?1",
          "User-Agent":
            "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Mobile Safari/537.36",
          "sec-ch-ua-platform": '"Android"',
          Accept:
            "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
          "Sec-Fetch-Site": "same-origin",
          "Sec-Fetch-Mode": "no-cors",
          "Sec-Fetch-Dest": "image",
          Referer: "https://responsivefight.herokuapp.com/bus",
          "Accept-Encoding": "gzip, deflate, br",
          "Accept-Language": "en-AU,en;q=0.9,es;q=0.8",
          "If-None-Match": 'W/"10b4e3-17c0db2b8c8"',
          "If-Modified-Since": "Wed, 22 Sep 2021 13:29:49 GMT",
        },
      }
    );

    response = http.get(
      "https://www.who.int/images/default-source/health-topics/coronavirus/eng-mythbusting-ncov-(19).tmb-1920v.png",
      {
        headers: {
          "sec-ch-ua":
            '"Google Chrome";v="93", " Not;A Brand";v="99", "Chromium";v="93"',
          Referer: "https://responsivefight.herokuapp.com/",
          "sec-ch-ua-mobile": "?1",
          "User-Agent":
            "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Mobile Safari/537.36",
          "sec-ch-ua-platform": '"Android"',
        },
      }
    );

    response = http.get(
      "https://responsivefight.herokuapp.com/assets/cough_fail.jpg",
      {
        headers: {
          Host: "responsivefight.herokuapp.com",
          Connection: "keep-alive",
          "sec-ch-ua":
            '"Google Chrome";v="93", " Not;A Brand";v="99", "Chromium";v="93"',
          "sec-ch-ua-mobile": "?1",
          "User-Agent":
            "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Mobile Safari/537.36",
          "sec-ch-ua-platform": '"Android"',
          Accept:
            "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
          "Sec-Fetch-Site": "same-origin",
          "Sec-Fetch-Mode": "no-cors",
          "Sec-Fetch-Dest": "image",
          Referer: "https://responsivefight.herokuapp.com/bus",
          "Accept-Encoding": "gzip, deflate, br",
          "Accept-Language": "en-AU,en;q=0.9,es;q=0.8",
          "If-None-Match": 'W/"3a376-17c0db2b8c8"',
          "If-Modified-Since": "Wed, 22 Sep 2021 13:29:49 GMT",
        },
      }
    );

    response = http.get(
      "https://responsivefight.herokuapp.com/assets/covid_timer.jpg",
      {
        headers: {
          Host: "responsivefight.herokuapp.com",
          Connection: "keep-alive",
          "sec-ch-ua":
            '"Google Chrome";v="93", " Not;A Brand";v="99", "Chromium";v="93"',
          "sec-ch-ua-mobile": "?1",
          "User-Agent":
            "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Mobile Safari/537.36",
          "sec-ch-ua-platform": '"Android"',
          Accept:
            "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
          "Sec-Fetch-Site": "same-origin",
          "Sec-Fetch-Mode": "no-cors",
          "Sec-Fetch-Dest": "image",
          Referer: "https://responsivefight.herokuapp.com/bus",
          "Accept-Encoding": "gzip, deflate, br",
          "Accept-Language": "en-AU,en;q=0.9,es;q=0.8",
          "If-None-Match": 'W/"3621e-17c0db2b8c8"',
          "If-Modified-Since": "Wed, 22 Sep 2021 13:29:49 GMT",
        },
      }
    );

    response = http.get(
      "https://responsivefight.herokuapp.com/scripts/bus.js",
      {
        headers: {
          Host: "responsivefight.herokuapp.com",
          Connection: "keep-alive",
          "sec-ch-ua":
            '"Google Chrome";v="93", " Not;A Brand";v="99", "Chromium";v="93"',
          "sec-ch-ua-mobile": "?1",
          "User-Agent":
            "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Mobile Safari/537.36",
          "sec-ch-ua-platform": '"Android"',
          Accept: "*/*",
          "Sec-Fetch-Site": "same-origin",
          "Sec-Fetch-Mode": "no-cors",
          "Sec-Fetch-Dest": "script",
          Referer: "https://responsivefight.herokuapp.com/bus",
          "Accept-Encoding": "gzip, deflate, br",
          "Accept-Language": "en-AU,en;q=0.9,es;q=0.8",
          "If-None-Match": 'W/"17cd-17c0db2b8c8"',
          "If-Modified-Since": "Wed, 22 Sep 2021 13:29:49 GMT",
        },
      }
    );

    response = http.get(
      "https://responsivefight.herokuapp.com/api/fetchquestion?btlfld=bus&index=0",
      {
        headers: {
          Host: "responsivefight.herokuapp.com",
          Connection: "keep-alive",
          "sec-ch-ua":
            '"Google Chrome";v="93", " Not;A Brand";v="99", "Chromium";v="93"',
          Accept: "application/json, text/javascript, */*; q=0.01",
          "X-Requested-With": "XMLHttpRequest",
          "sec-ch-ua-mobile": "?1",
          "User-Agent":
            "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Mobile Safari/537.36",
          "sec-ch-ua-platform": '"Android"',
          "Sec-Fetch-Site": "same-origin",
          "Sec-Fetch-Mode": "cors",
          "Sec-Fetch-Dest": "empty",
          Referer: "https://responsivefight.herokuapp.com/bus",
          "Accept-Encoding": "gzip, deflate, br",
          "Accept-Language": "en-AU,en;q=0.9,es;q=0.8",
          "If-None-Match": 'W/"12e-E/bfqMwWFoMCsUVOsJYD5pd6f5k"',
        },
      }
    );

    response = http.post(
      "https://responsivefight.herokuapp.com/api/checkanswer",
      {
        stage: "bus_1",
        answer:
          "Use+your+superheroes+Mask+and+sanitizer+while+traveling+on+public+transport+and+clean+your+hands+regularly.",
      },
      {
        headers: {
          Host: "responsivefight.herokuapp.com",
          Connection: "keep-alive",
          "sec-ch-ua":
            '"Google Chrome";v="93", " Not;A Brand";v="99", "Chromium";v="93"',
          Accept: "*/*",
          "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
          "X-Requested-With": "XMLHttpRequest",
          "sec-ch-ua-mobile": "?1",
          "User-Agent":
            "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Mobile Safari/537.36",
          "sec-ch-ua-platform": '"Android"',
          Origin: "https://responsivefight.herokuapp.com",
          "Sec-Fetch-Site": "same-origin",
          "Sec-Fetch-Mode": "cors",
          "Sec-Fetch-Dest": "empty",
          Referer: "https://responsivefight.herokuapp.com/bus",
          "Accept-Encoding": "gzip, deflate, br",
          "Accept-Language": "en-AU,en;q=0.9,es;q=0.8",
        },
      }
    );

    response = http.post(
      "https://responsivefight.herokuapp.com/api/updateuser",
      {
        username: randName,
        score: "100",
      },
      {
        headers: {
          Host: "responsivefight.herokuapp.com",
          Connection: "keep-alive",
          "sec-ch-ua":
            '"Google Chrome";v="93", " Not;A Brand";v="99", "Chromium";v="93"',
          Accept: "*/*",
          "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
          "X-Requested-With": "XMLHttpRequest",
          "sec-ch-ua-mobile": "?1",
          "User-Agent":
            "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Mobile Safari/537.36",
          "sec-ch-ua-platform": '"Android"',
          Origin: "https://responsivefight.herokuapp.com",
          "Sec-Fetch-Site": "same-origin",
          "Sec-Fetch-Mode": "cors",
          "Sec-Fetch-Dest": "empty",
          Referer: "https://responsivefight.herokuapp.com/bus",
          "Accept-Encoding": "gzip, deflate, br",
          "Accept-Language": "en-AU,en;q=0.9,es;q=0.8",
        },
      }
    );
  });

  sleep(randomIntBetween(5, 10));

  group(
    "page_3 - https://responsivefight.herokuapp.com/restaurant",
    function () {
      response = http.get("https://responsivefight.herokuapp.com/restaurant", {
        headers: {
          Host: "responsivefight.herokuapp.com",
          Connection: "keep-alive",
          "sec-ch-ua":
            '"Google Chrome";v="93", " Not;A Brand";v="99", "Chromium";v="93"',
          "sec-ch-ua-mobile": "?1",
          "sec-ch-ua-platform": '"Android"',
          "Upgrade-Insecure-Requests": "1",
          "User-Agent":
            "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Mobile Safari/537.36",
          Accept:
            "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
          "Sec-Fetch-Site": "same-origin",
          "Sec-Fetch-Mode": "navigate",
          "Sec-Fetch-User": "?1",
          "Sec-Fetch-Dest": "document",
          Referer: "https://responsivefight.herokuapp.com/bus",
          "Accept-Encoding": "gzip, deflate, br",
          "Accept-Language": "en-AU,en;q=0.9,es;q=0.8",
          "If-None-Match": 'W/"2226-N3k+2ozGjKiyGp9R4vhw1TPoJGY"',
        },
      });

      response = http.get(
        "https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css",
        {
          headers: {
            "sec-ch-ua":
              '"Google Chrome";v="93", " Not;A Brand";v="99", "Chromium";v="93"',
            Referer: "https://responsivefight.herokuapp.com/",
            "sec-ch-ua-mobile": "?1",
            "User-Agent":
              "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Mobile Safari/537.36",
            "sec-ch-ua-platform": '"Android"',
          },
        }
      );

      response = http.get(
        "https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js",
        {
          headers: {
            "sec-ch-ua":
              '"Google Chrome";v="93", " Not;A Brand";v="99", "Chromium";v="93"',
            Referer: "https://responsivefight.herokuapp.com/",
            "sec-ch-ua-mobile": "?1",
            "User-Agent":
              "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Mobile Safari/537.36",
            "sec-ch-ua-platform": '"Android"',
          },
        }
      );

      response = http.get(
        "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js",
        {
          headers: {
            "sec-ch-ua":
              '"Google Chrome";v="93", " Not;A Brand";v="99", "Chromium";v="93"',
            Referer: "https://responsivefight.herokuapp.com/",
            Origin: "https://responsivefight.herokuapp.com",
            "sec-ch-ua-mobile": "?1",
            "User-Agent":
              "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Mobile Safari/537.36",
            "sec-ch-ua-platform": '"Android"',
          },
        }
      );

      response = http.get(
        "https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js",
        {
          headers: {
            "sec-ch-ua":
              '"Google Chrome";v="93", " Not;A Brand";v="99", "Chromium";v="93"',
            Referer: "https://responsivefight.herokuapp.com/",
            "sec-ch-ua-mobile": "?1",
            "User-Agent":
              "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Mobile Safari/537.36",
            "sec-ch-ua-platform": '"Android"',
          },
        }
      );

      response = http.get("https://responsivefight.herokuapp.com/covid.css", {
        headers: {
          Host: "responsivefight.herokuapp.com",
          Connection: "keep-alive",
          "sec-ch-ua":
            '"Google Chrome";v="93", " Not;A Brand";v="99", "Chromium";v="93"',
          "sec-ch-ua-mobile": "?1",
          "User-Agent":
            "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Mobile Safari/537.36",
          "sec-ch-ua-platform": '"Android"',
          Accept: "text/css,*/*;q=0.1",
          "Sec-Fetch-Site": "same-origin",
          "Sec-Fetch-Mode": "no-cors",
          "Sec-Fetch-Dest": "style",
          Referer: "https://responsivefight.herokuapp.com/restaurant",
          "Accept-Encoding": "gzip, deflate, br",
          "Accept-Language": "en-AU,en;q=0.9,es;q=0.8",
          "If-None-Match": 'W/"186d-17c0db2b8c8"',
          "If-Modified-Since": "Wed, 22 Sep 2021 13:29:49 GMT",
        },
      });

      response = http.get(
        "https://responsivefight.herokuapp.com/assets/restaurant_battle.jpg",
        {
          headers: {
            Host: "responsivefight.herokuapp.com",
            Connection: "keep-alive",
            "sec-ch-ua":
              '"Google Chrome";v="93", " Not;A Brand";v="99", "Chromium";v="93"',
            "sec-ch-ua-mobile": "?1",
            "User-Agent":
              "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Mobile Safari/537.36",
            "sec-ch-ua-platform": '"Android"',
            Accept:
              "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
            "Sec-Fetch-Site": "same-origin",
            "Sec-Fetch-Mode": "no-cors",
            "Sec-Fetch-Dest": "image",
            Referer: "https://responsivefight.herokuapp.com/restaurant",
            "Accept-Encoding": "gzip, deflate, br",
            "Accept-Language": "en-AU,en;q=0.9,es;q=0.8",
            "If-None-Match": 'W/"3762d-17c05643de0"',
            "If-Modified-Since": "Mon, 20 Sep 2021 22:47:08 GMT",
          },
        }
      );

      response = http.get(
        "https://responsivefight.herokuapp.com/assets/29242.jpg",
        {
          headers: {
            Host: "responsivefight.herokuapp.com",
            Connection: "keep-alive",
            "sec-ch-ua":
              '"Google Chrome";v="93", " Not;A Brand";v="99", "Chromium";v="93"',
            "sec-ch-ua-mobile": "?1",
            "User-Agent":
              "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Mobile Safari/537.36",
            "sec-ch-ua-platform": '"Android"',
            Accept:
              "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
            "Sec-Fetch-Site": "same-origin",
            "Sec-Fetch-Mode": "no-cors",
            "Sec-Fetch-Dest": "image",
            Referer: "https://responsivefight.herokuapp.com/restaurant",
            "Accept-Encoding": "gzip, deflate, br",
            "Accept-Language": "en-AU,en;q=0.9,es;q=0.8",
            "If-None-Match": 'W/"415ce-17c056439f8"',
            "If-Modified-Since": "Mon, 20 Sep 2021 22:47:07 GMT",
          },
        }
      );

      response = http.get(
        "https://www.who.int/images/default-source/health-topics/coronavirus/eng-mythbusting-ncov-(23).tmb-1920v.png",
        {
          headers: {
            "sec-ch-ua":
              '"Google Chrome";v="93", " Not;A Brand";v="99", "Chromium";v="93"',
            Referer: "https://responsivefight.herokuapp.com/",
            "sec-ch-ua-mobile": "?1",
            "User-Agent":
              "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Mobile Safari/537.36",
            "sec-ch-ua-platform": '"Android"',
          },
        }
      );

      response = http.get(
        "https://responsivefight.herokuapp.com/assets/cough_fail.jpg",
        {
          headers: {
            Host: "responsivefight.herokuapp.com",
            Connection: "keep-alive",
            "sec-ch-ua":
              '"Google Chrome";v="93", " Not;A Brand";v="99", "Chromium";v="93"',
            "If-None-Match": 'W/"3a376-17c0db2b8c8"',
            "If-Modified-Since": "Wed, 22 Sep 2021 13:29:49 GMT",
            "sec-ch-ua-mobile": "?1",
            "User-Agent":
              "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Mobile Safari/537.36",
            "sec-ch-ua-platform": '"Android"',
            Accept:
              "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
            "Sec-Fetch-Site": "same-origin",
            "Sec-Fetch-Mode": "no-cors",
            "Sec-Fetch-Dest": "image",
            Referer: "https://responsivefight.herokuapp.com/restaurant",
            "Accept-Encoding": "gzip, deflate, br",
            "Accept-Language": "en-AU,en;q=0.9,es;q=0.8",
          },
        }
      );

      response = http.get(
        "https://responsivefight.herokuapp.com/assets/covid_timer.jpg",
        {
          headers: {
            Host: "responsivefight.herokuapp.com",
            Connection: "keep-alive",
            "sec-ch-ua":
              '"Google Chrome";v="93", " Not;A Brand";v="99", "Chromium";v="93"',
            "If-None-Match": 'W/"3621e-17c0db2b8c8"',
            "If-Modified-Since": "Wed, 22 Sep 2021 13:29:49 GMT",
            "sec-ch-ua-mobile": "?1",
            "User-Agent":
              "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Mobile Safari/537.36",
            "sec-ch-ua-platform": '"Android"',
            Accept:
              "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
            "Sec-Fetch-Site": "same-origin",
            "Sec-Fetch-Mode": "no-cors",
            "Sec-Fetch-Dest": "image",
            Referer: "https://responsivefight.herokuapp.com/restaurant",
            "Accept-Encoding": "gzip, deflate, br",
            "Accept-Language": "en-AU,en;q=0.9,es;q=0.8",
          },
        }
      );

      response = http.get(
        "https://responsivefight.herokuapp.com/scripts/restaurant.js",
        {
          headers: {
            Host: "responsivefight.herokuapp.com",
            Connection: "keep-alive",
            "sec-ch-ua":
              '"Google Chrome";v="93", " Not;A Brand";v="99", "Chromium";v="93"',
            "sec-ch-ua-mobile": "?1",
            "User-Agent":
              "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Mobile Safari/537.36",
            "sec-ch-ua-platform": '"Android"',
            Accept: "*/*",
            "Sec-Fetch-Site": "same-origin",
            "Sec-Fetch-Mode": "no-cors",
            "Sec-Fetch-Dest": "script",
            Referer: "https://responsivefight.herokuapp.com/restaurant",
            "Accept-Encoding": "gzip, deflate, br",
            "Accept-Language": "en-AU,en;q=0.9,es;q=0.8",
            "If-None-Match": 'W/"190a-17c05643de0"',
            "If-Modified-Since": "Mon, 20 Sep 2021 22:47:08 GMT",
          },
        }
      );

      response = http.get(
        "https://responsivefight.herokuapp.com/api/fetchquestion?btlfld=res&index=0",
        {
          headers: {
            Host: "responsivefight.herokuapp.com",
            Connection: "keep-alive",
            "sec-ch-ua":
              '"Google Chrome";v="93", " Not;A Brand";v="99", "Chromium";v="93"',
            Accept: "application/json, text/javascript, */*; q=0.01",
            "X-Requested-With": "XMLHttpRequest",
            "sec-ch-ua-mobile": "?1",
            "User-Agent":
              "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Mobile Safari/537.36",
            "sec-ch-ua-platform": '"Android"',
            "Sec-Fetch-Site": "same-origin",
            "Sec-Fetch-Mode": "cors",
            "Sec-Fetch-Dest": "empty",
            Referer: "https://responsivefight.herokuapp.com/restaurant",
            "Accept-Encoding": "gzip, deflate, br",
            "Accept-Language": "en-AU,en;q=0.9,es;q=0.8",
            "If-None-Match": 'W/"13a-HXRqC6iLMjuNay/ug4Ni2DFjzkA"',
          },
        }
      );

      response = http.post(
        "https://responsivefight.herokuapp.com/api/checkanswer",
        {
          stage: "res_1",
          answer:
            "Use+your+super+hero+sanitizer%2C+keep+a+safe+distance+and+advise+they+should+keep+1.5+metres+away+from+others.",
        },
        {
          headers: {
            Host: "responsivefight.herokuapp.com",
            Connection: "keep-alive",
            "sec-ch-ua":
              '"Google Chrome";v="93", " Not;A Brand";v="99", "Chromium";v="93"',
            Accept: "*/*",
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
            "X-Requested-With": "XMLHttpRequest",
            "sec-ch-ua-mobile": "?1",
            "User-Agent":
              "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Mobile Safari/537.36",
            "sec-ch-ua-platform": '"Android"',
            Origin: "https://responsivefight.herokuapp.com",
            "Sec-Fetch-Site": "same-origin",
            "Sec-Fetch-Mode": "cors",
            "Sec-Fetch-Dest": "empty",
            Referer: "https://responsivefight.herokuapp.com/restaurant",
            "Accept-Encoding": "gzip, deflate, br",
            "Accept-Language": "en-AU,en;q=0.9,es;q=0.8",
          },
        }
      );

      response = http.post(
        "https://responsivefight.herokuapp.com/api/updateuser",
        {
          username: randName,
          score: "200",
        },
        {
          headers: {
            Host: "responsivefight.herokuapp.com",
            Connection: "keep-alive",
            "sec-ch-ua":
              '"Google Chrome";v="93", " Not;A Brand";v="99", "Chromium";v="93"',
            Accept: "*/*",
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
            "X-Requested-With": "XMLHttpRequest",
            "sec-ch-ua-mobile": "?1",
            "User-Agent":
              "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Mobile Safari/537.36",
            "sec-ch-ua-platform": '"Android"',
            Origin: "https://responsivefight.herokuapp.com",
            "Sec-Fetch-Site": "same-origin",
            "Sec-Fetch-Mode": "cors",
            "Sec-Fetch-Dest": "empty",
            Referer: "https://responsivefight.herokuapp.com/restaurant",
            "Accept-Encoding": "gzip, deflate, br",
            "Accept-Language": "en-AU,en;q=0.9,es;q=0.8",
          },
        }
      );
    }
  );

  sleep(randomIntBetween(5, 10));

  group("page_4 - https://responsivefight.herokuapp.com/office", function () {
    response = http.get("https://responsivefight.herokuapp.com/office", {
      headers: {
        Host: "responsivefight.herokuapp.com",
        Connection: "keep-alive",
        "sec-ch-ua":
          '"Google Chrome";v="93", " Not;A Brand";v="99", "Chromium";v="93"',
        "sec-ch-ua-mobile": "?1",
        "sec-ch-ua-platform": '"Android"',
        "Upgrade-Insecure-Requests": "1",
        "User-Agent":
          "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Mobile Safari/537.36",
        Accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
        "Sec-Fetch-Site": "same-origin",
        "Sec-Fetch-Mode": "navigate",
        "Sec-Fetch-User": "?1",
        "Sec-Fetch-Dest": "document",
        Referer: "https://responsivefight.herokuapp.com/restaurant",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "en-AU,en;q=0.9,es;q=0.8",
        "If-None-Match": 'W/"2434-Howaq2sgjoiF4IWY/R8xSualsm0"',
      },
    });

    response = http.get(
      "https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css",
      {
        headers: {
          "sec-ch-ua":
            '"Google Chrome";v="93", " Not;A Brand";v="99", "Chromium";v="93"',
          Referer: "https://responsivefight.herokuapp.com/",
          "sec-ch-ua-mobile": "?1",
          "User-Agent":
            "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Mobile Safari/537.36",
          "sec-ch-ua-platform": '"Android"',
        },
      }
    );

    response = http.get(
      "https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js",
      {
        headers: {
          "sec-ch-ua":
            '"Google Chrome";v="93", " Not;A Brand";v="99", "Chromium";v="93"',
          Referer: "https://responsivefight.herokuapp.com/",
          "sec-ch-ua-mobile": "?1",
          "User-Agent":
            "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Mobile Safari/537.36",
          "sec-ch-ua-platform": '"Android"',
        },
      }
    );

    response = http.get(
      "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js",
      {
        headers: {
          "sec-ch-ua":
            '"Google Chrome";v="93", " Not;A Brand";v="99", "Chromium";v="93"',
          Referer: "https://responsivefight.herokuapp.com/",
          Origin: "https://responsivefight.herokuapp.com",
          "sec-ch-ua-mobile": "?1",
          "User-Agent":
            "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Mobile Safari/537.36",
          "sec-ch-ua-platform": '"Android"',
        },
      }
    );

    response = http.get(
      "https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js",
      {
        headers: {
          "sec-ch-ua":
            '"Google Chrome";v="93", " Not;A Brand";v="99", "Chromium";v="93"',
          Referer: "https://responsivefight.herokuapp.com/",
          "sec-ch-ua-mobile": "?1",
          "User-Agent":
            "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Mobile Safari/537.36",
          "sec-ch-ua-platform": '"Android"',
        },
      }
    );

    response = http.get("https://responsivefight.herokuapp.com/covid.css", {
      headers: {
        Host: "responsivefight.herokuapp.com",
        Connection: "keep-alive",
        "sec-ch-ua":
          '"Google Chrome";v="93", " Not;A Brand";v="99", "Chromium";v="93"',
        "sec-ch-ua-mobile": "?1",
        "User-Agent":
          "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Mobile Safari/537.36",
        "sec-ch-ua-platform": '"Android"',
        Accept: "text/css,*/*;q=0.1",
        "Sec-Fetch-Site": "same-origin",
        "Sec-Fetch-Mode": "no-cors",
        "Sec-Fetch-Dest": "style",
        Referer: "https://responsivefight.herokuapp.com/office",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "en-AU,en;q=0.9,es;q=0.8",
        "If-None-Match": 'W/"186d-17c0db2b8c8"',
        "If-Modified-Since": "Wed, 22 Sep 2021 13:29:49 GMT",
      },
    });

    response = http.get(
      "https://responsivefight.herokuapp.com/assets/office_battle.jpg",
      {
        headers: {
          Host: "responsivefight.herokuapp.com",
          Connection: "keep-alive",
          "sec-ch-ua":
            '"Google Chrome";v="93", " Not;A Brand";v="99", "Chromium";v="93"',
          "sec-ch-ua-mobile": "?1",
          "User-Agent":
            "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Mobile Safari/537.36",
          "sec-ch-ua-platform": '"Android"',
          Accept:
            "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
          "Sec-Fetch-Site": "same-origin",
          "Sec-Fetch-Mode": "no-cors",
          "Sec-Fetch-Dest": "image",
          Referer: "https://responsivefight.herokuapp.com/office",
          "Accept-Encoding": "gzip, deflate, br",
          "Accept-Language": "en-AU,en;q=0.9,es;q=0.8",
        },
      }
    );

    response = http.get(
      "https://responsivefight.herokuapp.com/assets/office_intro.jpg",
      {
        headers: {
          Host: "responsivefight.herokuapp.com",
          Connection: "keep-alive",
          "sec-ch-ua":
            '"Google Chrome";v="93", " Not;A Brand";v="99", "Chromium";v="93"',
          "sec-ch-ua-mobile": "?1",
          "User-Agent":
            "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Mobile Safari/537.36",
          "sec-ch-ua-platform": '"Android"',
          Accept:
            "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
          "Sec-Fetch-Site": "same-origin",
          "Sec-Fetch-Mode": "no-cors",
          "Sec-Fetch-Dest": "image",
          Referer: "https://responsivefight.herokuapp.com/office",
          "Accept-Encoding": "gzip, deflate, br",
          "Accept-Language": "en-AU,en;q=0.9,es;q=0.8",
        },
      }
    );

    response = http.get(
      "https://www.who.int/images/default-source/health-topics/coronavirus/myth-busters/52.png?sfvrsn=862374e_12",
      {
        headers: {
          "sec-ch-ua":
            '"Google Chrome";v="93", " Not;A Brand";v="99", "Chromium";v="93"',
          "sec-ch-ua-mobile": "?1",
          "user-agent":
            "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Mobile Safari/537.36",
          "sec-ch-ua-platform": '"Android"',
          accept:
            "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
          "sec-fetch-site": "cross-site",
          "sec-fetch-mode": "no-cors",
          "sec-fetch-dest": "image",
          referer: "https://responsivefight.herokuapp.com/",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-AU,en;q=0.9,es;q=0.8",
        },
      }
    );

    response = http.get(
      "https://responsivefight.herokuapp.com/assets/cough_fail.jpg",
      {
        headers: {
          Host: "responsivefight.herokuapp.com",
          Connection: "keep-alive",
          "sec-ch-ua":
            '"Google Chrome";v="93", " Not;A Brand";v="99", "Chromium";v="93"',
          "If-None-Match": 'W/"3a376-17c0db2b8c8"',
          "If-Modified-Since": "Wed, 22 Sep 2021 13:29:49 GMT",
          "sec-ch-ua-mobile": "?1",
          "User-Agent":
            "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Mobile Safari/537.36",
          "sec-ch-ua-platform": '"Android"',
          Accept:
            "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
          "Sec-Fetch-Site": "same-origin",
          "Sec-Fetch-Mode": "no-cors",
          "Sec-Fetch-Dest": "image",
          Referer: "https://responsivefight.herokuapp.com/office",
          "Accept-Encoding": "gzip, deflate, br",
          "Accept-Language": "en-AU,en;q=0.9,es;q=0.8",
        },
      }
    );

    response = http.get(
      "https://responsivefight.herokuapp.com/assets/covid_timer.jpg",
      {
        headers: {
          Host: "responsivefight.herokuapp.com",
          Connection: "keep-alive",
          "sec-ch-ua":
            '"Google Chrome";v="93", " Not;A Brand";v="99", "Chromium";v="93"',
          "If-None-Match": 'W/"3621e-17c0db2b8c8"',
          "If-Modified-Since": "Wed, 22 Sep 2021 13:29:49 GMT",
          "sec-ch-ua-mobile": "?1",
          "User-Agent":
            "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Mobile Safari/537.36",
          "sec-ch-ua-platform": '"Android"',
          Accept:
            "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
          "Sec-Fetch-Site": "same-origin",
          "Sec-Fetch-Mode": "no-cors",
          "Sec-Fetch-Dest": "image",
          Referer: "https://responsivefight.herokuapp.com/office",
          "Accept-Encoding": "gzip, deflate, br",
          "Accept-Language": "en-AU,en;q=0.9,es;q=0.8",
        },
      }
    );

    response = http.get(
      "https://responsivefight.herokuapp.com/scripts/office.js",
      {
        headers: {
          Host: "responsivefight.herokuapp.com",
          Connection: "keep-alive",
          "sec-ch-ua":
            '"Google Chrome";v="93", " Not;A Brand";v="99", "Chromium";v="93"',
          "sec-ch-ua-mobile": "?1",
          "User-Agent":
            "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Mobile Safari/537.36",
          "sec-ch-ua-platform": '"Android"',
          Accept: "*/*",
          "Sec-Fetch-Site": "same-origin",
          "Sec-Fetch-Mode": "no-cors",
          "Sec-Fetch-Dest": "script",
          Referer: "https://responsivefight.herokuapp.com/office",
          "Accept-Encoding": "gzip, deflate, br",
          "Accept-Language": "en-AU,en;q=0.9,es;q=0.8",
          "If-None-Match": 'W/"1a20-17bc500b0d0"',
          "If-Modified-Since": "Wed, 08 Sep 2021 10:42:42 GMT",
        },
      }
    );

    response = http.get(
      "https://responsivefight.herokuapp.com/api/fetchquestion?btlfld=off&index=0",
      {
        headers: {
          Host: "responsivefight.herokuapp.com",
          Connection: "keep-alive",
          "sec-ch-ua":
            '"Google Chrome";v="93", " Not;A Brand";v="99", "Chromium";v="93"',
          Accept: "application/json, text/javascript, */*; q=0.01",
          "X-Requested-With": "XMLHttpRequest",
          "sec-ch-ua-mobile": "?1",
          "User-Agent":
            "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Mobile Safari/537.36",
          "sec-ch-ua-platform": '"Android"',
          "Sec-Fetch-Site": "same-origin",
          "Sec-Fetch-Mode": "cors",
          "Sec-Fetch-Dest": "empty",
          Referer: "https://responsivefight.herokuapp.com/office",
          "Accept-Encoding": "gzip, deflate, br",
          "Accept-Language": "en-AU,en;q=0.9,es;q=0.8",
          "If-None-Match": 'W/"113-qo484EHi2ODt7DjRN9oD5KkHM5k"',
        },
      }
    );

    response = http.get("https://responsivefight.herokuapp.com/404", {
      headers: {
        Host: "responsivefight.herokuapp.com",
        Connection: "keep-alive",
        "sec-ch-ua":
          '"Google Chrome";v="93", " Not;A Brand";v="99", "Chromium";v="93"',
        "sec-ch-ua-mobile": "?1",
        "User-Agent":
          "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Mobile Safari/537.36",
        "sec-ch-ua-platform": '"Android"',
        Accept:
          "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
        "Sec-Fetch-Site": "same-origin",
        "Sec-Fetch-Mode": "no-cors",
        "Sec-Fetch-Dest": "image",
        Referer: "https://responsivefight.herokuapp.com/office",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "en-AU,en;q=0.9,es;q=0.8",
      },
    });

    response = http.post(
      "https://responsivefight.herokuapp.com/api/checkanswer",
      {
        stage: "off_1",
        answer:
          "Keep+it+to+yourself%2C+do+not+draw+attention%2C+and+pretend+you+did+not+notice!",
      },
      {
        headers: {
          Host: "responsivefight.herokuapp.com",
          Connection: "keep-alive",
          "sec-ch-ua":
            '"Google Chrome";v="93", " Not;A Brand";v="99", "Chromium";v="93"',
          Accept: "*/*",
          "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
          "X-Requested-With": "XMLHttpRequest",
          "sec-ch-ua-mobile": "?1",
          "User-Agent":
            "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Mobile Safari/537.36",
          "sec-ch-ua-platform": '"Android"',
          Origin: "https://responsivefight.herokuapp.com",
          "Sec-Fetch-Site": "same-origin",
          "Sec-Fetch-Mode": "cors",
          "Sec-Fetch-Dest": "empty",
          Referer: "https://responsivefight.herokuapp.com/office",
          "Accept-Encoding": "gzip, deflate, br",
          "Accept-Language": "en-AU,en;q=0.9,es;q=0.8",
        },
      }
    );

    response = http.post(
      "https://responsivefight.herokuapp.com/api/checkanswer",
      {
        stage: "off_1",
        answer: "Use+your+superhero+Social+Distance+and+notify+your+Manager.",
      },
      {
        headers: {
          Host: "responsivefight.herokuapp.com",
          Connection: "keep-alive",
          "sec-ch-ua":
            '"Google Chrome";v="93", " Not;A Brand";v="99", "Chromium";v="93"',
          Accept: "*/*",
          "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
          "X-Requested-With": "XMLHttpRequest",
          "sec-ch-ua-mobile": "?1",
          "User-Agent":
            "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Mobile Safari/537.36",
          "sec-ch-ua-platform": '"Android"',
          Origin: "https://responsivefight.herokuapp.com",
          "Sec-Fetch-Site": "same-origin",
          "Sec-Fetch-Mode": "cors",
          "Sec-Fetch-Dest": "empty",
          Referer: "https://responsivefight.herokuapp.com/office",
          "Accept-Encoding": "gzip, deflate, br",
          "Accept-Language": "en-AU,en;q=0.9,es;q=0.8",
        },
      }
    );

    response = http.post(
      "https://responsivefight.herokuapp.com/api/updateuser",
      {
        username: randName,
        score: "300",
      },
      {
        headers: {
          Host: "responsivefight.herokuapp.com",
          Connection: "keep-alive",
          "sec-ch-ua":
            '"Google Chrome";v="93", " Not;A Brand";v="99", "Chromium";v="93"',
          Accept: "*/*",
          "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
          "X-Requested-With": "XMLHttpRequest",
          "sec-ch-ua-mobile": "?1",
          "User-Agent":
            "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Mobile Safari/537.36",
          "sec-ch-ua-platform": '"Android"',
          Origin: "https://responsivefight.herokuapp.com",
          "Sec-Fetch-Site": "same-origin",
          "Sec-Fetch-Mode": "cors",
          "Sec-Fetch-Dest": "empty",
          Referer: "https://responsivefight.herokuapp.com/office",
          "Accept-Encoding": "gzip, deflate, br",
          "Accept-Language": "en-AU,en;q=0.9,es;q=0.8",
        },
      }
    );
  });

  sleep(randomIntBetween(5, 10));

  group(
    "page_5 - https://responsivefight.herokuapp.com/leaderboard",
    function () {
      response = http.get("https://responsivefight.herokuapp.com/leaderboard", {
        headers: {
          Host: "responsivefight.herokuapp.com",
          Connection: "keep-alive",
          "sec-ch-ua":
            '"Google Chrome";v="93", " Not;A Brand";v="99", "Chromium";v="93"',
          "sec-ch-ua-mobile": "?1",
          "sec-ch-ua-platform": '"Android"',
          "Upgrade-Insecure-Requests": "1",
          "User-Agent":
            "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Mobile Safari/537.36",
          Accept:
            "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
          "Sec-Fetch-Site": "same-origin",
          "Sec-Fetch-Mode": "navigate",
          "Sec-Fetch-User": "?1",
          "Sec-Fetch-Dest": "document",
          Referer: "https://responsivefight.herokuapp.com/office",
          "Accept-Encoding": "gzip, deflate, br",
          "Accept-Language": "en-AU,en;q=0.9,es;q=0.8",
          "If-None-Match": 'W/"9de-SiJvFShLApc2YpsqP0PNxXHH0ks"',
        },
      });
      response = http.get(
        "https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css",
        {
          headers: {
            "sec-ch-ua":
              '"Google Chrome";v="93", " Not;A Brand";v="99", "Chromium";v="93"',
            Referer: "https://responsivefight.herokuapp.com/",
            "sec-ch-ua-mobile": "?1",
            "User-Agent":
              "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Mobile Safari/537.36",
            "sec-ch-ua-platform": '"Android"',
          },
        }
      );
      response = http.get(
        "https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js",
        {
          headers: {
            "sec-ch-ua":
              '"Google Chrome";v="93", " Not;A Brand";v="99", "Chromium";v="93"',
            Referer: "https://responsivefight.herokuapp.com/",
            "sec-ch-ua-mobile": "?1",
            "User-Agent":
              "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Mobile Safari/537.36",
            "sec-ch-ua-platform": '"Android"',
          },
        }
      );
      response = http.get(
        "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js",
        {
          headers: {
            "sec-ch-ua":
              '"Google Chrome";v="93", " Not;A Brand";v="99", "Chromium";v="93"',
            Referer: "https://responsivefight.herokuapp.com/",
            Origin: "https://responsivefight.herokuapp.com",
            "sec-ch-ua-mobile": "?1",
            "User-Agent":
              "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Mobile Safari/537.36",
            "sec-ch-ua-platform": '"Android"',
          },
        }
      );
      response = http.get(
        "https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js",
        {
          headers: {
            "sec-ch-ua":
              '"Google Chrome";v="93", " Not;A Brand";v="99", "Chromium";v="93"',
            Referer: "https://responsivefight.herokuapp.com/",
            "sec-ch-ua-mobile": "?1",
            "User-Agent":
              "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Mobile Safari/537.36",
            "sec-ch-ua-platform": '"Android"',
          },
        }
      );
      response = http.get("https://responsivefight.herokuapp.com/covid.css", {
        headers: {
          Host: "responsivefight.herokuapp.com",
          Connection: "keep-alive",
          "sec-ch-ua":
            '"Google Chrome";v="93", " Not;A Brand";v="99", "Chromium";v="93"',
          "sec-ch-ua-mobile": "?1",
          "User-Agent":
            "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Mobile Safari/537.36",
          "sec-ch-ua-platform": '"Android"',
          Accept: "text/css,*/*;q=0.1",
          "Sec-Fetch-Site": "same-origin",
          "Sec-Fetch-Mode": "no-cors",
          "Sec-Fetch-Dest": "style",
          Referer: "https://responsivefight.herokuapp.com/leaderboard",
          "Accept-Encoding": "gzip, deflate, br",
          "Accept-Language": "en-AU,en;q=0.9,es;q=0.8",
          "If-None-Match": 'W/"186d-17c0db2b8c8"',
          "If-Modified-Since": "Wed, 22 Sep 2021 13:29:49 GMT",
        },
      });
      response = http.get(
        "https://responsivefight.herokuapp.com/scripts/leaderboard.js",
        {
          headers: {
            Host: "responsivefight.herokuapp.com",
            Connection: "keep-alive",
            "sec-ch-ua":
              '"Google Chrome";v="93", " Not;A Brand";v="99", "Chromium";v="93"',
            "sec-ch-ua-mobile": "?1",
            "User-Agent":
              "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Mobile Safari/537.36",
            "sec-ch-ua-platform": '"Android"',
            Accept: "*/*",
            "Sec-Fetch-Site": "same-origin",
            "Sec-Fetch-Mode": "no-cors",
            "Sec-Fetch-Dest": "script",
            Referer: "https://responsivefight.herokuapp.com/leaderboard",
            "Accept-Encoding": "gzip, deflate, br",
            "Accept-Language": "en-AU,en;q=0.9,es;q=0.8",
            "If-None-Match": 'W/"608-17c05643de0"',
            "If-Modified-Since": "Mon, 20 Sep 2021 22:47:08 GMT",
          },
        }
      );
      response = http.get(
        "https://responsivefight.herokuapp.com/api/listusers",
        {
          headers: {
            Host: "responsivefight.herokuapp.com",
            Connection: "keep-alive",
            "sec-ch-ua":
              '"Google Chrome";v="93", " Not;A Brand";v="99", "Chromium";v="93"',
            Accept: "application/json, text/javascript, */*; q=0.01",
            "X-Requested-With": "XMLHttpRequest",
            "sec-ch-ua-mobile": "?1",
            "User-Agent":
              "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Mobile Safari/537.36",
            "sec-ch-ua-platform": '"Android"',
            "Sec-Fetch-Site": "same-origin",
            "Sec-Fetch-Mode": "cors",
            "Sec-Fetch-Dest": "empty",
            Referer: "https://responsivefight.herokuapp.com/leaderboard",
            "Accept-Encoding": "gzip, deflate, br",
            "Accept-Language": "en-AU,en;q=0.9,es;q=0.8",
            "If-None-Match": 'W/"271-KKeXmGBpixqOk/XeOOZYjauV3Rc"',
          },
        }
      );
    }
  );

  sleep(randomIntBetween(5, 10));

  group("page_6 - https://responsivefight.herokuapp.com/covid", function () {
    response = http.get("https://responsivefight.herokuapp.com/covid", {
      headers: {
        Host: "responsivefight.herokuapp.com",
        Connection: "keep-alive",
        "sec-ch-ua":
          '"Google Chrome";v="93", " Not;A Brand";v="99", "Chromium";v="93"',
        "sec-ch-ua-mobile": "?1",
        "sec-ch-ua-platform": '"Android"',
        "Upgrade-Insecure-Requests": "1",
        "User-Agent":
          "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Mobile Safari/537.36",
        Accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
        "Sec-Fetch-Site": "same-origin",
        "Sec-Fetch-Mode": "navigate",
        "Sec-Fetch-User": "?1",
        "Sec-Fetch-Dest": "document",
        Referer: "https://responsivefight.herokuapp.com/leaderboard",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "en-AU,en;q=0.9,es;q=0.8",
        "If-None-Match": 'W/"18ec-YP6/1YZ8teex4aDuGPd/9o3iIeM"',
      },
    });
    response = http.get(
      "https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css",
      {
        headers: {
          "sec-ch-ua":
            '"Google Chrome";v="93", " Not;A Brand";v="99", "Chromium";v="93"',
          Referer: "https://responsivefight.herokuapp.com/",
          "sec-ch-ua-mobile": "?1",
          "User-Agent":
            "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Mobile Safari/537.36",
          "sec-ch-ua-platform": '"Android"',
        },
      }
    );
    response = http.get(
      "https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js",
      {
        headers: {
          "sec-ch-ua":
            '"Google Chrome";v="93", " Not;A Brand";v="99", "Chromium";v="93"',
          Referer: "https://responsivefight.herokuapp.com/",
          "sec-ch-ua-mobile": "?1",
          "User-Agent":
            "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Mobile Safari/537.36",
          "sec-ch-ua-platform": '"Android"',
        },
      }
    );
    response = http.get(
      "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js",
      {
        headers: {
          "sec-ch-ua":
            '"Google Chrome";v="93", " Not;A Brand";v="99", "Chromium";v="93"',
          Referer: "https://responsivefight.herokuapp.com/",
          Origin: "https://responsivefight.herokuapp.com",
          "sec-ch-ua-mobile": "?1",
          "User-Agent":
            "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Mobile Safari/537.36",
          "sec-ch-ua-platform": '"Android"',
        },
      }
    );
    response = http.get(
      "https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js",
      {
        headers: {
          "sec-ch-ua":
            '"Google Chrome";v="93", " Not;A Brand";v="99", "Chromium";v="93"',
          Referer: "https://responsivefight.herokuapp.com/",
          "sec-ch-ua-mobile": "?1",
          "User-Agent":
            "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Mobile Safari/537.36",
          "sec-ch-ua-platform": '"Android"',
        },
      }
    );
    response = http.get("https://responsivefight.herokuapp.com/covid.css", {
      headers: {
        Host: "responsivefight.herokuapp.com",
        Connection: "keep-alive",
        "sec-ch-ua":
          '"Google Chrome";v="93", " Not;A Brand";v="99", "Chromium";v="93"',
        "sec-ch-ua-mobile": "?1",
        "User-Agent":
          "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Mobile Safari/537.36",
        "sec-ch-ua-platform": '"Android"',
        Accept: "text/css,*/*;q=0.1",
        "Sec-Fetch-Site": "same-origin",
        "Sec-Fetch-Mode": "no-cors",
        "Sec-Fetch-Dest": "style",
        Referer: "https://responsivefight.herokuapp.com/covid",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "en-AU,en;q=0.9,es;q=0.8",
        "If-None-Match": 'W/"186d-17c0db2b8c8"',
        "If-Modified-Since": "Wed, 22 Sep 2021 13:29:49 GMT",
      },
    });
    response = http.get(
      "https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Montserrat&family=Patua+One&family=Roboto&display=swap&family=Alfa%2BSlab%2BOne&family=Montserrat&family=Patua%2BOne&family=Roboto",
      {
        headers: {
          "sec-ch-ua":
            '"Google Chrome";v="93", " Not;A Brand";v="99", "Chromium";v="93"',
          Referer: "",
          "sec-ch-ua-mobile": "?1",
          "User-Agent":
            "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Mobile Safari/537.36",
          "sec-ch-ua-platform": '"Android"',
        },
      }
    );
    response = http.get(
      "https://responsivefight.herokuapp.com/assets/covidmap.jpg",
      {
        headers: {
          Host: "responsivefight.herokuapp.com",
          Connection: "keep-alive",
          "sec-ch-ua":
            '"Google Chrome";v="93", " Not;A Brand";v="99", "Chromium";v="93"',
          "sec-ch-ua-mobile": "?1",
          "User-Agent":
            "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Mobile Safari/537.36",
          "sec-ch-ua-platform": '"Android"',
          Accept:
            "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
          "Sec-Fetch-Site": "same-origin",
          "Sec-Fetch-Mode": "no-cors",
          "Sec-Fetch-Dest": "image",
          Referer: "https://responsivefight.herokuapp.com/covid",
          "Accept-Encoding": "gzip, deflate, br",
          "Accept-Language": "en-AU,en;q=0.9,es;q=0.8",
          "If-None-Match": 'W/"7c72f-17c0db2b8c8"',
          "If-Modified-Since": "Wed, 22 Sep 2021 13:29:49 GMT",
        },
      }
    );
    response = http.get(
      "https://responsivefight.herokuapp.com/assets/dynamic_thumbnail.jpg",
      {
        headers: {
          Host: "responsivefight.herokuapp.com",
          Connection: "keep-alive",
          "sec-ch-ua":
            '"Google Chrome";v="93", " Not;A Brand";v="99", "Chromium";v="93"',
          "sec-ch-ua-mobile": "?1",
          "User-Agent":
            "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Mobile Safari/537.36",
          "sec-ch-ua-platform": '"Android"',
          Accept:
            "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
          "Sec-Fetch-Site": "same-origin",
          "Sec-Fetch-Mode": "no-cors",
          "Sec-Fetch-Dest": "image",
          Referer: "https://responsivefight.herokuapp.com/covid",
          "Accept-Encoding": "gzip, deflate, br",
          "Accept-Language": "en-AU,en;q=0.9,es;q=0.8",
          "If-None-Match": 'W/"622c5-17c0db2b8c8"',
          "If-Modified-Since": "Wed, 22 Sep 2021 13:29:49 GMT",
        },
      }
    );
    response = http.get(
      "https://responsivefight.herokuapp.com/assets/bus_thumbnail.jpg",
      {
        headers: {
          Host: "responsivefight.herokuapp.com",
          Connection: "keep-alive",
          "sec-ch-ua":
            '"Google Chrome";v="93", " Not;A Brand";v="99", "Chromium";v="93"',
          "sec-ch-ua-mobile": "?1",
          "User-Agent":
            "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Mobile Safari/537.36",
          "sec-ch-ua-platform": '"Android"',
          Accept:
            "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
          "Sec-Fetch-Site": "same-origin",
          "Sec-Fetch-Mode": "no-cors",
          "Sec-Fetch-Dest": "image",
          Referer: "https://responsivefight.herokuapp.com/covid",
          "Accept-Encoding": "gzip, deflate, br",
          "Accept-Language": "en-AU,en;q=0.9,es;q=0.8",
          "If-None-Match": 'W/"184825-17c0db2b8c8"',
          "If-Modified-Since": "Wed, 22 Sep 2021 13:29:49 GMT",
        },
      }
    );
    response = http.get(
      "https://responsivefight.herokuapp.com/assets/restaurant_thumbnail.jpg",
      {
        headers: {
          Host: "responsivefight.herokuapp.com",
          Connection: "keep-alive",
          "sec-ch-ua":
            '"Google Chrome";v="93", " Not;A Brand";v="99", "Chromium";v="93"',
          "sec-ch-ua-mobile": "?1",
          "User-Agent":
            "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Mobile Safari/537.36",
          "sec-ch-ua-platform": '"Android"',
          Accept:
            "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
          "Sec-Fetch-Site": "same-origin",
          "Sec-Fetch-Mode": "no-cors",
          "Sec-Fetch-Dest": "image",
          Referer: "https://responsivefight.herokuapp.com/covid",
          "Accept-Encoding": "gzip, deflate, br",
          "Accept-Language": "en-AU,en;q=0.9,es;q=0.8",
          "If-None-Match": 'W/"127393-17c0db2b8c8"',
          "If-Modified-Since": "Wed, 22 Sep 2021 13:29:49 GMT",
        },
      }
    );
    response = http.get(
      "https://responsivefight.herokuapp.com/assets/office_thumbnail.jpg",
      {
        headers: {
          Host: "responsivefight.herokuapp.com",
          Connection: "keep-alive",
          "sec-ch-ua":
            '"Google Chrome";v="93", " Not;A Brand";v="99", "Chromium";v="93"',
          "sec-ch-ua-mobile": "?1",
          "User-Agent":
            "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Mobile Safari/537.36",
          "sec-ch-ua-platform": '"Android"',
          Accept:
            "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
          "Sec-Fetch-Site": "same-origin",
          "Sec-Fetch-Mode": "no-cors",
          "Sec-Fetch-Dest": "image",
          Referer: "https://responsivefight.herokuapp.com/covid",
          "Accept-Encoding": "gzip, deflate, br",
          "Accept-Language": "en-AU,en;q=0.9,es;q=0.8",
          "If-None-Match": 'W/"91d7-17c0db2b8c8"',
          "If-Modified-Since": "Wed, 22 Sep 2021 13:29:49 GMT",
        },
      }
    );
    response = http.get(
      "https://responsivefight.herokuapp.com/scripts/covid.js",
      {
        headers: {
          Host: "responsivefight.herokuapp.com",
          Connection: "keep-alive",
          "sec-ch-ua":
            '"Google Chrome";v="93", " Not;A Brand";v="99", "Chromium";v="93"',
          "sec-ch-ua-mobile": "?1",
          "User-Agent":
            "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Mobile Safari/537.36",
          "sec-ch-ua-platform": '"Android"',
          Accept: "*/*",
          "Sec-Fetch-Site": "same-origin",
          "Sec-Fetch-Mode": "no-cors",
          "Sec-Fetch-Dest": "script",
          Referer: "https://responsivefight.herokuapp.com/covid",
          "Accept-Encoding": "gzip, deflate, br",
          "Accept-Language": "en-AU,en;q=0.9,es;q=0.8",
          "If-None-Match": 'W/"13b-17c0db2b8c8"',
          "If-Modified-Since": "Wed, 22 Sep 2021 13:29:49 GMT",
        },
      }
    );
    response = http.get(
      "https://fonts.gstatic.com/s/alfaslabone/v10/6NUQ8FmMKwSEKjnm5-4v-4Jh2dJhe_escmA.woff2",
      {
        headers: {
          "sec-ch-ua":
            '"Google Chrome";v="93", " Not;A Brand";v="99", "Chromium";v="93"',
          Referer: "https://fonts.googleapis.com/",
          Origin: "https://responsivefight.herokuapp.com",
          "sec-ch-ua-mobile": "?1",
          "User-Agent":
            "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Mobile Safari/537.36",
          "sec-ch-ua-platform": '"Android"',
        },
      }
    );
    response = http.get(
      "https://fonts.gstatic.com/s/roboto/v29/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2",
      {
        headers: {
          "sec-ch-ua":
            '"Google Chrome";v="93", " Not;A Brand";v="99", "Chromium";v="93"',
          Referer: "https://fonts.googleapis.com/",
          Origin: "https://responsivefight.herokuapp.com",
          "sec-ch-ua-mobile": "?1",
          "User-Agent":
            "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Mobile Safari/537.36",
          "sec-ch-ua-platform": '"Android"',
        },
      }
    );
    response = http.get(
      "https://fonts.gstatic.com/s/montserrat/v18/JTUSjIg1_i6t8kCHKm459WlhyyTh89Y.woff2",
      {
        headers: {
          "sec-ch-ua":
            '"Google Chrome";v="93", " Not;A Brand";v="99", "Chromium";v="93"',
          Referer: "https://fonts.googleapis.com/",
          Origin: "https://responsivefight.herokuapp.com",
          "sec-ch-ua-mobile": "?1",
          "User-Agent":
            "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Mobile Safari/537.36",
          "sec-ch-ua-platform": '"Android"',
        },
      }
    );
  });

  sleep(randomIntBetween(5, 10));

  group("page_7 - https://responsivefight.herokuapp.com/news", function () {
    response = http.get("https://responsivefight.herokuapp.com/news", {
      headers: {
        Host: "responsivefight.herokuapp.com",
        Connection: "keep-alive",
        "sec-ch-ua":
          '"Google Chrome";v="93", " Not;A Brand";v="99", "Chromium";v="93"',
        "sec-ch-ua-mobile": "?1",
        "sec-ch-ua-platform": '"Android"',
        "Upgrade-Insecure-Requests": "1",
        "User-Agent":
          "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Mobile Safari/537.36",
        Accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
        "Sec-Fetch-Site": "same-origin",
        "Sec-Fetch-Mode": "navigate",
        "Sec-Fetch-User": "?1",
        "Sec-Fetch-Dest": "document",
        Referer: "https://responsivefight.herokuapp.com/covid",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "en-AU,en;q=0.9,es;q=0.8",
        "If-None-Match": 'W/"2254-aVpgOdCfkSMk9xDItqdWgLcevlE"',
      },
    });

    response = http.get(
      "https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css",
      {
        headers: {
          "sec-ch-ua":
            '"Google Chrome";v="93", " Not;A Brand";v="99", "Chromium";v="93"',
          Referer: "https://responsivefight.herokuapp.com/",
          "sec-ch-ua-mobile": "?1",
          "User-Agent":
            "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Mobile Safari/537.36",
          "sec-ch-ua-platform": '"Android"',
        },
      }
    );

    response = http.get(
      "https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js",
      {
        headers: {
          "sec-ch-ua":
            '"Google Chrome";v="93", " Not;A Brand";v="99", "Chromium";v="93"',
          Referer: "https://responsivefight.herokuapp.com/",
          "sec-ch-ua-mobile": "?1",
          "User-Agent":
            "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Mobile Safari/537.36",
          "sec-ch-ua-platform": '"Android"',
        },
      }
    );

    response = http.get(
      "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js",
      {
        headers: {
          "sec-ch-ua":
            '"Google Chrome";v="93", " Not;A Brand";v="99", "Chromium";v="93"',
          Referer: "https://responsivefight.herokuapp.com/",
          Origin: "https://responsivefight.herokuapp.com",
          "sec-ch-ua-mobile": "?1",
          "User-Agent":
            "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Mobile Safari/537.36",
          "sec-ch-ua-platform": '"Android"',
        },
      }
    );

    response = http.get(
      "https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js",
      {
        headers: {
          "sec-ch-ua":
            '"Google Chrome";v="93", " Not;A Brand";v="99", "Chromium";v="93"',
          Referer: "https://responsivefight.herokuapp.com/",
          "sec-ch-ua-mobile": "?1",
          "User-Agent":
            "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Mobile Safari/537.36",
          "sec-ch-ua-platform": '"Android"',
        },
      }
    );

    response = http.get("https://responsivefight.herokuapp.com/covid.css", {
      headers: {
        Host: "responsivefight.herokuapp.com",
        Connection: "keep-alive",
        "sec-ch-ua":
          '"Google Chrome";v="93", " Not;A Brand";v="99", "Chromium";v="93"',
        "sec-ch-ua-mobile": "?1",
        "User-Agent":
          "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Mobile Safari/537.36",
        "sec-ch-ua-platform": '"Android"',
        Accept: "text/css,*/*;q=0.1",
        "Sec-Fetch-Site": "same-origin",
        "Sec-Fetch-Mode": "no-cors",
        "Sec-Fetch-Dest": "style",
        Referer: "https://responsivefight.herokuapp.com/news",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "en-AU,en;q=0.9,es;q=0.8",
        "If-None-Match": 'W/"186d-17c0db2b8c8"',
        "If-Modified-Since": "Wed, 22 Sep 2021 13:29:49 GMT",
      },
    });

    response = http.get(
      "https://responsivefight.herokuapp.com/assets/dynamic_correct.jpg",
      {
        headers: {
          Host: "responsivefight.herokuapp.com",
          Connection: "keep-alive",
          "sec-ch-ua":
            '"Google Chrome";v="93", " Not;A Brand";v="99", "Chromium";v="93"',
          "sec-ch-ua-mobile": "?1",
          "User-Agent":
            "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Mobile Safari/537.36",
          "sec-ch-ua-platform": '"Android"',
          Accept:
            "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
          "Sec-Fetch-Site": "same-origin",
          "Sec-Fetch-Mode": "no-cors",
          "Sec-Fetch-Dest": "image",
          Referer: "https://responsivefight.herokuapp.com/news",
          "Accept-Encoding": "gzip, deflate, br",
          "Accept-Language": "en-AU,en;q=0.9,es;q=0.8",
        },
      }
    );

    response = http.get(
      "https://syeima.bn.files.1drv.com/y4mo4tGRH2wG-urYekQqC6zuClC7BkWCZLwajA7zn2SvAmFBcMOn202MF-DQozbFYOK5was0hp_XGiKfq5T21aR3N35Dek14OavEccay4GSsioDg96ZLZC5OmZD4pZibALHA30hZtHrN1hzSd9Ge1Yg0baiN9unabfdP2M8oaxZvuBO9ClmdsZmot36cy4dGhk_3XX0Duz5o8JGs-ccvU-s4w?width=256&height=171&cropmode=none",
      {
        headers: {
          "sec-ch-ua":
            '"Google Chrome";v="93", " Not;A Brand";v="99", "Chromium";v="93"',
          Referer: "https://responsivefight.herokuapp.com/",
          "sec-ch-ua-mobile": "?1",
          "User-Agent":
            "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Mobile Safari/537.36",
          "sec-ch-ua-platform": '"Android"',
        },
      }
    );

    response = http.get(
      "https://r4eima.bn.files.1drv.com/y4matrszAe_wJusufxTNDTeyy3ywK0yEjddP3Uo5VJM2JWB7AUb0ML_TONTFBYpZce70qqiNbe19f_vq75xjgtcCZ9afFO6emrqk6SuWK9ffvw-npnYvDv3phE0pCLh1_ptdQ4mTKZt3mpeC9Q-1vuU3vo0FQzX27uEevDuqxjFkGCqqyTFFdOMFCbYTjTorZvHnbxq9zjnjO5w-cvGr-yNYA?width=300&height=300&cropmode=none",
      {
        headers: {
          "sec-ch-ua":
            '"Google Chrome";v="93", " Not;A Brand";v="99", "Chromium";v="93"',
          Referer: "https://responsivefight.herokuapp.com/",
          "sec-ch-ua-mobile": "?1",
          "User-Agent":
            "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Mobile Safari/537.36",
          "sec-ch-ua-platform": '"Android"',
        },
      }
    );

    response = http.get(
      "https://responsivefight.herokuapp.com/scripts/singlePage.js",
      {
        headers: {
          Host: "responsivefight.herokuapp.com",
          Connection: "keep-alive",
          "sec-ch-ua":
            '"Google Chrome";v="93", " Not;A Brand";v="99", "Chromium";v="93"',
          "sec-ch-ua-mobile": "?1",
          "User-Agent":
            "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Mobile Safari/537.36",
          "sec-ch-ua-platform": '"Android"',
          Accept: "*/*",
          "Sec-Fetch-Site": "same-origin",
          "Sec-Fetch-Mode": "no-cors",
          "Sec-Fetch-Dest": "script",
          Referer: "https://responsivefight.herokuapp.com/news",
          "Accept-Encoding": "gzip, deflate, br",
          "Accept-Language": "en-AU,en;q=0.9,es;q=0.8",
          "If-None-Match": 'W/"14a5-17bd5587b98"',
          "If-Modified-Since": "Sat, 11 Sep 2021 14:52:31 GMT",
        },
      }
    );

    response = http.get(
      "https://responsivefight.herokuapp.com/assets/office.mp4",
      {
        headers: {
          Host: "responsivefight.herokuapp.com",
          Connection: "keep-alive",
          "sec-ch-ua":
            '"Google Chrome";v="93", " Not;A Brand";v="99", "Chromium";v="93"',
          "Accept-Encoding": "identity;q=1, *;q=0",
          "sec-ch-ua-mobile": "?1",
          "User-Agent":
            "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Mobile Safari/537.36",
          "sec-ch-ua-platform": '"Android"',
          Accept: "*/*",
          "Sec-Fetch-Site": "same-origin",
          "Sec-Fetch-Mode": "no-cors",
          "Sec-Fetch-Dest": "video",
          Referer: "https://responsivefight.herokuapp.com/news",
          "Accept-Language": "en-AU,en;q=0.9,es;q=0.8",
          Range: "bytes=0-",
        },
      }
    );

    response = http.get(
      "https://responsivefight.herokuapp.com/api/getstage?user=alberto",
      {
        headers: {
          Host: "responsivefight.herokuapp.com",
          Connection: "keep-alive",
          "sec-ch-ua":
            '"Google Chrome";v="93", " Not;A Brand";v="99", "Chromium";v="93"',
          Accept: "*/*",
          "X-Requested-With": "XMLHttpRequest",
          "sec-ch-ua-mobile": "?1",
          "User-Agent":
            "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Mobile Safari/537.36",
          "sec-ch-ua-platform": '"Android"',
          "Sec-Fetch-Site": "same-origin",
          "Sec-Fetch-Mode": "cors",
          "Sec-Fetch-Dest": "empty",
          Referer: "https://responsivefight.herokuapp.com/news",
          "Accept-Encoding": "gzip, deflate, br",
          "Accept-Language": "en-AU,en;q=0.9,es;q=0.8",
        },
      }
    );

    response = http.get(
      "https://responsivefight.herokuapp.com/api/fetchquestion?btlfld=news_1",
      {
        headers: {
          Host: "responsivefight.herokuapp.com",
          Connection: "keep-alive",
          "sec-ch-ua":
            '"Google Chrome";v="93", " Not;A Brand";v="99", "Chromium";v="93"',
          Accept: "*/*",
          "X-Requested-With": "XMLHttpRequest",
          "sec-ch-ua-mobile": "?1",
          "User-Agent":
            "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Mobile Safari/537.36",
          "sec-ch-ua-platform": '"Android"',
          "Sec-Fetch-Site": "same-origin",
          "Sec-Fetch-Mode": "cors",
          "Sec-Fetch-Dest": "empty",
          Referer: "https://responsivefight.herokuapp.com/news",
          "Accept-Encoding": "gzip, deflate, br",
          "Accept-Language": "en-AU,en;q=0.9,es;q=0.8",
        },
      }
    );

    response = http.post(
      "https://responsivefight.herokuapp.com/api/checkanswer",
      {
        stage: "news_1",
        answer: "Continue+reading",
      },
      {
        headers: {
          Host: "responsivefight.herokuapp.com",
          Connection: "keep-alive",
          "sec-ch-ua":
            '"Google Chrome";v="93", " Not;A Brand";v="99", "Chromium";v="93"',
          Accept: "*/*",
          "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
          "X-Requested-With": "XMLHttpRequest",
          "sec-ch-ua-mobile": "?1",
          "User-Agent":
            "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Mobile Safari/537.36",
          "sec-ch-ua-platform": '"Android"',
          Origin: "https://responsivefight.herokuapp.com",
          "Sec-Fetch-Site": "same-origin",
          "Sec-Fetch-Mode": "cors",
          "Sec-Fetch-Dest": "empty",
          Referer: "https://responsivefight.herokuapp.com/news",
          "Accept-Encoding": "gzip, deflate, br",
          "Accept-Language": "en-AU,en;q=0.9,es;q=0.8",
        },
      }
    );

    response = http.post(
      "https://responsivefight.herokuapp.com/api/updateuser",
      {
        username: randName,
        score: "301",
      },
      {
        headers: {
          Host: "responsivefight.herokuapp.com",
          Connection: "keep-alive",
          "sec-ch-ua":
            '"Google Chrome";v="93", " Not;A Brand";v="99", "Chromium";v="93"',
          Accept: "*/*",
          "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
          "X-Requested-With": "XMLHttpRequest",
          "sec-ch-ua-mobile": "?1",
          "User-Agent":
            "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Mobile Safari/537.36",
          "sec-ch-ua-platform": '"Android"',
          Origin: "https://responsivefight.herokuapp.com",
          "Sec-Fetch-Site": "same-origin",
          "Sec-Fetch-Mode": "cors",
          "Sec-Fetch-Dest": "empty",
          Referer: "https://responsivefight.herokuapp.com/news",
          "Accept-Encoding": "gzip, deflate, br",
          "Accept-Language": "en-AU,en;q=0.9,es;q=0.8",
        },
      }
    );

    response = http.post(
      "https://covid19-logic.herokuapp.com/v1/graphql",
      '{"query":"mutation startJourney { insert_user_stage(objects: { username: \\"alberto\\", stage: \\"off_3\\"}, on_conflict: {constraint: user_stage_pkey, update_columns: stage}) { affected_rows } }"}',
      {
        headers: {
          Host: "covid19-logic.herokuapp.com",
          Connection: "keep-alive",
          "sec-ch-ua":
            '"Google Chrome";v="93", " Not;A Brand";v="99", "Chromium";v="93"',
          Accept: "*/*",
          "x-hasura-admin-secret": "57-Harry-Point",
          "Content-Type": "application/json",
          "sec-ch-ua-mobile": "?1",
          "User-Agent":
            "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Mobile Safari/537.36",
          "sec-ch-ua-platform": '"Android"',
          Origin: "https://responsivefight.herokuapp.com",
          "Sec-Fetch-Site": "cross-site",
          "Sec-Fetch-Mode": "cors",
          "Sec-Fetch-Dest": "empty",
          Referer: "https://responsivefight.herokuapp.com/",
          "Accept-Encoding": "gzip, deflate, br",
          "Accept-Language": "en-AU,en;q=0.9,es;q=0.8",
        },
      }
    );

    response = http.get(
      "https://responsivefight.herokuapp.com/api/fetchquestion?btlfld=off_3",
      {
        headers: {
          Host: "responsivefight.herokuapp.com",
          Connection: "keep-alive",
          "sec-ch-ua":
            '"Google Chrome";v="93", " Not;A Brand";v="99", "Chromium";v="93"',
          Accept: "*/*",
          "X-Requested-With": "XMLHttpRequest",
          "sec-ch-ua-mobile": "?1",
          "User-Agent":
            "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Mobile Safari/537.36",
          "sec-ch-ua-platform": '"Android"',
          "Sec-Fetch-Site": "same-origin",
          "Sec-Fetch-Mode": "cors",
          "Sec-Fetch-Dest": "empty",
          Referer: "https://responsivefight.herokuapp.com/news",
          "Accept-Encoding": "gzip, deflate, br",
          "Accept-Language": "en-AU,en;q=0.9,es;q=0.8",
        },
      }
    );

    response = http.options(
      "https://covid19-logic.herokuapp.com/v1/graphql",
      null,
      {
        headers: {
          Host: "covid19-logic.herokuapp.com",
          Connection: "keep-alive",
          Accept: "*/*",
          "Access-Control-Request-Method": "POST",
          "Access-Control-Request-Headers":
            "content-type,x-hasura-admin-secret",
          Origin: "https://responsivefight.herokuapp.com",
          "User-Agent":
            "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Mobile Safari/537.36",
          "Sec-Fetch-Mode": "cors",
          "Sec-Fetch-Site": "cross-site",
          "Sec-Fetch-Dest": "empty",
          Referer: "https://responsivefight.herokuapp.com/",
          "Accept-Encoding": "gzip, deflate, br",
          "Accept-Language": "en-AU,en;q=0.9,es;q=0.8",
        },
      }
    );
  });

  sleep(randomIntBetween(5, 10));
}
