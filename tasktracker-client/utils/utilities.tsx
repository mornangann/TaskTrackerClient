import moment from "moment";
import { Task } from "./types";

export const formatTime = (createdAt: string) => {
  const now = moment();
  const created = moment(createdAt);
  moment.locale("ru");

  // если задача создана сегодня
  if (created.isSame(now, "day")) {
    return "Сегодня";
  }

  // если задача создана вчера
  if (created.isSame(now.subtract(1, "days"), "day")) {
    return "Вчера";
  }

  // если задача создана за последние 7 дней
  if (created.isAfter(moment().subtract(6, "days"))) {
    return created.fromNow();
  }

  // если задача создана в течение последних 4 недель (до 1 месяца назад)
  if (created.isAfter(moment().subtract(3, "weeks"), "week")) {
    return created.fromNow();
  }

  return created.format("DD/MM/YYYY");
};

// export const filteredTasks = (tasks: Task[], priority: string) => {
//   const filteredTasks = () => {
//     switch (priority) {
//       case "низкий":
//         return tasks.filter((task) => {
//           task.priority === "низкий";
//         });
//       case "средний":
//         return tasks.filter((task) => {
//           task.priority === "средний";
//         });
//       case "высокий":
//         return tasks.filter((task) => {
//           task.priority === "высокий";
//         });

//       default:
//         return tasks;
//     }
//   };

//   return filteredTasks();
// };

export const filteredTasks = (tasks: Task[], priority: string) => {
  if (priority !== "низкий" && priority !== "средний" && priority !== "высокий")
    return tasks;
  return tasks.filter((task) => task.priority === priority);
};

// export const overdueTasks = (tasks: Task[]) => {
//   return tasks.filter((task: Task) => {
//     const due = new Date(task.dueDate);
//     const today = new Date();
//     return due > today && !task.completed;
//   });
// };

export const overdueTasks = (tasks: Task[]) => {
  const todayDate = moment().startOf("day");

  return tasks.filter((task) => {
    return !task.completed && moment(task.dueDate).isBefore(todayDate);
  });
};
