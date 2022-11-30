import axios from "axios";
import { User } from "../Interfaces/User";
import { Register } from "./config";

const submitUser = async (user: User): Promise<any> => {
  try {
    const {
      data: { success },
      status,
    } = await axios.post(Register.submit, user);
    if (status == 200) {
      return {success};
    }
  } catch (error) {
    return Promise.reject(error);
  }
};

export { submitUser };
