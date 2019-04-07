var data={
  "Delivery Type": [
    "eGift Card",
    "Mail",
    "Print at Home"
  ],
  "Format":
  [
    "Add Your Photo",
    "Add Your Upload",
    "Animation",
    "Anytime Gift Card",
    "Bookmark",
    "Gift Bag",
    "Gift Box",
    "Gift Tag",
    "Greeting Card",
    "Mini Envelope",
    "Multi-Pack",
    "Novelty",
    "Print & Fold",
    "Reveal",
    "Slider",
    "Standard Designs"
    
  ],
  "Featured Brands":[
    "Amazon",
    "uber",
    "Starbucks",
    "Netflix",
    "lowes"
    
    ]
  ,
  "Category":[
    "Amazon Gift Cards",
    "Arts & Activities",
    "Beauty & Spa",
    "Food & Grocery",
    "Restaurants"
    ]
};

$( function() {

console.log(data)
  //  json 
  
  $(".checkbox-option1").append("<ul><h5>Delivery Type</h5></ul>")
  for(var i=0; i<data["Delivery Type"].length;i++){
    
    $(".checkbox-option1 ul").append(`<li><input type="checkbox">${data["Delivery Type"][i]}</li>`);
  }


  $(".checkbox-option2").append("<ul><h5>Format</h5></ul>")
  for(var i=0; i<data["Format"].length;i++){
    
    $(".checkbox-option2 ul").append(`<li><input type="checkbox">${data["Format"][i]}</li>`);
  }


  $(".checkbox-option3").append("<ul><h5>Featured Brands</h5></ul>")
  for(var i=0; i<data["Featured Brands"].length;i++){
    
    $(".checkbox-option3 ul").append(`<li><input type="checkbox">${data["Featured Brands"][i]}</li>`);
  }
 
  $(".checkbox-option4").append("<ul><h5>Category</h5></ul>")
  for(var i=0; i<data["Category"].length;i++){
    
    $(".checkbox-option4 ul").append(`<li><input type="checkbox">${data["Category"][i]}</li>`);
  }

  $(".checkbox-option1").append("<ul><h5>Delivery Type</h5></ul>")
  for(var i=0; i<data["Delivery Type"].length;i++){
    
    $(".checkbox-option1 ul").append(`<li><input type="checkbox">${data["Delivery Type"][i]}</li>`);
  }


  $(".checkbox-option2").append("<ul><h5>Format</h5></ul>")
  for(var i=0; i<data["Format"].length;i++){
    
    $(".checkbox-option2 ul").append(`<li><input type="checkbox">${data["Format"][i]}</li>`);
  }

 

  // ////////////////////////////
  $("#dialog").hide();
  $('.carousel').carousel( {
    autoplay:true
  });
  
  $( "#accordion" ).accordion(
    
   
    );
    
  $(".details").click(function(){
    $( "#dialog" ).dialog( 
      {
        width: 600, height: 200, modal: true
      }
     );
  })
$("input").focus(function(){
$(this).css("border","1px solid #ee4343");
})
$("input").blur(function(){
  $(this).css("border","1px solid #e4e4e4");
  })

} );