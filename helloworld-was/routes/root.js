'use strict'

module.exports = async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {
    return "김밥 10줄 주세요!"
  })
}
