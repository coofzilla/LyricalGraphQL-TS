import * as React from "react";
import { gql, useQuery, useMutation } from "@apollo/client";
import { Link } from "react-router-dom";
import { GET_SONGS } from "../queries/getSongs";

interface Song {
  title: string;
  id: string;
}

const DELETE_SONG = gql`
  mutation DeleteSong($id: ID) {
    deleteSong(id: $id) {
      id
      title
    }
  }
`;

const SongList = () => {
  const { loading, data } = useQuery(GET_SONGS);
  const [deleteSong] = useMutation(DELETE_SONG, {
    refetchQueries: [GET_SONGS],
  });

  if (loading) return null;

  return (
    <div>
      <ul className="collection">
        {data.songs.map(({ title, id }: Song) => (
          <li className="collection-item" key={id}>
            <Link to={`/songs/${id}`}>{title}</Link>
            <i
              className="material-icons"
              onClick={() => deleteSong({ variables: { id } })}
            >
              delete
            </i>
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
