import axios from "axios";
const API_URL = "http://localhost:8848/unisel/university";

export const addUniversity = async (data) => {
  try {
    const response = await axios.post(API_URL, data);
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw error;
  }
};
