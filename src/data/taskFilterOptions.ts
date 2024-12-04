import { Options } from "../types/filterOptions";
import { TaskFilterStatus } from "../types/task";

export const filterOptions: Options<TaskFilterStatus>[] = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "Inprogress",
    value: "inprogress",
  },
  {
    label: "Completed",
    value: "completed",
  },
];

export const filterOptionsObject: Record<
  TaskFilterStatus,
  Options<TaskFilterStatus>
> = {
  all: {
    label: "All",
    value: "all",
  },
  inprogress: {
    label: "Inprogress",
    value: "inprogress",
  },
  completed: {
    label: "Completed",
    value: "completed",
  },
};
