const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

var gioHang = $$(".container__danhSach--gioHang");

gioHang.forEach(function(data,number){
    data.onclick = function(e){
        var butten = e.target;
        var product = butten.parentElement;
        var hinhAnh = product.querySelector("img").src;
        var ten = product.querySelector(".container__danhSach--thongTin").innerText;
        var giaTien = product.querySelector(".container__giaTien--tien").innerText;
        addcart(hinhAnh,ten,giaTien);

        // console.log(ten,giaTien)
    }
})

function addcart(hinhAnh,ten,giaTien){
    var add = document.createElement("container__body-2");
    var choadd = document.querySelector(".body__gioHang");
    var anh = `
    <div class="container__body-2">

        <input class="body__gioHang--checkbox" type="checkbox">
        <img src="${hinhAnh}" alt="" class="body__gioHang--img">
        <div class="body__gioHang--thongTin">
            <div class="gioHang__thongTin--div1">${ten}</div>
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
            <div class="footer__thanhTien--span">Tổng Tiền : <span class="footer__thanhTien--giaTien">${giaTien}</span>  Tỏi</div>
            <div class="footer__thanhTien--lienHe">
                <p class="footer__gioHang--span1">Mua Hàng</p>
                <p class="footer__gioHang--span2">Hủy Đơn Hàng</p>
            </div>
        </div>    
    
</div>`;
    add.innerHTML = anh;
    choadd.append(add)
    xoaSanPham()
    checkedTangTien()
    // kiemTraTien()
    
    
}
////////////// 

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

///////////////


