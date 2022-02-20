import * as React from "react";
import { gql, useQuery } from "@apollo/client";

interface SongListProps {}

const query = gql`
  {
    songs {
      title
    }
  }
`;

const SongList: React.FC<SongListProps> = () => {
  const { loading, error, data } = useQuery(query);
  console.log(data);
  return (
    <div>
      Song List
      <div></div>
    </div>
  );
};

export default SongList;
