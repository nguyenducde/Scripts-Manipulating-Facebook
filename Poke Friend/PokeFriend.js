/** https://www.facebook.com/pokes */
(() => {
     setTimeout(function continueWhenPageLoad() {
         listFriend = document.getElementsByClassName('a8c37x1j ni8dbmo4 stjgntxs l9j0dhe7 ltmttdrg g0qnabr5');
         let buttonIndex = 0;
         let count = 0;
        setTimeout(function clickNextButton() {
            if (listFriend[buttonIndex].innerHTML == "Chọc")
            {
                listFriend[buttonIndex].click();
                count++;
                console.log("Đã chọc " + count + "  trong số " + listFriend.length);
            }
           
            if (buttonIndex > listFriend.length)
            {
                
                setTimeout(continueWhenPageLoad, 300);
                return;
            }
             window.scrollTo(0, document.body.scrollHeight);
            buttonIndex++;
            setTimeout(clickNextButton, 10);
           
        }); 
    }, 0);
})();
/**Code by NGuyễn Đức Đề */

