import { connect } from "mongoose";

(async () => {
  try {
    const db = await connect("mongodb+srv://walter:WA123456789@app.onwwyo6.mongodb.net/test");
    console.log("db connected to crud", db.connection.name);
  } catch (error) {
    console.log(error);
  }
})();
