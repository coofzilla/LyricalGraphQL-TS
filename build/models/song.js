"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const lyric_1 = __importDefault(require("./lyric"));
const SongSchema = new mongoose_1.Schema({
    title: { type: String },
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "user",
    },
    lyrics: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: "lyric",
        },
    ],
});
//modify to async w/ "static"
SongSchema.statics.addLyric = function (id, content) {
    return this.findById(id).then((song) => {
        const lyric = new lyric_1.default({ content, song });
        song.lyrics.push(lyric);
        return Promise.all([lyric.save(), song.save()]).then(([lyric, song]) => song);
    });
};
SongSchema.static("findLyrics", async function findLyrics(id) {
    const song = await Song.findById(id).populate("lyrics");
    return song.lyrics;
});
const Song = (0, mongoose_1.model)("song", SongSchema);
exports.default = Song;
