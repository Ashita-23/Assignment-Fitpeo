
import './App.css';
import SideBar from './Components/SideBar';
import MainCounter from './Components/MainCounter';
// import {createBrowserRouter} from "react-router-dom"



// const AppRoutes = createBrowserRouter([
//   {
//     path:"/",
//     element:<MainCounter/>
//   }
// ])
















function App() {
  return (<div className="flex border border-red-600 w-[100%] h-[90rem]">
<SideBar></SideBar>
<MainCounter></MainCounter>
  </div>);
}

export default App;
