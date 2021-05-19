'use strict'

const { graphql, buildSchema } = require('graphql')

// Define schema
const schema = buildSchema(`
  type Query {
    hello: String
  }
`)

// Execute query hello
graphql(schema, '{ hello }').then((data) => {
  console.log(data)
})