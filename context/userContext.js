import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect, useState, useContext } from "react";
import toast from "react-hot-toast";

const UserContext = React.createContext();

// set axios to include credentials with every request
axios.defaults.withCredentials = true;

export const UserContextProvider = ({ children }) => {
  const serverUrl = "https://tasktracker-v4gj.onrender.com";

  const router = useRouter();

  const [user, setUser] = useState({});
  const [allUsers, setAllUsers] = useState([]);
  const [userState, setUserState] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  //register user
  const registerUser = async (e) => {
    e.preventDefault();
    if (
      !userState.email.includes("@") ||
      !userState.password ||
      userState.password.length < 6
    ) {
      toast.error("Please enter a valid email and password (min 6 characters)");
      return;
    }
    try {
      const res = await axios.post(`${serverUrl}/api/v1/register`, userState);
      console.log("User registered successfully", res.data);
      toast.success("Вы успешно зарегистрированы!");

      // clear the form
      setUserState({
        name: "",
        email: "",
        password: "",
      });

      // redirect to login page
      router.push("/login");
    } catch (error) {
      toast.error(`Ошибка: ${error.response.data.message}`);
    }
  };

  const loginUser = async (e) => {
    e.preventDefault();

    if (!userState.email.trim() || !userState.password.trim()) {
      toast.error("Заполните все поля!");
      return;
    }

    try {
      const res = await axios.post(
        `${serverUrl}/api/v1/login`,
        {
          email: userState.email,
          password: userState.password,
        },
        {
          withCredentials: true, //отправка куки на сервер
        }
      );

      toast.success("Вы успешно вошли в аккаунт");

      // clear the form
      setUserState({
        email: "",
        password: "",
      });

      // refresh the user details
      await getUser(); // fetch before redirecting

      // redirect to dashboard page
      router.push("/");
    } catch (error) {
      console.log("Error logging in user", error);
      toast.error("Неверный логин или пароль");
    }
  };

  // get user logged in status

  const userLoginStatus = async () => {
    let loggedIn = false;
    try {
      const res = await axios.get(`${serverUrl}/api/v1/login-status`, {
        withCredentials: true, // send cookies to the server
      });

      // coerce the string to boolean
      loggedIn = !!res.data;
      setLoading(false);

      // if (!loggedIn) {
      //   router.push("/login");
      // }
    } catch (error) {
      toast.error("Вы не авторизованы");
    }

    return loggedIn;
  };

  //logout
  const logoutUser = async () => {
    try {
      const res = await axios.get(`${serverUrl}/api/v1/logout`, {
        withCredentials: true,
      });

      toast.success("Вы вышли из аккаунта");

      // Сбрасываем состояние пользователя
      setUser({});
      // Очищаем localStorage
      localStorage.removeItem("user");

      //redirect to login page
      router.push("/login");
    } catch (error) {
      console.log("Error logging out user", error);
      toast.error("Ошибка выхода из аккаунта");
    }
  };

  //get user details
  const getUser = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${serverUrl}/api/v1/user`, {
        withCredentials: true,
      });

      setUser((prevState) => {
        return {
          ...prevState,
          ...res.data,
        };
      });

      console.log("after setUser func");

      setLoading(false);
    } catch (error) {
      console.log("Error getting user details", error);
      setLoading(false);
      toast.error("Не удаётся получить данные пользователя");
    }
  };

  //update user detals
  const updateUser = async (e, data) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.patch(`${serverUrl}/api/v1/user`, data, {
        withCredentials: true,
      });
      //update user state
      setUser((prevState) => {
        return {
          ...prevState,
          ...res.data,
        };
      });

      toast.success("Данные обновлены успешно!");

      setLoading(false);
    } catch (error) {
      console.log("Ошибка обновления данных", error);
      setLoading(false);
      toast.error(`${error.response.data.message}`);
    }
  };

  //email verificaton
  const emailVerification = async () => {
    setLoading(true);
    try {
      const res = await axios.post(
        `${serverUrl}/api/v1/verify-email`,
        {},
        {
          withCredentials: true,
        }
      );

      toast.success("На вашу почту отправлено письмо подтверждения");
      setLoading(false);
    } catch (error) {
      console.log("Ошибка отправки письма", error);
      setLoading(false);
      toast.error(`${error.response.data.message}`);
    }
  };

  //verify user/email
  const verifyUser = async (token) => {
    setLoading(true);

    try {
      const res = await axios.post(
        `${serverUrl}/api/v1/verify-user/${token}`,
        {},
        {
          withCredentials: true,
        }
      );

      toast.success("Вы успешно подтвердили личность!");

      //refresh user details
      getUser();

      setLoading(false);
      //redirect to home page
      router.push("/");
    } catch (error) {
      console.log("Ошибка подтверждения пользователя", error);
      toast.error(`Пользователь уже подтверждён`);
      setLoading(false);
    }
  };

  //forgot password email
  const forgotPasswordEmail = async (email) => {
    setLoading(true);
    try {
      const res = await axios.post(
        `${serverUrl}/api/v1/forgot-password`,
        {
          email,
        },
        {
          withCredentials: true, // send cookies to the server
        }
      );

      toast.success("Письмо направлено вам на почту");
    } catch (error) {
      console.log("ошибка отправки письма с паролем на почту", error);
      toast.error(`Ошибка направления письма на почту`);
    }
    setLoading(false);
  };

  //reset password
  const resetPassword = async (token, password) => {
    setLoading(true);

    try {
      const res = await axios.post(
        `${serverUrl}/api/v1/reset-password/${token}`,
        {
          password,
        },
        {
          withCredentials: true,
        }
      );
      toast.success("Пароль успешно изменён");
      setLoading(false);
      router.push("/login");
    } catch (error) {
      console.log("Ошибка смены пароля");
      toast.error(`Ошибка смены пароля`);
      setLoading(false);
    }
  };

  //change password
  const changePassword = async (currentPassword, newPassword) => {
    setLoading(true);

    try {
      const res = await axios.patch(
        `${serverUrl}/api/v1/change-password`,
        { currentPassword, newPassword },
        {
          withCredentials: true,
        }
      );

      toast.success("Пароль успешно изменён");
      setLoading(false);
    } catch (error) {
      console.log("Ошибка смены пароля", error);
      toast.error("Ошибка смены пароля");
      setLoading(false);
    }
  };

  //admin routes
  const getAllUsers = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        `${serverUrl}/api/v1/admin/users`,
        {},
        { withCredentials: true }
      );

      setAllUsers(res.data);
      setLoading(false);
    } catch (error) {
      console.log("Error getting all users", error);
      toast.error("Ошибка получения списка пользователей");
      setLoading(false);
    }
  };

  const deleteUser = async (id) => {
    setLoading(true);
    try {
      const res = await axios.delete(
        `${serverUrl}/api/v1/admin/users/${id}`,
        {},
        { withCredentials: true }
      );
      getAllUsers();

      toast.success("Пользователь успешно удалён");
      setLoading(false);
    } catch (error) {
      console.log("Ошибка удаления пользователя", error);
      setLoading(false);
    }
  };

  //dynamic form handler
  const handlerUserInput = (name) => (e) => {
    const value = e.target.value;

    setUserState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  useEffect(() => {
    const loginStatusGetUser = async () => {
      const isLoggedIn = await userLoginStatus();

      if (isLoggedIn) {
        await getUser();
      }
    };

    loginStatusGetUser();
  }, []);

  // useEffect(() => {
  //   if (user.role === "admin") {
  //     getAllUsers();
  //   }
  // }, [user.role]);

  return (
    <UserContext.Provider
      value={{
        registerUser,
        userState,
        handlerUserInput,
        loginUser,
        logoutUser,
        userLoginStatus,
        user,
        updateUser,
        emailVerification,
        verifyUser,
        forgotPasswordEmail,
        resetPassword,
        changePassword,
        getAllUsers,
        allUsers,
        deleteUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};
