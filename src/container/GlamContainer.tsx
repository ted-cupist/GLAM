import { useEffect, useState } from "react";
import getData from "../assets/api/getData";
import Glam from "../components/Glam";
import { MainItemsType } from "../util/type/DataType";

const GlamContainer = () => {
  const { getUsers } = getData;
  const [data, setData] = useState<MainItemsType>();

  const handleData = () => {
    getUsers().then((res) => {
      setData(res);
    });
  };

  useEffect(() => {
    handleData();
  });

  return <Glam data={data} />;
};

export default GlamContainer;
