const auth = require('./auth');

//Test auth controller
let payload = auth.generateToken({'key':'test'});
console.log (payload);
sleepFor(1000);
let decoded = auth.verifyToken(payload.token);
decoded.key == 'test';
console.log(decoded);


function sleepFor(sleepDuration){
    var now = new Date().getTime();
    while(new Date().getTime() < now + sleepDuration){ 
        /* Do nothing */ 
    }
}