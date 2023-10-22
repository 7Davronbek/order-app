import React from "react";

const Login = () => {
  return (
    <>
      <div className="Login">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="log_box">
                <div className="log_name">Ro‘yxatdan o‘tish</div>
                <div className="log_box_type">
                  <div className="log_box_type_in active">Sotib oluvchi</div>
                  <div className="log_box_type_in">Sotuvchi</div>
                </div>
                <div>
                  <div className="log_main">
                    <div className="log_main_type log_main_type_2">
                      <div className="inp_box">
                        <div className="inp_name">*Shaxs turi</div>
                        <select name="" id="">
                          <option value="">Jismoniy shaxs</option>
                          <option value="">Yuridik shaxs</option>
                        </select>
                      </div>
                    </div>
                    <div className="log_main_type log_main_type_2">
                      <div className="inp_box">
                        <div className="inp_name">*Fuqoroligi</div>
                        <select name="" id="">
                          <option value="">Yapon</option>
                          <option value="">Uzb</option>
                        </select>
                      </div>
                    </div>
                    <div className="log_main_type ">
                      <div className="inp_box">
                        <div className="inp_name">*Shaxs turi</div>
                        <input type="text" placeholder="" />
                      </div>
                    </div>
                  </div>
                  <div className="log_main">
                    <div className="log_main_type log_main_type_2">
                      <div className="inp_box">
                        <div className="inp_name">*FIO</div>
                        <input type="text" placeholder="" />
                      </div>
                    </div>
                    <div className="log_main_type log_main_type_2">
                      <div className="inp_box">
                        <div className="inp_name">*Tug‘ilgan sana</div>
                        <input type="date" placeholder="" />
                      </div>
                    </div>
                    <div className="log_main_type ">
                      <div className="inp_box">
                        <div className="inp_name">*Jinsi</div>
                        <select name="" id="">
                          <option value="">Erkak</option>
                          <option value="">Ayol</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="log_main">
                    <div className="log_main_type log_main_type_2">
                      <div className="inp_box">
                        <div className="inp_name">
                          *Pasport seriyasi va raqami
                        </div>
                        <input type="text" placeholder="" />
                      </div>
                    </div>
                    <div className="log_main_type log_main_type_2">
                      <div className="inp_box">
                        <div className="inp_name">*Pasport berilgan sana</div>
                        <input type="date" placeholder="" />
                      </div>
                    </div>
                    <div className="log_main_type">
                      <div className="inp_box">
                        <div className="inp_name">*JSHSHIR</div>
                        <input type="text" placeholder="" />
                      </div>
                    </div>
                  </div>
                  <div className="log_main">
                    <div className="log_main_type log_main_type_2">
                      <div className="inp_box">
                        <div className="inp_name">*Telefon</div>
                        <input type="text" placeholder="" />
                      </div>
                      <div className="inp_btn active">SMS yuborish</div>
                    </div>
                    <div className="log_main_type log_main_type_2">
                      <div className="inp_box">
                        <div className="inp_name">*SMS kod</div>
                        <input type="text" placeholder="" />
                      </div>
                      <div className="inp_btn_2">
                        <img src="/img/icon_correct.png" alt="" />
                      </div>
                    </div>

                    <div className="log_main_type"></div>
                  </div>
                  <div className="d-flex align-items-center justify-content-center">
                    <div className="log_confir">Tasdiqlash</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
