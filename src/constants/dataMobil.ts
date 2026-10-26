export type Mobil = {
  id: string;
  merek: string;
  nama: string;
  tahun: number;
  kategori: 'SUV' | 'Sedan' | 'EV' | 'MPV';
  bahanBakar: string;
  kursi: number;
  transmisi: string;
  harga: number;
  gambar: any;
  gambarDetail: any;
  rating: number;
  ulasan: number;
  jarakTempuh: string;
  tenaga: string;
  deskripsi: string;
};

export const daftarMobil: Mobil[] = [
  {
    id: 'ioniq-5',
    merek: 'Hyundai',
    nama: 'Ioniq 5 Signature',
    tahun: 2024,
    kategori: 'EV',
    bahanBakar: 'Listrik',
    kursi: 5,
    transmisi: 'Matic',
    harga: 850000,
    gambar: require('../../assets/images/mobil-ioniq.png'),
    gambarDetail: require('../../assets/images/mobil-ioniq-detail.png'),
    rating: 4.9,
    ulasan: 128,
    jarakTempuh: '481 km',
    tenaga: '217 HP',
    deskripsi: 'Electric SUV • 2024 Signature Edition',
  },
  {
    id: 'hrv-rs',
    merek: 'Honda',
    nama: 'HR-V RS Turbo',
    tahun: 2023,
    kategori: 'SUV',
    bahanBakar: 'Bensin',
    kursi: 5,
    transmisi: 'CVT',
    harga: 650000,
    gambar: require('../../assets/images/mobil-hrv.png'),
    gambarDetail: require('../../assets/images/mobil-hrv.png'),
    rating: 4.8,
    ulasan: 96,
    jarakTempuh: '14 km/l',
    tenaga: '177 HP',
    deskripsi: 'Compact SUV • 2023 RS Turbo',
  },
  {
    id: 'alphard',
    merek: 'Toyota',
    nama: 'Alphard Executive',
    tahun: 2024,
    kategori: 'MPV',
    bahanBakar: 'Hybrid',
    kursi: 7,
    transmisi: 'Matic',
    harga: 1450000,
    gambar: require('../../assets/images/mobil-alphard.png'),
    gambarDetail: require('../../assets/images/mobil-alphard.png'),
    rating: 5.0,
    ulasan: 74,
    jarakTempuh: '18 km/l',
    tenaga: '250 HP',
    deskripsi: 'Luxury MPV • 2024 Executive',
  },
];

export function formatRupiah(angka: number) {
  return 'Rp ' + angka.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}
