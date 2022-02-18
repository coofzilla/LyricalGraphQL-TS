import express from "express";
import { graphqlHTTP } from "express-graphql";

const app = express();

app.listen(4000, () => {
  console.log("LISTENING ON 4001");
});
