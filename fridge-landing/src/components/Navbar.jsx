import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";

const Navbar = () => {
  return (
    <>
      <div className="Navbar">
        <div className="container">
          <div className="row">
            <div className="col-lg-2 col-4">
              <a href="#">
                <img className="w-100" src="/images/logo.svg" alt="" />
              </a>
            </div>
            <div className="col-lg-9 myCol">
              <a href="#">Главная</a>
              <a href="#service">Услуги</a>
              <a href="#about">О нас</a>
              <a href="#team">Команда</a>
              <a href="#contact">Контакты</a>
              <a href="#feedback">Отзывы</a>
              <a className="phone" href="tel:+998 90 123 45 67">
                +998 90 123 45 67
              </a>
              <FormControl>
                {/* <InputLabel variant="standard" htmlFor="uncontrolled-native">
                  <LanguageIcon />
                </InputLabel> */}
                <NativeSelect
                  defaultValue={30}
                  inputProps={{
                    name: "age",
                    id: "uncontrolled-native",
                  }}
                >
                  <option value={10}>Uz</option>
                  <option value={20}>Ру</option>
                </NativeSelect>
              </FormControl>
            </div>
          </div>
        </div>
      </div>
      <div className="navbarLine"></div>
    </>
  );
};

export default Navbar;
