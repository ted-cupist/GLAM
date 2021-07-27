import { useCallback, useState } from "react";

const useRenderImgHook = () => {
  const [profileImg, setProfileImg] = useState<string | ArrayBuffer | null>(
    null
  );

  const onClickImgUpload = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      let reader = new FileReader();
      if (e.target.files && e.target.files.length) {
        let file = e.target.files[0];
        reader.onloadend = () => {
          setProfileImg(reader.result);
        };
        reader.readAsDataURL(file);
      } else {
        setProfileImg("");
      }
    },
    [setProfileImg]
  );

  return { profileImg, onClickImgUpload };
};

export default useRenderImgHook;
