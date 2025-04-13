import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { useUserContext } from "./userContext";
import toast from "react-hot-toast";

const TasksContext = createContext();

const serverUrl = "https://tasktrackerserver-7n88.onrender.com/api/v1";

export const TasksProvider = ({ children }) => {
  const userId = useUserContext().user._id;

  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [task, setTask] = useState({});

  const [priority, setPriority] = useState("Все");

  const [isEditing, setIsEditing] = useState(false);
  const [activeTask, setActiveTask] = useState(null);
  const [modalMode, setModalMode] = useState("");
  const [profileModal, setProfileModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [taskModal, setTaskModal] = useState(false);

  const openModalForDelete = () => {
    setDeleteModal(true);
  };

  const openTaskModal = () => {
    setTaskModal(true);
  };

  const openModalForAdd = () => {
    setModalMode("add");
    setIsEditing(true);
    setTask({});
  };

  const openModalForEdit = (task) => {
    setModalMode("edit");
    setIsEditing(true);
    setActiveTask(task);
  };

  const openProfileModal = () => {
    setProfileModal(true);
  };

  const closeModal = () => {
    setIsEditing(false);
    setProfileModal(false);
    setModalMode("");
    setActiveTask(null);
    setTask({});
    setDeleteModal(false);
    setTaskModal(false);
  };

  //получить задачи
  const getTasks = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${serverUrl}/tasks`);
      setTasks(response.data.tasks);
    } catch (error) {
      console.log("Ошибка получения списка задач", error);
    }
    setLoading(false);
  };

  //получить информацию о задаче
  const getTask = async (taskId) => {
    setLoading(true);
    try {
      const response = await axios.get(`${serverUrl}/task/${taskId}`);

      setTask(response.data);
    } catch (error) {
      console.log("Ошибка получения задачи", error);
    }
    setLoading(false);
  };

  //создание задачи
  const createTask = async (task) => {
    setLoading(true);
    try {
      const res = await axios.post(`${serverUrl}/task/create`, task);
      setTasks([...tasks, res.data]);
      toast.success("Задача создана");
      getTasks();
    } catch (error) {
      console.log("Ошибка создания задачи", error);
    }
    setLoading(false);
  };

  //редактирование задачи
  const updateTask = async (task) => {
    setLoading(true);
    try {
      const res = await axios.patch(`${serverUrl}/task/${task._id}`, task);

      //обновить задачу внутри списка задач
      const newTasks = tasks.map((t) => {
        return t._id === res.data._id ? res.data : t;
      });
      setTasks(newTasks);
      toast.success("Задача обновлена");
    } catch (error) {
      console.log("Ошибка редактирования задачи", error);
    }
    setLoading(true);
  };

  const deleteTask = async (taskId) => {
    setLoading(true);
    try {
      await axios.delete(`${serverUrl}/task/${taskId}`);

      const newTasks = tasks.filter((t) => t._id !== taskId);

      setTasks(newTasks);
    } catch (error) {
      console.log("Ошибка удаления задачи", error);
    }
    setLoading(false);
  };
  const deleteAllTasks = async () => {
    setLoading(true);
    try {
      // Отправляем запрос на удаление всех задач
      await axios.delete(`${serverUrl}/tasks`);

      // Очистим список задач в состоянии (сбросим все задачи)
      setTasks([]);
      toast.success("Все задачи удалены");
    } catch (error) {
      console.log("Ошибка удаления всех задач", error);
      toast.error(`Ошибка удаления`);
    }
    setLoading(false);
  };

  const handleInput = (name) => (e) => {
    if (name === "setTask") {
      setTask(e);
    } else {
      setTask({ ...task, [name]: e.target.value });
    }
  };

  const completedTasks = tasks.filter((task) => task.completed);

  const activeTasks = tasks.filter((task) => !task.completed);

  useEffect(() => {
    getTasks();
  }, [userId]);

  return (
    <TasksContext.Provider
      value={{
        tasks,
        loading,
        task,
        priority,
        setPriority,
        getTask,
        createTask,
        updateTask,
        getTasks,
        deleteTask,
        handleInput,
        isEditing,
        setIsEditing,
        openModalForAdd,
        openModalForEdit,

        activeTask,
        closeModal,
        modalMode,
        openProfileModal,
        profileModal,
        completedTasks,
        activeTasks,
        deleteModal,
        setDeleteModal,
        openModalForDelete,
        deleteAllTasks,
        taskModal,
        openTaskModal,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};

export const useTasks = () => {
  return React.useContext(TasksContext);
};
