import React, { useState } from "react";
import {
  TextField,
  Stack,
  Typography,
  Paper,
  Button,
  FormControl,
} from "@mui/material";
import { addNewActivity } from "./activitiesSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function PostActivity() {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [spotName, setSpotName] = useState("");

  const [amount, setAmount] = useState(0);

  const [putCardDown, setPutCardDown] = useState("");

  const [date, setDate] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(addNewActivity({ spotName, amount, putCardDown, date }));

    setSpotName("");

    setAmount("");

    setPutCardDown("");

    setDate("");

    navigate("/");
  };

  return (
    <div>
      <form
        style={{
          display: "flex",
          textAlign: "center",
          flexDirection: "column",
          width: "100%",
        }}
        onSubmit={handleSubmit}
      >
        <Stack spacing={8}>
          <FormControl
            variant="outlined"
            sx={{
              width: "100%",
              input: { color: "rgb(156 163 175)" },
              "& .MuiFormLabel-root": {
                color: "#066839",
              },
              "& .MuiOutlinedInput-root": {
                "& > fieldset": {
                  borderColor: "#066839",
                  boxShadow: "6",
                },
              },
              "& .MuiOutlinedInput-root.Mui-focused": {
                "& > fieldset": {
                  borderColor: "#066839",
                  boxShadow: "6",
                },
              },
            }}
          >
            <Paper elevation={6} sx={{ width: "100%", paddingTop: "15px" }}>
              <TextField
                required
                id="outlined-required"
                label="Spot Name"
                value={spotName}
                onChange={(event) => setSpotName(event.target.value)}
                sx={{ width: "100%" }}
              />
            </Paper>

            <Paper elevation={6} sx={{ width: "100%", paddingTop: "15px" }}>
              <TextField
                required
                id="outline-required"
                label="amount"
                value={amount}
                onChange={(event) => setAmount(event.target.value)}
                sx={{ width: "100%" }}
              />
            </Paper>

            <Paper elevation={6} sx={{ width: "100%", paddingTop: "15px" }}>
              <TextField
                required
                id="outline-required"
                label="Who Put Their Card Down"
                value={putCardDown}
                onChange={(event) => setPutCardDown(event.target.value)}
                sx={{ width: "100%" }}
              />
            </Paper>

            <Paper elevation={6} sx={{ width: "100%", paddingTop: "15px" }}>
              <TextField
                required
                id="outline-required"
                label="date"
                value={date}
                onChange={(event) => setDate(event.target.value)}
                sx={{ width: "100%" }}
              />
            </Paper>
          </FormControl>
        </Stack>

        <div style={{ paddingTop: "25px" }}>
          <Button type="submit" variant="contained">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}

export default PostActivity;
