const db = require("./models");

// db.category.create({
//   name: 'node'
// }).then(function(category) {
//   console.log(category.id)
// })

// db.category.create({
//     name: 'node'
//   }).then(function(category) {
//     console.log(category.id)
//   })

// db.category
//   .findAll({
//     where: { name: "node" },
//   })
//   .then(categories => {
//       categories.forEach(category => {
//       console.log(category.get());
//       })
//     });

// db.category
//   .findAll({
//     where: { name: "node" },
//     include: [db.project],
//   })
//   .then((categories) => {
//     categories.forEach((category) => {
//       category.getProjects().then((project) => {
//         console.log(project.id);
//       });
//     });
//   });

// db.project.findOne({
//     where: { id: 3 },
//     include: [db.category]
//   }).then(function(project) {
//     // by using eager loading, the project model should have a categories key
//     console.log(project.categories)

//     // createCategory function should be available to this model - it will create the category then add it to the project
//     project.createCategory({ name: 'node' }).then(function(category) {
//       console.log(category.id)
//     })
//   })

db.project
  .findOne({
    where: {
      id: 1,
    },
  })
  .then((project) => {
    project.getCategories().then((cat) => {
      cat.forEach((c) => {
        console.log(c.name);
      });
    });
  });

// db.category
//   .findOrCreate({
//     where: {
//       name: "html",
//     },
//   })
//   .then((category) => {
//     console.log('hihihihihi', category)
//     db.project.findOne({
//       where: { id: 1 },
//     }).then((project) => {
//         console.log('hihihihihi', category)
//       category[0].addProject(project);
//   })

//   });
