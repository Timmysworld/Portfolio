import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
// import Main from './components/Main';
// import About from './pages/About/About';
import About from './components/pages/About/About'
import Projects from './components/pages/Projects/Projects';
import Blogs from './components/pages/Blog/Blogs';
import Contact from './components/pages/Contact/Contact';
import Resume from './components/pages/Resume/Resume';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
//import IndividualLayout from './components/layouts/IndividualLayout';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<App/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='projects' element={<Projects/>}/>
          <Route path='blogs' element={<Blogs/>}/>
          <Route path='contact' element={<Contact/>}/>
          <Route path='resume' element={<Resume/>}/>
          {/* <Route path="layouts" element={<IndividualLayout/>}/>  USED FOR DEVELOPMENT */}
          {/* Route path="project/{project.name}/{id}" */}
      </Routes>
      <Footer/>
    </BrowserRouter>
  </React.StrictMode>,
);

