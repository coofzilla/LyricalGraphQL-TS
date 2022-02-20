import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLList,
} from "graphql";

import LyricType from "./lyric_type";
import Song from "../models/song";

const SongType = new GraphQLObjectType({
  // {__typename: 'SongType', title: 'hot night'}
  name: "SongType",
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    lyrics: {
      type: new GraphQLList(LyricType),
      resolve(parentValue) {
        return Song.findLyrics(parentValue.id);
      },
    },
  }),
});

export default SongType;
