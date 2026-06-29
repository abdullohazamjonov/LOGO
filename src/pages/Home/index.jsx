import Header from "../../comonents/header";
import Hero from "../../comonents/hero";
import body from "../../assets/image/body.png";

export default function Home() {
    return (
        <div className="min-h-screen bg-cover" style={{ backgroundImage:`url(${body})`}}>
            <Header/>
            <Hero/>
        </div>
    );
}