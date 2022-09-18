import React from 'react';

function Message({ name }) {
    return (
        <div class='message'>
            Привет, {name}!
        </div>
    );
}

export default Message;