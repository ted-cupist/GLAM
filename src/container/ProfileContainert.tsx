import { useCallback, useEffect, useState } from "react";
import getData from "../assets/api/getData";
import Profile from "../components/Profile/Profile";
import { IProfileInput } from "../util/interface/IProfile";
import { UserDataType } from "../util/type/UserDataType";

const ProfileContainer = () => {
  const { getInfo } = getData;
  const [data, setData] = useState<UserDataType>();
  const [input, setInput] = useState<IProfileInput>({
    nickname: "",
    birth: "",
    intro: "",
    tall: 170,
    school: "",
  });

  const onChangeInput = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;

      setInput({
        ...input,
        [name]: value,
      });
    },
    [input]
  );

  const handleUserData = useCallback(() => {
    const data = getInfo();
    setData(data);
  }, [getInfo]);

  const setValue = useCallback(() => {
    if (data) {
      setInput({
        nickname: data.nickname,
        birth: data.birth,
        intro: data.birth,
        tall: data.tall,
        school: data.school,
      });
    }
  }, [data]);

  useEffect(() => {
    handleUserData();
    setValue();
  }, []);

  return <Profile data={data} />;
};

export default ProfileContainer;
