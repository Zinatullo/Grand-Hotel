import axios from "axios"

const URL = "https://697cc7c1889a1aecfeb3960e.mockapi.io/Hotel/"

const API = axios.create({baseURL:URL})

export const getAll = async (endpoint: string) => {
  try {
    const response = await API.get(endpoint);
    return response.data;
  } catch (error) {
    console.error(error);
  } finally {
    console.log("Запрос завершён");
  }
};



export const create = async (endpoint: string, data: unknown) => {
  try {
    const response = await API.post(endpoint, data);
    return response.data;
  } catch (error) {
    console.error(error);
  } finally {
    console.log("Запрос завершён");
  }
};

export const update = async (endpoint: string, id: number, data: unknown) => {
  try {
    const response = await API.put(`${endpoint}/${id}`, data);
    return response.data;
  } catch (error) {
    console.error(error);
  } finally {
    console.log("Запрос завершён");
  }
};

export const remove = async (endpoint: string, id: number) => {
  try {
    const response = await API.delete(`${endpoint}/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
  } finally {
    console.log("Запрос завершён");
  }
};

export default API