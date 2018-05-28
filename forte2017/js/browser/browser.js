$(function(){
  	$ ("body").append("<div class='old_ie'><div class='close'>╳</div><strong>請立即更新您的瀏覽器</strong><p>您正在使用老舊的IE瀏覽器，請立即升級，<br>或者更換為其他瀏覽器。</p><ul><li><a target='_blank' href='https://support.microsoft.com/zh-tw/help/17621/internet-explorer-downloads'><img src='js/browser/ie.png'></a><span>升級</span></li><li><a target='_blank' href='https://www.google.com.tw/chrome/browser/desktop/'><img src='js/browser/chrome.png'></a><span>下載</span></li><li><a target='_blank' href='https://www.mozilla.org/zh-TW/firefox/new/'><img src='js/browser/firefox.png'></a><span>下載</span></li><li><a target='_blank' href='http://www.apple.com/tw/safari/'><img src='js/browser/safari.png'></a><span>下載</span></li></ul></div>");
  	$ (".close").click(function(){
  		$ (".old_ie").fadeOut();
  	})
});
