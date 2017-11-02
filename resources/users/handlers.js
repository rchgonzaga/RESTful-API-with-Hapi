'use strict'

const Boom = require('boom')

exports.create = (request, reply) => {

    const {username, password} = request.payload

    if(username === 'rafael'){
        reply(Boom.badData('This user already exists'))
    } else {
        reply({success: true, data: request.payload, query: request.query})
    }
}