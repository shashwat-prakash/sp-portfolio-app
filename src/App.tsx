import React, { lazy, Suspense, useEffect, useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import SPLoading from "./Components/SPLoading";
import { ToastContainer } from "react-toastify";
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
      <Suspense fallback={<SPLoading />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />{" "}
          </Route>
        </Routes>
      </Suspense>
      <ToastContainer />
    </>
  );
}

export default App;
