import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Editcontact = () => {
    const { actions } = useContext(Context); // Obtener las acciones del contexto

    // Definir el estado para los datos del contacto a editar
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");

    // Función para manejar el envío del formulario y editar el contacto
    const handleSubmit = (event) => {
        event.preventDefault();
        actions.editContact(name, phone, email, address);
    };

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
            </form>
            <Link to="/contacts">
                <p>or get back to contacts</p>
            </Link>
        </div>
    );
};

export default Editcontact;
