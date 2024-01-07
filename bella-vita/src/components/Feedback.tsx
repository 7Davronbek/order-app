import InputMask from "react-input-mask";
import {ChangeEvent, useState} from "react";
import FeedbackService from "../service/FeedbackService.ts";
import IFeedbackType from "../types/IFeedbackType.ts";
import {toast} from "react-toastify";


const Feedback = (props: { mainText: string, secondaryText: string, type: string }) => {
    const [name, setName] = useState<string>("");
    const [phone, setPhone] = useState<string>("+998");
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const feedback = async (e: { preventDefault: () => void; }) => {
        setIsLoading(true)
        e.preventDefault();
        const data: IFeedbackType = {
            name,
            phoneNumber: phone
        }
        if (name.length === 0 || phone.length !== 19) {
            toast.error("Bad request")
            setIsLoading(false)
            return
        }
        await FeedbackService.feedback(data, props.type)
            .then(() => {
                toast.success(`Success`);
                setPhone("+998")
                setName("")
                setIsLoading(false)
            }).catch(() => {
                toast.error("Internal error")
                setIsLoading(false)
            })
    }

    return (
        <div className='Feedback'>
            <div className="container">
                <div className="row">
                    <form onSubmit={feedback} className="col-12">
                        <h1 className="feedbackSecondary">{props.secondaryText}</h1>
                        <h2 className="feedbackMain">{props.mainText}</h2>
                        <div className="inputWrap">
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
                        </div>
                        <button disabled={isLoading} type="submit" className="btn myBtn"><span
                            className="circle"></span><span className='textBg'>YUBORISH</span>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Feedback;