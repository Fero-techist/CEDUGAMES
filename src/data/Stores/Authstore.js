import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";
import axios from "axios";
import { toast } from "react-toastify";

export const TOKEN = "DATA_TOKEN";

const AuthStore = (set) => ({
  token: localStorage.getItem(TOKEN) || null,
  user: null,
  isAuth: false,
  loading: false,
  isRegistered: false,
  isLoggedIn: false,
  isUpdated: false,
  isPassword: null,
  login: (payload) => {
    // console.log({ payload });
    localStorage.setItem(TOKEN, payload?.token);
    set(
      {
        user: payload?.data || payload,
        token: payload?.token,
        isLoggedIn: true,
      },
      false,
      "login"
    );
  },
  setUser: (payload) => {
    set({ isUpdated: true, user: payload?.data }, false, "setUser");
  },
  getUser: (payload) => {
    // console.log({ payload }, "isAuth");
    if (payload?.token) {
      localStorage.setItem(TOKEN, payload?.token);
    }
    set(
      {
        user: payload?.data || payload,
        isAuth: payload?.data || payload ? true : false,
        loading: false,
      },
      false,
      "getUser"
    );
  },
  getUserFail: () => {
    set({ isAuth: false, loading: false });
  },
  getUserLoading: () => {
    set({ loading: true });
  },
  setPassword: () => {
    set({ isPassword: true });
  },
  setUserFail: () => {
    // console.log("hi here");
    set({
      isUpdated: false,
      isLoggedIn: false,
      isRegistered: false,
      isPassword: false,
    });
  },
  logout: () => {
    localStorage.removeItem(TOKEN);
    set(
      {
        isAuth: false,
        user: null,
        token: null,
        role: null,
      },
      false,
      "logout"
    );
  },
});

const useAuthStore = create(
  devtools(
    persist(AuthStore, {
      name: "data-dashboard",
    })
  )
);

export default useAuthStore;

export const MergedData = (data, payload) => {
  let ids = new Set(payload.map((d) => d._id));
  let updatateData = [...payload, ...data.filter((d) => !ids.has(d._id))];
  return updatateData?.sort((a, b) => a?.createdAt - b?.createdAt);
};

export const EditData = (data, payload) => {
  let updatateData =
    data?.length > 0
      ? data.map((item) => (item._id !== payload._id ? item : payload))
      : data;
  return updatateData;
};

export const DeleteData = (data, payload) => {
  let filterItem =
    data?.length > 0
      ? [...data.filter((item) => item._id !== payload._id)]
      : [];
  return filterItem;
};

export const apiCall = async (type, url, data, getter, headers) => {
  try {
    let res;
    if (type === "get")
      res = await axios.get(url, {
        headers: {
          ...headers,
        },
      });
    if (type === "post")
      res = await axios.post(
        url,
        { ...data },
        {
          headers: {
            ...headers,
          },
        }
      );
    if (type === "put")
      res = await axios.put(
        url,
        { ...data },
        {
          headers: {
            ...headers,
          },
        }
      );
    if (type === "delete")
      res = await axios.delete(url, {
        headers: {
          ...headers,
        },
      });
    if (type === "file") {
      let post = new FormData();
      post.append(`file`, data?.logo);
      res = await axios.post(`/api/v1/file`, post, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    }

    let response = res?.data;
    if (!["file", "get"]?.includes(type)) toast.success(res?.data?.message);
    if (getter) getter(response);
    return { response };
  } catch (err) {
    if (err) console.log({ error: err.response?.data, err });
    if (err?.response?.status === 429) toast.error(err?.response?.data);
    if (type && type !== "get") {
      let error = err.response?.data?.error;
      if (error && error?.length > 1) {
        return { errArr: error };
      } else {
        let errMsg =
          err?.response?.data?.message ||
          err?.response?.data?.error?.[0]?.message ||
          err?.response?.data?.error?.[0]?.msg ||
          err?.message;
        return { errMsg };
      }
    }
  }
};
