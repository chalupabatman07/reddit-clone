import fastify from 'fastify';
import mercurius from 'mercurius';

import { createTypeGraphQLSchema } from './temp/createTypeGraphQLSchema';

const app = fastify();

(async () => {
  const schema = await createTypeGraphQLSchema();
  app.register(mercurius, {
    schema,
    graphiql: true,
  });
  app.listen(8080, (): void => console.log(`SERVER STARTED ON PORT 8080`));
})();
