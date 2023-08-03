const changeText = () => {
    setTimeout(() => {
        document.body.style.background = "linear-gradient(rgba(255, 0, 0, 0.3), rgb(0, 247, 255)),url('https://media.istockphoto.com/id/535403859/photo/dancing-at-disco.webp?b=1&s=612x612&w=0&k=20&c=AT5jHnpqZ55vKjeJfuArp24OrRt8R2mAHT_rVPYFv0A=')"
        document.body.style.backgroundSize = "cover"
        document.getElementById("h1").innerHTML = "All the Rajini fans say"
    }, 200)
    setTimeout(() => {
        document.body.style.background = "linear-gradient(rgba(238, 255, 0, 0.3), rgb(16, 204, 229)),url('https://cdn.pixabay.com/photo/2022/06/02/15/01/music-7238254_640.jpg')"
        document.body.style.backgroundSize = "cover"
        document.getElementById("h1").innerHTML = "Don't miss the chance say"
    }, 400)
    setTimeout(() => {
        document.body.style.background = "linear-gradient(rgba(0, 200, 0, 0.3), rgb(255, 255, 255)),url('https://media.istockphoto.com/id/535403859/photo/dancing-at-disco.webp?b=1&s=612x612&w=0&k=20&c=AT5jHnpqZ55vKjeJfuArp24OrRt8R2mAHT_rVPYFv0A=')"
        document.body.style.backgroundSize = "cover"
        document.getElementById("h1").innerHTML = "Lungi dance,lungi dance"
    }, 600)
    setTimeout(() => {
        document.body.style.background = "linear-gradient(rgba(18, 0, 0, 0.3), rgb(249, 244, 248)18),url('https://cdn.pixabay.com/photo/2022/06/02/15/01/music-7238254_640.jpg')"
        document.body.style.backgroundSize = "cover"
        document.getElementById("h1").innerHTML = "Yo Yo Honey singh"
    }, 600)
    
}

setInterval(changeText, 1000)
const bgAudio = document.getElementById("bgAudio");

        // Play the audio
        function playAudio() {
            bgAudio.play();
        }

        