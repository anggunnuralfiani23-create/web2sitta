// Data Pengguna
var dataPengguna = [
  { id: 1, nama: "Rina Wulandari", email: "rina@ut.ac.id", password: "rina123", role: "UPBJJ-UT", lokasi: "UPBJJ Jakarta" },
  { id: 2, nama: "Agus Pranoto", email: "agus@ut.ac.id", password: "agus123", role: "UPBJJ-UT", lokasi: "UPBJJ Makassar" },
  { id: 3, nama: "Siti Marlina", email: "siti@ut.ac.id", password: "siti123", role: "Puslaba", lokasi: "Pusat" },
  { id: 4, nama: "Doni Setiawan", email: "doni@ut.ac.id", password: "doni123", role: "Fakultas", lokasi: "FISIP" },
  { id: 5, nama: "Admin SITTA", email: "admin@ut.ac.id", password: "admin123", role: "Administrator", lokasi: "Pusat" }
];

// Data Bahan Ajar
var dataBahanAjar = [
  {
    kodeLokasi: "0TMP01",
    kodeBarang: "ASIP4301",
    namaBarang: "Pengantar Ilmu Komunikasi",
    jenisBarang: "BMP",
    edisi: "2",
    stok: 548
  },
  {
    kodeLokasi: "0JKT01",
    kodeBarang: "EKMA4216",
    namaBarang: "Manajemen Keuangan",
    jenisBarang: "BMP",
    edisi: "3",
    stok: 392
  },
  {
    kodeLokasi: "0SBY02",
    kodeBarang: "EKMA4310",
    namaBarang: "Kepemimpinan",
    jenisBarang: "BMP",
    edisi: "1",
    stok: 278
  },
  {
    kodeLokasi: "0MLG01",
    kodeBarang: "BIOL4211",
    namaBarang: "Mikrobiologi Dasar",
    jenisBarang: "BMP",
    edisi: "2",
    stok: 165
  },
  {
    kodeLokasi: "0UPBJJBDG",
    kodeBarang: "PAUD4401",
    namaBarang: "Perkembangan Anak Usia Dini",
    jenisBarang: "BMP",
    edisi: "4",
    stok: 204
  }
];

// Data Tracking
var dataTracking = {
  "2023001234": {
    nomorDO: "2023001234",
    nama: "Rina Wulandari",
    status: "Dalam Perjalanan",
    ekspedisi: "JNE",
    tanggalKirim: "2025-08-25",
    paket: "0JKT01",
    total: "Rp 180.000",
    perjalanan: [
      { waktu: "2025-08-25 10:12:20", keterangan: "Penerimaan di Loket: TANGERANG SELATAN. Pengirim: Universitas Terbuka" },
      { waktu: "2025-08-25 14:07:56", keterangan: "Tiba di Hub: TANGERANG SELATAN" },
      { waktu: "2025-08-25 17:30:00", keterangan: "Diteruskan ke Kantor Jakarta Selatan" }
    ]
  },
  "2023005678": {
    nomorDO: "2023005678",
    nama: "Agus Pranoto",
    status: "Terkirim",
    ekspedisi: "Pos Indonesia",
    tanggalKirim: "2025-08-25",
    paket: "0UPBJJBDG",
    total: "Rp 220.000",
    perjalanan: [
      { waktu: "2025-08-25 10:12:20", keterangan: "Penerimaan di Loket: TANGERANG SELATAN. Pengirim: Universitas Terbuka" },
      { waktu: "2025-08-25 14:07:56", keterangan: "Tiba di Hub: TANGERANG SELATAN" },
      { waktu: "2025-08-25 16:30:10", keterangan: "Diteruskan ke Kantor Kota Bandung" },
      { waktu: "2025-08-26 12:15:33", keterangan: "Tiba di Hub: Kota BANDUNG" },
      { waktu: "2025-08-26 15:06:12", keterangan: "Proses antar ke Cimahi" },
      { waktu: "2025-08-26 20:00:00", keterangan: "Selesai Antar. Penerima: Agus Pranoto" }
    ]
  }
};

