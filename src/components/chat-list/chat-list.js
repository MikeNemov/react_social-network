import React, {useState} from 'react';
import {List, ListItem, ListItemText} from '@material-ui/core';

export const ChatList = () => {
    const [chat] = useState([
            {id: 1, name: 'Vasiliy'},
            {id: 2, name: 'Elena'},
            {id: 3, name: 'John'}
        ]
    );
    const [selectedIndex, setSelectedIndex] = React.useState(0);

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
    };
    return <div>

        <List>
            {chat.map(chat =>
                <ListItem key={chat.id}
                          button
                          selected={selectedIndex === chat.id}
                          onClick={(event) => handleListItemClick(event, chat.id)}>
                    <ListItemText primary={chat.name}
                                  text={chat.name}/>

                </ListItem>
                )}
                </List>

                </div>;
                };;