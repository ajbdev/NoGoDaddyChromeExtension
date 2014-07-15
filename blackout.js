if (!document.getElementById('SOPABlackout')) {
    var content = "<div id='SOPABlackout' style='"
                    + "background: #000; top: 0; bottom:0; left:0;right:0;text-align: center;"
                    + "z-index: 99999; font-size: 28px; line-height: 1.5;padding-top:400px;"
                    + "color: #fff; font-family: Helvetica, Arial;"
                + "'>"
                + "<span style='font-weight: bold;'>SOPA BLACK OUT</span>"
                + "<div id='SOPABlackoutClose' style='color:#fff;cursor:pointer;font-weight:bold;float:right;width:20px'>&times;</div>"                
                + "</div>";
    document.body.innerHTML = content + document.body.innerHTML;
    var close = document.getElementById('SOPABlackoutClose');
    
    close.addEventListener('click',function() {
        document.getElementById('SOPABlackout').style.display = 'none';
    
    });
} else {
    document.getElementById('SOPABlackout').style.display = 'block';
}
