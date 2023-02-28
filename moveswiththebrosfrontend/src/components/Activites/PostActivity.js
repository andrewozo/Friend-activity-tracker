import React, { useState } from "react";
import { Box, TextField, Stack, Typography, Container } from "@mui/material";
import { addNewActivity } from "./activitiesSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function PostActivity() {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [spotName, setSpotName] = useState("");

  const [amount, setAmount] = useState(0);

  const [name, setName] = useState("");

  const handleSubmit = async (event) => {
    event.prevenDefault();

    await dispatch(addNewActivity({ spotName, amount, name }));

    setSpotName("");

    setAmount("");

    setName("");

    navigate("/");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Box>
          <TextField
            required
            id="outlined-required"
            label="Required"
            value={spotName}
          />
        </Box>
      </form>
    </div>
  );
}

export default PostActivity;
