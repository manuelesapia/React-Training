import { BiCalendar } from "react-icons/bi";
import Search from "./components/Search";
import AddAppointment from "./components/AddAppointment";
import AppointmentInfo from "./components/AppointmentInfo";
import appointmentList from "./data.json";

function App() {
  return (
    <div className="App container mx-auto mt-3 font-thin">
        <h1 className="text-5xl">
        <BiCalendar className="inline-block text-red-400 align-top" /> Your Appointments</h1>
        <AddAppointment />
        <Search />

        <ul className="divide-y">
          {appointmentList
          .map(appointment => (
              <AppointmentInfo key={appointment.id} 
              appointment={appointment}
              />
            ))     
          }
        </ul>

    </div>
  );
}

export default App;
