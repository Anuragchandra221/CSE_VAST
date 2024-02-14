
import './App.css';
import {
  createBrowserRouter, RouterProvider
} from "react-router-dom"
import Home from './Pages/Home';
import Event from './Pages/Event';
import About from './Pages/About';
import { individual } from './Event_details';
import EventPage from './Pages/EventPage';
import Team from './Pages/Team';

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
    element: <Event event="udzn" data={individual.udzn}/>
  },
  {
    path: "/c2c",
    element: <Event event="canvas" data={individual.c2c}/>
  },
  {
    path: "/respawnesports",
    element: <Event event="respawn" data={individual.respawn}/>  
  },
  {
    path: "/dsd",
    element: <Event event="dev" data={individual.dsd} />  
  },
  {
    path: "/animaze",
    element: <Event event="animaze" data={individual.animaze}/>  
  },
  {
    path: "/matrix",
    element: <Event data={individual.matrix}/>
  },
  {
    path: "/maze",
    element: <Event data={individual.maze}/>
  },
  {
    path: "/photobooth",
    element: <Event data={individual.photo}/>
  },
  {
    path: "/workshop",
    element: <Event data={individual.workshop}/>
  },
  {
    path: "/infinity",
    element: <Event data={individual.infinity}/>
  },
  {
    path: "/fifa",
    element: <Event data={individual.fifa}/>
  },
  {
    path: "/team",
    element: <Team/>
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
