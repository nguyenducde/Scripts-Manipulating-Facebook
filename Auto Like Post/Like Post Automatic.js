//Like Post Automatic
/**Chuyển thành https://m.facebook.com/ */
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
            articleIndex++;
            setTimeout(clickNextButton, 1000);
        });
          
    }, 0);
})();
/** Chuyển thành https://www.facebook.com/*/
(() => {
    setTimeout(function continueWhenPageLoad() {
        var articles = document.getElementsByClassName('rq0escxv l9j0dhe7 du4w35lb j83agx80 g5gj957u rj1gh0hx buofh1pr hpfvmrgz taijpn5t bp9cbjyn owycx6da btwxx1t3 d1544ag0 tw6a2znq jb3vyjys dlv3wnog rl04r1d5 mysgfdmx hddg9phg qu8okrzs g0qnabr5');
        var statusLike = document.getElementsByClassName('rq0escxv l9j0dhe7 du4w35lb j83agx80 g5gj957u rj1gh0hx buofh1pr hpfvmrgz taijpn5t bp9cbjyn owycx6da btwxx1t3 d1544ag0 tw6a2znq jb3vyjys dlv3wnog rl04r1d5 mysgfdmx hddg9phg qu8okrzs g0qnabr5');
        let articleIndex = 0;
        setTimeout(function clickNextButton() {
            articles[articleIndex].click();
            //statusLike[0].click();
             console.log("Đã Like bài viết thứ "+articleIndex+" trong tổng: "+articles.length +" bài viết")
            articleIndex++;
            setTimeout(clickNextButton, 500);
        });
          
    }, 0);
})();

/*     Code by Nguyễn Đức Đề          */
/*  Link Facebook:https://www.facebook.com/nguyenducde.meo */