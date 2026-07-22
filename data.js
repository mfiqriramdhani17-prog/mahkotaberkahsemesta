// data.js - CV Mahkota Berkah Semesta
// ─────────────────────────────────────
// GANTI nomor WA, link Company Profile, dan URL foto sesuai kebutuhan Anda

const WA_NUMBER = "6281223089940";
const COMPANY_PROFILE_URL = "assets/file/compro.pdf";

// ─────────────────────────────────────
// PRODUK  (foto: array 3–5 item, url null = pakai placeholder)
// ─────────────────────────────────────
const PRODUCTS = [
  {
    id: 1,
    nama: "Seragam PDH Kantor Premium",
    kategori: "seragam",
    foto: [
      { url: "assets/img/katalog/pdh-prem-depan.png", label: "Tampak Depan" },
      { url: "assets/img/katalog/pdh-prem-belakang.png", label: "Tampak Belakang" },
      { url: "assets/img/katalog/pdh-prem-detail.png", label: "Detail Bordir" }
    ],
    deskripsi: "Seragam PDH eksklusif untuk instansi pemerintah dan perusahaan. Tampilan rapi, bahan nyaman, cocok untuk aktivitas harian di kantor.",
    deskripsi_lengkap: "Seragam PDH (Pakaian Dinas Harian) dirancang khusus untuk standar seragam instansi pemerintah maupun perusahaan swasta. Tersedia berbagai pilihan warna dan dapat dikustomisasi dengan logo, bordir nama, serta atribut instansi. Jahitan rapi dengan standar industri garmen profesional.",
    bahan: "Taipan Milky / Drill Premium / Polyester TR",
    ukuran: "S, M, L, XL, XXL, XXXL (custom tersedia)",
    minimal_order: "12 pcs",
    best_seller: false,
    warna: ["Putih", "Biru Navy", "Abu-abu", "Krem", "Hitam"]
  },
  {
  id: 2,
  nama: "Seragam Kemeja Formal Executive",
  kategori: "seragam",
  foto: [
    { url: "assets/img/katalog/seragam-exe-depan.png", label: "Tampak Depan" },
    { url: "assets/img/katalog/seragam-exe-belakang.png", label: "Tampak Belakang" },
    { url: "assets/img/katalog/seragam-exe-detail.png", label: "Detail Kancing & Kerah" }
  ],
  deskripsi: "Kemeja formal eksklusif untuk kebutuhan kantor level executive dengan desain elegan dan modern.",
  deskripsi_lengkap: "Dirancang untuk manajemen dan level executive, kemeja ini menggunakan bahan premium yang adem dan tidak mudah kusut. Bisa custom logo bordir dan name tag untuk identitas perusahaan.",
  bahan: "Cotton Premium / Oxford / Stretch Fabric",
  ukuran: "S, M, L, XL, XXL",
  minimal_order: "12 pcs",
  best_seller: false,
  warna: ["Putih", "Biru Muda", "Abu-abu"]
},
{
  id: 3,
  nama: "Seragam Batik Korporat Custom",
  kategori: "seragam",
  foto: [
    { url: "assets/img/katalog/seragam-batik-depan.png", label: "Tampak Depan" },
    { url: "assets/img/katalog/seragam-batik-blkg.png", label: "Tampak Belakang" },
    { url: "assets/img/katalog/seragam-batik-detail.png", label: "Motif Batik" }
  ],
  deskripsi: "Seragam batik modern untuk identitas perusahaan dengan desain motif eksklusif.",
  deskripsi_lengkap: "Batik korporat dengan motif yang bisa disesuaikan branding perusahaan. Cocok untuk event formal, meeting penting, dan hari tertentu di kantor.",
  bahan: "Katun Batik / Rayon Premium",
  ukuran: "S, M, L, XL, XXL, XXXL",
  minimal_order: "24 pcs",
  best_seller: false,
  warna: ["Coklat", "Biru", "Hitam", "Maroon"]
},
{
  id: 4,
  nama: "Seragam Blazer Kantor Wanita",
  kategori: "seragam",
  foto: [
    { url: "assets/img/katalog/blazer-wanita-depan.png", label: "Tampak Depan" },
    { url: "assets/img/katalog/blazer-wanita-blkg.png", label: "Tampak Belakang" },
    { url: "assets/img/katalog/blazer-wanita-detail.png", label: "Detail Potongan" }
  ],
  deskripsi: "Blazer formal wanita dengan potongan modern untuk tampilan profesional.",
  deskripsi_lengkap: "Blazer dirancang khusus untuk kebutuhan kerja wanita dengan cutting fit body dan bahan nyaman. Cocok digunakan di lingkungan kantor formal dan meeting.",
  bahan: "Semi Wool / Polyester Premium",
  ukuran: "S, M, L, XL",
  minimal_order: "12 pcs",
  best_seller: false,
  warna: ["Hitam", "Abu-abu", "Navy","Warna Custom"]
},
{
  id: 5,
  nama: "Seragam Kemeja Lapangan Formal",
  kategori: "seragam",
  foto: [
    { url: "assets/img/katalog/seragam-pdl-depan.png", label: "Tampak Depan" },
    { url: "assets/img/katalog/seragam-pdl-blkg.png", label: "Tampak Belakang" },
    { url: "assets/img/katalog/seragam-pdl-detail.png", label: "Detail Saku" }
  ],
  deskripsi: "Kemeja formal lapangan dengan desain semi tactical dan tetap rapi.",
  deskripsi_lengkap: "Dirancang untuk tim operasional yang tetap membutuhkan tampilan formal namun fungsional. Dilengkapi kantong tambahan dan bahan kuat.",
  bahan: "American Drill / Ripstop",
  ukuran: "M, L, XL, XXL",
  minimal_order: "12 pcs",
  best_seller: false,
  warna: ["Khaki", "Army", "Hitam"]
},
{
  id: 6,
  nama: "Seragam Office Casual Premium",
  kategori: "seragam",
  foto: [
    { url: "assets/img/katalog/socp-depan.png", label: "Tampak Depan" },
    { url: "assets/img/katalog/socp-blkg.png", label: "Tampak Belakang" },
    { url: "assets/img/katalog/socp-detail.png", label: "Detail Jahitan" }
  ],
  deskripsi: "Seragam casual kantor dengan tampilan santai namun tetap profesional.",
  deskripsi_lengkap: "Cocok untuk startup atau perusahaan modern yang ingin tampilan lebih santai. Tetap bisa custom logo dan identitas perusahaan.",
  bahan: "Cotton Combed / Lacoste",
  ukuran: "S, M, L, XL, XXL",
  minimal_order: "24 pcs",
  best_seller: true,
  warna: ["Putih", "Hitam", "Navy", "Abu-abu"]
},

{
  id: 7,
  nama: "Wearpack Safety Pro Reflective",
  kategori: "seragam",
  foto: [
    { url: "assets/img/katalog/wspr-depan.png", label: "Tampak Depan" },
    { url: "assets/img/katalog/wspr-blkg.png", label: "Tampak Belakang" },
    { url: "assets/img/katalog/wspr-detail.png", label: "Scotchlite Reflective" }
  ],
  deskripsi: "Wearpack safety dengan strip reflektif untuk keamanan kerja maksimal.",
  deskripsi_lengkap: "Dilengkapi scotchlite reflective yang terlihat di kondisi minim cahaya. Cocok untuk proyek konstruksi dan lapangan.",
  bahan: "Drill Tebal / Canvas",
  ukuran: "M, L, XL, XXL, XXXL",
  minimal_order: "12 pcs",
  best_seller: true,
  warna: ["Orange", "Navy", "Merah", "Warna Custom"]
},
{
  id: 8,
  nama: "Rompi Safety Proyek",
  kategori: "seragam",
  foto: [
    { url: "assets/img/katalog/rsp-depan.png", label: "Tampak Depan" },
    { url: "assets/img/katalog/rsp-blkg.png", label: "Tampak Belakang" },
    { url: "assets/img/katalog/rsp-detail.png", label: "Detail Kantong" }
  ],
  deskripsi: "Rompi safety ringan untuk kebutuhan proyek lapangan.",
  deskripsi_lengkap: "Rompi dengan banyak kantong dan reflective tape. Ringan dan nyaman digunakan untuk aktivitas proyek.",
  bahan: "Polyester Mesh",
  ukuran: "All Size",
  minimal_order: "24 pcs",
  best_seller: true,
  warna: ["Hijau Stabilo", "Orange"]
},
{
  id: 9,
  nama: "Jaket Safety Waterproof",
  kategori: "seragam",
  foto: [
    { url: null, label: "Tampak Depan" },
    { url: null, label: "Tampak Belakang" },
    { url: null, label: "Lapisan Dalam" }
  ],
  deskripsi: "Jaket safety tahan air untuk kondisi kerja ekstrem.",
  deskripsi_lengkap: "Dirancang untuk melindungi pekerja dari hujan dan angin. Dilengkapi lapisan dalam yang hangat.",
  bahan: "Taslan Waterproof / Parasut",
  ukuran: "M, L, XL, XXL",
  minimal_order: "12 pcs",
  best_seller: false,
  warna: ["Kuning", "Orange", "Hitam"]
},
{
  id: 10,
  nama: "Coverall Safety Full Body",
  kategori: "seragam",
  foto: [
    { url: null, label: "Tampak Depan" },
    { url: null, label: "Tampak Belakang" },
    { url: null, label: "Resleting" }
  ],
  deskripsi: "Coverall full body untuk perlindungan maksimal di area kerja.",
  deskripsi_lengkap: "Menutup seluruh tubuh dengan sistem resleting depan. Cocok untuk industri berat dan lingkungan berisiko tinggi.",
  bahan: "Canvas / Drill Heavy Duty",
  ukuran: "M, L, XL, XXL",
  minimal_order: "12 pcs",
  best_seller: false,
  warna: ["Navy", "Merah", "Abu-abu"]
},
{
  id: 11,
  nama: "Safety Shirt High Visibility",
  kategori: "seragam",
  foto: [
    { url: null, label: "Tampak Depan" },
    { url: null, label: "Tampak Belakang" },
    { url: null, label: "Detail Reflective" }
  ],
  deskripsi: "Kemeja safety dengan visibilitas tinggi untuk pekerja lapangan.",
  deskripsi_lengkap: "Menggunakan warna terang dan reflective tape untuk meningkatkan keamanan kerja di siang maupun malam hari.",
  bahan: "American Drill",
  ukuran: "M, L, XL, XXL",
  minimal_order: "12 pcs",
  best_seller: true,
  warna: ["Orange", "Kuning Stabilo"]
},

{
  id: 12,
  nama: "Wearpack Tambang Heavy Duty",
  kategori: "seragam",
  foto: [
    { url: null, label: "Tampak Depan" },
    { url: null, label: "Tampak Belakang" },
    { url: null, label: "Detail Jahitan" }
  ],
  deskripsi: "Wearpack khusus tambang dengan material super kuat.",
  deskripsi_lengkap: "Dirancang untuk kondisi ekstrem pertambangan dengan jahitan reinforced dan bahan tahan gesek tinggi.",
  bahan: "Canvas Heavy Duty / Drill Tebal",
  ukuran: "M, L, XL, XXL, XXXL",
  minimal_order: "12 pcs",
  best_seller: true,
  warna: ["Navy", "Orange"]
},
{
  id: 13,
  nama: "Seragam Operator Industri",
  kategori: "seragam",
  foto: [
    { url: null, label: "Tampak Depan" },
    { url: null, label: "Tampak Belakang" },
    { url: null, label: "Detail Kantong" }
  ],
  deskripsi: "Seragam untuk operator mesin dengan desain ergonomis.",
  deskripsi_lengkap: "Memberikan kenyamanan saat bekerja dalam durasi panjang. Dilengkapi kantong multifungsi.",
  bahan: "Drill / Twill",
  ukuran: "M, L, XL, XXL",
  minimal_order: "12 pcs",
  best_seller: false,
  warna: ["Abu-abu", "Biru", "Hitam"]
},
{
  id: 14,
  nama: "Seragam Mekanik Bengkel",
  kategori: "seragam",
  foto: [
    { url: null, label: "Tampak Depan" },
    { url: null, label: "Tampak Belakang" },
    { url: null, label: "Detail Resleting" }
  ],
  deskripsi: "Seragam khusus mekanik dengan ketahanan tinggi terhadap oli dan kotoran.",
  deskripsi_lengkap: "Didesain untuk pekerja bengkel dan teknisi dengan bahan yang tidak mudah menyerap noda.",
  bahan: "Drill Anti Oil",
  ukuran: "M, L, XL, XXL",
  minimal_order: "12 pcs",
  best_seller: true,
  warna: ["Hitam", "Navy", "Merah"]
},
{
  id: 15,
  nama: "Seragam Pabrik Manufacturing",
  kategori: "seragam",
  foto: [
    { url: null, label: "Tampak Depan" },
    { url: null, label: "Tampak Belakang" },
    { url: null, label: "Detail Lengan" }
  ],
  deskripsi: "Seragam standar pabrik dengan desain simple dan efisien.",
  deskripsi_lengkap: "Cocok untuk produksi massal dengan kenyamanan tinggi dan harga ekonomis.",
  bahan: "TC / Polyester",
  ukuran: "S, M, L, XL, XXL",
  minimal_order: "24 pcs",
  best_seller: true,
  warna: ["Biru", "Abu-abu"]
},
{
  id: 16,
  nama: "Seragam Teknisi Lapangan Industri",
  kategori: "seragam",
  foto: [
    { url: null, label: "Tampak Depan" },
    { url: null, label: "Tampak Belakang" },
    { url: null, label: "Detail Patch" }
  ],
  deskripsi: "Seragam teknisi lapangan dengan desain kuat dan fleksibel.",
  deskripsi_lengkap: "Dirancang untuk mobilitas tinggi dengan bahan fleksibel dan tahan lama, cocok untuk teknisi lapangan industri.",
  bahan: "Ripstop / American Drill",
  ukuran: "M, L, XL, XXL",
  minimal_order: "12 pcs",
  best_seller: false,
  warna: ["Army", "Hitam", "Navy"]
},
{
  id: 17,
  nama: "Kaos Promosi Cotton Combed 30s",
  kategori: "kaos",
  foto: [
    { url: null, label: "Tampak Depan" },
    { url: null, label: "Tampak Belakang" },
    { url: null, label: "Detail Sablon" }
  ],
  deskripsi: "Kaos promosi nyaman dengan bahan adem, cocok untuk event dan komunitas.",
  deskripsi_lengkap: "Menggunakan bahan cotton combed 30s yang lembut dan menyerap keringat. Bisa custom sablon full desain sesuai kebutuhan branding perusahaan atau event.",
  bahan: "Cotton Combed 30s",
  ukuran: "S, M, L, XL, XXL",
  minimal_order: "24 pcs",
  best_seller: true,
  warna: ["Putih", "Hitam", "Merah", "Biru", "Kuning"]
},
{
  id: 18,
  nama: "Kaos Polo Shirt Promosi",
  kategori: "kaos",
  foto: [
    { url: null, label: "Tampak Depan" },
    { url: null, label: "Tampak Belakang" },
    { url: null, label: "Detail Bordir Logo" }
  ],
  deskripsi: "Kaos polo elegan untuk promosi perusahaan dan event formal.",
  deskripsi_lengkap: "Cocok untuk branding perusahaan dengan tampilan lebih rapi dibanding kaos biasa. Logo bisa dibordir atau sablon sesuai kebutuhan.",
  bahan: "Lacoste Cotton / PE",
  ukuran: "S, M, L, XL, XXL",
  minimal_order: "24 pcs",
  best_seller: true,
  warna: ["Putih", "Hitam", "Navy", "Abu-abu"]
},
{
  id: 19,
  nama: "Jaket Hoodie Promosi Custom",
  kategori: "jaket",
  foto: [
    { url: null, label: "Tampak Depan" },
    { url: null, label: "Tampak Belakang" },
    { url: null, label: "Detail Sablon" }
  ],
  deskripsi: "Hoodie custom untuk kebutuhan promosi dan merchandise komunitas.",
  deskripsi_lengkap: "Jaket hoodie dengan desain kekinian, cocok untuk branding komunitas, event, dan merchandise. Bisa full sablon atau bordir.",
  bahan: "Fleece / Baby Terry",
  ukuran: "M, L, XL, XXL",
  minimal_order: "24 pcs",
  best_seller: true,
  warna: ["Hitam", "Abu-abu", "Navy"]
},
{
  id: 20,
  nama: "Jaket Windbreaker Promosi",
  kategori: "jaket",
  foto: [
    { url: null, label: "Tampak Depan" },
    { url: null, label: "Tampak Belakang" },
    { url: null, label: "Detail Resleting" }
  ],
  deskripsi: "Jaket ringan untuk promosi outdoor dan event lapangan.",
  deskripsi_lengkap: "Windbreaker dengan bahan ringan dan tahan angin, cocok untuk event luar ruangan dan aktivitas komunitas.",
  bahan: "Parasut / Taslan",
  ukuran: "M, L, XL, XXL",
  minimal_order: "24 pcs",
  best_seller: false,
  warna: ["Hitam", "Navy", "Merah"]
},
{
  id: 21,
  nama: "Jaket Varsity Promosi",
  kategori: "jaket",
  foto: [
    { url: null, label: "Tampak Depan" },
    { url: null, label: "Tampak Belakang" },
    { url: null, label: "Detail Bordir" }
  ],
  deskripsi: "Jaket varsity stylish untuk branding komunitas dan organisasi.",
  deskripsi_lengkap: "Desain jaket varsity modern dengan kombinasi warna menarik. Cocok untuk komunitas, sekolah, dan event branding.",
  bahan: "Fleece / Semi Wool",
  ukuran: "M, L, XL, XXL",
  minimal_order: "24 pcs",
  best_seller: true,
  warna: ["Hitam Putih", "Navy Putih", "Merah Putih"]
},

{
  id: 22,
  nama: "Topi Promosi Custom",
  kategori: "custom",
  foto: [
    { url: null, label: "Tampak Depan" },
    { url: null, label: "Tampak Belakang" },
    { url: null, label: "Detail Bordir Logo" }
  ],
  deskripsi: "Topi custom untuk media promosi brand yang efektif.",
  deskripsi_lengkap: "Topi dengan bordir logo perusahaan, cocok untuk event, giveaway, dan merchandise.",
  bahan: "Drill / Canvas",
  ukuran: "All Size",
  minimal_order: "50 pcs",
  best_seller: true,
  warna: ["Hitam", "Putih", "Navy"]
},
{
  id: 23,
  nama: "Totebag Promosi Custom",
  kategori: "custom",
  foto: [
    { url: null, label: "Tampak Depan" },
    { url: null, label: "Tampak Belakang" },
    { url: null, label: "Detail Sablon" }
  ],
  deskripsi: "Totebag custom untuk promosi ramah lingkungan.",
  deskripsi_lengkap: "Tas kain yang bisa dicustom desain sesuai branding. Cocok untuk seminar, event, dan souvenir.",
  bahan: "Canvas / Spunbond",
  ukuran: "Custom",
  minimal_order: "50 pcs",
  best_seller: true,
  warna: ["Putih", "Hitam", "Natural"]
},
{
  id: 24,
  nama: "Lanyard ID Card Promosi",
  kategori: "custom",
  foto: [
    { url: null, label: "Tampak Depan" },
    { url: null, label: "Detail Print" },
    { url: null, label: "Hook & Clip" }
  ],
  deskripsi: "Lanyard custom untuk kebutuhan event dan identitas karyawan.",
  deskripsi_lengkap: "Bisa full print dengan logo dan warna brand. Cocok untuk event, seminar, dan kebutuhan kantor.",
  bahan: "Polyester",
  ukuran: "Standard",
  minimal_order: "100 pcs",
  best_seller: true,
  warna: ["Custom"]
},
{
  id: 25,
  nama: "Goodie Bag Promosi Event",
  kategori: "custom",
  foto: [
    { url: null, label: "Tampak Depan" },
    { url: null, label: "Tampak Belakang" },
    { url: null, label: "Detail Handle" }
  ],
  deskripsi: "Tas promosi untuk kebutuhan event dan seminar.",
  deskripsi_lengkap: "Digunakan sebagai media branding sekaligus wadah souvenir event. Bisa custom desain dan ukuran.",
  bahan: "Spunbond / Canvas",
  ukuran: "Custom",
  minimal_order: "50 pcs",
  best_seller: false,
  warna: ["Custom"]
},
{
  id: 26,
  nama: "Tumbler Promosi Custom",
  kategori: "custom",
  foto: [
    { url: null, label: "Tampak Depan" },
    { url: null, label: "Detail Print" },
    { url: null, label: "Tutup Botol" }
  ],
  deskripsi: "Tumbler custom sebagai media promosi yang premium.",
  deskripsi_lengkap: "Produk souvenir eksklusif dengan branding logo perusahaan. Cocok untuk hadiah klien dan event khusus.",
  bahan: "Stainless / Plastik BPA Free",
  ukuran: "Standard",
  minimal_order: "50 pcs",
  best_seller: true,
  warna: ["Putih", "Hitam", "Silver"]
},

{
  id: 27,
  nama: "Tas Ransel Gunung (Carrier) Custom",
  kategori: "custom",
  foto: [
    { url: null, label: "Tampak Depan" },
    { url: null, label: "Tampak Belakang" },
    { url: null, label: "Detail Strap & Frame" }
  ],
  deskripsi: "Tas carrier untuk kegiatan outdoor dan ekspedisi dengan kapasitas besar.",
  deskripsi_lengkap: "Dirancang untuk kebutuhan hiking dan kegiatan alam, dilengkapi strap ergonomis dan banyak kompartemen. Bisa custom logo komunitas atau organisasi.",
  bahan: "Polyester D600 / D1680",
  ukuran: "40L, 60L, 80L",
  minimal_order: "24 pcs",
  best_seller: false,
  warna: ["Hitam", "Army", "Navy"]
},
{
  id: 28,
  nama: "Tas Sekolah Custom",
  kategori: "custom",
  foto: [
    { url: null, label: "Tampak Depan" },
    { url: null, label: "Tampak Belakang" },
    { url: null, label: "Detail Kompartemen" }
  ],
  deskripsi: "Tas sekolah dengan desain kuat dan nyaman untuk pelajar.",
  deskripsi_lengkap: "Cocok untuk kebutuhan sekolah dengan banyak kompartemen dan bahan tahan lama. Bisa custom logo sekolah atau yayasan.",
  bahan: "Polyester / D300",
  ukuran: "Standard",
  minimal_order: "50 pcs",
  best_seller: true,
  warna: ["Hitam", "Biru", "Merah"]
},
{
  id: 29,
  nama: "Tas Ransel Promosi (Backpack) Custom",
  kategori: "custom",
  foto: [
    { url: null, label: "Tampak Depan" },
    { url: null, label: "Tampak Belakang" },
    { url: null, label: "Detail Resleting" }
  ],
  deskripsi: "Tas ransel serbaguna untuk kebutuhan promosi dan corporate branding.",
  deskripsi_lengkap: "Desain modern dan fleksibel untuk event, seminar kit premium, atau merchandise perusahaan.",
  bahan: "Polyester / D1680",
  ukuran: "Standard",
  minimal_order: "50 pcs",
  best_seller: true,
  warna: ["Hitam", "Navy", "Abu-abu"]
},
{
  id: 30,
  nama: "Tas Selempang (Sling Bag) Custom",
  kategori: "custom",
  foto: [
    { url: null, label: "Tampak Depan" },
    { url: null, label: "Tampak Belakang" },
    { url: null, label: "Detail Strap" }
  ],
  deskripsi: "Tas selempang praktis untuk aktivitas harian dan promosi.",
  deskripsi_lengkap: "Desain compact dan ringan, cocok untuk komunitas, event, dan kebutuhan sehari-hari.",
  bahan: "Canvas / Polyester",
  ukuran: "Standard",
  minimal_order: "50 pcs",
  best_seller: true,
  warna: ["Hitam", "Navy", "Army"]
},
{
  id: 31,
  nama: "Tas Travel / Duffel Bag Custom",
  kategori: "custom",
  foto: [
    { url: null, label: "Tampak Depan" },
    { url: null, label: "Tampak Belakang" },
    { url: null, label: "Detail Resleting & Handle" }
  ],
  deskripsi: "Tas travel untuk kebutuhan perjalanan dan merchandise premium.",
  deskripsi_lengkap: "Kapasitas besar dan kuat, cocok untuk perjalanan, gym, atau corporate gift eksklusif.",
  bahan: "D1680 / Kanvas Tebal",
  ukuran: "Standard",
  minimal_order: "30 pcs",
  best_seller: false,
  warna: ["Hitam", "Navy"]
},

{
  id: 32,
  nama: "Cetak Banner & Spanduk Flexi",
  kategori: "custom",
  foto: [
    { url: null, label: "Contoh Banner" },
    { url: null, label: "Detail Print" },
    { url: null, label: "Pemasangan" }
  ],
  deskripsi: "Cetak banner dan spanduk untuk kebutuhan promosi indoor maupun outdoor.",
  deskripsi_lengkap: "Menggunakan bahan flexi dengan kualitas print tajam dan tahan cuaca. Cocok untuk promosi toko, event, dan kampanye.",
  bahan: "Flexi China / Korea / Jerman",
  ukuran: "Custom",
  minimal_order: "1 pcs",
  best_seller: true,
  warna: ["Full Color"]
},
{
  id: 33,
  nama: "Cetak Baliho Outdoor",
  kategori: "custom",
  foto: [
    { url: null, label: "Tampilan Baliho" },
    { url: null, label: "Detail Ukuran" },
    { url: null, label: "Proses Cetak" }
  ],
  deskripsi: "Baliho ukuran besar untuk kebutuhan promosi skala besar.",
  deskripsi_lengkap: "Cocok untuk branding perusahaan, kampanye, dan iklan outdoor dengan ukuran besar dan visibilitas tinggi.",
  bahan: "Flexi Jerman / Korea",
  ukuran: "Custom (besar)",
  minimal_order: "1 pcs",
  best_seller: true,
  warna: ["Full Color"]
},
{
  id: 34,
  nama: "Cetak Poster Promosi",
  kategori: "custom",
  foto: [
    { url: null, label: "Contoh Poster" },
    { url: null, label: "Detail Kertas" },
    { url: null, label: "Hasil Cetak" }
  ],
  deskripsi: "Poster promosi untuk event, kampanye, dan branding.",
  deskripsi_lengkap: "Dicetak dengan kualitas warna tajam menggunakan kertas berkualitas. Cocok untuk indoor dan display promosi.",
  bahan: "Art Paper / Art Carton",
  ukuran: "A3, A2, A1",
  minimal_order: "10 pcs",
  best_seller: true,
  warna: ["Full Color"]
},
{
  id: 35,
  nama: "Cetak Brosur & Flyer",
  kategori: "custom",
  foto: [
    { url: null, label: "Contoh Brosur" },
    { url: null, label: "Detail Lipatan" },
    { url: null, label: "Hasil Cetak" }
  ],
  deskripsi: "Brosur dan flyer untuk media promosi distribusi massal.",
  deskripsi_lengkap: "Cocok untuk promosi produk, event, dan jasa. Bisa custom ukuran dan model lipatan sesuai kebutuhan.",
  bahan: "Art Paper / HVS",
  ukuran: "A5, A4, Custom",
  minimal_order: "100 pcs",
  best_seller: true,
  warna: ["Full Color"]
},
{
  id: 36,
  nama: "Cetak Stiker & Label Produk",
  kategori: "custom",
  foto: [
    { url: null, label: "Contoh Stiker" },
    { url: null, label: "Detail Cutting" },
    { url: null, label: "Hasil Tempel" }
  ],
  deskripsi: "Stiker custom untuk branding produk dan kemasan.",
  deskripsi_lengkap: "Menggunakan bahan vinyl atau kertas stiker dengan hasil cetak tajam dan tahan lama. Bisa die-cut sesuai bentuk.",
  bahan: "Vinyl / Chromo",
  ukuran: "Custom",
  minimal_order: "100 pcs",
  best_seller: true,
  warna: ["Full Color"]
}
];

