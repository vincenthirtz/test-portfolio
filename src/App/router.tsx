import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from 'pages/Home';
import About from 'pages/About';
import AllProjects from 'pages/AllProjects';
import Contact from 'pages/Contact';
import Project1 from 'pages/Project1';
import Services from 'pages/Services';
import MentionsLegales from 'pages/MentionsLegales';
import Error404 from 'pages/Error404';

const Router = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/all-projects" element={<AllProjects />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/aude-bourgine" element={<Project1 />} />

        <Route path="/services" element={<Services />} />

        <Route path="/legal-notices" element={<MentionsLegales />} />

        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
