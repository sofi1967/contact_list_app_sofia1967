import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const ContactCard = ({ contact }) => {
    const { actions } = useContext(Context);


    return (
        <div className="d-flex justify-content-between mx-5 border border-black py-3 px-3">
            <div className="d-flex">
                <img src={contact.profileImage} alt="profile_img" height="150px" width="150px" className="me-5 rounded-circle" />
                <div>
                    <h4 className="mb-3">{contact.full_name}</h4>
                    <div className="d-flex">
                        <img src="https://cdn-icons-png.flaticon.com/512/535/535188.png" alt="ubication_icon" height="20px" width="20px" className="me-4" />
                        <p>{contact.address}</p>
                    </div>
                    <div className="d-flex">
                        <img src="https://cdn-icons-png.flaticon.com/512/94/94915.png" alt="phone_icon" height="20px" width="20px" className="me-4" />
                        <p>{contact.phone}</p>
                    </div>
                    <div className="d-flex">
                        <img src="https://static.vecteezy.com/system/resources/previews/020/009/615/original/email-and-mail-icon-black-free-png.png" alt="email_icon" height="20px" width="20px" className="me-4" />
                        <p>{contact.email}</p>
                    </div>
                </div>
            </div>
            <div className="d-flex">
                <Link to="/addContact" state={{ contactId: contact.id }}> <img src="https://cdn-icons-png.flaticon.com/512/78/78422.png" alt="pencil_icon" height="20px" width="20px" className="me-4" /></Link>
                <img src="https://static.vecteezy.com/system/resources/previews/000/630/479/non_2x/vector-trash-can-icon-symbol-illustration.jpg" alt="trash_icon" height="20px" width="20px" onClick={() => actions.deleteContact(contact.id)} />
            </div>
        </div >
    );
};