function xoaSanPham(){
    
    var xoaSP = document.querySelectorAll(".footer__gioHang--span2");

    xoaSP.forEach(function(data){
        data.onclick = function(){
            var kiemtra = data.parentElement.parentElement.parentElement;
            kiemtra.remove()
            kiemTraTien()
        }
    })

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









// localStorage


// var button = document.querySelectorAll(".container__danhSach--gioHang");
// var dachsachsanpham = JSON.parse(localStorage.getItem("sanPham"));
// if (dachsachsanpham == null){
//     dachsachsanpham = new Array();
// }
// var keylocolsote = "sanPham";

// function taodoituonggiohang (idSanPham,soLuong){
//     var iteamGioHang = new Array();
//     iteamGioHang.idSanPham = idSanPham;
//     iteamGioHang.soLuong = soLuong;
//     return iteamGioHang;
// }
// function layDanhSachGioHang(){
//     var dachsachitemGioHang = new Array();
//     var jsondachsachitemGioHang = localStorage.getItem(keylocolsote)

//     if (jsondachsachitemGioHang != null){
//         dachsachitemGioHang = JSON.parse(jsondachsachitemGioHang)
//         return dachsachitemGioHang;
//     }


// }
// function luuvaoLocolstore (dachsachitemGioHang){
//     var jsonluuvaoLocolstore = JSON.stringify(dachsachitemGioHang);
//     localStorage.setItem(keylocolsote,jsonluuvaoLocolstore);
// }
// function taodoituongsanpham (tenSp,giaTien,hinhAnh){
//     var sanPham = new Object();
//     sanPham.tenSp = tenSp;
//     sanPham.giaTien = giaTien;
//     sanPham.hinhAnh = hinhAnh;

// sanPham.toJson = function(){
//     var json = JSON.stringify(this);
//     return json;
// }
//     return sanPham;
// }

// button.forEach(function(data,number){
//     data.onclick = function(e){
//         var e = e.target;
//         var block = e.parentElement;
//         var hinhAnh = block.querySelector("img").src;
//         var tenSp = block.querySelector(".container__danhSach--thongTin").innerText;
//         var giaTien = block.querySelector(".container__giaTien--tien").innerText;
//         var taodoituong = taodoituongsanpham(tenSp, giaTien, hinhAnh);
//         if (!Array.isArray(dachsachsanpham)) {
//             dachsachsanpham = [];
//         }
//         dachsachsanpham.push(taodoituong);
//         var jsontaodoituong = JSON.stringify(taodoituong);
//         localStorage.setItem("sanPham",jsontaodoituong);
//         tinhTien(tenSp,giaTien,hinhAnh)
//         // onclickDuaSanPhamVao (tenSp)
//     }
// })
// function chuyendachSachitemGohangSangHTML (dachsachitemGioHang){
//     var htmltong = "";
//     for (var i=o;i<dachsachitemGioHang.length;i++){
//         htmltong = htmltong + chuyenDoiitemGohangSangHTML(dachsachitemGioHang[i])
//     }
//     return htmltong;
// }

// function chuyenDoiitemGohangSangHTML (iteamGioHang){    
//     var html =`<div class="container__body-2">

//     <input class="body__gioHang--checkbox" type="checkbox">
//     <img src="./danh sách/roll royce.jpg" alt="" class="body__gioHang--img">
//     <div class="body__gioHang--thongTin">
//         <div class="gioHang__thongTin--div1">Roll Royce</div>
//         <div class="gioHang__thongTin--div2">Phân loại hàng : Đen</div>
//         <div class="gioHang__thongTin--div3">
//             <div class="dangNhap__thu1">
//                 <span class="dangNhap__span">Số Lượng</span>
//                 <div class="dangNhap__tien">
//                     <input value="1" min="0" type="number" class="dangNhap__tien--input"></input>
//                 </div>
//             </div>
//         </div>
//         <span class="gioHang__thongTin--div4">7 ngày trả hàng</span>
//     </div>
//     <div class="footer__thanhTien">
//         <div class="footer__thanhTien--span">Tổng Tiền : <span class="footer__thanhTien--giaTien">68</span>  Tỏi</div>
//         <div class="footer__thanhTien--lienHe">
//             <p class="footer__gioHang--span1">Mua Hàng</p>
//             <p class="footer__gioHang--span2">Hủy Đơn Hàng</p>
//         </div>
//     </div>
// </div>`

//     return html;

// }

// function tinhTien(tenSp,giaTien,hinhAnh){
//     var sanPham = taodoituongsanpham (tenSp,giaTien,hinhAnh);
//     var anh = `<div class="container__body-2">
//     <input class="body__gioHang--checkbox" type="checkbox">
//     <img src="${sanPham.hinhAnh}" alt="" class="body__gioHang--img">
//     <div class="body__gioHang--thongTin">
//         <div class="gioHang__thongTin--div1">${sanPham.tenSp}</div>
//         <div class="gioHang__thongTin--div2">Phân loại hàng : Đen</div>
//         <div class="gioHang__thongTin--div3">
//             <div class="dangNhap__thu1">
//                 <span class="dangNhap__span">Số Lượng</span>
//                 <div class="dangNhap__tien">
//                     <input value="1" min="0" type="number" class="dangNhap__tien--input"></input>
//                 </div>
//             </div>
//         </div>
//         <span class="gioHang__thongTin--div4">7 ngày trả hàng</span>
//     </div>
//     <div class="footer__thanhTien">
//     <div class="footer__thanhTien--span">Tổng Tiền : <span class="footer__thanhTien--giaTien">${sanPham.giaTien}</span>  Tỏi</div>
//     <div class="footer__thanhTien--lienHe">
//         <p class="footer__gioHang--span1">Mua Hàng</p>
//         <p class="footer__gioHang--span2">Hủy Đơn Hàng</p>
//     </div>
// </div>
// </div>`;
// return anh;
// }

// function hienThiDachSach (){
//     var dachsachDuaGopHang = layGioHangTuLOCAL();
//     var HTML = chuyenDoiitemGohangSangHTML(dachsachDuaGopHang);
//     var choadd = document.querySelector(".body__gioHang");
//     choadd.innerHTML = HTML;
// }

// function layGioHangTuLOCAL (){
//     var giohang = new Array();
//     var jsonGiohang = localStorage.getItem("sanPham");
//     if (jsonGiohang != null ){
//         gioHang = JSON.parse(jsonGiohang)
//     }
//     return giohang;
// }
// // function onclickDuaSanPhamVao (idSanPham){
// //     var dachsachDuaSanPhamVao = layDanhSachGioHang();
// //     var coTonTaiKhong = false;

// //     for (var i=0;i<dachsachDuaSanPhamVao.length;i++){
// //         var iteamGioHangHienTai = dachsachDuaSanPhamVao[i];

// //         if (iteamGioHangHienTai.idSanPham == idSanPham){
// //             dachsachDuaSanPhamVao[i].soLuong++;
// //             coTonTaiKhong = true;
// //         }
// //     }

// //     if (coTonTaiKhong == false){
// //         var iteamGioHangco = taodoituonggiohang(idSanPham,1);
// //         dachsachDuaSanPhamVao.push(iteamGioHangco);
// //     }
// //     luuvaoLocolstore(dachsachDuaSanPhamVao)
// // }



