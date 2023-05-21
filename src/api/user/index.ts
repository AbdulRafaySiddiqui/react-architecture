import { backendApi } from "../../config/apiConfig";
import { apiRoutes } from "../apiRoutes";
import { ApiResponse } from "../types";
import { UserRaw } from "./types";

export const createUser = async (
  firstname: string,
  lastname: string,
  email: string,
  profileImage: string
): Promise<ApiResponse<UserRaw>> => {
  try {
    const response = await backendApi.post(apiRoutes.user.createUser, {
      firstname,
      lastname,
      email,
      profileImage,
    });
    return response.data as ApiResponse<UserRaw>;
  } catch (e) {
    return {
      status: false,
      message: "error fetching user..",
    };
  }
};

export const getUser = async (username: string): Promise<ApiResponse<UserRaw>> => {
  try {
    const response = await backendApi.get(`${apiRoutes.user.createUser}/${username}`);
    return response.data as ApiResponse<UserRaw>;
  } catch (e) {
    return {
      status: false,
      message: "error fetching user..",
      error: e,
    };
  }
};
