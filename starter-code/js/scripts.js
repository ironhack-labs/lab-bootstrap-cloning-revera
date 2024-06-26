$(document).ready(function() {
    $('#topmenu').superfish({
        delay: 100,
        animation: { opacity: 'show', height: 'show' },
        speed: 'fast',
        cssArrows: false,
        disableHI: true
    });

    // 現在のページに対応するメニュー項目をアクティブに設定
    $('ul.sfmenu a').each(function() {
        if (this.href === window.location.href) {
            $(this).addClass('active');
        }
    });
});
