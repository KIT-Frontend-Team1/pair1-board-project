import { useState } from "react";

//email, password 등 다양한 input에 사용한다.
const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (e) => {
    setValue(e.target.value);
  };
  return [value, onChange, setValue];
};
export default useInput;