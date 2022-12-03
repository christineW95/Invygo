import mapNationalitiesList from "../Mappers/NationalitiesMapper";
import axios from "axios";

const getNationalities = async (url: string): Promise<any> => {
  try {
    const {
      data: { data },
      status,
    } = await axios.get(url);
    if (status == 200) {
      const countriesList = Object.values(data);
      const mappedData = mapNationalitiesList(countriesList);
      return { status: status, response: mappedData };
    }
  } catch (error) {
    return Promise.reject({error})
  }
  
};

export { getNationalities };
