import styled from "styled-components";

export const BasicBtn = styled.button`
  border: none;
  cursor: pointer;
  transition: 0.2s;
  border-radius: 5px;
  font-size: 1rem;
`;

export const TagsArea = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Tag = styled.div`
  margin-top: 0.3rem;
  background: #000000ac;
  color: white;
  margin-right: 0.5rem;
  border-radius: 5px;
  padding: 3px 5px;
`;

export const UserDataArea = styled.div`
  padding-left: 0.5rem;
  padding-bottom: 1rem;
  position: absolute;
  bottom: 0;
  width: 95%;
`;
