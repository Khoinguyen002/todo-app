import { createAtom } from "reactjs-statify";
import { Task, TaskFilterStatus } from "../../types/task";

export const tasksAtom = createAtom<
  "tasks",
  {
    tasks: Task[];
    filter: TaskFilterStatus;
  }
>("tasks", {
  tasks: [],
  filter: "all",
});
