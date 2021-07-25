import usersData from "../../data/MainItem.json";
import userData from "../../data/User.json";

const getData = {
  getUsers: () => {
    const getItem: any = localStorage.getItem("getUsersData");
    if (!getItem) {
      localStorage.setItem("getUsersData", JSON.stringify(usersData));

      return usersData;
    }
    const data = JSON.parse(getItem);

    return data;
  },
  getInfo: () => {
    const userInfo: any = localStorage.getItem("myInfo");
    if (!userInfo) {
      localStorage.setItem("myInfo", JSON.stringify(userData));

      return userData;
    }
    const data = JSON.parse(userInfo);
    return data;
  },
};

export default getData;
