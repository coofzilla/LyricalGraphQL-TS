import { useQuery } from "@apollo/client";
import { GET_SONG } from "../queries/getSong";
import { Link, useParams } from "react-router-dom";
import LyricCreate from "./LyricCreate";
import LyricList from "./LyricList";

const SongDetail = () => {
  const { id } = useParams();
  const { loading, data } = useQuery(GET_SONG, {
    variables: { id },
  });
  if (loading) return null;
  const { song } = data;

  return (
    <div>
      <Link to="/">Back</Link>
      <h3>{song.title}</h3>
      <LyricList lyrics={song.lyrics} />
      <LyricCreate songId={id} />
    </div>
  );
};

export default SongDetail;
