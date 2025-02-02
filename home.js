const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');

const app = express();
const port = 3000;

const users = [
	{
		id: '23',
		name: ' magdi',
		age: '25',
	},
	{
		id: '2',
		name: ' saleh',
		age: '22',
	},
	{
		id: '78',
		name: ' fathi',
		age: '58',
	},
];
const schema = buildSchema(`
    type User{
     id: String ,
    name: String ,
    age: String 
}
  type Query {
    hello: String ,
   usersGet:[User]
  }
`);

const resolver = {
	hello: () => 'hello world my name is ',
	usersGet: () => users,
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
