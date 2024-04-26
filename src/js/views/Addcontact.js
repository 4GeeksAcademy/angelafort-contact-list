import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const Addcontact = () => {
    const { actions } = useContext(Context);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");

    const handleSaveContact = () => {
        actions.createContact(name, phone, email, address);
    };

    return (
        <div className="container mt-5">
            <div className="text-center">
                <h1>Add a new contact</h1>
            </div>
            <form>
                <div className="mb-3">
                    <label htmlFor="fullName" className="form-label">Full name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="fullName"
                        placeholder="Full name"
                        value={name}
                        onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                        type="text"
                        className="form-control"
                        id="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Phone</label>
                    <input
                        type="text"
                        className="form-control"
                        id="phone"
                        placeholder="Enter phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="address" className="form-label">Address</label>
                    <input
                        type="text"
                        className="form-control"
                        id="address"
                        placeholder="Enter address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)} />
                </div>
            </form>
            <Link to="/">
            <button onClick={handleSaveContact} className="col-12 btn btn-primary">Save</button>
            </Link>
            <Link to="/">
                <p>or get back to contacts</p>
            </Link>
        </div>
    );
};
export default Addcontact