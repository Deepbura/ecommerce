import { useState } from "react";
import axios from 'axios';


const Register = () => {
    const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mobile, setMobile] = useState('');

  

  const HandleRegister =async (e) => {
    e.preventDefault();

    const user=await axios.post('http://127.0.0.1:5000/register',{
      name,email,password,mobile
    });
        
  }

  return (



    <main className="form-signin w-25 m-auto text-center pt-5">
      <form method="post" onSubmit={HandleRegister}>
        <img
          className="mb-4"
          src="/assets/images/plus.png"
          alt=""
          width={60}
          height={42}
        />
        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
        

      
        <div className="form-floating">
          <input onKeyUp={(e) => setName(e.target.value)}
            type="text"
            className="form-control mb-3"
            id="name"
            placeholder="name"
          />
          <label htmlFor="floatingPassword">name</label>
        </div>


        <div className="form-floating">
          <input onKeyUp={(e) => setEmail(e.target.value)}
            type="text"
            className="form-control mb-3"
            id="email"
            placeholder="name@example.com"
          />
          <label htmlFor="floatingInput">Email address</label>
        </div>


        <div className="form-floating">
          <input onKeyUp={(e) => setMobile(e.target.value)}
            type="text"
            className="form-control mb-3"
            id="mobile"
            placeholder="mobile"
          />
          <label htmlFor="floatingInput">Mobile Number</label>
        </div>

        <div className="form-floating">
          <input onKeyUp={(e) => setPassword(e.target.value)}
            type="text"
            className="form-control mb-3"
            id="password"
            placeholder="Password"
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>


        
        <div className="checkbox mb-3">
          <label>
            <input type="checkbox" defaultValue="remember-me" /> Remember me
          </label>
        </div>
        <button className="w-100 btn btn-lg btn-primary" type="submit">
          Register
        </button>
        <p className="mt-5 mb-3 text-body-secondary">© 2017–2023</p>
      </form>
    </main>

  );
}

export default Register;