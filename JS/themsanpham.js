var nutThemVaoGiohang = document.querySelectorAll(".container__danhSach--gioHang");
var taodoituongsangHTML = `<div class="container__body-2">

<input class="body__gioHang--checkbox" type="checkbox">
<img src="./danh sách/roll royce.jpg" alt="" class="body__gioHang--img">
<div class="body__gioHang--thongTin">
    <div class="gioHang__thongTin--div1">Roll Royce</div>
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

function taodoituongsanpham(id,tenSp,giaTien,hinhAnh){
    var sanPham = new Object();
    sanPham.id = id;
    sanPham.tenSp = tenSp;
    sanPham.giaTien = giaTien;
    sanPham.hinhAnh = hinhAnh;
    return sanPham;
}

var student = localStorage.getItem('doiTuong') ? JSON.parse(localStorage.getItem('doiTuong')) : [];
function onloadLocal(){
    nutThemVaoGiohang.forEach(function(data,number){
        data.onclick = function(){
            var id =number;
            var blockData =  data.parentElement;
            var tenSp = blockData.querySelector(".container__danhSach--thongTin").innerText
            var giaTien = blockData.querySelector(".container__giaTien--tien").innerText
            var hinhAnh = blockData.querySelector(".container__danhSach-img").src
            student.push(taodoituongsanpham(id,tenSp,giaTien,hinhAnh))

            localStorage.setItem('doiTuong',JSON.stringify(student))
        }
        taoDoiTuongvoLocal()
    })
}
function xoaSanPham (id){
    var student = localStorage.getItem('doiTuong') ? JSON.parse(localStorage.getItem('doiTuong')) : [];
    student.splice(id,1);
    localStorage.setItem('doiTuong',JSON.stringify(student))
    taoDoiTuongvoLocal()
    kiemTraTien()    
}


function taoDoiTuongvoLocal(){
    var student = localStorage.getItem('doiTuong') ? JSON.parse(localStorage.getItem('doiTuong')) : [];

    if (student === 0) return false;
    let taodoituongsangHTML = ``


    student.forEach(function(data,number){
        var id =number;

        taodoituongsangHTML += `
            <div class="container__body-2">

                        <input class="body__gioHang--checkbox" type="checkbox" onclick = "checkedTangTien()">
                        <img src="${data.hinhAnh}" alt="" class="body__gioHang--img">
                        <div class="body__gioHang--thongTin">
                            <div class="gioHang__thongTin--div1">${data.tenSp}</div>
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
                            <div class="footer__thanhTien--span">Tổng Tiền : <span class="footer__thanhTien--giaTien">${data.giaTien}</span>  Tỏi</div>
                            <div class="footer__thanhTien--lienHe">
                                <p class="footer__gioHang--span1">Mua Hàng</p>
                                <p class="footer__gioHang--span2" onclick="xoaSanPham(${id})">Hủy Đơn Hàng</p>
                            </div>
                        </div>
                    </div>`

                })
                
                document.querySelector(".body__gioHang").innerHTML = taodoituongsangHTML
}

function checkedTangTien (){
    var xoaSP = document.querySelectorAll(".container__body-2");
    var totalB = 0;
    xoaSP.forEach(function(data){
        var nutKiemTra = data.querySelector(".body__gioHang--checkbox");
        nutKiemTra.onclick = function(){
            var input = data.querySelector(".dangNhap__tien--input").value*1;
            var giaTien = data.querySelector(".footer__thanhTien--giaTien").innerHTML*1;
            if (nutKiemTra.checked == true){
                totalA = input*giaTien;

            }else {
                totalA = 0;
            }

            totalB +=totalA
            console.log(totalA)
            tangTien();
            document.querySelector(".choInGiaTien").innerHTML = totalB + " Tỏi";
        }
    })
}

///////////////

function kiemTraTien(){
    var tinhTien = $$(".container__body-2");
    var totalB =0;
    for (var i=0;i<tinhTien.length;i++){
        var input = tinhTien[i].querySelector(".dangNhap__tien--input").value*1;
        var giaTien = tinhTien[i].querySelector(".footer__thanhTien--giaTien").innerHTML*1;
        totalA = input*giaTien;
        totalB +=totalA;
    }
    tangTien();
    $(".choInGiaTien").innerHTML = totalB + " Tỏi";
}
function tangTien(){
    
    var xoaSP = document.querySelectorAll(".container__body-2");


    xoaSP.forEach(function(data){
        var inputTang = data.querySelector(".dangNhap__tien--input");
            if (inputTang == null){
            inputTang = 0;
        }else{
            inputTang.addEventListener("change",function(){
                kiemTraTien()
            })
            
        }

    })
}

onloadLocal()