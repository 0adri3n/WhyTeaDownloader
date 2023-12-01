document.addEventListener('DOMContentLoaded', function() {
    var setting_link = document.getElementById('setting');
    setting_link.addEventListener('click', function() {
        setDownloadLocation();
    });

    var mp3_link = document.getElementById('mp3_button');
    mp3_link.addEventListener('click', function() {
        downloadMP3();
    });

    
    var mp4_link = document.getElementById('mp4_button');
    mp4_link.addEventListener('click', function() {
        downloadMP4();
    });

});

function setDownloadLocation(){

    var location = prompt('Download location :');


}

function downloadMP3(){
    alert("Downloading MP3");
}

function downloadMP4(){
    alert("Downloading MP4")
}

