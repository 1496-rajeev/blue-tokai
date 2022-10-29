import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Series from "./pages/series";
import Index from "./pages";
import Movies from "./pages/movies";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/series" element={<Series />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="*" element={<p>page not found</p>} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
