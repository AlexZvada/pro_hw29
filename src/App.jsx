
import './App.css';
import Photos from './components/Photos';
import Posts from './components/Posts';
import Users from './components/Users';
import Form from './components/Form';


// 
function App() {
  
  return (
    <div className='main'>
      <Photos />
      <Posts />
      <Users />
      <Form />
    </div>
  );
}

export default App;
