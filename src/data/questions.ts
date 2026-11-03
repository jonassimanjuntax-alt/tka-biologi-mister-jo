import { Question } from '../types/biology';

export const QUESTIONS_DATA: Question[] = [
  // 1. PG - Keanekaragaman Hayati
  {
    id: 1,
    type: 'PG',
    topic: 'Keanekaragaman Hayati dan Klasifikasi',
    subtopic: 'Tingkat Keanekaragaman Gen, Spesies, dan Ekosistem',
    difficulty: 'Menengah',
    cognitiveLevel: 'C4 (Menganalisis)',
    stimulusTitle: 'Fenomena Variasi Karakter Agrikultur di Perkebunan Nusantara',
    stimulusType: 'paragraph',
    stimulusContent: `Seorang agronomis meneliti empat kelompok tanaman pangan lokal Indonesia:
Kelompok 1: Mangga arumanis, mangga golek, mangga manalagi, dan mangga gedong gincu (Mangifera indica).
Kelompok 2: Kelapa kopyor (Cocos nucifera), pinang (Areca catechu), aren (Arenga pinnata), dan lontar (Borassus flabellifer).
Kelompok 3: Harimau sumatra (Panthera tigris sumatrae), singa afrika (Panthera leo), dan jaguar (Panthera onca).
Kelompok 4: Ekosistem hutan hujan tropis Bukit Duabelas, hutan bakau Alas Purwo, dan savana Baluran.

Agronomis tersebut ingin memanfaatkan kelompok organisme yang memiliki variasi susunan alel pada lokus gen yang sama dalam satu spesies guna merakit varietas tanaman baru yang tahan kekeringan melalui pemuliaan tanaman silang.`,
    questionText: 'Berdasarkan fenomena tersebut, kelompok tanaman yang mewakili keanekaragaman hayati tingkat gen dan paling tepat dimanfaatkan agronomis untuk program persilangan adalah...',
    options: [
      { key: 'A', text: 'Kelompok 1, karena merupakan variasi susunan gen dalam satu spesies (Mangifera indica) yang masih fertil jika disilangkan' },
      { key: 'B', text: 'Kelompok 2, karena memiliki adaptasi morfologi berbeda dalam satu famili Arecaceae' },
      { key: 'C', text: 'Kelompok 3, karena menunjukkan variasi antarspesies yang tergabung dalam satu genus Panthera' },
      { key: 'D', text: 'Kelompok 4, karena memiliki faktor abiotik dan komposisi vegetasi yang unik' },
      { key: 'E', text: 'Kelompok 1 dan 2, karena keduanya sama-sama tergolong kelompok tumbuhan monokotil produktif' }
    ],
    correctAnswer: 'A',
    pembahasan: {
      a_memahamiPersoalan: 'Menentukan kelompok organisme yang merepresentasikan keanekaragaman hayati tingkat gen dan memenuhi syarat persilangan biologi.',
      b_identifikasiInformasi: 'Kelompok 1 terdiri atas berbagai kultivar mangga (Mangifera indica), yaitu satu spesies yang sama dengan variasi penampakan (fenotipe) akibat susunan alel (genotipe) yang berbeda.',
      c_konsepBiologi: 'Keanekaragaman gen adalah variasi dalam satu spesies. Individu dalam satu spesies dapat saling kawin dan menghasilkan keturunan fertil. Keanekaragaman spesies mencakup perbedaan antarspesies dalam satu familia/genus (kelompok 2 dan 3). Keanekaragaman ekosistem mencakup variasi komunitas dan komponen abiotik (kelompok 4).',
      d_analisisPenalaran: 'Karena agronomis ingin melakukan pemuliaan silang yang menghasilkan keturunan fertil, organisme harus berada dalam satu spesies yang sama. Kelompok 1 adalah varietas/kultivar dari Mangifera indica. Perbedaan aroma, rasa buah, dan kadar gula disebabkan perbedaan kombinasi alel (tingkat gen).',
      e_kesimpulan: 'Jawaban yang tepat adalah A, karena Kelompok 1 merupakan variasi genetik intraspesifik.',
      f_analisisOpsi: 'Opsi B salah (keanekaragaman tingkat jenis dalam famili Arecaceae). Opsi C salah (tingkat jenis genus Panthera). Opsi D salah (tingkat ekosistem). Opsi E salah (mangga adalah dikotil, bukan monokotil).'
    },
    caraCepat: 'Kunci cepat: Tingkat GEN selalu merujuk pada "satu nama spesies Latin yang sama, namun beda varietas/ras/kultivar". Mangifera indica arumanis vs golek adalah satu spesies, sehingga tingkat gen.',
    narasi: {
      stimulus: 'Halo, selamat datang di soal nomor satu! Perhatikan baik-baik nama ilmiah dari keempat kelompok tanaman dan hewan yang disajikan. Coba amati kelompok mana yang masih berada di bawah satu payung spesies yang identik.',
      pertanyaan: 'Nah, agronomis ingin melakukan persilangan yang fertil. Ingat aturan dasar biologi reproduksi: hanya individu satu spesies yang menghasilkan keturunan fertil.',
      pembahasan: 'Mari kita telusuri: keanekaragaman gen terjadi karena variasi urutan basa nitrogen atau kombinasi alel dalam satu spesies tunggal seperti Mangifera indica.',
      caraCepat: 'Cara cepatnya: cek nama spesies Latin. Jika jenisnya sama persis yaitu Mangifera indica namun memiliki kultivar berbeda, itu pasti keanekaragaman tingkat gen!',
      refleksiBenar: 'Keren! Pemahaman dasar konsep keanekaragaman genetikamu sudah sangat mantap.',
      refleksiSalah: 'Jangan terkecoh antara tingkat gen dan jenis. Cek selalu nama spesies ilmiahnya ya.'
    }
  },

  // 2. PGK - Bakteri
  {
    id: 2,
    type: 'PGK',
    topic: 'Bakteri',
    subtopic: 'Struktur Dinding Sel Gram Positif dan Gram Negatif',
    difficulty: 'Sulit',
    cognitiveLevel: 'C4 (Menganalisis)',
    stimulusTitle: 'Analisis Mikroskopis Dinding Sel Dua Spesies Bakteri Patogen',
    stimulusType: 'diagram',
    stimulusContent: `Di laboratorium mikrobiologi klinik, dua isolat bakteri patogen dianalisis menggunakan metode pewarnaan Gram dan uji ketahanan antibiotik beta-laktam. 
Isolat X: Berwarna ungu kristal violet saat diamati di bawah mikroskop, dinding sel memiliki lapisan peptidoglikan berlapis banyak (20–80 nm) serta mengandung asam teikoat.
Isolat Y: Berwarna merah safranin, memiliki lapisan peptidoglikan tipis (2–7 nm) di ruang periplasma, serta dilapisi membran luar bilayer yang kaya akan molekul lipopolisakarida (LPS) dan porin protein.`,
    diagramId: 'diagram-bakteri-gram',
    questionText: 'Pilihlah seluruh kesimpulan ilmiah yang BENAR mengenai karakteristik biokimia dan implikasi klinis dari kedua isolat bakteri tersebut! (Pilihlah lebih dari satu opsi)',
    options: [
      { key: 'A', text: 'Isolat X merupakan bakteri Gram positif yang dinding selnya mempertahankan kompleks zat warna kristal violet-iodin saat didekolorisasi alkohol' },
      { key: 'B', text: 'Isolat Y merupakan bakteri Gram negatif yang memiliki endotoksin berupa Lipid A pada membran luar lipopolisakaridanya' },
      { key: 'C', text: 'Isolat Y secara alami memiliki resistensi intrinsik lebih tinggi terhadap antibiotik penisilin dibanding Isolat X karena membran luarnya menghalangi penetrasi obat' },
      { key: 'D', text: 'Pemberian lisozim saliva akan lebih mudah mendegradasi ikatan glikosidik peptidoglikan pada Isolat Y secara langsung tanpa pretreatment kimiawi' },
      { key: 'E', text: 'Kedua isolat sama-sama tergolong eukariotik karena memiliki membran sel fosfolipid bilayer dan dinding sel polisakarida' }
    ],
    correctAnswers: ['A', 'B', 'C'],
    pembahasan: {
      a_memahamiPersoalan: 'Menganalisis perbedaan biokimia, pewarnaan Gram, dan respon antibiotik antara bakteri Gram positif (Isolat X) dan Gram negatif (Isolat Y).',
      b_identifikasiInformasi: 'Isolat X = Gram positif (peptidoglikan tebal, asam teikoat, warna ungu). Isolat Y = Gram negatif (peptidoglikan tipis, membran luar LPS, warna merah).',
      c_konsepBiologi: 'Bakteri Gram positif mempertahankan zat warna kristal violet karena pori peptidoglikan menciut saat dehidrasi alkohol. Bakteri Gram negatif memiliki membran luar LPS dengan lipid A yang bersifat endotoksin dan menghalangi molekul hidrofobik serta penisilin.',
      d_analisisPenalaran: 'Opsi A benar: isolat X mempertahankan kristal violet. Opsi B benar: LPS pada Gram negatif mengandung komponen toksik Lipid A. Opsi C benar: membran luar bertindak sebagai barier permeabilitas efektif terhadap penisilin G. Opsi D salah: lisozim justru lebih efektif menghidrolisis peptidoglikan Gram positif yang terbuka tanpa penghalang membran luar. Opsi E salah: bakteri adalah prokariotik, bukan eukariotik.',
      e_kesimpulan: 'Opsi yang benar adalah A, B, dan C.',
      f_analisisOpsi: 'A: Benar. B: Benar. C: Benar. D: Salah (Gram negatif terlindung oleh membran luar LPS). E: Salah (Bakteri adalah prokariotik).'
    },
    caraCepat: 'Trik cepat: Ingat akronim NEG-MER-LPS (Gram Negatif = Merah Safranin + Membran Luar LPS endotoksin + lebih kebal penisilin). Gram Positif = Ungu + Peptidoglikan tebal.',
    narasi: {
      stimulus: 'Mari kita teliti struktur dinding sel bakteri pada diagram. Perhatikan perbedaan ketebalan peptidoglikan dan adanya membran luar pada isolat Y.',
      pertanyaan: 'Ingat, ini adalah soal Pilihan Ganda Kompleks. Pilih seluruh pernyataan yang valid secara konsep mikrobiologi kedokteran.',
      pembahasan: 'Membran luar pada Gram negatif adalah perisai pelindung yang menyebabkan penisilin sulit menembus ruang periplasma, sementara lipid A di dalamnya memicu syok sepsis.',
      caraCepat: 'Trik cepat: Jangan pilih opsi yang menyebut bakteri eukariotik atau lisozim mudah menghancurkan Gram negatif tanpa merusak membran luarnya.',
      refleksiBenar: 'Luar biasa! Ketelitianmu membaca struktur molekul dinding sel bakteri terbukti sangat tajam.',
      refleksiSalah: 'Perhatikan bahwa bakteri adalah organisme prokariotik dan membran luar LPS menghalangi lisozim.'
    }
  },

  // 3. BS - Ekosistem
  {
    id: 3,
    type: 'BS',
    topic: 'Ekosistem',
    subtopic: 'Aliran Energi, Tingkat Trofik, dan Siklus Materi',
    difficulty: 'Menengah',
    cognitiveLevel: 'C4 (Menganalisis)',
    stimulusTitle: 'Dinamika Aliran Energi pada Ekosistem Danau Alami',
    stimulusType: 'paragraph',
    stimulusContent: `Pada sebuah ekosistem perairan danau di Jawa Barat, energi radiasi matahari yang diserap oleh fitoplankton (produsen primer) tercatat sebesar 10.000 kkal/m²/tahun. Berdasarkan hukum termodinamika II dan hukum Lindeman (efisiensi trofik sekitar 10%), sebagian besar energi yang berpindah ke zooplankton (konsumen I), ikan kecil (konsumen II), dan burung pemakan ikan (konsumen puncak) terdisipasi ke lingkungan dalam bentuk panas respirasi, feses, dan sisa biomassa tidak termakan. Sementara itu, materi kimiawi berupa karbon, nitrogen, dan fosfor terus mengalami daur ulang melalui aktivitas bakteri dekomposer.`,
    questionText: 'Tentukan BENAR atau SALAH untuk setiap pernyataan ilmiah berikut mengenai dinamika aliran energi dan siklus materi!',
    statements: [
      {
        id: 1,
        text: 'Aliran energi bersifat satu arah (unidirectional) dan tidak dapat didaur ulang, sedangkan unsur materi biogeokimia mengalir dalam siklus tertutup di dalam biosfer.',
        correct: true
      },
      {
        id: 2,
        text: 'Energi kimia yang tersedia pada biomassa konsumen II (ikan kecil) secara teoritis diestimasikan sebesar 100 kkal/m²/tahun jika efisiensi ekologis antar-trofik tepat 10%.',
        correct: true
      },
      {
        id: 3,
        text: 'Piramida energi pada ekosistem danau tersebut dapat mengalami bentuk terbalik (inverted) apabila biomassa zooplankton sesaat melebihi biomassa fitoplankton.',
        correct: false
      }
    ],
    pembahasan: {
      a_memahamiPersoalan: 'Memvalidasi tiga pernyataan tentang sifat aliran energi, perhitungan efisiensi trofik 10%, dan hukum bentuk piramida energi.',
      b_identifikasiInformasi: 'Energi produsen = 10.000 kkal/m²/tahun. Efisiensi trofik = 10%.',
      c_konsepBiologi: 'Aliran energi selalu satu arah dari matahari -> produsen -> konsumen -> panas terdisipasi. Piramida energi TIDAK PERNAH terbalik karena selalu tunduk pada hukum termodinamika (energi selalu berkurang di tingkat trofik lebih tinggi). Yang bisa terbalik hanyalah piramida biomassa atau jumlah.',
      d_analisisPenalaran: 'Pernyataan 1: BENAR. Energi satu arah (tidak bersiklus), sedangkan materi bersiklus. Pernyataan 2: BENAR. Produsen (10.000) -> Konsumen I (1.000) -> Konsumen II (100 kkal). Pernyataan 3: SALAH. Piramida biomassa pada perairan memang bisa terbalik sesaat, namun piramida ENERGI tidak pernah terbalik dalam kondisi ekosistem alami manapun.',
      e_kesimpulan: 'Pernyataan 1 = Benar, Pernyataan 2 = Benar, Pernyataan 3 = Salah.',
      f_analisisOpsi: '1: Benar (aliran energi searah, materi bersiklus). 2: Benar (10.000 x 10% x 10% = 100 kkal). 3: Salah (piramida energi selalu tegak lurus ke atas).'
    },
    caraCepat: 'Trik cepat: Piramida ENERGI tidak pernah terbalik (selalu tegak). Jadi setiap pernyataan yang mengatakan piramida energi bisa terbalik otomatis SALAH!',
    narasi: {
      stimulus: 'Pada soal nomor tiga ini, cermati perbedaan esensial antara siklus materi dan aliran energi. Perhatikan juga hukum 10 persen Lindeman.',
      pertanyaan: 'Tentukan kebenaran masing-masing pernyataan secara teliti. Waspadai jebakan antara istilah piramida energi dan piramida biomassa!',
      pembahasan: 'Kunci mutlak termodinamika: piramida energi tidak pernah terbalik karena entropi selalu meningkat di setiap transfer tingkatan trofik.',
      caraCepat: 'Trik kilat: begitu melihat kalimat "piramida energi terbalik", langsung putuskan SALAH.',
      refleksiBenar: 'Tepat sekali! Membedakan sifat energi dan materi adalah fondasi penting ekologi modern.',
      refleksiSalah: 'Ingat, piramida biomassa perairan bisa terbalik, tapi piramida energi TIDAK PERNAH terbalik.'
    }
  },

  // 4. PG - Metabolisme Sel dan Enzim
  {
    id: 4,
    type: 'PG',
    topic: 'Metabolisme Sel dan Enzim',
    subtopic: 'Pengaruh Suhu terhadap Aktivitas Enzim dan Energi Aktivasi',
    difficulty: 'Menengah',
    cognitiveLevel: 'C4 (Menganalisis)',
    stimulusTitle: 'Kurva Kinetika Enzim Amilase Manusia pada Berbagai Suhu',
    stimulusType: 'graph',
    stimulusContent: `Uji laboratorium dilakukan untuk mengukur laju pemecahan amilum menjadi maltosa oleh enzim amilase saliva manusia pada rentang suhu 0°C hingga 65°C pada pH konstan 6,8.
Hasil pengukuran menghasilkan grafik laju reaksi:
- Pada suhu 0°C–37°C: Laju reaksi meningkat secara eksponensial dari 2 μmol/menit hingga mencapai puncak optimal 28 μmol/menit pada suhu 37°C.
- Pada suhu di atas 40°C: Laju reaksi mengalami penurunan curam hingga mencapai 0 μmol/menit pada suhu 60°C.`,
    diagramId: 'diagram-enzim-kinetika',
    questionText: 'Penyebab penurunan drastis laju reaksi amilase saliva saat suhu dinaikkan melampaui 45°C adalah...',
    options: [
      { key: 'A', text: 'Terjadinya denaturasi protein enzim akibat rusaknya ikatan hidrogen dan disulfida yang mengubah konformasi sisi aktif' },
      { key: 'B', text: 'Penurunan energi kinetik substrat sehingga frekuensi tumbukan efektif antara substrat dan enzim menurun tajam' },
      { key: 'C', text: 'Enzim mengalami inaktivasi reversibel dan akan kembali aktif jika didinginkan kembali ke suhu 37°C' },
      { key: 'D', text: 'Substrat amilum mengalami hidrolisis spontan sebelum sempat berikatan dengan sisi alosterik enzim' },
      { key: 'E', text: 'Perubahan muatan ionik pada larutan penyangga yang menyebabkan pH berubah menjadi sangat asam' }
    ],
    correctAnswer: 'A',
    pembahasan: {
      a_memahamiPersoalan: 'Menjelaskan mekanisme molekuler di balik hilangnya aktivitas enzimatik pada suhu tinggi (di atas suhu optimum).',
      b_identifikasiInformasi: 'Pada grafik, setelah melewati puncak optimum 37°C, laju reaksi anjlok menuju nol pada suhu >45°C-60°C.',
      c_konsepBiologi: 'Enzim adalah protein globular yang fungsi katalitiknya bergantung pada konformasi 3 dimensi sisi aktifnya. Kenaikan suhu awal menambah energi kinetik tumbukan molekul. Namun, suhu berlebih memutuskan ikatan hidrogen, van der Waals, dan jembatan disulfida (denaturasi termal), bersifat ireversibel.',
      d_analisisPenalaran: 'Pada suhu >45°C, panas menyebabkan vibrasi hebat rantai polipeptida, merusak ikatan nonkovalen penstabil struktur tersier dan kuartener. Akibatnya, geometri sisi aktif rusak total dan substrat tidak bisa lagi terikat. Inaktivasi reversibel hanya terjadi pada suhu rendah (beku), bukan suhu panas.',
      e_kesimpulan: 'Jawaban yang tepat adalah A, denaturasi protein enzim akibat kerusakan ikatan penstabil struktur tersier.',
      f_analisisOpsi: 'B salah (energi kinetik justru meningkat pada suhu tinggi). C salah (denaturasi akibat panas bersifat permanen/ireversibel). D salah (amilum tidak terhidrolisis spontan). E salah (stimulus menyatakan pH dijaga konstan).'
    },
    caraCepat: 'Trik cepat: Suhu rendah (<37°C) = enzim inaktif reversibel (tumbukan lambat). Suhu tinggi (>45°C) = DENATURASI protein (sisi aktif rusak permanen).',
    narasi: {
      stimulus: 'Perhatikan Grafik 1 pengaruh suhu terhadap enzim. Titik puncak berada pada 37 derajat Celsius, suhu fisiologis tubuh manusia.',
      pertanyaan: 'Fokus pada apa yang terjadi pada molekul protein enzim saat dipanaskan melebihi batas toleransi termal.',
      pembahasan: 'Panas merusak ikatan kimia tersier penyusun sisi aktif enzim, fenomena ini disebut denaturasi termal ireversibel.',
      caraCepat: 'Cara cepatnya: ingat kata kunci suhu tinggi sama dengan DENATURASI dan perubahan konformasi tiga dimensi sisi aktif.',
      refleksiBenar: 'Mantap! Analisis biokimia enzimmu sudah tepat sesuai teori kinetika.',
      refleksiSalah: 'Ingat ya, inaktivasi reversibel hanya untuk pendinginan, sedangkan pemanasan menyebabkan denaturasi.'
    }
  },

  // 5. PGK - Katabolisme dan Respirasi Sel
  {
    id: 5,
    type: 'PGK',
    topic: 'Katabolisme dan Respirasi Sel',
    subtopic: 'Tahapan Respirasi Aerob, Akseptor Elektron, dan Fosforilasi Oksidatif',
    difficulty: 'Sulit',
    cognitiveLevel: 'C4 (Menganalisis)',
    stimulusTitle: 'Pemberian Racun Sianida pada Suspensi Mitokondria Terisolasi',
    stimulusType: 'paragraph',
    stimulusContent: `Dalam percobaan biokimia seluler, suspensi mitokondria aktif diberikan molekul glukosa dan substrat piruvat dalam tabung reaksi yang kaya oksigen. 
Pada menit ke-10, ditambahkan inhibitor metabolik kalium sianida (KCN). Sianida berikatan kuat dengan ion Fe³⁺ pada kompleks sitokrom c oksidase (Kompleks IV) pada membran dalam mitokondria, sehingga mencegah transfer elektron terakhir menuju oksigen molekuler (O₂).

Peneliti mengamati perubahan pada laju respirasi, konsumsi O₂, gradien elektrokimia proton (H⁺) antarmembran, dan laju sintesis ATP oleh kompleks ATP sintase.`,
    questionText: 'Manakah pernyataan yang BENAR mengenai dampak molekuler dari pemberian sianida tersebut terhadap respirasi sel? (Pilihlah lebih dari satu opsi)',
    options: [
      { key: 'A', text: 'Konsumsi oksigen (O₂) oleh mitokondria akan terhenti karena Kompleks IV tidak dapat lagi mentransfer elektron ke O₂ untuk membentuk H₂O' },
      { key: 'B', text: 'Pemompaan proton (H⁺) ke ruang antarmembran mitokondria terhenti sehingga gradien pH antarmembran dan matriks menghilang' },
      { key: 'C', text: 'Sintesis ATP oleh kompleks ATP sintase menurun drastis karena hilangnya gaya gerak proton (proton motive force)' },
      { key: 'D', text: 'NADH dan FADH₂ akan menumpuk dalam bentuk tereduksi karena rantai transpor elektron tidak dapat lagi menerima elektron baru' },
      { key: 'E', text: 'Laju glikolisis anaerob pada sitosol akan terhenti total karena piruvat kinase terinhibisi langsung oleh molekul sianida' }
    ],
    correctAnswers: ['A', 'B', 'C', 'D'],
    pembahasan: {
      a_memahamiPersoalan: 'Menganalisis dampak inhibisi Kompleks IV rantai transpor elektron oleh sianida terhadap proses fosforilasi oksidatif dan metabolisme sel.',
      b_identifikasiInformasi: 'Sianida memblokir Kompleks IV (sitokrom c oksidase), tempat akhir transfer elektron ke akseptor O₂.',
      c_konsepBiologi: 'Rantai transpor elektron mengalirkan elektron dari NADH/FADH₂ melalui Kompleks I, II, III, IV ke O₂. Aliran ini memompa proton H⁺ ke ruang antarmembran menghasilkan proton motive force untuk menggerakkan ATP sintase. Jika Kompleks IV terblokir, seluruh rantai macet: elektron tertahan, NADH/FADH₂ tidak teroksidasi, gradien proton hilang, ATP fosforilasi oksidatif runtuh.',
      d_analisisPenalaran: 'Opsi A benar: O₂ tidak menerima elektron -> konsumsi O₂ nol. Opsi B benar: pemompaan H⁺ berhenti -> gradien lenyap. Opsi C benar: tanpa gradien proton, ATP sintase berhenti berputar. Opsi D benar: NADH menumpuk karena tidak ada NAD⁺ bebas dari rantai transpor. Opsi E salah: glikolisis justru akan dipacu melalui fermentasi laktat untuk menghasilkan sedikit ATP darurat, sianida tidak menghambat piruvat kinase secara langsung.',
      e_kesimpulan: 'Opsi A, B, C, dan D benar.',
      f_analisisOpsi: 'A, B, C, D tepat sesuai kaskade hambatan transpor elektron. E keliru karena glikolisis terjadi di sitoplasma dan justru mengalami kompensasi pasteur effect.'
    },
    caraCepat: 'Trik cepat: Bayangkan rantai transpor elektron seperti bendungan air. Jika pintu akhir (Kompleks IV) ditutup: O₂ berhenti dipakai, elektron macet di belakang (NADH menumpuk), pompa H⁺ mati, turbin ATP sintase mogok. Jadi A, B, C, D semuanya benar!',
    narasi: {
      stimulus: 'Pada soal nomor lima ini, kita menginvestigasi mekanisme racun sianida. Ingat bahwa sianida menyerang Kompleks IV rantai transpor elektron.',
      pertanyaan: 'Ini adalah soal Pilihan Ganda Kompleks. Telusuri efek berantai dari tersumbatnya aliran elektron terhadap pemompaan proton dan pembentukan ATP.',
      pembahasan: 'Pemblokiran Kompleks IV menyebabkan elektron macet total di seluruh kompleks sebelumnya, melenyapkan gradien proton, dan menghentikan kerja ATP sintase.',
      caraCepat: 'Strategi efisien: kaitkan terhentinya Kompleks IV langsung dengan penurunan konsumsi O2, penumpukan NADH, hilangnya gaya gerak proton, dan anjloknya ATP.',
      refleksiBenar: 'Analisis kaskade biokimia respirasi kamu sungguh komprehensif dan akurat!',
      refleksiSalah: 'Ingat, glikolisis tidak dihambat langsung oleh sianida, bahkan sering dipacu untuk kompensasi energi.'
    }
  },

  // 6. BS - Anabolisme dan Fotosintesis
  {
    id: 6,
    type: 'BS',
    topic: 'Anabolisme dan Fotosintesis',
    subtopic: 'Reaksi Terang, Siklus Calvin, dan Fotofosforilasi',
    difficulty: 'Sulit',
    cognitiveLevel: 'C5 (Mengevaluasi)',
    stimulusTitle: 'Eksperimen Fraksinasi Kloroplas dan Pemberian Radiasi Cahaya Monokromatik',
    stimulusType: 'diagram',
    stimulusContent: `Dua tabung reaksi berisi fraksi organel kloroplas yang dipisahkan:
Tabung P (Fraksi Tilakoid Utuh): Mengandung membran tilakoid, fotosistem I (P700), fotosistem II (P680), kompleks sitokrom b6f, dan ATP sintase dalam larutan penyangga berair dengan ion Mg²⁺, ADP, Pi, dan NADP⁺.
Tabung Q (Fraksi Stroma Bebas Membran): Mengandung enzim-enzim larut air siklus Calvin termasuk RuBisCO, serta substrat ribulosa-1,5-bisfosfat (RuBP) dan dilarutkan gas CO₂ berlabel ¹⁴C, namun bebas dari membran tilakoid dan pigmen klorofil.

Kedua tabung diuji di bawah penyinaran cahaya dan kondisi gelap.`,
    diagramId: 'diagram-kloroplas',
    questionText: 'Evaluasilah validitas ilmiah dari pernyataan-pernyataan berikut mengenai reaksi fotosintesis pada kedua tabung!',
    statements: [
      {
        id: 1,
        text: 'Tabung P yang disinari cahaya dapat memproduksi ATP, NADPH, dan gas oksigen (O₂) melalui fotolisis molekul air pada lumen tilakoid.',
        correct: true
      },
      {
        id: 2,
        text: 'Tabung Q dalam kondisi gelap gulita dapat membentuk senyawa triosa fosfat (PGAL) berlabel ¹⁴C secara berkelanjutan tanpa batas waktu asalkan gas CO₂ terus dialirkan.',
        correct: false
      },
      {
        id: 3,
        text: 'Jika produk dari Tabung P yang disinari (ATP dan NADPH) dipindahkan ke Tabung Q di tempat gelap, maka fiksasi ¹⁴CO₂ dan reduksi 3-PGA menjadi G3P dapat berlangsung.',
        correct: true
      }
    ],
    pembahasan: {
      a_memahamiPersoalan: 'Mengevaluasi ketergantungan biokimiawi antara Reaksi Terang (pada tilakoid) dan Siklus Calvin (pada stroma).',
      b_identifikasiInformasi: 'Tabung P memiliki mesin reaksi terang (tilakoid). Tabung Q memiliki mesin siklus Calvin (stroma).',
      c_konsepBiologi: 'Reaksi terang di membran tilakoid memerlukan foton cahaya untuk fotolisis H₂O, membentuk ATP dan NADPH, serta melepaskan O₂. Siklus Calvin di stroma tidak membutuhkan foton langsung, tetapi mutlak membutuhkan pasokan ATP (sumber energi) dan NADPH (sumber elektron pereduksi) dari reaksi terang.',
      d_analisisPenalaran: 'Pernyataan 1: BENAR. Tilakoid dengan fotosistem II memecah air menghasilkan O₂, elektron, dan menggerakkan pembentukan ATP & NADPH. Pernyataan 2: SALAH. Tabung Q di tempat gelap tanpa pasokan ATP dan NADPH akan segera berhenti karena reaksi reduksi 3-PGA menjadi G3P membutuhkan ATP dan NADPH. Pernyataan 3: BENAR. Siklus Calvin disebut reaksi gelap karena enzimnya tidak butuh foton langsung; selama ada substrat CO₂, RuBP, serta energi ATP dan NADPH dari luar, reaksi pembentukan gula tetap berlangsung.',
      e_kesimpulan: 'Pernyataan 1 = Benar, Pernyataan 2 = Salah, Pernyataan 3 = Benar.',
      f_analisisOpsi: '1: Benar (reaksi terang tilakoid). 2: Salah (stok ATP & NADPH habis seketika). 3: Benar (reaksi stroma hanya butuh produk kimiawi reaksi terang).'
    },
    caraCepat: 'Trik cepat: "Reaksi gelap" bukan berarti butuh gelap, tapi butuh PRODUK REAKSI TERANG (ATP + NADPH). Tanpa itu, siklus Calvin di stroma langsung mogok.',
    narasi: {
      stimulus: 'Mari cermati pemisahan fraksi kloroplas pada diagram. Ingat apa yang dihasilkan tilakoid dan apa yang dikonsumsi oleh stroma.',
      pertanyaan: 'Evaluasi ketergantungan kedua fraksi tersebut. Perhatikan apakah reaksi gelap bisa jalan selamanya tanpa pasokan energi.',
      pembahasan: 'Siklus Calvin memang tidak butuh foton cahaya langsung, namun mutlak butuh pasokan ATP dan daya reduksi NADPH dari reaksi terang.',
      caraCepat: 'Trik cepat: reaksi gelap tidak pernah mandiri! Begitu stok ATP dan NADPH habis, fiksasi CO2 terhenti.',
      refleksiBenar: 'Keren! Pemahaman integrasi fotosintesis kamu sangat mendalam.',
      refleksiSalah: 'Waspadai istilah reaksi gelap; reaksi ini tetap membutuhkan ATP dan NADPH dari reaksi terang.'
    }
  },

  // 7. PG - Sistem Sirkulasi Manusia
  {
    id: 7,
    type: 'PG',
    topic: 'Sistem Sirkulasi Manusia',
    subtopic: 'Kurva Disosiasi Oksihemoglobin dan Efek Bohr',
    difficulty: 'Sulit',
    cognitiveLevel: 'C4 (Menganalisis)',
    stimulusTitle: 'Adaptasi Fisiologis Kurva Disosiasi Oksihemoglobin saat Olahraga Berat',
    stimulusType: 'paragraph',
    stimulusContent: `Seorang atlet lari maraton menjalani tes fisiologi pada treadmill dengan intensitas maksimal. Selama berolahraga berat, laju metabolisme serat otot rangka meningkat drastis:
- Produksi asam laktat dan CO₂ meningkat sehingga pH cairan jaringan interstitial otot turun dari 7,4 menjadi 7,1.
- Suhu lokal jaringan otot meningkat hingga 39,5°C.
- Konsentrasi senyawa 2,3-bisfosfogliserat (2,3-BPG) dalam eritrosit mengalami peningkatan.

Fenomena pergeseran kurva disosiasi hemoglobin-oksigen (Hb-O₂) ini dikenal dalam fisiologi kardiorespirasi sebagai Efek Bohr.`,
    questionText: 'Berdasarkan perubahan kondisi fisiologis jaringan otot tersebut, bagaimana pengaruhnya terhadap kurva disosiasi Hb-O₂ dan pelepasan oksigen ke sel-sel otot?',
    options: [
      { key: 'A', text: 'Kurva bergeser ke kanan, afinitas hemoglobin terhadap O₂ menurun, sehingga mempermudah pelepasan oksigen ke jaringan otot yang aktif' },
      { key: 'B', text: 'Kurva bergeser ke kiri, afinitas hemoglobin terhadap O₂ meningkat, sehingga hemoglobin mengikat oksigen lebih kuat dan mencegah hipoksia' },
      { key: 'C', text: 'Kurva tidak bergeser tetapi kapasitas total hemoglobin dalam mengikat O₂ meningkat dua kali lipat akibat kenaikan suhu' },
      { key: 'D', text: 'Kurva bergeser ke kiri karena ion H⁺ bersaing dengan gas CO₂ pada sisi aktif rantai heme hemoglobin' },
      { key: 'E', text: 'Kurva bergeser ke kanan yang menyebabkan saturasi hemoglobin di kapiler alveolus paru-paru anjlok hingga di bawah 40%' }
    ],
    correctAnswer: 'A',
    pembahasan: {
      a_memahamiPersoalan: 'Menganalisis pergeseran kurva disosiasi hemoglobin (Efek Bohr) akibat penurunan pH, kenaikan CO₂, suhu, dan 2,3-BPG pada jaringan aktif.',
      b_identifikasiInformasi: 'Kondisi: pH turun (asam), CO₂ naik, suhu naik, 2,3-BPG naik pada otot atlet.',
      c_konsepBiologi: 'Kondisi metabolik aktif (CADET: CO₂, Asidosis/H⁺, 2,3-DPG, Exercise, Temperature meningkat) menurunkan afinitas Hb terhadap O₂. Ini menggeser kurva disosiasi ke KANAN. Afinitas rendah memicu pelepasan O₂ (unloading) dari oksihemoglobin ke mioglobin jaringan.',
      d_analisisPenalaran: 'Pergeseran ke kanan berarti pada tekanan parsial O₂ (PO₂) yang sama, persentase saturasi Hb lebih rendah, artinya lebih banyak O₂ yang dilepaskan ke jaringan otot yang sangat membutuhkan ATP. Di alveolus paru, suhu normal dan CO₂ rendah membuat afinitas kembali tinggi untuk mengambil O₂.',
      e_kesimpulan: 'Jawaban tepat adalah A, kurva bergeser ke kanan, afinitas menurun, pelepasan O₂ meningkat.',
      f_analisisOpsi: 'B salah (pergeseran ke kiri justru menahan O₂). C salah (kapasitas total tidak bertambah). D salah (ion H⁺ menggeser ke kanan, bukan ke kiri). E salah (di paru-paru saturasi tetap tinggi 98%).'
    },
    caraCepat: 'Trik cepat: Ingat rumus "CADET face RIGHT" (CO2, Acid/pH turun, DPG/BPG, Exercise, Temp naik -> geser ke KANAN = Lepas O₂ lebih gampang).',
    narasi: {
      stimulus: 'Pada soal nomor tujuh ini, amati kondisi fisiologis atlet maraton: suhu naik, pH turun, dan CO2 menumpuk.',
      pertanyaan: 'Gunakan prinsip Efek Bohr untuk menentukan arah pergeseran kurva disosiasi dan kemudahan pelepasan oksigen.',
      pembahasan: 'Kondisi asam dan panas merelaksasi ikatan oksihemoglobin, menggeser kurva ke arah kanan sehingga pasokan oksigen ke mitokondria otot meningkat pesat.',
      caraCepat: 'Trik kilat: CADET geser ke KANAN! Kanan berarti hemoglobin melepaskan oksigen dengan lebih mudah ke sel-sel otot.',
      refleksiBenar: 'Bagus sekali! Logika fisiologi sirkulasi dan respirasi jaringanmu terbukti solid.',
      refleksiSalah: 'Hati-hati, geser kanan berarti afinitas turun dan mempermudah oksigen lepas.'
    }
  },

  // 8. PGK - Sistem Respirasi Manusia
  {
    id: 8,
    type: 'PGK',
    topic: 'Sistem Respirasi Manusia',
    subtopic: 'Mekanisme Ventilasi Paru, Pertukaran Gas Alveolus, dan Regulasi Kemoreseptor',
    difficulty: 'Sulit',
    cognitiveLevel: 'C5 (Mengevaluasi)',
    stimulusTitle: 'Respon Ventilasi terhadap Peningkatan Tekanan Parsial CO2 (PCO2) Darah',
    stimulusType: 'paragraph',
    stimulusContent: `Seseorang menahan napas (apnea sukarela) selama 60 detik. Selama periode ini, pertukaran gas di paru terhenti sementara metabolisme seluler terus memproduksi CO₂ dan mengonsumsi O₂:
1. Tekanan parsial karbon dioksida arteri (PaCO₂) meningkat dari nilai normal 40 mmHg menjadi 52 mmHg.
2. Gas CO₂ menembus sawar darah-otak (blood-brain barrier) ke dalam cairan serebrospinal (CSF). Di CSF, enzim karbonat anhidrase mengkatalisis reaksi: CO₂ + H₂O ⇌ H₂CO₃ ⇌ H⁺ + HCO₃⁻.
3. Kenaikan konsentrasi ion H⁺ (penurunan pH) dideteksi oleh kemoreseptor sentral pada medula oblongata, serta kemoreseptor perifer di badan karotis dan aorta.`,
    questionText: 'Manakah respon homeostasis dan mekanisme biologis yang BENAR terjadi pada sistem respirasi orang tersebut sesaat setelah diperbolehkan bernapas kembali? (Pilihlah lebih dari satu opsi)',
    options: [
      { key: 'A', text: 'Frekuensi dan kedalaman pernapasan (hiperventilasi) akan meningkat tajam untuk membuang kelebihan CO₂ dari darah' },
      { key: 'B', text: 'Pemicu utama peningkatan ventilasi adalah stimulasi ion H⁺ pada kemoreseptor sentral medula oblongata, bukan penurunan PO₂ semata' },
      { key: 'C', text: 'Otot diafragma berkontraksi mendatar dan otot antartulang rusuk luar (interkostalis eksterna) mengangkat tulang rusuk' },
      { key: 'D', text: 'Tekanan intrapleura dan intrapulmonal akan meningkat melebihi tekanan atmosfer selama fase inspirasi dalam' },
      { key: 'E', text: 'Kadar bikarbonat (HCO₃⁻) dalam plasma bertindak sebagai penyangga utama transportasi sekitar 70% CO₂ dalam peredaran darah' }
    ],
    correctAnswers: ['A', 'B', 'C', 'E'],
    pembahasan: {
      a_memahamiPersoalan: 'Mengevaluasi mekanisme umpan balik pernapasan terhadap hiperkapnia (kelebihan CO₂) dan fisiologi mekanika pernapasan.',
      b_identifikasiInformasi: 'PaCO₂ naik -> pH CSF turun -> kemoreseptor medula terstimulasi -> dorongan bernapas tak tertahankan.',
      c_konsepBiologi: 'Pusat pernapasan di medula oblongata paling sensitif terhadap perubahan PCO₂ dan pH (bukan PO₂). Saat bernapas kembali, terjadi hiperventilasi. Selama inspirasi, diafragma dan interkostalis eksterna berkontraksi sehingga volume rongga dada membesar dan tekanan intrapulmonal TURUN di bawah 1 atm (hukum Boyle) agar udara masuk.',
      d_analisisPenalaran: 'Opsi A benar: tubuh hiperventilasi untuk mengeliminasi kelebihan CO₂. Opsi B benar: kemoreseptor sentral merespon ion H⁺ dari hidrasi CO₂. Opsi C benar: inspirasi melibatkan diafragma mendatar dan tulang rusuk terangkat. Opsi D SALAH: inspirasi terjadi jika tekanan intrapulmonal LEBIH RENDAH dari atmosfer (tekanan negatif), bukan lebih tinggi. Opsi E benar: 70% CO₂ diangkut dalam bentuk ion bikarbonat HCO₃⁻ di plasma.',
      e_kesimpulan: 'Opsi A, B, C, dan E benar.',
      f_analisisOpsi: 'A, B, C, E tepat. D salah fatal karena udara mengalir dari tekanan tinggi ke rendah; jika tekanan paru lebih tinggi dari atmosfer, udara justru keluar (ekspirasi).'
    },
    caraCepat: 'Trik cepat: Ingat prinsip mekanika udara "Masuk karena Tekanan Negatif" (P paru < P atmosfer). Jadi opsi yang mengatakan tekanan paru lebih tinggi saat inspirasi pasti SALAH!',
    narasi: {
      stimulus: 'Pada soal nomor delapan, amati pengaruh penahanan napas terhadap kenaikan PCO2 dan pH cairan otak.',
      pertanyaan: 'Periksa respon ventilasi dan gerak mekanika pernapasan. Ingat hukum fisika pernapasan saat udara mengalir masuk ke paru-paru.',
      pembahasan: 'Dorongan bernapas manusia dipicu oleh tingginya kadar asam karbonat akibat CO2. Udara masuk karena volume dada membesar dan tekanan paru menurun di bawah atmosfer.',
      caraCepat: 'Trik kilat: eliminasi opsi yang menyatakan tekanan intrapulmoner lebih tinggi dari atmosfer saat inspirasi.',
      refleksiBenar: 'Tepat sekali! Memahami peran kemoreseptor dan tekanan intrapulmonal sangat krusial.',
      refleksiSalah: 'Perhatikan mekanika ventilasi: tekanan paru harus lebih rendah dari atmosfer saat inspirasi.'
    }
  },

  // 9. PG - Sistem Ekskresi Manusia
  {
    id: 9,
    type: 'PG',
    topic: 'Sistem Ekskresi Manusia',
    subtopic: 'Struktur Nefron Ginjal dan Analisis Hasil Tes Urinalisis',
    difficulty: 'Menengah',
    cognitiveLevel: 'C4 (Menganalisis)',
    stimulusTitle: 'Hasil Urinalisis Laboratorium Pasien dengan Gejala Edema Tungkai',
    stimulusType: 'table',
    stimulusContent: `Seorang pasien berusia 45 tahun memeriksakan diri dengan keluhan pembengkakan pada kedua tungkai kaki (edema) dan urine berbusa pekat. Hasil uji laboratorium terhadap sampel cairan di tiga kompartemen nefron disajikan pada tabel berikut:`,
    stimulusData: {
      headers: ['Zat Terlarut', 'Plasma Darah (mg/dL)', 'Filtrat Glomerulus / Urine Primer (mg/dL)', 'Urine Sesungguhnya (mg/dL)'],
      rows: [
        ['Albumin (Protein)', '4.200', '350', '280'],
        ['Glukosa', '95', '95', '0'],
        ['Urea', '25', '25', '1.800'],
        ['Kreatinin', '1,2', '1,2', '140'],
        ['Sel Darah Merah (Eritrosit)', 'Normal', 'Negatif', 'Negatif']
      ],
      caption: 'Tabel 1: Konsentrasi zat terlarut pada kompartemen nefron pasien'
    },
    diagramId: 'diagram-nefron',
    questionText: 'Berdasarkan data laboratorium tersebut, kerusakan struktur nefron dan gangguan fungsi fisiologis yang dialami oleh pasien tersebut adalah...',
    options: [
      { key: 'A', text: 'Kerusakan pada membran filtrasi glomerulus (podosit dan endotel berpori) sehingga protein albumin lolos ke dalam filtrat (proteinuria)' },
      { key: 'B', text: 'Kegagalan kotransporter Na⁺/glukosa (SGLT2) pada tubulus kontortus proksimal sehingga glukosa gagal direabsorpsi' },
      { key: 'C', text: 'Penurunan sekresi hormon ADH oleh neurohipofisis sehingga volume urine menjadi sangat encer' },
      { key: 'D', text: 'Kerusakan pada lengkung Henle desenden yang menghalangi difusi ion urea ke dalam medula ginjal' },
      { key: 'E', text: 'Obstruksi pada tubulus kolektivus yang menyebabkan eritrosit pecah dan mengalami lisis' }
    ],
    correctAnswer: 'A',
    pembahasan: {
      a_memahamiPersoalan: 'Menganalisis lokasi kerusakan spesifik nefron berdasarkan kelainan biokimia pada data urinalisis.',
      b_identifikasiInformasi: 'Pada kondisi normal, albumin bernilai 0 di filtrat glomerulus karena muatan negatif podosit dan pori filtrasi menolaknya. Pada tabel pasien, albumin muncul 350 mg/dL di urine primer dan 280 mg/dL di urine akhir. Sementara glukosa normal (0 di urine akhir).',
      c_konsepBiologi: 'Membran filtrasi glomerulus terdiri atas endotel berfenestra, membran basal, dan celah podosit. Membran ini menyaring molekul berdasarkan ukuran (<68 kDa) dan muatan negatif. Kebocoran albumin mengindikasikan nefropati/kerusakan glomerulus. Albuminuria menyebabkan penurunan tekanan osmotik koloid darah sehingga cairan keluar ke jaringan interstitium (edema).',
      d_analisisPenalaran: 'Kemunculan albumin dalam urine primer dan sekunder menunjukkan bahwa filter awal di glomerulus telah rusak. Glukosa 0 mg/dL di urine akhir membuktikan bahwa fungsi reabsorpsi di tubulus kontortus proksimal masih berfungsi dengan sangat baik.',
      e_kesimpulan: 'Jawaban yang benar adalah A, kerusakan membran filtrasi glomerulus menyebabkan proteinuria dan edema.',
      f_analisisOpsi: 'B salah (glukosa 0 di urine akhir artinya reabsorpsi glukosa 100% normal). C salah (urine pekat berbusa, bukan encer). D salah (urea terkonsentrasi normal 1800 mg/dL). E salah (eritrosit negatif).'
    },
    caraCepat: 'Trik cepat: Lihat zat yang abnormal pada tabel. Glukosa normal (0), eritrosit normal (negatif). Hanya ALBUMIN yang bocor! Kebocoran protein selalu berakar pada saringan pertama: GLOMERULUS.',
    narasi: {
      stimulus: 'Perhatikan Tabel 1 data urinalisis. Bandingkan kadar normal plasma, filtrat glomerulus, dan urine sesungguhnya.',
      pertanyaan: 'Identifikasi zat terlarut mana yang mengalami kelainan mencolok dan hubungkan dengan lokasi proses pembentukan urine.',
      pembahasan: 'Keberadaan protein albumin pada filtrat membuktikan bahwa barier filtrasi pada glomerulus telah mengalami kerusakan struktural.',
      caraCepat: 'Trik kilat: Albumin bocor = Kerusakan Glomerulus. Jangan pilih tubulus proksimal karena glukosanya berhasil direabsorpsi hingga nol.',
      refleksiBenar: 'Hebat! Pembacaan tabel dan analisis kompartemen nefronmu sangat cermat.',
      refleksiSalah: 'Cek tabel: glukosa di urine akhir adalah 0, jadi tubulus proksimalnya tidak rusak.'
    }
  },

  // 10. PGK - Sistem Imun Manusia
  {
    id: 10,
    type: 'PGK',
    topic: 'Sistem Imun Manusia',
    subtopic: 'Imunitas Spesifik Humoral, Diferensiasi Limfosit, dan Sel Memori',
    difficulty: 'Sulit',
    cognitiveLevel: 'C4 (Menganalisis)',
    stimulusTitle: 'Dinamika Kinetika Antibodi Serum Pasca-Imunisasi Primer dan Booster',
    stimulusType: 'graph',
    stimulusContent: `Uji klinis vaksin subunit rekombinan dilakukan pada sekelompok relawan. Relawan menerima dosis imunisasi pertama pada hari ke-0 dan dosis penguat (booster) pada hari ke-28:
1. Pasca-Dosis I: Terjadi fase laten (lag phase) selama 7 hari sebelum antibodi IgM terdeteksi, disusul kenaikan moderat titer antibodi IgG dengan afinitas sedang yang mencapai puncak pada hari ke-14, lalu menurun perlahan.
2. Pasca-Dosis II (Booster): Titer antibodi melonjak drastis hanya dalam waktu 48 jam (fase laten sangat singkat), didominasi oleh antibodi isotip IgG berspesifisitas dan afinitas tinggi (maturasi afinitas), serta bertahan tinggi selama berbulan-bulan.`,
    diagramId: 'diagram-respon-imun',
    questionText: 'Manakah penjelasan imunologis yang BENAR mengenai perbedaan karakteristik respon imun primer dan sekunder tersebut? (Pilihlah lebih dari satu opsi)',
    options: [
      { key: 'A', text: 'Respon imun sekunder berlangsung jauh lebih cepat dan tinggi karena keberadaan klon sel limfosit B memori dan T helper memori yang terbentuk saat respon primer' },
      { key: 'B', text: 'Respon imun primer didominasi oleh sekresi IgM pentamerik sebelum sel B mengalami penukaran kelas rantai berat (class-switch recombination) menjadi IgG' },
      { key: 'C', text: 'Klon sel plasma yang berdiferensiasi dari sel memori mampu mensekresikan ribuan molekul antibodi per detik dengan afinitas pengikatan antigen yang lebih kuat' },
      { key: 'D', text: 'Vaksinasi ini memberikan kekebalan pasif buatan karena tubuh hanya menerima antibodi siap pakai tanpa memicu aktivitas mitosis limfosit' },
      { key: 'E', text: 'Sel T sitotoksik (CD8⁺) akan mendegradasi seluruh antibodi IgG bebas dalam serum setelah hari ke-28 untuk mencegah autoimunitas' }
    ],
    correctAnswers: ['A', 'B', 'C'],
    pembahasan: {
      a_memahamiPersoalan: 'Menganalisis dasar seluler perbedaan respon imun primer dan sekunder pasca-vaksinasi.',
      b_identifikasiInformasi: 'Respon primer memiliki lag phase lama dan titer rendah (IgM dulu lalu IgG). Respon booster cepat dan titer IgG sangat tinggi.',
      c_konsepBiologi: 'Saat antigen pertama kali masuk, sel B naif membutuhkan waktu untuk presentasi antigen, aktivasi sel T helper, seleksi klonal, dan pembentukan sel memori. Pada paparan kedua, sel B memori langsung teraktivasi tanpa fase penundaan yang lama, memproduksi IgG beravitas tinggi melalui proses somatic hypermutation.',
      d_analisisPenalaran: 'Opsi A benar: sel memori adalah kunci respon sekunder yang cepat. Opsi B benar: respon primer diawali IgM lalu isotype switching ke IgG. Opsi C benar: sel plasma turunan sel memori menghasilkan IgG dalam jumlah masif. Opsi D SALAH: vaksinasi memicu pembentukan antibodi sendiri sehingga tergolong imunitas AKTIF buatan, bukan pasif. Opsi E SALAH: sel T sitotoksik membunuh sel terinfeksi/abnormal, bukan mendegradasi antibodi serum.',
      e_kesimpulan: 'Opsi A, B, dan C benar.',
      f_analisisOpsi: 'A, B, C benar. D salah karena vaksinasi adalah kekebalan aktif. E salah karena sel T sitotoksik bukan penghancur antibodi darah.'
    },
    caraCepat: 'Trik cepat: Vaksin = Imunitas AKTIF (tubuh buat antibodi & sel memori sendiri). Ingat urutan: Primer = lag lama, IgM dulu; Sekunder = cepat kilat, IgG dominan berkat SEL MEMORI!',
    narasi: {
      stimulus: 'Pelajari Grafik 5 tentang kurva respon primer dan sekunder pasca-imunisasi. Perhatikan perbedaan waktu jeda dan lonjakan titer IgG.',
      pertanyaan: 'Identifikasi mekanisme seluler limfosit B dan pembentukan sel memori. Cermati jenis imunitas aktif versus pasif.',
      pembahasan: 'Respon booster melesat tinggi karena sel memori tidak perlu belajar dari nol, mereka langsung berdiferensiasi menjadi sel plasma penghasil IgG.',
      caraCepat: 'Trik kilat: langsung eliminasi opsi yang menyebut vaksinasi sebagai kekebalan pasif atau sel T menghancurkan antibodi sendiri.',
      refleksiBenar: 'Tepat sekali! Konsep imunologi seluler dan vaksinasimu sangat kuat.',
      refleksiSalah: 'Ingat ya: vaksinasi adalah kekebalan AKTIF buatan, bukan kekebalan pasif!'
    }
  },

  // 11. BS - Sistem Koordinasi Manusia
  {
    id: 11,
    type: 'BS',
    topic: 'Sistem Koordinasi Manusia',
    subtopic: 'Potensial Aksi Akson, Pompa Natrium-Kalium, dan Sinapsis Kimia',
    difficulty: 'Sulit',
    cognitiveLevel: 'C4 (Menganalisis)',
    stimulusTitle: 'Mekanisme Bioelektrikal Penghantaran Impuls Saraf pada Neuron Bermielin',
    stimulusType: 'diagram',
    stimulusContent: `Perambatan potensial aksi di sepanjang akson neuron motorik manusia diukur menggunakan mikroelektroda osiloskop.
1. Potensial membran istirahat berada pada nilai -70 mV.
2. Ketika stimulus mencapai nilai ambang batas (-55 mV), kanal gerbang-voltase Na⁺ (voltage-gated Na⁺ channel) terbuka cepat sehingga ion Na⁺ membanjiri bagian dalam akson (depolarisasi hingga +30 mV).
3. Kanal Na⁺ mengalami inaktivasi, disusul terbukanya kanal gerbang-voltase K⁺ yang menyebabkan ion K⁺ berdifusi keluar akson (repolarisasi).
4. Pompa Na⁺/K⁺-ATPase secara aktif memulihkan gradien konsentrasi ion semula dengan menggunakan energi hidrolisis ATP.
5. Pada ujung akson terminal, depolarisasi membuka kanal gerbang-voltase Ca²⁺, memicu eksositosis vesikel neurotransmiter ke celah sinapsis.`,
    diagramId: 'diagram-sinapsis',
    questionText: 'Tentukan BENAR atau SALAH pada pernyataan-pernyataan bioelektrikal berikut!',
    statements: [
      {
        id: 1,
        text: 'Fase depolarisasi pada potensial aksi dipicu oleh terbukanya kanal gerbang-voltase Na⁺ yang menyebabkan ion Na⁺ masuk menuruni gradien konsentrasi dan gradien listrik.',
        correct: true
      },
      {
        id: 2,
        text: 'Pompa Na⁺/K⁺-ATPase memindahkan 3 ion Na⁺ ke luar akson dan memasukkan 2 ion K⁺ ke dalam akson melawan gradien konsentrasi dengan mengonsumsi 1 molekul ATP.',
        correct: true
      },
      {
        id: 3,
        text: 'Selubung mielin memperlambat konduksi impuls karena menghalangi aliran ion natrium dan kalium di sepanjang nodus Ranvier.',
        correct: false
      }
    ],
    pembahasan: {
      a_memahamiPersoalan: 'Memvalidasi proses biofisika potensial aksi: depolarisasi, rasio pompa Na+/K+, dan konduksi saltatori pada selubung mielin.',
      b_identifikasiInformasi: 'Potensial istirahat -70 mV, depolarisasi influx Na⁺, pompa aktif 3 Na⁺ keluar / 2 K⁺ masuk, adanya selubung mielin dan nodus Ranvier.',
      c_konsepBiologi: 'Depolarisasi terjadi saat kanal Na⁺ terbuka dan Na⁺ masuk. Pompa Na⁺/K⁺-ATPase menjaga gradien istirahat dengan memompa 3 Na⁺ keluar dan 2 K⁺ masuk per 1 ATP. Selubung mielin bertindak sebagai insulator listrik yang MEMPERCEPAT impuls melalui konduksi melompat (saltatory conduction) dari satu nodus Ranvier ke nodus Ranvier berikutnya.',
      d_analisisPenalaran: 'Pernyataan 1: BENAR (influks Na⁺ membalikkan polaritas dari -70 mV ke +30 mV). Pernyataan 2: BENAR (stoikiometri pompa primer adalah 3 Na⁺ keluar dan 2 K⁺ masuk). Pernyataan 3: SALAH (mielin mempercepat konduksi hingga 100-120 m/s, bukan memperlambat).',
      e_kesimpulan: 'Pernyataan 1 = Benar, Pernyataan 2 = Benar, Pernyataan 3 = Salah.',
      f_analisisOpsi: '1: Benar (depolarisasi). 2: Benar (3 Na keluar, 2 K masuk). 3: Salah (mielin mempercepat via konduksi saltatori).'
    },
    caraCepat: 'Trik cepat: Mielin = konduksi saltatori (melompat) = SUPER CEPAT! Jadi jika ada pernyataan "mielin memperlambat impuls", pastikan langsung pilih SALAH.',
    narasi: {
      stimulus: 'Simak diagram transmisi sinapsis dan mekanisme aliran ion potensial aksi pada neuron bermielin.',
      pertanyaan: 'Periksa stoikiometri pompa natrium-kalium dan fungsi isolator dari selubung mielin.',
      pembahasan: 'Depolarisasi adalah masuknya ion natrium. Selubung mielin justru membuat impuls meloncat antar nodus Ranvier sehingga melesat sangat cepat.',
      caraCepat: 'Trik kilat: Mielin selalu mempercepat hantaran impuls, tidak pernah memperlambat!',
      refleksiBenar: 'Sempurna! Pemahaman neurobiologi selulermu sangat tajam.',
      refleksiSalah: 'Ingat fungsi mielin: mempercepat transmisi impuls, bukan memperlambat.'
    }
  },

  // 12. PG - Sistem Reproduksi Manusia
  {
    id: 12,
    type: 'PG',
    topic: 'Sistem Reproduksi Manusia',
    subtopic: 'Gametogenesis, Fertilisasi di Tuba Fallopii, dan Pembentukan Blastokista',
    difficulty: 'Menengah',
    cognitiveLevel: 'C4 (Menganalisis)',
    stimulusTitle: 'Perjalanan Oosit Sekunder dan Reaksi Akrosom pada Fertilisasi',
    stimulusType: 'paragraph',
    stimulusContent: `Pada sistem reproduksi wanita sehat, oosit sekunder yang diovulasikan dari folikel de Graaf ovarium ditangkap oleh fimbriae dan bergerak menyusuri tuba Fallopii (oviduk).
Saat jutaan spermatozoa mencapai ampula tuba Fallopii:
1. Spermatozoa menembus lapisan sel-sel korona radiata.
2. Kepala sperma berikatan dengan reseptor ZP3 pada zona pelusida, memicu reaksi akrosom yang melepaskan enzim hidrolitik (hialuronidase dan akrosin).
3. Setelah satu fusi membran sperma terjadi, sel telur segera mengaktifkan reaksi kortikal (pelepasan granula kortikal) untuk mengubah struktur zona pelusida.`,
    questionText: 'Tujuan biologis utama dari pelepasan granula kortikal (reaksi kortikal) sesaat setelah fusi membran sperma pertama adalah...',
    options: [
      { key: 'A', text: 'Mencegah terjadinya polispermia (masuknya lebih dari satu sperma) yang dapat menyebabkan lethalitas zigot akibat poliploidi' },
      { key: 'B', text: 'Memicu pembelahan mitosis pertama zigot secara independen tanpa perlu fusi materi genetik' },
      { key: 'C', text: 'Menghancurkan korona radiata agar blastokista dapat segera melakukan implantasi di dinding tuba Fallopii' },
      { key: 'D', text: 'Menstimulasi sel folikel menghasilkan hormon progesteron untuk mempertahankan ketebalan endometrium' },
      { key: 'E', text: 'Menginduksi sperma lain untuk melepaskan materi genetiknya secara serempak ke ruang perivitelina' }
    ],
    correctAnswer: 'A',
    pembahasan: {
      a_memahamiPersoalan: 'Menganalisis fungsi protektif fisiologis dari reaksi kortikal pada fertilisasi manusia.',
      b_identifikasiInformasi: 'Reaksi kortikal terjadi tepat saat satu sperma memfusi membran sel telur, melepaskan enzim ke zona pelusida.',
      c_konsepBiologi: 'Reaksi kortikal (slow block to polyspermy) mengeraskan zona pelusida dan merusak reseptor ZP3. Hal ini mutlak diperlukan untuk mencegah polispermia (pembuahan oleh >1 sperma) yang akan menghasilkan zigot triploid/tetraploid yang tidak dapat bertahan hidup.',
      d_analisisPenalaran: 'Jika lebih dari satu sperma membuahi oosit, jumlah kromosom abnormal (poliploidi), centrosom berlebih memicu segregasi spindel kacau, dan embrio gugur spontan. Reaksi kortikal adalah benteng biokimiawi mutlak penjamin status diploid (2n).',
      e_kesimpulan: 'Jawaban yang tepat adalah A, mencegah polispermia demi mempertahankan integritas diploid zigot.',
      f_analisisOpsi: 'B salah (fusi pronukleus tetap wajib). C salah (implantasi di tuba adalah kehamilan ektopik yang berbahaya). D salah (progesteron dipicu hCG kelak). E salah (justru menolak sperma lain).'
    },
    caraCepat: 'Trik cepat: "Reaksi Kortikal" = "Blokade Polispermia" (anti sperma ganda). Kunci utama selalu menjaga kromosom zigot tetap 2n (diploid).',
    narasi: {
      stimulus: 'Pada soal nomor dua belas, perhatikan tahapan pembuahan sel telur di ampula tuba Fallopii.',
      pertanyaan: 'Fokus pada peran granula kortikal yang dilepaskan begitu sperma pertama berhasil menembus membran.',
      pembahasan: 'Reaksi kortikal mengeraskan zona pelusida agar sperma lain tidak bisa masuk, mencegah kelainan genetik fatal akibat polispermia.',
      caraCepat: 'Cara cepatnya: reaksi kortikal selalu identik dengan pencegahan polispermia!',
      refleksiBenar: 'Bagus sekali! Logika fertilisasi dan embriogenesis awalmu sangat tepat.',
      refleksiSalah: 'Ingat, granula kortikal berfungsi sebagai barier pemblokir polispermia.'
    }
  },

  // 13. PGK - Keanekaragaman Hayati (Biogeografi Indonesia)
  {
    id: 13,
    type: 'PGK',
    topic: 'Keanekaragaman Hayati dan Klasifikasi',
    subtopic: 'Biogeografi Indonesia, Garis Wallace dan Garis Weber',
    difficulty: 'Sulit',
    cognitiveLevel: 'C4 (Menganalisis)',
    stimulusTitle: 'Analisis Komparatif Karakteristik Fauna Asiatis, Peralihan, dan Australis',
    stimulusType: 'diagram',
    stimulusContent: `Wilayah kepulauan Indonesia secara biogeografis terbagi oleh dua garis khayal utama: Garis Wallace (antara Kalimantan-Sulawesi dan Bali-Lombok) serta Garis Weber (antara Sulawesi/Nusa Tenggara dan Maluku/Papua).
Karakteristik fauna di ketiga zona:
- Zona Asiatis (Paparan Sunda: Sumatra, Jawa, Kalimantan): Didominasi mamalia plasental berukuran besar, primata bertangan panjang/ekor prehensil, serta burung berbulu suram bersuara merdu.
- Zona Peralihan (Wallacea: Sulawesi, Kepulauan Maluku Barat, NTT): Memiliki tingkat endemisitas tertinggi karena terisolasi secara geologis.
- Zona Australis (Paparan Sahul: Papua dan Kepulauan Aru): Didominasi mamalia marsupial (berkantong) dan monotremata, serta burung berbulu warna-warni cerah.`,
    diagramId: 'diagram-wallace-weber',
    questionText: 'Berdasarkan prinsip biogeografi dan sejarah geologis lempeng benua, manakah pernyataan yang BENAR? (Pilihlah lebih dari satu opsi)',
    options: [
      { key: 'A', text: 'Spesies anoa (Bubalus depressicornis), babi rusa (Babyrousa babyrussa), dan burung maleo (Macrocephalon maleo) merupakan fauna endemik khas Zona Peralihan' },
      { key: 'B', text: 'Kemiripan fauna Sumatra dan Kalimantan dengan benua Asia daratan disebabkan oleh menyatunya daratan Sunda pada zaman glasial saat permukaan air laut surut' },
      { key: 'C', text: 'Kanguru pohon (Dendrolagus) dan burung cenderawasih (Paradisaeidae) merupakan contoh organisme representatif dari Zona Australis di timur Garis Weber' },
      { key: 'D', text: 'Garis Wallace ditetapkan terutama berdasarkan batas keterisolasian tumbuhan gymnospermae antara wilayah barat dan timur Nusantara' },
      { key: 'E', text: 'Zona Peralihan memiliki keanekaragaman mamalia berkantong paling melimpah di dunia mengungguli daratan Australia dan Papua' }
    ],
    correctAnswers: ['A', 'B', 'C'],
    pembahasan: {
      a_memahamiPersoalan: 'Menganalisis persebaran fauna Indonesia, garis biogeografi Wallace & Weber, serta faktor geologi glasiasi lempeng tektonik.',
      b_identifikasiInformasi: 'Zona Asiatis = mamalia besar plasental (Sunda). Zona Peralihan = Wallacea (Sulawesi: anoa, babirusa, maleo). Zona Australis = Sahul (marsupial, cenderawasih).',
      c_konsepBiologi: 'Paparan Sunda bersatu dengan Asia daratan saat zaman es, memudahkan migrasi gajah, harimau, badak. Wallacea tidak pernah bersatu dengan Asia maupun Australia sehingga mengembangkan spesies endemik unik. Sahul bersatu dengan Australia sehingga faunanya serupa (marsupial, burung cerah).',
      d_analisisPenalaran: 'Opsi A benar: anoa, babirusa, maleo adalah fauna endemik Sulawesi di zona peralihan. Opsi B benar: Paparan Sunda menyatu saat zaman glasial. Opsi C benar: kanguru pohon dan cenderawasih berada di Papua (Australis timur Weber). Opsi D SALAH: Wallace menetapkan garis berdasarkan batas fauna mamalia dan burung, bukan tumbuhan gymnospermae. Opsi E SALAH: mamalia berkantong melimpah di Australis (Papua & Australia), bukan di Zona Peralihan.',
      e_kesimpulan: 'Opsi A, B, dan C benar.',
      f_analisisOpsi: 'A, B, C benar. D salah karena Wallace meneliti persebaran zoologi (hewan). E salah karena marsupial melimpah di Papua/Sahul, bukan Wallacea.'
    },
    caraCepat: 'Trik cepat: Ingat pemetaan "Sulawesi = Peralihan Endemik (Anoa, Babirusa, Maleo)". "Papua = Australis (Kanguru pohon, Cenderawasih)". Wallace membagi ZOOLOGI (hewan), bukan gymnospermae!',
    narasi: {
      stimulus: 'Perhatikan Peta Biogeografi Garis Wallace dan Garis Weber pada diagram. Cermati pembagian tiga zona fauna Indonesia.',
      pertanyaan: 'Pilihlah seluruh pernyataan yang tepat mengenai fauna endemik dan sejarah geologi Paparan Sunda serta Sahul.',
      pembahasan: 'Zona Peralihan diapit oleh Garis Wallace dan Weber, menghasilkan isolasi evolusioner yang memunculkan fauna unik seperti anoa dan babirusa.',
      caraCepat: 'Trik kilat: Pastikan mencentang fakta endemik Sulawesi dan Papua, serta hindari opsi yang memelintir sejarah penelitian Wallace.',
      refleksiBenar: 'Bagus sekali! Wawasan biogeografi Nusantara kamu sangat teruji.',
      refleksiSalah: 'Cek kembali: Wallace meneliti hewan (fauna), bukan flora gymnospermae.'
    }
  },

  // 14. PG - Bakteri (Resistensi Antibiotik)
  {
    id: 14,
    type: 'PG',
    topic: 'Bakteri',
    subtopic: 'Mekanisme Resistensi Antibiotik dan Transfer Gen Horizontal',
    difficulty: 'Sangat Sulit',
    cognitiveLevel: 'C5 (Mengevaluasi)',
    stimulusTitle: 'Penyebaran Gen Resisten Antibiotik (blaNDM-1) pada Pasien ICU',
    stimulusType: 'paragraph',
    stimulusContent: `Di unit perawatan intensif (ICU) sebuah rumah sakit, ditemukan galur bakteri Klebsiella pneumoniae yang resisten terhadap antibiotik golongan karbapenem (antibiotik lini terakhir). Analisis genomik membuktikan adanya plasmid konjugatif yang membawa gen blaNDM-1 (New Delhi metallo-beta-lactamase). 
Gen ini mengkodekan enzim yang mampu menghidrolisis cincin beta-laktam pada penisilin, sefalosporin, dan karbapenem dengan bantuan ion kofaktor seng (Zn²⁺).
Dua minggu kemudian, galur Escherichia coli komensal normal di usus pasien lain yang sekamar juga terdeteksi membawa plasmid identik blaNDM-1 melalui perantara pilus seks.`,
    questionText: 'Mekanisme rekombinasi genetik bakteri yang bertanggung jawab atas perpindahan gen resistensi antar-spesies bakteri pada kasus tersebut adalah...',
    options: [
      { key: 'A', text: 'Konjugasi, yaitu transfer materi genetik plasmid secara langsung dari sel donor ke sel resipien melalui jembatan pilus seks' },
      { key: 'B', text: 'Transformasi, yaitu penyerapan fragmen DNA telanjang yang larut bebas di lingkungan akibat lisis sel donor' },
      { key: 'C', text: 'Transduksi, yaitu pemindahan materi genetik bakteri dengan perantaraan vektor bakteriofag litik' },
      { key: 'D', text: 'Pembelahan biner, yaitu duplikasi kromosom sirkuler yang menghasilkan dua sel anak identik tanpa pertukaran genetik' },
      { key: 'E', text: 'Transposisi, yaitu perpindahan urutan DNA lompat di dalam satu molekul kromosom sel yang sama tanpa melibatkan donor' }
    ],
    correctAnswer: 'A',
    pembahasan: {
      a_memahamiPersoalan: 'Mengidentifikasi mekanisme rekombinasi genetik horizontal spesifik yang melibatkan transfer plasmid via pilus seks antar-bakteri.',
      b_identifikasiInformasi: 'Ada kata kunci spesifik pada wacana: "membawa plasmid konjugatif" dan "melalui perantara pilus seks".',
      c_konsepBiologi: 'Rekombinasi genetik prokariotik terdiri atas: 1. Konjugasi: kontak langsung sel-ke-sel menggunakan pilus seks mentransfer plasmid (faktor F / resistensi R). 2. Transformasi: menyerap DNA telanjang dari medium. 3. Transduksi: diperantarai virus bakteriofag.',
      d_analisisPenalaran: 'Karena perpindahan gen blaNDM-1 melibatkan transfer plasmid langsung melalui tabung pilus seks antara donor (K. pneumoniae) dan resipien (E. coli), mekanismenya secara definitif adalah konjugasi bakterial.',
      e_kesimpulan: 'Jawaban yang tepat adalah A, Konjugasi melalui jembatan pilus seks.',
      f_analisisOpsi: 'B salah (transformasi tidak memakai pilus seks). C salah (transduksi membutuhkan virus bakteriofag). D salah (pembelahan biner adalah reproduksi aseksual klonal). E salah (transposisi internal, bukan antar-sel donor-resipien).'
    },
    caraCepat: 'Trik cepat: KATA KUNCI = "Pilus Seks" + "Transfer Plasmid Kontak Langsung" -> Sudah pasti KONJUGASI! (Ingat: Virus = Transduksi, DNA telanjang = Transformasi).',
    narasi: {
      stimulus: 'Pada soal nomor empat belas, cermati kasus klinis penyebaran gen resistensi antibiotik di rumah sakit.',
      pertanyaan: 'Identifikasi kata kunci proses transfer genetik yang terjadi antara kedua spesies bakteri.',
      pembahasan: 'Perpindahan plasmid pembawa sifat resistensi melalui saluran pilus seks dinamakan konjugasi.',
      caraCepat: 'Trik kilat: Lihat pilus seks dan transfer plasmid langsung? Jawabannya selalu Konjugasi!',
      refleksiBenar: 'Luar biasa! Pemahaman mikrobiologi molekuler dan transfer gen horizontalmu sangat akurat.',
      refleksiSalah: 'Perhatikan kata kuncinya: pilus seks selalu merujuk pada konjugasi.'
    }
  },

  // 15. BS - Ekosistem (Pencemaran dan Eutrofikasi)
  {
    id: 15,
    type: 'BS',
    topic: 'Ekosistem',
    subtopic: 'Pencemaran Perairan, Eutrofikasi, Nilai BOD, dan DO',
    difficulty: 'Sulit',
    cognitiveLevel: 'C5 (Mengevaluasi)',
    stimulusTitle: 'Dampak Limpasan Pupuk Pertanian (N & P) terhadap Ekosistem Rawa Pening',
    stimulusType: 'table',
    stimulusContent: `Limpasan pupuk nitrogen dan fosfat dari area pertanian memicu ledakan populasi eceng gondok (Eichhornia crassipes) dan alga di danau Rawa Pening (eutrofikasi).
Data kualitas air diukur di 3 stasiun:
- Stasiun 1 (Hulu Alami): Oksigen Terlarut (DO) = 8,2 mg/L; Biochemical Oxygen Demand (BOD) = 1,8 mg/L; Penetrasi Cahaya = 95%.
- Stasiun 2 (Zona Blooming Eceng Gondok): DO Permukaan = 7,5 mg/L, DO Dasar = 1,1 mg/L; BOD = 14,5 mg/L; Penetrasi Cahaya = 15%.
- Stasiun 3 (Zona Pembusukan Masif Dasar Danau): DO = 0,4 mg/L (hipoksia/anoksia); BOD = 22,0 mg/L; Kandungan Gas H₂S dan Amonia tinggi; mortalitas ikan mas mencapai 80%.`,
    questionText: 'Evaluasilah kesahihan pernyataan-pernyataan berikut mengenai dinamika biogeokimia eutrofikasi!',
    statements: [
      {
        id: 1,
        text: 'Tingginya nilai BOD di Stasiun 3 mencerminkan tingginya kebutuhan oksigen oleh bakteri aerob dan fakultatif untuk menguraikan akumulasi biomassa organik yang mati.',
        correct: true
      },
      {
        id: 2,
        text: 'Penurunan kadar oksigen terlarut (DO) di dasar danau terutama disebabkan oleh peningkatan laju fotosintesis fitoplankton di lapisan perairan dalam.',
        correct: false
      },
      {
        id: 3,
        text: 'Munculnya gas hidrogen sulfida (H₂S) di dasar danau merupakan indikator bahwa penguraian bahan organik telah beralih ke respirasi anaerob oleh bakteri pereduksi sulfat akibat habisnya oksigen bebas.',
        correct: true
      }
    ],
    pembahasan: {
      a_memahamiPersoalan: 'Mengevaluasi hubungan antara limpasan nutrien, ledakan alga, kenaikan BOD, penurunan DO, dan dekomposisi anaerob.',
      b_identifikasiInformasi: 'Stasiun 3: DO sangat rendah (0,4 mg/L), BOD melonjak tinggi (22,0 mg/L), gas H₂S terbentuk, kematian ikan massal.',
      c_konsepBiologi: 'Eutrofikasi menyebabkan meledaknya tumbuhan air. Saat tumbuhan mati dan tenggelam ke dasar, populasi dekomposer meledak dan mengonsumsi seluruh oksigen terlarut (BOD tinggi, DO anjlok). Kondisi anoksik memaksa bakteri anaerob mereduksi sulfat menjadi H₂S beracun.',
      d_analisisPenalaran: 'Pernyataan 1: BENAR (BOD tinggi = banyak bahan organik yang perlu dioksidasi oleh mikroba). Pernyataan 2: SALAH (di dasar danau tidak ada penetrasi cahaya akibat tertutup eceng gondok sehingga fotosintesis justru terhenti, bukan meningkat). Pernyataan 3: BENAR (H₂S adalah produk metabolisme respirasi anaerob pada kondisi minim O₂).',
      e_kesimpulan: 'Pernyataan 1 = Benar, Pernyataan 2 = Salah, Pernyataan 3 = Benar.',
      f_analisisOpsi: '1: Benar (definisi BOD). 2: Salah (fotosintesis dasar mati karena cahaya gelap). 3: Benar (H2S tanda dekomposisi anaerob).'
    },
    caraCepat: 'Trik cepat: Di dasar danau tertutup tanaman, cahaya tidak tembus (penetrasi 15%). Jadi fotosintesis di dasar TIDAK MUNGKIN MENINGKAT. Pernyataan 2 langsung SALAH!',
    narasi: {
      stimulus: 'Pada soal nomor lima belas, cermati data pengukuran DO dan BOD pada ketiga stasiun danau yang mengalami eutrofikasi.',
      pertanyaan: 'Evaluasi kaitan antara pembusukan biomassa organik, kebutuhan oksigen bakteri, dan terbentuknya gas H2S.',
      pembahasan: 'BOD tinggi berarti mikroba memerlukan banyak oksigen untuk dekomposisi. Ketika oksigen dasar habis, bakteri anaerob bekerja menghasilkan H2S.',
      caraCepat: 'Trik kilat: Cahaya tertutup eceng gondok membuat fotosintesis dasar danau mati total, bukan meningkat!',
      refleksiBenar: 'Analisis parameter ekologi perairanmu sangat mantap dan presisi.',
      refleksiSalah: 'Ingat, penetrasi cahaya yang anjlok tidak memungkinkan terjadinya fotosintesis di dasar.'
    }
  },

  // 16. PGK - Metabolisme Enzim (Inhibitor Kinetika)
  {
    id: 16,
    type: 'PGK',
    topic: 'Metabolisme Sel dan Enzim',
    subtopic: 'Kinetika Enzim Michaelis-Menten dan Mekanisme Kerja Inhibitor',
    difficulty: 'Sangat Sulit',
    cognitiveLevel: 'C5 (Mengevaluasi)',
    stimulusTitle: 'Kurva Kinetika Michaelis-Menten dengan Dua Jenis Molekul Inhibitor',
    stimulusType: 'graph',
    stimulusContent: `Dalam uji farmakologi enzim reduktase, kinetika reaksi diukur pada konsentrasi substrat [S] bervariasi dengan menambahkan Inhibitor X dan Inhibitor Y:
- Kurva Kontrol (Tanpa Inhibitor): Vmax = 100 nmol/menit, Km = 2,5 mM.
- Kurva + Inhibitor X: Vmax tetap 100 nmol/menit pada [S] yang sangat jenuh, namun nilai Km semu meningkat menjadi 8,0 mM.
- Kurva + Inhibitor Y: Vmax semu turun drastis menjadi 45 nmol/menit, sedangkan nilai Km tetap 2,5 mM berapapun konsentrasi [S] ditambahkan.`,
    diagramId: 'diagram-inhibitor',
    questionText: 'Berdasarkan data kinetika enzim tersebut, pilihlah seluruh interpretasi biokimia yang BENAR! (Pilihlah lebih dari satu opsi)',
    options: [
      { key: 'A', text: 'Inhibitor X bekerja sebagai inhibitor kompetitif yang memiliki kemiripan struktur dengan substrat dan berkompetisi memperebutkan sisi aktif enzim' },
      { key: 'B', text: 'Efek penghambatan oleh Inhibitor X dapat diatasi dengan meningkatkan konsentrasi substrat [S] hingga taraf jenuh' },
      { key: 'C', text: 'Inhibitor Y bekerja sebagai inhibitor nonkompetitif yang terikat pada sisi alosterik enzim di luar sisi aktif' },
      { key: 'D', text: 'Inhibitor Y mengubah konformasi spasial sisi aktif enzim sehingga laju perputaran katalitik (kcat) menurun permanen' },
      { key: 'E', text: 'Penambahan substrat [S] dalam jumlah tak terbatas pada perlakuan Inhibitor Y akan mampu mengembalikan nilai Vmax ke 100 nmol/menit' }
    ],
    correctAnswers: ['A', 'B', 'C', 'D'],
    pembahasan: {
      a_memahamiPersoalan: 'Mengevaluasi efek inhibitor kompetitif versus nonkompetitif terhadap parameter kinetika Km dan Vmax.',
      b_identifikasiInformasi: 'Inhibitor X: Vmax tetap, Km naik. Inhibitor Y: Vmax turun, Km tetap.',
      c_konsepBiologi: 'Inhibitor kompetitif bersaing di sisi aktif -> afinitas semu turun (Km naik), tetapi penambahan substrat berlebih dapat menggeser inhibitor sehingga Vmax tetap tercapai. Inhibitor nonkompetitif terikat di sisi alosterik -> menurunkan kapasitas katalitik (Vmax turun) tanpa mengubah afinitas pengikatan substrat (Km tetap), dan tidak bisa diatasi dengan menambah substrat.',
      d_analisisPenalaran: 'Opsi A benar: X adalah kompetitif (Km naik, Vmax tetap). Opsi B benar: kompetitif bisa diatasi dengan [S] tinggi. Opsi C benar: Y adalah nonkompetitif (Vmax turun, Km tetap) berikatan di alosterik. Opsi D benar: perubahan konformasi alosterik menurunkan kcat. Opsi E SALAH: nonkompetitif tidak dapat diatasi oleh substrat berapapun jumlahnya.',
      e_kesimpulan: 'Opsi A, B, C, dan D benar.',
      f_analisisOpsi: 'A, B, C, D sesuai prinsip kinetika Michaelis-Menten. E keliru karena inhibitor alosterik nonkompetitif menurunkan Vmax secara permanen tanpa terpengaruh konsentrasi substrat.'
    },
    caraCepat: 'Trik cepat: • KOMPETITIF = Berebut sisi aktif -> Km NAIK, Vmax TETAP (bisa dikalahkan oleh substrat melimpah). • NONKOMPETITIF = Ikat sisi alosterik -> Vmax TURUN, Km TETAP (tidak mempan dilawan substrat).',
    narasi: {
      stimulus: 'Perhatikan Grafik 2 kinetika Michaelis-Menten. Amati perubahan kurva saat inhibitor X dan Y ditambahkan.',
      pertanyaan: 'Pilihlah semua interpretasi yang tepat mengenai jenis inhibitor, sisi pengikatan, dan pengaruh konsentrasi substrat.',
      pembahasan: 'Inhibitor kompetitif dapat dikalahkan dengan memperbanyak substrat sehingga Vmax tetap sama, sedangkan inhibitor nonkompetitif merusak efisiensi katalitik dari sisi alosterik.',
      caraCepat: 'Trik kilat: Jika Vmax turun dan Km tetap, itu alosterik nonkompetitif, dan penambahan substrat tidak akan bisa mengembalikan Vmax.',
      refleksiBenar: 'Keren sekali! Penguasaan kinetika enzim tingkat mahir kamu luar biasa.',
      refleksiSalah: 'Ingat: penambahan substrat TIDAK BISA memulihkan Vmax pada inhibitor nonkompetitif.'
    }
  },

  // 17. PG - Katabolisme dan Respirasi Sel
  {
    id: 17,
    type: 'PG',
    topic: 'Katabolisme dan Respirasi Sel',
    subtopic: 'Siklus Krebs, Hasil Dekarboksilasi Oksidatif, dan Stoikiometri Energi',
    difficulty: 'Menengah',
    cognitiveLevel: 'C4 (Menganalisis)',
    stimulusTitle: 'Jalur Katabolisme Aerob Satu Molekul Glukosa (C6H12O6)',
    stimulusType: 'paragraph',
    stimulusContent: `Dalam respirasi seluler aerob lengkap satu molekul glukosa (C₆H₁₂O₆), terjadi empat tahap berturutan:
1. Glikolisis di sitoplasma.
2. Dekarboksilasi Oksidatif di matriks mitokondria.
3. Siklus Krebs (Asam Sitrat) di matriks mitokondria.
4. Rantai Transpor Elektron dan Kemiosmosis di krista mitokondria.

Seorang peneliti melacak pelepasan molekul gas karbon dioksida (CO₂) dan koenzim pembawa elektron tereduksi (NADH dan FADH₂) yang dihasilkan KHUSUS HANYA pada tahap Siklus Krebs (dari 2 molekul Asetil Ko-A yang masuk).`,
    questionText: 'Berapakah jumlah molekul CO₂, NADH, FADH₂, dan ATP (secara fosforilasi tingkat substrat) yang dihasilkan murni dari tahap Siklus Krebs untuk setiap satu molekul glukosa?',
    options: [
      { key: 'A', text: '4 CO₂, 6 NADH, 2 FADH₂, dan 2 ATP' },
      { key: 'B', text: '2 CO₂, 8 NADH, 2 FADH₂, dan 4 ATP' },
      { key: 'C', text: '6 CO₂, 10 NADH, 2 FADH₂, dan 38 ATP' },
      { key: 'D', text: '2 CO₂, 2 NADH, 0 FADH₂, dan 2 ATP' },
      { key: 'E', text: '4 CO₂, 4 NADH, 4 FADH₂, dan 0 ATP' }
    ],
    correctAnswer: 'A',
    pembahasan: {
      a_memahamiPersoalan: 'Menghitung produk stoikiometri spesifik tahap Siklus Krebs dari katabolisme 1 molekul glukosa (2 putaran siklus).',
      b_identifikasiInformasi: 'Satu molekul glukosa menghasilkan 2 molekul piruvat -> 2 molekul Asetil Ko-A. Masing-masing Asetil Ko-A menjalani 1 putaran Siklus Krebs.',
      c_konsepBiologi: 'Per 1 putaran Siklus Krebs menghasilkan: 2 CO₂, 3 NADH, 1 FADH₂, dan 1 ATP (atau GTP). Karena 1 glukosa memasukkan 2 Asetil Ko-A, maka nilainya dikalikan dua: 2 x 2 CO₂ = 4 CO₂; 2 x 3 NADH = 6 NADH; 2 x 1 FADH₂ = 2 FADH₂; 2 x 1 ATP = 2 ATP.',
      d_analisisPenalaran: 'Total CO₂ pernafasan dari 1 glukosa adalah 6 CO₂ (2 dari dekarboksilasi oksidatif + 4 dari Siklus Krebs). Karena yang ditanyakan KHUSUS tahap Siklus Krebs saja, maka hasilnya adalah tepat 4 CO₂, 6 NADH, 2 FADH₂, dan 2 ATP.',
      e_kesimpulan: 'Jawaban yang benar adalah A (4 CO₂, 6 NADH, 2 FADH₂, 2 ATP).',
      f_analisisOpsi: 'B salah (angka NADH dan CO₂ tertukar). C salah (itu total seluruh respirasi, bukan Siklus Krebs saja). D salah (itu hasil dekarboksilasi oksidatif). E salah.'
    },
    caraCepat: 'Trik cepat: Rumus 1 putaran Krebs = "2 CO₂, 3 NADH, 1 FADH₂, 1 ATP". Kalikan 2 untuk 1 molekul glukosa = 4 CO₂, 6 NADH, 2 FADH₂, 2 ATP!',
    narasi: {
      stimulus: 'Pada soal nomor tujuh belas, perhatikan batas tahapan respirasi sel yang ditanyakan: hanya Siklus Krebs untuk satu molekul glukosa penuh.',
      pertanyaan: 'Ingat bahwa satu molekul glukosa menghasilkan dua molekul Asetil Ko-A, sehingga Siklus Krebs berputar dua kali.',
      pembahasan: 'Satu putaran menghasilkan dua CO2, tiga NADH, satu FADH2, dan satu ATP. Dua putaran menghasilkan tepat dua kalinya.',
      caraCepat: 'Trik kilat: kalikan dua rumus standar Krebs (2, 3, 1, 1) menjadi 4 CO2, 6 NADH, 2 FADH2, dan 2 ATP.',
      refleksiBenar: 'Tepat sekali! Ketelitian memilah tahapan respirasi sel sangat krusial.',
      refleksiSalah: 'Perhatikan pertanyaannya: khusus Siklus Krebs saja, jangan campur dengan dekarboksilasi oksidatif.'
    }
  },

  // 18. PGK - Anabolisme dan Fotosintesis
  {
    id: 18,
    type: 'PGK',
    topic: 'Anabolisme dan Fotosintesis',
    subtopic: 'Reaksi Terang Non-Siklik, Enzim RuBisCO, dan Fotorespirasi Tanaman C3 vs C4',
    difficulty: 'Sangat Sulit',
    cognitiveLevel: 'C5 (Mengevaluasi)',
    stimulusTitle: 'Perilaku Katalitik Enzim RuBisCO pada Kondisi Cuaca Panas Terik',
    stimulusType: 'paragraph',
    stimulusContent: `Pada hari yang sangat panas dan kering (suhu >35°C), tanaman C3 (seperti padi dan kedelai) menutup sebagian stomatanya untuk membatasi transpirasi berlebih. 
Dampaknya:
1. Konsentrasi gas CO₂ di ruang antar-sel daun merosot drastis akibat terus dikonsumsi fotosintesis.
2. Konsentrasi gas O₂ dari hasil fotolisis air di reaksi terang menumpuk tinggi.
3. Enzim RuBisCO (Ribulose-1,5-bisphosphate carboxylase-oxygenase) mengikat molekul O₂ alih-alih CO₂, memicu jalur fotorespirasi (jalur C2) yang mengonsumsi ATP tanpa menghasilkan glukosa.
4. Sebaliknya, tanaman C4 (seperti jagung dan tebu) tetap mempertahankan laju fotosintesis tinggi tanpa fotorespirasi yang signifikan.`,
    questionText: 'Pilihlah seluruh pernyataan ilmiah yang BENAR mengenai fenomena adaptasi biokimia dan anatomi fotosintesis tersebut! (Pilihlah lebih dari satu opsi)',
    options: [
      { key: 'A', text: 'Fotorespirasi menurunkan efisiensi fotosintesis tanaman C3 hingga 25-50% karena mengoksidasi RuBP menjadi senyawa toksik fosfoglikolat' },
      { key: 'B', text: 'Tanaman C4 mengeliminasi fotorespirasi melalui pemisahan spasial fiksasi karbon di sel mesofil dan Siklus Calvin di sel seludang pembuluh (bundle sheath)' },
      { key: 'C', text: 'Enzim PEP karboksilase pada sel mesofil tanaman C4 memiliki afinitas sangat tinggi terhadap HCO₃⁻/CO₂ dan sama sekali tidak dapat mengikat O₂' },
      { key: 'D', text: 'Tanaman C3 melakukan fiksasi awal CO₂ membentuk senyawa berkarbon empat berupa asam oksaloasetat di malam hari' },
      { key: 'E', text: 'Reaksi terang pada fotosistem II tanaman tidak memerlukan molekul air sama sekali ketika fotorespirasi berlangsung' }
    ],
    correctAnswers: ['A', 'B', 'C'],
    pembahasan: {
      a_memahamiPersoalan: 'Mengevaluasi mekanisme fotorespirasi pada enzim RuBisCO dan adaptasi anatomi Kranz tanaman C4.',
      b_identifikasiInformasi: 'Tanaman C3 mengalami fotorespirasi saat stomata tertutup (O₂ tinggi, CO₂ rendah). Tanaman C4 memisahkan fiksasi di mesofil dan seludang pembuluh.',
      c_konsepBiologi: 'RuBisCO memiliki sisi aktif ganda: karboksilase (ikat CO₂) dan oksigenase (ikat O₂). Saat ikat O₂, terjadi fotorespirasi menghasilkan 2-fosfoglikolat yang boros energi. Tanaman C4 beradaptasi dengan anatomi Kranz: PEP karboksilase di mesofil mengikat CO₂ menjadi asam malat/oksalasetat (C4), lalu dipompa ke sel seludang pembuluh untuk melepaskan CO₂ pekat ke RuBisCO, sehingga fotorespirasi ditekan hingga nol.',
      d_analisisPenalaran: 'Opsi A benar: fotorespirasi memboroskan karbon dan energi hingga 50%. Opsi B benar: tanaman C4 memisahkan spasial mesofil dan bundle sheath. Opsi C benar: PEP karboksilase tidak memiliki aktivitas oksigenase. Opsi D SALAH: pembentukan malat di malam hari adalah karakteristik tanaman CAM, bukan C3. Opsi E SALAH: fotolisis H₂O pada fotosistem II tetap terjadi selama ada cahaya.',
      e_kesimpulan: 'Opsi A, B, dan C benar.',
      f_analisisOpsi: 'A, B, C tepat secara biokimiawi. D salah karena itu ciri CAM (kaktus/nanas). E salah karena fotolisis air tetap terjadi di membran tilakoid.'
    },
    caraCepat: 'Trik cepat: • C3 = RuBisCO bisa selingkuh ikat O₂ (fotorespirasi boros). • C4 = Pemisahan SPASIAL (Mesofil PEP karboksilase + Seludang pembuluh). • CAM = Pemisahan WAKTU (malam fiksasi CO₂, siang siklus Calvin).',
    narasi: {
      stimulus: 'Pada soal nomor delapan belas, amati fenomena fotorespirasi pada enzim RuBisCO saat tanaman menutup stomata di cuaca terik.',
      pertanyaan: 'Pilihlah pernyataan yang menjelaskan kerugian fotorespirasi bagi tanaman C3 dan strategi cerdas adaptasi tanaman C4.',
      pembahasan: 'Tanaman C4 menggunakan enzim PEP karboksilase di sel mesofil yang kebal terhadap oksigen, lalu memompa CO2 murni ke sel seludang pembuluh.',
      caraCepat: 'Trik kilat: Jangan centang fiksasi malam hari karena itu karakteristik tanaman CAM, bukan C3!',
      refleksiBenar: 'Luar biasa! Pemahaman biokimia fotosintesis komparatif C3, C4, dan CAM kamu sangat mantap.',
      refleksiSalah: 'Ingat perbedaan mendasar: fiksasi malam hari adalah ciri khas tanaman CAM.'
    }
  },

  // 19. PG - Sistem Sirkulasi Manusia (Jantung dan Tekanan Darah)
  {
    id: 19,
    type: 'PG',
    topic: 'Sistem Sirkulasi Manusia',
    subtopic: 'Siklus Jantung, Katup Jantung, dan Tekanan Darah',
    difficulty: 'Menengah',
    cognitiveLevel: 'C4 (Menganalisis)',
    stimulusTitle: 'Peristiwa Mekanikal dan Akustik pada Fase Sistol Ventrikel Jantung',
    stimulusType: 'paragraph',
    stimulusContent: `Saat dokter melakukan auskultasi jantung menggunakan stetoskop pada pasien, terdengar bunyi jantung pertama ("lub") yang menandai dimulainya fase kontraksi isovolumetrik ventrikel (sistol ventrikel).
Pada fase ini:
1. Miokardium ventrikel sinister dan dexter berkontraksi kuat, memicu kenaikan tekanan intraventrikel yang sangat cepat melampaui tekanan intra-atrium.
2. Katup atrioventrikular (katup bikuspidalis/mitral dan trikuspidalis) menutup rapat secara serempak.
3. Sepersekian detik kemudian, tekanan ventrikel melampaui tekanan aorta dan arteri pulmonalis, menyebabkan katup semilunaris terbuka.`,
    questionText: 'Penyebab timbulnya bunyi jantung pertama ("lub") dan kondisi katup jantung saat awal sistol ventrikel berlangsung adalah...',
    options: [
      { key: 'A', text: 'Getaran turbulensi darah akibat penutupan mendadak katup atrioventrikular (bikuspidalis dan trikuspidalis) untuk mencegah aliran balik darah ke atrium' },
      { key: 'B', text: 'Penutupan katup semilunaris aorta dan pulmonalis akibat relaksasi ventrikel' },
      { key: 'C', text: 'Aliran deras darah yang menabrak dinding vena cava superior saat atrium terisi penuh' },
      { key: 'D', text: 'Gesekan antara lapisan perikardium parietal dan viseral saat diafragma bergerak turun' },
      { key: 'E', text: 'Terbukanya katup bikuspidalis yang memungkinkan darah menyembur ke dalam aorta ascendens' }
    ],
    correctAnswer: 'A',
    pembahasan: {
      a_memahamiPersoalan: 'Menjelaskan asal bunyi jantung pertama ("lub" / S1) dan status katup jantung pada fase sistol ventrikel.',
      b_identifikasiInformasi: 'Bunyi jantung I ("lub") terdengar pada awal sistol saat ventrikel memompa darah.',
      c_konsepBiologi: 'Bunyi jantung I (S1) dihasilkan oleh penutupan katup atrioventrikular (mitral/bikuspidalis dan trikuspidalis) saat ventrikel mulai berkontraksi. Ini mencegah regurgitasi (aliran balik) darah ke atrium. Bunyi jantung II (S2, "dub") dihasilkan oleh penutupan katup semilunaris (aorta dan pulmonalis) pada awal diastol.',
      d_analisisPenalaran: 'Kenaikan tekanan intraventrikel mendadak mendorong daun katup AV menutup ke arah atrium, ditahan oleh korda tendinea dan muskulus papilaris. Turbulensi penutupan katup inilah yang menghasilkan bunyi "lub".',
      e_kesimpulan: 'Jawaban yang tepat adalah A, penutupan katup AV untuk mencegah darah kembali ke atrium.',
      f_analisisOpsi: 'B salah (itu bunyi kedua "dub" / diastol). C salah (pengisian atrium tidak berbunyi). D salah (pericardial friction rub adalah penyakit). E salah (katup bikuspidalis menuju ventrikel kiri, bukan ke aorta; katup menuju aorta adalah semilunaris).'
    },
    caraCepat: 'Trik cepat: • Bunyi I ("LUB") = Katup AV (Bikuspid & Trikuspid) MENUTUP (awal sistol). • Bunyi II ("DUB") = Katup Semilunaris MENUTUP (awal diastol).',
    narasi: {
      stimulus: 'Pada soal nomor sembilan belas, pelajari siklus jantung dan asal-usul suara stetoskop dokter.',
      pertanyaan: 'Identifikasi katup mana yang menutup secara serentak pada bunyi jantung pertama "lub" saat ventrikel memompa.',
      pembahasan: 'Bunyi pertama menandai penutupan katup atrioventrikularis agar darah tidak membalik ke atrium saat ventrikel memeras darah.',
      caraCepat: 'Trik kilat: Lub = Katup AV tutup. Dub = Katup Semilunar tutup.',
      refleksiBenar: 'Tepat sekali! Pemahaman fisiologi kardiovaskularmu sangat baik.',
      refleksiSalah: 'Ingat: bunyi pertama berasal dari katup AV, bukan katup semilunaris.'
    }
  },

  // 20. BS - Sistem Ekskresi Manusia (Patologi Ginjal)
  {
    id: 20,
    type: 'BS',
    topic: 'Sistem Ekskresi Manusia',
    subtopic: 'Analisis Patologi Ginjal: Albuminuria, Diabetes Melitus, dan Diabetes Insipidus',
    difficulty: 'Menengah',
    cognitiveLevel: 'C4 (Menganalisis)',
    stimulusTitle: 'Profil Urinalisis Tiga Pasien di Poliklinik Nefrologi',
    stimulusType: 'table',
    stimulusContent: `Tiga orang pasien menjalani uji laboratorium urine untuk mendiagnosis kelainan metabolik dan ginjal:
- Pasien R: Volume urine normal (1,5 L/hari), uji Benedict menghasilkan endapan merah bata pekat (glukosa +++), sering merasa haus (polidipsia) dan lapar (polifagia).
- Pasien S: Volume urine sangat masif mencapai 12 liter/hari dengan massa jenis sangat rendah (encer menyerupai air), uji glukosa dan protein negatif, osmolaritas plasma darah meningkat.
- Pasien T: Volume urine berkurang (oliguria), urine berbusa, uji Biuret menghasilkan warna ungu pekat (protein +++), mengalami pembengkakan di area periorbital mata dan kaki.`,
    questionText: 'Tentukan BENAR atau SALAH pada kesimpulan diagnosis medis untuk ketiga pasien tersebut!',
    statements: [
      {
        id: 1,
        text: 'Pasien R mengalami diabetes melitus yang disebabkan oleh defisiensi sekresi hormon insulin atau resistensi reseptor insulin pada sel target.',
        correct: true
      },
      {
        id: 2,
        text: 'Pasien S mengalami diabetes insipidus akibat kegagalan sekresi hormon antidiuretik (ADH/vasopresin) oleh hipofisis posterior atau resistensi nefron terhadap ADH.',
        correct: true
      },
      {
        id: 3,
        text: 'Kondisi Pasien T disebabkan oleh kerusakan membran filtrasi glomerulus yang memungkinkan makromolekul protein plasma lolos ke dalam tubulus.',
        correct: true
      }
    ],
    pembahasan: {
      a_memahamiPersoalan: 'Memvalidasi diagnosis patologis tiga gangguan ekskresi utama: Diabetes Melitus, Diabetes Insipidus, dan Albuminuria/Sindrom Nefrotik.',
      b_identifikasiInformasi: 'Pasien R: Benedict merah bata -> glukosuria (Diabetes Melitus). Pasien S: Urine masif 12 L encer tanpa gula -> defisiensi ADH (Diabetes Insipidus). Pasien T: Biuret ungu -> proteinuria akibat kerusakan glomerulus.',
      c_konsepBiologi: 'Diabetes melitus ditandai glukosa darah melebihi ambang batas ginjal (180 mg/dL) sehingga melimpah ke urine. Diabetes insipidus ditandai hilangnya ekspresi akuaporin di tubulus kolektivus karena kurangnya ADH, menyebabkan poliuria encer ekstrem. Proteinuria timbul saat pori glomerulus robek/rusak.',
      d_analisisPenalaran: 'Semua pernyataan secara fisiologis dan patologis valid: Pernyataan 1 = BENAR (gejala klasik DM). Pernyataan 2 = BENAR (gejala klasik DI). Pernyataan 3 = BENAR (albuminuria akibat kerusakan filtrasi glomerulus).',
      e_kesimpulan: 'Pernyataan 1 = Benar, Pernyataan 2 = Benar, Pernyataan 3 = Benar.',
      f_analisisOpsi: 'Ketiga pernyataan ilmiah terbukti benar berdasarkan data laboratorik spesifik masing-masing pasien.'
    },
    caraCepat: 'Trik cepat: • Urine ada GULA (Benedict merah) = Diabetes MELITUS (masalah insulin). • Urine ENCER MELIMPAH (tanpa gula) = Diabetes INSIPIDUS (masalah ADH). • Urine ada PROTEIN (Biuret ungu) = ALBUMINURIA (kerusakan Glomerulus).',
    narasi: {
      stimulus: 'Pada soal nomor dua puluh, cermati hasil uji laboratorium urine pasien R, S, dan T pada stimulus.',
      pertanyaan: 'Validasi diagnosis penyakit untuk masing-masing pasien: perhatikan perbedaan antara diabetes melitus dan diabetes insipidus.',
      pembahasan: 'Pasien R positif glukosa akibat masalah insulin, pasien S mengalami poliuria akibat ketiadaan hormon ADH, dan pasien T mengalami kebocoran protein glomerulus.',
      caraCepat: 'Trik kilat: Benedict merah = Diabetes Melitus; Air melimpah tanpa rasa/gula = Diabetes Insipidus; Biuret ungu = Albuminuria. Ketiganya benar!',
      refleksiBenar: 'Luar biasa! Ketajaman analisismu dalam mendiagnosis kelainan ekskresi sangat tepat.',
      refleksiSalah: 'Cek kembali: ketiganya memiliki indikator khas yang masing-masing benar.'
    }
  },

  // 21. PGK - Sistem Respirasi Manusia (Volume dan Gas Darah)
  {
    id: 21,
    type: 'PGK',
    topic: 'Sistem Respirasi Manusia',
    subtopic: 'Kapasitas Paru-paru, Spirometri, dan Asidosis Respiratorik',
    difficulty: 'Sulit',
    cognitiveLevel: 'C4 (Menganalisis)',
    stimulusTitle: 'Pemeriksaan Spirometri dan Analisis Gas Darah pada Pasien Asma Akut',
    stimulusType: 'paragraph',
    stimulusContent: `Seorang remaja dibawa ke IGD dengan serangan asma bronkial akut. Terjadi bronkokonstriksi hebat (penyempitan jalan napas) disertai hipersekresi mukus kental pada lumen bronkiolus.
Pemeriksaan klinis menunjukkan:
- Rasio FEV1/FVC (volume ekspirasi paksa 1 detik terhadap kapasitas vital paksa) anjlok menjadi 52% (nilai normal >75%).
- Volume Tidal (VT) menurun menjadi 280 mL.
- Analisis Gas Darah (AGD): pH darah = 7,24 (normal 7,35–7,45); PaCO₂ = 58 mmHg (normal 35–45 mmHg); PaO₂ = 62 mmHg (normal 80–100 mmHg); HCO₃⁻ = 24 mEq/L.`,
    questionText: 'Pilihlah seluruh kesimpulan ilmiah yang BENAR mengenai kondisi fisiologis dan penanganan pasien tersebut! (Pilihlah lebih dari satu opsi)',
    options: [
      { key: 'A', text: 'Pasien mengalami asidosis respiratorik tidak terkompensasi akibat retensi gas CO₂ di dalam alveolus' },
      { key: 'B', text: 'Penyempitan bronkiolus meningkatkan resistensi aliran udara terutama selama fase ekspirasi aktif' },
      { key: 'C', text: 'Volume residu (udara yang tersisa di paru setelah ekspirasi maksimal) mengalami peningkatan akibat fenomena air-trapping di alveolus' },
      { key: 'D', text: 'Pemberian agonis reseptor beta-2 adrenergik (seperti salbutamol/inhaler) akan memicu bronkodilatasi dengan merelaksasi otot polos bronkus' },
      { key: 'E', text: 'Kapasitas Vital Paru (KVP) pasien meningkat tajam melampaui kapasitas total normal karena paru-paru menampung lebih banyak udara sisa' }
    ],
    correctAnswers: ['A', 'B', 'C', 'D'],
    pembahasan: {
      a_memahamiPersoalan: 'Menganalisis spirometri, patofisiologi asma bronkial, analisis gas darah (asidosis respiratorik), dan farmakologi bronkodilator.',
      b_identifikasiInformasi: 'FEV1 turun, pH 7,24 (asidosis), PaCO₂ 58 (tinggi -> respiratorik), HCO₃⁻ normal 24 (belum terkompensasi ginjal).',
      c_konsepBiologi: 'Asma adalah penyakit obstruksi saluran napas. Udara sulit keluar saat ekspirasi sehingga terperangkap (air trapping), menyebabkan Volume Residu (RV) naik dan FEV1 turun. Penumpukan CO₂ membentuk H₂CO₃ -> asidosis respiratorik. Obat agonis beta-2 mengaktifkan adenilat siklase merelaksasi otot polos bronkiolus.',
      d_analisisPenalaran: 'Opsi A benar: pH < 7,35 dan PaCO₂ tinggi = asidosis respiratorik. Opsi B benar: resistensi bronkiolus tinggi. Opsi C benar: air trapping menaikkan volume residu. Opsi D benar: agonis beta-2 melebarkan bronkiolus. Opsi E SALAH: Kapasitas Vital justru menurun karena jalan napas tersumbat dan elastisitas terhambat.',
      e_kesimpulan: 'Opsi A, B, C, dan D benar.',
      f_analisisOpsi: 'A, B, C, D tepat secara medis dan fisiologis. E salah karena pada gangguan obstruktif akut kapasitas vital paksa (FVC) selalu menurun, bukan meningkat.'
    },
    caraCepat: 'Trik cepat: Asma = Udara terperangkap di paru (Volume Residu naik, CO₂ numpuk -> Asidosis respiratorik). Obat = Salbutamol melebarkan jalan napas. Kapasitas vital pasti TURUN, jadi opsi E salah.',
    narasi: {
      stimulus: 'Pada soal nomor dua puluh satu, pelajari data spirometri dan analisis gas darah pasien asma akut.',
      pertanyaan: 'Periksa jenis gangguan asam-basa, volume paru yang terpengaruh, dan mekanisme obat pelega pernapasan.',
      pembahasan: 'Retensi CO2 akibat sumbatan bronkiolus menurunkan pH darah, menimbulkan asidosis respiratorik. Udara terjebak di alveolus meningkatkan volume residu.',
      caraCepat: 'Trik kilat: Kapasitas vital pada serangan asma selalu menurun karena ekspirasi tersumbat. Jangan pilih opsi E!',
      refleksiBenar: 'Luar biasa! Pemahaman patofisiologi sistem pernapasanmu setara calon dokter hebat.',
      refleksiSalah: 'Ingat, kapasitas vital paru pada pasien asma selalu menurun, bukan meningkat.'
    }
  },

  // 22. PG - Sistem Imun Manusia (Mekanisme Sitotoksik & MHC)
  {
    id: 22,
    type: 'PG',
    topic: 'Sistem Imun Manusia',
    subtopic: 'Imunitas Seluler, Kompleks Histokompatibilitas Utama (MHC), dan Perforin',
    difficulty: 'Sangat Sulit',
    cognitiveLevel: 'C5 (Mengevaluasi)',
    stimulusTitle: 'Mekanisme Eliminasi Sel Kanker dan Sel Terinfeksi Virus oleh Limfosit T Sitotoksik',
    stimulusType: 'paragraph',
    stimulusContent: `Sel-sel tubuh berinti secara konstan memotong sampel protein endogen sitosol menggunakan proteasom dan mempresentasikannya ke permukaan membran berikatan dengan molekul Mayor Histocompatibility Complex Kelas I (MHC-I).
Ketika sebuah sel tubuh terinfeksi virus atau bertransformasi menjadi sel kanker:
1. Fragmen peptida virus/kanker asing dipresentasikan bersama molekul MHC-I di permukaan sel.
2. Sel Limfosit T Sitotoksik (CTL / sel CD8⁺) mengenali kompleks peptida-MHC-I tersebut secara spesifik melalui reseptor sel T (TCR).
3. CTL mensekresikan protein perforin dan enzim granzim B ke ruang antar-sel yang bersentuhan erat.`,
    questionText: 'Bagaimanakah mekanisme kerja protein perforin dan granzim B dalam mengeliminasi sel target yang terinfeksi tersebut?',
    options: [
      { key: 'A', text: 'Perforin membentuk pori silindris pada membran sel target, memungkinkan granzim B masuk dan mengaktifkan kaskade enzim kaspase yang memicu apoptosis sel target' },
      { key: 'B', text: 'Perforin bertindak sebagai antibodi opsonin yang menggumpalkan antigen virus agar mudah ditelan oleh eritrosit' },
      { key: 'C', text: 'Granzim B langsung mencerna DNA inti sel target dari luar membran tanpa perlu menembus sitoplasma' },
      { key: 'D', text: 'Perforin menyerap kelebihan ion kalium dari sel target sehingga sel mengalami plasmolisis dan mengerut' },
      { key: 'E', text: 'Granzim B menstimulasi sel target untuk memperbanyak pembelahan mitosis agar virus di dalamnya terdilusi' }
    ],
    correctAnswer: 'A',
    pembahasan: {
      a_memahamiPersoalan: 'Menjelaskan mekanisme biokimiawi seluler perforin dan granzim B yang dilepaskan oleh limfosit T sitotoksik (CD8⁺).',
      b_identifikasiInformasi: 'CTL mengenali MHC-I + antigen asing -> melepaskan granula berisi perforin dan granzim B.',
      c_konsepBiologi: 'Perforin berpolimerisasi pada membran plasma sel target membentuk pori-pori transmembran. Melalui pori ini, granzim B (serine protease) masuk ke sitosol sel target dan membelah prokaspase menjadi kaspase aktif, memicu apoptosis terprogram (fragmentasi DNA genomik dan blebbing membran) secara bersih tanpa memicu lisis inflamatorik masif.',
      d_analisisPenalaran: 'Kombinasi perforin (pelubang pori) dan granzim B (pemicu kaspase/apoptosis) adalah mekanisme canonical pembunuhan sel target oleh CTL dan sel Natural Killer (NK).',
      e_kesimpulan: 'Jawaban tepat adalah A, perforin membuat pori membran, granzim mengaktivasi kaspase untuk memicu apoptosis.',
      f_analisisOpsi: 'B salah (perforin bukan antibodi, eritrosit bukan fagosit). C salah (granzim B butuh masuk ke sitosol via pori perforin). D salah (perforin membuat pori, bukan menyerap ion kalium selektif). E salah (tujuan imunitas adalah membunuh sel, bukan memperbanyak mitosis).'
    },
    caraCepat: 'Trik cepat: Ingat nama "PERFORIN" = membuat PERFORASI (lubang/pori). "GRANZIM" = masuk lewat pori mengaktifkan KASPASE memicu APOPTOSIS (kematian sel terprogram).',
    narasi: {
      stimulus: 'Pada soal nomor dua puluh dua, amati interaksi antara sel T sitotoksik dan molekul MHC kelas I pada sel terinfeksi virus.',
      pertanyaan: 'Fokus pada peran duet maut dua molekul pembunuh: perforin dan enzim granzim B.',
      pembahasan: 'Perforin membuat lubang pori di membran, lalu granzim menyusup masuk mengaktifkan enzim kaspase untuk mengeksekusi apoptosis sel.',
      caraCepat: 'Trik kilat: Perforin membuat pori, Granzim mengaktifkan kaspase pemicu apoptosis. Rumus ini pasti tepat!',
      refleksiBenar: 'Hebat sekali! Penguasaan imunologi molekuler MHC dan sel sitotoksik kamu sangat mengagumkan.',
      refleksiSalah: 'Ingat: perforin membuat perforasi pori, granzim memicu jalur kematian apoptosis.'
    }
  },

  // 23. PGK - Sistem Koordinasi Manusia (Regulasi Gula Darah)
  {
    id: 23,
    type: 'PGK',
    topic: 'Sistem Koordinasi Manusia',
    subtopic: 'Regulasi Hormon Glukosa Darah: Insulin, Glukagon, dan Mekanisme Umpan Balik Negatif',
    difficulty: 'Menengah',
    cognitiveLevel: 'C4 (Menganalisis)',
    stimulusTitle: 'Dinamika Homeostasis Kadar Glukosa Darah Pasca-Konsumsi Karbohidrat Kompleks',
    stimulusType: 'paragraph',
    stimulusContent: `Setelah seseorang mengonsumsi sarapan kaya karbohidrat, kadar glukosa plasma darahnya melonjak dari 85 mg/dL menjadi 160 mg/dL dalam waktu 45 menit.
Sistem endokrin pulau Langerhans pankreas segera merespons fluktuasi ini untuk memulihkan homeostasis glukosa ke rentang fisiologis normal (70–110 mg/dL):
1. Sel Beta pankreas mendeteksi peningkatan influks glukosa via transporter GLUT2, memicu penutupan kanal K⁺ peka-ATP, depolarisasi, dan eksositosis hormon insulin.
2. Dua jam kemudian, saat glukosa darah mulai turun di bawah batas fisiologis akibat puasa sementara, sel Alfa pankreas mensekresikan hormon glukagon.`,
    questionText: 'Pilihlah seluruh peristiwa biokimiawi dan respon fisiologis yang BENAR di bawah kendali kedua hormon tersebut! (Pilihlah lebih dari satu opsi)',
    options: [
      { key: 'A', text: 'Insulin memicu translokasi transporter glukosa GLUT4 ke membran plasma sel otot rangka dan adiposit, mempercepat ambilan glukosa dari darah' },
      { key: 'B', text: 'Insulin mengaktivasi enzim glikogen sintase di sel hati (hepatosit) untuk mengubah kelebihan glukosa menjadi cadangan glikogen (glikogenesis)' },
      { key: 'C', text: 'Glukagon berikatan dengan reseptor terkopel protein G (GPCR) di membran sel hati untuk memicu penguraian glikogen menjadi glukosa bebas (glikogenolisis)' },
      { key: 'D', text: 'Glukagon menstimulasi sintesis asam lemak dan trigliserida dari glukosa (lipogenesis) pada jaringan lemak bawah kulit' },
      { key: 'E', text: 'Hormon insulin dan glukagon bekerja secara sinergis searah untuk menaikkan konsentrasi glukosa darah saat berolahraga' }
    ],
    correctAnswers: ['A', 'B', 'C'],
    pembahasan: {
      a_memahamiPersoalan: 'Menganalisis mekanisme kerja molekuler insulin (penurun glukosa) dan glukagon (penaikan glukosa) pada organ target.',
      b_identifikasiInformasi: 'Insulin disekresikan saat gula darah tinggi (pasca-makan). Glukagon saat gula darah rendah (puasa).',
      c_konsepBiologi: 'Insulin: menaikkan ambilan glukosa via translokasi GLUT4 di otot/lemak, memacu glikogenesis di hati, memacu lipogenesis. Glukagon: mengaktifkan adenilat siklase -> cAMP -> memacu glikogenolisis dan glukoneogenesis di hati agar glukosa dilepas ke darah. Keduanya bersifat ANTAGONIS (berlawanan), bukan sinergis.',
      d_analisisPenalaran: 'Opsi A benar: GLUT4 ditranslokasikan ke membran oleh insulin. Opsi B benar: insulin memicu glikogenesis. Opsi C benar: glukagon memicu glikogenolisis via jalur GPCR di hepar. Opsi D SALAH: glukagon justru memicu pemecahan lemak (lipolisis), sedangkan lipogenesis dipacu oleh insulin. Opsi E SALAH: insulin dan glukagon bekerja secara antagonis, bukan sinergis searah.',
      e_kesimpulan: 'Opsi A, B, dan C benar.',
      f_analisisOpsi: 'A, B, C benar. D salah karena lipogenesis dipicu insulin. E salah karena kedua hormon bersifat antagonis.'
    },
    caraCepat: 'Trik cepat: • INSULIN = Masukkan gula ke sel (buka pintu GLUT4, simpan jadi glikogen & lemak). • GLUKAGON = "Glukosa-is-Gone" -> Bongkar cadangan glikogen di hati jadi glukosa darah. Hubungan keduanya ANTAGONIS!',
    narasi: {
      stimulus: 'Pada soal nomor dua puluh tiga, perhatikan mekanisme umpan balik homeostasis kadar glukosa darah oleh insulin dan glukagon.',
      pertanyaan: 'Identifikasi kerja sel target: transporter GLUT4, pembentukan glikogen, serta sifat hubungan antara kedua hormon ini.',
      pembahasan: 'Insulin menurunkan gula darah dengan memasukkannya ke sel via GLUT4, sedangkan glukagon membongkar glikogen hati saat kita lapar.',
      caraCepat: 'Trik kilat: Insulin dan glukagon selalu bersifat antagonis (berlawanan arah), jangan pernah pilih opsi yang menyebut keduanya sinergis!',
      refleksiBenar: 'Tepat sekali! Pemahaman endokrinologi regulasi glukosa kamu sangat kokoh.',
      refleksiSalah: 'Ingat: insulin dan glukagon bersifat antagonis, bukan sinergis.'
    }
  },

  // 24. BS - Sistem Reproduksi Manusia (Siklus Menstruasi)
  {
    id: 24,
    type: 'BS',
    topic: 'Sistem Reproduksi Manusia',
    subtopic: 'Siklus Menstruasi, Fluktuasi Hormon Hipofisis dan Ovarium',
    difficulty: 'Menengah',
    cognitiveLevel: 'C4 (Menganalisis)',
    stimulusTitle: 'Fluktuasi Hormon LH, FSH, Estrogen, dan Progesteron pada Siklus 28 Hari',
    stimulusType: 'graph',
    stimulusContent: `Pada siklus menstruasi rata-rata 28 hari seorang wanita:
- Hari 1–5: Fase menstruasi, peluruhan stratum fungsionale endometrium akibat penurunan drastis kadar estrogen dan progesteron.
- Hari 6–13: Fase folikular/proliferasi, sekresi FSH memicu pematangan folikel ovarium yang mensekresikan estrogen untuk memicu regenerasi dinding rahim.
- Hari 14: Lonjakan tajam sekresi Luteinizing Hormone (LH surge) dari adenohipofisis memicu pecahnya folikel de Graaf dan pelepasan oosit sekunder (ovulasi).
- Hari 15–28: Fase luteal/sekretori, sisa folikel berubah menjadi korpus luteum yang aktif mensekresikan progesteron dalam jumlah masif.`,
    diagramId: 'diagram-siklus-menstruasi',
    questionText: 'Tentukan BENAR atau SALAH pada pernyataan-pernyataan endokrin reproduksi berikut!',
    statements: [
      {
        id: 1,
        text: 'Lonjakan tajam hormon LH (LH surge) pada hari ke-14 dipicu oleh mekanisme umpan balik positif dari kadar estrogen yang mencapai ambang konsentrasi tinggi sesaat sebelum ovulasi.',
        correct: true
      },
      {
        id: 2,
        text: 'Tingginya kadar hormon progesteron pada fase luteal mempertahankan ketebalan dan vaskularisasi kelenjar endometrium rahim untuk persiapan implantasi embrio.',
        correct: true
      },
      {
        id: 3,
        text: 'Jika fertilisasi tidak terjadi, korpus luteum akan terus membesar dan memproduksi hormon hCG untuk mencegah terjadinya menstruasi berikutnya.',
        correct: false
      }
    ],
    pembahasan: {
      a_memahamiPersoalan: 'Memvalidasi konsep hormonal siklus menstruasi: umpan balik positif estrogen terhadap LH, fungsi progesteron, dan nasib korpus luteum tanpa kehamilan.',
      b_identifikasiInformasi: 'Hari 14 lonjakan LH memicu ovulasi. Fase luteal progesteron tinggi. Pasca fase luteal tanpa fertilisasi terjadi regresi korpus luteum.',
      c_konsepBiologi: 'Kadar estrogen tinggi di akhir fase folikular memberikan umpan balik positif langka ke hipofisis, memicu lonjakan LH (LH surge) yang menyebabkan ovulasi. Korpus luteum menghasilkan progesteron penstabil endometrium. Jika tidak hamil, korpus luteum berdegenerasi menjadi korpus albikans (mati), progesteron anjlok, dan terjadilah menstruasi. Hormon hCG hanya diproduksi oleh trofoblas embrio jika terjadi kehamilan.',
      d_analisisPenalaran: 'Pernyataan 1: BENAR (umpan balik positif estrogen memicu LH surge). Pernyataan 2: BENAR (fungsi esensial progesteron menjaga desidua endometrium). Pernyataan 3: SALAH (korpus luteum tanpa fertilisasi berdegenerasi menjadi korpus albikans, dan hCG disekresikan oleh embrio/plasenta, bukan oleh korpus luteum yang tak dibuahi).',
      e_kesimpulan: 'Pernyataan 1 = Benar, Pernyataan 2 = Benar, Pernyataan 3 = Salah.',
      f_analisisOpsi: '1: Benar (umpan balik positif ovulasi). 2: Benar (progesteron menstabilkan rahim). 3: Salah (korpus luteum menyusut jadi albikans, hCG dibuat oleh sel embrio).'
    },
    caraCepat: 'Trik cepat: Jika TIDAK HAMIL, korpus luteum MENYUSUT (degenerasi) menjadi korpus albikans putih. Hormon hCG hanya ada jika HAMIL (dibuat oleh embrio). Jadi pernyataan 3 langsung SALAH!',
    narasi: {
      stimulus: 'Pada soal nomor dua puluh empat, amati Grafik 7 fluktuasi hormon siklus reproduksi wanita.',
      pertanyaan: 'Periksa penyebab lonjakan LH di hari ke-14 dan nasib korpus luteum jika tidak terjadi pembuahan.',
      pembahasan: 'Lonjakan LH dipicu oleh umpan balik positif estrogen. Tanpa kehamilan, korpus luteum mati mengecil menjadi korpus albikans, memicu menstruasi.',
      caraCepat: 'Trik kilat: Korpus luteum tidak memproduksi hormon hCG; hCG adalah tanda khas adanya konsepsi dari embrio.',
      refleksiBenar: 'Hebat! Pemahaman fisiologi reproduksi hormonalmu sangat matang.',
      refleksiSalah: 'Ingat: korpus luteum akan mati menjadi korpus albikans jika tidak ada fertilisasi.'
    }
  },

  // 25. PG - Keterampilan Proses Sains (Desain Eksperimen Variabel)
  {
    id: 25,
    type: 'PG',
    topic: 'Keterampilan Proses dan Penalaran Biologi',
    subtopic: 'Perumusan Hipotesis, Identifikasi Variabel Kontrol, Manipulasi, dan Respon',
    difficulty: 'Menengah',
    cognitiveLevel: 'C6 (Merancang Solusi)',
    stimulusTitle: 'Desain Eksperimen Uji Pengaruh Panjang Gelombang Cahaya terhadap Fotolisis Air',
    stimulusType: 'paragraph',
    stimulusContent: `Sekelompok siswa ingin menguji spektrum cahaya yang paling efektif memacu reaksi terang fotosintesis pada tumbuhan air Hydrilla verticillata menggunakan corong kaca dan tabung reaksi terbalik.
Mereka menyiapkan 5 perangkat percobaan identik dengan volume air, jumlah ranting Hydrilla, suhu (25°C), dan konsentrasi NaHCO₃ (sumber CO₂) yang sama persis:
- Perangkat A: Diberi sungkup mika transparan bening (kontrol cahaya putih).
- Perangkat B: Diberi sungkup mika merah (panjang gelombang ~660 nm).
- Perangkat C: Diberi sungkup mika biru (panjang gelombang ~450 nm).
- Perangkat D: Diberi sungkup mika hijau (panjang gelombang ~520 nm).
- Perangkat E: Diberi sungkup mika kuning (panjang gelombang ~580 nm).
Jumlah gelembung gas oksigen (O₂) yang tertampung di ujung tabung reaksi dihitung setiap 10 menit selama 1 jam.`,
    questionText: 'Berdasarkan rancangan eksperimen tersebut, manakah identifikasi variabel yang BENAR sesuai kaidah metode ilmiah?',
    options: [
      { key: 'A', text: 'Variabel bebas: panjang gelombang cahaya; Variabel terikat: jumlah gelembung gas O₂ yang dihasilkan per satuan waktu; Variabel kontrol: suhu, konsentrasi NaHCO₃, dan massa Hydrilla' },
      { key: 'B', text: 'Variabel bebas: jumlah gelembung gas O₂; Variabel terikat: jenis warna sungkup mika; Variabel kontrol: intensitas fotosintesis' },
      { key: 'C', text: 'Variabel bebas: konsentrasi NaHCO₃; Variabel terikat: panjang gelombang cahaya; Variabel kontrol: suhu ruangan' },
      { key: 'D', text: 'Variabel bebas: jenis tanaman Hydrilla; Variabel terikat: suhu air; Variabel kontrol: jumlah gelembung O₂' },
      { key: 'E', text: 'Variabel bebas: volume air di corong; Variabel terikat: waktu pengukuran; Variabel kontrol: warna mika' }
    ],
    correctAnswer: 'A',
    pembahasan: {
      a_memahamiPersoalan: 'Mengidentifikasi variabel bebas (manipulasi), variabel terikat (respon), dan variabel kontrol (terkendali) dalam eksperimen fotosintesis Engelmann/Ingenhousz modifikasi.',
      b_identifikasiInformasi: 'Yang sengaja diubah-ubah peneliti: warna sungkup mika (panjang gelombang cahaya). Yang diamati/diukur: jumlah gelembung O₂. Yang dijaga konstan: suhu, NaHCO₃, Hydrilla.',
      c_konsepBiologi: 'Variabel bebas adalah faktor yang dimanipulasi oleh peneliti. Variabel terikat adalah hasil/respon yang diukur akibat perlakuan variabel bebas. Variabel kontrol adalah parameter lain yang dijaga identik agar tidak mengacaukan hasil eksperimen (menjaga validitas internal).',
      d_analisisPenalaran: 'Variabel bebas = panjang gelombang cahaya (warna mika). Variabel terikat = laju pelepasan O₂ (jumlah gelembung). Variabel kontrol = suhu, NaHCO₃, dan biomassa tanaman.',
      e_kesimpulan: 'Jawaban yang tepat adalah A.',
      f_analisisOpsi: 'B salah (bebas dan terikat terbalik). C, D, E salah karena mengacaukan definisi variabel ilmiah.'
    },
    caraCepat: 'Trik cepat: • Variabel BEBAS = Yang DIUBAH-UBAH sengaja (Warna mika / panjang gelombang). • Variabel TERIKAT = Yang DIUKUR hasilnya (Jumlah gelembung O₂). • Variabel KONTROL = Yang DIBIKIN SAMA (Suhu, NaHCO₃).',
    narasi: {
      stimulus: 'Pada soal nomor dua puluh lima, pelajari desain eksperimen fotosintesis Hydrilla dengan filter spektrum warna berbeda.',
      pertanyaan: 'Identifikasi mana variabel yang sengaja dimanipulasi, mana yang diukur sebagai respon, dan mana yang dijaga tetap konstan.',
      pembahasan: 'Warna mika adalah variabel manipulasi bebas, jumlah gelembung oksigen adalah variabel respon terikat, dan faktor lingkungan lainnya adalah kontrol.',
      caraCepat: 'Trik kilat: Bebas = yang diubah (warna cahaya). Terikat = hasil ukur (gelembung gas). Kontrol = dijaga sama.',
      refleksiBenar: 'Keren! Keterampilan metodologi ilmiah dan logika eksperimenmu sangat kuat.',
      refleksiSalah: 'Ingat kaidah ilmiah: variabel bebas adalah hal yang sengaja diubah oleh peneliti.'
    }
  },

  // 26. PGK - Keanekaragaman Hayati (Konservasi In Situ vs Ex Situ)
  {
    id: 26,
    type: 'PGK',
    topic: 'Keanekaragaman Hayati dan Klasifikasi',
    subtopic: 'Strategi Konservasi In Situ dan Ex Situ Spesies Terancam Punah',
    difficulty: 'Menengah',
    cognitiveLevel: 'C5 (Mengevaluasi)',
    stimulusTitle: 'Upaya Penyelamatan Badak Jawa (Rhinoceros sondaicus) dari Kepunahan',
    stimulusType: 'paragraph',
    stimulusContent: `Populasi Badak Jawa (Rhinoceros sondaicus) di alam liar saat ini hanya tersisa sekitar 75-80 individu dan terkonsentrasi seluruhnya di Semenanjung Taman Nasional Ujung Kulon, Banten.
Kondisi ini menempatkan Badak Jawa pada status Kritis (Critically Endangered / CR) oleh IUCN akibat ancaman:
1. Ancaman bencana alam erupsi Gunung Anak Krakatau dan tsunami di Selat Sunda.
2. Invasi tumbuhan langkap (Arenga obtusifolia) yang menekan pertumbuhan pakan alami badak.
3. Kerentanan depresi silang dalam (inbreeding depression) dan transmisi wabah penyakit dari banteng liar.
Kementerian Lingkungan Hidup merancang kombinasi strategi konservasi in situ dan persiapan suaka populasi kedua (ex situ / habitat sekunder).`,
    questionText: 'Pilihlah seluruh evaluasi kebijakan konservasi yang TEPAT dan berlandaskan prinsip biologi konservasi! (Pilihlah lebih dari satu opsi)',
    options: [
      { key: 'A', text: 'Perlindungan dan restorasi habitat di Taman Nasional Ujung Kulon merupakan bentuk konservasi in situ karena dilakukan di dalam habitat alami aslinya' },
      { key: 'B', text: 'Pembangunan Suaka Badak Jawa di kawasan hutan terkelola di luar Ujung Kulon sebagai populasi kedua bertujuan memitigasi risiko kepunahan akibat bencana katastropik' },
      { key: 'C', text: 'Ukuran populasi efektif yang sangat kecil (<100 individu) meningkatkan risiko hanyutan genetik acak (genetic drift) dan hilangnya heterozigositas genetik' },
      { key: 'D', text: 'Pelepasan predator mamalia puncak baru ke Semenanjung Ujung Kulon direkomendasikan untuk menyeleksi badak yang lemah secara alami' },
      { key: 'E', text: 'Penangkaran badak di kebun binatang komersial perkotaan lebih diprioritaskan dibanding mempertahankan hutan hujan alami' }
    ],
    correctAnswers: ['A', 'B', 'C'],
    pembahasan: {
      a_memahamiPersoalan: 'Mengevaluasi strategi biologi konservasi in situ vs ex situ serta ancaman genetik pada populasi satwa yang sangat terisolasi.',
      b_identifikasiInformasi: 'Badak Jawa tersisa <80 ekor di 1 lokasi (Ujung Kulon). Terancam bencana geologi dan depresi inbreeding.',
      c_konsepBiologi: 'In situ = konservasi di habitat asli (Taman Nasional, Cagar Alam). Ex situ = di luar habitat asli (Taman Safari, Kebun Raya, Bank Sperma). Populasi kecil sangat rentan terhadap genetic drift dan inbreeding depression, serta risiko kepunahan seketika jika terjadi satu bencana alam (single population risk).',
      d_analisisPenalaran: 'Opsi A benar: TN Ujung Kulon adalah in situ. Opsi B benar: mendirikan suaka habitat kedua memecah risiko katastropik tsunami/erupsi. Opsi C benar: populasi <100 ekor rentan kehilangan keanekaragaman alel. Opsi D SALAH: badak jawa sudah sangat kritis, melepas predator justru mempercepat kepunahan. Opsi E SALAH: konservasi habitat alami in situ selalu menjadi prioritas tertinggi.',
      e_kesimpulan: 'Opsi A, B, dan C benar.',
      f_analisisOpsi: 'A, B, C berlandaskan kaidah biologi konservasi. D dan E bertentangan dengan prinsip keselamatan spesies kritis.'
    },
    caraCepat: 'Trik cepat: • In situ = Habitat ASLI (Ujung Kulon). • Ex situ = DI LUAR habitat asli. • Populasi kecil = Genetic drift tinggi & butuh habitat kedua agar tidak punah sekaligus oleh satu bencana.',
    narasi: {
      stimulus: 'Pada soal nomor dua puluh enam, amati kondisi kritis populasi Badak Jawa yang hanya tersisa di satu titik semenanjung.',
      pertanyaan: 'Pilihlah strategi konservasi yang valid berdasarkan prinsip in situ, mitigasi bencana populasi tunggal, dan genetika populasi.',
      pembahasan: 'Konservasi di habitat asli adalah in situ, dan menciptakan populasi kedua sangat krusial untuk mencegah kepunahan total akibat bencana alam Krakatau.',
      caraCepat: 'Trik kilat: Pilih A, B, dan C. Hindari opsi ceroboh seperti melepaskan predator atau mengabaikan habitat alami.',
      refleksiBenar: 'Tepat sekali! Penalaran biologi konservasi dan ekologi satwa liar kamu sangat bijak.',
      refleksiSalah: 'Cek kembali: jangan pilih opsi yang menambah ancaman bagi satwa langka.'
    }
  },

  // 27. PG - Ekosistem (Piramida Biomassa & Aliran Energi)
  {
    id: 27,
    type: 'PG',
    topic: 'Ekosistem',
    subtopic: 'Perbandingan Piramida Biomassa Ekosistem Terestrial dan Akuatik Laut Bebas',
    difficulty: 'Sulit',
    cognitiveLevel: 'C4 (Menganalisis)',
    stimulusTitle: 'Fenomena Piramida Biomassa Terbalik pada Ekosistem Pelagik Laut Lepas',
    stimulusType: 'paragraph',
    stimulusContent: `Pada ekosistem terestrial (hutan hujan tropis), piramida biomassa selalu berbentuk tegak normal, di mana biomassa tegakan pohon berkayu (produsen) jauh melampaui biomassa herbivora dan karnivora.
Namun, pada ekosistem laut lepas pelagik, para oseanografer menemukan fenomena unik: biomassa sesaat (standing crop) dari fitoplankton (produsen primer) tercatat hanya 4 g/m², sedangkan biomassa zooplankton herbivora (konsumen I) mencapai 21 g/m². 
Meskipun demikian, ekosistem laut ini tetap stabil, produktif, dan tidak mengalami keruntuhan piramida energi.`,
    questionText: 'Penjelasan ilmiah yang paling tepat mendasari mengapa piramida biomassa laut lepas dapat berbentuk terbalik namun tetap lestari adalah...',
    options: [
      { key: 'A', text: 'Fitoplankton memiliki laju pergantian (turnover rate) dan reproduksi yang luar biasa cepat sehingga laju produksi energi primernya sangat tinggi meski biomassa sesaatnya kecil' },
      { key: 'B', text: 'Zooplankton mampu melakukan fotosintesis tambahan melalui kloroplas simbiotik sehingga tidak bergantung sepenuhnya pada fitoplankton' },
      { key: 'C', text: 'Fitoplankton di laut menyerap molekul nitrogen anorganik tanpa memerlukan energi sinar matahari' },
      { key: 'D', text: 'Hukum termodinamika II tidak berlaku pada lingkungan perairan yang memiliki kadar salinitas tinggi' },
      { key: 'E', text: 'Karnivora puncak di laut menguraikan biomassa zooplankton menjadi fitoplankton secara langsung' }
    ],
    correctAnswer: 'A',
    pembahasan: {
      a_memahamiPersoalan: 'Menjelaskan anomali piramida biomassa terbalik (inverted biomass pyramid) pada ekosistem akuatik pelagik.',
      b_identifikasiInformasi: 'Biomassa fitoplankton (4 g/m²) < zooplankton (21 g/m²), tetapi sistem stabil.',
      c_konsepBiologi: 'Biomassa sesaat (standing crop) berbeda dengan produktivitas primer. Fitoplankton uniseluler memiliki siklus hidup sangat singkat (hitungan hari) dan membelah sangat cepat (laju turnover tinggi). Meskipun berat tubuh sesaatnya sedikit, akumulasi energi yang diproduksi per tahun sangat melimpah untuk menopang biomassa zooplankton yang berumur lebih panjang.',
      d_analisisPenalaran: 'Karena biomassa fitoplankton dimakan secepat ia membelah, biomassa sesaatnya terlihat kecil. Namun jika diukur dalam piramida ENERGI (kkal/m²/tahun), bentuknya tetap tegak normal sesuai hukum termodinamika.',
      e_kesimpulan: 'Jawaban yang tepat adalah A, laju turnover dan laju pembelahan sel fitoplankton yang sangat tinggi.',
      f_analisisOpsi: 'B salah (zooplankton murni heterotrof). C salah (fitoplankton tetap butuh matahari). D salah (hukum fisika termodinamika berlaku universal di manapun). E salah (tidak ada dekomposisi karnivora jadi fitoplankton).'
    },
    caraCepat: 'Trik cepat: Piramida biomassa laut bisa TERBALIK karena Fitoplankton ukurannya mikro dan membelah super kilat ("TURNOVER RATE tinggi"). Namun piramida energinya tetap TEGAK!',
    narasi: {
      stimulus: 'Pada soal nomor dua puluh tujuh, perhatikan fenomena piramida biomassa terbalik di ekosistem laut pelagik.',
      pertanyaan: 'Mengapa biomassa produsen yang terlihat sedikit mampu menyokong biomassa konsumen yang lebih besar?',
      pembahasan: 'Kuncinya adalah laju turnover! Fitoplankton membelah sangat cepat dalam hitungan jam sehingga aliran energinya tetap melimpah ruah.',
      caraCepat: 'Trik kilat: Cari opsi yang menjelaskan laju pergantian (turnover rate) dan kecepatan reproduksi fitoplankton.',
      refleksiBenar: 'Tepat sekali! Membedakan standing crop dan produktivitas energi adalah ciri pemikir biologi handal.',
      refleksiSalah: 'Ingat, fitoplankton memiliki laju turnover yang sangat tinggi sehingga energinya cukup.'
    }
  },

  // 28. PGK - Metabolisme Sel dan Enzim (Kemiosmosis & ATP Sintase)
  {
    id: 28,
    type: 'PGK',
    topic: 'Metabolisme Sel dan Enzim',
    subtopic: 'Mekanisme Kemiosmosis Peter Mitchell dan Rotasi Motorik ATP Sintase',
    difficulty: 'Sangat Sulit',
    cognitiveLevel: 'C5 (Mengevaluasi)',
    stimulusTitle: 'Mekanisme Rotasi Kompleks F0-F1 ATP Sintase pada Fosforilasi Oksidatif',
    stimulusType: 'paragraph',
    stimulusContent: `Kompleks enzim ATP sintase (Kompleks V) pada membran dalam mitokondria bertindak sebagai generator molekuler nano yang mengubah energi gradien elektrokimia proton menjadi energi kimiawi ATP.
Kompleks ini tersusun atas dua subunit utama:
1. Subunit F₀: Saluran transmembran hidrofobik yang tertanam di membran dalam mitokondria, terdiri atas cincin c yang dapat berputar saat dilewati proton H⁺.
2. Subunit F₁: Kepala bulat hidrofilik yang menonjol ke dalam matriks mitokondria, terdiri atas subunit katalitik (α₃β₃) dan tangkai sentral γ.
Aliran proton dari ruang antarmembran (konsentrasi H⁺ tinggi, bermuatan positif) kembali ke matriks mitokondria (konsentrasi H⁺ rendah, bermuatan negatif) memutar tangkai γ, memicu perubahan konformasi subunit β (Open, Loose, Tight) untuk memfosforilasi ADP + Pi menjadi ATP.`,
    questionText: 'Manakah pernyataan yang BENAR mengenai mekanisme kemiosmosis dan gangguan molekuler pada kompleks ATP sintase? (Pilihlah lebih dari satu opsi)',
    options: [
      { key: 'A', text: 'Gaya gerak proton (proton motive force) yang menggerakkan rotor F₀ terdiri atas gabungan gradien konsentrasi kimiawi (ΔpH) dan gradien potensial listrik membran (ΔΨ)' },
      { key: 'B', text: 'Senyawa uncoupler seperti 2,4-dinitrofenol (DNP) dapat menghamburkan gradien proton H⁺ tanpa menghambat rantai transpor elektron, sehingga sintesis ATP terhenti sementara energi dilepaskan sebagai panas' },
      { key: 'C', text: 'Antibiotik oligomisin secara spesifik mengikat subunit F₀, menghalangi saluran aliran proton sehingga sintesis ATP dan rotasi motorik terhenti total' },
      { key: 'D', text: 'Proton H⁺ dipompa oleh ATP sintase dari matriks mitokondria keluar ke sitoplasma sel melalui transpor aktif primer' },
      { key: 'E', text: 'Sintesis satu molekul ATP oleh subunit F₁ membutuhkan hidrolisis langsung satu molekul glukosa di dalam matriks' }
    ],
    correctAnswers: ['A', 'B', 'C'],
    pembahasan: {
      a_memahamiPersoalan: 'Mengevaluasi prinsip biokimia kemiosmosis Peter Mitchell, arsitektur rotor F₀-F₁, efek uncoupler DNP, dan inhibitor oligomisin.',
      b_identifikasiInformasi: 'ATP sintase digerakkan oleh gradien elektrokimia proton dari ruang antarmembran ke matriks.',
      c_konsepBiologi: 'Proton motive force adalah kombinasi gradien pH dan voltase listrik membran. DNP melubangi membran sehingga H⁺ bocor -> energi transpor elektron terbuang jadi panas (uncoupling). Oligomisin menyumbat saluran F₀. Proton mengalir MASUK ke matriks, bukan dipompa keluar oleh ATP sintase (yang memompa keluar adalah Kompleks I, III, IV).',
      d_analisisPenalaran: 'Opsi A benar: gaya gerak proton = ΔpH + ΔΨ. Opsi B benar: DNP adalah uncoupler termogenik klasik. Opsi C benar: oligomisin inhibitor F₀. Opsi D SALAH: ATP sintase adalah saluran masuk proton kembali ke matriks, bukan pompa ke sitoplasma. Opsi E SALAH: ATP sintase memanfaatkan energi rotasi gaya gerak proton untuk menggabungkan ADP + Pi, tidak menghidrolisis glukosa langsung.',
      e_kesimpulan: 'Opsi A, B, dan C benar.',
      f_analisisOpsi: 'A, B, C valid sesuai teori kemiosmosis. D keliru mengenai arah aliran proton. E keliru mengenai sumber energi katalitik F₁.'
    },
    caraCepat: 'Trik cepat: • Uncoupler (DNP) = Bocorin H⁺ -> ATP mogok, panas naik. • Oligomisin = Sumbat F₀. • Proton motive force = Beda pH + Beda Muatan Listrik. ATP sintase mengalirkan H⁺ MASUK ke matriks (bukan memompa keluar).',
    narasi: {
      stimulus: 'Pada soal nomor dua puluh delapan, cermati generator nano ATP sintase pada krista mitokondria.',
      pertanyaan: 'Evaluasi gaya gerak proton dan dampak molekul pengganggu seperti racun uncoupler DNP dan oligomisin.',
      pembahasan: 'DNP merusak gradien proton sehingga energi transpor elektron terbuang sebagai panas, sedangkan oligomisin menyumbat rotor F0.',
      caraCepat: 'Trik kilat: Pilih A, B, dan C. Ingat bahwa ATP sintase mengalirkan proton masuk kembali ke matriks, bukan memompanya keluar.',
      refleksiBenar: 'Luar biasa! Penguasaan biokimia membran dan fosforilasi oksidatif kamu di level master.',
      refleksiSalah: 'Perhatikan arah aliran: proton H⁺ mengalir masuk ke matriks menggerakkan rotor F0.'
    }
  },

  // 29. PG - Sistem Ekskresi Manusia (Osmoregulasi & Hormon ADH)
  {
    id: 29,
    type: 'PG',
    topic: 'Sistem Ekskresi Manusia',
    subtopic: 'Osmoregulasi Hipotalamus, Hormon ADH/Vasopresin, dan Akuaporin-2',
    difficulty: 'Menengah',
    cognitiveLevel: 'C4 (Menganalisis)',
    stimulusTitle: 'Respon Neuroendokrin Tubuh Manusia terhadap Dehidrasi Berat',
    stimulusType: 'paragraph',
    stimulusContent: `Seorang pendaki gunung tersesat di daerah kering selama 14 jam tanpa asupan air minum di bawah terik matahari.
Kondisi fisiologis pendaki tersebut:
- Osmolaritas plasma darah meningkat dari normal 290 mOsm/kg menjadi 315 mOsm/kg akibat kehilangan cairan via keringat.
- Osmoreseptor di nukleus supraoptik hipotalamus mengerut dan mengirimkan impuls ke kelenjar hipofisis posterior (neurohipofisis).
- Hipofisis posterior melepaskan hormon Antidiuretik (ADH / vasopresin) ke dalam sirkulasi darah.
- Hormon ADH berikatan dengan reseptor V₂ pada membran basolateral sel prinsipal tubulus kolektivus ginjal.`,
    questionText: 'Mekanisme seluler yang dipicu oleh hormon ADH pada tubulus kolektivus ginjal untuk memulihkan volume cairan tubuh pendaki tersebut adalah...',
    options: [
      { key: 'A', text: 'Memicu insersi vesikel saluran air akuaporin-2 ke membran apikal, meningkatkan reabsorpsi air kembali ke kapiler peritubuler sehingga volume urine sedikit dan pekat' },
      { key: 'B', text: 'Menghambat pompa Na⁺/K⁺-ATPase pada lengkung Henle sehingga air tertahan di dalam filtrat tubulus' },
      { key: 'C', text: 'Mempercepat laju filtrasi glomerulus (GFR) hingga dua kali lipat agar zat sisa metabolisme terbuang lebih cepat' },
      { key: 'D', text: 'Menginduksi ekskresi ion natrium secara masif ke dalam urine agar osmolaritas darah menurun' },
      { key: 'E', text: 'Menutup rapat celah podosit pada kapsula Bowman sehingga filtrasi darah terhenti total' }
    ],
    correctAnswer: 'A',
    pembahasan: {
      a_memahamiPersoalan: 'Menjelaskan mekanisme seluler hormon ADH dalam meningkatkan reabsorpsi air via saluran akuaporin pada tubulus kolektivus.',
      b_identifikasiInformasi: 'Osmolaritas darah naik (dehidrasi) -> ADH disekresikan -> reseptor V2 di tubulus kolektivus teraktivasi.',
      c_konsepBiologi: 'Pengikatan ADH ke reseptor V₂ memicu jalur cAMP dan PKA. Ini menginduksi eksositosis vesikel intraseluler yang membawa kanal air Akuaporin-2 (AQP2) ke membran luminal/apikal. Air dalam urine primer ditarik kembali menuruni gradien osmotik medula ke pembuluh darah, memproduksi urine pekat bervolume rendah (antidiuresis).',
      d_analisisPenalaran: 'Melalui insersi akuaporin-2, ginjal menghemat air tubuh secara maksimal. Urine yang dikeluarkan menjadi berwarna kuning pekat dengan osmolaritas tinggi (mencapai 1.200 mOsm/kg).',
      e_kesimpulan: 'Jawaban tepat adalah A, insersi kanal akuaporin-2 meningkatkan reabsorpsi air menghasilkan urine pekat.',
      f_analisisOpsi: 'B salah (ADH tidak menghambat reabsorpsi, justru meningkatkan konservasi air). C salah (GFR tidak dinaikkan saat dehidrasi). D salah (aldosteron menghemat natrium). E salah (filtrasi tidak dihentikan podosit).'
    },
    caraCepat: 'Trik cepat: KATA KUNCI = "ADH" selalu bekerja dengan "AKUAPORIN" di tubulus kolektivus untuk MENYERAP AIR kembali -> Hasilnya urine PEKAT & SEDIKIT.',
    narasi: {
      stimulus: 'Pada soal nomor dua puluh sembilan, amati respon dehidrasi pendaki gunung dan sekresi hormon ADH.',
      pertanyaan: 'Identifikasi saluran molekuler spesifik yang dipasang pada dinding tubulus kolektivus untuk menyedot kembali air ke dalam darah.',
      pembahasan: 'Hormon ADH memicu pemasangan saluran kanal air akuaporin-2 ke membran sel, mereabsorpsi air agar tubuh tidak kehabisan cairan.',
      caraCepat: 'Trik kilat: Ingat pasangan serasi ADH dan Akuaporin. Reabsorpsi air meningkat membuat urine jadi pekat.',
      refleksiBenar: 'Bagus sekali! Logika osmoregulasi dan fisiologi ginjalmu sangat akurat.',
      refleksiSalah: 'Ingat peran sentral hormon ADH: memasang akuaporin untuk mereabsorpsi air.'
    }
  },

  // 30. PGK - Keterampilan Proses dan Penalaran Biologi (Terintegrasi)
  {
    id: 30,
    type: 'PGK',
    topic: 'Keterampilan Proses dan Penalaran Biologi',
    subtopic: 'Evaluasi Validitas Desain Penelitian, Analisis Data Tabel, dan Penarikan Kesimpulan Ilmiah',
    difficulty: 'Sangat Sulit',
    cognitiveLevel: 'C6 (Merancang Solusi)',
    stimulusTitle: 'Uji Klinis Efektivitas Ekstrak Daun Kelor (Moringa oleifera) terhadap Profil Lipid Tikus',
    stimulusType: 'table',
    stimulusContent: `Sebuah tim peneliti menguji potensi ekstrak daun kelor (Moringa oleifera) dalam menurunkan kadar kolesterol LDL dan trigliserida pada 40 ekor tikus putih (Rattus norvegicus) jantan galur Wistar yang diinduksi diet tinggi lemak selama 30 hari.
Tikus dibagi secara acak (randomized) menjadi 4 kelompok (masing-masing n = 10):
- Kelompok 1: Diet standar pakan normal + akuades (Kontrol Negatif).
- Kelompok 2: Diet tinggi lemak + akuades (Kontrol Positif).
- Kelompok 3: Diet tinggi lemak + obat standar Statin 10 mg/kgBB (Pembanding).
- Kelompok 4: Diet tinggi lemak + ekstrak daun kelor dosis 300 mg/kgBB (Kelompok Uji).

Data rata-rata profil serum lipid pada hari ke-30 disajikan pada tabel:`,
    stimulusData: {
      headers: ['Kelompok Perlakuan', 'Kolesterol Total (mg/dL)', 'Trigliserida (mg/dL)', 'LDL (mg/dL)', 'HDL (mg/dL)'],
      rows: [
        ['Kelompok 1 (Kontrol Negatif)', '82 ± 4', '68 ± 5', '24 ± 3', '52 ± 4'],
        ['Kelompok 2 (Kontrol Positif)', '195 ± 8', '164 ± 9', '118 ± 6', '28 ± 3'],
        ['Kelompok 3 (Statin 10 mg/kg)', '96 ± 5', '82 ± 6', '38 ± 4', '48 ± 3'],
        ['Kelompok 4 (Kelor 300 mg/kg)', '108 ± 6', '94 ± 7', '46 ± 4', '45 ± 4']
      ],
      caption: 'Tabel 2: Data kadar serum lipid tikus pasca-perlakuan 30 hari (p < 0,05)'
    },
    questionText: 'Berdasarkan rancangan eksperimen dan analisis data tabel tersebut, pilihlah seluruh kesimpulan ilmiah yang VALID dan DAPAT DIPERTANGGUNGJAWABKAN! (Pilihlah lebih dari satu opsi)',
    options: [
      { key: 'A', text: 'Pemberian diet tinggi lemak pada Kelompok 2 terbukti valid memicu kondisi hiperlipidemia ditandai lonjakan drastis kolesterol total, trigliserida, dan LDL dibanding Kontrol Negatif' },
      { key: 'B', text: 'Ekstrak daun kelor dosis 300 mg/kgBB secara signifikan mampu menekan kenaikan kolesterol total, trigliserida, dan LDL serta mempertahankan kadar HDL mendekati kontrol normal' },
      { key: 'C', text: 'Efektivitas hipolipidemia ekstrak daun kelor pada dosis 300 mg/kgBB menunjukkan potensi terapeutik yang sebanding mendekati efektivitas obat baku statin' },
      { key: 'D', text: 'Eksperimen ini cacat metodologi karena tidak menyertakan kelompok hewan uji yang diberikan ekstrak kelor tanpa diet tinggi lemak' },
      { key: 'E', text: 'Ekstrak daun kelor terbukti dapat langsung diresepkan secara bebas pada pasien manusia penderita aterosklerosis stadium lanjut tanpa perlu uji klinis fase lanjutan' }
    ],
    correctAnswers: ['A', 'B', 'C'],
    pembahasan: {
      a_memahamiPersoalan: 'Mengevaluasi metodologi penelitian biomedis eksperimental, menganalisis data tabel komparatif, dan menarik kesimpulan berdasarkan kaidah bukti ilmiah (evidence-based).',
      b_identifikasiInformasi: 'Kelompok 2 mengalami hiperlipidemia. Kelompok 4 (Kelor) menurunkan LDL dari 118 ke 46 mg/dL (mendekati Statin 38 mg/dL) dan menaikkan HDL dari 28 ke 45 mg/dL.',
      c_konsepBiologi: 'Eksperimen laboratorium in vivo memerlukan kontrol negatif (baseline normal), kontrol positif (model penyakit tervalidasi), dan kontrol pembanding standar baku (benchmark efficacy). Uji praklinis pada hewan uji menunjukkan potensi farmakologis, namun ekstrapolasi ke manusia mutlak memerlukan uji klinis manusia bertahap (Fase I, II, III).',
      d_analisisPenalaran: 'Opsi A benar: Kelompok 2 memvalidasi model induksi penyakit. Opsi B benar: Kelor signifikan memperbaiki profil lipid. Opsi C benar: angka Kelor mendekati performa obat statin. Opsi D SALAH: desain eksperimen dengan 4 kelompok tersebut adalah standar emas (gold standard) farmakologi in vivo yang sudah sangat valid. Opsi E SALAH: hasil uji praklinis hewan tikus tidak boleh langsung dipakai meresepkan ke manusia tanpa uji klinis bertahap.',
      e_kesimpulan: 'Opsi A, B, dan C benar.',
      f_analisisOpsi: 'A, B, C merupakan kesimpulan ilmiah yang objektif dan berbasis data. D salah karena desain sudah lengkap. E salah fatal karena melanggar etika dan regulasi uji obat klinis.'
    },
    caraCepat: 'Trik cepat: • Baca pola data Tabel: Kelor berhasil menurunkan LDL (dari 118 -> 46) dan menaikkan HDL, mendekati Statin. • Kaidah sains: Hasil penelitian pada TIKUS tidak boleh langsung diklaim bisa langsung diresepkan ke MANUSIA tanpa uji klinis! Jadi opsi E pasti salah.',
    narasi: {
      stimulus: 'Selamat tiba di soal pamungkas, nomor tiga puluh! Amati Tabel 2 data uji praklinis ekstrak daun kelor pada profil lipid darah.',
      pertanyaan: 'Bandingkan nilai kelompok uji dengan kontrol positif dan pembanding statin. Evaluasi kesimpulan ilmiah yang beretika dan berbasis bukti.',
      pembahasan: 'Data membuktikan ekstrak daun kelor memiliki efek hipolipidemia signifikan mendekati obat statin. Namun secara etika sains, data hewan uji tidak bisa langsung dipakai mengobati manusia tanpa uji klinis.',
      caraCepat: 'Trik kilat: Centang A, B, dan C. Segera buang opsi yang mengklaim obat tikus bisa langsung dijual bebas ke manusia!',
      refleksiBenar: 'Luar biasa spektakuler! Kamu telah menyelesaikan seluruh 30 soal TKA Biologi 2026 dengan penalaran ilmiah tingkat tertinggi!',
      refleksiSalah: 'Perhatikan etika ilmiah: hasil penelitian hewan coba memerlukan uji klinis fase manusia sebelum digunakan secara medis.'
    }
  }
];
