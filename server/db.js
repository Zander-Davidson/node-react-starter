// create a singleton db driver, and a function to access it on demand. when accessed,
// create a new session to make queries, and REMEMBER TO CLOSE THE SESSION AFFTER

const assert = require("assert");

let _db;

const isDev = process.env.NODE_ENV !== 'production';

const dbURL = process.env.DB_URL;
const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASSWORD;
var dbEncryption;

if (isDev) {
    dbEncryption = 'ENCRYPTION_OFF';
} else {
    dbEncryption = 'ENCRYPTION_ON';
}

function initDb() {
    if (_db) {
        console.warn("Trying to init DB again!");
        return;
    }
    
    try {
        // initialize db here
    }
    catch(err) {
        console.log("Error while trying to create instance of NeO4j driver: " + err.message);
    }
}

function getDb() {
    assert.ok(_db, "Db has not been initialized. Please call init first.");
    return _db;
}

module.exports = {
    getDb,
    initDb
};


