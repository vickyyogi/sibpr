import Footer from "../componens/commons/Footer";
import Header from "../componens/commons/Header";

const About = () => {
    return (
        <div>
            <Header />
            <main className="main-content">
                <h1 className="main-title">About Us</h1>
                <p>This is the about page of our website.</p>
            </main>
            <Footer />
        </div>
    );
}

export default About;