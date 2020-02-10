import { GraphQLSchema } from 'graphql';
import { buildSchema } from 'type-graphql';

import { ProjectResolver } from './project.resolver';

export async function generateSchema(): Promise<GraphQLSchema> {
  try {
    const schema = await buildSchema({
      resolvers: [ProjectResolver],
      validate: true,
    });

    return schema;
  } catch (e) {
    console.error(e);
    throw e;
  }
}

describe("Project", () => {
    let schema: GraphQLSchema;

    beforeAll(async () => {
        schema = await generateSchema();
    });

    it("should build schema without errors", async () => {
        expect(schema).toBeDefined();
    });
});
