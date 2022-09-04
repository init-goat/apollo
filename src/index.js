import express from 'express'
import { ApolloServer } from 'apollo-server-express';
import resolver from './gql/resolver.js';
import typeDefs from './gql/schema.js';

import { port } from './config.js';

const server = new ApolloServer({ typeDefs, resolver });
const exp = express();
server.applyMiddleware({ exp });

exp.get('/', (req, res) => {
    console.log("Apollo GraphQL Express server is ready");
});

exp.listen({ port: port }, () => {
    console.log(`Server is running at http://localhost:${port+server.graphqlPath}`);
});