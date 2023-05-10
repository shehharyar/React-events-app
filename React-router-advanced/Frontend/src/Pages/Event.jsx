import EventsList from "../components/EventsList";

const EVENTS= [
    { id: "e1", image: "https://d25fzi0s6rpstl.cloudfront.net/workshop/landing-v2/tech-stack.png", title: "DevOps Workshop", date: "22-05-2023" },
    { id: "e2", image: "https://d25fzi0s6rpstl.cloudfront.net/workshop/landing-v2/tech-stack.png", title: "Summer Camp", date: "22-05-2023" },
    { id: "e3", image: "https://d25fzi0s6rpstl.cloudfront.net/workshop/landing-v2/tech-stack.png", title: "DevOps Workshop", date: "22-05-2023" },
]

function EventPage(){
    return(
       <EventsList events={EVENTS}/>
    );
}

export default EventPage;