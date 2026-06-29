import Header from "../../components/Header/index";
import Hero from "../../components/Hero/index";
import Sidebar from "../../components/Sidebar"
import Input from "../../components/Input"
import Card from "../../components/Card"
import Test from "../../components/Test"
import Footer from "../../components/Footer"
import body from "../../assets/image/body.png";
import footer from "../../assets/image/footer.png";

export default function Home() {
    return (
        <div>
            <div className="min-h-screen bg-cover" style={{ backgroundImage:`url(${body})`}}>
                <Header/>
                <Hero/>
                <Sidebar />
                <Input />
                <Card />
                <Test />
            </div>
            <div className="bg-cover" style={{ backgroundImage:`url(${footer})`}}>
                <Footer />
            </div>
        </div>
    );
}