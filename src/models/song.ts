import mongoose, { Schema } from "mongoose";
import { Lyric } from "./lyric";

const SongSchema = new Schema({
  title: { type: String },
  user: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
  lyrics: [
    {
      type: Schema.Types.ObjectId,
      ref: "lyric",
    },
  ],
});

SongSchema.statics.addLyric = function (id, content) {
  return this.findById(id).then((song: any) => {
    const lyric = new Lyric({ content, song });
    song.lyrics.push(lyric);
    return Promise.all([lyric.save(), song.save()]).then(
      ([lyric, song]) => song
    );
  });
};

SongSchema.statics.findLyrics = function (id) {
  return this.findById(id)
    .populate("lyrics")
    .then((song: any) => song.lyrics);
};

export const Song = mongoose.model("song", SongSchema);


