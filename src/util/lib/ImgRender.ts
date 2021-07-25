import { useCallback, useState } from "react";

const ImgRender = () => {
  const [profileImg, setProfileImg] = useState<string | ArrayBuffer | null>();
  const [profileUploadImg, setProfileUploadImg] = useState<File | null>();

  const onClickImgUpload = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      let reader = new FileReader();
      if (e.target.files && e.target.files.length) {
        let file = e.target.files[0];
        setProfileUploadImg(file);
        reader.onloadend = () => {
          setProfileImg(reader.result);
        };
        reader.readAsDataURL(file);
      } else {
        setProfileImg("");
      }
    },
    [profileUploadImg, setProfileImg, profileImg]
  );

  return { onClickImgUpload };
};

export default ImgRender;
