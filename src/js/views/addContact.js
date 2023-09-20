import React from "react";
import { Link } from "react-router-dom";

export const Contact = () => {
    return (
        <div>
            <h3 className="text-center mb-4">Add a new contact</h3>
            <form>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Full Name</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter full name" />
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Phone</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter phone" />
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Address</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter address" />
                </div>
                <button type="submit" className="btn btn-primary">Save</button>
            </form>
            <Link to="/" className="mt-4">or get back to contacts</Link>
        </div>
    )
}
