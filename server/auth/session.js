var expressSession = require("express-session");
var mongoStore = require("connect-mongodb-session")(expressSession);

var store = new mongoStore({
  uri: 'mongodb://Jasper:student1@ds247670.mlab.com:47670/capstone', 
  collection: "Sessions"
});

store.on("error", function(err) {
  console.log("[SESSION ERROR]", err);
});

// @ts-ignore
var session = expressSession({
  secret: "gbxnvjdfsvNEG9834ERVFNaof,mv afadnsz,gh9[q423woedcnQ;ENCA  RQ348GWVDSJNWRs  r8agsdihv2489w dxw8egj 294n8wveoni de8oatidf w", //CHANGE ME!!!!
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7 * 52 * 2,
  },
  store,
  resave: true,
  saveUninitialized: true
});

module.exports = session;