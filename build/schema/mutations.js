"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const song_1 = require("../models/song");
const lyric_1 = __importDefault(require("../models/lyric"));
const song_type_1 = __importDefault(require("./song_type"));
const lyric_type_1 = __importDefault(require("./lyric_type"));
const mutation = new graphql_1.GraphQLObjectType({
    name: "Mutation",
    fields: {
        addSong: {
            type: song_type_1.default,
            args: {
                title: { type: graphql_1.GraphQLString },
            },
            resolve(parentValue, { title }) {
                return new song_1.Song({ title }).save();
            },
        },
        addLyricToSong: {
            type: song_type_1.default,
            args: {
                content: { type: graphql_1.GraphQLString },
                songId: { type: graphql_1.GraphQLID },
            },
            resolve(parentValue, { content, songId }) {
                return song_1.Song.addLyric(songId, content);
            },
        },
        likeLyric: {
            type: lyric_type_1.default,
            args: { id: { type: graphql_1.GraphQLID } },
            resolve(parentValue, { id }) {
                return lyric_1.default.like(id);
            },
        },
        deleteSong: {
            type: song_type_1.default,
            args: { id: { type: graphql_1.GraphQLID } },
            resolve(parentValue, { id }) {
                return song_1.Song.remove({ _id: id });
            },
        },
    },
});
exports.default = mutation;
