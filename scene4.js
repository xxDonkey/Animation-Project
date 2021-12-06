function onload()
{
    document.getElementById("start").onclick = () => 
    {
        document.getElementsByClassName("tortoise")[0].style.animation = "tortoise_run var(--anim-time) infinite"
    }

    document.getElementById("back").href = "file:///C:/Users/zendo/Documents/GitHub/Animation-Project/scene3.html"
    document.getElementById("forward").hidden = true
}