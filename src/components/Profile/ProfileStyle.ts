import styled from "styled-components";

export const BasicSpan = styled.span`
  margin-left: 0.5rem;
  font-size: 13px;
`;

export const ContentArea = styled.div`
  display: flex;
  border-top: 1px solid #00000092;
  padding: 1rem 0;
`;

export const Contents = styled.div<{ right?: boolean }>`
  display: flex;
  flex-direction: column;
  min-width: 3.5rem;

  ${(props) => props.right && "margin-left:2rem"}
`;

export const SubTitle = styled(BasicSpan)`
  margin-top: 0.5rem;
  font-size: 1rem;
`;

export const Content = styled(SubTitle)<{ change?: boolean }>`
  ${(props) => props.change && "font-color:black"}
  color: #1c9dea;
  cursor: pointer;
`;

export const TagArea = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const TagDiv = styled.div`
  color: #1c9dea;
  border: 1px solid #1c9dea;
  padding: 3px 1rem;
  margin-left: 0.7rem;
  margin-top: 0.5rem;
  border-radius: 5px;
`;

export const TagsArea = styled.div`
  margin: 0.5rem 0;
`;

export const Background = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  z-index: 100;
  width: 100%;
  height: 100vh;
  background: #00000039;
`;
