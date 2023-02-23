import React, { useEffect } from "react";
import { fetchAllActivities } from "./activitiesSlice";
import { useDispatch, useSelector } from "react-redux";

function Activities() {
  const dispatch = useDispatch();

  const activities = useSelector((state) => state.activities.allActivities);

  useEffect(() => {
    dispatch(fetchAllActivities());
  }, []);

  console.log(activities);
  return (
    <div>
      <p>Hello</p>
    </div>
  );
}

export default Activities;
