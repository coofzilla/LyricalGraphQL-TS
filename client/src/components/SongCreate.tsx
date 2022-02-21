import { useState } from "react";

interface SongCreateProps {
  someProp?: any;
}

const SongCreate = ({ someProp }: SongCreateProps) => {
  return (
    <div>
      <h1>Create a New Song</h1>
      <form></form>
    </div>
  );
};

export default SongCreate;