// ─────────────────────────────────────
// PORTFOLIO  (ganti foto: url dengan path/URL asli)
// ─────────────────────────────────────
const PORTFOLIO = [
  {
  id: 1,
  judul: "Pengadaan Seragam Tambang PT Amman",
  klien: "PT Amman Mineral Internasional Tbk",
  kategori: "Seragam Industri",
  qty: "12000 pcs",
  deskripsi: "Produksi massal seragam tambang untuk PT Amman dengan standar industri pertambangan. Mengutamakan bahan kuat, jahitan rapi, serta kenyamanan untuk aktivitas kerja lapangan.",
  foto: "assets/img/pt_amman.png"
},
{
  id: 2,
  judul: "Jersey & Polo Custom untuk Brand Ice Cream",
  klien: "PT Halocoko Ice Cream Indonesia",
  kategori: "Seragam Promosi",
  qty: "50000 pcs",
  deskripsi: "Pembuatan jersey oneck dan polo shirt custom dalam jumlah besar untuk kebutuhan promosi brand. Menggunakan bahan nyaman dengan sablon dan bordir berkualitas tinggi.",
  foto: "assets/img/halocoko.jpeg"
},
{
  id: 3,
  judul: "Seragam dan Atribut Karyawan",
  klien: "PT Batara Integra Nusa",
  kategori: "Seragam Perusahaan",
  qty: "Custom Order",
  deskripsi: "Pengadaan seragam kerja lengkap beserta atribut perusahaan seperti bordir logo dan identitas karyawan untuk meningkatkan profesionalitas dan branding perusahaan.",
  foto: "assets/img/pt_bin.png"
},
{
  id: 4,
  judul: "Pembuatan Sepatu Gunung Outdoor",
  klien: "PT Apex Nusantara Industry",
  kategori: "Produk Outdoor",
  qty: "100 pcs",
  deskripsi: "Produksi sepatu gunung dengan material kuat dan desain ergonomis untuk aktivitas outdoor dan lapangan. Cocok untuk kebutuhan industri maupun komunitas.",
  foto: "assets/img/sepatu_apex.png"
},
{
  id: 5,
  judul: "Box Sepatu Premium Custom",
  klien: "Putra Passarella",
  kategori: "Packaging",
  qty: "150 pcs",
  deskripsi: "Pembuatan box sepatu premium dengan desain eksklusif untuk meningkatkan nilai brand dan tampilan produk.",
  foto: "assets/img/box_sepatu_pp.png"
},
{
  id: 6,
  judul: "Handuk Promosi Bordir Custom",
  klien: "PT Kaluli Ice Cream Indonesia",
  kategori: "Merchandise Promosi",
  qty: "300 pcs",
  deskripsi: "Produksi handuk promosi dengan bordir logo perusahaan. Cocok untuk kebutuhan branding dan souvenir perusahaan.",
  foto: "assets/img/handuk_kaluli.png"
}
];

// ─────────────────────────────────────
// Helper Functions
// ─────────────────────────────────────
function openWhatsApp(productName) {
  const msg = `Halo, saya tertarik dengan produk *${productName}*, mohon info lebih lanjut.`;
  window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank');
}

function openWhatsAppGeneral(message) {
  const text = message || "Halo, saya ingin berkonsultasi mengenai produk CV Mahkota Berkah Semesta.";
  window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`, '_blank');
}

function openCompanyProfile() {
  window.open(COMPANY_PROFILE_URL, '_blank');
}
