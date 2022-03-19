
// hide property
//  $(".one").hide(2000);

// document.ready
//  $(document).ready(function(){
//     $(".one").hide(2000);

//  });


// click and this  function
// $(document).ready(function(){
//  $(".one").click(function(){
//      $(this).hide(2000);
//  });
//  $(".two").click(function(){
//     $(this).hide(2000);
// });
// $(".three").click(function(){
//     $(this).hide(2000);
// });

// });


// nth-child function

// $(document).ready(function(){
//     $(".btn").click(function(){
//         $("button:nth-child(3)").hide(2000);
//     });

// });

// ![] not using 

// $(document).ready(function(){
//     $(".btn a").click(function(){
//         $("[class='txt']").remove();
//     });
// });


// $(document).ready(function(){
//     $(".btn a").click(function(){
//         $("[class!='txt']").hide(2000);
//     });
// });


// dblclick mouseenter mouseleave mousedown mouseup

// $(document).ready(function(){
// $(".btn button").dblclick(function(){
//     alert("double click function");
// });
// });

// $(document).ready(function(){
//     $(".area-style").mouseenter(function(){
//         alert("Its mouse enter function");
//     });
// });

// $(document).ready(function(){
//     $(".area-style").mouseleave(function(){
//         alert("Its mouse enter function");
//     });
// });

// $(document).ready(function(){
//     $(".area-style").mousedown(function(){
//         console.log("Its mouse down function");
//     });
//     $(".area-style").mouseup(function(){
//         console.log("Its mouse up function");
//     });
// });


// hover function 

// $(document).ready(function(){
//     $(".area-style").hover(function(){
//      console.log("Enter");
//     },function(){
//         console.log("leave");
//     });
// });



// on function 

// $(document).ready(function(){
 
//     $("button").on({

//         "click":function(){
//             console.log("click function");
//         },
//         "mouseenter":function(){
//             console.log("mouse enter function");
//         }


//     });

// });


// focus blur 

// $(document).ready(function(){

//    $(".userForm > form > input").focus(function(){
//        $(this).val("focus");
//    });
//    $(".userForm > form > input").blur(function(){
//     $(this).val("blur");
// });
// });


// Toggle

// $(document).ready(function(){
//     $("button").click(function(){
//      $(".text h4").toggle(3000);
//     });
// });

// Jquery FadeIn FadeOut Fade Toggle

// $(document).ready(function(){
//     $("button").click(function(){
//         $(".box").fadeOut("slow");
//     });
//     $("button").click(function(){
//         $(".box").fadeIn("slow");
//     });
// });

// $(document).ready(function(){
//     $("button").click(function(){
//         $(".box").fadeToggle('slow',0.5);  // Using opacity
//     });
    
// });


// Jquery Slide Down | Jquery Slide Toggle Slide Up

// $(document).ready(function(){
//     $(".test h1").click(function(){
//         $(".text").slideDown();
//     });
// });
// $(document).ready(function(){
//     $(".test h1").click(function(){
//         $(".text").slideUp();
//     });
// });

// $(document).ready(function(){
//     $(".test h1").hover(function(){
//         $(".text").slideToggle();
//     });
// });

// call back

// $(document).ready(function(){
//     $(".box button").click(function(){
//         $(".txt span").slideUp(1000,function(){
//             alert("Done");
//         });
//     });
// });

//  Animation

// $(document).ready(function(){
//     $("button").click(function(){
//         $(".box").animate({
//             // padding:"200px 200px",
//             // margin:"100px 100px",
//             // width : "+=10px"
//             width : "toggle",
//             height : "toggle"
//         });
//     });
// });



// stop

// $(document).ready(function(){
//     $(".Start").click(function(){
//         $(".box").animate({ paddingLeft : "700px"  },1000) 
//         .animate({top : "10px"},1000);

//     });
//     $(".Stop").click(function(){
//         $(".box").stop(false,false);

//     });
// });

