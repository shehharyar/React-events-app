import {createBrowserRouter, RouterProvider} from "react-router-dom";
import RootLayOut from './Pages/Root';
import './App.css'
import HomePage from "./Pages/Home";
import EventPage from "./Pages/Event";
import EventDetailsPage from "./Pages/Event-details";
import NewEventPage from "./Pages/new-event";
import EditEventPage from "./Pages/edit-event";

const router = createBrowserRouter([
{
  path: "/",
  element: <RootLayOut/>,
  children:[
    { index: true, element: <HomePage/>},
    { path: "/events", element: <EventPage/>},
    { path: "/events/:eid", element: <EventDetailsPage/>},
    { path: "/events/new", element: <NewEventPage/>},
    { path: "/events/:eid/edit", element: <EditEventPage/>},
  ]
}
])

function App() {

  return (
    <>
    <RouterProvider router={router}/>
    </>
        )
}

export default App
