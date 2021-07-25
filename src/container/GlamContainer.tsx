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
  const [selectedImg, setSelectedImg] = useState<number>(0);

  const handleData = useCallback(() => {
    const data = getUsers();
    setData(data);
  }, [getUsers]);

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
      if (copyData) {
        localStorage.setItem("getUsersData", JSON.stringify(copyData));
      }
      handleData();
    },
    [data, handleData]
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
      selectedImg={selectedImg}
      setSelectedImg={setSelectedImg}
    />
  );
};

export default GlamContainer;
