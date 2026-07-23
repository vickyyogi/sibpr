import Header from '../componens/commons/Header';
import Footer from '../componens/commons/Footer';

const Contact = () => {
    return (
        <div>
            <Header />
            <main className="main-content">
                <h1 className="main-title">Contact Us</h1>
                <p>This is the contact page of our website.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur harum labore qui delectus id nemo ipsa porro vitae minus, nobis laudantium veritatis recusandae non officiis deleniti accusantium dicta. Nisi, voluptatibus!</p>
            </main>
            <Footer />
        </div>
    );
}

export default Contact;