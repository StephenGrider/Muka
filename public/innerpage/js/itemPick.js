
$(document).ready(function(){


  var currentItemId = null;
  $(".dial").knob({
    readOnly: true
  });

  $('.carousel').roundabout({
    shape: 'square',
    btnNext: '.dislike',
    btnPrev: '.like',
    duration: 1200

  });


  var getItem = function(){

    $.get('/getItem',function(data){
      data = JSON.parse(data);
      $('.itemName').html(data.itemName)
      $('.itemPrice').html(data.itemPrice)
      $('.itemDescription').html(data.itemDescription)
      $('.itemImage').attr("src",data.itemImage);
      $('.crafterImg').attr("src",data.crafterImg);
      $('.crafterBio').html(data.crafterBio);
      $('.crafterName').html(data.crafterName);
      $('.crafterUrl').attr('href', data.crafterUrl)
      console.log(data);
      currentItemId = data.itemId;
      $('.dial')
        .val(data.itemScore)
        .trigger('change');
    });
  };
  getItem();


  $('.like').on('click',function(){
    $.post('/recordFeedback',
      {
          itemId: currentItemId,
          score: 1
      });
    setTimeout(getItem,500)
  });

  $('.dislike').on('click',function(){
    $.post('/recordFeedback',
      {
          itemId: currentItemId,
          score: -1
      });
    setTimeout(getItem,500)
  });



});


