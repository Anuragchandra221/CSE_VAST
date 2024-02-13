
import './App.css';
import {
  createBrowserRouter, RouterProvider
} from "react-router-dom"
import Home from './Pages/Home';
import Event from './Pages/Event';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
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
