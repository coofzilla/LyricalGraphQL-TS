import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLList,
} from "graphql";
import mongoose from "mongoose";
import LyricType from "./lyric_type";
import { Song } from "../models/song";

const SongType = new GraphQLObjectType({
  name: "SongType",
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    lyrics: {
      type: new GraphQLList(LyricType),
      resolve(parentValue) {
        console.log("SONG IS", Song);
        return Song.findLyrics(parentValue.id);
      },
    },
  }),
});

export default SongType;
