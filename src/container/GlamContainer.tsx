import { useCallback, useEffect, useState } from "react";
import getData from "../assets/api/getData";
import Glam from "../components/Glam";
import Page from "../util/enum/Page";
import StatusUpdate from "../util/enum/StatusUpdate";
import { MainItemsType } from "../util/type/DataType";

const GlamContainer = () => {
  const { getUsers } = getData;
  const [data, setData] = useState<MainItemsType>();
  const [selectPage, setSelectPage] = useState<Page>(Page.GLAM);

  const handleData = () => {
    const data = getUsers();
    setData(data);
  };

  const handleUpdateBtn = useCallback(
    (idx: number, type: StatusUpdate) => {
      const copyData = data;
      switch (type) {
        case StatusUpdate.LIKE:
          copyData!.data[idx].like = !copyData?.data[idx].like;
          break;
        case StatusUpdate.DELETE:
          copyData!.data[idx].beLike = true;
          break;
        case StatusUpdate.FAVORITE:
          copyData!.data[idx].star = !copyData?.data[idx].star;
          break;
      }
      setData(copyData);
      if (copyData) {
        localStorage.setItem("UserData", JSON.stringify(copyData));
      }
      handleData();
    },
    [data, setData]
  );

  useEffect(() => {
    handleData();
  }, []);

  return (
    <Glam
      data={data}
      selectPage={selectPage}
      setSelectPage={setSelectPage}
      handleUpdateBtn={handleUpdateBtn}
    />
  );
};

export default GlamContainer;
