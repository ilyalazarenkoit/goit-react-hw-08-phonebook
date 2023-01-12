import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import css from '../App.module.css';

export const Contacts = () => {
  const contacts = useSelector(selectContacts);

  return (
    <div className={css.container}>
      <h2 className={css.title}>Phonebook</h2>
      <ContactForm />

      <h2 className={css.title}>Contacts:</h2>
      {contacts.length > 0 ? <Filter /> : null}
      {!contacts.length ? (
        <h2 className={css.title}>You have no contacts yet</h2>
      ) : (
        <ContactList />
      )}
    </div>
  );
};
