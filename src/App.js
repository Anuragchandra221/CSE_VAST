
import './App.css';
import {
  createBrowserRouter, RouterProvider
} from "react-router-dom"
import Home from './Pages/Home';
import Respawn from './Pages/Respawn';
import Event from './Pages/Event';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  }, 
  {
    path: "/respawn",
    element: <Respawn/>
  },
  {
    path: "/udzn",
    element: <Event event="udzn"/>
  },
  {
    path: "/c2c",
    element: <Event event="canvas"/>
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
