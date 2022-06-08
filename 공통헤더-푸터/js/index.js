// 기능 추가
function openSearch() {
    document.getElementById('menu-sub').style.display = 'block';
}

function closeSearch() {
    document.getElementById('menu-sub').style.display = 'none';
}

$(function(){
    $(".sub-menu-des1").hide();
    $(".sub-menu1").click(function(){
        $(".sub-menu-des1").slideToggle();
    });

    $(".sub-menu-des2").hide();
    $(".sub-menu2").click(function(){
        $(".sub-menu-des2").slideToggle();
    });
});