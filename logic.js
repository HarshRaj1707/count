function inc()
{
    let res=document.getElementById("a");
    res.innerHTML= parseInt(document.getElementById("a").innerHTML)+1;
}

function dec()
{
    let res=document.getElementById("a");
    res.innerHTML= parseInt(document.getElementById("a").innerHTML)-1;
}

function reset()
{
    let r=document.getElementById("a");
    r.innerHTML=0;
}