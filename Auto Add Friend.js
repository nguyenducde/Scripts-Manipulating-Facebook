/*Chỉnh thành https://m.facebook.com/friends/center/suggestions/?_rdr */
/** Mỗi 4 giây sẽ tự động add bạn bè */
(() => {
     setTimeout(function continueWhenPageLoad() {
         listFriend = document.getElementsByClassName("_55sr");
         console.log("Danh sách kết bạn " + listFriend.length);
         let buttonIndex = 0;
        setTimeout(function clickNextButton() {
            if (listFriend[buttonIndex].innerHTML == "Thêm bạn bè")
            {
                listFriend[buttonIndex].click();
            }
            if (buttonIndex > listFriend.length)
            {
                 window.scrollTo(0, document.body.scrollHeight);
                setTimeout(continueWhenPageLoad, 1000);
                return;
                }
            buttonIndex++;
            setTimeout(clickNextButton, 2000);
           
        }); 
    }, 0);
})();
/**Code by Nguyễn Đức Đề */
/**Link facebook: https://www.facebook.com/nguyenducde.meo */

