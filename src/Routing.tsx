
import { Routes,Route} from 'react-router-dom'
import Home from './component/Home.tsx'
function Routing() {
  return (
   <div>
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/about" element={<About />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/qualification" element={<Qualification />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/resume" element={<Resume />} /> */}
    </Routes>
   </div>
  );
}

export default Routing;