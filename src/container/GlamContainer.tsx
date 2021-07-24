import { useEffect, useState } from "react";
import getData from "../assets/api/getData";
import Glam from "../components/Glam";
import Page from "../util/enum/Page";
import { MainItemsType } from "../util/type/DataType";

const GlamContainer = () => {
  const { getUsers } = getData;
  const [data, setData] = useState<MainItemsType>();
  const [selectPage, setSelectPage] = useState<Page>(Page.GLAM);

  const handleData = () => {
    getUsers().then((res) => {
      setData(res);
    });
  };

  useEffect(() => {
    handleData();
  });

  return (
    <Glam data={data} selectPage={selectPage} setSelectPage={setSelectPage} />
  );
};

export default GlamContainer;
