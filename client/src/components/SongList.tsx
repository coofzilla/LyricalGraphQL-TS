import * as React from "react";
import { gql, useQuery } from "@apollo/client";

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
    </div>
  );
};

export default SongList;
