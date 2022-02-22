import React, { useState } from "react";
import { gql, useMutation } from "@apollo/client";

interface SongCreateProps {
  someProp?: any;
}
const mutation = gql`
  mutation AddSong($title: String) {
    addSong(title: $title) {
      title
    }
  }
`;

const SongCreate = ({ someProp }: SongCreateProps) => {
  const [input, setInput] = useState("");
  const [addSong, { data, loading, error }] = useMutation(mutation);
  console.log(data);

  const onSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    addSong({ variables: { title: input } });
  };

  return (
    <div>
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
