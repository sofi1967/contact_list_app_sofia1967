import React, { useEffect, useState, useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const AddContact = () => {
    const navigate = useNavigate();
    const location = useLocation()
    const { contactId } = location.state || ""
    const [title, setTitle] = useState("Add a new contact")
    useEffect(() => {
        if (contactId) {
            setTitle("Update a contact")
        }
        actions.getContactList()
    }, []);

    const { actions } = useContext(Context);

    const handleContactForm = (e) => {
        e.preventDefault()
        let contact = {
            full_name: e.target.contact_name.value,
            email: e.target.contact_email.value,
            agenda_slug: "sofia_cascante_agenda",
            address: e.target.contact_address.value,
            phone: e.target.contact_phone.value,
        }
        contactId ? actions.updateContact(contactId, contact) : actions.addNewContact(contact)
        navigate("/");
    }

    return (
        <div className="mx-5">
            <h3 className="text-center mb-4">{title}</h3>
            <form method="post" onSubmit={(e) => handleContactForm(e)}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Full Name</label>
                    <input type="text" className="form-control" name="contact_name" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter full name" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                    <input type="email" className="form-control" name="contact_email" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Phone</label>
                    <input type="text" className="form-control" name="contact_phone" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter phone" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Address</label>
                    <input type="text" className="form-control" name="contact_address" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter address" required />
                </div>
                <div className="d-grid gap-2">
                    <button type="submit" className="btn btn-primary">Save</button>
                </div>
            </form>
            <Link to="/" className="mt-4 link-primary">or get back to contacts</Link>
        </div>
    )
}
