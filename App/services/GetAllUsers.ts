import mapUsersList from "../Mappers/UsersMapper";
import axios from "axios";
import { Key, MOCK_BASE_URL } from "./config";
const getData = async (url:string): Promise<any> => {
  try {
    const { data, status } = await axios.get(
      url
    );
    if (status == 200) return mapUsersList(data);
  } catch (error) {
    return Promise.reject(error);
  }
};

const getUserByName = async (name: string): Promise<any> => {
  try {
    const { data, status } = await axios.get(
      `${MOCK_BASE_URL}name=${name}&key=${Key}`
    );
    if (status == 200) return mapUsersList(data);
  } catch (error) {
    return Promise.reject(error);
  }
};

const getUserByNationality = async (nationality: string): Promise<any> => {
  try {
    const { data, status } = await axios.get(
      `${MOCK_BASE_URL}nationality=${nationality}&key=${Key}`
    );
    if (status == 200) return mapUsersList(data);
  } catch (error) {
    return Promise.reject(error);
  }
};
export { getData, getUserByName, getUserByNationality };
