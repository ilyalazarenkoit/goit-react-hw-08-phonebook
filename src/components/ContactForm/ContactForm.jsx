import { useState } from 'react';
import formStyle from '../ContactForm/ContactForm.module.css';
import { addContact } from 'redux/operations';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const handleChange = e => {
    e.preventDefault();
    if (e.target.name === 'name') {
      setName(e.target.value);
    }
    if (e.target.name === 'number') {
      setNumber(e.target.value.toLowerCase());
    }
  };

  const onSumbit = e => {
    e.preventDefault();
    let contact = {
      name: name.toUpperCase().slice(0, 1) + name.slice(1, name.length),
      number: number,
    };

    if (contacts.find(item => item.name === contact.name)) {
      alert(`${contact.name} is already in contacts`);
      reset();
      return;
    }
    dispatch(addContact(contact));
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={onSumbit} className={formStyle.form}>
      <label className={formStyle.label}>
        <p className={formStyle.text}>Name :</p>
        <input
          className={formStyle.input}
          onChange={handleChange}
          value={name}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={formStyle.label}>
        <p className={formStyle.text}>Number :</p>
        <input
          className={formStyle.input}
          onChange={handleChange}
          value={number}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button type="submit" className={formStyle.add}>
        Add to contacts
      </button>
    </form>
  );
};
