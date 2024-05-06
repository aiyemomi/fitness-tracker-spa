import {
  FitnessCenterRounded,
  LocalFireDepartmentRounded,
  TimelineRounded,
} from "@mui/icons-material";

export const body_data = [
  {
    name: "Calories Burned",
    icon: (
      <LocalFireDepartmentRounded sx={{ color: "inherit", fontSize: "26px" }} />
    ),
    desc: "Total calories burned today",
    key: "totalCaloriesBurnt",
    unit: "kcal",
    color: "#eb9e34",
    lightColor: "#FDF4EA",
    calorie: 1560,
  },
  {
    name: "Workouts",
    icon: <FitnessCenterRounded sx={{ color: "inherit", fontSize: "26px" }} />,
    desc: "Total no of workouts for today",
    key: "totalWorkouts",
    unit: "",
    color: "#41C1A6",
    lightColor: "#E8F6F3",
    calorie: 10,
  },
  {
    name: "Average  Calories Burned",
    icon: <TimelineRounded sx={{ color: "inherit", fontSize: "26px" }} />,
    desc: "Average Calories Burned on each workout",
    key: "avgCaloriesBurntPerWorkout",
    unit: "kcal",
    color: "#FF9AD5",
    lightColor: "#FEF3F9",
    calorie: 156,
  },
];
export const weekly_stat_data = {
  totalCaloriesBurnt: 13500,
  totalWorkouts: 6,
  avgCaloriesBurntPerWorkout: 2250,
  totalWeeksCaloriesBurnt: {
    weeks: ["17th", "18th", "19th", "20th", "21st", "22nd", "23rd"],
    caloriesBurned: [10500, 200, 6320, 1110, 5000, 0, 13500],
  },
  pie_chart_data: [
    {
      id: 0,
      value: 6600,
      label: "Legs",
    },
    {
      id: 1,
      value: 1000,
      label: "Back",
    },
    {
        id: 2,
        value: 4680,
        label: "Shoulder",
      },
      {
        id: 3,
        value: 1600,
        label: "Abs",
      },
  ],
};
