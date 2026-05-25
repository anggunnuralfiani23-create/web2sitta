var app = new Vue({

  el:'#trackingApp',

  data:{

    pengirimanList:[
      {
        kode:'REG',
        nama:'Reguler (3-5 hari)'
      },

      {
        kode:'EXP',
        nama:'Ekspres (1-2 hari)'
      }
    ],

    paket:[
      {
        kode:'PAKET-UT-001',
        nama:'PAKET IPS Dasar',
        harga:120000
      },

      {
        kode:'PAKET-UT-002',
        nama:'PAKET IPA Dasar',
        harga:140000
      }
    ],

    tracking:{

      "DO2025-0001":{

        nim:'123456789',
        nama:'Rina Wulandari',
        ekspedisi:'JNE',
        paket:'PAKET IPS Dasar',
        total:120000,
        status:'Dalam Perjalanan'

      }

    },

    form:{
      nim:'',
      nama:'',
      ekspedisi:'',
      paket:''
    },

    editNomor:null

  },

  methods:{

    simpanDO(){

      if(this.editNomor){

        this.tracking[this.editNomor].nim = this.form.nim;
        this.tracking[this.editNomor].nama = this.form.nama;
        this.tracking[this.editNomor].ekspedisi = this.form.ekspedisi;
        this.tracking[this.editNomor].paket = this.form.paket;

        this.editNomor = null;

      }else{

        let nomor =
        'DO2025-' +
        String(
          Object.keys(this.tracking).length + 1
        ).padStart(4,'0');

        this.tracking[nomor] = {

          nim:this.form.nim,
          nama:this.form.nama,
          ekspedisi:this.form.ekspedisi,
          paket:this.form.paket,
          total:120000,
          status:'Diproses'

        };

      }

      this.form.nim = '';
      this.form.nama = '';
      this.form.ekspedisi = '';
      this.form.paket = '';

    },

    editDO(nomor){

      this.form.nim =
      this.tracking[nomor].nim;

      this.form.nama =
      this.tracking[nomor].nama;

      this.form.ekspedisi =
      this.tracking[nomor].ekspedisi;

      this.form.paket =
      this.tracking[nomor].paket;

      this.editNomor = nomor;

    },

    hapusDO(nomor){

      delete this.tracking[nomor];

    }

  }

});