import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
// import Header from './component/Header.tsx';
import { BrowserRouter } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter className="main">
      {/* <Header/> */}
      <App/>
     </BrowserRouter>
  </React.StrictMode>
)
