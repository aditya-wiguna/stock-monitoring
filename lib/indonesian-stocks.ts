// List of Indonesian stocks traded on IDX (Indonesia Stock Exchange)
// Yahoo Finance uses .JK suffix for Jakarta Stock Exchange

// ============================================
// WATCHLIST - Priority stocks to monitor
// ============================================
export const WATCHLIST_STOCKS = [
  // Prayogo Pangestu (Barito Pacific Group)
  { symbol: 'BRPT.JK', name: 'Barito Pacific', group: 'Prayogo Pangestu' },
  { symbol: 'BREN.JK', name: 'Barito Renewables Energy', group: 'Prayogo Pangestu' },
  { symbol: 'TPIA.JK', name: 'Chandra Asri Pacific', group: 'Prayogo Pangestu' },
  { symbol: 'CUAN.JK', name: 'Petrindo Jaya Kreasi', group: 'Prayogo Pangestu' },
  { symbol: 'ESSA.JK', name: 'Essa Industries Indonesia', group: 'Prayogo Pangestu' },
  { symbol: 'BRIS.JK', name: 'Bank Syariah Indonesia', group: 'Prayogo Pangestu' },
  
  // Haji Isam (Jhonlin Group)
  { symbol: 'JARR.JK', name: 'Jhonlin Agro Raya', group: 'Haji Isam' },
  { symbol: 'PTRO.JK', name: 'Petrosea', group: 'Haji Isam' },
  { symbol: 'ADMR.JK', name: 'Adimitra Jaya Bintang', group: 'Haji Isam' },
  
  // Bakrie Group
  { symbol: 'BUMI.JK', name: 'Bumi Resources', group: 'Bakrie' },
  { symbol: 'BNBR.JK', name: 'Bakrie & Brothers', group: 'Bakrie' },
  { symbol: 'ELTY.JK', name: 'Bakrieland Development', group: 'Bakrie' },
  { symbol: 'VIVA.JK', name: 'Viva Media Baru', group: 'Bakrie' },
  { symbol: 'UNSP.JK', name: 'Bakrie Sumatra Plantations', group: 'Bakrie' },
  { symbol: 'ENRG.JK', name: 'Energi Mega Persada', group: 'Bakrie' },
];

