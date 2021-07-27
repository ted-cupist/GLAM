import styled from "styled-components";
import useRenderImgHook from "../../hooks/useRenderImgHook";

interface ImgInputProps {
  item: string;
  id: number;
}

const ImgInput = ({ item, id }: ImgInputProps) => {
  const { onClickImgUpload, profileImg } = useRenderImgHook();

  return (
    <LabelDiv>
      <FileUploadLabel htmlFor={String(id)}>
        {profileImg ? (
          <CustomImg src={profileImg.toString()} alt="사진입니다" />
        ) : (
          <CustomImg src={item} alt="사진입니다" />
        )}
      </FileUploadLabel>
      <FileSelectInput
        type="file"
        id={String(id)}
        accept="image/png image/jpeg image/jpg"
        onChange={(e) => {
          onClickImgUpload(e);
        }}
      />
    </LabelDiv>
  );
};

const CustomImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const FileSelectInput = styled.input`
  display: none;
`;

const FileUploadLabel = styled.label`
  width: 100%;
  height: 100%;
  margin: 5px;
  flex-grow: 1;
`;

const LabelDiv = styled.div`
  flex-grow: 1;
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
`;

export default ImgInput;
