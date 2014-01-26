
$(document).ready(function(){


  var currentItemId = null;
  $(".dial").knob({
    readOnly: true
  });

  $('.carousel').roundabout({
    shape: 'square',
    btnNext: '.dislikeButton',
    btnPrev: '.likeButton',
    duration: 1200

  });


  var getItem1 = function(){

    $.get('/getItem',function(data){
      data = JSON.parse(data);
      $('.itemName1').html(data.itemName)
      $('.itemPrice1').html(data.itemPrice)
      $('.itemDescription1').html(data.itemDescription)
      $('.itemImage1').attr("src",data.itemImage);
      $('.crafterImg').attr("src",data.crafterImg);
      $('.crafterBio').html(data.crafterBio);
      $('.crafterName').html(data.crafterName);
      $('.crafterUrl').attr('href', data.crafterUrl)
      currentItemId1 = data.itemId;
      $('.dial')
        .val(data.itemScore)
        .trigger('change');
    });
  };

  var getItem2 = function(){

    $.get('/getItem',function(data){
      data = JSON.parse(data);
      $('.itemName2').html(data.itemName)
      $('.itemPrice2').html(data.itemPrice)
      $('.itemDescription2').html(data.itemDescription)
      $('.itemImage2').attr("src",data.itemImage);
      $('.crafterImg').attr("src",data.crafterImg);
      $('.crafterBio').html(data.crafterBio);
      $('.crafterName').html(data.crafterName);
      $('.crafterUrl').attr('href', data.crafterUrl)
      currentItemId2 = data.itemId;
      $('.dial')
        .val(data.itemScore)
        .trigger('change');
    });
  };





  getItem1();
  getItem2();


  $('.like1').on('click',function(){
    $.post('/recordFeedback',
      {
          itemId: currentItemId1,
          score: 1
      },function(){
        setTimeout(getItem1,500);
      });
  });

  $('.dislike1').on('click',function(){
    $.post('/recordFeedback',
      {
          itemId: currentItemId1,
          score: -1
      },function(){
        setTimeout(getItem1,500);
      });
  });

  $('.like2').on('click',function(){
    $.post('/recordFeedback',
      {
          itemId: currentItemId2,
          score: 1
      },function(){
        setTimeout(getItem2,500);
      });
  });

  $('.dislike2').on('click',function(){
    $.post('/recordFeedback',
      {
          itemId: currentItemId2,
          score: -1
      },function(){
        setTimeout(getItem2,500);
      });
  });



});


