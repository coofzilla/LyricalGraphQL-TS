import { GraphQLSchema } from "graphql";
import RootQuery from "./root_query_type";
import mutation from "./mutations";

export const schema = new GraphQLSchema({
  query: RootQuery,
  mutation,
});
