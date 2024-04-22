const User = require("../models/user");
const router = require("express").Router();

// get user
router.get("/:uname", function(req, res) {
    User.findOne({uname: {$eq : req.params.uname}})
    .then((found) => {
        res.json(found);
    })
    .catch(function (err) {
      res.status(400).send(err);
    });
 });

// add user
router.post("/", function(req, res) {
    const user = new User(req.body);

    user.save()
    .then(function (models) {
        res.sendStatus(204);
      })
      .catch(function (err) {
        console.log(err);
      });
});

// update user
router.put("/:uname", function(req, res){
    User.updateOne({uname: {$eq : req.params.uname}})
    .then(res.sendStatus(204))
    .catch(function (err) {
        console.log(err);
      });
});

module.exports = router;
