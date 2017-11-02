'use strict'

const Hapi = require("hapi");
const Joi = require('joi');
const server = new Hapi.Server();

server.connection({
    "host": "localhost",
    "port": 3000
});

// Registering controllers
server.register({
    register: require('hapi-router'),
    options: {
        routes: 'resources/**/routes.js'
    }
});

server.route({
    method: "GET",
    path: "/",
    handler: (request, response) => {
        response("Aossss")
    }
});

// Check if this module being called from the command line
// If it is, runs the server
// If not, just export the module
if(require.main === module){
    server.start(error => {
        if(error){
            throw error;
        }
        console.log("Listen: " + server.info.uri);
    });
} else {
    module.exports = server
}