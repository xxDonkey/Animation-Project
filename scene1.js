function onload()
{
    document.getElementById("start").onclick = () => 
    {
        document.getElementsByClassName("tortoise")[0].style.animation = "tortoise_run var(--anim-time) infinite"
        document.getElementsByClassName("hare-running")[0].style.animation = "hare_run var(--anim-time) infinite"
        document.getElementsByClassName("startflag")[0].style.animation = "flag_waive var(--anim-time) infinite"
    }

    document.getElementById("back").hidden = true
    document.getElementById("forward").href = "file:///C:/Users/zendo/Documents/GitHub/Animation-Project/scene2.html"
}