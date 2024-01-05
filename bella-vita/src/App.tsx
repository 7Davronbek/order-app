import {Route, Routes} from "react-router-dom";
import {Navbar, Cursor, Footer} from "./components";
import {AboutUs, FabricsForClothing, Feedback, IndividualTailoringService, Main, Vacancy, WeddingDress} from "./pages";
import { ToastContainer } from "react-toastify";

const App = () => {
    return (
        <>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Main/>}/>
                <Route path='/wedding-dress' element={<WeddingDress/>}/>
                <Route path='/individual-tailoring-service' element={<IndividualTailoringService/>}/>
                <Route path='/fabrics-for-clothing' element={<FabricsForClothing/>}/>
                <Route path='/about-us' element={<AboutUs/>}/>
                <Route path='/vacancy' element={<Vacancy/>}/>
                <Route path='/feedback' element={<Feedback/>}/>
            </Routes>
            <Footer/>
            <Cursor/>
            <ToastContainer />
        </>
    );
};

export default App;