import "./App.css";
import Image from './Image';
import RandomText from './RandomText';
import Form from './Form';
import Icon from './Icon';
// import './Login.css';
import Login from './Login';
import Footer from './Footer';
function App(){
    return (
        <div class="app">
            <div class="innerAppBox">
          <Image/>
          <RandomText/>
          <Login/>
          <Form/>
          <Icon/>
          <Footer/>
        </div>
        </div>
    )
}
export default App;
