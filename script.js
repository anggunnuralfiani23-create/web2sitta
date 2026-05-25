// ===================================
// LOGIN SITTA-UT
// ===================================

document.addEventListener("DOMContentLoaded", function () {

  const loginForm = document.getElementById("loginForm");

  loginForm.addEventListener("submit", function (e) {

    e.preventDefault();

    // Ambil input
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Cari user di dataPengguna
    const user = dataPengguna.find(
      (u) => u.email === email && u.password === password
    );

    // Jika login berhasil
    if (user) {

      // Simpan nama user
      localStorage.setItem("namaUser", user.nama);

      Swal.fire({
        title: "Login Berhasil!",
        text: "Selamat datang, " + user.nama,
        icon: "success",
        confirmButtonColor: "#f97316",
        confirmButtonText: "Lanjutkan"
      }).then(() => {

        // Pindah ke dashboard
        window.location.href = "dashboard.html";

      });

    }

    // Jika gagal login
    else {

      Swal.fire({
        title: "Login Gagal!",
        text: "Email atau password salah. Silakan coba lagi.",
        icon: "error",
        confirmButtonColor: "#1e3a8a",
        confirmButtonText: "OK"
      });

    }

  });

});