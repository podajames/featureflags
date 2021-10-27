var express = require('express');
var router = express.Router();
const configcat = require('configcat-node');

router.get('/', function (req, res, next) {
  const configCatClient = configcat.createClient(
    'k5jZCLezek2H7NOSPdN8QA/b6g409ZbXU2jeMIlzDEHUw'
  );
 const enabled = configCatClient.getValueAsync("interviewProject", false)
.then((value) => {
    if(value) {
        do_the_new_thing();
    } else {
        do_the_old_thing();
    }
});

  const title = enabled ? 'Feature flag is on!!' : 'Feature flag is off!!';
  res.render('index', { title: title });
});

module.exports = router;