// ============================================
// ALL INDONESIAN STOCKS - Comprehensive List
// ============================================
export const INDONESIAN_STOCKS = [
  // ========== BANKING ==========
  { symbol: 'BBCA.JK', name: 'Bank Central Asia', sector: 'Banking' },
  { symbol: 'BBRI.JK', name: 'Bank Rakyat Indonesia', sector: 'Banking' },
  { symbol: 'BMRI.JK', name: 'Bank Mandiri', sector: 'Banking' },
  { symbol: 'BBNI.JK', name: 'Bank Negara Indonesia', sector: 'Banking' },
  { symbol: 'BRIS.JK', name: 'Bank Syariah Indonesia', sector: 'Banking' },
  { symbol: 'BBTN.JK', name: 'Bank Tabungan Negara', sector: 'Banking' },
  { symbol: 'BNGA.JK', name: 'Bank CIMB Niaga', sector: 'Banking' },
  { symbol: 'BDMN.JK', name: 'Bank Danamon', sector: 'Banking' },
  { symbol: 'BNII.JK', name: 'Bank Maybank Indonesia', sector: 'Banking' },
  { symbol: 'PNBN.JK', name: 'Bank Pan Indonesia', sector: 'Banking' },
  { symbol: 'NISP.JK', name: 'Bank OCBC NISP', sector: 'Banking' },
  { symbol: 'BTPN.JK', name: 'Bank BTPN', sector: 'Banking' },
  { symbol: 'MEGA.JK', name: 'Bank Mega', sector: 'Banking' },
  { symbol: 'BNLI.JK', name: 'Bank Permata', sector: 'Banking' },
  { symbol: 'BJBR.JK', name: 'Bank Jabar Banten', sector: 'Banking' },
  { symbol: 'BJTM.JK', name: 'Bank Jatim', sector: 'Banking' },
  { symbol: 'BMAS.JK', name: 'Bank Maspion', sector: 'Banking' },
  { symbol: 'AGRO.JK', name: 'Bank Raya Indonesia', sector: 'Banking' },
  { symbol: 'ARTO.JK', name: 'Bank Jago', sector: 'Banking' },
  { symbol: 'BBYB.JK', name: 'Bank Neo Commerce', sector: 'Banking' },
  { symbol: 'AMAR.JK', name: 'Bank Amar Indonesia', sector: 'Banking' },

  // ========== TELECOMMUNICATIONS ==========
  { symbol: 'TLKM.JK', name: 'Telkom Indonesia', sector: 'Telecom' },
  { symbol: 'EXCL.JK', name: 'XL Axiata', sector: 'Telecom' },
  { symbol: 'ISAT.JK', name: 'Indosat Ooredoo Hutchison', sector: 'Telecom' },
  { symbol: 'FREN.JK', name: 'Smartfren Telecom', sector: 'Telecom' },
  { symbol: 'TOWR.JK', name: 'Sarana Menara Nusantara', sector: 'Telecom' },
  { symbol: 'TBIG.JK', name: 'Tower Bersama Infrastructure', sector: 'Telecom' },
  { symbol: 'MTEL.JK', name: 'Dayamitra Telekomunikasi', sector: 'Telecom' },

  // ========== TECHNOLOGY ==========
  { symbol: 'GOTO.JK', name: 'GoTo Gojek Tokopedia', sector: 'Technology' },
  { symbol: 'BUKA.JK', name: 'Bukalapak', sector: 'Technology' },
  { symbol: 'EMTK.JK', name: 'Elang Mahkota Teknologi', sector: 'Technology' },
  { symbol: 'DCII.JK', name: 'DCI Indonesia', sector: 'Technology' },
  { symbol: 'EDGE.JK', name: 'Indointernet', sector: 'Technology' },

  // ========== CONSUMER GOODS ==========
  { symbol: 'UNVR.JK', name: 'Unilever Indonesia', sector: 'Consumer' },
  { symbol: 'ICBP.JK', name: 'Indofood CBP', sector: 'Consumer' },
  { symbol: 'INDF.JK', name: 'Indofood Sukses Makmur', sector: 'Consumer' },
  { symbol: 'MYOR.JK', name: 'Mayora Indah', sector: 'Consumer' },
  { symbol: 'KLBF.JK', name: 'Kalbe Farma', sector: 'Consumer' },
  { symbol: 'SIDO.JK', name: 'Industri Jamu Sido Muncul', sector: 'Consumer' },
  { symbol: 'KAEF.JK', name: 'Kimia Farma', sector: 'Consumer' },
  { symbol: 'PYFA.JK', name: 'Pyridam Farma', sector: 'Consumer' },
  { symbol: 'TSPC.JK', name: 'Tempo Scan Pacific', sector: 'Consumer' },
  { symbol: 'DVLA.JK', name: 'Darya-Varia Laboratoria', sector: 'Consumer' },
  { symbol: 'ULTJ.JK', name: 'Ultra Jaya Milk', sector: 'Consumer' },
  { symbol: 'MLBI.JK', name: 'Multi Bintang Indonesia', sector: 'Consumer' },
  { symbol: 'DLTA.JK', name: 'Delta Djakarta', sector: 'Consumer' },
  { symbol: 'CEKA.JK', name: 'Wilmar Cahaya Indonesia', sector: 'Consumer' },
  { symbol: 'ROTI.JK', name: 'Nippon Indosari Corpindo', sector: 'Consumer' },
  { symbol: 'GOOD.JK', name: 'Garudafood Putra Putri', sector: 'Consumer' },
  { symbol: 'ADES.JK', name: 'Akasha Wira International', sector: 'Consumer' },
  { symbol: 'KEJU.JK', name: 'Mulia Boga Raya', sector: 'Consumer' },
  { symbol: 'CMRY.JK', name: 'Cisarua Mountain Dairy', sector: 'Consumer' },

  // ========== TOBACCO ==========
  { symbol: 'HMSP.JK', name: 'HM Sampoerna', sector: 'Tobacco' },
  { symbol: 'GGRM.JK', name: 'Gudang Garam', sector: 'Tobacco' },
  { symbol: 'WIIM.JK', name: 'Wismilak Inti Makmur', sector: 'Tobacco' },

  // ========== AUTOMOTIVE ==========
  { symbol: 'ASII.JK', name: 'Astra International', sector: 'Automotive' },
  { symbol: 'UNTR.JK', name: 'United Tractors', sector: 'Automotive' },
  { symbol: 'AUTO.JK', name: 'Astra Otoparts', sector: 'Automotive' },
  { symbol: 'SMSM.JK', name: 'Selamat Sempurna', sector: 'Automotive' },
  { symbol: 'IMAS.JK', name: 'Indomobil Sukses Internasional', sector: 'Automotive' },
  { symbol: 'INDS.JK', name: 'Indospring', sector: 'Automotive' },
  { symbol: 'GJTL.JK', name: 'Gajah Tunggal', sector: 'Automotive' },
  { symbol: 'BOLT.JK', name: 'Garuda Metalindo', sector: 'Automotive' },
  { symbol: 'DRMA.JK', name: 'Dharma Polimetal', sector: 'Automotive' },

  // ========== COAL MINING ==========
  { symbol: 'ADRO.JK', name: 'Adaro Energy', sector: 'Coal' },
  { symbol: 'PTBA.JK', name: 'Bukit Asam', sector: 'Coal' },
  { symbol: 'ITMG.JK', name: 'Indo Tambangraya Megah', sector: 'Coal' },
  { symbol: 'BUMI.JK', name: 'Bumi Resources', sector: 'Coal' },
  { symbol: 'BYAN.JK', name: 'Bayan Resources', sector: 'Coal' },
  { symbol: 'HRUM.JK', name: 'Harum Energy', sector: 'Coal' },
  { symbol: 'DSSA.JK', name: 'Dian Swastatika Sentosa', sector: 'Coal' },
  { symbol: 'GEMS.JK', name: 'Golden Energy Mines', sector: 'Coal' },
  { symbol: 'MBAP.JK', name: 'Mitrabara Adiperdana', sector: 'Coal' },
  { symbol: 'TOBA.JK', name: 'Toba Bara Sejahtra', sector: 'Coal' },
  { symbol: 'BSSR.JK', name: 'Baramulti Suksessarana', sector: 'Coal' },
  { symbol: 'DOID.JK', name: 'Delta Dunia Makmur', sector: 'Coal' },
  { symbol: 'KKGI.JK', name: 'Resource Alam Indonesia', sector: 'Coal' },
  { symbol: 'MYOH.JK', name: 'Samindo Resources', sector: 'Coal' },
  { symbol: 'PTRO.JK', name: 'Petrosea', sector: 'Coal' },
  { symbol: 'ADMR.JK', name: 'Adimitra Jaya Bintang', sector: 'Coal' },
  { symbol: 'BOSS.JK', name: 'Borneo Olah Sarana Sukses', sector: 'Coal' },

  // ========== METAL & MINERAL MINING ==========
  { symbol: 'INCO.JK', name: 'Vale Indonesia', sector: 'Mining' },
  { symbol: 'ANTM.JK', name: 'Aneka Tambang', sector: 'Mining' },
  { symbol: 'TINS.JK', name: 'Timah', sector: 'Mining' },
  { symbol: 'MDKA.JK', name: 'Merdeka Copper Gold', sector: 'Mining' },
  { symbol: 'BRMS.JK', name: 'Bumi Resources Minerals', sector: 'Mining' },
  { symbol: 'PSAB.JK', name: 'J Resources Asia Pasifik', sector: 'Mining' },
  { symbol: 'ZINC.JK', name: 'Kapuas Prima Coal', sector: 'Mining' },
  { symbol: 'CITA.JK', name: 'Cita Mineral Investindo', sector: 'Mining' },
  { symbol: 'DKFT.JK', name: 'Central Omega Resources', sector: 'Mining' },
  { symbol: 'NICL.JK', name: 'Gunbuster Nickel Industry', sector: 'Mining' },
  { symbol: 'NCKL.JK', name: 'Trimegah Bangun Persada', sector: 'Mining' },
  { symbol: 'MBMA.JK', name: 'Merdeka Battery Materials', sector: 'Mining' },
  { symbol: 'HPAL.JK', name: 'Bhakti Pertiwi Sejahtera', sector: 'Mining' },

  // ========== OIL & GAS ==========
  { symbol: 'PGAS.JK', name: 'Perusahaan Gas Negara', sector: 'Oil & Gas' },
  { symbol: 'MEDC.JK', name: 'Medco Energi', sector: 'Oil & Gas' },
  { symbol: 'AKRA.JK', name: 'AKR Corporindo', sector: 'Oil & Gas' },
  { symbol: 'ELSA.JK', name: 'Elnusa', sector: 'Oil & Gas' },
  { symbol: 'ENRG.JK', name: 'Energi Mega Persada', sector: 'Oil & Gas' },
  { symbol: 'ESSA.JK', name: 'Essa Industries Indonesia', sector: 'Oil & Gas' },
  { symbol: 'RAJA.JK', name: 'Rukun Raharja', sector: 'Oil & Gas' },
  { symbol: 'WINS.JK', name: 'Wintermar Offshore Marine', sector: 'Oil & Gas' },

  // ========== PETROCHEMICAL ==========
  { symbol: 'BRPT.JK', name: 'Barito Pacific', sector: 'Petrochemical' },
  { symbol: 'TPIA.JK', name: 'Chandra Asri Pacific', sector: 'Petrochemical' },
  { symbol: 'CUAN.JK', name: 'Petrindo Jaya Kreasi', sector: 'Petrochemical' },
  { symbol: 'FPNI.JK', name: 'Lotte Chemical Titan', sector: 'Petrochemical' },
  { symbol: 'UNIC.JK', name: 'Unggul Indah Cahaya', sector: 'Petrochemical' },

  // ========== RENEWABLE ENERGY ==========
  { symbol: 'BREN.JK', name: 'Barito Renewables Energy', sector: 'Renewable Energy' },
  { symbol: 'PGEO.JK', name: 'Pertamina Geothermal Energy', sector: 'Renewable Energy' },
  { symbol: 'KEEN.JK', name: 'Kencana Energi Lestari', sector: 'Renewable Energy' },

  // ========== CEMENT & BUILDING MATERIALS ==========
  { symbol: 'SMGR.JK', name: 'Semen Indonesia', sector: 'Cement' },
  { symbol: 'INTP.JK', name: 'Indocement Tunggal', sector: 'Cement' },
  { symbol: 'SMCB.JK', name: 'Solusi Bangun Indonesia', sector: 'Cement' },
  { symbol: 'WTON.JK', name: 'Wijaya Karya Beton', sector: 'Cement' },
  { symbol: 'SMBR.JK', name: 'Semen Baturaja', sector: 'Cement' },

  // ========== CONSTRUCTION ==========
  { symbol: 'WIKA.JK', name: 'Wijaya Karya', sector: 'Construction' },
  { symbol: 'WSKT.JK', name: 'Waskita Karya', sector: 'Construction' },
  { symbol: 'PTPP.JK', name: 'PP (Persero)', sector: 'Construction' },
  { symbol: 'ADHI.JK', name: 'Adhi Karya', sector: 'Construction' },
  { symbol: 'JKON.JK', name: 'Jaya Konstruksi', sector: 'Construction' },
  { symbol: 'ACST.JK', name: 'Acset Indonusa', sector: 'Construction' },
  { symbol: 'NRCA.JK', name: 'Nusa Raya Cipta', sector: 'Construction' },
  { symbol: 'TOTL.JK', name: 'Total Bangun Persada', sector: 'Construction' },

  // ========== PROPERTY ==========
  { symbol: 'BSDE.JK', name: 'Bumi Serpong Damai', sector: 'Property' },
  { symbol: 'CTRA.JK', name: 'Ciputra Development', sector: 'Property' },
  { symbol: 'PWON.JK', name: 'Pakuwon Jati', sector: 'Property' },
  { symbol: 'SMRA.JK', name: 'Summarecon Agung', sector: 'Property' },
  { symbol: 'LPKR.JK', name: 'Lippo Karawaci', sector: 'Property' },
  { symbol: 'DILD.JK', name: 'Intiland Development', sector: 'Property' },
  { symbol: 'APLN.JK', name: 'Agung Podomoro Land', sector: 'Property' },
  { symbol: 'ASRI.JK', name: 'Alam Sutera Realty', sector: 'Property' },
  { symbol: 'KIJA.JK', name: 'Kawasan Industri Jababeka', sector: 'Property' },
  { symbol: 'PPRO.JK', name: 'PP Properti', sector: 'Property' },
  { symbol: 'ELTY.JK', name: 'Bakrieland Development', sector: 'Property' },
  { symbol: 'DMAS.JK', name: 'Puradelta Lestari', sector: 'Property' },
  { symbol: 'JRPT.JK', name: 'Jaya Real Property', sector: 'Property' },
  { symbol: 'MKPI.JK', name: 'Metropolitan Kentjana', sector: 'Property' },
  { symbol: 'PLIN.JK', name: 'Plaza Indonesia Realty', sector: 'Property' },

  // ========== INFRASTRUCTURE ==========
  { symbol: 'JSMR.JK', name: 'Jasa Marga', sector: 'Infrastructure' },
  { symbol: 'META.JK', name: 'Nusantara Infrastructure', sector: 'Infrastructure' },
  { symbol: 'CMNP.JK', name: 'Citra Marga Nusaphala', sector: 'Infrastructure' },
  { symbol: 'IPCC.JK', name: 'Indonesia Kendaraan Terminal', sector: 'Infrastructure' },
  { symbol: 'PORT.JK', name: 'Portal Cipta Infrastruktur', sector: 'Infrastructure' },

  // ========== TRANSPORTATION ==========
  { symbol: 'GIAA.JK', name: 'Garuda Indonesia', sector: 'Transportation' },
  { symbol: 'SMDR.JK', name: 'Samudera Indonesia', sector: 'Transportation' },
  { symbol: 'TMAS.JK', name: 'Pelayaran Tempuran Emas', sector: 'Transportation' },
  { symbol: 'ASSA.JK', name: 'Adi Sarana Armada', sector: 'Transportation' },
  { symbol: 'BIRD.JK', name: 'Blue Bird', sector: 'Transportation' },
  { symbol: 'TAXI.JK', name: 'Express Transindo Utama', sector: 'Transportation' },
  { symbol: 'WEHA.JK', name: 'WEHA Transportasi', sector: 'Transportation' },
  { symbol: 'SAFE.JK', name: 'Steady Safe', sector: 'Transportation' },

  // ========== RETAIL ==========
  { symbol: 'MAPI.JK', name: 'Mitra Adiperkasa', sector: 'Retail' },
  { symbol: 'ACES.JK', name: 'Ace Hardware Indonesia', sector: 'Retail' },
  { symbol: 'ERAA.JK', name: 'Erajaya Swasembada', sector: 'Retail' },
  { symbol: 'LPPF.JK', name: 'Matahari Department Store', sector: 'Retail' },
  { symbol: 'RALS.JK', name: 'Ramayana Lestari', sector: 'Retail' },
  { symbol: 'HERO.JK', name: 'Hero Supermarket', sector: 'Retail' },
  { symbol: 'AMRT.JK', name: 'Sumber Alfaria Trijaya', sector: 'Retail' },
  { symbol: 'MIDI.JK', name: 'Midi Utama Indonesia', sector: 'Retail' },
  { symbol: 'MPPA.JK', name: 'Matahari Putra Prima', sector: 'Retail' },
  { symbol: 'MAPA.JK', name: 'Map Aktif Adiperkasa', sector: 'Retail' },
  { symbol: 'RANC.JK', name: 'Supra Boga Lestari', sector: 'Retail' },

  // ========== MEDIA & ENTERTAINMENT ==========
  { symbol: 'MNCN.JK', name: 'Media Nusantara Citra', sector: 'Media' },
  { symbol: 'SCMA.JK', name: 'Surya Citra Media', sector: 'Media' },
  { symbol: 'VIVA.JK', name: 'Viva Media Baru', sector: 'Media' },
  { symbol: 'KPIG.JK', name: 'MNC Land', sector: 'Media' },
  { symbol: 'FILM.JK', name: 'MD Pictures', sector: 'Media' },
  { symbol: 'JTPE.JK', name: 'Jasuindo Tiga Perkasa', sector: 'Media' },

  // ========== POULTRY & AGRICULTURE ==========
  { symbol: 'CPIN.JK', name: 'Charoen Pokphand Indonesia', sector: 'Poultry' },
  { symbol: 'JPFA.JK', name: 'Japfa Comfeed', sector: 'Poultry' },
  { symbol: 'MAIN.JK', name: 'Malindo Feedmill', sector: 'Poultry' },
  { symbol: 'SIPD.JK', name: 'Sierad Produce', sector: 'Poultry' },
  { symbol: 'JARR.JK', name: 'Jhonlin Agro Raya', sector: 'Agriculture' },

  // ========== PALM OIL ==========
  { symbol: 'AALI.JK', name: 'Astra Agro Lestari', sector: 'Palm Oil' },
  { symbol: 'LSIP.JK', name: 'PP London Sumatra', sector: 'Palm Oil' },
  { symbol: 'SIMP.JK', name: 'Salim Ivomas Pratama', sector: 'Palm Oil' },
  { symbol: 'SGRO.JK', name: 'Sampoerna Agro', sector: 'Palm Oil' },
  { symbol: 'TBLA.JK', name: 'Tunas Baru Lampung', sector: 'Palm Oil' },
  { symbol: 'DSNG.JK', name: 'Dharma Satya Nusantara', sector: 'Palm Oil' },
  { symbol: 'SMAR.JK', name: 'Smart', sector: 'Palm Oil' },
  { symbol: 'UNSP.JK', name: 'Bakrie Sumatra Plantations', sector: 'Palm Oil' },
  { symbol: 'PALM.JK', name: 'Provident Agro', sector: 'Palm Oil' },
  { symbol: 'ANJT.JK', name: 'Austindo Nusantara Jaya', sector: 'Palm Oil' },
  { symbol: 'TAPG.JK', name: 'Triputra Agro Persada', sector: 'Palm Oil' },

  // ========== TEXTILE & GARMENT ==========
  { symbol: 'SRIL.JK', name: 'Sri Rejeki Isman', sector: 'Textile' },
  { symbol: 'TRIS.JK', name: 'Trisula International', sector: 'Textile' },
  { symbol: 'PBRX.JK', name: 'Pan Brothers', sector: 'Textile' },
  { symbol: 'SSTM.JK', name: 'Sunson Textile', sector: 'Textile' },

  // ========== FINANCIAL SERVICES ==========
  { symbol: 'ADMF.JK', name: 'Adira Dinamika Multi Finance', sector: 'Finance' },
  { symbol: 'BBLD.JK', name: 'Buana Finance', sector: 'Finance' },
  { symbol: 'BFIN.JK', name: 'BFI Finance Indonesia', sector: 'Finance' },
  { symbol: 'CFIN.JK', name: 'Clipan Finance', sector: 'Finance' },
  { symbol: 'MFIN.JK', name: 'Mandala Multifinance', sector: 'Finance' },
  { symbol: 'TIFA.JK', name: 'Tifa Finance', sector: 'Finance' },
  { symbol: 'VRNA.JK', name: 'Verena Multi Finance', sector: 'Finance' },
  { symbol: 'WOMF.JK', name: 'Wahana Ottomitra Multiartha', sector: 'Finance' },

  // ========== INSURANCE ==========
  { symbol: 'ASRM.JK', name: 'Asuransi Ramayana', sector: 'Insurance' },
  { symbol: 'LPGI.JK', name: 'Lippo General Insurance', sector: 'Insurance' },
  { symbol: 'MREI.JK', name: 'Maskapai Reasuransi', sector: 'Insurance' },
  { symbol: 'PNIN.JK', name: 'Paninvest', sector: 'Insurance' },
  { symbol: 'ASDM.JK', name: 'Asuransi Dayin Mitra', sector: 'Insurance' },

  // ========== INVESTMENT HOLDING ==========
  { symbol: 'BNBR.JK', name: 'Bakrie & Brothers', sector: 'Holding' },
  { symbol: 'BHIT.JK', name: 'MNC Investama', sector: 'Holding' },
  { symbol: 'PNLF.JK', name: 'Panin Financial', sector: 'Holding' },
  { symbol: 'MLPL.JK', name: 'Multipolar', sector: 'Holding' },
  { symbol: 'POOL.JK', name: 'Pool Advista Indonesia', sector: 'Holding' },

  // ========== HEAVY EQUIPMENT ==========
  { symbol: 'HEXA.JK', name: 'Hexindo Adiperkasa', sector: 'Heavy Equipment' },
  { symbol: 'KOBX.JK', name: 'Kobexindo Tractors', sector: 'Heavy Equipment' },

  // ========== HOSPITAL & HEALTHCARE ==========
  { symbol: 'MIKA.JK', name: 'Mitra Keluarga Karyasehat', sector: 'Healthcare' },
  { symbol: 'SILO.JK', name: 'Siloam International Hospitals', sector: 'Healthcare' },
  { symbol: 'HEAL.JK', name: 'Medikaloka Hermina', sector: 'Healthcare' },
  { symbol: 'PRDA.JK', name: 'Prodia Widyahusada', sector: 'Healthcare' },
  { symbol: 'SAME.JK', name: 'Sarana Meditama Metropolitan', sector: 'Healthcare' },

  // ========== PACKAGING ==========
  { symbol: 'IMPC.JK', name: 'Impack Pratama Industri', sector: 'Packaging' },
  { symbol: 'TRST.JK', name: 'Trias Sentosa', sector: 'Packaging' },
  { symbol: 'YPAS.JK', name: 'Yanaprima Hastapersada', sector: 'Packaging' },

  // ========== STEEL ==========
  { symbol: 'KRAS.JK', name: 'Krakatau Steel', sector: 'Steel' },
  { symbol: 'ISSP.JK', name: 'Steel Pipe Industry', sector: 'Steel' },
  { symbol: 'GDST.JK', name: 'Gunawan Dianjaya Steel', sector: 'Steel' },
  { symbol: 'BTON.JK', name: 'Betonjaya Manunggal', sector: 'Steel' },
  { symbol: 'JKSW.JK', name: 'Jakarta Kyoei Steel', sector: 'Steel' },

  // ========== HOTEL & TOURISM ==========
  { symbol: 'HOTL.JK', name: 'Saraswati Griya Lestari', sector: 'Hotel' },
  { symbol: 'HOME.JK', name: 'Hotel Mandarine Regency', sector: 'Hotel' },
  { symbol: 'SHID.JK', name: 'Hotel Sahid Jaya', sector: 'Hotel' },
  { symbol: 'PJAA.JK', name: 'Pembangunan Jaya Ancol', sector: 'Tourism' },
  { symbol: 'BAYU.JK', name: 'Bayu Buana', sector: 'Tourism' },
  { symbol: 'BUVA.JK', name: 'Bukit Uluwatu Villa', sector: 'Hotel' },
  { symbol: 'PANR.JK', name: 'Panorama Sentrawisata', sector: 'Tourism' },

  // ========== SHIPPING ==========
  { symbol: 'HELI.JK', name: 'Jaya Trishindo', sector: 'Shipping' },
  { symbol: 'SOCI.JK', name: 'Soechi Lines', sector: 'Shipping' },
  { symbol: 'MBSS.JK', name: 'Mitrabahtera Segara Sejati', sector: 'Shipping' },
  { symbol: 'LEAD.JK', name: 'Logindo Samudramakmur', sector: 'Shipping' },
  { symbol: 'BBRM.JK', name: 'Pelayaran Nasional Bina Buana', sector: 'Shipping' },

  // ========== CHEMICAL ==========
  { symbol: 'EKAD.JK', name: 'Ekadharma International', sector: 'Chemical' },
  { symbol: 'DPNS.JK', name: 'Duta Pertiwi Nusantara', sector: 'Chemical' },
  { symbol: 'ETWA.JK', name: 'Eterindo Wahanatama', sector: 'Chemical' },
  { symbol: 'INCI.JK', name: 'Intanwijaya Internasional', sector: 'Chemical' },

  // ========== COSMETICS & HOUSEHOLD ==========
  { symbol: 'TCID.JK', name: 'Mandom Indonesia', sector: 'Cosmetics' },
  { symbol: 'KINO.JK', name: 'Kino Indonesia', sector: 'Cosmetics' },
  { symbol: 'MBTO.JK', name: 'Martina Berto', sector: 'Cosmetics' },
  { symbol: 'MRAT.JK', name: 'Mustika Ratu', sector: 'Cosmetics' },
  { symbol: 'CINT.JK', name: 'Chitose Internasional', sector: 'Household' },
  { symbol: 'WOOD.JK', name: 'Integra Indocabinet', sector: 'Household' },

  // ========== PULP & PAPER ==========
  { symbol: 'INKP.JK', name: 'Indah Kiat Pulp & Paper', sector: 'Paper' },
  { symbol: 'TKIM.JK', name: 'Pabrik Kertas Tjiwi Kimia', sector: 'Paper' },
  { symbol: 'FASW.JK', name: 'Fajar Surya Wisesa', sector: 'Paper' },
  { symbol: 'KDSI.JK', name: 'Kedawung Setia Industrial', sector: 'Paper' },
  { symbol: 'SPMA.JK', name: 'Suparma', sector: 'Paper' },

  // ========== FOOD RESTAURANT ==========
  { symbol: 'FAST.JK', name: 'Fast Food Indonesia', sector: 'Restaurant' },
  { symbol: 'PZZA.JK', name: 'Sarimelati Kencana', sector: 'Restaurant' },
  { symbol: 'MAPB.JK', name: 'Map Boga Adiperkasa', sector: 'Restaurant' },
  { symbol: 'JMHM.JK', name: 'Ksatria Juara Mandiri Husada', sector: 'Restaurant' },

  // ========== ELECTRONICS ==========
  { symbol: 'PTSN.JK', name: 'Sat Nusapersada', sector: 'Electronics' },
];

export type StockSymbol = (typeof INDONESIAN_STOCKS)[number];
export type WatchlistStock = (typeof WATCHLIST_STOCKS)[number];

