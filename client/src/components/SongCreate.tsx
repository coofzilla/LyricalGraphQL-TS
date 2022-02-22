import React, { useState } from "react";
import { gql, useMutation } from "@apollo/client";
import { useNavigate, Link } from "react-router-dom";
import { GET_SONGS } from "../queries/getSongs";

interface SongCreateProps {
  someProp?: any;
}

//Define Mutation
//https://graphql.org/learn/queries/ **variables section**
const ADD_SONG = gql`
  mutation AddSong($title: String) {
    addSong(title: $title) {
      title
    }
  }
`;

const SongCreate = ({ someProp }: SongCreateProps) => {
  const [input, setInput] = useState("");
  // can destructure { data, loading, error } if needed from useMutation
  const [addSong] = useMutation(ADD_SONG, {
    refetchQueries: [GET_SONGS],
  });
  let navigate = useNavigate();

  const onSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    addSong({ variables: { title: input } });
    navigate("/");
  };

  return (
    <div>
      <Link to="/">Back</Link>
      <h3>Create a New Song</h3>
      <form onSubmit={onSubmitHandler}>
        <label>Song Title: </label>
        <input
          type="text"
          value={input}
          //controlled input w/component level state
          onChange={(e) => setInput(e.target.value)}
        />
      </form>
    </div>
  );
};

export default SongCreate;
