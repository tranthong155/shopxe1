var nut = document.querySelector(".nav__span--dangNhap");
var dangNhap = document.querySelector(".modal__dangNhap");
var icon = document.querySelector(".modal__inner--dangNhap")

    nut.onclick = function(){
        dangNhap.classList.add("ative");
        icon.onclick = function(){
            dangNhap.classList.remove("ative");
        }
    }

    var bam = document.querySelector(".nav__span--dangKy");
    var dangKy = document.querySelector(".modal__dangKy");
    var icon__dangKy = document.querySelector(".modal__inner--dangKy");
    
        bam.onclick = function(){
            dangKy.classList.add("ative");
            icon__dangKy.onclick = function(){
                dangKy.classList.remove("ative");
            }
        }


var button = document.querySelector(".chuThich__span--button");
button.onclick = function(){
    dangKy.classList.add("ative");
            icon__dangKy.onclick = function(){
                dangKy.classList.remove("ative");
            }
    dangNhap.classList.remove("ative");
}




// bắt lỗi đăng nhập



var butonBatLoi = document.querySelectorAll(".modal__inner--footer");
var onmousetaiKhoan = document.querySelectorAll(".dangNhap");
var onmousematKhau = document.querySelectorAll(".matKhau");
var showMatKhau = document.querySelectorAll(".showMatKhau");


// show hiển thị mật khẩu
showMatKhau.forEach(function(data){
  data.onclick = function(){
    var hienthi = data.parentElement.parentElement
    var passwword = hienthi.querySelector(".matKhau__input");
    if (data.checked === true){
      passwword.type = "text"
    }else {
      passwword.type = "password"
    }
  
  }
})

onmousetaiKhoan.forEach(function(data){
  data.onmouseleave = function(){

    var dataDangNhap = data.parentElement;
      var batLoitaiKhoan = dataDangNhap.querySelector(".dangNhap__input").value;
      var batLoiMatKhau = dataDangNhap.querySelector(".matKhau__input").value;
     if (_.isEmpty(batLoitaiKhoan) || _.isEmpty(batLoiMatKhau) ){
      dataDangNhap.querySelector(".modal__footer--span").style.color = ""
     } else if (batLoiMatKhau.length > 1 && batLoiMatKhau.length > 1 ){
      dataDangNhap.querySelector(".modal__footer--span").style.color = "White"
      dataDangNhap.querySelector(".modal__inner--footer ").style.backgroundColor  = "#2397fd"
     }
  }
})

onmousematKhau.forEach(function(data){
  data.onmouseleave = function(){

    var dataDangNhap = data.parentElement;
      var batLoitaiKhoan = dataDangNhap.querySelector(".dangNhap__input").value;
      var batLoiMatKhau = dataDangNhap.querySelector(".matKhau__input").value;
     if (_.isEmpty(batLoitaiKhoan) || _.isEmpty(batLoiMatKhau) ){
      dataDangNhap.querySelector(".modal__footer--span").style.color = ""
     } else if (batLoiMatKhau.length > 1 && batLoiMatKhau.length > 1 ){
      dataDangNhap.querySelector(".modal__footer--span").style.color = "White"
      dataDangNhap.querySelector(".modal__inner--footer ").style.backgroundColor  = "#2397fd"
     }
  }
})


butonBatLoi.forEach(function (data){
  data.onclick = function(){

    var dataDangNhap = data.parentElement

    var batLoitaiKhoan = dataDangNhap.querySelector(".dangNhap__input").value;
    var batLoiMatKhau = dataDangNhap.querySelector(".matKhau__input").value;

    if (_.isEmpty(batLoitaiKhoan)){
      dataDangNhap.querySelector(".batLoiDangNhap").innerHTML = "Xin mời nhập lại"
    } else if (batLoitaiKhoan.length < 2){
      dataDangNhap.querySelector(".batLoiDangNhap").innerHTML = "Họ tên không được nhỏ hơn 2 ký tự"
    }
     else {
      dataDangNhap.querySelector(".batLoiDangNhap").innerHTML = ""
    }
  
    if (_.isEmpty(batLoiMatKhau)){
      dataDangNhap.querySelector(".batLoimatKhau").innerHTML = "Xin mời nhập lại"
    } else if (batLoiMatKhau.length < 2){
      dataDangNhap.querySelector(".batLoimatKhau").innerHTML = "Họ tên không được nhỏ hơn 2 ký tự"
    }
     else {
      dataDangNhap.querySelector(".batLoimatKhau").innerHTML = ""
    }
  
  }

})



// phóng to khi chạm vào

var phongToKichThuong = document.querySelectorAll(".container__dongXe--img");
var phongToKichThuong2 = document.querySelectorAll(".container__hangXe--img")

phongToKichThuong2.forEach(function(data){
  data.onmouseover = function(){
    data.style.transform = "scale(1.2)";
  }
  data.onmouseout = function(){
    data.style.transform = "scale(1)";
  }
})

phongToKichThuong.forEach(function(data){
  data.onmouseover = function(){
    data.style.transform = "scale(1.2)";
  }
  data.onmouseout = function(){
    data.style.transform = "scale(1)";
  }
})