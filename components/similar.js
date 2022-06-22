let menu = 
'<a href="#" onclick="typeFunction()">Typing</a>\
<a href="#" onclick="tutorialFunction()">Tutorial</a>\
<a href="#">Youtube</a>\
<a href="#">Facebook</a>';

let footer = 
'<p>&copy; All rights reserved | Md. Shamim Saker | 2022</p>\
<div>\
    <a href="https://web.facebook.com/shamimspro/" target="_blank"><img src="./images/icons8-facebook-40.png" alt=""></a>\
    <a href="https://www.instagram.com/shamimspro/" target="_blank"><img src="./images/icons8-instagram-40.png" alt=""></a>\
    <a href="https://www.linkedin.com/in/shamimspro/" target="_blank"><img src="./images/icons8-linkedin-40.png" alt=""></a>\
    <a href="https://twitter.com/shamimspro/" target="_blank"><img src="./images/icons8-twitter-40.png" alt=""></a>\
</div>';

document.getElementById('menu').innerHTML = menu;
document.getElementById('footer').innerHTML = footer;

function typeFunction() {
    let str = '\
    <a href="https://www.speedcoder.net/" target="_blank"><img src="./images/speedcoder.net.jpg" alt=""></a>\
    <a href="https://www.typing.com/" target="_blank"><img src="./images/typing.com.jpg" alt=""></a>\
    <a href="https://www.typingtest.com/" target="_blank"><img src="./images/typingtest.com.jpg" alt=""></a>\
    <a href="https://www.typingtom.com/" target="_blank"><img src="./images/typingtom.com.jpg" alt=""></a>\
    ';
    document.getElementById('main').innerHTML = str;
}

function tutorialFunction() {
    let str = '\
    <a href="https://www.speedcoder.net/" target="_blank"><img src="./images/speedcoder.net.jpg" alt=""></a>\
    <a href="https://www.typing.com/" target="_blank"><img src="./images/typing.com.jpg" alt=""></a>\
    <a href="https://www.typingtest.com/" target="_blank"><img src="./images/typingtest.com.jpg" alt=""></a>\
    <a href="https://www.typingtom.com/" target="_blank"><img src="./images/typingtom.com.jpg" alt=""></a>\
    <a href="https://www.speedcoder.net/" target="_blank"><img src="./images/speedcoder.net.jpg" alt=""></a>\
    <a href="https://www.typing.com/" target="_blank"><img src="./images/typing.com.jpg" alt=""></a>\
    <a href="https://www.typingtest.com/" target="_blank"><img src="./images/typingtest.com.jpg" alt=""></a>\
    <a href="https://www.typingtom.com/" target="_blank"><img src="./images/typingtom.com.jpg" alt=""></a>\
    ';
    document.getElementById('main').innerHTML = str;
}