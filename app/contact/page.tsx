import ContactHeader from "../components/contactComponents/ContactHeader/ContactHeader";
import LocationContact from "../components/contactComponents/ContactHeader/LocationContact";
import InputsContact from "../components/contactComponents/InputsContact";

export default function Page () {
    return <div>
        <ContactHeader/>
        <div className=" flex justify-around">
        <LocationContact/>
        <InputsContact/>
        </div>
    </div>
}