
/*
 * GET home page.
 */

var items = [
  {
    imageUrl: 'http://melissaeastondesign.com/blog/wp-content/uploads/2010/09/HGJones_Basket_01.jpg',
    title: 'An Basket',
    authorId: 1,
    score: 1
  }
];



exports.getItem = function(req, res){
  res.render('index', { title: 'Express' });
  res.writeHead(200);
  res.end(JSON.stringify(items[items.length*(~~Math.random())]))
};

exports.recordFeedback = function(req, res){

  console.log(req.body);

}