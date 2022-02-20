import { Schema, Types, model, Model } from "mongoose";

export interface Lyrics {
  likes: number;
  content: string;
  song: Types.ObjectId;
}

interface LyricModel extends Model<Lyrics> {
  like(id: string): any;
}

const LyricSchema = new Schema<Lyrics, LyricModel>({
  likes: { type: Number, default: 0 },
  content: { type: String },
  song: {
    type: Schema.Types.ObjectId,
    ref: "song",
  },
});

LyricSchema.static("like", async function like(id) {
  const lyric = await Lyric.findById(id);
  ++lyric!.likes;
  console.log(lyric);
  return await lyric!.save();
});

const Lyric = model<Lyrics, LyricModel>("lyric", LyricSchema);
export default Lyric;
