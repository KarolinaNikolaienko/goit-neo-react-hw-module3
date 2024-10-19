import css from './Contact.module.css';
import { FaUser } from 'react-icons/fa6';
import { FaPhone } from 'react-icons/fa6';

const Contact = ({ contact, onDelete }) => {
  return (
    <div className={css.contactCard}>
      <div className={css.contactInfoContainer}>
        <div className={css.contactField}>
          <FaUser size={16} />
          <p className={css.contactInfo}>{contact.name}</p>
        </div>
        <div className={css.contactField}>
          <FaPhone size={16} />
          <p className={css.contactInfo}>{contact.number}</p>
        </div>
      </div>
      <button className={css.deleteBtn} onClick={() => onDelete(contact.id)}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
