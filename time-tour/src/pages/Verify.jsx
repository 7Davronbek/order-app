import React, { useState } from 'react'
import { getText } from '../locales'
import { useDispatch } from "react-redux"
import { confirmPassword } from '../redux/features/authSlice'
import { useNavigate } from 'react-router-dom'

const Verify = () => {
  const dispatch = useDispatch(); 

  const [code, setCode] = useState(''); 
  const phone = localStorage.getItem('phone'); 
  const password = localStorage.getItem('password'); 
  
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(confirmPassword({phone, code, password}));
  }

  return (
    <>
      <div className="Registration">
        <div className="container">
          <div className="row">
            <div className="col-12 d-flex justify-content-center">
              <form className="registr_box">
                <div className="registr_name">
                  {getText("registr_name_1")}
                </div>
                <div className="registr_h">
                  {getText("registr_h_3")}
                </div>
                <input placeholder='****' type="text" name="" id="" className="registr_inp" onChange={(e) => setCode(e.target.value)} />

                <button className="registr_btn_2" onClick={onSubmit}>{getText("registr_name_2")}</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Verify