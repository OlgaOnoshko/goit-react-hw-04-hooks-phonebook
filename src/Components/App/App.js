import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import Form from "../Form/Form";
import RenderContacts from "../Contacts/Contacts";
import Filter from "../Filter/Filter";
import contacts from "../Contacts/contacts.json";

import { Container } from "./App.styled";

function App() {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem("contacts")) ?? [];
  });
  const [filter, setFilter] = useState("");

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const formSubmitHandler = (name, number) => {
    const newContact = name.toLowerCase();
    const sameName = contacts.map(
      (item) => item.name.toLowerCase() === newContact
    );

    if (sameName.includes(true)) {
      alert(`${name} is already in contacts`);
    } else {
      const contact = {
        id: nanoid(),
        name,
        number,
      };

      setContacts((prevContacts) => [...contacts, contact]);
    }
  };

  const removeContact = (contactId) => {
    setContacts((contacts) =>
      contacts.filter((contact) => contact.id !== contactId)
    );
  };

  const onFilter = (e) => {
    setFilter(e.currentTarget.value);
  };

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <Container>
      <h1>Phonebook</h1>
      <Form onSubmit={formSubmitHandler} />
      <h2>Contacts</h2>
      <Filter onChange={onFilter} />
      <RenderContacts
        contacts={getFilteredContacts()}
        onRemove={removeContact}
      />
    </Container>
  );
}

export default App;
