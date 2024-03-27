import Appbar from "../Components/appbar/Appbar";
import Footer from "../Components/footer/Footer";
import Subjects from "../Components/dashboard/Subjects";
import Userdetails from "../Components/dashboard/ActivityCard";
import Adverstisment from "../Components/dashboard/Advert";

export default function contact() {
  return (
    <div>
      <Userdetails/>
      <Subjects />
      <Adverstisment/>
    </div>
  );
}
