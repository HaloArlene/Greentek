function loadTitleColor()
{
    var pathname = window.location.pathname;

    if(isMobile)
    {
        $('#index').removeAttr("style");
        $('#product').removeAttr("style");
        $('#service').removeAttr("style");
        $('#about').removeAttr("style");
        if(pathname.indexOf("index") != -1)
        {
            $('#index').attr("style", "color:#000000");
        }
        else if(pathname.indexOf("product") != -1)
        {
            $('#product').attr("style", "color:#000000");
        }
        else if(pathname.indexOf("service") != -1)
        {
            $('#service').attr("style", "color:#000000");
        }
        else if(pathname.indexOf("about") != -1)
        {
            $('#about').attr("style", "color:#000000");
        }
        else
        {
            $('#index').attr("style", "color:#000000");
        }
    }
    else
    {
        $('#index').removeAttr("style");
        $('#product').removeAttr("style");
        $('#service').removeAttr("style");
        $('#about').removeAttr("style");
        if(pathname.indexOf("index") != -1)
        {
            $('#index').attr("style", "color:#fdc519");
        }
        else if(pathname.indexOf("product") != -1)
        {
            $('#product').attr("style", "color:#fdc519");
        }
        else if(pathname.indexOf("service") != -1)
        {
            $('#service').attr("style", "color:#fdc519");
        }
        else if(pathname.indexOf("about") != -1)
        {
            $('#about').attr("style", "color:#fdc519");
        }
        else
        {
            $('#index').attr("style", "color:#fdc519");
        }
    }
}