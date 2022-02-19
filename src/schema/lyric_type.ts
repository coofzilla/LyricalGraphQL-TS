import mongoose from "mongoose";

import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLInt,
  GraphQLString,
} from "graphql";
import SongType from "./song_type";
import  Lyric  from "../models/lyric";

const LyricType: any = new GraphQLObjectType({
  name: "LyricType",
  fields: () => ({
    id: { type: GraphQLID },
    likes: { type: GraphQLInt },
    content: { type: GraphQLString },
    song: {
      type: SongType,
      async resolve(parentValue) {
        const lyric = await Lyric.findById(parentValue).populate("song");
        console.log(lyric);
        return lyric!.song;
      },
    },
  }),
});

export default LyricType;
