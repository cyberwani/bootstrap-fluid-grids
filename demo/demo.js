$(function () {
    $('[class^="span"]').each(function (i, element) {
        var $this = $(this);
        var cssClass = $this.attr('class');
        cssClass = cssClass.substring(4, cssClass.length);
        $this.html(cssClass);
    });
});