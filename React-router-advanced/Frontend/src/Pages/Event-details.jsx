import { useParams } from "react-router-dom";

export default function EventDetailsPage(){
  const params =useParams();
    return(
        <>
        <h1>Events Detail Page</h1>
        <h1>{params.eventId}</h1>
        </>
    );
}