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
      {data.songs.map((song: Song) => (
        <li key={song.id}>{song.title}</li>
      ))}
    </div>
  );
};

export default SongList;
