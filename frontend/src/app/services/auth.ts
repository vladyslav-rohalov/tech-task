import axios from "axios";
import { IFormData } from "@/app/utils/interfaces";

export async function registerUser(userData: IFormData) {
  try {
    const response = await axios.post("/users/register", userData);
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}
