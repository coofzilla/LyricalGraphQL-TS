"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const song_type_1 = __importDefault(require("./song_type"));
const lyric_1 = require("../models/lyric");
const LyricType = new graphql_1.GraphQLObjectType({
    name: "LyricType",
    fields: () => ({
        id: { type: graphql_1.GraphQLID },
        likes: { type: graphql_1.GraphQLInt },
        content: { type: graphql_1.GraphQLString },
        song: {
            type: song_type_1.default,
            async resolve(parentValue) {
                const lyric = await lyric_1.Lyric.findById(parentValue).populate("song");
                console.log(lyric);
                return lyric.song;
            },
        },
    }),
});
exports.default = LyricType;
