/*Chỉnh thành https://m.facebook.com */
/** Mỗi 4 giây sẽ tự động add bạn bè */
(() => {
     setTimeout(function continueWhenPageLoad() {
         listFriend = document.getElementsByClassName("_55sr");
         let buttonIndex = 0;
        setTimeout(function clickNextButton() {
            if (listFriend[buttonIndex].innerHTML == "Thêm bạn bè")
            {
                listFriend[buttonIndex].click();
            }
            if (buttonIndex > listFriend.length)
            {
                 window.scrollTo(0, document.body.scrollHeight);
                setTimeout(continueWhenPageLoad, 2000);
                return;
                }
            buttonIndex++;
            setTimeout(clickNextButton, 4000);
           
        }); 
    }, 0);
})();
/**Code by Nguyễn Đức Đề */
/**Link facebook: https://www.facebook.com/nguyenducde.meo */
