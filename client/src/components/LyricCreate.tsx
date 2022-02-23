import React, { useState } from "react";
import { gql, useMutation } from "@apollo/client";

interface LyricCreateProps {
  songId?: string;
}

const ADD_LYRIC_TO_SONG = gql`
  mutation AddLyricToSong($content: String, $songId: ID) {
    addLyricToSong(content: $content, songId: $songId) {
      id
      lyrics {
        content
      }
    }
  }
`;

const LyricCreate = ({ songId }: LyricCreateProps) => {
  const [content, setContent] = useState("");
  const [addLyric] = useMutation(ADD_LYRIC_TO_SONG);

  const onSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    addLyric({ variables: { content, songId } });
    setContent("");
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <label>Add a Lyric</label>
      <input value={content} onChange={(e) => setContent(e.target.value)} />
    </form>
  );
};

export default LyricCreate;
