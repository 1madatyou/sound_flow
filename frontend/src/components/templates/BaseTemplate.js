import Header from "../header/header"
import Footer from "../footer/footer"



const BaseTemplate = ({children}) => {
    return (
        <>
            <Header/>
                <main>
                    <div className="wrapper">
                        {children}
                    </div>
                </main>
            <Footer/>
        </>
    );
}

export default BaseTemplate;