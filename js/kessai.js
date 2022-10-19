$(function () {
    // 変数に要素を入れる
    var open1 = $('.modal-open.densi'),
        open2 = $('.modal-open.qr'),
        close = $('.modal-close'),
        container = $('.modal-container'),
        container1 = $('.modal-container.densi'),
        container2 = $('.modal-container.qr');

    //開くボタンをクリックしたらモーダルを表示する
    open1.on('click', function () {
        container1.addClass('active');
        return false;
    });
    
    //開くボタンをクリックしたらモーダルを表示する
    open2.on('click', function () {
        container2.addClass('active');
        return false;
    });

    //閉じるボタンをクリックしたらモーダルを閉じる
    close.on('click', function () {
        container.removeClass('active');
    });

    //モーダルの外側をクリックしたらモーダルを閉じる
    $(document).on('click', function (e) {
        if (!$(e.target).closest('.modal-body').length) {
            container.removeClass('active');
        }
    });

    $('.linkTo').on('click', function () {
        window.location.href = "./nyuukin.html";

    })

});

