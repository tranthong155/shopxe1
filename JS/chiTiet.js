const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

var benPhai = $(".chiTiet__header--benPhai");
var benTrai = $(".chiTiet__header--benTrai");

var hinh = [
    "./danh sách/roll royce.jpg",
    "./ảnh/roll_roll1.jpg",
    "./ảnh/roll_roll2.jpg",
];
var index = 0;


benPhai.onclick = function(e){
    index++;
    if(index>=hinh.length)index=0;
    var anh = $(".chiTiet__nav--img");
    anh.src = hinh[index];
}
benTrai.onclick = function(e){
    index--;
    if(index < 0 )index=2;
    console.log(hinh.length)
    var anh = $(".chiTiet__nav--img");
    anh.src = hinh[index];
}