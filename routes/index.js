




exports.getItem = function(req, res){
  res.writeHead(200);
  var num = ~~(items.length*Math.random())
  var item = JSON.stringify(items[num])
  res.end(item)
};


exports.recordFeedback = function(req, res){
  for(var i = 0; i < items.length; i++){
    if(items[i].itemId === parseInt(req.body.itemId)){
      items[i].itemScore += parseInt(req.body.score);
    }
  }
  res.writeHead(200);
  res.end();
}

var items = [
  {
    itemId: 1,
    itemImage: '/images/1.jpg',
    itemName: 'Amaya Chair',
    crafterImg: '/images/crafter1.jpg',
    crafterBio: 'Mulakas is one the village elderly in the Mangyan tribe. He has 50 years of experience under his belt constructing furniture made of bamboo and rattan...',
    crafterName: 'Mulakas',
    itemScore: 1,
    itemPrice : '$39.00',
    itemDescription: 'It’s the weekend, and as far as you’re concerned, it’s time for the living to get easy. Whether it’s the Eastern seaboard or Cali coast you’re itching for, indulge in the tropical colors this product has to offer. This rattan armchair will bring your fresh vibe and keen wit to the forefront with freewheeling summer style.',
    crafterUrl: '/innerpage/crafter1.html'
  },
  {
    itemId: 2,
    itemImage: '/images/2.jpg',
    itemName: 'Antique',
    crafterImg: '/images/crafter1.jpg',
    rafterBio: 'Mulakas is one the village elderly in the Mangyan tribe. He has 50 years of experience under his belt constructing furniture made of bamboo and rattan...',
    crafterName: 'Mulakas',
    itemScore: 1,
    itemPrice : '$45.00',
    itemDescription: 'It’s the weekend, and as far as you’re concerned, it’s time for the living to get easy. Whether it’s the Eastern seaboard or Cali coast you’re itching for, indulge in the tropical colors this product has to offer. This rattan armchair will bring your fresh vibe and keen wit to the forefront with freewheeling summer style.',
    crafterUrl: '/innerpage/crafter1.html'
  },
  {
    itemId: 3,
    itemImage: '/images/3.jpg',
    itemName: 'Bumble',
    crafterImg: '/images/crafter1.jpg',
    rafterBio: 'Mulakas is one the village elderly in the Mangyan tribe. He has 50 years of experience under his belt constructing furniture made of bamboo and rattan...',
    crafterName: 'Mulakas',
    itemScore: 1,
    itemPrice : '$45.00',
    itemDescription: 'It’s the weekend, and as far as you’re concerned, it’s time for the living to get easy. Whether it’s the Eastern seaboard or Cali coast you’re itching for, indulge in the tropical colors this product has to offer. This rattan armchair will bring your fresh vibe and keen wit to the forefront with freewheeling summer style.',
    crafterUrl: '/innerpage/crafter1.html'
  },
  {
    itemId: 4,
    itemImage: '/images/4.jpg',
    itemName: 'Cubbyhole',
    crafterImg: '/images/crafter1.jpg',
    rafterBio: 'Mulakas is one the village elderly in the Mangyan tribe. He has 50 years of experience under his belt constructing furniture made of bamboo and rattan...',
    crafterName: 'Mulakas',
    itemScore: 1,
    itemPrice : '$45.00',
    itemDescription: 'It’s the weekend, and as far as you’re concerned, it’s time for the living to get easy. Whether it’s the Eastern seaboard or Cali coast you’re itching for, indulge in the tropical colors this product has to offer. This rattan armchair will bring your fresh vibe and keen wit to the forefront with freewheeling summer style.',
    crafterUrl: '/innerpage/crafter1.html'
  },
  {
    itemId: 5,
    itemImage: '/images/5.jpg',
    itemName: 'Dividend',
    crafterImg: '/images/crafter1.jpg',
    rafterBio: 'Mulakas is one the village elderly in the Mangyan tribe. He has 50 years of experience under his belt constructing furniture made of bamboo and rattan...',
    crafterName: 'Mulakas',
    itemScore: 1,
    itemPrice : '$45.00',
    itemDescription: 'It’s the weekend, and as far as you’re concerned, it’s time for the living to get easy. Whether it’s the Eastern seaboard or Cali coast you’re itching for, indulge in the tropical colors this product has to offer. This rattan armchair will bring your fresh vibe and keen wit to the forefront with freewheeling summer style.',
    crafterUrl: '/innerpage/crafter1.html'
  },
  {
    itemId: 6,
    itemImage: '/images/6.jpg',
    itemName: 'La Luna',
    crafterImg: '/images/crafter1.jpg',
    rafterBio: 'Mulakas is one the village elderly in the Mangyan tribe. He has 50 years of experience under his belt constructing furniture made of bamboo and rattan...',
    crafterName: 'Mulakas',
    itemScore: 1,
    itemPrice : '$45.00',
    itemDescription: 'It’s the weekend, and as far as you’re concerned, it’s time for the living to get easy. Whether it’s the Eastern seaboard or Cali coast you’re itching for, indulge in the tropical colors this product has to offer. This rattan armchair will bring your fresh vibe and keen wit to the forefront with freewheeling summer style.',
    crafterUrl: '/innerpage/crafter1.html'
  },
  {
    itemId: 7,
    itemImage: '/images/7.jpg',
    itemName: 'Lemongrass',
    crafterImg: '/images/crafter1.jpg',
    rafterBio: 'Mulakas is one the village elderly in the Mangyan tribe. He has 50 years of experience under his belt constructing furniture made of bamboo and rattan...',
    crafterName: 'Mulakas',
    itemScore: 1,
    itemPrice : '$45.00',
    itemDescription: 'It’s the weekend, and as far as you’re concerned, it’s time for the living to get easy. Whether it’s the Eastern seaboard or Cali coast you’re itching for, indulge in the tropical colors this product has to offer. This rattan armchair will bring your fresh vibe and keen wit to the forefront with freewheeling summer style.',
    crafterUrl: '/innerpage/crafter1.html'
  },
  {
    itemId: 8,
    itemImage: '/images/8.jpg',
    itemName: 'Lightbox',
    crafterImg: '/images/crafter1.jpg',
    rafterBio: 'Mulakas is one the village elderly in the Mangyan tribe. He has 50 years of experience under his belt constructing furniture made of bamboo and rattan...',
    crafterName: 'Mulakas',
    itemScore: 1,
    itemPrice : '$45.00',
    itemDescription: 'It’s the weekend, and as far as you’re concerned, it’s time for the living to get easy. Whether it’s the Eastern seaboard or Cali coast you’re itching for, indulge in the tropical colors this product has to offer. This rattan armchair will bring your fresh vibe and keen wit to the forefront with freewheeling summer style.',
    crafterUrl: '/innerpage/crafter1.html'
  },
  {
    itemId: 9,
    itemImage: '/images/9.jpg',
    itemName: 'Manolo',
    crafterImg: '/images/crafter1.jpg',
    rafterBio: 'Mulakas is one the village elderly in the Mangyan tribe. He has 50 years of experience under his belt constructing furniture made of bamboo and rattan...',
    crafterName: 'Mulakas',
    itemScore: 1,
    itemPrice : '$45.00',
    itemDescription: 'It’s the weekend, and as far as you’re concerned, it’s time for the living to get easy. Whether it’s the Eastern seaboard or Cali coast you’re itching for, indulge in the tropical colors this product has to offer. This rattan armchair will bring your fresh vibe and keen wit to the forefront with freewheeling summer style.',
    crafterUrl: '/innerpage/crafter1.html'
  },
  {
    itemId: 10,
    itemImage: '/images/10.jpg',
    itemName: 'Marrow',
    crafterImg: '/images/crafter2.jpg',
    crafterBio: 'At the age of 18, Tala is already a master of weaving natural fibers in to one of a kind furniture pieces. She enjoys creating colorful patterns with her close knit Aeta community...',
    crafterName: 'Tala',
    itemScore: 1,
    itemPrice : '$45.00',
    itemDescription: 'Streamlined in its aesthetic, bumble lounge is equal parts awesome-and-modest. This uniquely beautiful realm of natural hand woven rattan is handcrafted in Cebu, Philippines, and features natural patterns.',
    crafterUrl: '/innerpage/crafter2.html'
  },
  {
    itemId: 11,
    itemImage: '/images/11.jpg',
    itemName: 'Mars',
    crafterImg: '/images/crafter2.jpg',
    crafterBio: 'At the age of 18, Tala is already a master of weaving natural fibers in to one of a kind furniture pieces. She enjoys creating colorful patterns with her close knit Aeta community...',
    crafterName: 'Tala',
    itemScore: 1,
    itemPrice : '$45.00',
    itemDescription: 'Streamlined in its aesthetic, bumble lounge is equal parts awesome-and-modest. This uniquely beautiful realm of natural hand woven rattan is handcrafted in Cebu, Philippines, and features natural patterns.',
    crafterUrl: '/innerpage/crafter2.html'
  },
  {
    itemId: 12,
    itemImage: '/images/12.jpg',
    itemName: 'Matchbox',
    crafterImg: '/images/crafter2.jpg',
    crafterBio: 'At the age of 18, Tala is already a master of weaving natural fibers in to one of a kind furniture pieces. She enjoys creating colorful patterns with her close knit Aeta community...',
    crafterName: 'Tala',
    itemScore: 1,
    itemPrice : '$45.00',
    itemDescription: 'Streamlined in its aesthetic, bumble lounge is equal parts awesome-and-modest. This uniquely beautiful realm of natural hand woven rattan is handcrafted in Cebu, Philippines, and features natural patterns.',
    crafterUrl: '/innerpage/crafter2.html'
  },
  {
    itemId: 13,
    itemImage: '/images/13.jpg',
    itemName: 'Oasis',
    crafterImg: '/images/crafter2.jpg',
    crafterBio: 'At the age of 18, Tala is already a master of weaving natural fibers in to one of a kind furniture pieces. She enjoys creating colorful patterns with her close knit Aeta community...',
    crafterName: 'Tala',
    itemScore: 1,
    itemPrice : '$45.00',
    itemDescription: 'Streamlined in its aesthetic, bumble lounge is equal parts awesome-and-modest. This uniquely beautiful realm of natural hand woven rattan is handcrafted in Cebu, Philippines, and features natural patterns.',
    crafterUrl: '/innerpage/crafter2.html'
  },
  {
    itemId: 14,
    itemImage: '/images/14.jpg',
    itemName: 'Steady Leaf',
    crafterImg: '/images/crafter2.jpg',
    crafterBio: 'At the age of 18, Tala is already a master of weaving natural fibers in to one of a kind furniture pieces. She enjoys creating colorful patterns with her close knit Aeta community...',
    crafterName: 'Tala',
    itemScore: 1,
    itemPrice : '$45.00',
    itemDescription: 'Streamlined in its aesthetic, bumble lounge is equal parts awesome-and-modest. This uniquely beautiful realm of natural hand woven rattan is handcrafted in Cebu, Philippines, and features natural patterns.',
    crafterUrl: '/innerpage/crafter2.html'
  },
  {
    itemId: 15,
    itemImage: '/images/15.jpg',
    itemName: 'Sunset',
    crafterImg: '/images/crafter2.jpg',
    crafterBio: 'At the age of 18, Tala is already a master of weaving natural fibers in to one of a kind furniture pieces. She enjoys creating colorful patterns with her close knit Aeta community...',
    crafterName: 'Tala',
    itemScore: 1,
    itemPrice : '$45.00',
    itemDescription: 'Streamlined in its aesthetic, bumble lounge is equal parts awesome-and-modest. This uniquely beautiful realm of natural hand woven rattan is handcrafted in Cebu, Philippines, and features natural patterns.',
    crafterUrl: '/innerpage/crafter2.html'
  },
  {
    itemId: 16,
    itemImage: '/images/16.jpg',
    itemName: 'The Ladybug',
    crafterImg: '/images/crafter3.jpg',
    crafterBio: 'Representing the strong end of the community, Alibatas masculinity is exhibited in his furniture. A strong sense of pride and integrity motivates him to bring income to the remote Waray ethnic group in Southern Leyte...',
    crafterName: 'Alibata',
    itemScore: 1,
    itemPrice : '$45.00',
    itemDescription: 'Minimalist to the max, this side table proves the power of simplicity.The choice of earthy materials and pull towards stripped-down beauty results in a clean design that’s also a bit bohemian, and at times edgy.',
    crafterUrl: '/innerpage/crafter3.html'
  },
  {
    itemId: 17,
    itemImage: '/images/17.jpg',
    itemName: 'Tropez',
    crafterImg: '/images/crafter3.jpg',
    crafterBio: 'Representing the strong end of the community, Alibatas masculinity is exhibited in his furniture. A strong sense of pride and integrity motivates him to bring income to the remote Waray ethnic group in Southern Leyte...',
    crafterName: 'Alibata',
    itemScore: 1,
    itemPrice : '$45.00',
    itemDescription: 'Minimalist to the max, this side table proves the power of simplicity.The choice of earthy materials and pull towards stripped-down beauty results in a clean design that’s also a bit bohemian, and at times edgy.',
    crafterUrl: '/innerpage/crafter3.html'
  },
  {
    itemId: 18,
    itemImage: '/images/18.jpg',
    itemName: 'Wings',
    crafterImg: '/images/crafter3.jpg',
    crafterBio: 'Representing the strong end of the community, Alibatas masculinity is exhibited in his furniture. A strong sense of pride and integrity motivates him to bring income to the remote Waray ethnic group in Southern Leyte...',
    crafterName: 'Alibata',
    itemScore: 1,
    itemPrice : '$45.00',
    itemDescription: 'Minimalist to the max, this side table proves the power of simplicity.The choice of earthy materials and pull towards stripped-down beauty results in a clean design that’s also a bit bohemian, and at times edgy.',
    crafterUrl: '/innerpage/crafter3.html'
  },
  {
    itemId: 19,
    itemImage: '/images/19.jpg',
    itemName: 'Zen',
    crafterImg: '/images/crafter3.jpg',
    crafterBio: 'Representing the strong end of the community, Alibatas masculinity is exhibited in his furniture. A strong sense of pride and integrity motivates him to bring income to the remote Waray ethnic group in Southern Leyte...',
    crafterName: 'Alibata',
    itemScore: 1,
    itemPrice : '$45.00',
    itemDescription: 'Minimalist to the max, this side table proves the power of simplicity.The choice of earthy materials and pull towards stripped-down beauty results in a clean design that’s also a bit bohemian, and at times edgy.',
    crafterUrl: '/innerpage/crafter3.html'
  },
  {
    itemId: 20,
    itemImage: '/images/20.jpg',
    itemName: 'Ziggy',
    crafterImg: '/images/crafter3.jpg',
    crafterBio: 'Representing the strong end of the community, Alibatas masculinity is exhibited in his furniture. A strong sense of pride and integrity motivates him to bring income to the remote Waray ethnic group in Southern Leyte...',
    crafterName: 'Alibata',
    itemScore: 1,
    itemPrice : '$45.00',
    itemDescription: 'Minimalist to the max, this side table proves the power of simplicity.The choice of earthy materials and pull towards stripped-down beauty results in a clean design that’s also a bit bohemian, and at times edgy.',
    crafterUrl: '/innerpage/crafter3.html'
  }

];

