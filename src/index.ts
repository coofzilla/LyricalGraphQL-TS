import express from "express";
import { graphqlHTTP } from "express-graphql";
import { schema } from "./schema/schema";
import mongoose from "mongoose";
import { mongoURI } from "./config/dev";

const app = express();

(async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("CONNECTED TO MONGODB");
  } catch (err) {
    console.log("ERROR CONNECTING", err);
  }
})();

// app.use(
//   "/graphql",
//   graphqlHTTP({
//     schema,
//     graphiql: true,
//   })
// );

app.listen(4000, () => {
  console.log("LISTENING ON 4000");
});
