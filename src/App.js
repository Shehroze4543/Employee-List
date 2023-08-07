import "./App.css";
import empProfilePic from "./models/models";
import Header from "./Components/Header";
import SearchBar from "./Components/SearchBar";
import EmployeeList from "./Components/EmployeeList";
import EmployeePage from "./Components/EmployeePage";
import EmployeeDetails from "./Components/EmployeeDetails";
function App() {
  return (
    <div className="App">
      <div className="homepage">
        <Header header="Employee Directory" />
        <SearchBar />
        <EmployeeList empProfilePic={empProfilePic} />
      </div>
      <div className="homepage">
        <EmployeePage />
        <EmployeeDetails />
      </div>
    </div>
  );
}

export default App;
