import mapUsersList from "../Mappers/UsersMapper";
import axios from "axios";

const getAllUsers = async (): Promise<any> => {
  try {
    const { data, status } = await axios.get(
      "https://my.api.mockaroo.com/invygo.json?key=f2ac2250"
    );
    if (status == 200) {
      return mapUsersList(data);
    }
  } catch (error) {
    return Promise.reject(error);
  }
};
const getUserByName = async (name: string): Promise<any> => {
  try {
    const { data, status } = await axios.get(
      `https://my.api.mockaroo.com/invygo.json?name=${name}&key=f2ac2250`
    );
    if (status == 200) return mapUsersList(data);
  } catch (error) {
    return Promise.reject(error);
  }
};

const getUserByNationality = async (nationality: string): Promise<any> => {
  try {
    const { data, status } = await axios.get(
      `https://my.api.mockaroo.com/invygo.json?nationality=${nationality}&key=f2ac2250`
    );
    if (status == 200) return mapUsersList(data);
  } catch (error) {
    return Promise.reject(error);
  }
};
export { getAllUsers, getUserByName, getUserByNationality };
