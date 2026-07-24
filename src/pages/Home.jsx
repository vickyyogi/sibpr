import Header from '../componens/commons/Header'
import Footer from '../componens/commons/Footer'

const Home = () => {
    return (
        <div>
            <Header />
            <main className="main-content h-screen flex flex-col items-center justify-center">
                <h1 className="main-title">Welcome to BPR Adiartha Reksacitra</h1>
                <p>This is the home page of our website.</p>
            </main>
            <Footer />
        </div>
    );
}

export default Home;