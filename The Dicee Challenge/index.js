function dicee() {
    var randomNumber1 = Math.floor(((Math.random())*6)+1);
    var p1RandomDicee = "dice" + randomNumber1 + ".png";
    var p1ImageSoruce = "images/"+p1RandomDicee;
    var image1 = document.querySelectorAll("img")[0];
    
    image1.setAttribute("src",p1ImageSoruce);
    
    var randomNumber2 = Math.floor(((Math.random())*6)+1);
    var p2RandomDicee = "dice" + randomNumber2 + ".png";
    var p2ImageSoruce = "images/"+p2RandomDicee;
    var image2 = document.querySelectorAll("img")[1];
    
    image2.setAttribute("src",p2ImageSoruce);
    
    if (randomNumber1 > randomNumber2){
        document.querySelector("h1").textContent = "Player 1 Win!";
    }
    else if (randomNumber2 > randomNumber1){
        document.querySelector("h1").textContent = "Player 2 Win!";
    } 
    else {
        document.querySelector("h1").textContent = "Draw!";
    }

}