if (!document.getElementById('stopSOPA')) {
    var content = "<div id='stopSOPA' style='background: #cc103f; top: 0; padding: 5px; text-align: center; z-index: 99999; font-size: 14.5px; line-height: 1.5; color: #fff; font-family: Helvetica, Arial;'>"
                + "<span style='font-weight: bold;'>Internet Blacklist Legislation Supporter! </span>"
                + "This company may be a supporter of the dangerous SOPA or PIPA legislation."
                + "<div style='color:#fff;font-weight:bold;float:right;padding-right:8px;width:46px;'>"
                + "<a target='_blank' style='color:#fff;font-weight:normal;font-size:0.8em;padding-right:4px;' href='http://www.reddit.com/help/faqs/sopa'>?</a> "
                + "<span id='stopSOPAClose' style='cursor:pointer;'>&times;</div>"                
                + "</div></div>";
    document.body.innerHTML = content + document.body.innerHTML;
    var close = document.getElementById('stopSOPAClose');
    
    close.addEventListener('click',function() {
        document.getElementById('stopSOPA').style.display = 'none';
    
    });
} else {
    document.getElementById('stopSOPA').style.display = 'block';
}