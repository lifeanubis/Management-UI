import React from "react";
import Profiles from "./TaskData";

import { Doughnut } from "react-chartjs-2";
function TaskChart() {
  let c = 0;
  let d = 0;

  let activity = Profiles.map((profile) =>
    profile.status === "active" ? c++ : d++
  );

  console.log(c, d);

  let state = {
    labels: ["completed", "active"],
    datasets: [
      {
        label: "task",
        backgroundColor: ["#00A6B4", "#6800B4"],
        hoverBackgroundColor: ["#4B5000", "#175000"],
        data: [d, c],
      },
    ],
  };

  return (
    <div>
      <Doughnut
        height="250px"
        data={state}
        options={{
          title: {
            display: true,
            text: "Task Tracker",
            fontSize: 15,
          },

          legend: {
            display: true,
            position: "bottom",
          },
        }}
      />
    </div>
  );
}

export default TaskChart;
