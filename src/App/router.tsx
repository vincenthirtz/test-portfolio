import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from 'pages/Home';
import About from 'pages/About';
import AllProjects from 'pages/AllProjects';
import Contact from 'pages/Contact';
import CoralEternal from 'pages/CoralEternal';
import Cafete from 'pages/Cafete';
import Hybride from 'pages/Hybride';
import Fissure from 'pages/Fissure';
import Lpdc from 'pages/Lpdc';
import Lcdo from 'pages/Lcdo';
import Umdlf from 'pages/Umdlf';
import Parures from 'pages/Parures';
import Mun from 'pages/Mun';
import Nemesis from 'pages/Nemesis';
import Saintgorgon from 'pages/Saintgorgon';
import Saintgorgon2022 from 'pages/Saintgorgon2022';
import Rush2022 from 'pages/Rush2022';
import Othello from 'pages/Othello';
import AnUnderseaOdyssey from 'pages/AnUnderseaOdyssey';
import MasqueComedia from 'pages/MasqueComedia';
import Services from 'pages/Services';
import MentionsLegales from 'pages/MentionsLegales';
import Error404 from 'pages/Error404';
import AccessoiresAndDecors from 'pages/AccessoiresAndDecors';

const Router = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/all-projects" element={<AllProjects />} />
        <Route path="/accessoires&decors" element={<AccessoiresAndDecors />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/accessoires&decors/aude-bourgine" element={<CoralEternal />} />
        <Route path="/accessoires&decors/nemesis" element={<Nemesis />} />
        <Route path="/accessoires&decors/cafete" element={<Cafete />} />
        <Route path="/accessoires&decors/fissure" element={<Fissure />} />
        <Route path="/accessoires&decors/hybride" element={<Hybride />} />
        <Route path="/accessoires&decors/le-poids-des-choses" element={<Lpdc />} />
        <Route path="/accessoires&decors/la-constellation-de-lours" element={<Lcdo />} />
        <Route path="/accessoires&decors/une-mort-dans-la-famille" element={<Umdlf />} />
        <Route path="/accessoires&decors/parures" element={<Parures />} />
        <Route path="/accessoires&decors/albert-de-mun" element={<Mun />} />
        <Route path="/accessoires&decors/saint-gorgon" element={<Saintgorgon />} />
        <Route path="/accessoires&decors/saint-gorgon-2022" element={<Saintgorgon2022 />} />
        <Route path="/accessoires&decors/rush-festival-2022" element={<Rush2022 />} />
        <Route path="/accessoires&decors/othello" element={<Othello />} />
        <Route path="/accessoires&decors/an-undersea-odyssey" element={<AnUnderseaOdyssey />} />
        <Route path="/accessoires&decors/masque-comedia-dellarte" element={<MasqueComedia />} />
        <Route path="/services" element={<Services />} />
        <Route path="/legal-notices" element={<MentionsLegales />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
