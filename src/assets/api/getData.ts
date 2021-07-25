import usersData from "../../data/MainItem.json";
import userData from "../../data/User.json";

const getData = {
  getUsers: () => {
    const getItem: any = localStorage.getItem("UserData");
    if (!getItem) {
      localStorage.setItem("UserData", JSON.stringify(usersData));

      return usersData;
    }
    const data = JSON.parse(getItem);

    return data;
  },
  getInfo: () => {
    const userInfo: any = localStorage.getItem("getInfo");
    if (!userInfo) {
      localStorage.setItem("getInfo", JSON.stringify(userData));

      return userData;
    }
    const data = JSON.parse(userInfo);
    return data;
  },
};

export default getData;
