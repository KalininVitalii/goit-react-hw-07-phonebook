import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Button, Label, Input } from './ContactForm.styled';
import { addUser } from 'redux/operations';
import { selectedContacts } from 'redux/contact-selectors';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const contacts = useSelector(selectedContacts);
  const dispatch = useDispatch();

  const handleInput = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'phone':
        setPhone(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    const newName = name.toLowerCase();
    const notify = name => alert(`${name} is already in contacts`);
    if (contacts.some(contact => contact.name.toLowerCase() === newName)) {
      notify(name);
      return;
    }

    dispatch(addUser({ name, phone }));

    setName('');
    setPhone('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Name
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleInput}
          value={name}
        />
      </Label>
      <Label>
        Number
        <Input
          type="tel"
          name="phone"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleInput}
          value={phone}
        />
      </Label>
      <Button type="submit">Add contact</Button>
    </Form>
  );
};
