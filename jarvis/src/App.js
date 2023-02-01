// import logo from './logo.svg';
import './App.css';
import Employee from './components/Employee.js';

function App() {
  console.log('we are going to show the list of the employee');
  const ShowEmployees= true;
  return (
    <div className="App">
    <p>
      Hello, how are you!!
    </p>
    {ShowEmployees ?
      <>
        <Employee />
        <Employee />
        <Employee />   
      </>
      :<p>No, you can't see the Employee </p>
    }
  </div>
  );
}

export default App;
