(() => {
     setTimeout(function continueWhenPageLoad() {
         listFriend = document.getElementsByClassName("_55sr");
         let buttonIndex = 0;
         let count = 0;
        setTimeout(function clickNextButton() {
            if (listFriend[buttonIndex].innerHTML == "Hủy")
            {
                listFriend[buttonIndex].click();
                console.log("Hủy lời mời thứ " + count + " Trong tổng " + listFriend.length);
                count++;
            }
           
            if (buttonIndex > listFriend.length)
            {
                
                setTimeout(continueWhenPageLoad, 500);
                return;
            }
             window.scrollTo(0, document.body.scrollHeight);
            buttonIndex++;
            setTimeout(clickNextButton, 1000);
           
        }); 
    }, 0);
})();