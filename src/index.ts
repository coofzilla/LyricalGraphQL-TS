import express from "express";
import mongoose from "mongoose";
import { mongoURI } from "./config/dev";
import { graphqlHTTP } from "express-graphql";
import { schema } from "./schema/schema";

const app = express();

(async () => {
  try {
    mongoose.Promise = global.Promise;
    await mongoose.connect(mongoURI);
    console.log("CONNECTED TO MONGODB");
  } catch (err) {
    console.log("ERROR CONNECTING", err);
  }
})();

app.get("/", (req, res) => {
  res.send("LYRICAL SERVER");
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(4000, () => {
  console.log("LISTENING ON 4000");
});
