import React, { useState } from "react";
import {
  TextField,
  Stack,
  Typography,
  Paper,
  Button,
  FormControl,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import { addNewActivity } from "./activitiesSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import ImageUpload from "./ImageUpload";

function PostActivity() {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [spotName, setSpotName] = useState("");

  const [amount, setAmount] = useState(0);

  const [putCardDown, setPutCardDown] = useState("");

  const [date, setDate] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    await dispatch(addNewActivity({ spotName, amount, putCardDown, date }));

    setSpotName("");

    setAmount(0);

    setPutCardDown("");

    setDate("");

    navigate("/");
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: "#284b63",
      },
      secondary: {
        main: "#fca311",
      },
    },
  });

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Paper
          elevation={0}
          sx={{ width: "100%", paddingTop: "80px", paddingBottom: "25px" }}
        >
          <Typography
            color="primary"
            align="center"
            sx={{ fontWeight: "bold" }}
            component="div"
            variant="h4"
          >
            Add New Activity
          </Typography>
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
                <Paper elevation={0} sx={{ width: "100%", paddingTop: "15px" }}>
                  <TextField
                    required
                    id="outlined-required"
                    label="Spot Name"
                    value={spotName}
                    onChange={(event) => setSpotName(event.target.value)}
                    sx={{ width: "40%" }}
                  />
                </Paper>

                <Paper elevation={0} sx={{ width: "100%", paddingTop: "15px" }}>
                  <TextField
                    required
                    id="outline-required"
                    label="Amount"
                    value={amount}
                    onChange={(event) => setAmount(event.target.value)}
                    sx={{ width: "40%" }}
                  />
                </Paper>

                <Paper elevation={0} sx={{ width: "100%", paddingTop: "15px" }}>
                  <TextField
                    required
                    id="outline-required"
                    label="Who Put Their Card Down"
                    value={putCardDown}
                    onChange={(event) => setPutCardDown(event.target.value)}
                    sx={{ width: "40%" }}
                  />
                </Paper>

                <Paper elevation={0} sx={{ width: "100%", paddingTop: "15px" }}>
                  <TextField
                    required
                    id="outline-required"
                    label="Date"
                    value={date}
                    onChange={(event) => setDate(event.target.value)}
                    sx={{ width: "40%" }}
                  />
                </Paper>
              </FormControl>
            </Stack>
            <div>
              <ImageUpload />
            </div>

            <div style={{ paddingTop: "25px" }}>
              <Button type="submit" variant="contained" sx={{ width: "25%" }}>
                Submit
              </Button>
            </div>
          </form>
        </Paper>
      </ThemeProvider>
    </div>
  );
}

export default PostActivity;
