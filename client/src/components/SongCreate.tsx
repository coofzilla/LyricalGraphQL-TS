import { useState } from "react";

interface SongCreateProps {
  someProp?: any;
}

const SongCreate = ({ someProp }: SongCreateProps) => {
  const [input, setInput] = useState("");

  return (
    <div>
      <h1>Create a New Song</h1>
      <form>
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
