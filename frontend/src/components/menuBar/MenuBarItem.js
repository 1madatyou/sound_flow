import "./menuBar.scss"


const MenuBarItem = ({label, icon}) => {


    return (
        <div className="menu-bar__item">
            <div className="menu-bar__item__content">
                <img className="menu-bar__item-icon" src={icon} alt="Menu bar item icon" />
                {label}
            </div>
        </div>
    );

}

export default MenuBarItem;