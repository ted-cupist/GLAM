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
  const [birth, setBirth] = useState<string>("");
  const [introModal, setIntroModal] = useState<boolean>(false);
  const [personality, setPersonality] = useState<string[]>([]);
  const [charm, setCharm] = useState<string[]>([]);
  const [interest, setInterest] = useState<string[]>([]);
  const [lifeStyle, setLifeStyle] = useState<string[]>([]);
  const [input, setInput] = useState<IProfileInput>({
    nickname: "",
    home: "",
    intro: "",
    tall: 0,
    school: "",
    physical: "",
    rectal: "",
    job: "",
    grade: "",
    religion: "",
    bear: "",
    smoking: "",
    bloodType: "",
    race: "",
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

  const handleUserData = useCallback(() => {
    const data = getInfo();
    setInput({
      nickname: data.nickname,
      home: data.home,
      intro: data.intro,
      tall: data.tall,
      school: data.school,
      physical: data.physical,
      rectal: data.rectal,
      job: data.job,
      grade: data.grade,
      religion: data.religion,
      bear: data.bear,
      smoking: data.smoking,
      bloodType: data.bloodType,
      race: data.race,
    });
    setPersonality(data.personality);
    setCharm(data.charm);
    setInterest(data.interest);
    setLifeStyle(data.lifeStyle);
    setBirth(data.birth);
    setData(data);
  }, [getInfo]);

  const handleModifyIntro = () => {
    const copyData = data;
    copyData!.intro = input.intro;
    localStorage.setItem("myInfo", JSON.stringify(copyData));
    handleUserData();
  };

  const handleUpdateUserData = useCallback(() => {
    const copyData = data;
    if (copyData) {
      copyData!.personality = personality;
      copyData!.charm = charm;
      copyData!.interest = interest;
      copyData!.lifeStyle = lifeStyle;
      copyData!.birth = String(birth);
      copyData!.home = input.home;
      copyData!.physical = input.physical;
      copyData!.grade = input.grade;
      copyData!.religion = input.religion;
      copyData!.bear = input.bear;
      copyData!.smoking = input.smoking;
      copyData!.bloodType = input.bloodType;
      copyData!.race = input.race;
      localStorage.setItem("myInfo", JSON.stringify(copyData));
    }
    handleUserData();
  }, [
    birth,
    data,
    handleUserData,
    input,
    personality,
    interest,
    charm,
    lifeStyle,
  ]);

  const handleProfileChange = useCallback(() => {
    const copyData = data;
    copyData!.nickname = input.nickname;
    copyData!.tall = input.tall;
    copyData!.rectal = input.rectal;
    copyData!.job = input.job;
    copyData!.school = input.school;
    if (copyData) {
      localStorage.setItem("myInfo", JSON.stringify(copyData));
    }
    handleUserData();
  }, [data, handleUserData, input]);

  useEffect(() => {
    handleUserData();
  }, [handleUserData]);

  useEffect(() => {
    setModal(false);
  }, [birth]);

  useEffect(() => {
    if (modal) {
      setIntroModal(false);
      document.body.style.overflow = "hidden";
    } else {
      handleUpdateUserData();
      document.body.style.overflow = "unset";
    }
  }, [modal, setModal]);

  return (
    <Profile
      data={data}
      modal={modal}
      setModal={setModal}
      modalType={modalType}
      setModalType={setModalType}
      input={input}
      birth={birth}
      setBirth={setBirth}
      onChangeInput={onChangeInput}
      handleProfileChange={handleProfileChange}
      introModal={introModal}
      setIntroModal={setIntroModal}
      handleModifyIntro={handleModifyIntro}
      personality={personality}
      setPersonality={setPersonality}
      charm={charm}
      setCharm={setCharm}
      interest={interest}
      setInterest={setInterest}
      lifeStyle={lifeStyle}
      setLifeStyle={setLifeStyle}
    />
  );
};

export default ProfileContainer;
