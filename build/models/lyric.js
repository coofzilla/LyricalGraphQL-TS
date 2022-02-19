"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const LyricSchema = new mongoose_1.Schema({
    likes: { type: Number, default: 0 },
    content: { type: String },
    song: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "song",
    },
});
LyricSchema.static("like", async function like(id) {
    //   const Lyric = mongoose.model<Lyrics>("lyric");
    const lyric = await Lyric.findById(id);
    ++lyric.likes;
    return await lyric.save();
});
const Lyric = (0, mongoose_1.model)("lyric", LyricSchema);
exports.default = Lyric;
