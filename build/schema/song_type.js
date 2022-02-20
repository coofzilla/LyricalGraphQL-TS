"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const lyric_type_1 = __importDefault(require("./lyric_type"));
const song_1 = __importDefault(require("../models/song"));
const SongType = new graphql_1.GraphQLObjectType({
    // {__typename: 'SongType', title: 'hot night'}
    name: "SongType",
    fields: () => ({
        id: { type: graphql_1.GraphQLID },
        title: { type: graphql_1.GraphQLString },
        lyrics: {
            type: new graphql_1.GraphQLList(lyric_type_1.default),
            resolve(parentValue) {
                return song_1.default.findLyrics(parentValue.id);
            },
        },
    }),
});
exports.default = SongType;
