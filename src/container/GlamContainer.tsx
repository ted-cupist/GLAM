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
      switch (type) {
        case StatusUpdate.LIKE:
          handleLikeBtn(idx);
          break;
      }
    },
    [data, setData]
  );

  const handleLikeBtn = (idx: number) => {
    const copyData = data;
    copyData!.data[idx].like = !copyData?.data[idx].like;
    setData(copyData);
    if (copyData) {
      localStorage.setItem("UserData", JSON.stringify(copyData));
    }
    console.log(data?.data[idx].like);
  };

  const handleDeleteBtn = (idx: number) => {};

  const handleFavoriteBtn = () => {};

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
