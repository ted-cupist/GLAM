import { useState } from "react";
import styled from "styled-components";
import { UserDataType } from "../../util/type/UserDataType";
import { BasicBtn } from "../common/BasicStyle";

interface ProfileMainProps {
  data: UserDataType;
}

const ProfileMain = ({ data }: ProfileMainProps) => {
  const [selected, setSelected] = useState<number>(0);
  return (
    <ProfileMainArea>
      <ProfileMainCenter>
        <MainItemArea>
          <ImgSelectArea>
            {data.profile_img.map((item, key) =>
              key === selected ? (
                <ImgSelected key={key} />
              ) : (
                <ImgSelect
                  key={key}
                  onClick={() => {
                    setSelected(key);
                  }}
                />
              )
            )}
          </ImgSelectArea>
          <CustomImg src={data.profile_img[selected]} />
        </MainItemArea>
        <CustomBtn>수정하기</CustomBtn>
      </ProfileMainCenter>
    </ProfileMainArea>
  );
};

const ProfileMainArea = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const ProfileMainCenter = styled.div`
  max-width: 600px;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const CustomBtn = styled(BasicBtn)`
  width: 50%;
  z-index: 99;
  margin-bottom: 2rem;
  bottom: 0;
  margin-top: 1rem;
  height: 3rem;
  background: white;
  border: 1px solid #8080809b;
`;

const ImgSelect = styled.div`
  background: #8080809b;
  cursor: pointer;
  width: 15%;
  height: 5px;
  margin-left: 0.5rem;
  border-radius: 10px;
`;

const ImgSelected = styled(ImgSelect)`
  height: 7px;
  background: white;
`;

const ImgSelectArea = styled.div`
  width: 100%;
  height: 5px;
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
`;

const MainItemArea = styled.div`
  height: 85%;
  width: 95%;
  display: flex;
  flex-direction: column;
  border-radius: 1rem;
  overflow: hidden;
  margin-top: 1rem;
  position: relative;
`;

export const CustomImg = styled.img`
  height: 100%;
  object-fit: cover;
`;

export default ProfileMain;
