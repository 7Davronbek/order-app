/* eslint-disable react/prop-types */
import background from "../assets/background.png";

const RegistrationLayout = (props) => {
  return (
    <div className="RegistrationLayout">
      <div className="bg">
        <img src={background} alt="" />
      </div>

      {props.children}
    </div>
  );
};

export default RegistrationLayout;
