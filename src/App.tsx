import React, { lazy, Suspense, useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
//import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
//import Contact from "./Pages/Contact";
import SPNavbar from "./Components/SPNavbar";
import SPFooter from "./Components/SPFooter";
//import About from "./Pages/About";
//import Services from "./Pages/Services";
import SPLoading from "./Components/SPLoading";
import { ToastContainer, toast } from "react-toastify";
import NotFound from "./Pages/NotFound";
import Blogs from "./Pages/Blogs";
import Layout from "./Components/Layout";

const Home = lazy(() => import("./Pages/Home"));
const About = lazy(() => import("./Pages/About"));
const Services = lazy(() => import("./Pages/Services"));
const Contact = lazy(() => import("./Pages/Contact"));

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay for loading
    const timer = setTimeout(() => setLoading(false), 1000);

    // Cleanup the timer
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <SPLoading />;
  }
  return (
    <>
      {/* <SPNavbar /> */}
      {/* <Layout> */}
      <Suspense fallback={<SPLoading />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />{" "}
            {/* Catch-all route for 404 */}
          </Route>
        </Routes>
      </Suspense>
      <ToastContainer />
      {/* </Layout> */}
      {/* <SPFooter /> */}
    </>
  );
}

export default App;
