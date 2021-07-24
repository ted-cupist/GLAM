import styled from "styled-components";
import Page from "../../util/enum/Page";

interface CustomSelectPageProps {
  selectPage: Page;
  setSelectPage: React.Dispatch<React.SetStateAction<Page>>;
}

const CustomSelectPage = ({
  selectPage,
  setSelectPage,
}: CustomSelectPageProps) => {
  return (
    <SelectPageArea>
      {selectPage === Page.GLAM ? (
        <SelectedPage>GLAM</SelectedPage>
      ) : (
        <SelectPage
          onClick={() => {
            setSelectPage(Page.GLAM);
          }}
        >
          GLAM
        </SelectPage>
      )}
      {selectPage === Page.LIVE ? (
        <SelectedPage>라이브</SelectedPage>
      ) : (
        <SelectPage
          onClick={() => {
            setSelectPage(Page.LIVE);
          }}
        >
          라이브
        </SelectPage>
      )}
      {selectPage === Page.AROUND ? (
        <SelectedPage>근처</SelectedPage>
      ) : (
        <SelectPage
          onClick={() => {
            setSelectPage(Page.AROUND);
          }}
        >
          근처
        </SelectPage>
      )}
    </SelectPageArea>
  );
};

const SelectPageArea = styled.div`
  display: flex;
  width: 100%;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #b9b9b9;
`;

const SelectPage = styled.div`
  font-size: 1.5rem;
  margin-left: 0.5rem;
`;

const SelectedPage = styled(SelectPage)`
  font-weight: bold;
`;

export default CustomSelectPage;
