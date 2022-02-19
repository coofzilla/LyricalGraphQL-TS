"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const song_type_1 = __importDefault(require("./song_type"));
const mongoose_1 = __importDefault(require("mongoose"));
const lyric_type_1 = __importDefault(require("./lyric_type"));
const Song = mongoose_1.default.model("song");
const Lyric = mongoose_1.default.model("lyric");
const RootQuery = new graphql_1.GraphQLObjectType({
    name: "RootQueryType",
    fields: () => ({
        songs: {
            type: new graphql_1.GraphQLList(song_type_1.default),
            resolve() {
                return Song.find({});
            },
        },
        song: {
            type: song_type_1.default,
            args: { id: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLID) } },
            resolve(parentValue, { id }) {
                return Song.findById(id);
            },
        },
        lyric: {
            type: lyric_type_1.default,
            args: { id: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLID) } },
            resolve(parentValue, { id }) {
                return Lyric.findById(id);
            },
        },
    }),
});
exports.default = RootQuery;
