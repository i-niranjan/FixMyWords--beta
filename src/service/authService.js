import axios from "axios";
import React from "react";

import { toast } from "sonner";
const API_URL = "http://localhost:1002/api/users";

export const register = async ({ name, email, password }) => {
  try {
    const response = await axios.post(`${API_URL}/register`, {
      name,
      email,
      password,
    });
    localStorage.setItem("token", response.data.token);
    localStorage.setItem("name", response.data.user.name);
    toast(response.data.message);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, {
      email,
      password,
    });

    localStorage.setItem("token", response.data.token);
    localStorage.setItem("name", response.data.user.name);

    return response.data;
  } catch (error) {
    throw error;
  }
};

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
};

export const getToken = () => localStorage.getItem("token");

export const getUser = () => localStorage.getItem("name");
