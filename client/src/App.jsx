import { Routes, Route } from 'react-router-dom'
import Home from "./components/Home/Home";
import RestaurantItems from './components/RestaurantItems';

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/item" element={<RestaurantItems />} />
        </Routes>
    );
}
