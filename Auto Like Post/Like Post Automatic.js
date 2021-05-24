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
var listButtons = document.getElementsByClassName('oajrlxb2 s1i5eluu gcieejh5 bn081pho humdl8nn izx4hr6d rq0escxv nhd2j8a9 j83agx80 p7hjln8o kvgmc6g5 cxmmr5t8 oygrvhab hcukyx3x jb3vyjys d1544ag0 qt6c0cv9 tw6a2znq i1ao9s8h esuyzwwr f1sip0of lzcic4wl l9j0dhe7 abiwlrkh p8dawk7l beltcj47 p86d2i9g aot14ch1 kzx2olss cbu4d94t taijpn5t ni8dbmo4 stjgntxs k4urcfbm tv7at329');
for (i = 0; i < listButtons.length; i++) {
    console.log(listButtons[i].innerHTML);
}