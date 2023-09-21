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
			],
			contacts: [
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			getContactList: () => {
				fetch("https://playground.4geeks.com/apis/fake/contact/agenda/sofia_cascante_agenda", {
					method: "GET"
				})
					.then((response) => response.json())
					.then((data) => {
						setStore({ "contacts": data })
					})
					.catch((error) => console.log(error));
			},
			addNewContact: (newContact) => {
				fetch("https://playground.4geeks.com/apis/fake/contact/", {
					method: "POST",
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify(newContact)
				})
					.then((data) => {
						getActions().getContactList()
						console.log(data)
					})
					.catch((error) => console.log(error));
			},
			updateContact: (contactId, contactInfo) => {
				fetch("https://playground.4geeks.com/apis/fake/contact/" + contactId, {
					method: "PUT",
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify(contactInfo)
				})
					.then((response) => response.json())
					.then((data) => {
						getActions().getContactList()
						console.log(data)
					})
					.catch((error) => console.log(error));
			},
			deleteContact: (contactId) => {
				fetch("https://playground.4geeks.com/apis/fake/contact/" + contactId, {
					method: "DELETE"
				})
					.then((response) => response.json())
					.then((data) => {
						getActions().getContactList()
						console.log(data)
					})
					.catch((error) => console.log(error));
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
			}
		}
	};
};

export default getState;