// Data Histori Transaksi
var dataHistori = [
  { id: "TRX001", tanggal: "2025-08-20", nomorDO: "2023001234", pengguna: "Rina Wulandari", barang: "Manajemen Keuangan", jumlah: 50, status: "Selesai" },
  { id: "TRX002", tanggal: "2025-08-21", nomorDO: "2023005678", pengguna: "Agus Pranoto", barang: "Perkembangan Anak Usia Dini", jumlah: 30, status: "Selesai" },
  { id: "TRX003", tanggal: "2025-08-22", nomorDO: "2023009999", pengguna: "Doni Setiawan", barang: "Kepemimpinan", jumlah: 20, status: "Proses" },
  { id: "TRX004", tanggal: "2025-08-23", nomorDO: "2023007777", pengguna: "Siti Marlina", barang: "Mikrobiologi Dasar", jumlah: 15, status: "Proses" },
  { id: "TRX005", tanggal: "2025-08-24", nomorDO: "2023003333", pengguna: "Rina Wulandari", barang: "Pengantar Ilmu Komunikasi", jumlah: 40, status: "Selesai" }
];

// Data Stok Barang
var dataStok = [
  { id: 1, kode: "ASIP4301", nama: "Pengantar Ilmu Komunikasi", kategori: "Bahan Ajar", satuan: "pcs", stok: 548, minStok: 100, harga: 50000, keterangan: "Buku modul edisi 2" },
  { id: 2, kode: "EKMA4216", nama: "Manajemen Keuangan", kategori: "Bahan Ajar", satuan: "pcs", stok: 392, minStok: 80, harga: 45000, keterangan: "Buku modul edisi 3" },
  { id: 3, kode: "EKMA4310", nama: "Kepemimpinan", kategori: "Bahan Ajar", satuan: "pcs", stok: 278, minStok: 60, harga: 40000, keterangan: "Buku modul edisi 1" },
  { id: 4, kode: "BIOL4211", nama: "Mikrobiologi Dasar", kategori: "Bahan Ajar", satuan: "pcs", stok: 165, minStok: 50, harga: 55000, keterangan: "Buku modul edisi 2" },
  { id: 5, kode: "PAUD4401", nama: "Perkembangan Anak Usia Dini", kategori: "Bahan Ajar", satuan: "pcs", stok: 204, minStok: 70, harga: 48000, keterangan: "Buku modul edisi 4" }
];

var riwayatStok = [
  { id: 1, tanggal: "25 Agu 2025", kode: "ASIP4301", nama: "Pengantar Ilmu Komunikasi", jenis: "Keluar", jumlah: 50, stokSebelum: 598, stokSesudah: 548, keterangan: "Distribusi ke mahasiswa", oleh: "Rina Wulandari" },
  { id: 2, tanggal: "24 Agu 2025", kode: "EKMA4216", nama: "Manajemen Keuangan", jenis: "Masuk", jumlah: 100, stokSebelum: 292, stokSesudah: 392, keterangan: "Restock gudang", oleh: "Siti Marlina" },
  { id: 3, tanggal: "25 Agu 2025", kode: "EKMA4310", nama: "Kepemimpinan", jenis: "Keluar", jumlah: 30, stokSebelum: 308, stokSesudah: 278, keterangan: "Pengiriman ke fakultas", oleh: "Doni Setiawan" },
  { id: 4, tanggal: "24 Agu 2025", kode: "BIOL4211", nama: "Mikrobiologi Dasar", jenis: "Keluar", jumlah: 20, stokSebelum: 185, stokSesudah: 165, keterangan: "Distribusi modul", oleh: "Agus Pranoto" },
  { id: 5, tanggal: "23 Agu 2025", kode: "PAUD4401", nama: "Perkembangan Anak Usia Dini", jenis: "Masuk", jumlah: 50, stokSebelum: 154, stokSesudah: 204, keterangan: "Pengisian ulang stok", oleh: "Agus Pranoto" },
  { id: 6, tanggal: "23 Agu 2025", kode: "ASIP4301", nama: "Pengantar Ilmu Komunikasi", jenis: "Masuk", jumlah: 80, stokSebelum: 468, stokSesudah: 548, keterangan: "Restock bahan ajar", oleh: "Siti Marlina" }
];

