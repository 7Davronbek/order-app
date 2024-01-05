import {HashRouter, Route, Routes} from "react-router-dom";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import {Navbar, Cursor, Footer} from "./components";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import {AboutUs, FabricsForClothing, Feedback, IndividualTailoringService, Main, Vacancy, WeddingDress} from "./pages";

const App = () => {
    return (
        <HashRouter>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Main/>}/>
                <Route path='/wedding-dress ' element={<WeddingDress/>}/>
                <Route path='/individual-tailoring-service ' element={<IndividualTailoringService/>}/>
                <Route path='/fabrics-for-clothing ' element={<FabricsForClothing/>}/>
                <Route path='/about-us ' element={<AboutUs/>}/>
                <Route path='/vacancy ' element={<Vacancy/>}/>
                <Route path='/feedback ' element={<Feedback/>}/>
            </Routes>
            <Footer/>
            <Cursor/>
        </HashRouter>
    );
};

export default App;