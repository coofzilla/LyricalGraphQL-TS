import mongoose, { Schema } from "mongoose";

const LyricSchema = new Schema({
  song: {
    type: Schema.Types.ObjectId,
    ref: "song",
  },
  likes: { type: Number, default: 0 },
  content: { type: String },
});

LyricSchema.statics.like = async function (id) {
  // const Lyric = mongoose.model("lyric");

  const lyric = await Lyric.findById(id);
  ++lyric!.likes;
  return await lyric.save();
};

export const Lyric = mongoose.model("lyric", LyricSchema);
