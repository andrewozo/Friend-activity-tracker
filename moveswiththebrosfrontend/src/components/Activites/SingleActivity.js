import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchSingleActivity } from "./activitiesSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  Typography,
  Box,
  Paper,
  createTheme,
  ThemeProvider,
  Button,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

function SingleActivity() {
  const { id } = useParams();

  const dispatch = useDispatch();

  const activity = useSelector((state) => state.activities.singleActivity);

  useEffect(() => {
    dispatch(fetchSingleActivity(id));
  }, [dispatch, id]);
  console.log(activity);

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
        <Box sx={{ width: "100%", paddingTop: "75px", boxShadow: 8 }}>
          <Paper
            style={{
              margin: "10px",
              padding: "10px",
              backgroundColor: "#f0efeb",
            }}
          >
            <Typography
              color="primary"
              align="center"
              sx={{ fontWeight: "bold" }}
              component="div"
              variant="h4"
            >
              {activity.spotName}
            </Typography>
            <Typography
              color="primary"
              align="center"
              sx={{ fontWeight: "bold" }}
              component="div"
              variant="h4"
            >
              {activity.amount}
            </Typography>
            <Typography
              color="primary"
              align="center"
              sx={{ fontWeight: "bold" }}
              component="div"
              variant="h4"
            >
              {activity.putCardDown}
            </Typography>
            <Typography
              color="primary"
              align="center"
              sx={{ fontWeight: "bold" }}
              component="div"
              variant="h4"
            >
              {activity.date}
            </Typography>
            <Box textAlign="center" sx={{ paddingTop: "50px" }}>
              <Button
                color="secondary"
                variant="contained"
                startIcon={<DeleteIcon />}
                sx={{ justifyContent: "center" }}
              >
                <Typography
                  color="primary"
                  align="center"
                  sx={{ fontWeight: "bold" }}
                >
                  Delete
                </Typography>
              </Button>
            </Box>
          </Paper>
        </Box>
      </ThemeProvider>
    </div>
  );
}

export default SingleActivity;
