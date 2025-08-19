import "./App.css";
import ContactsList from "./components/ContactsList";

const App = () => {

    const contacts = [
        {
        id: "richard",
        name: "Richard Kalehoff",
        handle: "@richardkalehoff",
        avatarURL: "richard.jpg",
        },
        {
        id: "karen",
        name: "Karen Isgrigg",
        handle: "@karen_isgrigg",
        avatarURL: "karen.jpg",
        },
        {
        id: "tyler",
        name: "Tyler McGinnis",
        handle: "@tylermcginnis",
        avatarURL: "tyler.jpg",
        },
    ];

    return (
        <div>
            <ContactsList contacts={contacts}/>
        </div>
    );
};

export default App;
