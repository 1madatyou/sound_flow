import MenuBarItem from "./MenuBarItem";

import homeIcon from "../../resources/img/icons/home.svg";
import feedIcon from "../../resources/img/icons/feed.svg";
import musicIcon from "../../resources/img/icons/music.svg";
import usersIcon from "../../resources/img/icons/users.svg";


import "./menuBar.scss"


const MenuBar = () => {

    const menuItems = [
        {label: 'Profile', icon: homeIcon},
        {label: 'Feed', icon: feedIcon},
        {label: 'Users', icon: usersIcon},
        {label: 'Music', icon: musicIcon},
    ]

    return (
        <aside className="menu-bar">
            {menuItems.map(item => {
                return (
                    <MenuBarItem label={item.label} icon={item.icon}/>
                );
            })}
        </aside>
    );

}

export default MenuBar;