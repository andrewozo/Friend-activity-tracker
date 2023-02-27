import React, { useEffect } from "react";
import { fetchAllActivities } from "./activitiesSlice";
import { useDispatch, useSelector } from "react-redux";
import { styled } from "@mui/material/styles";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Typography, Divider, Box, Paper, Stack } from "@mui/material";
import { Link } from "react-router-dom";

function Activities() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#edf6f9",
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const theme = createTheme({
    typography: {
      fontFamily: [
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(","),
    },
  });

  const dispatch = useDispatch();

  const activities = useSelector((state) => state.activities.allActivities);

  useEffect(() => {
    dispatch(fetchAllActivities());
  }, []);

  console.log(activities);
  return (
    <div>
      <div>
        {activities.map((activity) => (
          <div key={activity.id}>
            <ThemeProvider theme={theme}>
              <Link to={`/${activity.id}`}>
                <Box sx={{ width: "100%" }}>
                  <Stack spacing={4}>
                    <Paper eleveation={6} style={{ margin: "10px" }}>
                      <Item>
                        <Typography sx={{ fontWeight: "bold" }}>
                          {activity.spotName}
                        </Typography>
                        <Typography sx={{ fontWeight: "bold" }}>
                          {activity.putCardDown}
                        </Typography>
                        <Typography sx={{ fontWeight: "bold" }}>
                          {activity.amount}
                        </Typography>
                        <Typography sx={{ fontWeight: "bold" }}>
                          {activity.date}
                        </Typography>
                      </Item>
                      <Divider />
                    </Paper>
                  </Stack>
                </Box>
              </Link>
            </ThemeProvider>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Activities;
