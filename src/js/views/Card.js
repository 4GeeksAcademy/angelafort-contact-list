import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "./../store/appContext";
import "../../styles/card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faPhone, faEnvelope, faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";

const Card = () => {
    const { actions, store } = useContext(Context);
    const [reload, setReload] = useState(false); // Estado para forzar la recarga de los contactos

    useEffect(() => {
        actions.Getcontact(); // Llama a la acción para obtener los contactos al cargar el componente
    }, [reload]); // Recargar los contactos cuando cambie el estado "reload"

    // Función para eliminar un contacto
    const handleDeleteContact = (id) => {
        actions.deleteContact(id);
        setReload(!reload); // Cambia el estado para forzar la recarga de los contactos después de eliminar uno
    };

    return (
        <div className="container mt-5">
            <div className="contactButton">
                <Link to="Addcontact">
                    <button className="btn btn-success">Add new contact</button>
                </Link>
            </div>
            <div className="row justify-content-center">
                {store.contacts?.map(contact => (
                    <div key={contact.id} className="mb-4">
                        <div className="card">
                            <div className="card-body">
                                <div className="row align-items-center">
                                    <div className="col-md-3">
                                        <div className="circular-image">
                                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKyWbdNNuQMN_dv51ROHvHdkIK4waVbtfyHo41K-d2g5PABfyyEIDlnvGQ4rSa3wGGXrs&usqp=CAU" alt="Circular image" className="img-fluid rounded-circle" />
                                        </div>
                                    </div>
                                    <div className="col-md-9">
                                        <div className="d-flex justify-content-between align-items-center mb-3">
                                            <h5 className="card-title m-0">{contact.name}</h5>
                                            <div className="text-right">
                                                <Link to="Editcontact">
                                                    <FontAwesomeIcon icon={faEdit} className="mx-3" style={{ cursor: 'pointer' }} />
                                                </Link>
                                                <FontAwesomeIcon icon={faTrash} className="mx-4" onClick={() => handleDeleteContact(contact.id)} style={{ cursor: 'pointer' }} />
                                            </div>
                                        </div>
                                        <div className="float-start text-secondary">
                                        <p>
                                            <FontAwesomeIcon icon={faMapMarkerAlt} /> {contact.address}
                                        </p>
                                        <p>
                                            <FontAwesomeIcon icon={faPhone} /> {contact.phone}
                                        </p>
                                        <p>
                                            <FontAwesomeIcon icon={faEnvelope} /> {contact.email}
                                        </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Card;
