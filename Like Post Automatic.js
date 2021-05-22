//Like Post Automatic
(() => {
    setTimeout(function continueWhenPageLoad() {
        var articles = document.getElementsByClassName('_1ekf');
        //console.log("Sô lượng bài viết: " + articles.length)
        var statusLike = document.getElementsByClassName('img _mpx img _4s0y');
        let articleIndex = 0;
        setTimeout(function clickNextButton() {
            articles[articleIndex].click();
              for (j = 0; j < articles.length; j++){
                    if (j == 0) {
                        statusLike[j].click();
                    }
                }
               // console.log("Vị trí bài viết:"+articleIndex+" Vị trí lặp: "+articles.length)
            if (articleIndex>articles.length) {
                window.scrollTo(0, document.body.scrollHeight);
                setTimeout(continueWhenPageLoad, 0);
                return;
            }
            articleIndex++;
            setTimeout(clickNextButton, 1000);
        });
          
    }, 0);
})();
