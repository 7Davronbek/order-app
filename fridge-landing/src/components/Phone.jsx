import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";

const Phone = () => {
  return (
    <a href="tel: +998 90 123 45 67" className="Phone">
      <div className="scales"></div>
      <span>
        <PhoneEnabledIcon />
        <img src="/images/phone.png" alt="" />
      </span>
    </a>
  );
};

export default Phone;
