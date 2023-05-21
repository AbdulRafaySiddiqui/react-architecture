import axios from "axios";
import { BACKEND_API_URL } from "../constants";

export const backendApi = axios.create({
  baseURL: BACKEND_API_URL,
});
