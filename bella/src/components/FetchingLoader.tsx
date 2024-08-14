import {RingLoader} from "react-spinners";

const FetchingLoader = () => {
    return (
        <div className="FetchingLoader py-5 d-flex align-items-center justify-content-center">
            <RingLoader className="py-5" color="#555"/>
        </div>
    );
};

export default FetchingLoader;