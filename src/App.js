
import './App.css';
import {
  createBrowserRouter, RouterProvider
} from "react-router-dom"
import Home from './Pages/Home';
import Event from './Pages/Event';
import About from './Pages/About';
import { individual } from './Event_details';
import EventPage from './Pages/EventPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/about",
    element: <About/>
  },
  {
    path: '/events',
    element: <EventPage/>
  },
  {
    path: "/udzn",
    element: <Event event="udzn"/>
  },
  {
    path: "/c2c",
    element: <Event event="canvas"/>
  },
  {
    path: "/respawnesports",
    element: <Event event="respawn"/>  
  },
  {
    path: "/dsd",
    element: <Event event="dev"/>  
  },
  {
    path: "/animaze",
    element: <Event event="animaze"/>  
  },
  {
    path: "/matrix",
    element: <Event data={individual.matrix}/>
  }
])

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
