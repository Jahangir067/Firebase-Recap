import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from "../../firebase/firebase.init";
import { useState } from "react";

const auth = getAuth(app)
const Register = () => {
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const handleSubmit = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email, password)
        // create user in firebase
        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            setError('');
            event.target.reset();
            setSuccess('User has Created Successfully');
        })
        .catch(error => {
             console.error(error.message)
             setError(error.message);
             setSuccess('')
        })
    }
    return (
        <div>
            
            <form onSubmit={handleSubmit} className="hero w-full min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                        <h1 className="text-2xl font-semibold">Please Register</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required/>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required/>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <p className="text-center text-red-500">{error}</p>
                            <p className="text-center text-green-600">{success}</p>
                        </div>
                    </div>
                </div>
                
            </form>
           
        </div>
    );
};

export default Register;