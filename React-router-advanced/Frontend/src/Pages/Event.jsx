
import { useLoaderData, json } from "react-router-dom";
import EventsList from "../components/EventsList";

function EventPage(){
const data= useLoaderData();

if(data.isError){
  return <p>{data.message}</p>
}

const events= data.events;
    return (
      <>
      <EventsList events={events} />
      </>
    );
  }
  
export default EventPage;
export async function loader(){
  const response = await fetch('http://localhost:8080/events/something');

        if (!response.ok) {
          // throw new Response(JSON.stringify({message: "Coul not fetch events."}),
          // {
          //   status: 500
          // }
          // )
          return json({message: "Coul not fetch events."},{ status: 500 });

        } else {
          return response;
        }
        
}