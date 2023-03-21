import './Form.css';

  function Form(){
    return (
        <div class="form">
            <input type="text"placeholder="Email Address" class="email"></input>
            <input type="password" placeholder="Password" class="password"></input>
            <br></br>
            <button type="button" class="button">LOGIN</button>
            <p class="forgotPassword">Forgot Password?</p>
            <p class="para">or login with</p>
        </div>
    )
  }
  export default Form;