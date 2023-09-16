// Function DOM
function domID(id) {
  return document.getElementById(id);
}

// Thêm số vào mảng
var listNumber = [];
function themSo() {
  var nhapSo = domID("nhapSo").value * 1;
  listNumber.push(nhapSo);
  console.log(listNumber);
  document.getElementById("inSo").innerHTML = "=> " + listNumber;
}

// 1. Tổng số dương:
domID("btnTongDuong").onclick = function () {
  let result = 0;
  for (var i = 0; i < listNumber.length; i++) {
    if (listNumber[i] > 0) {
      result += listNumber[i];
    }
  }
  document.getElementById("inTongSoDuong").innerHTML = "=> " + result;
};

// 2. Đếm số dương:
domID("btnDemSo").onclick = function () {
  let demSoDuong = 0;
  for (var i = 0; i < listNumber.length; i++) {
    if (listNumber[i] > 0) {
      demSoDuong++;
    }
  }
  document.getElementById("inDemSoDuong").innerHTML = "=> " + demSoDuong;
};

// 3. Tìm số nhỏ nhất:
domID("btnSoNhoNhat").onclick = function () {
  let soNhoNhat = listNumber[0];
  for (var i = 1; i < listNumber.length; i++) {
    if (soNhoNhat > listNumber[i]) {
      soNhoNhat = listNumber[i];
    }
  }
  document.getElementById("inSoNhoNhat").innerHTML = "=> " + soNhoNhat;
};

// 4. Tìm số dương nhỏ nhất:
domID("btnSoDuongNhoNhat").onclick = function () {
  let listNumberPositive = [];
  for (var i = 0; i < listNumber.length; i++) {
    if (listNumber[i] > 0) {
      listNumberPositive.push(listNumber[i]);
    }
  }
  console.log("listNumberPositive", listNumberPositive);
  if (listNumberPositive.length === 0) {
    document.getElementById("inSoDuongNhoNhat").innerHTML =
      "=> Mảng không có số dương";
  } else {
    let soDuongNhoNhat = listNumberPositive[0];
    for (var i = 1; i < listNumberPositive.length; i++) {
      if (soDuongNhoNhat > listNumberPositive[i]) {
        soDuongNhoNhat = listNumberPositive[i];
      }
    }
    document.getElementById("inSoDuongNhoNhat").innerHTML =
      "=> " + soDuongNhoNhat;
  }
};

// 5. Tìm số chẵn cuối cùng:
domID("btnSoChanCuoi").onclick = function () {
  var soChanCuoi = "";
  for (var i = listNumber.length - 1; i > 0; i--) {
    if (listNumber[i] % 2 === 0) {
      soChanCuoi = listNumber[i];
      document.getElementById("inSoChanCuoi").innerHTML = "=> " + soChanCuoi;
      return;
    }
  }
  document.getElementById("inSoChanCuoi").innerHTML = "=> Không có số chẵn";
};

// 6. Đổi chỗ 2 giá trị:
domID("btnHoanDoi").onclick = function () {
  var viTri_1 = domID("viTri_1").value * 1;
  var viTri_2 = domID("viTri_2").value * 1;
  console.log(viTri_1, viTri_2);
  var temp = listNumber[viTri_1];
  listNumber[viTri_1] = listNumber[viTri_2];
  listNumber[viTri_2] = temp;
  document.getElementById("inHoanDoi").innerHTML =
    "=> Mảng sau khi đổi: " + listNumber;
};

// 7. Sắp xếp tăng dần:
domID("btnTangDan").onclick = function () {
  for (var i = 0; i < listNumber.length - 1; i++) {
    for (var j = i + 1; j < listNumber.length; j++) {
      if (listNumber[i] > listNumber[j]) {
        var temp = listNumber[i];
        listNumber[i] = listNumber[j];
        listNumber[j] = temp;
      }
    }
  }

  document.getElementById("inTangDan").innerHTML = "=> " + listNumber;
};
// 8. Tìm số nguyên tố đầu tiên:
domID("btnSoNguyenTo_1").onclick = function () {
  for (var i = 0; i < listNumber.length; i++) {
    var count = 0;
    for (var j = 1; j <= listNumber[i]; j++) {
      if (listNumber[i] % j === 0) {
        count++;
      }
    }
    if (count === 2) {
      var result = listNumber[i];
      domID("inSoNguyenTo_1").innerHTML = "Số nguyên tố đầu tiên là: " + result;
      return;
    }
  }
  if (count !== 2) {
    domID("inSoNguyenTo_1").innerHTML = "Không có số nguyên tố";
  }
};

// 9. Nhập thêm 1 mảng số thực, đếm số nguyên:
var listSoThuc = [];
domID("btnThemSoThuc").onclick = function () {
  var nhapSoThuc = domID("nhapSoThuc").value * 1;
  listSoThuc.push(nhapSoThuc);
  // listNumber.push(nhapSoThuc);
  domID("inSoThuc").innerHTML = "=>" + listSoThuc;
};
domID("btnDemSoNguyen").onclick = function () {
  var count = 0;
  for (var i = 0; i < listSoThuc.length; i++) {
    if (Number.isInteger(listSoThuc[i])) {
      count++;
    }
  }
  domID("inDemSoNguyen").innerHTML = "=> " + count;
  if (count === 0) {
    domID("inDemSoNguyen").innerHTML = "=> Không có số nguyên trong mảng.";
  }
};

// 10. So sánh số lượng số dương và số âm:
domID("btnSoSanh").onclick = function () {
  var countSoDuong = 0;
  var countSoAm = 0;
  for (var i = 0; i < listNumber.length; i++) {
    if (listNumber[i] > 0) {
      countSoDuong++;
    } else if (listNumber[i] < 0) {
      countSoAm++;
    }
  }
  if (countSoDuong > countSoAm) {
    document.getElementById("inSoSanh").innerHTML =
      "=> Số lượng SỐ DƯƠNG > Số lượng SỐ ÂM ";
  } else if (countSoDuong < countSoAm) {
    document.getElementById("inSoSanh").innerHTML =
      "=> Số lượng SỐ ÂM > Số lượng SỐ DƯƠNG ";
  } else {
    document.getElementById("inSoSanh").innerHTML =
      "=> Số lượng SỐ ÂM = Số lượng SỐ DƯƠNG ";
  }
};
