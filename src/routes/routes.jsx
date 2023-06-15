import { Routes, Route } from 'react-router-dom';


import Home from '../pages/Home';
import Movies from '../pages/Movies';
import Series from '../pages/Series';


const Router = () => {
    return (
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/series" element={<Series />} />
        </Routes>
    );

}
export default Router;