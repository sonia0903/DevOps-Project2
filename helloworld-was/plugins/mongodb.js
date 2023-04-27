const fastify = require('fastify')()

fastify.register(require('@fastify/mongodb'), {
  // force to close the mongodb connection when app stopped
  // the default value is false
  forceClose: true,
  
  url: 'mongodb://root:example@localhost:27017/?authMechanism=DEFAULT'
})

fastify.get('/user/:id', function (req, reply) {
  // Or this.mongo.client.db('mydb').collection('users')
  const users = this.mongo.db.collection('users')

  // if the id is an ObjectId format, you need to create a new ObjectId
  const id = this.mongo.ObjectId(req.params.id)
  users.findOne({ id }, (err, user) => {
    if (err) {
      reply.send(err)
      return
    }
    reply.send(user)
  })
})

// fastify.listen({ port: 3000 }, err => {
//   if (err) throw err
// })