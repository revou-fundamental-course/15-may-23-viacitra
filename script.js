//fungsi menghitung luas
function hitungLuas(sisi_luas) {
    var result_luas = sisi_luas * sisi_luas
    return result_luas

document.getElementById('hitung_luas').addEventListener('click', function(event){
    event.preventDefault();
    if(sisi <=0) {
        alert('sisi harus lebih besar dari 0');
    } else {
        var luas = hitungLuas(sisi_luas);
        document.getElementById('result_luas').textContent = 'Luas' + luas;
    }
});

document.getElementById("rumus_luas").innerText = " L = S x S";
}
//fungsi menghitung keliling
function hitungKeliling() {
    var result_keliling = 4 * sisi_keliling;
    return result_keliling
document.getElementById('hitung_keliling').addEventListener('click', function(event){
    event.preventDefault();
    if(sisi <=0) {
        alert('sisi harus lebih besar dari 0');
    } else {
        var luas = hitungKeliling(sisi_keliling);
        document.getElementById('result_keliling').textContent = 'Keliling' + hitungKeliling;
    }
});
    document.getElementById("rumus_keliling").innerText = "K = 4 x s";
}

function validateSisi(sisi) {
    var input = document.getElementById("sisi").value;
    if (input.length == 0) {
        inputError.innerText = " Can't be blank!! Input must be Integer";
    return false;
    }
    return true;
}
