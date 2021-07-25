import { useCallback, useEffect, useState } from "react";
import getData from "../assets/api/getData";
import Profile from "../components/Profile/Profile";
import { IProfileInput } from "../util/interface/IProfile";
import { UserDataType } from "../util/type/UserDataType";

const ProfileContainer = () => {
  const { getInfo } = getData;
  const [data, setData] = useState<UserDataType>();
  const [modal, setModal] = useState<boolean>(false);
  const [modalType, setModalType] = useState<string>("");
  const [input, setInput] = useState<IProfileInput>({
    nickname: "",
    birth: new Date(),
    intro: "",
    tall: 0,
    school: "",
  });

  const onChangeInput = useCallback(
    (value: string | Date, name: string) => {
      setInput({
        ...input,
        [name]: value,
      });
    },
    [input]
  );

  const handleNicknameChange = () => {
    console.log("handleNicknameChange");
    const copyData = data;
    copyData!.nickname = input.nickname;
    if (copyData) {
      localStorage.setItem("myInfo", JSON.stringify(copyData));
    }
    handleUserData();
  };

  const handleUserData = useCallback(() => {
    const data = getInfo();
    setInput({
      nickname: data.nickname,
      birth: data.birth,
      intro: data.intro,
      tall: data.tall,
      school: data.school,
    });
    setData(data);
  }, [getInfo]);

  useEffect(() => {
    handleUserData();
  }, [handleUserData]);

  useEffect(() => {
    modal
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");
  }, [modal, setModal]);

  return (
    <Profile
      data={data}
      modal={modal}
      setModal={setModal}
      modalType={modalType}
      setModalType={setModalType}
      input={input}
      onChangeInput={onChangeInput}
      handleNicknameChange={handleNicknameChange}
    />
  );
};

export default ProfileContainer;
