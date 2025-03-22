import { PopularItemsInterface } from "../interfaces/PopularItemsInterface";

const PopularItem: PopularItemsInterface[] = [
  // Wisata
  {
    title: "Trans Snow World Bekasi",
    location: "Bekasi Timur, Bekasi",
    rating: "4.3/5 (2.3rb Review)",
    price: "IDR 50.000",
    oldPrice: "IDR 150.000",
    image: "/product/snow.jpg",
    type: "wisata"
  },
  {
    title: "Enchanting Valley Bogor",
    location: "Cisarua, Bogor",
    rating: "5/5 (24 Review)",
    price: "IDR 160.000",
    image: "/product/valley.jpg",
    type: "wisata"
  },
  {
    title: "Wahoo Waterworld Bandung",
    location: "Padalarang, Bandung",
    rating: "4.6/5 (1.5rb Review)",
    price: "IDR 80.000",
    image: "/product/worderbandung.jpg",
    type: "wisata"
  },
  {
    title: "Faunaland Ancol",
    location: "Jakarta Utara, Jakarta",
    rating: "4.7/5 (608 Review)",
    price: "IDR 77.000",
    oldPrice: "IDR 80.000",
    image: "/product/faunalandancol.jpg",
    type: "wisata"
  },
  {
    title: "Tiket Go! Wet Waterpark Bekasi",
    location: "Tambun, Bekasi",
    rating: "4.6/5 (764 Review)",
    price: "IDR 65.000",
    oldPrice: "IDR 100.000",
    image: "/product/wetwaterpark.jpg",
    type: "wisata"
  },
  {
    title: "Kebun Raya Bogor",
    location: "Bogor, Jawa Barat",
    rating: "4.5/5 (1.2rb Review)",
    price: "IDR 25.000",
    image: "/image6.jpg",
    type: "wisata"
  },
  {
    title: "Taman Safari Indonesia",
    location: "Cisarua, Bogor",
    rating: "4.7/5 (1.8rb Review)",
    price: "IDR 200.000",
    image: "/image7.jpg",
    type: "wisata"
  },
  {
    title: "Pantai Pandawa Bali",
    location: "Bali",
    rating: "4.8/5 (2.1rb Review)",
    price: "IDR 30.000",
    image: "/image8.jpg",
    type: "wisata"
  },
  {
    title: "Candi Borobudur",
    location: "Magelang, Jawa Tengah",
    rating: "4.9/5 (2.5rb Review)",
    price: "IDR 50.000",
    image: "/image9.jpg",
    type: "wisata"
  },
  {
    title: "Gunung Bromo",
    location: "Probolinggo, Jawa Timur",
    rating: "4.8/5 (1.9rb Review)",
    price: "IDR 100.000",
    image: "/image10.jpg",
    type: "wisata"
  },
  // Hotel
  {
    title: "Hotel Mulia Senayan",
    location: "Jakarta Pusat, Jakarta",
    rating: "4.8/5 (1.2rb Review)",
    price: "IDR 2.500.000",
    image: "/product/muliasenayan.jpg",
    type: "hotel"
  },
  {
    title: "Aryaduta Bandung",
    location: "Bandung, Jawa Barat",
    rating: "4.5/5 (876 Review)",
    price: "IDR 1.200.000",
    image: "/product/aryaduta.jpg",
    type: "hotel"
  },
  {
    title: "Grand Hyatt Jakarta",
    location: "Jakarta Pusat, Jakarta",
    rating: "4.9/5 (2.3rb Review)",
    price: "IDR 3.500.000",
    image: "/product/hyatt.jpg",
    type: "hotel"
  },
  {
    title: "The Trans Luxury Hotel",
    location: "Bandung, Jawa Barat",
    rating: "4.8/5 (1.5rb Review)",
    price: "IDR 2.800.000",
    image: "/product/luxury.jpg",
    type: "hotel"
  },
  {
    title: "Sheraton Surabaya Hotel & Towers",
    location: "Surabaya, Jawa Timur",
    rating: "4.7/5 (1.2rb Review)",
    price: "IDR 2.200.000",
    image: "/product/sheraton.jpg",
    type: "hotel"
  },
  {
    title: "Four Seasons Jakarta",
    location: "Jakarta Selatan, Jakarta",
    rating: "4.9/5 (1.8rb Review)",
    price: "IDR 4.000.000",
    image: "/product/sheraton.jpg",
    type: "hotel"
  },
  {
    title: "The Ritz-Carlton Bali",
    location: "Bali",
    rating: "4.9/5 (2.1rb Review)",
    price: "IDR 5.000.000",
    image: "/product/luxury.jpg",
    type: "hotel"
  },
  {
    title: "InterContinental Bali Resort",
    location: "Bali",
    rating: "4.8/5 (1.7rb Review)",
    price: "IDR 4.500.000",
    image: "/product/hyatt.jpg",
    type: "hotel"
  },
  {
    title: "JW Marriott Hotel Jakarta",
    location: "Jakarta Selatan, Jakarta",
    rating: "4.7/5 (1.4rb Review)",
    price: "IDR 3.200.000",
    image: "/product/aryaduta.jpg",
    type: "hotel"
  },
  {
    title: "Hilton Bandung",
    location: "Bandung, Jawa Barat",
    rating: "4.6/5 (1.1rb Review)",
    price: "IDR 1.800.000",
    image: "/product/muliasenayan.jpg",
    type: "hotel"
  },
  // Pesawat
  {
    title: "Penerbangan Jakarta - Bali",
    location: "Garuda Indonesia",
    rating: "4.7/5 (5.4rb Review)",
    price: "IDR 1.500.000",
    image: "/product/pesawat.jpg",
    type: "pesawat"
  },
  {
    title: "Penerbangan Surabaya - Medan",
    location: "Lion Air",
    rating: "4.2/5 (3.1rb Review)",
    price: "IDR 1.100.000",
    image: "/product/pesawat.jpg",
    type: "pesawat"
  },
  {
    title: "Penerbangan Bandung - Makassar",
    location: "Batik Air",
    rating: "4.6/5 (2.5rb Review)",
    price: "IDR 1.300.000",
    image: "/product/pesawat.jpg",
    type: "pesawat"
  },
  {
    title: "Penerbangan Yogyakarta - Lombok",
    location: "Citilink",
    rating: "4.4/5 (1.9rb Review)",
    price: "IDR 950.000",
    image: "/product/pesawat.jpg",
    type: "pesawat"
  },
  {
    title: "Penerbangan Medan - Balikpapan",
    location: "Sriwijaya Air",
    rating: "4.3/5 (1.2rb Review)",
    price: "IDR 1.400.000",
    image: "/product/pesawat.jpg",
    type: "pesawat"
  },
  {
    title: "Penerbangan Jakarta - Singapore",
    location: "Singapore Airlines",
    rating: "4.8/5 (3.2rb Review)",
    price: "IDR 2.000.000",
    image: "/product/pesawat.jpg",
    type: "pesawat"
  },
  {
    title: "Penerbangan Denpasar - Kuala Lumpur",
    location: "AirAsia",
    rating: "4.5/5 (2.1rb Review)",
    price: "IDR 1.800.000",
    image: "/product/pesawat.jpg",
    type: "pesawat"
  },
  {
    title: "Penerbangan Surabaya - Hong Kong",
    location: "Cathay Pacific",
    rating: "4.7/5 (1.9rb Review)",
    price: "IDR 2.500.000",
    image: "/product/pesawat.jpg",
    type: "pesawat"
  },
  {
    title: "Penerbangan Jakarta - Tokyo",
    location: "Japan Airlines",
    rating: "4.9/5 (2.3rb Review)",
    price: "IDR 3.000.000",
    image: "/product/pesawat.jpg",
    type: "pesawat"
  },
  {
    title: "Penerbangan Medan - Penang",
    location: "Malaysia Airlines",
    rating: "4.4/5 (1.5rb Review)",
    price: "IDR 1.600.000",
    image: "/fproduct/pesawat.jpg",
    type: "pesawat"
  },
  // Kereta
  {
    title: "Kereta Argo Parahyangan",
    location: "Jakarta - Bandung",
    rating: "4.6/5 (2.8rb Review)",
    price: "IDR 250.000",
    image: "/product/kereta.jpg",
    type: "kereta"
  },
  {
    title: "Kereta Taksaka",
    location: "Jakarta - Yogyakarta",
    rating: "4.8/5 (1.9rb Review)",
    price: "IDR 350.000",
    image: "/product/kereta.jpg",
    type: "kereta"
  },
  {
    title: "Kereta Gajayana",
    location: "Malang - Jakarta",
    rating: "4.7/5 (1.5rb Review)",
    price: "IDR 400.000",
    image: "/product/kereta.jpg",
    type: "kereta"
  },
  {
    title: "Kereta Bima",
    location: "Jakarta - Surabaya",
    rating: "4.6/5 (1.8rb Review)",
    price: "IDR 380.000",
    image: "/product/kereta.jpg",
    type: "kereta"
  },
  {
    title: "Kereta Argo Wilis",
    location: "Bandung - Surabaya",
    rating: "4.5/5 (1.3rb Review)",
    price: "IDR 420.000",
    image: "/product/kereta.jpg",
    type: "kereta"
  },
  {
    title: "Kereta Sembrani",
    location: "Jakarta - Surabaya",
    rating: "4.7/5 (1.6rb Review)",
    price: "IDR 450.000",
    image: "/product/kereta.jpg",
    type: "kereta"
  },
  {
    title: "Kereta Mutiara Selatan",
    location: "Bandung - Surabaya",
    rating: "4.6/5 (1.4rb Review)",
    price: "IDR 400.000",
    image: "/product/kereta.jpg",
    type: "kereta"
  },
  {
    title: "Kereta Lodaya",
    location: "Bandung - Solo",
    rating: "4.5/5 (1.2rb Review)",
    price: "IDR 300.000",
    image: "/product/kereta.jpg",
    type: "kereta"
  },
  {
    title: "Kereta Fajar Utama",
    location: "Jakarta - Yogyakarta",
    rating: "4.6/5 (1.3rb Review)",
    price: "IDR 320.000",
    image: "/product/kereta.jpg",
    type: "kereta"
  },
  // Event
  {
    title: "Java Jazz Festival 2023",
    location: "Jakarta International Expo, Jakarta",
    rating: "4.8/5 (5.2rb Review)",
    price: "IDR 1.000.000",
    image: "product//event1.jpg",
    type: "event"
  },
  {
    title: "DWP Adventure 2023",
    location: "Dufan, Jakarta",
    rating: "4.7/5 (4.8rb Review)",
    price: "IDR 500.000",
    image: "product//event2.jpg",
    type: "event"
  },
  {
    title: "We The Fest 2023",
    location: "GBK, Jakarta",
    rating: "4.9/5 (6.1rb Review)",
    price: "IDR 1.500.000",
    image: "product//event3.jpg",
    type: "event"
  },
  {
    title: "Soundrenaline 2023",
    location: "Bali",
    rating: "4.8/5 (5.5rb Review)",
    price: "IDR 1.200.000",
    image: "product//event4.jpg",
    type: "event"
  },
  {
    title: "Jakarta Fair 2023",
    location: "Jakarta International Expo, Jakarta",
    rating: "4.6/5 (4.2rb Review)",
    price: "IDR 100.000",
    image: "product//event5.jpg",
    type: "event"
  },
  {
    title: "Bali Arts Festival 2023",
    location: "Bali",
    rating: "4.7/5 (3.9rb Review)",
    price: "IDR 200.000",
    image: "product//event6.jpg",
    type: "event"
  },
  {
    title: "Synchronize Fest 2023",
    location: "Jakarta",
    rating: "4.8/5 (4.5rb Review)",
    price: "IDR 1.300.000",
    image: "product//event7.jpg",
    type: "event"
  },
  {
    title: "Jogja Food Festival 2023",
    location: "Yogyakarta",
    rating: "4.6/5 (3.2rb Review)",
    price: "IDR 150.000",
    image: "product//event8.jpg",
    type: "event"
  },
  {
    title: "Bandung Music Festival 2023",
    location: "Bandung",
    rating: "4.7/5 (3.5rb Review)",
    price: "IDR 800.000",
    image: "product//event9.jpg",
    type: "event"
  },
  {
    title: "Surabaya Fashion Week 2023",
    location: "Surabaya",
    rating: "4.5/5 (2.8rb Review)",
    price: "IDR 300.000",
    image: "/product/event10.jpg",
    type: "event"
  },
  // Kapal Ferry
  {
    title: "Ferry Jakarta - Batam",
    location: "Pelni",
    rating: "4.5/5 (1.2rb Review)",
    price: "IDR 500.000",
    image: "product//ferry1.jpg",
    type: "kapal ferry"
  },
  {
    title: "Ferry Surabaya - Balikpapan",
    location: "Pelni",
    rating: "4.4/5 (1.1rb Review)",
    price: "IDR 600.000",
    image: "product//ferry2.jpg",
    type: "kapal ferry"
  },
  {
    title: "Ferry Jakarta - Lampung",
    location: "Pelni",
    rating: "4.3/5 (900 Review)",
    price: "IDR 400.000",
    image: "product//ferry3.jpg",
    type: "kapal ferry"
  },
  {
    title: "Ferry Semarang - Kumai",
    location: "Pelni",
    rating: "4.2/5 (800 Review)",
    price: "IDR 450.000",
    image: "product//ferry4.jpg",
    type: "kapal ferry"
  },
  {
    title: "Ferry Makassar - Parepare",
    location: "Pelni",
    rating: "4.1/5 (700 Review)",
    price: "IDR 300.000",
    image: "product//ferry5.jpg",
    type: "kapal ferry"
  },
  {
    title: "Ferry Bali - Lombok",
    location: "Pelni",
    rating: "4.6/5 (1.3rb Review)",
    price: "IDR 350.000",
    image: "product//ferry6.jpg",
    type: "kapal ferry"
  },
  {
    title: "Ferry Batam - Bintan",
    location: "Pelni",
    rating: "4.5/5 (1.1rb Review)",
    price: "IDR 200.000",
    image: "product//ferry7.jpg",
    type: "kapal ferry"
  },
  {
    title: "Ferry Jakarta - Karimun Jawa",
    location: "Pelni",
    rating: "4.4/5 (1.0rb Review)",
    price: "IDR 550.000",
    image: "product//ferry8.jpg",
    type: "kapal ferry"
  },
  {
    title: "Ferry Surabaya - Banjarmasin",
    location: "Pelni",
    rating: "4.3/5 (950 Review)",
    price: "IDR 500.000",
    image: "product//ferry9.jpg",
    type: "kapal ferry"
  },
  {
    title: "Ferry Makassar - Balikpapan",
    location: "Pelni",
    rating: "4.2/5 (850 Review)",
    price: "IDR 600.000",
    image: "/product/ferry10.jpg",
    type: "kapal ferry"
  }
];

export default PopularItem;