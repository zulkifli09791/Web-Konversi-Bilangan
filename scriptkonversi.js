document.getElementById("konversiBtn").addEventListener("click", konversiBilangan);

function konversiBilangan() {
    let bilangan = document.getElementById("inputBilangan").value.trim();
    let jenisAwal = document.getElementById("jenisBilangan").value;
    let pilihan = document.getElementById("pilihanKonversi").value;
    let hasil = "";

    // Tentukan basis angka awal
    let basisAwal;
    if (jenisAwal === "desimal") basisAwal = 10;
    else if (jenisAwal === "biner") basisAwal = 2;
    else if (jenisAwal === "oktal") basisAwal = 8;
    else if (jenisAwal === "heksadesimal") basisAwal = 16;

    // Ubah ke desimal dulu
    let angkaDesimal;
    try {
        angkaDesimal = parseInt(bilangan, basisAwal);
        if (isNaN(angkaDesimal)) throw "Format angka tidak valid!";
    } catch (error) {
        document.getElementById("hasilKonversi").innerText = "Format angka salah!";
        return;
    }

    // Konversi ke format yang dipilih
    if (pilihan === "desimal") {
        hasil = angkaDesimal.toString(10);
    } else if (pilihan === "biner") {
        hasil = angkaDesimal.toString(2);
    } else if (pilihan === "oktal") {
        hasil = angkaDesimal.toString(8);
    } else if (pilihan === "heksadesimal") {
        hasil = angkaDesimal.toString(16).toUpperCase();
    }

    // Tampilkan hasil
    document.getElementById("hasilKonversi").innerText = hasil;
}
