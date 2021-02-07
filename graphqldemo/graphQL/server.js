var { graphql, buildSchema } = require('graphql');
 
// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type Query {
    hello: String,
    age: Int
  }
`);
 
// The root provides a resolver function for each API endpoint
var root = {
  hello: () => {
    return 'Hello world!';
  },
  age: () =>{
    return 21;
  }
};
 
// Run the GraphQL query '{ hello }' and print out the response
graphql(schema, '{hello,age }', root).then((response) => {
  console.log(response);
});