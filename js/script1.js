console.log("fff");


$(document).ready(function(){
    var topic1=` <h3>Learn how to... </h3>
    <ul class="topic_sub_list">
        <li><a href="#"> Where's My Stuff? </a></li>
        <li><a href="#"> Cancel Items or Orders </a></li>
        <li><a href="#">  Returns & Refunds </a></li>
        <li><a href="#"> Shipping Rates & Information</a></li>
        <li><a href="#"> Change Your Payment Method </a></li>
        <li><a href="#"> Manage Your Account Information </a></li>
        <li><a href="#">    About Two-Step Verification </a></li>

    </ul>`;
    var topic2=`<h3>Learn how to... </h3>
    <ul class="topic_sub_list">
        <li><a href="#"> Where's My Stuff? </a></li>
        <li><a href="#"> Find a Missing Package that Shows as Delivered </a></li>
        <li><a href="#"> Contact Shipping Carrier </a></li>
        <li><a href="#"> Track Your Package</a></li>
        <li><a href="#"> › More in Where's My Stuff  </a></li>
        

    </ul>`;

    var topic3=` <h3>Learn how to... </h3>
    <ul class="topic_sub_list">
        <li><a href="#"> Cancel Items or Orders </a></li>
        <li><a href="#"> Change Your Order Information</a></li>
        <li><a href="#"> Contact Third-Party Sellers </a></li>
        <li><a href="#">AmazonFresh</a></li>
        <li><a href="#"> › More in Managing Your Orders</a></li>
        
    </ul>`;
    var topic31=`
    <ul class="topic_sub_list">
        <li><a href="#"> Cancel Items or Orders </a></li>
        <li><a href="#"> Change Your Order Information</a></li>
        <li><a href="#"> Contact Third-Party Sellers </a></li>
        <li><a href="#">AmazonFresh</a></li>
        <li><a href="#"> › More in Managing Your Orders</a></li>
        
    </ul>`;
    var topic4=` <h3>Learn how to... </h3>
    <ul class="topic_sub_list">
        <li><a href="#"> Where's My Stuff? </a></li>
        <li><a href="#"> Cancel Items or Orders </a></li>
        <li><a href="#">  Returns & Refunds </a></li>
        <li><a href="#"> Shipping Rates & Information</a></li>
        <li><a href="#"> Change Your Payment Method </a></li>
        <li><a href="#"> Manage Your Account Information </a></li>
        <li><a href="#">    About Two-Step Verification </a></li>

    </ul>`;
    var topic5=` <h3>Learn how to... </h3>
    <ul class="topic_sub_list">
        <li><a href="#"> Where's My Stuff? </a></li>
        <li><a href="#"> Find a Missing Package that Shows as Delivered </a></li>
        <li><a href="#"> Contact Shipping Carrier </a></li>
        <li><a href="#"> Track Your Package</a></li>
        <li><a href="#"> › More in Where's My Stuff  </a></li>
        

    </ul>`;
    var topic6=`<h3>Learn how to... </h3>
    <ul class="topic_sub_list">
        <li><a href="#"> Cancel Items or Orders </a></li>
        <li><a href="#"> Change Your Order Information</a></li>
        <li><a href="#"> Contact Third-Party Sellers </a></li>
        <li><a href="#">AmazonFresh</a></li>
        <li><a href="#"> › More in Managing Your Orders</a></li>
    </ul>`;

   
    $(".link1").hover(function(){
      
      $(".sub_topic1").html(topic1);
      $(".sub_sub_topic").html(`  <img src="img/11/GUID-32636442-A52D-442D-B06D-1ED5905B5FD2_en-US.png" alt=""> `);
      
     
    });
    $(".link2").hover(function(){
       
        $(".sub_topic1").html(topic2);
        $(".sub_sub_topic").html(`    <img src="img/11/GUID-47993225-F8C2-4AA0-AA8B-BB1B5F71D79F_en-US.png" alt="">`);
      });
      $(".link3").hover(function(){
       
        $(".sub_topic1").html(topic3);
        $(".sub_sub_topic").html(`<img src="img/11/GUID-605677AD-BFFD-48B0-96DA-86D75265267B_en-US.png" alt="">`);

      });
      $(".link4").hover(function(){
       
        $(".sub_topic1").html(topic4);
        $(".sub_sub_topic").html(topic31)
      });
      $(".link5").hover(function(){
        $(".sub_topic1").html(topic5);
        $(".sub_sub_topic").html(`<img src="img/11/GUID-605677AD-BFFD-48B0-96DA-86D75265267B_en-US.png" alt="">`)
      });
      $(".link6").hover(function(){
        $(".sub_topic1").html(topic6);
        $(".sub_sub_topic").html(`<img src="img/11/GUID-605677AD-BFFD-48B0-96DA-86D75265267B_en-US.png" alt="">`)
      });
      $(".link7").hover(function(){
        $(".sub_topic1").html(topic2);
        $(".sub_sub_topic").html(topic31)
      });
      $(".link8").hover(function(){
        $(".sub_topic1").html(topic3);
        $(".sub_sub_topic").html(` <img src="img/11/GUID-88BDB20E-9A1C-4DBF-996F-C6F0CF1BE423_en-US.png" alt="">`)
      });
      $(".link9").hover(function(){
        $(".sub_topic1").html(topic6);
        $(".sub_sub_topic").html(`<img src="img/11/GUID-88BDB20E-9A1C-4DBF-996F-C6F0CF1BE423_en-US.png" alt="">`);
      });
      $(".link10").hover(function(){
        $(".sub_topic1").html(topic3);
        $(".sub_sub_topic").html(` <img src="img/11/GUID-88BDB20E-9A1C-4DBF-996F-C6F0CF1BE423_en-US.png" alt="">`);
      });
      $(".link11").hover(function(){
        $(".sub_topic1").html(topic5);
        $(".sub_sub_topic").empty();
      });
      $(".link12").hover(function(){
        $(".sub_topic1").html(topic1);
        $(".sub_sub_topic").html(`<img src="img/11/GUID-88BDB20E-9A1C-4DBF-996F-C6F0CF1BE423_en-US.png" alt="">`);
      });
      


   
  });
