import listStyles from '../ContactList/ContactList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/selectors';
import { deleteContact } from 'redux/contacts/operations';

const ContactList = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const contacts = useSelector(selectContacts);
  function getContacts() {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );
  }

  return (
    <>
      <ul className={listStyles.list}>
        {getContacts().map(contact => {
          return (
            <li className={listStyles.contact} key={contact.id}>
              <p className={listStyles.text}>{contact.name}</p>
              <p className={listStyles.text}>:</p>
              <p className={listStyles.text}>{contact.number}</p>
              <button
                className={listStyles.delete}
                type="button"
                key={contact.id}
                onClick={() => dispatch(deleteContact(contact.id))}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export { ContactList };
