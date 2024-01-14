import {Route, Routes} from "react-router-dom";
// @ts-ignore
import {Navbar, Cursor, Footer, ScrollToTop} from "./components";
import {
    AboutUs,
    FabricsForClothing,
    FeedbackPage,
    IndividualTailoringService,
    Main,
    Vacancy,
    WeddingDress
// @ts-ignore
} from './pages';
import {ToastContainer} from "react-toastify";

const App = () => {
    return (
        <>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Main/>}/>
                <Route path='/wedding-dress/:id' element={<WeddingDress/>}/>
                <Route path='/individual-tailoring-service' element={<IndividualTailoringService/>}/>
                <Route path='/fabrics-for-clothing' element={<FabricsForClothing/>}/>
                <Route path='/about-us' element={<AboutUs/>}/>
                <Route path='/vacancy' element={<Vacancy/>}/>
                <Route path='/feedback' element={<FeedbackPage/>}/>
            </Routes>
            <Footer/>
            <Cursor/>
            <ScrollToTop/>
            <ToastContainer/>
        </>
    );
};

export default App;