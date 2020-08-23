let express = require('express');


let router = express.Router();

router.get('/list', (req, res) => {
  console.log(req.query);
  res.send({code: -1})
});
router.post('/login', function (req, res) {
  let {username,password} = req.body;
  console.log(req);
  res.send({code: -1})

});
module.exports = router;

// export default routes