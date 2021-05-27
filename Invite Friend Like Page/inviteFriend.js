/*Chỉnh thành https://m.facebook.com/send_page_invite/?pageid=101480562131909&reference=msite_friends_inviter_card */
/** Mời hàng loạt bạn bè like fanpage */
(() => {
     setTimeout(function continueWhenPageLoad() {
         listFriend = document.getElementsByClassName("_55sr");
         let buttonIndex = 0;
         let count = 0;
        setTimeout(function clickNextButton() {
            if (listFriend[buttonIndex].innerHTML == "Mời")
            {
                listFriend[buttonIndex].click();
                count++;
                console.log("Đã mời " + count + " bạn like page trong số " + listFriend.length);
            }
            window.scrollTo(0, document.body.scrollHeight);
            buttonIndex++;
            setTimeout(clickNextButton, 10000);
           
        }); 
    }, 0);
})();