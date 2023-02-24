import React, { useEffect } from "react";
import { fetchAllActivities } from "./activitiesSlice";
import { useDispatch, useSelector } from "react-redux";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";

function Activities() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

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
          <div>
            <Box sx={{ width: "100%" }}>
              <Stack spacing={2}>
                <Item>
                  <p>{activity.spotName}</p>
                  <p>{activity.amount}</p>
                  <p>{activity.putCardDown}</p>
                  <p>{activity.date}</p>
                </Item>
              </Stack>
            </Box>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Activities;
