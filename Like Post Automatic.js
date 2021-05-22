//Like Post Automatic
(() => {
    setTimeout(function continueWhenPageLoad() {
        var articles = document.getElementsByClassName('_1ekf');
        
        var statusLike = document.getElementsByClassName('img _mpx img _4s0y');
        let articleIndex = 0;
        setTimeout(function clickNextButton() {
            articles[articleIndex].click();
              for (j = 0; j < articles.length; j++){
                    if (j == 0) {
                        statusLike[j].click();
                    }
              }
             console.log("Đã Like bài viết thứ "+articleIndex+" trong tổng: "+articles.length +" bài viết")
            if (articleIndex>articles.length) {
                window.scrollTo(0, document.body.scrollHeight);
                setTimeout(continueWhenPageLoad, 500);
                return;
            }
            articleIndex++;
            setTimeout(clickNextButton, 1000);
        });
          
    }, 0);
})();
/*     Code by Nguyễn Đức Đề          */
/*  Link Facebook:https://www.facebook.com/nguyenducde.meo */
