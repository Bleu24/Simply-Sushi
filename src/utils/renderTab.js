import { state } from "./state";
import Home from "../components/home";
import Menu from "../components/menu";

export default function renderTab(requestedTab) {

    if(requestedTab === state.activeContent) return;
    
    switch (requestedTab) {
        case 'home':
            Home();
            break;
        case 'menu':
            Menu();
            break;
        case 'about':
            About();
            break;
        case 'contact':
            Contact();
            break;

        default:
            break;
    }

    return;
}