import { useContext } from "react";
import { RouterContext } from "./router-context";

const useRouter = () => {
  return useContext(RouterContext);
};

export default useRouter;
