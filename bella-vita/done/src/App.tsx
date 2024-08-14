import {Route, Routes} from "react-router-dom";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import {Navbar, Cursor, Footer, ScrollToTop} from "@/components/index.js";
import {
    AboutUs,
    FabricsForClothing,
    FeedbackPage,
    IndividualTailoringService,
    Main,
    Vacancy,
    WeddingDress
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