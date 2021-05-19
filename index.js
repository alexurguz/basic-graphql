'use strict'

const { graphql, buildSchema } = require('graphql')

// Define schema
const schema = buildSchema(`
  type Query {
    world: String
    people: String
  }
`)

// Configurate the resolvers
const resolvers = {
  world: () => {
    return 'Hello World'
  },
  people: () => {
    return 'Hello People'
  }
}

// Execute query people
graphql(schema, '{ people }', resolvers).then((data) => {
  console.log(data)
})