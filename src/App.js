
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import DataTable2 from "./basic-examples/DataTable2";
import SignupForm from "./basic-examples/SingupForm";
import "bootstrap/dist/css/bootstrap.css"
import Navigation from "./basic-examples/Navigation";
import CounterExample from "./use-reducer-examples/CounterExample";
let routeConfiguration = createBrowserRouter([
  {
    path:"/",
    element:<CounterExample />,
    children: [
      {
        path:"/",
        element: <SignupForm />
      },
      {
        path:"/table",
        element: <DataTable2 />
      }
    ]
  }
])

function App() {
  return (
    <RouterProvider router={routeConfiguration}></RouterProvider>
  );
}

export default App;
