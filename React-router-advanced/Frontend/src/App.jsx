import {createBrowserRouter, RouterProvider} from "react-router-dom";
import RootLayOut from './Pages/Root';
import './App.css'
import HomePage from "./Pages/Home";
import EventPage, { loader as eventsLoader } from "./Pages/Event";
import EventDetailsPage from "./Pages/Event-details";
import NewEventPage from "./Pages/new-event";
import EditEventPage from "./Pages/edit-event";
import EventsRoot from "./Pages/EventsRoot";

const router = createBrowserRouter([
{
  path: "/",
  element: <RootLayOut/>,
  children:[
    { index: true, element: <HomePage/>},
    { path: "events", element: <EventsRoot/>,
      children:[
        { 
          index: true, 
          element: <EventPage/>, 
          loader: eventsLoader
      },
        { path: ":eventId", element: <EventDetailsPage/>},
        { path: "new", element: <NewEventPage/>},
        { path: ":eventId/edit", element: <EditEventPage/>},
      ],
  },
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
