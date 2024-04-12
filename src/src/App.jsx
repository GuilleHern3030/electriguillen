import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Styles
import './App.css';
import whatsappicon from './assets/images/whatsapp-icon2.webp'

// BaseName
import options from './assets/data/data.json'

// Routes
import Index from './routes/index/Index';
import Gallery from './routes/gallery/Gallery';
import Contact from './routes/contact/Contact';
import About from './routes/about/About';
import NotFound from './routes/not-found/Not-Found';
import Privacy from './routes/privacy/Privacy';

import Bubble from './components/bubble/Bubble';

const routes = createBrowserRouter([
  {
    path: "*",
    element: <Index/>,
    errorElement: <NotFound/>
  },
  {
    path: "/about",
    element: <About/>,
    errorElement: <NotFound/>
  },
  {
    path: "/contact",
    element: <Contact/>,
    errorElement: <NotFound/>
  },
  {
    path: "/gallery",
    element: <Gallery/>,
    errorElement: <NotFound/>
  },
  {
    path: "/privacy",
    element: <Privacy/>,
    errorElement: <NotFound/>
  }
],
options)

const App = () => <>
  <RouterProvider router={routes}/>
  <Bubble src={options.whatsapp} img={whatsappicon}/>
</>
export default App