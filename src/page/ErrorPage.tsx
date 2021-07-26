import { useEffect } from "react";
import { useHistory } from "react-router-dom";

const ErrorPage = () => {
  const history = useHistory();
  useEffect(() => {
    history.push("/");
  }, []);
  return <div></div>;
};

export default ErrorPage;
