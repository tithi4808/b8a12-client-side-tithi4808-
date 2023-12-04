import React, { useContext, useState } from 'react';
import {  useNavigate } from 'react-router-dom'; // Import useHistory from react-router-dom
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { updateProfile } from 'firebase/auth';
import { AuthContext } from '../../../AuthProvider.jsx/AuthProvider';

const JoinAsAdmin = () => {
    const { createUser, User } = useContext(AuthContext);
    const navigate=useNavigate() // Initialize history from react-router-dom
    const [success, setSuccess] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const [selectedPackage, setSelectedPackage] = useState('');

    const handleRegister = (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const Companyname = e.target.Companyname.value;
        const logo = e.target.logo.value;
        const password = e.target.password.value;
        const name = e.target.name.value;
        const DateOfBirth = e.target.DateOfBirth.value;
        const image=e.target.image.value;
        const role = 'admin';

        if (password.length < 6) {
            setErrorMsg('Password should have at least 6 characters');
            toast(errorMsg);
            return;
        }

        // ... (password validation logic)

        createUser(email, password)
            .then((result) => {
                const user = result.user;
                const displayName = name;
                const photoURL = logo;

                return updateProfile(user, { displayName, photoURL });
            })
            .then(() => {
                setSuccess('Registration Successful');
                toast(success);
                // Redirect to payment page based on the selected package
                redirectToPayment(selectedPackage);
            })
            .catch((error) => {
                console.log(error.message);
                setErrorMsg('Email already in use');
                toast(errorMsg);
            });

        const admin = {
            name,
            email,
            DateOfBirth,
            Companyname,
            logo,
            role,
            selectedPackage,
            image
        };

        fetch('https://b8a12-server-side-tithi4808.vercel.app/allemployees', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(admin),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.acknowledged) {
                   toast('you are being redirected to payment page')
                }
            })
            .catch((error) => {
                console.error('Error adding admin:', error);
            });
    };

    const redirectToPayment = (packageType) => {
        navigate(`/payment/${packageType}`);
    };

    return (
        <div className="w-full lg:mt-10">
            <div className="hero lg:mt-10 min-h-screen lg:max-w-full bg-base-100">
                <div className="hero-content flex-col">
                    <div className="text-center text-4xl font-bold ">
                        <h1>Join as an Admin</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Full name</span>
                                </label>
                                <input name="name" type="text" placeholder="Your name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your image</span>
                                </label>
                                <input name="image" type="text" placeholder="Your image link" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Company name</span>
                                </label>
                                <input name="Companyname" type="text" placeholder="Company name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Company Logo</span>
                                </label>
                                <input name="logo" type="text" placeholder="Company logo" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Email id</span>
                                </label>
                                <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Date Of Birth</span>
                                </label>
                                <input name="DateOfBirth" type="text" placeholder="mm-dd-yyy" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Select a package</span>
                                </label>
                                <select
                                    name="package"
                                    onChange={(e) => setSelectedPackage(e.target.value)}
                                    className="select select-bordered"
                                >
                                    <option value="" disabled selected>
                                        Select a package
                                    </option>
                                    <option value="5">5 Members for $5</option>
                                    <option value="10">10 Members for $8</option>
                                    <option value="20">20 Members for $15</option>
                                </select>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-red-400">Sign up</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            
            <ToastContainer />
        </div>
    );
};

export default JoinAsAdmin;