var dataPengiriman = [
  {
    noDO: "2023001234",
    status: "Sedang Dikirim",
    pengirim: "Universitas Terbuka",
    penerima: "Rina Wulandari",
    asal: "Tangerang Selatan",
    tujuan: "Jakarta Selatan",
    tanggal: "25 Agu 2025",
    estimasi: "27 Agu 2025",
    riwayat: [
      { waktu: "25 Agu 2025 10:12", keterangan: "Penerimaan paket di loket UT", lokasi: "TANGERANG SELATAN" },
      { waktu: "25 Agu 2025 14:07", keterangan: "Tiba di hub pengiriman", lokasi: "TANGERANG SELATAN" },
      { waktu: "25 Agu 2025 17:30", keterangan: "Diteruskan ke Jakarta Selatan", lokasi: "JAKARTA SELATAN" }
    ]
  },
  {
    noDO: "2023005678",
    status: "Terkirim",
    pengirim: "Universitas Terbuka",
    penerima: "Agus Pranoto",
    asal: "Tangerang Selatan",
    tujuan: "Bandung",
    tanggal: "24 Agu 2025",
    estimasi: "26 Agu 2025",
    riwayat: [
      { waktu: "24 Agu 2025 09:30", keterangan: "Penerimaan paket", lokasi: "TANGERANG SELATAN" },
      { waktu: "24 Agu 2025 13:45", keterangan: "Berangkat ke Bandung", lokasi: "TANGERANG SELATAN" },
      { waktu: "25 Agu 2025 10:20", keterangan: "Tiba di hub Bandung", lokasi: "BANDUNG" },
      { waktu: "25 Agu 2025 14:15", keterangan: "Selesai antar", lokasi: "BANDUNG" }
    ]
  },
  {
    noDO: "2023009999",
    status: "Sedang Dikirim",
    pengirim: "Universitas Terbuka",
    penerima: "Doni Setiawan",
    asal: "Tangerang Selatan",
    tujuan: "Semarang",
    tanggal: "22 Agu 2025",
    estimasi: "24 Agu 2025",
    riwayat: [
      { waktu: "22 Agu 2025 08:00", keterangan: "Paket diproses di gudang", lokasi: "TANGERANG SELATAN" },
      { waktu: "22 Agu 2025 11:30", keterangan: "Berangkat menuju Semarang", lokasi: "TANGERANG SELATAN" },
      { waktu: "23 Agu 2025 09:20", keterangan: "Tiba di hub Semarang", lokasi: "SEMARANG" }
    ]
  },
  {
    noDO: "2023007777",
    status: "Sedang Dikirim",
    pengirim: "Universitas Terbuka",
    penerima: "Siti Marlina",
    asal: "Tangerang Selatan",
    tujuan: "Surabaya",
    tanggal: "23 Agu 2025",
    estimasi: "25 Agu 2025",
    riwayat: [
      { waktu: "23 Agu 2025 07:45", keterangan: "Paket diterima di loket", lokasi: "TANGERANG SELATAN" },
      { waktu: "23 Agu 2025 12:10", keterangan: "Berangkat ke Surabaya", lokasi: "TANGERANG SELATAN" }
    ]
  },
  {
    noDO: "2023003333",
    status: "Terkirim",
    pengirim: "Universitas Terbuka",
    penerima: "Rina Wulandari",
    asal: "Tangerang Selatan",
    tujuan: "Jakarta Selatan",
    tanggal: "24 Agu 2025",
    estimasi: "26 Agu 2025",
    riwayat: [
      { waktu: "24 Agu 2025 08:15", keterangan: "Paket diproses di lokasi pengiriman", lokasi: "TANGERANG SELATAN" },
      { waktu: "24 Agu 2025 15:30", keterangan: "Tiba di Jakarta Selatan", lokasi: "JAKARTA SELATAN" },
      { waktu: "25 Agu 2025 09:00", keterangan: "Selesai antar", lokasi: "JAKARTA SELATEN" }
    ]
  }
];
