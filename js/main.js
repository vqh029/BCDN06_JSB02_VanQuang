// bai 01
const btnTL = document.getElementById("btnTongLuong");

function tinhLuong(luongCoBan, soNgayLam) {
    return luongCoBan * soNgayLam;
};

btnTL.addEventListener("click", function () {
    const luongCoBan = 100000;
    const inputNgay = parseInt(document.getElementById("soNgayTL").value);
    const tongLuong = tinhLuong(luongCoBan, inputNgay);
    document.querySelector(".ngayLamViec").innerHTML = inputNgay;
    document.querySelector(".tienLuong").innerHTML = tongLuong;
});


// bai 02
function trungBinhCong5(nb1, nb2, nb3, nb4, nb5){
    console.log((nb1 + nb2 + nb3 + nb4 + nb5)/5);
    return ((nb1 + nb2 + nb3 + nb4 + nb5)/5);
};

const btnTongTB = document.getElementById("btnTinhTB");

btnTongTB.addEventListener("click", function(){
    const so1 = parseFloat(document.getElementById("so01").value);
    const so2 = parseFloat(document.getElementById("so02").value);
    const so3 = parseFloat(document.getElementById("so03").value);
    const so4 = parseFloat(document.getElementById("so04").value);
    const so5 = parseFloat(document.getElementById("so05").value);

    document.querySelector(".trungBinh").innerHTML = trungBinhCong5(so1, so2, so3, so4, so5);
});

// bai 03
const rate = 23.500;

function quyDoiVND(usd){
    return usd * rate;
}

btnQuyDoi.addEventListener("click",function(){
    const tienUSD = parseInt(document.getElementById("soUSD").value);
    document.querySelector(".tienVND").innerHTML = parseFloat(quyDoiVND(tienUSD)).toFixed(3).toString();
});

// bai 04
function chuVi(dai, rong){
    return (dai + rong) * 2;
};

function dienTich(dai, rong){
    return dai * rong;
}

const btnHCN = document.getElementById("btnTinhHCN");

btnHCN.addEventListener("click", function(){
    const inputCD = parseInt(document.getElementById("chieuDai").value);
    const inputCR = parseInt(document.getElementById("chieuRong").value);
    document.querySelector(".chuViHCN").innerHTML = chuVi(inputCD, inputCR);
    document.querySelector(".dienTichHCN").innerHTML = dienTich(inputCD, inputCR);
    
});

// bai 05
function tongKySo(kyso){
    const donvi = parseInt(kyso%10);
    const hangchuc = parseInt(kyso/10);
    return (hangchuc + donvi);
};

const btnKySo = document.getElementById("btnTinhKySo");

btnKySo.addEventListener("click", function(){
    const kyso = parseInt(document.getElementById("kySo").value);
    document.querySelector(".tongKySo").innerHTML = tongKySo(kyso);
});