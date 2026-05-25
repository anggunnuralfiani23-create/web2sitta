new Vue({

  el: '#app',

  data: {

    upbjjList: [
      "Jakarta",
      "Surabaya",
      "Makassar"
    ],

    kategoriList: [
      "MK Wajib",
      "MK Pilihan",
      "Praktikum"
    ],

    filterUpbjj: '',
    filterKategori: '',
    sortBy: '',

    showMenipis: false,

    stok: [

      {
        kode: "EKMA4116",
        judul: "Pengantar Manajemen",
        kategori: "MK Wajib",
        upbjj: "Jakarta",
        qty: 28,
        safety: 20
      },

      {
        kode: "EKMA4115",
        judul: "Pengantar Akuntansi",
        kategori: "MK Wajib",
        upbjj: "Jakarta",
        qty: 7,
        safety: 15
      },

      {
        kode: "BIOL4201",
        judul: "Biologi Umum",
        kategori: "Praktikum",
        upbjj: "Surabaya",
        qty: 12,
        safety: 10
      }

    ],

    form: {
      kode: '',
      judul: '',
      kategori: '',
      upbjj: '',
      qty: '',
      safety: ''
    }

  },

  computed: {

    filteredStok() {

      let data = this.stok;

      if (this.filterUpbjj) {

        data = data.filter(item =>
          item.upbjj == this.filterUpbjj
        );

      }

      if (this.filterKategori) {

        data = data.filter(item =>
          item.kategori == this.filterKategori
        );

      }

      if (this.showMenipis) {

        data = data.filter(item =>
          item.qty < item.safety
        );

      }

      if (this.sortBy == 'judul') {

        data.sort((a,b)=>
          a.judul.localeCompare(b.judul)
        );

      }

      if (this.sortBy == 'qty') {

        data.sort((a,b)=>
          a.qty - b.qty
        );

      }

      return data;

    }

  },

  methods: {

    resetFilter() {

      this.filterUpbjj = '';
      this.filterKategori = '';
      this.sortBy = '';

      this.showMenipis = false;

    },

    tambahData() {

      this.stok.push({

        kode: this.form.kode,
        judul: this.form.judul,
        kategori: this.form.kategori,
        upbjj: this.form.upbjj,
        qty: Number(this.form.qty),
        safety: Number(this.form.safety)

      });

    }

  }

});