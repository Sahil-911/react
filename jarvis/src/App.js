// import logo from './logo.svg';
import './index.css';
import Employee from './components/Employee.js';

function App() {
  console.log('we are going to show the list of the employee');
  const ShowEmployees= true;
  return (
    <div className="h-14 bg-gradient-to-r from-sky-300 to-indigo-300">
    <p>
      Hello, how are you!!
    </p>
    {ShowEmployees ?
      <p3 className="bg-red-300">
        <Employee name='anuj' role='Timepass'/>
        <Employee name='chacha'/>
        <Employee name='harshal'/>   
      </p3>
      :<p>No, you can't see the Employee </p>
    }
  </div>
  );
}

export default App;
