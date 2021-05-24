/*Chỉnh thành https://m.facebook.com/send_page_invite/?pageid=101480562131909&reference=msite_friends_inviter_card */
/** Mời hàng loạt bạn bè like fanpage */
(() => {
     setTimeout(function continueWhenPageLoad() {
         listFriend = document.getElementsByClassName("_55sr");
         let buttonIndex = 0;
        setTimeout(function clickNextButton() {
            if (listFriend[buttonIndex].innerHTML == "Mời")
            {
                listFriend[buttonIndex].click();
            }
            if (listFriend.length - buttonIndex == 3) {
                window.scrollTo(0, document.body.scrollHeight);
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