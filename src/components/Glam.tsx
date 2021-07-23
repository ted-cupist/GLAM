import styled from "styled-components";
import { MainItemsType } from "../util/type/DataType";
import MainItem from "./common/MainItem";

interface GlamProps {
  data: MainItemsType | undefined;
}
const Glam = ({ data }: GlamProps) => {
  return (
    <GlamArea>
      <SubTitleArea>
        <h2>오늘의 추천</h2>
      </SubTitleArea>
      {data && data.data.map((item, key) => <MainItem data={item} key={key} />)}
    </GlamArea>
  );
};

const GlamArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 2.5rem;
`;

const SubTitleArea = styled.div`
  width: 90%;
`;

export default Glam;
