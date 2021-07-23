import MainItemData from "../../data/MainItem.json";

const getData = {
  getUsers: async () => {
    const data = await MainItemData;

    return data;
  },
};

export default getData;
