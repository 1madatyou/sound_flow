import Header from "../header/header"
import Footer from "../footer/footer"
import MenuBar from "../menuBar/MenuBar";


const SidebarTemplate = ({children}) => {
    return (
        <>
            <Header/>
            <main>
                <div className="wrapper">
                    <MenuBar/>
                    {children}
                </div>
            </main>
        </>
    );
}

export default SidebarTemplate;
