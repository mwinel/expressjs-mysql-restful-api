import http from "http";
import app from "./app";

/*
Use system configuration for port or 
use PORT 5001 by default.
*/
const port = process.env.PORT || 5001;

const server = http.createServer(app);
server.listen(port, () => {
  console.log("Listening on port:", port)
});
