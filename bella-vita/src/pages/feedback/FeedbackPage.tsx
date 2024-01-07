import {Feedback} from "../../components";
import feedbackBg2 from "@/assets/feedbackBg2.png"

const FeedbackPage = () => {
    return (
        <div className='FeedbackPage miniFeedback'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-10">
                        <Feedback
                            type={"Feedback"}
                            mainText={"Biz bilan bog’laning"}
                            secondaryText={"Aloqa"}
                        />
                    </div>
                    <div className="col-lg-2">
                        <img src={feedbackBg2} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeedbackPage;