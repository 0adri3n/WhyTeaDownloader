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

    try {
        localStorage.setItem("dlLoc", location);
        alert("Location set.");
    } catch (error) {
        alert("Error. Please retry.");
    }

}

function downloadMP3(){
    var storedLocation = localStorage.getItem("dlLoc");

}

function downloadMP4(){
    var storedLocation = localStorage.getItem("dlLoc");
}

