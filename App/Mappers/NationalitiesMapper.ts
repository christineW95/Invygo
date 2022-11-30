import { morphism, StrictSchema } from "morphism";

import { NationalityItem } from "../Interfaces/Nationalities";
const NationalityItemSchema: StrictSchema<NationalityItem> = {
  country: "country",
  id: "id",
};
const mapNationalitiesList = (input: Array<any>) =>
  input
    ?.map((element: NationalityItem, index: number) =>
      morphism(NationalityItemSchema, { ...element, id: index + 1 })
    )
    .sort((a, b) => a.country.localeCompare(b.country));
export default mapNationalitiesList;
