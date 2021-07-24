import styled from "styled-components";
import Page from "../util/enum/Page";
import StatusUpdate from "../util/enum/StatusUpdate";
import { MainItemsType } from "../util/type/DataType";
import CustomSelectPage from "./common/CustomSelectPage";
import MainItem from "./common/MainItem";

interface GlamProps {
  data: MainItemsType | undefined;
  selectPage: Page;
  setSelectPage: React.Dispatch<React.SetStateAction<Page>>;
  handleUpdateBtn: (idx: number, type: StatusUpdate) => void;
}
const Glam = ({
  data,
  selectPage,
  setSelectPage,
  handleUpdateBtn,
}: GlamProps) => {
  return (
    <GlamArea>
      <CustomSelectPage selectPage={selectPage} setSelectPage={setSelectPage} />
      {selectPage === Page.GLAM && (
        <>
          <SubTitleArea>
            <h2>오늘의 추천</h2>
          </SubTitleArea>
          <MainItemsArea>
            {data &&
              data.data.map((item, key) => (
                <MainItem
                  data={item}
                  key={key}
                  handleUpdateBtn={handleUpdateBtn}
                />
              ))}
          </MainItemsArea>
        </>
      )}
      {selectPage === Page.LIVE && (
        <ServiceArea>
          <span>서비스 준비중입니다</span>
        </ServiceArea>
      )}
      {selectPage === Page.AROUND && (
        <ServiceArea>
          <span>서비스 준비중입니다</span>
        </ServiceArea>
      )}
    </GlamArea>
  );
};

const ServiceArea = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const GlamArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 2.5rem;
`;

const MainItemsArea = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  ${({ theme }) => theme.device?.mobile} {
    align-items: center;
    justify-content: center;
  }
`;

const SubTitleArea = styled.div`
  width: 100%;
  padding-left: 1rem;
`;

export default Glam;
