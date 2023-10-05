var button = document.querySelectorAll(".container__danhSach--gioHang");

button.forEach(function(data,number){
    data.onclick = function(e){
        var e = e.target;
        var block = e.parentElement;
        var img = block.querySelector("img").src;
        var text = block.querySelector(".container__danhSach--thongTin").innerText;
        var gia = block.querySelector(".container__giaTien--tien").innerText;

        tinhTien(img,text,gia);
    }
})

function tinhTien(img,text,gia){
    var add = document.createElement("container__danhSach");
    var choadd = document.querySelector(".body__gioHang");
    var anh = `<div class="container__body-2">
    <input class="body__gioHang--checkbox" type="checkbox">
    <img src="${img}" alt="" class="body__gioHang--img">
    <div class="body__gioHang--thongTin">
        <div class="gioHang__thongTin--div1">${text}</div>
        <div class="gioHang__thongTin--div2">Phân loại hàng : Đen</div>
        <div class="gioHang__thongTin--div3">
            <div class="dangNhap__thu1">
                <span class="dangNhap__span">Số Lượng</span>
                <div class="dangNhap__tien">
                    <input value="1" min="0" type="number" class="dangNhap__tien--input"></input>
                </div>
            </div>
        </div>
        <span class="gioHang__thongTin--div4">7 ngày trả hàng</span>
    </div>
    <div class="footer__thanhTien">
    <div class="footer__thanhTien--span">Tổng Tiền : <span class="footer__thanhTien--giaTien">68</span>  Tỏi</div>
    <div class="footer__thanhTien--lienHe">
        <p class="footer__gioHang--span1">Mua Hàng</p>
        <p class="footer__gioHang--span2">Hủy Đơn Hàng</p>
    </div>
</div>
</div>`
add.innerHTML = anh;
choadd.append(add)
kiemTraTien();
xoaSanPham();
}

function kiemTraTien(){
    var tinhTien = document.querySelector(".container__body-2");
    var totalA = 0;

        var input = tinhTien.querySelector(".dangNhap__tien--input").value;
        var giaTien = tinhTien.querySelector(".footer__thanhTien--giaTien").innerHTML;
        totalB = input * giaTien;
        var tong = totalA+=totalB;
        document.querySelector(".footer__thanhTien--giaTien").innerHTML = tong;
}

function xoaSanPham(){
    var xoaSp = document.querySelectorAll(".container__body-2");

    for (var i =0;i<xoaSp.length;i++){
        var proxoa = document.querySelectorAll(".footer__gioHang--span2");
        proxoa[i].onclick = function(e){
            var e = e.target;
            var xoa = e.parentElement.parentElement.parentElement;
            xoa.remove();
        }
       
    }
}



function tinhTien(tenSp,giaTien,hinhAnh){
    var add = document.createElement("container__danhSach");
    var choadd = document.querySelector(".body__gioHang");
    var sanPham = taodoituongsanpham (tenSp,giaTien,hinhAnh);
    var anh = `<div class="container__body-2">
    <input class="body__gioHang--checkbox" type="checkbox">
    <img src="${sanPham.hinhAnh}" alt="" class="body__gioHang--img">
    <div class="body__gioHang--thongTin">
        <div class="gioHang__thongTin--div1">${sanPham.tenSp}</div>
        <div class="gioHang__thongTin--div2">Phân loại hàng : Đen</div>
        <div class="gioHang__thongTin--div3">
            <div class="dangNhap__thu1">
                <span class="dangNhap__span">Số Lượng</span>
                <div class="dangNhap__tien">
                    <input value="1" min="0" type="number" class="dangNhap__tien--input"></input>
                </div>
            </div>
        </div>
        <span class="gioHang__thongTin--div4">7 ngày trả hàng</span>
    </div>
    <div class="footer__thanhTien">
    <div class="footer__thanhTien--span">Tổng Tiền : <span class="footer__thanhTien--giaTien">${sanPham.giaTien}</span>  Tỏi</div>
    <div class="footer__thanhTien--lienHe">
        <p class="footer__gioHang--span1">Mua Hàng</p>
        <p class="footer__gioHang--span2">Hủy Đơn Hàng</p>
    </div>
</div>
</div>`
add.innerHTML = anh;
choadd.append(add)
}