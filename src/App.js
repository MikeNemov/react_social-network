import {Message} from './Message';
import {useState, useEffect} from 'react';
import styles from './css/message.module.sass';

export function App() {

    const [text, setText] = useState('');
    const [author, setAuthor] = useState('');

    const [messages, setMessages] = useState([]);

    const handleSendMessage = () => {
        if (!author || !text) {
            return;
        }
        setMessages((state) => [...state, {id: new Date().getTime(), author: author, text: text}]);
        setAuthor('');
        setText('');

    };
    useEffect(() => {
        if (messages.length === 0 || messages[messages.length - 1].author === 'Vasily') {
            return;
        }
        setTimeout(() => {
            setMessages([...messages, {
                id: new Date().getTime(),
                author: `Vasily`,
                text: `Hi, i'm bot`
            }]);

        }, 1500);


    }, [messages]);

    const onFormSubmit = e => {
        e.preventDefault();
        handleSendMessage();
    };

    return (
        <div>
            {messages.map(message =>
                <Message key={message.id} text={message.text} author={message.author}/>
            )}


            <form className={styles.message_form} onSubmit={onFormSubmit}>
                <input
                    value={author}
                    placeholder='Author'
                    onChange={(e) => setAuthor(e.target.value)}/>
                <input
                    value={text}
                    type="text"
                    placeholder='Message'
                    onChange={(e) => setText(e.target.value)}/>
                <button type="submit">Send
                </button>
            </form>
        </div>
    );

}



