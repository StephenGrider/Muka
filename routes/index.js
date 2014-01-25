
/*
 * GET home page.
 */

var items = [
  {
    itemId: 1,
    itemImage: 'http://melissaeastondesign.com/blog/wp-content/uploads/2010/09/HGJones_Basket_01.jpg',
    itemName: 'An Basket',
    authorId: 1,
    itemScore: 1,
    itemPrice : '$39.00',
    itemDescription: 'A long description about the item'
  },
  {
    itemId: 2,
    itemImage: 'http://content.vcommerce.com/products/667/57330667/fullsize.jpg',
    itemName: 'A Fabric',
    authorId: 1,
    itemScore: 1,
    itemPrice : '$45.00',
    itemDescription: 'Some cloth'
  },
  {
    itemId: 3,
    itemImage: 'http://jacobandlevis.com/CMS/uploads/Stafford_Queen_Bed.jpg',
    itemName: 'A bed',
    authorId: 1,
    itemScore: 1,
    itemPrice : '$45.00',
    itemDescription: 'sweet bed bro'
  },
  {
    itemId: 4,
    itemImage: 'http://www.cherricopottery.com/wp-content/uploads/2011/07/pottery-slides-woodfired1.jpg',
    itemName: 'A neat piece of pottery',
    authorId: 1,
    itemScore: 1,
    itemPrice : '$45.00',
    itemDescription: 'Some awesome pottery'
  }
];


exports.getItem = function(req, res){
  res.writeHead(200);
  var num = ~~(items.length*Math.random())
  var item = JSON.stringify(items[num])
  res.end(item)
};


exports.recordFeedback = function(req, res){
  for(var i = 0; i < items.length; i++){
    console.log(items[i].itemId, req.body.itemId)
    if(items[i].itemId === parseInt(req.body.itemId)){
      console.log('foundit');
      items[i].itemScore += parseInt(req.body.score);
    }
  }
  res.writeHead(200);
  res.end();
}




