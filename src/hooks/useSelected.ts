import { useState } from "react";

const useSelected = () => {
  const [selected, setSelected] = useState<number>(0);

  return { selected, setSelected };
};

export default useSelected;
