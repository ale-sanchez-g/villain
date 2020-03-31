# villain
covid19 the villain

## Requirements

- node 10x or above
- docker

## Get started

- clone repo `git clone https://github.com/ale-sanchez-g/villain`
- run `npm install`
- run `npm start` or `node app/index.js $PORT`

## Test

- must start the server with port 3000
- run `npm test`

## Details

This will simply return a JSON payload with covid19 like below

```json
[
    {
        "id": 1,
        "type": "covid19",
        "displayName": "CORONA",
        "img": "covid19.jpg"
    }
]
```