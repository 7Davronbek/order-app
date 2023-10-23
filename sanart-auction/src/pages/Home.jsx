import Header from "../components/Header";
import HeadAuct from "../components/HeadAuct";
import HeadNews from "../components/HeadNews";
import HeadMessage from "../components/HeadMessage";
import HeadFoot from "../components/HeadFoot";
import { useEffect, useState } from "react";
import axios from "axios";
import { PORT } from "../constants";
import { toast } from "react-toastify";
import { ONE_ID_TOKEN } from "../types";
import Loader from "../components/Loader";

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);

  const getCode = async () => {
    setIsLoading(true);
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code");
    if (code) {
      const data = await axios.get(
        PORT + "/accounts/v1/register-login/?code=" + code
      );
      setIsLoading(false);
      const regex = /<Token: ([a-zA-Z0-9]+)>/;
      const matches = data.data.token.match(regex);

      if (matches && matches.length > 1) {
        const token = matches[1];
        localStorage.setItem(ONE_ID_TOKEN, token);
      }
    } else {
      setIsLoading(false);
      toast.error("User not found");
    }
  };

  useEffect(() => {
    getCode();
  }, []);
  return (
    <>
      {isLoading && <Loader />}
      <>
        <Header />
        <HeadAuct />
        <HeadNews />
        <HeadMessage />
        <HeadFoot />
      </>
    </>
  );
};

export default Home;
