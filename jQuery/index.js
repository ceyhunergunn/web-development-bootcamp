
// Selecting And Manuplating Styles

//$("h1").addClass("big-title margin-50").


// Manipulating Text

// $("h1").text("Ceyhun")
// $("button").html("<em>Don't</em>")


// Manipulating Attributes

// $("a").attr("href","https://www.yahoo.com");


// Adding Event Listener

// $("h1").click(function(){
//     $("h1").css("color","purple")
// });

// for (var i = 0; i < 5; i++) {
//     $("button").click(function(){
//         $("h1").css("color","red")
//     })
// }

// $(document).keypress(function(event){
//     console.log(event.key)
//     $("h1").text(event.key)
// });

// $("h1").on("mouseover", function(){
//     $("h1").css("color","green")
// });

// Adding And Removing Elements

// $("h1").before("<button>Before</button>")
// $("h1").after("<button>After</button>")
// $("h1").prepend("<button>Prepend</button>")
// $("h1").append("<button>Append</button>")


// Wbsite Animations

$("button").on("click",function(){
    $("h1").animate({opacity:0.5});
})

