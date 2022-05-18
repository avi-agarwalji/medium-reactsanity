import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import SignIn from "./components/SignIn";
import Home from "./components/Home";
import Posts from "./components/Posts";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/signin" element={<SignIn/>} />
        <Route path="/posts" element={<Posts/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
