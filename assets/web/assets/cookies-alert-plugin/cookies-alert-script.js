!function() {
    try {
        document.getElementsByClassName('engine')[0].getElementsByTagName('a')[0].removeAttribute('rel');
    } catch (err) {}
    if (!document.getElementById('top-1')) {
        var e = document.createElement("section");
        e.id = "top-1";
        e.className = "engine";
        e.innerHTML = '<a href="https://mobirise.ws">Mobirise Website Builder</a> v5.0.2';
        document.body.insertBefore(e, document.body.childNodes[0]);
    }
}();
jQuery(function () {
    var $ = jQuery,
        tmpInput = $('input[name=cookieData]');

    $.cookiesDirective({
        customDialogSelector: tmpInput.attr('data-cookie-customDialogSelector') === 'null' ? null : tmpInput.attr('data-cookie-customDialogSelector'),
        explicitConsent: false,
        position: 'bottom',
        duration: 0,
        limit: 0,
        message: tmpInput.attr('data-cookie-text'),
        fontFamily: 'Arial',
        fontColor: tmpInput.attr('data-cookie-colorText'),
        fontSize: '13px',
        backgroundColor: tmpInput.attr('data-cookie-colorBg'),
        backgroundOpacity: '',
        linkColor: tmpInput.attr('data-cookie-colorLink'),
        underlineLink: tmpInput.attr('data-cookie-underlineLink'),
        textButton: tmpInput.attr('data-cookie-textButton'),
        colorButton: tmpInput.attr('data-cookie-colorButton'),
        animate: tmpInput.attr('data-cookie-customDialogSelector') === 'null'
    });

    tmpInput.remove();
});
