import msgTypes from '../../common/message-types.js'

export default class SocketManager{
    constructor(serverAddress, game){
        this.game = game;
        this.socket = new WebSocket(serverAddress);
        this.socket.addEventListener('open', () =>{
            console.log(`Client connected to ${serverAddress}.`);
            this.socket.send(JSON.stringify({
                type: msgTypes.client.HELLO,
                data: 'Hello'
            }));
        });
        this.socket.addEventListener('message', (event) => {
            console.log(event.data);
            let response = JSON.parse(event.data);
            if(response.type === msgTypes.server.WELCOME){
                this.game.id = response.id;
            }
        })
    }
    sendInput(commands, id){
        this.socket.send(JSON.stringify({
            type: msgTypes.client.INPUT,
            client: id,
            data: commands
        }));
    }
}
