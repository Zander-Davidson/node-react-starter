const exampleContext = require("../contexts/exampleContexts");

exports.getHelloText = async (req, res) => {
    let resp = await exampleContext.getHelloText();

    if (resp.ok) {
        res.status(200).json({
            message: `Returned hello text.`,
            helloText: resp.obj
        });
    }  else {
        res.status(500).json({
            message: 'An error occurred while getting helloText',
            error: resp.error
        });
    }
};