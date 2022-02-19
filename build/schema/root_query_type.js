"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const song_type_1 = __importDefault(require("./song_type"));
const lyric_type_1 = __importDefault(require("./lyric_type"));
const lyric_1 = __importDefault(require("../models/lyric"));
const song_1 = __importDefault(require("../models/song"));
const RootQuery = new graphql_1.GraphQLObjectType({
    name: "RootQueryType",
    fields: () => ({
        songs: {
            type: new graphql_1.GraphQLList(song_type_1.default),
            resolve() {
                return song_1.default.find({});
            },
        },
        song: {
            type: song_type_1.default,
            args: { id: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLID) } },
            resolve(parentValue, { id }) {
                return song_1.default.findById(id);
            },
        },
        lyric: {
            type: lyric_type_1.default,
            args: { id: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLID) } },
            resolve(parentValue, { id }) {
                return lyric_1.default.findById(id);
            },
        },
    }),
});
exports.default = RootQuery;
