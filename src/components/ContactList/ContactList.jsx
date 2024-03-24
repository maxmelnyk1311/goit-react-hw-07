import { useSelector } from "react-redux";

import { selectVisivleContacts } from "../../redux/contactsSlice.js";

import Contact from "./Contact/Contact.jsx";
import css from "./ContactList.module.css";

export default function ContactList() {
    const visibleContacts = useSelector(selectVisivleContacts);

    return (
        <ul className={css.contactList}>
            {visibleContacts.map((contact) => {
                return (
                    <Contact 
                        key={contact.id} 
                        contact={contact}
                    />            
                )
            })}
        </ul>
    )
}