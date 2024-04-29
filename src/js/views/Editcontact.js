import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Editcontact = () => {
    const { actions, store } = useContext(Context);
    const { id } = useParams(); 

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");

    const contactToEdit = store.contacts.find(contact => contact.id === parseInt(id));

    useEffect(() => {
        if (contactToEdit) {
            setName(contactToEdit.name);
            setPhone(contactToEdit.phone);
            setEmail(contactToEdit.email);
            setAddress(contactToEdit.address);
        }
    }, [contactToEdit]);

    const handleSubmit = (event) => {
        event.preventDefault();
        actions.editContact(id, name, phone, email, address);
        redirect(); // aqui llamo a la función de redirección después de editar el contacto
    };

    function redirect() {
        window.location.href = "/"; // aqui redirjoe al usuario al home
    }

    return (
        <div className="container mt-5">
            <div className="text-center">
                <h1>Edit contact</h1>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Full name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Full name"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                        type="text"
                        className="form-control"
                        id="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Phone</label>
                    <input
                        type="text"
                        className="form-control"
                        id="phone"
                        placeholder="Enter phone"
                        value={phone}
                        onChange={(event) => setPhone(event.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="address" className="form-label">Address</label>
                    <input
                        type="text"
                        className="form-control"
                        id="address"
                        placeholder="Enter address"
                        value={address}
                        onChange={(event) => setAddress(event.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Save</button>
                <Link to="/">
                    <p>or get back to contacts</p>
                </Link>
            </form>
        </div>
    );
};

export default Editcontact;
