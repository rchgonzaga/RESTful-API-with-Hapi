'use strict'

const Joi = require('joi')
const handlers = require('./handlers')

// http://localhost:3000/api/v1/users?alert=true
// query: query string
module.exports = [{
    method: 'POST',
    path: '/api/v1/users',
    handler: handlers.create,
    config: {
        validate:{
            payload: Joi.object({
                username: Joi.string().required(),
                password: Joi.string().required(),
                timestamp: Joi.any().forbidden().default((new Date).getTime())
            }),
            query: {
                alert: Joi.boolean().default(false)
            }
        }
    }
}]