var generateQRCode =  function () {
    chrome.tabs.query({ active: true},function(tabs){
        var url = tabs[0].url;
        new QRCode(document.getElementById('qrcode'), url);
    });

}

window.addEventListener('load', generateQRCode);

