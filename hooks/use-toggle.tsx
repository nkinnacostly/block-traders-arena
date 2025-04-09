import { useState } from "react";

const useToggle = (initialState: boolean): [boolean, () => void] => {
  const [toggle, setToggle] = useState<boolean>(initialState);
  const handleToggle = () => {
    setToggle((prev) => !prev);
  };
  return [toggle, handleToggle];
};

export default useToggle;
