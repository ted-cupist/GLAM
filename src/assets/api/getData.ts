import jsonData from "../../data/MainItem.json";

const getData = {
  getUsers: () => {
    const getItem: any = localStorage.getItem("UserData");
    if (!getItem) {
      localStorage.setItem("UserData", JSON.stringify(jsonData));

      return jsonData;
    }
    const data = JSON.parse(getItem);

    return data;
  },
};

export default getData;
