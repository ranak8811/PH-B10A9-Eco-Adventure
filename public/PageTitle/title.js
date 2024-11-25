import { useEffect } from "react";

function useTitle(path) {
  useEffect(() => {
    document.title = `${path} || Eco-Adventure`;
    return () => {};
  }, []);
}

export default useTitle;
