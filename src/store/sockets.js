 
import { io } from "socket.io-client";

const URL = "http://192.168.10.197:3000"
// const URL = "http://192.168.100.23:3000"
// const URL = "http://192.168.1.7:3000"

const socket = io(URL);

export default socket;
