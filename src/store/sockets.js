 
import { io } from "socket.io-client";
import { SERVER_IP } from "../config/index";
// const SERVER_IP = 'https://estacionamiento-real-time.herokuapp.com/';
// const SERVER_IP = 'http://192.168.10.197:3000/';

const socket = io(SERVER_IP);

export default socket;
