import InputMask from "react-input-mask";
import {ChangeEvent, useState} from "react";
import FeedbackService from "../service/FeedbackService.ts";
import IFeedbackType from "../types/IFeedbackType.ts";
import {toast} from "react-toastify";

const Feedback = () => {
    const [name, setName] = useState<string>("");
    const [phone, setPhone] = useState<string>("+998");

    const feedback = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        const data: IFeedbackType = {
            name,
            phoneNumber: phone
        }
        console.log(phone.length)
        if (name.length === 0 || phone.length !== 19) {
            toast.error("Bad request")
            return
        }
        await FeedbackService.feedback(data, "To'y liboslari tiktirish")
            .then(() => {
                toast.success(`Success`);
                setPhone("+998")
                setName("")
            }).catch(() => {
                toast.error("Internal error")
            })
    }

    return (
        <div className='AboutUsFeedback'>
            <div className="container">
                <div className="row">
                    <form onSubmit={feedback} className="col-12">
                        <h1 className="secondaryText">hAR BIR MIJOZ UCHUN INDIVIDUAL YONDASHUV</h1>
                        <h2 className="mainText">To’y libosI TIKTIRISHNI XOHLAYSIZMI?</h2>
                        <input value={name}
                               onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                               type="text" placeholder='FISH'
                               className="form-control"/>
                        <InputMask
                            value={phone}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => setPhone(e.target.value)}
                            mask="+998 (99) 999-99-99"
                            maskChar=""
                            id="phone"
                            type="text"
                            placeholder="+998 (_) _ _ _"
                            className="form-control"
                        />
                        <button type="submit" className="btn myBtn"><span className="circle"></span>YUBORISH</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Feedback;