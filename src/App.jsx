import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        {/* <Provider store={store}> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/P1" element={<Page1 />} />
          <Route path="/P2" element={<Page2 />} />
          <Route path="/P3" element={<Page3 />} />
        </Routes>
        {/* </Provider> */}
        <Footer />
      </Router>
    </>
  );
}

export default App;
