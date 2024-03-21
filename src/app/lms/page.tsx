import Appbar from "../component/appbar/Appbar";
import Footer from "../component/footer/Footer";
import Subjects from "../component/dashboard/Subjects";
import Userdetails from "../component/dashboard/ActivityCard";
import Adverstisment from "../component/dashboard/Advert";

export default function contact() {
  return (
    <div>
      <Userdetails/>
      <Subjects />
      <Adverstisment/>
    </div>
  );
}
