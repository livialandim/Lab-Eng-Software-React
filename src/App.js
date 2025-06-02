import './App.css';
import Chat from './Atividade05/Chat.js';
import ContactList from './Atividade05/ContactList.js'

export default function Messenger() {
  const [to, setTo] = useState(contacts[0]);

  return (
    <div>
      <ContactList
        contacts={contacts}
        selectedContact={to}
        onSelect={contact => setTo(contact)}
      />
      <Chat key={to.email} contact={to} />
    </div>
  );
}

const contacts = [
  { name: 'Taylor', email: 'taylor@email.com'},
  { name: 'Alice', email: 'alice@email.com'},
  { name: 'Bob', email: 'bob@email.com'}
];
