import axios from "axios";

const BASE_URL = "http://localhost:5000/api"; // your backend

export const getProperties = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/properties`);
    return response.data; // array of property objects
  } catch (error) {
    console.error("Error fetching properties:", error);
    return [];
  }
};
