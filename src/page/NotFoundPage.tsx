import styled from "styled-components";
import DefaultTemplate from "../components/common/DefaultTemplate";

const NotFoundPage = () => {
  return (
    <DefaultTemplate>
      <NotFoundPageArea>
        <span>페이지를 찾을 수 없습니다.</span>
      </NotFoundPageArea>
    </DefaultTemplate>
  );
};

const NotFoundPageArea = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default NotFoundPage;
