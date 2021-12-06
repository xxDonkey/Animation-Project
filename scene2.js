function onload()
{
    document.getElementById("start").onclick = () => 
    {
        document.getElementsByClassName("hare-running")[0].style.animation = "hare_run var(--anim-time) infinite"
        document.getElementsByClassName("think")[0].style.animation = "think_move var(--anim-time) infinite"
    }

    document.getElementById("back").href = "file:///C:/Users/zendo/Documents/GitHub/Animation-Project/scene1.html"
    document.getElementById("forward").href = "file:///C:/Users/zendo/Documents/GitHub/Animation-Project/scene3.html"
}