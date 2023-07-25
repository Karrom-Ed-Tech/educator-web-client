import AdditionalDetails from "./components/AdditionalDetails";
import Hero from "./components/Hero";

export default function ProfilePage() {
    return (
        <div>
        <h1>
            <Hero/>
            <AdditionalDetails/>
        </h1>
        </div>
    );
}