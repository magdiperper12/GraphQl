const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');

const app = express();
const port = 3000;

const schema = buildSchema(`
  type Query {
    hello: String 
  }
`);

const resolver = {
	hello: () => 'hello world my name is magdi',
};

app.use(
	'/graphql',
	graphqlHTTP({
		schema,
		rootValue: resolver,
		graphiql: true, // Enables the GraphiQL UI for testing
	})
);

app.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}/graphql`);
});
