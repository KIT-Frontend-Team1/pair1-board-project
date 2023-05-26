import { createContext } from "react";
import { useState } from "react";

const PostContext = createContext();
export default PostContext;

export const PostContextProvider = ({ children }) => {
  const [isPostOpen, setIsPostOpen] = useState(false);
  return (
    <PostContext.Provider value={{ isPostOpen, setIsPostOpen }}>
      {children}
    </PostContext.Provider>
  );
};
