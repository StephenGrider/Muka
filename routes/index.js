
/*
 * GET home page.
 */

var items = [
  {

  },

]



exports.getItem = function(req, res){
  res.render('index', { title: 'Express' });


};