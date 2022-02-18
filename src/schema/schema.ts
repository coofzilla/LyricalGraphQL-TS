import { GraphQLSchema } from "graphql";
import RootQuery from "./root_query_type";

export const schema = new GraphQLSchema({
  query: RootQuery,
});
