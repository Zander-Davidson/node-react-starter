const getDb = require("../db").getDb;
const exampleModels = require("../models/exampleModels");

const getHelloText = async () => {
    // this is just an example, but here you can query a db using getDb

    try {
        let obj = new exampleModels.HelloText("hello world!");
        return {ok: true, obj: obj};
    } catch (err) {
        return {ok: false, error: err};
    }
};

const exampleContext = {
    getHelloText
};

module.exports = exampleContext;