const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            demo: [
                {
                    title: "FIRST",
                    background: "white",
                    initial: "white"
                },
                {
                    title: "SECOND",
                    background: "white",
                    initial: "white"
                }
            ]
        },
        actions: {
            Getcontact: () => {
                fetch("https://playground.4geeks.com/contact/agendas/angelafort/contacts")
                    .then(response => response.json())
                    .then(data => {
                        setStore({ contacts: data.contacts });
                    })
                    .catch(error => console.error(error));
            },

            createContact: function(name, phone, email, address) {
                fetch("https://playground.4geeks.com/contact/agendas/angelafort/contacts", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        name: name,
                        phone: phone,
                        email: email,
                        address: address
                    })
                })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(data => {
                    console.log("Contacto creado:", data);
                })
                .catch(error => {
                    console.error('Hubo un problema con la solicitud:', error);
                });
            },

            deleteContact: function (id) {
                fetch(`https://playground.4geeks.com/contact/agendas/angelafort/contacts/${id}`, {
                    method: "DELETE",
                })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    console.log("Contacto eliminado correctamente");
                })
                .catch(error => {
                    console.error('Hubo un problema con la solicitud:', error);
                });
            },

            editContact: function(name, phone, email, address) {
                fetch("https://playground.4geeks.com/contact/agendas/angelafort/contacts/${id}", {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        name: name,
                        phone: phone,
                        email: email,
                        address: address
                    })
                })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(data => {
                    console.log("Contacto editado:", data);
                })
                .catch(error => {
                    console.error('Hubo un problema con la solicitud:', error);
                });
            },
            

            

            exampleFunction: () => {
                getActions().changeColor(0, "green");
            },
            loadSomeData: () => {
                /**
                    fetch().then().then(data => setStore({ "foo": data.bar }))
                */
            },
            changeColor: (index, color) => {
                const store = getStore();
                const demo = store.demo.map((elm, i) => {
                    if (i === index) elm.background = color;
                    return elm;
                });
                setStore({ demo: demo });
            }
        }
    };
};

export default getState;
