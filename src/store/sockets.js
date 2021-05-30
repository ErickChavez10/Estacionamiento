 
import { io } from "socket.io-client";
import { SERVER_IP } from "../config/index";


const socket = io(SERVER_IP);

export default socket;
