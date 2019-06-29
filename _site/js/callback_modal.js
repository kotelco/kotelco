var popupBtn = document.getElementById('popup__toggle');
var popupWin = document.getElementById('popup__overlay');
var popupClose = document.getElementById('popup__close');
popupBtn.onclick = function() {popupWin.style.display = "block";};
popupClose.onclick = function() {popupWin.style.display = "none";};


