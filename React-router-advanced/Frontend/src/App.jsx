import {createBrowserRouter, RouterProvider} from "react-router-dom";
import RootLayOut from './Pages/Root';
import './App.css'
import HomePage from "./Pages/Home";
import EventPage from "./Pages/Event";
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
        {index: true, element: <EventPage/>, loader: async()=> {
          const response = await fetch('http://localhost:8080/events');

        if (!response.ok) {
          //....
        } else {
          const resData = await response.json();
          return resData.events;  
        }
        }},
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
