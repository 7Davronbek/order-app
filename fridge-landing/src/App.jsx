import { Navbar, Phone } from "./components";

const App = () => {
  // let tg = {
  //   token: "",
  //   chat_id: "", // The user's(that you want to send a message) telegram chat id
  // };

  // let text = "Hello this is test";

  // const send = () => {
  //   const { data } = axios.post(
  //     `https://api.telegram.org/bot${tg.token}/sendMessage?chat_id=${tg.chat_id}&text=${text}`
  //   );
  //   console.log(data);
  // };
  return (
    <>
      <Navbar />

      <Phone />

      <div className="vh-100"></div>
      <div className="vh-100"></div>
    </>
  );
};

export default App;
