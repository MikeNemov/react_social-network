import React from 'react';
import {useEffect, useState} from 'react';
import {Message} from '../Message';
import {Input, InputAdornment} from '@material-ui/core';
import {Send} from '@material-ui/icons';

export function MessageList() {
    const [text, setText] = useState('');
    const [author, setAuthor] = useState('Mike');

    const [messages, setMessages] = useState([]);

    const handleSendMessage = () => {
        if (!author || !text) {
            return;
        }
        setMessages((state) => [...state, {id: new Date().getTime(), author: 'Mike', text: text}]);
        setAuthor('Mike');
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
                text: `Hi, i'm bot Vasily`
            }]);

        }, 1500);


    }, [messages]);

    const onFormSubmit = e => {
        e.preventDefault();
        handleSendMessage();
    };

    return (
        <>
            <div>
                {messages.map(message =>
                    <Message key={message.id} text={message.text} author={message.author}/>
                )}

                <form onSubmit={onFormSubmit}>
                    <Input
                        autoFocus={true}
                        value={text}
                        fullWidth={true}
                        endAdornment={<InputAdornment position="end">
                            <Send type="submit" onClick={handleSendMessage}/>
                        </InputAdornment>}
                        type="text"
                        placeholder='Type message'
                        onChange={(e) => setText(e.target.value)}/>
                </form>

            </div>

        </>

    );
}