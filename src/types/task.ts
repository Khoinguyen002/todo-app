export type TaskStatus = "inprogress" | "completed";
export type TaskFilterStatus = "all" | TaskStatus;

export type Task = {
  id: number;
  title: string;
  status: TaskStatus;
};
