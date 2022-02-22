import * as React from "react";
import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import { GET_SONGS } from "../queries/getSongs";

interface Song {
  title: string;
  id: string;
}

const SongList = () => {
  const { loading, data } = useQuery(GET_SONGS);

  if (loading) return null;

  return (
    <div>
      <ul className="collection">
        {data.songs.map((song: Song) => (
          <li className="collection-item" key={song.id}>
            {song.title}
          </li>
        ))}
      </ul>
      <Link to="songs/new" className="btn-floating btn-large red right">
        <i className="material-icons">add</i>
      </Link>
    </div>
  );
};

export default SongList;
