import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
function TodoInput({ onAdd }) {
  const [state, setState] = useState("");

  return (
    <div>
      {/* <input
       
      /> */}
      <TextField
        label="Add Events Here"
        value={state}
        onChange={(e) => setState(e.target.value)}
        placeholder="Add something"
        color="secondary"
        focused
      />
      <Button
        variant="contained"
        style={{ marginTop: "10px" }}
        onClick={() => {
          onAdd(state);
          setState("");
        }}
      >
        ADD
      </Button>
    </div>
  );
}

export default TodoInput;
