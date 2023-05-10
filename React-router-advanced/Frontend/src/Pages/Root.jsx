import MainNavigation from "../components/MainNavigation";
import { Outlet} from "react-router-dom"
export default function RootLayOut(){
    return(
        <>
        <MainNavigation/>
        <main>
            <Outlet/>
        </main>
        </>
    );
}