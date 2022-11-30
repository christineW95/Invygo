import users from "../constants/users"

const SearchBy = (key:string,query:string) => {
    return users.users.filter((entry: Object) => entry[key].includes(query))
  }
  export {SearchBy}