import Routing from './Routing.tsx'
import { useEffect } from 'react';
import AOS from "aos";
import 'aos/dist/aos.css';
export default function Home() {
    useEffect(() => {
        AOS.init();
      }, []);
  return (
    <div>
      <Routing/>
    </div>
  )
}
