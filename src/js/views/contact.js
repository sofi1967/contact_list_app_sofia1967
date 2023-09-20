import React from "react";
import { ContactCard } from "../component/contactCard";

export const Contact = () => {
	return (
		<div>
			<button className="btn btn-success">Add new contact</button>
			<div>
				<ContactCard contact={{ "name": "Nombre", "address": "Test", "profileImage": "https://t3.ftcdn.net/jpg/05/52/15/68/360_F_552156839_hQTIBjd35zljkgSz65pDaUUSyKK53DtZ.jpg", "number": "12345", "email": "emailTest@123" }}></ContactCard>
			</div>
		</div>
	)
}
