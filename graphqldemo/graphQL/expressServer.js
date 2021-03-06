var express = require('express');
var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');
 
// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type Query {
    name: String
    age: Int
    rollThreeDice: [Int]
  }
`);
 
// The root provides a resolver function for each API endpoint
// to be clear, you can consider it is a mongo db stuff like that
var root = {
  name: () => {
    return 'Sijian Chen';
  },
  age: () =>{
      return 21;
  },
  rollThreeDice: () => {
    return [1, 2, 3].map(_ => 1 + Math.floor(Math.random() * 6));
  },
};
 
var app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
app.listen(4000);
console.log('Running a GraphQL API server at http://localhost:4000/graphql');
