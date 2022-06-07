// 탭 버튼 클릭 시 전환되는 이벤트 함수
function btnGallery() {
    document.getElementById('gallery').style.display = 'block';
    document.getElementById('gallery-search').style.display = 'none';
}

function btnSearch() {
    document.getElementById('gallery').style.display = 'none';
    document.getElementById('gallery-search').style.display = 'block';
}