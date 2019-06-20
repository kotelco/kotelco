var imgPopup = document.querySelectorAll(".img_popup");

for (var i = 0; i < imgPopup.length; i++) {
    (function(index) {
        imgPopup[index].addEventListener("click", function() {
            console.log("you clicked region number " + index);
            var img = this;
            var src = img.getAttribute('src');
            var div = document.createElement('div');
            document.body.appendChild(div);
            document.body.append("<div class='popup'>"+ //Добавляем в тело документа разметку всплывающего окна
                "<div class='popup_bg'></div>"+ // Блок, который будет служить фоном затемненным
                "<img src='"+src+"' class='popup_img' />"+ // Само увеличенное фото
                "</div>");
        })
    })(i);
}

