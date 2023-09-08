const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			token: null,
			user: {},
			users: [],
			singleUser: {},
			products: [],
			singleProduct: {},
			message: null,
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
			login: async (form) => {
				try {
					const response = await fetch(process.env.BACKEND_URL + "/api/login", {
						method: "POST",
						headers: { "Content-Type": "application/json" },
						body: JSON.stringify(form)
					})
					// if (!response.ok) throw("There was a problem in the login request")
					if (response.status === 400) alert("Usuario no válido");
					else if (response.status === 401) alert("Contraseña no válida");
					else if (response.status !== 200) {
						return false;
					}
					const data = await response.json();
					console.log(data);
					localStorage.setItem("jwt-token", data.access_token);
					setStore({ token: data.access_token });
					return true;
				}
				catch (error) {
					alert("Hubo un error, por favor trate de nuevo más tarde")
				}
			},
			tokenFomLocalStorage: () => {
				const token = localStorage.getItem("jwt-token");
				if (token && token != "" && token != undefined) setStore({ token: token });;
			},
			logout: () => {
				localStorage.removeItem("jwt-token");
				setStore({ token: null });
			},
			seeUser: async () => {
				const store = getStore();
				try {
					const response = await fetch(process.env.BACKEND_URL + "/api/user", {
						method: "GET",
						headers: {
							Authorization: "Bearer " + store.token,
						}
					});
					const data = await response.json();
					setStore({ user: data });
				} catch (error) {
					console.log(error);
				}
			},

			verifyEmailToken: async (token) => {
				try {
					const response = await fetch(process.env.BACKEND_URL + "/api/verifyemailtoken", {
						method: "GET",
						headers: {
							Authorization: "Bearer " + token,
						}
					});
					const data = await response.json();
					console.log(data);
					if (data == true) {
						return true
					}
					return false
				} catch (error) {
					console.log(error);
					return false
				}
			},

			changePassword: async (token, password) => {
				console.log(token, password)
				try {
					const response = await fetch(process.env.BACKEND_URL + "/api/changepassword", {
						method: "PUT",
						body: JSON.stringify(password),
						headers: {
							"Content-Type": "application/json",
							Authorization: "Bearer " + token,
						}
					});
					const data = await response.json();
					console.log(data);
					if (response.ok) {
						return data
					}
					return true
				} catch (error) {
					console.log(error);
					return false
				}
			},

			editUser: async (form) => {
				const store = getStore();
				try {
					const response = await fetch(process.env.BACKEND_URL + "/api/user", {
						method: "PUT",
						headers: {
							"Content-Type": "application/json",
							Authorization: "Bearer " + store.token,
						},
						body: JSON.stringify(form)
					});
					const data = await response.json();
					setStore({ user: data });
					alert("Se realizaron los cambios")
				} catch (error) {
					alert("Hubo un error, por favor trate de nuevo más tarde");
				}
			},
			allUsers: async () => {
				try {
					const response = await fetch(process.env.BACKEND_URL + "/api/users");
					const data = await response.json();
					setStore({ users: data });
				} catch (error) {
					console.log(error);
				}
			},
			singleUser: async (id) => {
				try {
					const response = await fetch(process.env.BACKEND_URL + "/api/user/" + id);
					const data = await response.json();
					setStore({ singleUser: data });
				} catch (error) {
					console.log(error);
				}
			},
			addProduct: async (form) => {
				try {
					const response = await fetch(process.env.BACKEND_URL + "/api/products", {
						method: "POST",
						headers: { "Content-Type": "application/json" },
						body: JSON.stringify(form)
					})
					const data = await response.json();
					alert("Producto añadido")
					return data;
				}
				catch (error) {
					alert("Hubo un error, por favor trate de nuevo más tarde")
				}
			},
			seeProducts: async () => {
				try {
					const response = await fetch(process.env.BACKEND_URL + "/api/products");
					const data = await response.json();
					setStore({ products: data });
				} catch (error) {
					console.log(error);
				}
			},
			singleProduct: async (id) => {
				try {
					const response = await fetch(process.env.BACKEND_URL + "/api/products/" + id);
					const data = await response.json();
					setStore({ singleProduct: data });
				} catch (error) {
					console.log(error);
				}
			},
			editProduct: async (id, form) => {
				try {
					const response = await fetch(process.env.BACKEND_URL + "/api/products/" + id, {
						method: "PUT",
						headers: { "Content-Type": "application/json" },
						body: JSON.stringify(form)
					});
					const data = await response.json();
					setStore({ singleProduct: data });
				} catch (error) {
					console.log(error);
				}
			},
			deleteProduct: async (id) => {
				try {
					const response = await fetch(process.env.BACKEND_URL + "/api/products/" + id, {
						method: "DELETE",
					});
					const data = await response.json();
				} catch (error) {
					console.log(error);
				}
			},
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			sendRecoveryPass: async (email) => {
				try {
					const response = await fetch(process.env.BACKEND_URL + "/api/resendpass", {
						method: 'POST',
						headers: {
							"Content-Type": "application/json"
						},
						body: JSON.stringify(email)
					})
					if (response.ok) {
						return true;
					}
					else if (response.status === 400) alert("Correo Electrónico no válido");
					else {
						return false;
					}

					const data = await response.json();
					localStorage.setItem("jwt-token", data.access_token);
					setStore({ token: data.access_token });


				} catch (error) {

				}

			},

			getMessage: async () => {
				try {
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				} catch (error) {
					console.log("Error loading message from backend", error)
				}
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},

			payment: async (form) => {
				try {
					const response = await fetch(process.env.BACKEND_URL + "/api/payment", {
						method: "POST",
						headers: { "Content-Type": "application/json" },
						body: JSON.stringify(form)
					})
					// if (!response.ok) throw("There was a problem in the login request")

					if (response.status !== 200) {
						alert("Hubo un error, por favor trate de nuevo más tarde")
						return false;
					}

					const data = await response.json();
					alert(`Donación de $${form.amount} procesada con éxito`);
					console.log(data);
					return true;
				}
				catch (error) {
					alert("Hubo un error, por favor trate de nuevo más tarde")
				}
			},
		}
	};
};

export default getState;
