import express from "express";
import indexRoutes from "./routes/index.routes";
import {create} from "express-handlebars";
import path from "path";

const app = express();

//template engine, line 9 where see views
app.set("views", path.join(__dirname, "views"));

const hbs = create({
    
    layoutsDir: path.join(app.get("views"), "layouts"),
    partialsDir: path.join(app.get("views"), "partials"),
    defaultLayout:'main',
    extname: '.hbs',
  });
app.engine(".hbs", hbs.engine, );
app.set("view engine", ".hbs");

// Routes
app.use(indexRoutes);

export default app;
