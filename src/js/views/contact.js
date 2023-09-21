import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { ContactCard } from "../component/contactCard";
import { Context } from "../store/appContext";

export const Contact = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.getContactList()
	}, []);

	return (
		<div>
			<div className="d-flex justify-content-end">
				<Link to="/addContact" className="btn btn-success mb-3 me-5">Add new contact</Link>
			</div>
			<div>
				{store.contacts.map((contact, index) => {
					contact.profileImage = "https://t3.ftcdn.net/jpg/05/52/15/68/360_F_552156839_hQTIBjd35zljkgSz65pDaUUSyKK53DtZ.jpg"
					return (
						<ContactCard key={index} contact={contact} />

					)
				})}
			</div>
		</div>
	)
}
