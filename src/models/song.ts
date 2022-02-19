import { Schema, Types, model, Model } from "mongoose";
import Lyric from "./lyric";

interface Songs {
  title: string;
  user: Types.ObjectId;
  lyrics: Types.ObjectId;
}

interface SongModel extends Model<Songs> {
  addLyric(songId: any, content: any): any;
  findLyrics(id: any): any;
}

const SongSchema = new Schema<Songs, SongModel>({
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

//modify to async w/ "static"
SongSchema.statics.addLyric = function (id, content) {
  return this.findById(id).then((song: any) => {
    const lyric = new Lyric({ content, song });
    song.lyrics.push(lyric);
    return Promise.all([lyric.save(), song.save()]).then(
      ([lyric, song]) => song
    );
  });
};

SongSchema.static("findLyrics", async function findLyrics(id) {
  const song = await Song.findById(id).populate("lyrics");
  return song!.lyrics;
});

const Song = model<Songs, SongModel>("song", SongSchema);
export default Song;
