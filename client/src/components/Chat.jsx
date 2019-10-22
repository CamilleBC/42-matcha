import React from 'react';
import './Chat.css';

function AddZero(value) {
    if (value < 10) {
        return "0" + value;
    }
    return value;
}

export function Chat() {
    var date = new Date();
    var time = AddZero(date.getHours()) + "h" + AddZero(date.getMinutes());
    return (
        <div class="msgContainer">
            <div class="msgText">Salut, comment ça va ?</div>
            <div class="msgTime">{time}</div>
        </div>
    )
}

export default Chat;