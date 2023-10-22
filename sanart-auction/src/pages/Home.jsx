import Header from "../components/Header";
import HeadAuct from "../components/HeadAuct";
import HeadNews from "../components/HeadNews";
import HeadMessage from "../components/HeadMessage";
import HeadFoot from "../components/HeadFoot";

const Home = () => {
  //   const { data, error, loading } = useAxios({
  //     url: "https://jsonplaceholder.typicode.com/posts/1",
  //   });

  //   if (loading || !data) return "Loading...";
  //   if (error) return "Error!";

  return (
    <>
      <Header />
      <HeadAuct />
      <HeadNews />
      <HeadMessage />
      <HeadFoot />
    </>
  );
};

export default Home;
