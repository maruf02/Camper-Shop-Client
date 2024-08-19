import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "./store";

const useReloadWarning = () => {
  const savedProducts = useSelector(
    (state: RootState) => state.product.savedProducts
  );
  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      // event.preventDefault();
      // event.returnValue = "";
      // return "";
      if (savedProducts.length > 0) {
        event.preventDefault();
        event.returnValue = ""; // For older browsers
        return ""; // For modern browsers
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);
};

export default useReloadWarning;
