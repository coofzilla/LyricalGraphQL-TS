import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLInt,
  GraphQLString,
} from "graphql";
import SongType from "./song_type";
import Lyric from "../models/lyric";

const LyricType: GraphQLObjectType = new GraphQLObjectType({
  name: "LyricType",
  fields: () => ({
    id: { type: GraphQLID },
    likes: { type: GraphQLInt },
    content: { type: GraphQLString },
    song: {
      type: SongType,
      async resolve(parentValue) {
        const lyric = await Lyric.findById(parentValue).populate("song");
        return lyric!.song;
      },
    },
  }),
});

export default LyricType;
