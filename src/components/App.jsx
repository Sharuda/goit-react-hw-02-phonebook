import { Component } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { ContactForm } from './ContactForm/ContactForm';
import { Section } from './Section/Section';
import { Header } from './Header/Header';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = newContact => {
    const { contacts } = this.state;
    const foundContact = contacts.find(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );
    if (foundContact) {
      alert(`${foundContact.name} is already in contacts.`);
      return;
    }

    newContact.id = nanoid();
    this.setState(prevState => ({
      contacts: [newContact, ...prevState.contacts],
    }));
  };

  deleteContact = id => {
    const { contacts } = this.state;
    const foundIndex = contacts.findIndex(contact => contact.id === id);
    contacts.splice(foundIndex, 1);
    this.setState({ contacts: contacts });
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value.toLowerCase() });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();
    return (
      <Section title="Phonebook">
        <ContactForm onAddContact={this.addContact} />
        <Header title="Contacts" />
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactList contacts={visibleContacts} onDelete={this.deleteContact} />
      </Section>
    );
  }
}

App.propTypes = {
  contact: PropTypes.objectOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      contacts: PropTypes.objectOf({
        name: PropTypes.string.isRequired,
        number: PropTypes.string,
      }),
    })
  ),
};
