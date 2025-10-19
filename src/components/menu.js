import { state } from "../utils/state";
import { MenuItem } from "../classes/MenuItem";
import createMenuItem from "../utils/createMenuItem";

export default function Menu() {
    const div = document.getElementById('content');
    const item1 = new MenuItem('fuck', 'Sushi', 200, 'スシ' ,'Sweet and Fragrant Sushi');
    const itemEl = createMenuItem(item1);

    div.appendChild(itemEl);



    
}