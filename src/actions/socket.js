export const CONNECTION = 'CONNECTION'
import api from '../api';

const io = require('socket.io-client');

export function setConnection(userID) {
    return {
        type: CONNECTION,
        socket: io(api, {
            query: `userID=${userID}`,
            transports: ['websocket'],
            secure: true
        })
    }
}