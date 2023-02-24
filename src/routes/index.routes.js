import { Router } from "express";

const router = Router();

/* For new routes, just coppy and modify the code below */

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/about", (req, res) => {
  res.send("about");
});






export default router;
