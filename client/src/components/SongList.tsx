import * as React from "react";
import { gql, useQuery } from "@apollo/client";
import { Link } from "react-router-dom";

interface Song {
  title: string;
  id: string;
}

const query = gql`
  {
    songs {
      title
      id
    }
  }
`;

const SongList = () => {
  const { loading, data } = useQuery(query);

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
