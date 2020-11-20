let express = require("express");
let db = require("../models");
let router = express.Router();

router.get("/", (req, res) => {
  db.category.findAll().then((category) => {
    res.render("categories/all", { categories: category });
  });
});

router.get("/:id", (req, res) => {
  db.category
    .findOne({
      where: { id: req.params.id },
    })
    .then(category => {
        console.log(category.name)
        category.getProjects().then(projects=>{
            console.log('projects', projects)

            res.render("categories/show", {projects: projects});
        })




    })
    .catch((error) => {
      res.status(400).render("main/404");
    });
});

module.exports = router;
