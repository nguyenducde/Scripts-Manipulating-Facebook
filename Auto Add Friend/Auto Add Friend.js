/*Chỉnh thành https://m.facebook.com/friends/center/suggestions/?_rdr */
/** Mỗi 4 giây sẽ tự động add bạn bè */
(() => {
     setTimeout(function continueWhenPageLoad() {
         listFriend = document.getElementsByClassName("_55sr");
         let buttonIndex = 0;
         let count = 0;
        setTimeout(function clickNextButton() {
            if (listFriend[buttonIndex].innerHTML == "Thêm bạn bè")
            {
                listFriend[buttonIndex].click();
                console.log("Đã add số " + count + " trong tổng " + listFriend.length);
                count++;
            }
    
            buttonIndex++;
            setTimeout(clickNextButton, 200);
           
        }); 
    }, 0);
})();
/**Code by Nguyễn Đức Đề */
/**Link facebook: https://www.facebook.com/nguyenducde.meo */


(() => {
     setTimeout(function continueWhenPageLoad() {
         listFriend = document.getElementsByClassName("_55sr");
         var viewMore = document.getElementsByClassName('title mfsm fcl');
         let buttonIndex = 0;
         let count = 0;
        setTimeout(function clickNextButton() {
            if (listFriend[buttonIndex].innerHTML == "Thêm bạn bè")
            {
                listFriend[buttonIndex].click();
                console.log("Đã add số " + count + " trong tổng " + listFriend.length);
                count++;
            }
              for (var i = 0; i <viewMore.length; i++)
              { 
                  if (viewMore[i].innerHTML.includes("Xem thêm…") == true) {
                        viewMore[i].click();
                    }
              }
            if (buttonIndex > listFriend.length)
            {   
                //window.scrollTo(0, document.body.scrollHeight);
                setTimeout(continueWhenPageLoad, 500);
                return;
            }
            buttonIndex++;
            setTimeout((
            ) => {
              window.scrollTo(0, document.body.scrollHeight);  
            },500)
            
            setTimeout(clickNextButton, 500);
           
        }); 
    }, 0);
})();