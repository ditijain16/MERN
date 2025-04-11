// import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import { Provider } from 'react-redux';
import { myStore } from './redux/config';

function App() {

  let routerConfig = createBrowserRouter([
    // {"path":"/","element":<App/>},
    // {"path":"/routerconfig","element":<routerConfig/>},
    {"path":"/home","element":<Home/>},
    {"path":"/contact","element":<Contact/>},
    {"path":"/about","element":<About/>},
  ])

  return (
    <Provider store={myStore}>
    <div className="App">
     <RouterProvider router={routerConfig}/>
    </div>
    </Provider>
  );
}

export default App;
