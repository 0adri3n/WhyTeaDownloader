document.addEventListener('DOMContentLoaded', function() {

    var download_button = document.getElementById('dl_button');
    download_button.addEventListener('click', function() {
        displayDownloadWidget();
    });
});


function displayDownloadWidget() {
    var storedLocation = localStorage.getItem("dlLoc");
    
    chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
        var url = tabs[0].url;
        if (isYouTubeUrl(url)) {
            var widgetUrl = 'https://api.vevioz.com/apis/widget?url=' + url;

            // Create an iframe element
            var iframe = document.createElement('iframe');
            iframe.setAttribute('id', 'widgetApi');
            iframe.setAttribute('src', widgetUrl);
            iframe.setAttribute('width', '100%');
            iframe.setAttribute('height', '100%');
            iframe.setAttribute('allowtransparency', 'true');
            iframe.setAttribute('scrolling', 'no');
            iframe.setAttribute('style', 'border:none; z-index: 9999; position: fixed; top: 0; left: 0;');

            document.body.appendChild(iframe);

            iframe.onload = function() {
                var resizeScript = document.createElement('script');
                resizeScript.text = 'iFrameResize({ log: false }, \'#widgetApi\')';
                document.body.appendChild(resizeScript);

            };

        } else {
            alert("Not a YouTube URL.");
        }
    });
}

function isYouTubeUrl(url) {
    return url && typeof url === 'string' && url.includes("youtube.com");
}
