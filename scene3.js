function onload()
{
    document.getElementById("start").onclick = () => 
    {
        document.getElementsByClassName("tortoise")[0].style.animation = "tortoise_run var(--anim-time) infinite"
    }

    document.getElementById("back").href = "file:///C:/Users/zendo/Documents/GitHub/Animation-Project/scene2.html"
    document.getElementById("forward").href = "file:///C:/Users/zendo/Documents/GitHub/Animation-Project/scene4.html"
}