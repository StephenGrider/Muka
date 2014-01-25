

var items = [
  {
    itemImage: 'http://melissaeastondesign.com/blog/wp-content/uploads/2010/09/HGJones_Basket_01.jpg',
    itemName: 'An Basket',
    crafterImg: 'http://materialmetaphors.typepad.com/.a/6a011168663646970c01156fcae167970c-pi',
    crafterBio: 'Long time resident of south pacific, lots of different crafts undertaken',
    crafterName: 'Mr Crafter',
    itemScore: 1,
    itemPrice : '$39.00',
    itemDescription: 'A long description about the item'
  },
  {
    itemId: 2,
    itemImage: 'http://content.vcommerce.com/products/667/57330667/fullsize.jpg',
    itemName: 'A Fabric',
    crafterImg: 'http://facultyblog.eternitybiblecollege.com/wp-content/uploads/2011/12/jesus_carpenter.jpg',
    crafterBio: 'A bio about the crafter about all the different items they make and their particular situation',
    crafterName: 'Mr Crafter',
    itemScore: 1,
    itemPrice : '$45.00',
    itemDescription: 'Some cloth'
  },
  {
    itemId: 3,
    itemImage: 'http://jacobandlevis.com/CMS/uploads/Stafford_Queen_Bed.jpg',
    itemName: 'A bed',
    crafterImg: 'http://us.123rf.com/400wm/400/400/patrimonio/patrimonio1202/patrimonio120200073/12482221-illustration-of-a-carpenter-working-with-smooth-plane-done-in-retro-woodcut-style-set-inside-ellipse.jpg',
    crafterBio: 'A bio about the crafter',
    crafterName: 'Jeannette Builder',
    itemScore: 1,
    itemPrice : '$45.00',
    itemDescription: 'sweet bed bro'
  },
  {
    itemId: 4,
    itemImage: 'http://www.cherricopottery.com/wp-content/uploads/2011/07/pottery-slides-woodfired1.jpg',
    itemName: 'A neat piece of pottery',
    crafterImg: 'http://materialmetaphors.typepad.com/.a/6a011168663646970c01156fcae167970c-pi',
    crafterBio: 'For a long time i have made many different objects, looking to get more people interested in my prodcuts',
    crafterName: 'Crafting Master',
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


exports.topItems = function(req, res){

  
  
}



