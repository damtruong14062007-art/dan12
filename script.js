/**
 * VELORA LUXURY FASHION - COMPREHENSIVE MULTI-PAGE ENGINE
 * Shared Across All Standalone HTML Pages:
 * - Two-Tier Centered Navbar & Live Search Dropdown
 * - Multi-Page Product Rendering & Dynamic Filtering
 * - Unified Multi-Slider Ken Burns Initializer
 * - LocalStorage Synchronized Cart, Wishlist & Order History
 * - Interactive AI Stylist & Floating Support Widget (Zalo, Messenger, AI)
 */

// ==========================================================================
// 1. PRODUCT DATABASE
// ==========================================================================
const PRODUCTS = [
  // --- NEW ARRIVALS ---
  {
    id: 'na-1',
    name: 'Áo Blazer Nam Form Rộng Classic',
    category: 'men',
    subCategory: 'ao',
    price: 689000,
    oldPrice: 850000,
    badge: 'NEW ARRIVAL',
    badgeType: 'badge-new',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&auto=format&fit=crop&q=80',
    colors: ['#2b3a4a', '#8a9ea7', '#1a1a1a'],
    rating: 5.0,
    reviews: 24,
    tags: ['new-arrivals', 'men'],
    stock: 15,
    sold: 85
  },
  {
    id: 'na-2',
    name: 'Set Váy Dạ Tweed Tiểu Thư Nữ',
    category: 'women',
    subCategory: 'dam-vay',
    price: 799000,
    oldPrice: 950000,
    badge: 'HOT TREND',
    badgeType: 'badge-trend',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&auto=format&fit=crop&q=80',
    colors: ['#f472b6', '#fbcfe8', '#ffffff'],
    rating: 4.9,
    reviews: 65,
    tags: ['new-arrivals', 'women'],
    stock: 8,
    sold: 92
  },
  {
    id: 'na-3',
    name: 'Áo Hoodie Nỉ Bông Dày Dặn 380gsm',
    category: 'men',
    subCategory: 'ao',
    price: 349000,
    oldPrice: 450000,
    badge: 'NEW',
    badgeType: 'badge-new',
    image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=600&auto=format&fit=crop&q=80',
    colors: ['#3b82f6', '#1e293b', '#94a3b8'],
    rating: 4.9,
    reviews: 120,
    tags: ['new-arrivals', 'men'],
    stock: 22,
    sold: 78
  },
  {
    id: 'na-4',
    name: 'Quần Parachute Túi Hộp Ống Rộng',
    category: 'men',
    subCategory: 'quan',
    price: 399000,
    oldPrice: 490000,
    badge: 'BEST PICK',
    badgeType: 'badge-best',
    image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=600&auto=format&fit=crop&q=80',
    colors: ['#1e293b', '#64748b'],
    rating: 4.8,
    reviews: 52,
    tags: ['new-arrivals', 'men'],
    stock: 14,
    sold: 86
  },
  {
    id: 'na-5',
    name: 'Áo Khoác Bomber Da Lộn Minimalist',
    category: 'men',
    subCategory: 'ao',
    price: 859000,
    oldPrice: 1150000,
    badge: 'PREMIUM',
    badgeType: 'badge-gold',
    image: 'https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=600&auto=format&fit=crop&q=80',
    colors: ['#b45309', '#78350f'],
    rating: 5.0,
    reviews: 38,
    tags: ['new-arrivals', 'men'],
    stock: 10,
    sold: 90
  },
  {
    id: 'na-6',
    name: 'Áo Sơ Mi Lụa Cổ V Tay Phồng Nữ',
    category: 'women',
    subCategory: 'blouse',
    price: 329000,
    oldPrice: 419000,
    badge: 'NEW',
    badgeType: 'badge-new',
    image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600&auto=format&fit=crop&q=80',
    colors: ['#e0e7ff', '#ffffff'],
    rating: 4.9,
    reviews: 43,
    tags: ['new-arrivals', 'women'],
    stock: 30,
    sold: 70
  },
  {
    id: 'na-7',
    name: 'Quần Tây Xếp Ly Suông Công Sở',
    category: 'men',
    subCategory: 'quan',
    price: 459000,
    oldPrice: 580000,
    badge: 'ELEGANT',
    badgeType: 'badge-best',
    image: 'https://images.unsplash.com/photo-1479064555552-3ef4979f8908?w=600&auto=format&fit=crop&q=80',
    colors: ['#0f766e', '#134e4a'],
    rating: 4.9,
    reviews: 115,
    tags: ['new-arrivals', 'men'],
    stock: 18,
    sold: 82
  },
  {
    id: 'na-8',
    name: 'Chân Váy Chữ A Kèm Thắt Lưng',
    category: 'women',
    subCategory: 'chan-vay',
    price: 299000,
    oldPrice: 390000,
    badge: 'NEW',
    badgeType: 'badge-new',
    image: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=600&auto=format&fit=crop&q=80',
    colors: ['#fee2e2', '#b91c1c'],
    rating: 4.7,
    reviews: 84,
    tags: ['new-arrivals', 'women'],
    stock: 19,
    sold: 81
  },
  {
    id: 'na-9',
    name: 'Áo Len Dệt Kim Họa Tiết Retro',
    category: 'men',
    subCategory: 'ao',
    price: 419000,
    oldPrice: 520000,
    badge: 'VINTAGE',
    badgeType: 'badge-hot',
    image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=600&auto=format&fit=crop&q=80',
    colors: ['#dc2626', '#fca5a5'],
    rating: 4.8,
    reviews: 58,
    tags: ['new-arrivals', 'men'],
    stock: 12,
    sold: 88
  },
  {
    id: 'na-10',
    name: 'Áo Gió Thể Thao Chống Nước 2 Lớp',
    category: 'men',
    subCategory: 'ao',
    price: 489000,
    oldPrice: 600000,
    badge: 'NEW',
    badgeType: 'badge-new',
    image: 'https://images.unsplash.com/photo-1544441893-675973e31985?w=600&auto=format&fit=crop&q=80',
    colors: ['#059669', '#10b981'],
    rating: 4.8,
    reviews: 40,
    tags: ['new-arrivals', 'men'],
    stock: 25,
    sold: 75
  },
  {
    id: 'na-11',
    name: 'Túi Đeo Vai Kẹp Nách Da Cao Cấp',
    category: 'accessories',
    subCategory: 'tui-xach',
    price: 379000,
    oldPrice: 490000,
    badge: 'ACCESSORY',
    badgeType: 'badge-best',
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&auto=format&fit=crop&q=80',
    colors: ['#3b82f6', '#1d4ed8'],
    rating: 4.9,
    reviews: 62,
    tags: ['new-arrivals', 'accessories'],
    stock: 17,
    sold: 83
  },
  {
    id: 'na-12',
    name: 'Giày Sneaker Chunky Retro Sole',
    category: 'accessories',
    subCategory: 'giay',
    price: 799000,
    oldPrice: 950000,
    badge: 'NEW',
    badgeType: 'badge-new',
    image: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?w=600&auto=format&fit=crop&q=80',
    colors: ['#0284c7', '#38bdf8'],
    rating: 4.9,
    reviews: 126,
    tags: ['new-arrivals', 'accessories'],
    stock: 16,
    sold: 84
  },

  // --- THỜI TRANG NỮ ---
  {
    id: 'wm-1',
    name: 'Đầm Xòe Floral Dáng Midi Nữ Tinh Tế',
    category: 'women',
    subCategory: 'dam-vay',
    price: 549000,
    oldPrice: 750000,
    badge: 'HOT TREND',
    badgeType: 'badge-trend',
    image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=600&auto=format&fit=crop&q=80',
    colors: ['#f43f5e', '#fecdd3'],
    rating: 5.0,
    reviews: 98,
    tags: ['women'],
    stock: 6,
    sold: 94
  },
  {
    id: 'wm-2',
    name: 'Set Blazer + Quần Âu Nữ Công Sở Thanh Lịch',
    category: 'women',
    subCategory: 'cong-so',
    price: 1189000,
    oldPrice: 1450000,
    badge: 'BEST SELLER',
    badgeType: 'badge-best',
    image: 'https://images.unsplash.com/photo-1584273143981-41c073dfe8f8?w=600&auto=format&fit=crop&q=80',
    colors: ['#6366f1', '#a5b4fc'],
    rating: 5.0,
    reviews: 156,
    tags: ['women'],
    stock: 11,
    sold: 89
  },
  {
    id: 'wm-3',
    name: 'Áo Blouse Lụa Tay Bồng Phối Cổ Nơ Xinh',
    category: 'women',
    subCategory: 'blouse',
    price: 379000,
    oldPrice: 480000,
    badge: 'NEW',
    badgeType: 'badge-new',
    image: 'https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=600&auto=format&fit=crop&q=80',
    colors: ['#fca5a5', '#fee2e2'],
    rating: 4.8,
    reviews: 73,
    tags: ['women'],
    stock: 14,
    sold: 86
  },
  {
    id: 'wm-4',
    name: 'Chân Váy Xếp Ly Dáng Dài Midi Phong Cách',
    category: 'women',
    subCategory: 'chan-vay',
    price: 439000,
    oldPrice: 560000,
    badge: 'POPULAR',
    badgeType: 'badge-gold',
    image: 'chan_vay_xep_ly_midi.jpg',
    colors: ['#d97706', '#1c1917'],
    rating: 4.9,
    reviews: 207,
    tags: ['women'],
    stock: 20,
    sold: 80
  },
  {
    id: 'wm-5',
    name: 'Đầm Cocktail Đính Hạt Dạ Hội Quyến Rũ',
    category: 'women',
    subCategory: 'dam-vay',
    price: 1290000,
    oldPrice: 1750000,
    badge: 'ELEGANT',
    badgeType: 'badge-best',
    image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=600&auto=format&fit=crop&q=80',
    colors: ['#10b981', '#065f46'],
    rating: 5.0,
    reviews: 43,
    tags: ['women'],
    stock: 5,
    sold: 95
  },
  {
    id: 'wm-6',
    name: 'Áo Cardigan Len Mỏng Nữ Pastel Dịu Dàng',
    category: 'women',
    subCategory: 'ao-khoac',
    price: 299000,
    oldPrice: 420000,
    badge: 'NEW',
    badgeType: 'badge-new',
    image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=600&auto=format&fit=crop&q=80',
    colors: ['#dc2626', '#f87171'],
    rating: 4.8,
    reviews: 84,
    tags: ['women'],
    stock: 17,
    sold: 83
  },
  {
    id: 'wm-7',
    name: 'Túi Xách Canvas Phong Cách Nữ Hàn Quốc',
    category: 'accessories',
    subCategory: 'tui-xach',
    price: 219000,
    oldPrice: 299000,
    badge: 'FAST SHIP',
    badgeType: 'badge-best',
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&auto=format&fit=crop&q=80',
    colors: ['#2563eb', '#1e293b'],
    rating: 4.9,
    reviews: 139,
    tags: ['women', 'accessories'],
    stock: 28,
    sold: 72
  },
  {
    id: 'wm-8',
    name: 'Giày Cao Gót Mũi Nhọn 7cm Nữ Thanh Thoát',
    category: 'accessories',
    subCategory: 'giay',
    price: 589000,
    oldPrice: 750000,
    badge: 'HOT',
    badgeType: 'badge-hot',
    image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=600&auto=format&fit=crop&q=80',
    colors: ['#9333ea', '#c084fc'],
    rating: 4.9,
    reviews: 184,
    tags: ['women', 'accessories'],
    stock: 12,
    sold: 88
  },

  // --- THỜI TRANG NAM ---
  {
    id: 'mn-1',
    name: 'Áo Nỉ Cổ Polo Dệt Tay Raglan',
    category: 'men',
    subCategory: 'ao',
    price: 319000,
    oldPrice: 420000,
    badge: 'NEW',
    badgeType: 'badge-new',
    image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600&auto=format&fit=crop&q=80',
    colors: ['#94a3b8', '#334155'],
    rating: 4.9,
    reviews: 41,
    tags: ['men'],
    stock: 22,
    sold: 78
  },
  {
    id: 'mn-2',
    name: 'Áo Nỉ Sweater Basic Cotton Ấm Áp',
    category: 'men',
    subCategory: 'ao',
    price: 289000,
    oldPrice: 380000,
    badge: 'TREND',
    badgeType: 'badge-trend',
    image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=600&auto=format&fit=crop&q=80',
    colors: ['#475569', '#1e293b'],
    rating: 4.8,
    reviews: 79,
    tags: ['men'],
    stock: 18,
    sold: 82
  },
  {
    id: 'mn-3',
    name: 'Áo Nỉ Henley Dệt Họa Tiết Gân',
    category: 'men',
    subCategory: 'ao',
    price: 329000,
    oldPrice: 450000,
    badge: 'NEW',
    badgeType: 'badge-new',
    image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=600&auto=format&fit=crop&q=80',
    colors: ['#cbd5e1', '#64748b'],
    rating: 4.9,
    reviews: 53,
    tags: ['men'],
    stock: 15,
    sold: 85
  },
  {
    id: 'mn-4',
    name: 'Áo Polo Cotton Pique Thêu Logo Tinh Tế',
    category: 'men',
    subCategory: 'ao',
    price: 249000,
    oldPrice: 320000,
    badge: 'HOT',
    badgeType: 'badge-hot',
    image: 'https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=600&auto=format&fit=crop&q=80',
    colors: ['#ffffff', '#000000'],
    rating: 5.0,
    reviews: 112,
    tags: ['men'],
    stock: 35,
    sold: 65
  },
  {
    id: 'mn-5',
    name: 'Quần Jeans Denim Regular Fit Co Giãn',
    category: 'men',
    subCategory: 'quan',
    price: 399000,
    oldPrice: 510000,
    badge: 'BEST PICK',
    badgeType: 'badge-best',
    image: 'https://images.unsplash.com/photo-1542272604-780c96856592?w=600&auto=format&fit=crop&q=80',
    colors: ['#1e293b', '#3b82f6'],
    rating: 4.8,
    reviews: 87,
    tags: ['men'],
    stock: 14,
    sold: 86
  },
  {
    id: 'mn-6',
    name: 'Quần Kaki Chino Regular Màu Be Cát',
    category: 'men',
    subCategory: 'quan',
    price: 349000,
    oldPrice: 450000,
    badge: 'ELEGANT',
    badgeType: 'badge-gold',
    image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=600&auto=format&fit=crop&q=80',
    colors: ['#e2d7c5', '#78716c'],
    rating: 4.9,
    reviews: 64,
    tags: ['men'],
    stock: 19,
    sold: 81
  },
  {
    id: 'mn-7',
    name: 'Dép Da Quai Ngang Đế Êm Khóa Kim Loại',
    category: 'accessories',
    subCategory: 'giay',
    price: 319000,
    oldPrice: 410000,
    badge: 'POPULAR',
    badgeType: 'badge-best',
    image: 'https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=600&auto=format&fit=crop&q=80',
    colors: ['#000000', '#78350f'],
    rating: 4.9,
    reviews: 130,
    tags: ['men', 'accessories'],
    stock: 22,
    sold: 78
  },
  {
    id: 'mn-8',
    name: 'Sục Bông Da Lộn Lót Lông Đi Trong Nhà',
    category: 'accessories',
    subCategory: 'giay',
    price: 249000,
    oldPrice: 320000,
    badge: 'COZY',
    badgeType: 'badge-trend',
    image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&auto=format&fit=crop&q=80',
    colors: ['#d97706', '#b45309'],
    rating: 4.8,
    reviews: 45,
    tags: ['men', 'accessories'],
    stock: 12,
    sold: 88
  },

  // --- PHỤ KIỆN ---
  {
    id: 'acc-1',
    name: 'Túi Mini Quai Ngọc Trai Đính Đá Sang Trọng',
    category: 'accessories',
    subCategory: 'tui-xach',
    price: 459000,
    oldPrice: 590000,
    badge: 'HOT DEAL',
    badgeType: 'badge-hot',
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&auto=format&fit=crop&q=80',
    colors: ['#fce7f3', '#ffffff'],
    rating: 5.0,
    reviews: 82,
    tags: ['accessories'],
    stock: 9,
    sold: 91
  },
  {
    id: 'acc-2',
    name: 'Dây Chuyền Ngọc Trai Tự Nhiên Khóa Vàng',
    category: 'accessories',
    subCategory: 'trang-suc',
    price: 189000,
    oldPrice: 240000,
    badge: 'TREND',
    badgeType: 'badge-trend',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&auto=format&fit=crop&q=80',
    colors: ['#fef3c7', '#ffffff'],
    rating: 4.9,
    reviews: 140,
    tags: ['accessories'],
    stock: 25,
    sold: 75
  },
  {
    id: 'acc-3',
    name: 'Kính Mát Oval Retro Gọng Đồi Mồi Phong Cách',
    category: 'accessories',
    subCategory: 'kinh-mat',
    price: 229000,
    oldPrice: 310000,
    badge: '-26%',
    badgeType: 'badge-sale',
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&auto=format&fit=crop&q=80',
    colors: ['#78350f', '#000000'],
    rating: 4.8,
    reviews: 67,
    tags: ['accessories'],
    stock: 14,
    sold: 86
  },
  {
    id: 'acc-4',
    name: 'Kẹp Tóc Nơ Satin Bản To Tiểu Thư Pháp',
    category: 'accessories',
    subCategory: 'phu-kien-toc',
    price: 59000,
    oldPrice: 89000,
    badge: 'FLASH',
    badgeType: 'badge-sale',
    image: 'https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?w=600&auto=format&fit=crop&q=80',
    colors: ['#ffffff', '#f43f5e', '#000000'],
    rating: 4.9,
    reviews: 215,
    tags: ['accessories'],
    stock: 3,
    sold: 97
  },
  {
    id: 'acc-5',
    name: 'Túi Đeo Vai Baguette Da Trơn Retro 90s',
    category: 'accessories',
    subCategory: 'tui-xach',
    price: 359000,
    oldPrice: 470000,
    badge: 'BEST',
    badgeType: 'badge-best',
    image: 'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=600&auto=format&fit=crop&q=80',
    colors: ['#451a03', '#1c1917'],
    rating: 4.9,
    reviews: 95,
    tags: ['accessories'],
    stock: 11,
    sold: 89
  },
  {
    id: 'acc-6',
    name: 'Khuyên Tai Vòng Mạ Vàng 18k Chunky Minimal',
    category: 'accessories',
    subCategory: 'trang-suc',
    price: 159000,
    oldPrice: 210000,
    badge: 'HOT',
    badgeType: 'badge-hot',
    image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=600&auto=format&fit=crop&q=80',
    colors: ['#fbbf24', '#f59e0b'],
    rating: 4.8,
    reviews: 88,
    tags: ['accessories'],
    stock: 16,
    sold: 84
  },
  {
    id: 'acc-7',
    name: 'Khăn Lụa Vuông Họa Tiết Hoa Cổ Điển',
    category: 'accessories',
    subCategory: 'phu-kien-toc',
    price: 129000,
    oldPrice: 180000,
    badge: '-28%',
    badgeType: 'badge-sale',
    image: 'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=600&auto=format&fit=crop&q=80',
    colors: ['#fed7aa', '#ffffff'],
    rating: 4.9,
    reviews: 104,
    tags: ['accessories'],
    stock: 20,
    sold: 80
  },
  {
    id: 'acc-8',
    name: 'Vòng Tay Ngọc Trai Nhỏ Dịu Dàng Nữ Tính',
    category: 'accessories',
    subCategory: 'trang-suc',
    price: 149000,
    oldPrice: 199000,
    badge: 'TREND',
    badgeType: 'badge-trend',
    image: 'https://images.unsplash.com/photo-1611591475870-0761358055ee?w=600&auto=format&fit=crop&q=80',
    colors: ['#fef3c7', '#ffffff'],
    rating: 5.0,
    reviews: 76,
    tags: ['accessories'],
    stock: 15,
    sold: 85
  },

  // --- FLASH SALE SPECIAL ⚡ ---
  {
    id: 'fs-1',
    name: 'Set Đồ Bộ Thể Thao Nữ Năng Động Quick-Dry',
    category: 'women',
    subCategory: 'the-thao',
    price: 299000,
    oldPrice: 650000,
    badge: '-54%',
    badgeType: 'badge-sale',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&auto=format&fit=crop&q=80',
    colors: ['#ec4899', '#f43f5e'],
    rating: 5.0,
    reviews: 320,
    tags: ['flash-sale', 'women'],
    stock: 4,
    sold: 96
  },
  {
    id: 'fs-2',
    name: 'Áo Khoác Gió Bomber Nam Phối Màu Block',
    category: 'men',
    subCategory: 'ao-khoac',
    price: 369000,
    oldPrice: 790000,
    badge: '-53%',
    badgeType: 'badge-sale',
    image: 'https://images.unsplash.com/photo-1548883354-7622d03aca27?w=600&auto=format&fit=crop&q=80',
    colors: ['#ef4444', '#1e293b'],
    rating: 4.9,
    reviews: 210,
    tags: ['flash-sale', 'men'],
    stock: 7,
    sold: 93
  },
  {
    id: 'fs-3',
    name: 'Mắt Kính Cat-Eye Phong Cách Milan Fashion',
    category: 'accessories',
    subCategory: 'kinh-mat',
    price: 159000,
    oldPrice: 380000,
    badge: '-58%',
    badgeType: 'badge-sale',
    image: 'https://images.unsplash.com/photo-1577803645773-f96470509666?w=600&auto=format&fit=crop&q=80',
    colors: ['#000000', '#78350f'],
    rating: 4.9,
    reviews: 145,
    tags: ['flash-sale', 'accessories'],
    stock: 2,
    sold: 98
  },
  {
    id: 'fs-4',
    name: 'Đầm Lụa Satin 2 Dây Quyến Rũ Party Chic',
    category: 'women',
    subCategory: 'dam-vay',
    price: 399000,
    oldPrice: 890000,
    badge: '-55%',
    badgeType: 'badge-sale',
    image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=600&auto=format&fit=crop&q=80',
    colors: ['#be123c', '#000000'],
    rating: 5.0,
    reviews: 280,
    tags: ['flash-sale', 'women'],
    stock: 5,
    sold: 95
  },
  // --- SUB-CATEGORIES AUTHENTIC EXPANSION ---
  {
    id: 'mn-phong-1',
    name: 'Áo Phông Nam Cotton 250gsm Phom Regular Thoáng Mát',
    category: 'men',
    subCategory: 'ao',
    price: 219000,
    oldPrice: 289000,
    badge: 'BÁN CHẠY',
    badgeType: 'badge-hot',
    image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=600&auto=format&fit=crop&q=80',
    colors: ['#ffffff', '#000000', '#9ca3af'],
    rating: 4.9,
    reviews: 142,
    tags: ['men', 'ao-phong', 'new-arrivals', 'flash-sale'],
    stock: 45,
    sold: 312
  },
  {
    id: 'mn-phong-2',
    name: 'Áo Phông Nam Cổ Tròn Minimalist Thêu Tag Hông',
    category: 'men',
    subCategory: 'ao',
    price: 249000,
    oldPrice: 320000,
    badge: 'MỚI VỀ',
    badgeType: 'badge-new',
    image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600&auto=format&fit=crop&q=80',
    colors: ['#27272a', '#f4f4f5'],
    rating: 4.8,
    reviews: 89,
    tags: ['men', 'ao-phong'],
    stock: 35,
    sold: 178
  },
  {
    id: 'mn-somi-1',
    name: 'Áo Sơ Mi Nam Cộc Tay Họa Tiết Cuban Resort',
    category: 'men',
    subCategory: 'ao',
    price: 349000,
    oldPrice: 450000,
    badge: 'HÈ 2026',
    badgeType: 'badge-new',
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&auto=format&fit=crop&q=80',
    colors: ['#e2e8f0', '#cbd5e1'],
    rating: 4.8,
    reviews: 68,
    tags: ['men', 'ao-so-mi', 'new-arrivals'],
    stock: 30,
    sold: 115
  },
  {
    id: 'mn-somi-2',
    name: 'Áo Sơ Mi Nam Dài Tay Oxford May Đo Tinh Tế',
    category: 'men',
    subCategory: 'ao',
    price: 429000,
    oldPrice: 550000,
    badge: 'BESTSELLER',
    badgeType: 'badge-hot',
    image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600&auto=format&fit=crop&q=80',
    colors: ['#ffffff', '#bfdbfe'],
    rating: 5.0,
    reviews: 94,
    tags: ['men', 'ao-so-mi'],
    stock: 28,
    sold: 210
  },
  {
    id: 'mn-tank-1',
    name: 'Áo Tank Top Thể Thao Nam Co Giãn Thoáng Khí',
    category: 'men',
    subCategory: 'ao',
    price: 189000,
    oldPrice: 240000,
    badge: 'NĂNG ĐỘNG',
    badgeType: 'badge-new',
    image: 'https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=600&auto=format&fit=crop&q=80',
    colors: ['#18181b', '#71717a', '#ffffff'],
    rating: 4.9,
    reviews: 53,
    tags: ['men', 'ao-tank-top'],
    stock: 35,
    sold: 180
  },
  {
    id: 'mn-short-1',
    name: 'Quần Short Kaki Nam Co Giãn Dáng Trẻ Trung',
    category: 'men',
    subCategory: 'quan',
    price: 289000,
    oldPrice: 380000,
    badge: 'ƯA CHUỘNG',
    badgeType: 'badge-hot',
    image: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=600&auto=format&fit=crop&q=80',
    colors: ['#d7ccc8', '#374151', '#1f2937'],
    rating: 4.9,
    reviews: 87,
    tags: ['men', 'quan-short', 'flash-sale'],
    stock: 32,
    sold: 145
  },
  {
    id: 'mn-short-2',
    name: 'Quần Short Nỉ Thể Thao Dạo Phố Thoải Mái',
    category: 'men',
    subCategory: 'quan',
    price: 239000,
    oldPrice: 320000,
    badge: 'COMFORT',
    badgeType: 'badge-new',
    image: 'https://images.unsplash.com/photo-1562157873-818bc0726f68?w=600&auto=format&fit=crop&q=80',
    colors: ['#9ca3af', '#111827'],
    rating: 4.8,
    reviews: 62,
    tags: ['men', 'quan-short'],
    stock: 40,
    sold: 195
  },
  {
    id: 'mn-dep-1',
    name: 'Dép Kẹp Nam Quai Da Bò Thật Đế Cao Su Êm Ái',
    category: 'accessories',
    subCategory: 'giay',
    price: 259000,
    oldPrice: 350000,
    badge: 'DA THẬT',
    badgeType: 'badge-hot',
    image: 'https://images.unsplash.com/photo-1560343090-f0409e92791a?w=600&auto=format&fit=crop&q=80',
    colors: ['#78350f', '#18181b'],
    rating: 4.9,
    reviews: 76,
    tags: ['accessories', 'men', 'dep-kep'],
    stock: 25,
    sold: 160
  },
  {
    id: 'mn-giay-1',
    name: 'Giày Lười Loafer Nam Da Bò Ý Thanh Lịch',
    category: 'accessories',
    subCategory: 'giay',
    price: 849000,
    oldPrice: 1100000,
    badge: 'CAO CẤP',
    badgeType: 'badge-hot',
    image: 'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=600&auto=format&fit=crop&q=80',
    colors: ['#18181b', '#451a03'],
    rating: 5.0,
    reviews: 92,
    tags: ['accessories', 'men', 'giay-luoi', 'new-arrivals'],
    stock: 18,
    sold: 110
  },
  {
    id: 'mn-daylung-1',
    name: 'Dây Lưng Nam Da Bò Khóa Tự Động Hợp Kim Cao Cấp',
    category: 'accessories',
    subCategory: 'phu-kien',
    price: 299000,
    oldPrice: 420000,
    badge: 'KHÓA BỀN',
    badgeType: 'badge-new',
    image: 'https://images.unsplash.com/photo-1624222247344-550fb60583dc?w=600&auto=format&fit=crop&q=80',
    colors: ['#000000', '#78350f'],
    rating: 4.9,
    reviews: 115,
    tags: ['accessories', 'men', 'day-lung'],
    stock: 50,
    sold: 280
  },
  {
    id: 'mn-mu-1',
    name: 'Mũ Lưỡi Trai Classic Velora Thêu 3D Tinh Tế',
    category: 'accessories',
    subCategory: 'phu-kien',
    price: 169000,
    oldPrice: 220000,
    badge: 'TRENDING',
    badgeType: 'badge-new',
    image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=600&auto=format&fit=crop&q=80',
    colors: ['#000000', '#f4f4f5', '#1e3a8a'],
    rating: 4.8,
    reviews: 88,
    tags: ['accessories', 'men', 'mu', 'flash-sale'],
    stock: 45,
    sold: 240
  },
  {
    id: 'mn-tat-1',
    name: 'Set 3 Đôi Tất Nam Cổ Ngắn Cotton Kháng Khuẩn',
    category: 'accessories',
    subCategory: 'phu-kien',
    price: 99000,
    oldPrice: 150000,
    badge: 'COMBO 3',
    badgeType: 'badge-hot',
    image: 'https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?w=600&auto=format&fit=crop&q=80',
    colors: ['#000000', '#ffffff', '#9ca3af'],
    rating: 4.9,
    reviews: 165,
    tags: ['accessories', 'men', 'tat'],
    stock: 80,
    sold: 410
  }

];

// Load persisted custom products edited by Admin
(function initPersistedProducts() {
  const saved = localStorage.getItem('velora_custom_products');
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed) && parsed.length > 0) {
        PRODUCTS.length = 0;
        PRODUCTS.push(...parsed);
      }
    } catch (e) {
      console.warn('Could not load custom products', e);
    }
  }
})();

// ==========================================================================
// 2. STATE PERSISTENCE (LOCAL STORAGE)
// ==========================================================================
let cart = JSON.parse(localStorage.getItem('velora_cart')) || [
  {
    id: 'na-1',
    name: 'Áo Blazer Nam Form Rộng Classic',
    price: 689000,
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&auto=format&fit=crop&q=80',
    color: '#2b3a4a',
    size: 'L',
    quantity: 1
  },
  {
    id: 'na-2',
    name: 'Set Váy Dạ Tweed Tiểu Thư Nữ',
    price: 799000,
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&auto=format&fit=crop&q=80',
    color: '#f472b6',
    size: 'M',
    quantity: 1
  }
];

let wishlist = JSON.parse(localStorage.getItem('velora_wishlist')) || ['na-1', 'wm-1', 'acc-1'];
let appliedCoupon = JSON.parse(localStorage.getItem('velora_coupon')) || null;
const FREE_SHIPPING_THRESHOLD = 500000;
const STANDARD_SHIPPING_FEE = 30000;

// User Profile State & Roles (with separate persistent storage for Customer and Admin)
// User Accounts & Registration Database
function getRegisteredUsers() {
  const stored = localStorage.getItem('velora_registered_users');
  if (stored) {
    try {
      const parsed = JSON.parse(stored);
      if (Array.isArray(parsed)) return parsed;
    } catch (e) {}
  }
  return [];
}

function saveRegisteredUsers(users) {
  localStorage.setItem('velora_registered_users', JSON.stringify(users));
  try {
    const sb = getSupabaseClient();
    if (sb && Array.isArray(users)) {
      sb.from('users').upsert(users.map(u => ({
        id: u.id || u.email,
        email: u.email,
        password: u.password,
        name: u.name,
        phone: u.phone,
        address: u.address,
        avatar: u.avatar,
        role: u.role || 'customer',
        membership_tier: u.membershipTier || 'VIP GOLD',
        points: u.points || 0
      }))).then(() => {}).catch(err => console.warn(err));
    }
  } catch (e) {}
}

function switchAuthTab(tab) {
  const btnLogin = document.getElementById('tabBtnAuthLogin');
  const btnReg = document.getElementById('tabBtnAuthRegister');
  const paneLogin = document.getElementById('authPaneLogin');
  const paneReg = document.getElementById('authPaneRegister');
  const cardTitle = document.getElementById('authCardTitle');
  const cardSubtitle = document.getElementById('authCardSubtitle');

  if (tab === 'register') {
    if (btnLogin) {
      btnLogin.classList.remove('active', 'bg-white', 'shadow-sm');
      btnLogin.classList.add('text-muted');
    }
    if (btnReg) {
      btnReg.classList.add('active', 'bg-white', 'shadow-sm');
      btnReg.classList.remove('text-muted');
    }
    if (paneLogin) paneLogin.classList.add('d-none');
    if (paneReg) paneReg.classList.remove('d-none');
    if (cardTitle) cardTitle.textContent = 'Đăng Ký Thành Viên Velora';
    if (cardSubtitle) cardSubtitle.textContent = 'Tạo tài khoản để nhận 500 điểm thưởng VIP và voucher chào mừng 10%';
  } else {
    if (btnReg) {
      btnReg.classList.remove('active', 'bg-white', 'shadow-sm');
      btnReg.classList.add('text-muted');
    }
    if (btnLogin) {
      btnLogin.classList.add('active', 'bg-white', 'shadow-sm');
      btnLogin.classList.remove('text-muted');
    }
    if (paneReg) paneReg.classList.add('d-none');
    if (paneLogin) paneLogin.classList.remove('d-none');
    if (cardTitle) cardTitle.textContent = 'Đăng Nhập Tài Khoản';
    if (cardSubtitle) cardSubtitle.textContent = 'Chào mừng bạn quay lại với thời trang thượng lưu Velora Luxury';
  }
}

function handleRegisterForm(event) {
  if (event) event.preventDefault();
  const nameInput = document.getElementById('regName');
  const phoneInput = document.getElementById('regPhone');
  const emailInput = document.getElementById('regEmail');
  const pwdInput = document.getElementById('regPassword');
  const confirmPwdInput = document.getElementById('regConfirmPassword');
  const agreeTerms = document.getElementById('regAgreeTerms');

  const name = nameInput ? nameInput.value.trim() : '';
  const phone = phoneInput ? phoneInput.value.trim() : '';
  const email = emailInput ? emailInput.value.trim().toLowerCase() : '';
  const pwd = pwdInput ? pwdInput.value : '';
  const confirmPwd = confirmPwdInput ? confirmPwdInput.value : '';

  if (!name || !phone || !email || !pwd) {
    showToast('Vui lòng điền đầy đủ các thông tin bắt buộc!', 'warning');
    return;
  }

  if (pwd.length < 6) {
    showToast('Mật khẩu phải có tối thiểu 6 ký tự!', 'warning');
    if (pwdInput) pwdInput.focus();
    return;
  }

  if (pwd !== confirmPwd) {
    showToast('Mật khẩu xác nhận không khớp! Vui lòng kiểm tra lại.', 'error');
    if (confirmPwdInput) confirmPwdInput.focus();
    return;
  }

  if (agreeTerms && !agreeTerms.checked) {
    showToast('Vui lòng đồng ý với Điều khoản dịch vụ và Chính sách hội viên!', 'warning');
    return;
  }

  const users = getRegisteredUsers();
  if (users.some(u => u.email === email)) {
    showToast(`Email <b>${email}</b> đã được đăng ký từ trước! Vui lòng đăng nhập.`, 'warning');
    switchAuthTab('login');
    const loginEmail = document.getElementById('loginEmail');
    if (loginEmail) loginEmail.value = email;
    return;
  }

  const newUser = {
    id: 'USR-' + Date.now(),
    name: name,
    email: email,
    phone: phone,
    password: pwd,
    address: 'Chưa cập nhật địa chỉ',
    membershipTier: 'THÀNH VIÊN MỚI',
    points: 500,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80',
    createdAt: new Date().toLocaleDateString('vi-VN')
  };

  users.push(newUser);
  saveRegisteredUsers(users);

  // Set as current customer profile
  saveCustomerProfile(newUser);

  currentUser = {
    isLoggedIn: true,
    role: 'customer',
    ...newUser,
    ordersCount: 0
  };
  localStorage.setItem('velora_user', JSON.stringify(currentUser));

  // Grant welcome voucher WELCOME10
  const vouchers = getVouchers();
  if (!vouchers.some(v => v.code === 'WELCOME10')) {
    vouchers.unshift({
      code: 'WELCOME10',
      discount: '10%',
      minOrder: 0,
      title: 'Ưu Đãi Thành Viên Mới',
      desc: 'Giảm ngay 10% cho đơn hàng đầu tiên chào mừng thành viên mới gia nhập Velora',
      expiry: '31/12/2026',
      badge: 'QUÀ CHÀO MỪNG'
    });
    localStorage.setItem('velora_vouchers', JSON.stringify(vouchers));
  }

  updateAccountUI();
  switchAccountTab('profile');
  showToast(`🎉 Chúc mừng <b>${name}</b> đã tạo tài khoản thành công! Tặng bạn <b>500 điểm thưởng</b> và mã giảm 10% <b>WELCOME10</b>.`, 'success');
}

function getCustomerProfile() {
  const stored = localStorage.getItem('velora_customer_profile');
  if (stored) {
    try {
      const parsed = JSON.parse(stored);
      if (parsed && typeof parsed === 'object') return parsed;
    } catch (e) {}
  }
  return {
    name: 'Đặng Minh Anh',
    email: 'minhanh.velora@gmail.com',
    phone: '0988 123 456',
    address: '123 Đường Nam Kỳ Khởi Nghĩa, Quận 1, TP. Hồ Chí Minh',
    membershipTier: 'VIP GOLD',
    points: 1250,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80'
  };
}

function saveCustomerProfile(profile) {
  localStorage.setItem('velora_customer_profile', JSON.stringify(profile));
  try {
    const sb = getSupabaseClient();
    if (sb && profile && profile.email) {
      sb.from('users').upsert([{
        id: profile.id || profile.email,
        email: profile.email,
        password: profile.password || '',
        name: profile.name,
        phone: profile.phone,
        address: profile.address,
        avatar: profile.avatar,
        role: 'customer',
        membership_tier: profile.membershipTier || 'VIP GOLD',
        points: profile.points || 1250
      }]).then(() => {}).catch(err => console.warn(err));
    }
  } catch (e) {}
}

function getAdminProfile() {
  const stored = localStorage.getItem('velora_admin_profile');
  if (stored) {
    try {
      const parsed = JSON.parse(stored);
      if (parsed && typeof parsed === 'object') return parsed;
    } catch (e) {}
  }
  return {
    name: 'Quản Trị Viên Velora',
    email: 'admin@velora.vn',
    phone: '1900 8899',
    address: 'Trụ sở Điều hành Velora Fashion, Q.1, TP. HCM',
    membershipTier: 'SUPER ADMIN',
    points: 99999,
    avatar: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400&auto=format&fit=crop&q=80'
  };
}

function saveAdminProfile(profile) {
  localStorage.setItem('velora_admin_profile', JSON.stringify(profile));
  try {
    const sb = getSupabaseClient();
    if (sb && profile && profile.email) {
      sb.from('users').upsert([{
        id: 'usr-admin',
        email: profile.email,
        password: profile.password || '',
        name: profile.name,
        phone: profile.phone,
        address: profile.address,
        avatar: profile.avatar,
        role: 'admin',
        membership_tier: 'SUPER ADMIN',
        points: 99999
      }]).then(() => {}).catch(err => console.warn(err));
    }
  } catch (e) {}
}

let currentUser = JSON.parse(localStorage.getItem('velora_user')) || {
  isLoggedIn: true,
  role: 'customer',
  ...getCustomerProfile(),
  ordersCount: 3
};

// ==========================================================================
// 3. UTILITY FUNCTIONS
// ==========================================================================
function formatCurrency(amount) {
  return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' })
    .format(amount)
    .replace('₫', 'đ');
}

const formatVND = formatCurrency;

function showToast(message, type = 'success') {
  let container = document.getElementById('toastContainer');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toastContainer';
    container.className = 'toast-container-velora';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = `velora-toast ${type}`;
  const icon = type === 'success' ? 'bi-check-circle-fill' : type === 'error' ? 'bi-exclamation-triangle-fill' : 'bi-info-circle-fill';

  toast.innerHTML = `
    <i class="bi ${icon} fs-5"></i>
    <div class="flex-grow-1">${message}</div>
    <button type="button" class="btn-close btn-close-white" style="font-size:0.7rem;"></button>
  `;

  container.appendChild(toast);

  toast.querySelector('.btn-close').addEventListener('click', () => toast.remove());

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(50px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// ==========================================================================
// 4. RENDERING PRODUCT CARDS
// ==========================================================================
function renderProductCard(p, buttonType = 'add-to-cart') {
  const isWishlisted = wishlist.includes(p.id);
  const colorDots = (p.colors || ['#111'])
    .map(c => `<span class="color-dot" style="background-color: ${c};"></span>`)
    .join('');

  let actionButton = '';
  if (buttonType === 'add-to-cart') {
    actionButton = `
      <button class="btn-card-add mt-auto" onclick="addToCart('${p.id}')">
        <i class="bi bi-bag-plus"></i> Thêm giỏ hàng
      </button>
    `;
  } else if (buttonType === 'add-to-cart-pink') {
    actionButton = `
      <button class="btn-card-add btn-card-add-pink mt-auto" onclick="addToCart('${p.id}')">
        <i class="bi bi-bag-heart"></i> + Giỏ hàng
      </button>
    `;
  } else if (buttonType === 'view-product') {
    actionButton = `
      <button class="btn-card-add mt-auto btn-outline-dark bg-white text-dark border" onclick="openQuickView('${p.id}')">
        <i class="bi bi-eye"></i> Xem sản phẩm
      </button>
    `;
  }

  let stockBar = '';
  if (p.tags && p.tags.includes('flash-sale')) {
    stockBar = `
      <div class="flash-stock-wrap">
        <div class="flash-stock-bar">
          <div class="flash-stock-fill" style="width: ${p.sold}%;"></div>
        </div>
        <div class="flash-stock-text">
          <span><i class="bi bi-fire text-danger"></i> Đã bán ${p.sold}%</span>
          <span>Còn ${p.stock} cái</span>
        </div>
      </div>
    `;
  }

  return `
    <div class="col-6 col-md-4 col-lg-3">
      <div class="velora-product-card" data-id="${p.id}" data-category="${p.category}" data-subcategory="${p.subCategory}">
        <div class="product-img-wrap">
          <img src="${p.image}" alt="${p.name}" class="product-img" loading="lazy">
          <span class="product-badge ${p.badgeType}">${p.badge}</span>
          <button class="btn-wishlist ${isWishlisted ? 'active' : ''}" onclick="toggleWishlist('${p.id}', this)" title="Thêm vào yêu thích">
            <i class="bi ${isWishlisted ? 'bi-heart-fill' : 'bi-heart'}"></i>
          </button>
          <div class="product-quick-actions">
            <button class="btn-quick-view" onclick="openQuickView('${p.id}')">
              <i class="bi bi-arrows-fullscreen"></i> Xem nhanh
            </button>
          </div>
        </div>

        <div class="product-category">${p.category.toUpperCase()}</div>
        <h4 class="product-title" title="${p.name}">${p.name}</h4>

        <div class="product-colors">${colorDots}</div>

        <div class="product-price-wrap">
          <span class="price-current">${formatCurrency(p.price)}</span>
          ${p.oldPrice ? `<span class="price-old">${formatCurrency(p.oldPrice)}</span>` : ''}
        </div>

        <div class="product-rating mb-2">
          <i class="bi bi-star-fill"></i>
          <span>${p.rating.toFixed(1)}</span>
          <span class="rating-count">(${p.reviews} đánh giá)</span>
        </div>

        ${stockBar}
        ${actionButton}
      </div>
    </div>
  `;
}

function populateGrid(containerId, productList, buttonType = 'add-to-cart') {
  const container = document.getElementById(containerId);
  if (!container) return;
  if (!productList || productList.length === 0) {
    container.innerHTML = `
      <div class="col-12 py-5 text-center text-muted">
        <i class="bi bi-inbox fs-1 d-block mb-3 opacity-50"></i>
        Không có sản phẩm nào phù hợp với bộ lọc.
      </div>
    `;
    return;
  }
  container.innerHTML = productList.map(p => renderProductCard(p, buttonType)).join('');
}

// ==========================================================================
// 5. FLASH SALE COUNTDOWN ENGINE ⚡
// ==========================================================================
function initFlashSaleTimer() {
  let totalSeconds = 8 * 3600 + 45 * 60 + 20;

  const updateDisplay = () => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    const pad = (n) => String(n).padStart(2, '0');

    document.querySelectorAll('.cd-hours, .timer-hours').forEach(el => el.textContent = pad(hours));
    document.querySelectorAll('.cd-minutes, .timer-minutes').forEach(el => el.textContent = pad(minutes));
    document.querySelectorAll('.cd-seconds, .timer-seconds').forEach(el => el.textContent = pad(seconds));

    if (totalSeconds > 0) {
      totalSeconds--;
    } else {
      totalSeconds = 12 * 3600;
    }
  };

  updateDisplay();
  setInterval(updateDisplay, 1000);
}

// ==========================================================================
// 6. CART ENGINE & RECALCULATIONS
// ==========================================================================
function saveCart() {
  localStorage.setItem('velora_cart', JSON.stringify(cart));
  updateCartUI();
}

function addToCart(productId, quantity = 1, size = 'M', color = null) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const chosenColor = color || (product.colors && product.colors[0]) || '#111';
  const existingItem = cart.find(item => item.id === productId && item.size === size && item.color === chosenColor);

  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      size: size,
      color: chosenColor,
      quantity: quantity
    });
  }

  saveCart();
  showToast(`Đã thêm <b>${product.name}</b> (${size}) vào giỏ hàng!`);

  // Animate badges
  document.querySelectorAll('.cart-badge-count').forEach(b => {
    b.classList.add('animate__animated', 'animate__rubberBand');
    setTimeout(() => b.classList.remove('animate__animated', 'animate__rubberBand'), 800);
  });
}

function updateCartItemQty(index, delta) {
  if (!cart[index]) return;
  cart[index].quantity += delta;
  if (cart[index].quantity <= 0) {
    cart.splice(index, 1);
    showToast('Đã xóa sản phẩm khỏi giỏ hàng', 'info');
  }
  saveCart();
}

function removeCartItem(index) {
  if (!cart[index]) return;
  const removedName = cart[index].name;
  cart.splice(index, 1);
  saveCart();
  showToast(`Đã xóa <b>${removedName}</b>`, 'info');
}

function clearCart() {
  if (cart.length === 0) return;
  if (confirm('Bạn có chắc muốn làm trống giỏ hàng?')) {
    cart = [];
    saveCart();
    showToast('Đã làm trống giỏ hàng!', 'info');
  }
}

function applyCouponCode(inputElementId) {
  const input = document.getElementById(inputElementId);
  if (!input) return;
  const code = input.value.trim().toUpperCase();

  if (!code) {
    showToast('Vui lòng nhập mã giảm giá', 'error');
    return;
  }

  const vouchers = getVouchers();
  const found = vouchers.find(v => v.code.toUpperCase() === code);
  if (!found) {
    showToast('Mã giảm giá không tồn tại hoặc đã hết hạn!', 'error');
    return;
  }

  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  if (found.minSpend && subtotal < found.minSpend) {
    showToast(`Mã <b>${found.code}</b> chỉ áp dụng cho đơn từ <b>${formatCurrency(found.minSpend)}</b>!`, 'warning');
    return;
  }

  appliedCoupon = {
    code: found.code,
    type: found.type,
    discountRate: found.type === 'percent' ? (Number(found.value) / 100) : 0,
    flatDiscount: found.type === 'fixed' ? Number(found.value) : 0,
    freeShipping: found.type === 'shipping'
  };

  localStorage.setItem('velora_coupon', JSON.stringify(appliedCoupon));
  updateCartUI();
  showToast(`Áp dụng mã <b>${found.code}</b> thành công: ${found.title}!`, 'success');
}

function applyCoupon(inputElementId) {
  applyCouponCode(inputElementId);
}

function applyCouponCodeViaValue(code) {
  const inputs = ['pageCouponInput', 'cartPageCouponInput', 'offcanvasCouponInput'];
  inputs.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = code;
  });

  const vouchers = getVouchers();
  const found = vouchers.find(v => v.code.toUpperCase() === code.toUpperCase());
  if (!found) {
    showToast('Mã giảm giá không tồn tại hoặc đã hết hạn!', 'error');
    return;
  }

  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  if (found.minSpend && subtotal < found.minSpend) {
    showToast(`Mã <b>${found.code}</b> chỉ áp dụng cho đơn từ <b>${formatCurrency(found.minSpend)}</b>!`, 'warning');
    return;
  }

  appliedCoupon = {
    code: found.code,
    type: found.type,
    discountRate: found.type === 'percent' ? (Number(found.value) / 100) : 0,
    flatDiscount: found.type === 'fixed' ? Number(found.value) : 0,
    freeShipping: found.type === 'shipping'
  };

  localStorage.setItem('velora_coupon', JSON.stringify(appliedCoupon));
  updateCartUI();
  showToast(`Áp dụng mã <b>${found.code}</b> thành công: ${found.title}!`, 'success');
}

function updateCartUI() {
  const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  document.querySelectorAll('.cart-badge-count').forEach(badge => badge.textContent = totalCount);

  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  let discount = 0;
  let isFreeShipping = subtotal >= FREE_SHIPPING_THRESHOLD;

  if (appliedCoupon) {
    if (appliedCoupon.discountRate > 0) discount += subtotal * appliedCoupon.discountRate;
    if (appliedCoupon.flatDiscount > 0) discount += appliedCoupon.flatDiscount;
    if (appliedCoupon.freeShipping) isFreeShipping = true;
  }

  const shippingFee = (cart.length === 0 || isFreeShipping) ? 0 : STANDARD_SHIPPING_FEE;
  const grandTotal = Math.max(0, subtotal - discount + shippingFee);

  const remainingForFreeShip = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);
  const freeShipPercent = Math.min(100, Math.round((subtotal / FREE_SHIPPING_THRESHOLD) * 100));

  document.querySelectorAll('.cart-freeship-text').forEach(el => {
    if (subtotal >= FREE_SHIPPING_THRESHOLD) {
      el.innerHTML = `<i class="bi bi-check2-circle text-success"></i> Chúc mừng! Đơn hàng được <b>FREESHIP TOÀN QUỐC</b>`;
    } else {
      el.innerHTML = `Mua thêm <b>${formatCurrency(remainingForFreeShip)}</b> để được <span class="badge bg-danger">FREESHIP</span>`;
    }
  });

  document.querySelectorAll('.cart-freeship-bar').forEach(el => {
    el.style.width = `${freeShipPercent}%`;
  });

  // Offcanvas drawer content
  const offcanvasList = document.getElementById('offcanvasCartItems');
  if (offcanvasList) {
    if (cart.length === 0) {
      offcanvasList.innerHTML = `
        <div class="text-center py-5 text-muted">
          <i class="bi bi-cart-x fs-1 opacity-50 mb-3 d-block"></i>
          <h5>Giỏ hàng đang trống</h5>
          <p class="small">Hãy chọn những món đồ thời trang tuyệt vời từ Velora nhé!</p>
          <a href="new-arrivals.html" class="btn btn-dark mt-2">Khám phá ngay</a>
        </div>
      `;
    } else {
      offcanvasList.innerHTML = cart.map((item, idx) => `
        <div class="cart-item-row">
          <img src="${item.image}" alt="${item.name}" class="cart-item-img">
          <div class="cart-item-info">
            <h6 class="cart-item-title">${item.name}</h6>
            <div class="cart-item-variant">
              <span>Size: <b>${item.size}</b></span> • 
              <span>Màu: <span class="d-inline-block rounded-circle" style="width:10px; height:10px; background-color:${item.color}; vertical-align:middle; border:1px solid #ccc;"></span></span>
            </div>
            <div class="d-flex align-items-center justify-content-between mt-2">
              <div class="qty-control">
                <button class="qty-btn" onclick="updateCartItemQty(${idx}, -1)">-</button>
                <input type="text" class="qty-input" value="${item.quantity}" readonly>
                <button class="qty-btn" onclick="updateCartItemQty(${idx}, 1)">+</button>
              </div>
              <span class="cart-item-price">${formatCurrency(item.price * item.quantity)}</span>
            </div>
          </div>
          <button class="cart-item-remove" onclick="removeCartItem(${idx})" title="Xóa">
            <i class="bi bi-trash3"></i>
          </button>
        </div>
      `).join('');
    }
  }

  // Summary numbers
  document.querySelectorAll('.cart-subtotal, .cart-subtotal-val').forEach(el => el.textContent = formatCurrency(subtotal));
  document.querySelectorAll('.cart-discount, .cart-discount-val').forEach(el => el.textContent = discount > 0 ? `-${formatCurrency(discount)}` : '0đ');
  document.querySelectorAll('.cart-shipping, .cart-shipping-val').forEach(el => el.textContent = shippingFee === 0 ? 'Miễn phí' : formatCurrency(shippingFee));
  document.querySelectorAll('.cart-grandtotal, .cart-total-val').forEach(el => el.textContent = formatCurrency(grandTotal));

  // Full Cart Page Table if present
  const pageCartTable = document.getElementById('fullCartTableBody');
  if (pageCartTable) {
    if (cart.length === 0) {
      pageCartTable.innerHTML = `
        <tr>
          <td colspan="5" class="text-center py-5 text-muted">
            <i class="bi bi-bag-x fs-1 opacity-50 d-block mb-3"></i>
            <h5>Chưa có sản phẩm nào trong giỏ hàng</h5>
            <a href="index.html" class="btn btn-dark mt-2">Tiếp tục mua sắm</a>
          </td>
        </tr>
      `;
    } else {
      pageCartTable.innerHTML = cart.map((item, idx) => `
        <tr>
          <td>
            <div class="d-flex align-items-center gap-3">
              <img src="${item.image}" alt="${item.name}" style="width:60px; height:75px; object-fit:cover; border-radius:8px;">
              <div>
                <h6 class="mb-1">${item.name}</h6>
                <small class="text-muted">Size: ${item.size} • Màu: <span class="d-inline-block rounded-circle" style="width:9px; height:9px; background-color:${item.color};"></span></small>
              </div>
            </div>
          </td>
          <td class="align-middle">${formatCurrency(item.price)}</td>
          <td class="align-middle">
            <div class="qty-control">
              <button class="qty-btn" onclick="updateCartItemQty(${idx}, -1)">-</button>
              <input type="text" class="qty-input" value="${item.quantity}" readonly>
              <button class="qty-btn" onclick="updateCartItemQty(${idx}, 1)">+</button>
            </div>
          </td>
          <td class="align-middle text-danger fw-bold">${formatCurrency(item.price * item.quantity)}</td>
          <td class="align-middle text-end">
            <button class="btn btn-sm btn-outline-danger" onclick="removeCartItem(${idx})"><i class="bi bi-trash3"></i></button>
          </td>
        </tr>
      `).join('');
    }
  }
}

function proceedToCheckout() {
  if (cart.length === 0) {
    showToast('Giỏ hàng của bạn đang trống!', 'error');
    return;
  }

  const offcanvasElem = document.getElementById('offcanvasCart');
  if (offcanvasElem) {
    const bsOffcanvas = bootstrap.Offcanvas.getInstance(offcanvasElem);
    if (bsOffcanvas) bsOffcanvas.hide();
  }

  const checkoutModalEl = document.getElementById('checkoutModal');
  if (checkoutModalEl) {
    const checkoutModal = new bootstrap.Modal(checkoutModalEl);
    checkoutModal.show();
  }
}

function openCheckoutModal() {
  proceedToCheckout();
}

function completeOrder() {
  const modalEl = document.getElementById('checkoutModal');
  if (modalEl) {
    const modal = bootstrap.Modal.getInstance(modalEl);
    if (modal) modal.hide();
  }

  const orderId = '#VELORA-' + Math.floor(100000 + Math.random() * 900000);
  
  // Capture itemized products from cart
  const orderItems = cart.map(i => ({
    id: i.id,
    name: i.name,
    price: i.price,
    priceFormatted: formatCurrency(i.price),
    quantity: i.quantity || 1,
    size: i.size || 'M',
    color: i.color || 'Tiêu chuẩn',
    image: i.image || 'logo_crop.png'
  }));

  const grandTotalEl = document.querySelector('.cart-grandtotal') || document.querySelector('.cart-total-val');
  const totalStr = grandTotalEl ? grandTotalEl.textContent.trim() : '0đ';

  // Save order to history with itemized products
  let orders = getOrders();
  const newOrderObj = {
    id: orderId,
    date: new Date().toLocaleDateString('vi-VN'),
    recipient: currentUser.name || 'Đặng Minh Anh',
    phone: currentUser.phone || '0988 123 456',
    email: currentUser.email || 'minhanh.velora@gmail.com',
    address: currentUser.address || '123 Đường Nam Kỳ Khởi Nghĩa, Quận 1, TP. HCM',
    paymentMethod: 'COD (Thanh toán khi nhận hàng)',
    itemsSummary: cart.map(i => i.name).slice(0, 2).join(' + ') + (cart.length > 2 ? ` và ${cart.length - 2} món khác` : ''),
    items: orderItems,
    total: totalStr,
    status: 'Đang chuẩn bị hàng'
  };
  orders.unshift(newOrderObj);
  localStorage.setItem('velora_orders', JSON.stringify(orders));

  // Sync order to Supabase Cloud in background
  try {
    const sb = getSupabaseClient();
    if (sb) {
      sb.from('orders').upsert([{
        id: newOrderObj.id,
        date: newOrderObj.date,
        status: newOrderObj.status,
        total: newOrderObj.total,
        recipient: newOrderObj.recipient,
        phone: newOrderObj.phone,
        address: newOrderObj.address,
        payment_method: newOrderObj.paymentMethod,
        items: newOrderObj.items,
        items_summary: newOrderObj.itemsSummary
      }]).then(({ error }) => {
        if (error) console.warn('Supabase checkout order sync error:', error);
        else console.log('Supabase: Order synced successfully to cloud');
      }).catch(err => console.warn(err));
    }
  } catch (e) {
    console.warn('Supabase order sync catch:', e);
  }

  cart = [];
  appliedCoupon = null;
  localStorage.removeItem('velora_coupon');
  saveCart();

  showToast(`Đặt hàng thành công! Mã đơn: <b>${orderId}</b>`, 'success');
  setTimeout(() => {
    window.location.href = 'account.html';
  }, 1200);
}

// ==========================================================================
// 7. QUICK VIEW MODAL ENGINE
// ==========================================================================
let currentQuickViewProduct = null;
let selectedSize = 'M';
let selectedColor = null;

function openQuickView(productId) {
  const p = PRODUCTS.find(item => item.id === productId);
  if (!p) return;

  currentQuickViewProduct = p;
  selectedSize = 'M';
  selectedColor = p.colors ? p.colors[0] : '#111';

  const content = document.getElementById('quickViewContent');
  if (content) {
    content.innerHTML = `
      <div class="row g-0">
        <div class="col-md-6 position-relative bg-light">
          <img src="${p.image}" id="qvImage" class="img-fluid w-100 h-100 object-fit-cover" style="min-height: 420px; max-height: 520px;" alt="${p.name}">
          <span id="qvBadge" class="position-absolute top-0 start-0 m-3 product-badge ${p.badgeType}">${p.badge}</span>
        </div>
        <div class="col-md-6 p-4 p-lg-5 d-flex flex-column justify-content-between bg-white position-relative">
          <button type="button" class="btn-close position-absolute top-0 end-0 m-3" data-bs-dismiss="modal" aria-label="Close"></button>
          <div>
            <div class="small text-muted fw-bold mb-1 letter-spacing-1" id="qvCategory">${p.category.toUpperCase()}</div>
            <h3 class="fw-bold font-serif mb-2" id="qvTitle">${p.name}</h3>
            <div class="d-flex align-items-center gap-2 mb-3">
              <span class="fs-4 fw-bold text-danger" id="qvPrice">${formatCurrency(p.price)}</span>
              ${p.oldPrice ? `<span class="text-muted text-decoration-line-through small" id="qvOldPrice">${formatCurrency(p.oldPrice)}</span>` : ''}
              <div class="vr mx-2"></div>
              <span class="small text-warning" id="qvRating"><i class="bi bi-star-fill"></i> ${p.rating.toFixed(1)} (${p.reviews} đánh giá)</span>
            </div>
            <p class="small text-muted mb-4">
              Chất liệu cao cấp thoáng khí, form dáng hiện đại chuẩn thời thượng. Đường may tỉ mỉ tinh tế phù hợp cho cả đi làm lẫn dạo phố.
            </p>
            <div class="mb-3">
              <label class="form-label small fw-bold">Màu sắc:</label>
              <div id="qvColors" class="d-flex gap-2">
                ${(p.colors || ['#111']).map((c, i) => `
                  <button type="button" class="btn p-0 rounded-circle border ${i === 0 ? 'border-dark border-2' : ''}" 
                    style="width:26px; height:26px; background-color:${c};"
                    onclick="selectQuickViewColor('${c}', this)">
                  </button>
                `).join('')}
              </div>
            </div>
            <div class="mb-4">
              <div class="d-flex justify-content-between align-items-center mb-1">
                <label class="form-label small fw-bold m-0">Kích cỡ:</label>
                <a href="javascript:void(0)" onclick="sendAiMessage('Tư vấn chọn size chuẩn')" class="small text-danger text-decoration-none">Hướng dẫn chọn size</a>
              </div>
              <div id="qvSizeOptions" class="d-flex gap-2">
                <button type="button" class="btn btn-sm btn-outline-dark px-3 rounded-pill" data-size="S" onclick="selectQuickViewSize('S', this)">S</button>
                <button type="button" class="btn btn-sm btn-dark px-3 rounded-pill" data-size="M" onclick="selectQuickViewSize('M', this)">M</button>
                <button type="button" class="btn btn-sm btn-outline-dark px-3 rounded-pill" data-size="L" onclick="selectQuickViewSize('L', this)">L</button>
                <button type="button" class="btn btn-sm btn-outline-dark px-3 rounded-pill" data-size="XL" onclick="selectQuickViewSize('XL', this)">XL</button>
              </div>
            </div>
          </div>
          <div>
            <div class="d-flex align-items-center gap-3">
              <div class="input-group" style="width: 120px;">
                <button class="btn btn-outline-secondary" type="button" onclick="adjustQuickViewQty(-1)">-</button>
                <input type="text" id="qvQuantity" class="form-control text-center" value="1" readonly>
                <button class="btn btn-outline-secondary" type="button" onclick="adjustQuickViewQty(1)">+</button>
              </div>
              <button class="btn btn-dark flex-grow-1 rounded-pill fw-bold py-2" onclick="addQuickViewToCart()">
                <i class="bi bi-bag-plus me-2"></i> Thêm vào giỏ
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  const modal = new bootstrap.Modal(document.getElementById('quickViewModal'));
  modal.show();
}

function adjustQuickViewQty(delta) {
  const input = document.getElementById('qvQuantity');
  if (!input) return;
  let val = parseInt(input.value) || 1;
  val = Math.max(1, Math.min(20, val + delta));
  input.value = val;
}

function selectQuickViewColor(color, btn) {
  selectedColor = color;
  document.querySelectorAll('#qvColors button').forEach(b => b.classList.remove('border-dark', 'border-2'));
  btn.classList.add('border-dark', 'border-2');
}

function selectQuickViewSize(size, btn) {
  selectedSize = size;
  document.querySelectorAll('#qvSizeOptions .btn').forEach(b => {
    b.classList.remove('btn-dark');
    b.classList.add('btn-outline-dark');
  });
  btn.classList.remove('btn-outline-dark');
  btn.classList.add('btn-dark');
}

function addQuickViewToCart() {
  if (!currentQuickViewProduct) return;
  const qty = parseInt(document.getElementById('qvQuantity').value) || 1;
  addToCart(currentQuickViewProduct.id, qty, selectedSize, selectedColor);

  const modalEl = document.getElementById('quickViewModal');
  const modal = bootstrap.Modal.getInstance(modalEl);
  if (modal) modal.hide();
}

// ==========================================================================
// 8. WISHLIST TOGGLE & COUNTER (REFACTORED: NO DUPLICATE BACKDROP)
// ==========================================================================
function updateWishlistBadge() {
  document.querySelectorAll('.wishlist-badge-count, .wishlist-count-badge').forEach(el => {
    el.textContent = wishlist.length;
  });
}

function updateWishlistButtonStates() {
  document.querySelectorAll('.btn-wishlist').forEach(btn => {
    const onclick = btn.getAttribute('onclick') || '';
    const m = onclick.match(/toggleWishlist\(['"]([^'"]+)['"]/);
    if (m) {
      const pid = m[1];
      if (wishlist.includes(pid)) {
        btn.classList.add('active');
        btn.innerHTML = '<i class="bi bi-heart-fill"></i>';
      } else {
        btn.classList.remove('active');
        btn.innerHTML = '<i class="bi bi-heart"></i>';
      }
    }
  });
}

function toggleWishlist(productId, btnElement) {
  const index = wishlist.indexOf(productId);
  if (index > -1) {
    wishlist.splice(index, 1);
    if (btnElement) {
      btnElement.classList.remove('active');
      btnElement.innerHTML = '<i class="bi bi-heart"></i>';
    }
    showToast('Đã xóa khỏi danh sách yêu thích', 'info');
  } else {
    wishlist.push(productId);
    if (btnElement) {
      btnElement.classList.add('active');
      btnElement.innerHTML = '<i class="bi bi-heart-fill"></i>';
    }
    showToast('Đã thêm vào danh sách yêu thích! ❤️');
  }

  localStorage.setItem('velora_wishlist', JSON.stringify(wishlist));
  updateWishlistBadge();
  updateWishlistButtonStates();
}

function renderWishlistModalContent() {
  const body = document.getElementById('wishlistModalBody');
  if (!body) return;

  if (wishlist.length === 0) {
    body.innerHTML = `
      <div class="text-center py-5 text-muted">
        <i class="bi bi-heart fs-1 opacity-50 d-block mb-3"></i>
        <h5 class="fw-bold">Danh sách yêu thích trống</h5>
        <p class="small text-muted mb-0">Bấm vào biểu tượng trái tim ở các sản phẩm để lưu lại xem sau bạn nhé!</p>
      </div>
    `;
  } else {
    const items = PRODUCTS.filter(p => wishlist.includes(p.id));
    body.innerHTML = `
      <div class="d-flex flex-column gap-3">
        ${items.map(p => `
          <div class="d-flex align-items-center justify-content-between p-2 border rounded-3 bg-light">
            <div class="d-flex align-items-center gap-3">
              <img src="${p.image}" alt="${p.name}" style="width: 50px; height: 65px; object-fit: cover; border-radius: 6px;">
              <div>
                <h6 class="m-0 small fw-bold">${p.name}</h6>
                <div class="text-danger small fw-bold">${formatCurrency(p.price)}</div>
              </div>
            </div>
            <div class="d-flex gap-2">
              <button class="btn btn-sm btn-dark rounded-pill px-3" onclick="addToCart('${p.id}');">
                <i class="bi bi-bag-plus"></i> Mua
              </button>
              <button class="btn btn-sm btn-outline-danger rounded-circle" onclick="removeFromWishlistInsideModal('${p.id}')" title="Xóa">
                <i class="bi bi-x-lg"></i>
              </button>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  }
}

function removeFromWishlistInsideModal(productId) {
  const index = wishlist.indexOf(productId);
  if (index > -1) {
    wishlist.splice(index, 1);
    localStorage.setItem('velora_wishlist', JSON.stringify(wishlist));
    updateWishlistBadge();
    updateWishlistButtonStates();
    showToast('Đã xóa khỏi danh sách yêu thích', 'info');
  }
  // Re-render modal content in place without creating or re-showing modal instance
  renderWishlistModalContent();
}

function showWishlistModal() {
  const modalEl = document.getElementById('wishlistModal');
  if (!modalEl) return;
  renderWishlistModalContent();

  const modalInstance = bootstrap.Modal.getOrCreateInstance(modalEl);
  modalInstance.show();
}

// ==========================================================================
// 9. LIVE SEARCH & FILTERING
// ==========================================================================
function initLiveSearch() {
  const searchInput = document.getElementById('navSearchInput');
  const dropdown = document.getElementById('searchResultsDropdown');
  if (!searchInput || !dropdown) return;

  searchInput.addEventListener('input', (e) => {
    const q = e.target.value.trim().toLowerCase();
    if (!q) {
      dropdown.classList.remove('active');
      dropdown.innerHTML = '';
      return;
    }

    const matches = PRODUCTS.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.badge.toLowerCase().includes(q)
    ).slice(0, 5);

    if (matches.length === 0) {
      dropdown.innerHTML = `<div class="p-3 text-center text-muted small">Không tìm thấy sản phẩm phù hợp với "${q}"</div>`;
    } else {
      dropdown.innerHTML = matches.map(p => `
        <a href="javascript:void(0)" class="search-result-item" onclick="openQuickView('${p.id}')">
          <img src="${p.image}" class="search-result-thumb" alt="${p.name}">
          <div>
            <div class="fw-semibold small">${p.name}</div>
            <div class="text-danger small fw-bold">${formatCurrency(p.price)}</div>
          </div>
        </a>
      `).join('');
    }
    dropdown.classList.add('active');
  });

  document.addEventListener('click', (e) => {
    if (!searchInput.contains(e.target) && !dropdown.contains(e.target)) {
      dropdown.classList.remove('active');
    }
  });
}

function performSearch(customQuery = null) {
  const input = document.getElementById('navSearchInput');
  const q = (customQuery || (input ? input.value : '')).trim().toLowerCase();
  if (!q) {
    showToast('Vui lòng nhập từ khóa tìm kiếm', 'info');
    return;
  }

  const matches = PRODUCTS.filter(p =>
    p.name.toLowerCase().includes(q) ||
    p.category.toLowerCase().includes(q) ||
    p.badge.toLowerCase().includes(q)
  );

  if (matches.length > 0) {
    openQuickView(matches[0].id);
    showToast(`Tìm thấy ${matches.length} sản phẩm phù hợp với "${q}". Đang hiển thị sản phẩm nổi bật!`);
  } else {
    showToast(`Không tìm thấy sản phẩm nào khớp với "${q}". Vui lòng thử từ khóa khác!`, 'error');
  }
}

function filterProducts(viewName, filterCategory, btnElement) {
  if (btnElement) {
    const parent = btnElement.closest('.filter-pills-wrap');
    if (parent) {
      parent.querySelectorAll('.filter-pill').forEach(b => b.classList.remove('active'));
      btnElement.classList.add('active');
    }
  }

  let filtered = [];
  if (viewName === 'new-arrivals') {
    filtered = filterCategory === 'all' 
      ? PRODUCTS.filter(p => p.tags && p.tags.includes('new-arrivals'))
      : PRODUCTS.filter(p => p.tags && p.tags.includes('new-arrivals') && p.subCategory === filterCategory);
    populateGrid('gridNewArrivals', filtered, 'add-to-cart');
  } else if (viewName === 'men') {
    if (filterCategory === 'all') {
      filtered = PRODUCTS.filter(p => p.category === 'men' || (p.category === 'accessories' && p.tags && p.tags.includes('men')));
    } else if (filterCategory === 'ao') {
      filtered = PRODUCTS.filter(p => p.category === 'men' && (
        p.subCategory === 'ao' || 
        p.subCategory === 'blazer' || 
        (p.name && p.name.toLowerCase().includes('áo')) ||
        (p.name && p.name.toLowerCase().includes('blazer')) ||
        (p.name && p.name.toLowerCase().includes('sơ mi')) ||
        (p.name && p.name.toLowerCase().includes('nỉ')) ||
        (p.name && p.name.toLowerCase().includes('polo')) ||
        (p.name && p.name.toLowerCase().includes('phông'))
      ));
    } else if (filterCategory === 'ao-phong') {
      filtered = PRODUCTS.filter(p => p.category === 'men' && (
        p.subCategory === 'ao' && (p.name.toLowerCase().includes('phông') || p.name.toLowerCase().includes('polo') || p.name.toLowerCase().includes('thun') || (p.tags && p.tags.includes('ao-phong')))
      ));
    } else if (filterCategory === 'ao-so-mi') {
      filtered = PRODUCTS.filter(p => p.category === 'men' && (
        p.name.toLowerCase().includes('sơ mi') || p.name.toLowerCase().includes('oxford') || p.name.toLowerCase().includes('blazer') || (p.tags && p.tags.includes('ao-so-mi'))
      ));
    } else if (filterCategory === 'ao-ni') {
      filtered = PRODUCTS.filter(p => p.category === 'men' && (
        p.name.toLowerCase().includes('nỉ') || p.name.toLowerCase().includes('sweater') || p.name.toLowerCase().includes('hoodie') || p.name.toLowerCase().includes('khoác') || p.name.toLowerCase().includes('bomber')
      ));
    } else if (filterCategory === 'quan') {
      filtered = PRODUCTS.filter(p => p.category === 'men' && (p.subCategory === 'quan' || (p.name && p.name.toLowerCase().includes('quần'))));
    } else if (filterCategory === 'quan-short') {
      filtered = PRODUCTS.filter(p => p.category === 'men' && (p.name.toLowerCase().includes('short') || (p.tags && p.tags.includes('quan-short'))));
    } else if (filterCategory === 'quan-dai') {
      filtered = PRODUCTS.filter(p => p.category === 'men' && (p.subCategory === 'quan' || p.name.toLowerCase().includes('quần')) && !p.name.toLowerCase().includes('short'));
    } else if (filterCategory === 'accessories') {
      filtered = PRODUCTS.filter(p => p.category === 'accessories' && ((p.tags && p.tags.includes('men')) || (p.name && (p.name.toLowerCase().includes('nam') || p.name.toLowerCase().includes('dây lưng') || p.name.toLowerCase().includes('kính') || p.name.toLowerCase().includes('giày')))));
    } else {
      filtered = PRODUCTS.filter(p => p.category === 'men' && p.subCategory === filterCategory);
    }
    populateGrid('gridMenAll', filtered, 'add-to-cart');
  } else if (viewName === 'women') {
    filtered = filterCategory === 'all'
      ? PRODUCTS.filter(p => p.category === 'women')
      : PRODUCTS.filter(p => p.category === 'women' && p.subCategory === filterCategory);
    populateGrid('gridWomen', filtered, 'add-to-cart-pink');
  } else if (viewName === 'accessories') {
    filtered = filterCategory === 'all'
      ? PRODUCTS.filter(p => p.category === 'accessories')
      : PRODUCTS.filter(p => p.category === 'accessories' && p.subCategory === filterCategory);
    populateGrid('gridAccessories', filtered, 'view-product');
  } else if (viewName === 'flash-sale') {
    filtered = filterCategory === 'all'
      ? PRODUCTS.filter(p => p.tags && p.tags.includes('flash-sale'))
      : PRODUCTS.filter(p => p.tags && p.tags.includes('flash-sale') && p.category === filterCategory);
    populateGrid('gridFlashSale', filtered, 'add-to-cart');
  }
}

function sortProducts(viewName, sortType, gridId) {
  let list = [];
  if (viewName === 'new-arrivals') {
    list = [...PRODUCTS.filter(p => p.tags && p.tags.includes('new-arrivals'))];
  } else if (viewName === 'women') {
    list = [...PRODUCTS.filter(p => p.category === 'women')];
  } else if (viewName === 'men') {
    list = [...PRODUCTS.filter(p => p.category === 'men')];
  } else if (viewName === 'accessories') {
    list = [...PRODUCTS.filter(p => p.category === 'accessories')];
  } else if (viewName === 'flash-sale') {
    list = [...PRODUCTS.filter(p => (p.tags && p.tags.includes('flash-sale')) || p.oldPrice)];
  } else {
    list = [...PRODUCTS];
  }

  if (sortType === 'price-asc') {
    list.sort((a, b) => a.price - b.price);
  } else if (sortType === 'price-desc') {
    list.sort((a, b) => b.price - a.price);
  } else if (sortType === 'bestseller') {
    list.sort((a, b) => (b.sold || 0) - (a.sold || 0));
  } else if (sortType === 'rating') {
    list.sort((a, b) => (b.rating || 0) - (a.rating || 0));
  }

  const btnType = viewName === 'women' ? 'add-to-cart-pink' : (viewName === 'accessories' ? 'view-product' : 'add-to-cart');
  populateGrid(gridId, list, btnType);
  showToast('Đã sắp xếp danh sách theo tiêu chí đã chọn');
}

// ==========================================================================
// ==========================================================================
// 10. USER ACCOUNT, AUTHENTICATION, ITEMIZED ORDERS & ADMIN CONTROL SUITE 👑
// ==========================================================================

// --- ADMIN SECURITY & CLOUD-SYNCHRONIZED PASSWORD MANAGEMENT ---
function getAdminPassword() {
  return localStorage.getItem('velora_admin_password') || 'admin123';
}

function verifyAdminPassword(pwd) {
  if (!pwd) return false;
  return pwd.trim() === getAdminPassword();
}

async function verifyAdminPasswordAsync(pwd) {
  if (!pwd) return false;
  const inputTrimmed = pwd.trim();
  if (inputTrimmed === getAdminPassword()) return true;

  // Real-time check against Supabase Cloud (dan12) for multi-device sync
  const client = getSupabaseClient();
  if (client) {
    try {
      const { data, error } = await client.from('users').select('password').eq('id', 'usr-admin').maybeSingle();
      if (!error && data && data.password) {
        localStorage.setItem('velora_admin_password', data.password);
        if (inputTrimmed === data.password) return true;
      }
    } catch (e) {
      console.warn('Supabase password verification check:', e);
    }
  }
  return false;
}

function openAdminLoginModal() {
  const modalEl = document.getElementById('adminLoginModal');
  if (!modalEl) return;
  const pwdInput = document.getElementById('modalAdminPassword');
  if (pwdInput) pwdInput.value = '';
  const errEl = document.getElementById('adminLoginError');
  if (errEl) errEl.classList.add('d-none');

  const modal = bootstrap.Modal.getOrCreateInstance(modalEl);
  modal.show();
  setTimeout(() => {
    if (pwdInput) pwdInput.focus();
  }, 400);
}

function togglePasswordVisibility(inputId, btnEl) {
  const input = document.getElementById(inputId);
  if (!input) return;
  if (input.type === 'password') {
    input.type = 'text';
    if (btnEl) btnEl.innerHTML = '<i class="bi bi-eye-slash"></i>';
  } else {
    input.type = 'password';
    if (btnEl) btnEl.innerHTML = '<i class="bi bi-eye"></i>';
  }
}

async function submitAdminPasswordLogin(e) {
  if (e) e.preventDefault();
  const pwdInput = document.getElementById('modalAdminPassword');
  const errEl = document.getElementById('adminLoginError');
  const pwd = pwdInput ? pwdInput.value : '';

  const isValid = await verifyAdminPasswordAsync(pwd);
  if (isValid) {
    const modalEl = document.getElementById('adminLoginModal');
    if (modalEl) {
      const modal = bootstrap.Modal.getInstance(modalEl);
      if (modal) modal.hide();
    }
    loginAs('admin', true);
    if (errEl) errEl.classList.add('d-none');
    showToast('Đăng nhập Quản Trị Viên thành công! Chào mừng trở lại.', 'success');
  } else {
    if (errEl) {
      errEl.classList.remove('d-none');
      errEl.innerHTML = '<i class="bi bi-exclamation-triangle-fill me-1"></i> Mật khẩu Quản Trị Viên không đúng. Vui lòng thử lại! (Mặc định: <code>admin123</code>)';
    }
    if (pwdInput) {
      pwdInput.classList.add('is-invalid');
      setTimeout(() => pwdInput.classList.remove('is-invalid'), 1200);
      pwdInput.focus();
    }
  }
}

function handleRoleSwitchClick() {
  if (currentUser && currentUser.role === 'admin') {
    loginAs('customer');
  } else {
    openAdminLoginModal();
  }
}

async function adminSubmitChangePassword(e) {
  if (e) e.preventDefault();
  const oldPwd = document.getElementById('admOldPassword')?.value || '';
  const newPwd = document.getElementById('admNewPassword')?.value || '';
  const confirmPwd = document.getElementById('admConfirmPassword')?.value || '';

  const isOldValid = await verifyAdminPasswordAsync(oldPwd);
  if (!isOldValid) {
    showToast('Mật khẩu hiện tại không chính xác! Vui lòng kiểm tra lại.', 'error');
    return;
  }

  if (newPwd.length < 6) {
    showToast('Mật khẩu mới phải có ít nhất 6 ký tự!', 'warning');
    return;
  }

  if (newPwd !== confirmPwd) {
    showToast('Xác nhận mật khẩu mới không trùng khớp!', 'warning');
    return;
  }

  localStorage.setItem('velora_admin_password', newPwd);

  // Sync password directly to Supabase Cloud
  const client = getSupabaseClient();
  if (client) {
    try {
      const { error } = await client.from('users').update({ password: newPwd }).eq('id', 'usr-admin');
      if (error) {
        console.warn('Lỗi lưu mật khẩu Supabase:', error);
      } else {
        console.log('Đã cập nhật mật khẩu Admin lên Supabase Cloud thành công!');
      }
    } catch (err) {
      console.warn('Lỗi mạng cập nhật mật khẩu Supabase:', err);
    }
  }

  document.getElementById('adminChangePwdForm')?.reset();
  showToast('Đổi mật khẩu Admin thành công! Mật khẩu mới đã được đồng bộ lên Cloud và mọi thiết bị.', 'success');
}

async function customerSubmitChangePassword(e) {
  if (e) e.preventDefault();
  const oldPwd = document.getElementById('custOldPassword')?.value || '';
  const newPwd = document.getElementById('custNewPassword')?.value || '';
  const confirmPwd = document.getElementById('custConfirmPassword')?.value || '';

  const currentPwd = currentUser.password || '123456';
  if (oldPwd !== currentPwd) {
    showToast('Mật khẩu hiện tại không chính xác! Vui lòng thử lại.', 'error');
    return;
  }

  if (newPwd.length < 6) {
    showToast('Mật khẩu mới phải có ít nhất 6 ký tự!', 'warning');
    return;
  }

  if (newPwd !== confirmPwd) {
    showToast('Xác nhận mật khẩu mới không trùng khớp!', 'warning');
    return;
  }

  currentUser.password = newPwd;
  localStorage.setItem('velora_user', JSON.stringify(currentUser));

  const custProf = getCustomerProfile();
  custProf.password = newPwd;
  localStorage.setItem('velora_customer_profile', JSON.stringify(custProf));

  const users = getRegisteredUsers();
  const idx = users.findIndex(u => u.email && u.email.toLowerCase() === currentUser.email?.toLowerCase());
  if (idx > -1) {
    users[idx].password = newPwd;
    localStorage.setItem('velora_registered_users', JSON.stringify(users));
  }

  const client = getSupabaseClient();
  if (client && currentUser.email) {
    try {
      const { error } = await client.from('users').update({ password: newPwd }).eq('email', currentUser.email);
      if (error) console.warn('Supabase customer password sync error:', error);
      else console.log('Đã cập nhật mật khẩu khách hàng lên Supabase Cloud thành công!');
    } catch (err) {
      console.warn('Lỗi mạng đổi mật khẩu khách:', err);
    }
  }

  document.getElementById('custChangePwdForm')?.reset();
  showToast('Đổi mật khẩu thành công! Mật khẩu mới đã được đồng bộ lên đám mây và mọi thiết bị.', 'success');
}

// --- VOUCHERS DATABASE & MANAGEMENT ---
function getAccountVouchers() {
  return getVouchers();
}

function saveAccountVouchers(v) {
  localStorage.setItem('velora_vouchers', JSON.stringify(v));
}

function getVouchers() {
  const stored = localStorage.getItem('velora_vouchers');
  if (stored !== null) {
    try {
      const parsed = JSON.parse(stored);
      if (Array.isArray(parsed) && parsed.length > 0) return parsed;
    } catch (e) {
      console.warn('Error reading velora_vouchers', e);
    }
  }
  const defaultVouchers = [
    {
      code: 'VELORA10',
      type: 'percent',
      value: 10,
      title: 'Giảm 10% Toàn Bộ Đơn Hàng',
      description: 'Giảm 10% trên tổng giá trị đơn hàng, không giới hạn mức tối đa.',
      minSpend: 0,
      expiry: '31/12/2026',
      badge: 'GIẢM 10%',
      color: 'danger'
    },
    {
      code: 'FREESHIP',
      type: 'shipping',
      value: 30000,
      title: 'Miễn Phí Giao Hàng Toàn Quốc',
      description: 'Miễn phí 100% phí vận chuyển tiêu chuẩn cho mọi đơn hàng.',
      minSpend: 0,
      expiry: '31/12/2026',
      badge: 'MIỄN PHÍ SHIP',
      color: 'success'
    },
    {
      code: 'VIP50K',
      type: 'fixed',
      value: 50000,
      title: 'Giảm 50.000đ Trực Tiếp',
      description: 'Giảm ngay 50.000đ trực tiếp vào đơn hàng thời trang từ 300.000đ.',
      minSpend: 300000,
      expiry: '30/11/2026',
      badge: 'GIẢM 50.000đ',
      color: 'primary'
    },
    {
      code: 'LUXURY100K',
      type: 'fixed',
      value: 100000,
      title: 'Đặc Quyền VIP 100.000đ',
      description: 'Giảm ngay 100.000đ áp dụng cho đơn hàng thượng lưu từ 1.000.000đ.',
      minSpend: 1000000,
      expiry: '31/12/2026',
      badge: 'VIP 100K',
      color: 'warning'
    }
  ];
  localStorage.setItem('velora_vouchers', JSON.stringify(defaultVouchers));
  return defaultVouchers;
}

function renderAccountVouchers() {
  const container = document.getElementById('accountVouchersList');
  if (!container) return;
  const vouchers = getVouchers();

  if (vouchers.length === 0) {
    container.innerHTML = `
      <div class="col-12 text-center py-4 text-muted">
        <i class="bi bi-ticket-perforated fs-1 opacity-50 d-block mb-2"></i>
        <h6>Chưa có mã ưu đãi nào trong kho</h6>
      </div>
    `;
    return;
  }

  container.innerHTML = vouchers.map(v => `
    <div class="col-md-6">
      <div class="voucher-card-item h-100 d-flex flex-column justify-content-between">
        <div>
          <div class="d-flex justify-content-between align-items-center mb-2">
            <span class="badge bg-${v.color || 'danger'}">${v.badge || 'ƯU ĐÃI'}</span>
            <span class="small text-muted" style="font-size: 0.75rem;">HSD: <b>${v.expiry || 'Vô thời hạn'}</b></span>
          </div>
          <h5 class="fw-bold font-monospace text-dark m-0">${v.code}</h5>
          <div class="fw-semibold small text-danger mt-1 mb-1">${v.title}</div>
          <p class="small text-muted m-0" style="font-size: 0.8rem;">${v.description}</p>
          ${v.minSpend ? `<div class="small text-muted mt-2" style="font-size: 0.74rem;"><i class="bi bi-info-circle me-1"></i>Đơn tối thiểu: <b>${formatCurrency(v.minSpend)}</b></div>` : ''}
        </div>
        <div class="d-flex gap-2 mt-3 pt-2 border-top">
          <button type="button" class="btn btn-sm btn-outline-dark rounded-pill flex-grow-1" onclick="copyVoucherCode('${v.code}')">
            <i class="bi bi-clipboard me-1"></i> Sao chép
          </button>
          <button type="button" class="btn btn-sm btn-dark rounded-pill px-3" onclick="applyVoucherAndGoToCart('${v.code}')">
            Dùng ngay <i class="bi bi-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

function adminRenderVouchersTable() {
  const tbody = document.getElementById('adminVouchersBody');
  if (!tbody) return;
  const vouchers = getVouchers();

  if (vouchers.length === 0) {
    tbody.innerHTML = `<tr><td colspan="7" class="text-center py-4 text-muted">Chưa có voucher nào trong hệ thống</td></tr>`;
    return;
  }

  tbody.innerHTML = vouchers.map(v => `
    <tr>
      <td>
        <span class="badge bg-dark font-monospace fs-6 px-3 py-1">${v.code}</span>
      </td>
      <td>
        <span class="badge bg-light text-dark border">
          ${v.type === 'percent' ? 'Giảm %' : (v.type === 'shipping' ? 'Freeship' : 'Tiền mặt')}
        </span>
      </td>
      <td class="fw-bold text-danger">
        ${v.type === 'percent' ? (v.value + '%') : (v.type === 'shipping' ? 'Free 100%' : formatCurrency(v.value))}
      </td>
      <td class="small text-muted">${v.minSpend ? formatCurrency(v.minSpend) : '0đ (Mọi đơn)'}</td>
      <td class="small">${v.expiry || '31/12/2026'}</td>
      <td class="small text-muted" style="max-width: 220px;">${v.description}</td>
      <td class="text-center">
        <button class="btn btn-sm btn-outline-danger rounded-pill px-2" onclick="adminDeleteVoucher('${v.code}')" title="Xóa voucher này">
          <i class="bi bi-trash"></i>
        </button>
      </td>
    </tr>
  `).join('');
}

function adminOpenAddVoucher() {
  const modalEl = document.getElementById('adminVoucherModal');
  if (!modalEl) return;
  document.getElementById('adminVoucherForm')?.reset();
  document.getElementById('admVoucherCode').value = 'VELORA' + Math.floor(15 + Math.random() * 85);
  document.getElementById('admVoucherType').value = 'percent';
  adminUpdateVoucherTypeLabel();
  document.getElementById('admVoucherValue').value = '15';
  document.getElementById('admVoucherMinSpend').value = '0';
  document.getElementById('admVoucherExpiry').value = '31/12/2026';
  document.getElementById('admVoucherTitle').value = 'Giảm 15% Toàn Bộ Đơn Hàng';
  document.getElementById('admVoucherDesc').value = 'Áp dụng cho mọi khách hàng đặt hàng online tại Velora.';

  const modal = bootstrap.Modal.getOrCreateInstance(modalEl);
  modal.show();
}

function adminUpdateVoucherTypeLabel() {
  const type = document.getElementById('admVoucherType')?.value;
  const label = document.getElementById('admVoucherValueLabel');
  const valInput = document.getElementById('admVoucherValue');
  if (!label || !valInput) return;

  if (type === 'percent') {
    label.innerHTML = 'Mức giảm (%) <span class="text-danger">*</span>';
    valInput.placeholder = 'vd: 15';
    valInput.disabled = false;
  } else if (type === 'fixed') {
    label.innerHTML = 'Mức giảm tiền mặt (VNĐ) <span class="text-danger">*</span>';
    valInput.placeholder = 'vd: 100000';
    valInput.disabled = false;
  } else {
    label.innerHTML = 'Mức giảm tiền ship (VNĐ)';
    valInput.value = '30000';
    valInput.disabled = true;
  }
}

function adminSaveVoucher(event) {
  if (event) event.preventDefault();
  const code = document.getElementById('admVoucherCode')?.value.trim().toUpperCase() || '';
  const type = document.getElementById('admVoucherType')?.value || 'percent';
  let value = parseFloat(document.getElementById('admVoucherValue')?.value) || 0;
  if (type === 'shipping') value = 30000;
  const minSpend = parseInt(document.getElementById('admVoucherMinSpend')?.value, 10) || 0;
  const expiry = document.getElementById('admVoucherExpiry')?.value.trim() || '31/12/2026';
  const color = document.getElementById('admVoucherColor')?.value || 'danger';
  const title = document.getElementById('admVoucherTitle')?.value.trim() || `Giảm ${value}${type === 'percent' ? '%' : 'đ'}`;
  const description = document.getElementById('admVoucherDesc')?.value.trim() || title;

  if (!code) {
    showToast('Vui lòng nhập mã Voucher!', 'warning');
    return;
  }

  let vouchers = getVouchers();
  const existingIdx = vouchers.findIndex(v => v.code.toUpperCase() === code);

  const voucherObj = {
    code,
    type,
    value,
    minSpend,
    expiry,
    color,
    title,
    description,
    badge: type === 'percent' ? `GIẢM ${value}%` : (type === 'shipping' ? 'FREESHIP' : `GIẢM ${formatCurrency(value)}`)
  };

  if (existingIdx > -1) {
    vouchers[existingIdx] = voucherObj;
    showToast(`Đã cập nhật mã voucher <b>${code}</b>!`, 'success');
  } else {
    vouchers.unshift(voucherObj);
    showToast(`Đã thêm mới mã voucher <b>${code}</b> thành công!`, 'success');
  }

  localStorage.setItem('velora_vouchers', JSON.stringify(vouchers));

  try {
    const sb = getSupabaseClient();
    if (sb) {
      sb.from('vouchers').upsert([{
        code: voucherObj.code,
        discount: voucherObj.badge,
        description: voucherObj.description,
        min_order: `Đơn từ ${formatCurrency(voucherObj.minSpend)}`,
        badge: voucherObj.type === 'shipping' ? 'Hot Deal' : 'Ưu đãi',
        expires: voucherObj.expiry
      }]).then(() => {}).catch(err => console.warn(err));
    }
  } catch (e) {}

  const modalEl = document.getElementById('adminVoucherModal');
  if (modalEl) {
    const modal = bootstrap.Modal.getInstance(modalEl);
    if (modal) modal.hide();
  }

  adminRenderVouchersTable();
  renderAccountVouchers();
  adminUpdateStats();
}

function adminDeleteVoucher(code) {
  if (!confirm(`Bạn có chắc chắn muốn xóa mã voucher "${code}" không?`)) {
    return;
  }
  let vouchers = getVouchers();
  const idx = vouchers.findIndex(v => v.code.toUpperCase() === code.toUpperCase());
  if (idx > -1) {
    vouchers.splice(idx, 1);
    localStorage.setItem('velora_vouchers', JSON.stringify(vouchers));
    try {
      const sb = getSupabaseClient();
      if (sb) {
        sb.from('vouchers').delete().eq('code', code).then(() => {}).catch(err => console.warn(err));
      }
    } catch (e) {}
    adminRenderVouchersTable();
    renderAccountVouchers();
    adminUpdateStats();
    showToast(`Đã xóa voucher <b>${code}</b>!`, 'info');
  }
}

function applyVoucherAndGoToCart(code) {
  applyCouponCodeViaValue(code);
  setTimeout(() => {
    window.location.href = 'cart.html';
  }, 400);
}

// --- ORDERS DATABASE & ITEMIZED ACCURATE MANAGEMENT ---
function getOrders() {
  const stored = localStorage.getItem('velora_orders');
  if (stored !== null) {
    try {
      const parsed = JSON.parse(stored);
      if (Array.isArray(parsed)) return parsed;
    } catch (e) {
      console.warn('Error reading velora_orders', e);
    }
  }
  const defaultOrders = [
    {
      id: '#VELORA-849201',
      date: '14/11/2026',
      recipient: 'Đặng Minh Anh',
      phone: '0988 123 456',
      email: 'minhanh.velora@gmail.com',
      address: '123 Đường Nam Kỳ Khởi Nghĩa, Quận 1, TP. HCM',
      paymentMethod: 'COD (Thanh toán khi nhận hàng)',
      total: '1.488.000đ',
      status: 'Đang giao hàng',
      itemsSummary: 'Áo Blazer Nam Form Rộng Classic + Chân Váy Xếp Ly Dáng Dài Midi',
      items: [
        {
          id: 'men-1',
          name: 'Áo Blazer Nam Form Rộng Classic Khuy Sừng',
          price: 1049000,
          priceFormatted: '1.049.000đ',
          quantity: 1,
          size: 'L',
          color: 'Xanh Navy',
          image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&auto=format&fit=crop&q=80'
        },
        {
          id: 'wm-4',
          name: 'Chân Váy Xếp Ly Dáng Dài Midi Phong Cách',
          price: 439000,
          priceFormatted: '439.000đ',
          quantity: 1,
          size: 'M',
          color: 'Beige',
          image: 'chan_vay_xep_ly_midi.jpg'
        }
      ]
    },
    {
      id: '#VELORA-712903',
      date: '28/10/2026',
      recipient: 'Đặng Minh Anh',
      phone: '0988 123 456',
      email: 'minhanh.velora@gmail.com',
      address: '123 Đường Nam Kỳ Khởi Nghĩa, Quận 1, TP. HCM',
      paymentMethod: 'Chuyển khoản QR Techcombank',
      total: '1.189.000đ',
      status: 'Đã giao thành công',
      itemsSummary: 'Set Blazer + Quần Âu Nữ Công Sở Thanh Lịch',
      items: [
        {
          id: 'wm-1',
          name: 'Set Blazer + Quần Âu Nữ Công Sở Thanh Lịch',
          price: 1189000,
          priceFormatted: '1.189.000đ',
          quantity: 1,
          size: 'M',
          color: 'Đen Tuyển',
          image: 'https://images.unsplash.com/photo-1548624149-f9b1859aa9d0?w=600&auto=format&fit=crop&q=80'
        }
      ]
    },
    {
      id: '#VELORA-554109',
      date: '14/09/2026',
      recipient: 'Đặng Minh Anh',
      phone: '0988 123 456',
      email: 'minhanh.velora@gmail.com',
      address: '123 Đường Nam Kỳ Khởi Nghĩa, Quận 1, TP. HCM',
      paymentMethod: 'COD (Thanh toán khi nhận hàng)',
      total: '459.000đ',
      status: 'Đã giao thành công',
      itemsSummary: 'Túi Mini Quai Ngọc Trai Đính Đá Pha Lê',
      items: [
        {
          id: 'acc-1',
          name: 'Túi Mini Quai Ngọc Trai Đính Đá Pha Lê',
          price: 459000,
          priceFormatted: '459.000đ',
          quantity: 1,
          size: 'Freesize',
          color: 'Trắng Ánh Kim',
          image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&auto=format&fit=crop&q=80'
        }
      ]
    }
  ];
  localStorage.setItem('velora_orders', JSON.stringify(defaultOrders));
  return defaultOrders;
}

function renderAccountOrders() {
  const ordersBody = document.getElementById('accOrdersBody');
  if (!ordersBody) return;
  const orders = getOrders();

  const badgeEl = document.getElementById('profOrdersBadge');
  if (badgeEl) badgeEl.textContent = orders.length;

  if (orders.length === 0) {
    ordersBody.innerHTML = `
      <tr>
        <td colspan="6" class="text-center py-5 text-muted">
          <i class="bi bi-box-seam fs-1 opacity-50 d-block mb-3"></i>
          <h6 class="fw-bold">Bạn chưa có đơn hàng nào</h6>
          <p class="small text-muted mb-3">Hãy dạo quanh cửa hàng và chọn những bộ trang phục ưng ý nhé!</p>
          <a href="index.html" class="btn btn-sm btn-dark rounded-pill px-4">
            <i class="bi bi-bag-plus me-1"></i> Mua sắm ngay
          </a>
        </td>
      </tr>
    `;
    return;
  }

  ordersBody.innerHTML = orders.map(o => {
    const isShipping = (o.status || '').includes('Đang');
    const isCancelled = (o.status || '').includes('hủy');
    const badgeClass = isShipping ? 'shipping' : (isCancelled ? 'danger' : 'success');

    const itemsHtml = (o.items && o.items.length > 0) ? o.items.map(it => `
      <div class="d-flex align-items-center gap-2 p-1 bg-light rounded-3 border mb-1">
        <img src="${it.image || 'logo_crop.png'}" class="adm-order-thumb" alt="${it.name}">
        <div class="flex-grow-1 overflow-hidden">
          <div class="fw-bold small text-truncate" style="max-width: 220px;" title="${it.name}">${it.name}</div>
          <div class="small text-muted" style="font-size: 0.72rem;">
            <span class="badge bg-white text-dark border">Size: ${it.size || 'M'}</span>
            <span class="badge bg-white text-dark border">${it.color || 'Tiêu chuẩn'}</span>
            <span class="text-danger fw-semibold ms-1">SL: ${it.quantity || 1}</span>
          </div>
        </div>
      </div>
    `).join('') : `<span class="small">${o.itemsSummary || 'Sản phẩm Velora'}</span>`;

    return `
      <tr>
        <td><b>${o.id}</b></td>
        <td>${o.date}</td>
        <td style="min-width: 230px;">${itemsHtml}</td>
        <td class="text-danger fw-bold">${o.total}</td>
        <td>
          <span class="order-badge-${badgeClass}">
            ${o.status}
          </span>
        </td>
        <td class="text-center">
          <div class="d-flex justify-content-center gap-1">
            <button class="btn btn-sm btn-outline-dark rounded-pill px-3" onclick="showOrderDetail('${o.id}')" title="Xem chi tiết đơn hàng">
              <i class="bi bi-eye"></i> Chi tiết
            </button>
            <button class="btn btn-sm btn-outline-danger rounded-pill px-2" onclick="deleteUserOrder('${o.id}')" title="Xóa đơn hàng này">
              <i class="bi bi-trash"></i>
            </button>
          </div>
        </td>
      </tr>
    `;
  }).join('');
}

// --- CUSTOMER DELIVERY ADDRESS BOOK ---
function getCustomerAddresses() {
  const stored = localStorage.getItem('velora_customer_addresses');
  if (stored !== null) {
    try {
      const parsed = JSON.parse(stored);
      if (Array.isArray(parsed) && parsed.length > 0) return parsed;
    } catch (e) {}
  }
  const defaultAddrs = [
    {
      id: 'ADDR-1',
      name: (currentUser && currentUser.name) || 'Đặng Minh Anh',
      phone: (currentUser && currentUser.phone) || '0988 123 456',
      city: 'TP. Hồ Chí Minh',
      district: 'Quận 1',
      address: '123 Đường Nam Kỳ Khởi Nghĩa, Phường Bến Nghé, Quận 1, TP. Hồ Chí Minh',
      label: 'Nhà riêng',
      isDefault: true
    },
    {
      id: 'ADDR-2',
      name: (currentUser && currentUser.name) || 'Đặng Minh Anh',
      phone: (currentUser && currentUser.phone) || '0988 123 456',
      city: 'TP. Hồ Chí Minh',
      district: 'Quận 1',
      address: 'Tầng 12, Tòa Nhà Bitexco Financial Tower, Số 2 Hải Triều, Q.1, TP. HCM',
      label: 'Văn phòng làm việc',
      isDefault: false
    }
  ];
  localStorage.setItem('velora_customer_addresses', JSON.stringify(defaultAddrs));
  return defaultAddrs;
}

function saveCustomerAddresses(addrs) {
  localStorage.setItem('velora_customer_addresses', JSON.stringify(addrs));
}

function renderAccountAddresses() {
  const container = document.getElementById('accountAddressesList');
  if (!container) return;
  const addrs = getCustomerAddresses();

  if (addrs.length === 0) {
    container.innerHTML = `
      <div class="text-center py-5 border rounded-4 bg-light">
        <i class="bi bi-geo-alt fs-1 text-muted"></i>
        <h6 class="fw-bold mt-2">Chưa có địa chỉ nào trong sổ</h6>
        <p class="small text-muted mb-3">Thêm địa chỉ giao hàng để tiện đặt hàng nhanh chóng</p>
        <button type="button" class="btn btn-sm btn-dark rounded-pill px-4" onclick="openAddressModal()">+ Thêm địa chỉ đầu tiên</button>
      </div>
    `;
    return;
  }

  container.innerHTML = addrs.map(a => `
    <div class="card border rounded-3 p-3 shadow-sm ${a.isDefault ? 'border-dark bg-white' : 'bg-light'}">
      <div class="d-flex justify-content-between align-items-center mb-1 flex-wrap gap-2">
        <div class="d-flex align-items-center gap-2">
          <span class="badge ${a.isDefault ? 'bg-dark text-white' : 'bg-secondary text-white'}">${a.label || 'Địa chỉ'}</span>
          <b class="fs-6">${a.name}</b>
          ${a.isDefault ? '<span class="badge bg-warning text-dark fw-bold">Mặc định</span>' : ''}
        </div>
        <div class="d-flex align-items-center gap-2">
          ${!a.isDefault ? `<button type="button" class="btn btn-xs btn-outline-dark rounded-pill px-2 py-0" style="font-size: 0.72rem;" onclick="setDefaultAddress('${a.id}')">Đặt mặc định</button>` : ''}
          <button type="button" class="btn btn-xs btn-outline-secondary rounded-pill px-2 py-0" style="font-size: 0.72rem;" onclick="openAddressModal('${a.id}')"><i class="bi bi-pencil me-1"></i>Sửa</button>
          <button type="button" class="btn btn-xs btn-outline-danger rounded-pill px-2 py-0" style="font-size: 0.72rem;" onclick="deleteAddress('${a.id}')"><i class="bi bi-trash me-1"></i>Xóa</button>
        </div>
      </div>
      <div class="small text-muted mb-1"><i class="bi bi-telephone me-1"></i> ${a.phone}</div>
      <div class="small text-muted"><i class="bi bi-geo-alt me-1"></i> ${a.address}</div>
    </div>
  `).join('');
}

function openAddressModal(addrId = '') {
  const modalEl = document.getElementById('customerAddressModal');
  if (!modalEl) return;
  const title = document.getElementById('customerAddressModalTitle');

  if (addrId) {
    const addrs = getCustomerAddresses();
    const a = addrs.find(x => x.id === addrId);
    if (a) {
      if (title) title.innerHTML = '<i class="bi bi-pencil-square text-warning me-2"></i>Chỉnh Sửa Địa Chỉ Nhận Hàng';
      document.getElementById('addrIdInput').value = a.id;
      document.getElementById('addrNameInput').value = a.name;
      document.getElementById('addrPhoneInput').value = a.phone;
      document.getElementById('addrCityInput').value = a.city || 'TP. Hồ Chí Minh';
      document.getElementById('addrDistrictInput').value = a.district || '';
      document.getElementById('addrDetailInput').value = a.address;
      document.getElementById('addrLabelInput').value = a.label || 'Nhà riêng';
      document.getElementById('addrDefaultCheck').checked = !!a.isDefault;
    }
  } else {
    if (title) title.innerHTML = '<i class="bi bi-geo-alt-fill text-warning me-2"></i>Thêm Địa Chỉ Nhận Hàng Mới';
    document.getElementById('addrIdInput').value = '';
    document.getElementById('addrNameInput').value = currentUser.name || '';
    document.getElementById('addrPhoneInput').value = currentUser.phone || '';
    document.getElementById('addrCityInput').value = 'TP. Hồ Chí Minh';
    document.getElementById('addrDistrictInput').value = 'Quận 1';
    document.getElementById('addrDetailInput').value = '';
    document.getElementById('addrLabelInput').value = 'Nhà riêng';
    document.getElementById('addrDefaultCheck').checked = false;
  }

  const modal = bootstrap.Modal.getOrCreateInstance(modalEl);
  modal.show();
}

function saveAddressForm(e) {
  if (e) e.preventDefault();
  const id = document.getElementById('addrIdInput').value;
  const name = document.getElementById('addrNameInput').value.trim();
  const phone = document.getElementById('addrPhoneInput').value.trim();
  const city = document.getElementById('addrCityInput').value.trim();
  const district = document.getElementById('addrDistrictInput').value.trim();
  const detail = document.getElementById('addrDetailInput').value.trim();
  const label = document.getElementById('addrLabelInput').value;
  const isDefault = document.getElementById('addrDefaultCheck').checked;

  if (!name || !phone || !detail) {
    showToast('Vui lòng điền đầy đủ các thông tin địa chỉ bắt buộc!', 'warning');
    return;
  }

  let addrs = getCustomerAddresses();

  if (isDefault) {
    addrs.forEach(a => a.isDefault = false);
  }

  const fullAddr = `${detail}, ${district}, ${city}`;

  if (id) {
    const idx = addrs.findIndex(a => a.id === id);
    if (idx > -1) {
      addrs[idx] = { ...addrs[idx], name, phone, city, district, address: fullAddr, label, isDefault };
    }
  } else {
    const newAddr = {
      id: 'ADDR-' + Date.now(),
      name,
      phone,
      city,
      district,
      address: fullAddr,
      label,
      isDefault: isDefault || addrs.length === 0
    };
    addrs.unshift(newAddr);
  }

  saveCustomerAddresses(addrs);

  const modalEl = document.getElementById('customerAddressModal');
  if (modalEl) {
    const modal = bootstrap.Modal.getInstance(modalEl);
    if (modal) modal.hide();
  }

  renderAccountAddresses();
  showToast('Đã lưu địa chỉ nhận hàng thành công!', 'success');
}

function deleteAddress(id) {
  if (!confirm('Bạn có chắc chắn muốn xóa địa chỉ nhận hàng này?')) return;
  let addrs = getCustomerAddresses();
  addrs = addrs.filter(a => a.id !== id);
  if (addrs.length > 0 && !addrs.some(a => a.isDefault)) {
    addrs[0].isDefault = true;
  }
  saveCustomerAddresses(addrs);
  renderAccountAddresses();
  showToast('Đã xóa địa chỉ thành công!', 'info');
}

function setDefaultAddress(id) {
  let addrs = getCustomerAddresses();
  addrs.forEach(a => a.isDefault = (a.id === id));
  saveCustomerAddresses(addrs);
  renderAccountAddresses();
  showToast('Đã đặt làm địa chỉ giao hàng mặc định!', 'success');
}

// --- LOYALTY POINTS REWARDS EXCHANGE ---
function exchangePointsForVoucher(pointsCost, voucherCode, discountVal) {
  if (!currentUser || !currentUser.isLoggedIn) {
    showToast('Vui lòng đăng nhập để thực hiện đổi điểm thưởng!', 'warning');
    return;
  }
  const currentPoints = Number(currentUser.points || 0);
  if (currentPoints < pointsCost) {
    showToast(`Số điểm của bạn (${currentPoints} pts) chưa đủ để đổi phần quà này (Cần ${pointsCost} pts)!`, 'warning');
    return;
  }

  // Deduct points
  currentUser.points = currentPoints - pointsCost;
  localStorage.setItem('velora_user', JSON.stringify(currentUser));
  if (currentUser.role === 'customer') {
    const cust = getCustomerProfile();
    cust.points = currentUser.points;
    saveCustomerProfile(cust);
  }

  // Add voucher to account vouchers
  const vouchers = getVouchers();
  const existing = vouchers.find(v => v.code === voucherCode);
  if (existing) {
    showToast(`Bạn đã sở hữu Voucher <b>${voucherCode}</b> trong ví rồi!`, 'info');
  } else {
    vouchers.unshift({
      code: voucherCode,
      discount: discountVal,
      minOrder: 0,
      title: `Ưu Đãi Đổi Điểm Thưởng ${pointsCost} pts`,
      desc: `Giảm trực tiếp ${discountVal} cho mọi đơn hàng của hội viên VIP`,
      expiry: '31/12/2026',
      badge: 'ĐÃ ĐỔI ĐIỂM'
    });
    localStorage.setItem('velora_vouchers', JSON.stringify(vouchers));
  }

  updateAccountUI();
  renderAccountVouchers();
  showToast(`🎉 Đổi thành công! Đã trừ <b>${pointsCost} điểm</b> và thêm Voucher <b>${voucherCode}</b> vào kho của bạn.`, 'success');
}

// --- CUSTOMER WISHLIST TAB IN ACCOUNT ---
function getWishlist() {
  if (typeof wishlist !== 'undefined' && Array.isArray(wishlist)) return wishlist;
  try {
    const stored = localStorage.getItem('velora_wishlist');
    if (stored) return JSON.parse(stored);
  } catch (e) {}
  return ['na-1', 'wm-1', 'acc-1'];
}

function removeFromWishlist(productId) {
  let list = getWishlist();
  const idx = list.indexOf(productId);
  if (idx > -1) {
    list.splice(idx, 1);
    if (typeof wishlist !== 'undefined') wishlist = list;
    localStorage.setItem('velora_wishlist', JSON.stringify(list));
    updateWishlistBadge();
    showToast('Đã xóa sản phẩm khỏi danh sách yêu thích!', 'info');
  }
}

function renderAccountWishlist() {
  const container = document.getElementById('accountWishlistGrid');
  const badge = document.getElementById('profWishlistBadge');
  const wishlist = getWishlist();

  if (badge) badge.textContent = wishlist.length;
  if (!container) return;

  if (wishlist.length === 0) {
    container.innerHTML = `
      <div class="col-12 text-center py-5 border rounded-4 bg-light">
        <i class="bi bi-heart fs-1 text-muted"></i>
        <h6 class="fw-bold mt-2">Danh sách yêu thích trống</h6>
        <p class="small text-muted mb-3">Hãy dạo quanh cửa hàng và lưu các món đồ bạn yêu thích nhé</p>
        <a href="women.html" class="btn btn-sm btn-dark rounded-pill px-4">Khám phá sản phẩm ngay</a>
      </div>
    `;
    return;
  }

  const items = PRODUCTS.filter(p => wishlist.includes(p.id));
  container.innerHTML = items.map(p => `
    <div class="col-lg-3 col-md-4 col-6">
      <div class="card h-100 border rounded-4 overflow-hidden shadow-sm product-card">
        <div class="position-relative">
          <img src="${p.image}" class="card-img-top" style="height: 220px; object-fit: cover;" alt="${p.name}">
          <button type="button" class="btn btn-danger btn-sm rounded-circle position-absolute top-0 end-0 m-2 p-1 d-flex align-items-center justify-content-center shadow" style="width: 28px; height: 28px;" onclick="removeFromWishlist('${p.id}'); renderAccountWishlist();" title="Bỏ yêu thích">
            <i class="bi bi-trash-fill text-white" style="font-size: 0.75rem;"></i>
          </button>
        </div>
        <div class="p-3 d-flex flex-column justify-content-between flex-grow-1">
          <div>
            <span class="badge bg-light text-muted border mb-1" style="font-size: 0.65rem;">${p.category.toUpperCase()}</span>
            <h6 class="fw-bold font-serif fs-6 mb-1 text-truncate" title="${p.name}">${p.name}</h6>
            <div class="text-danger fw-bold fs-6 mb-2">${formatCurrency(p.price)}</div>
          </div>
          <button type="button" class="btn btn-sm btn-dark rounded-pill w-100" onclick="addToCart('${p.id}')">
            <i class="bi bi-bag-plus me-1"></i> Thêm giỏ hàng
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

function adminRenderOrdersTable() {
  const tbody = document.getElementById('adminOrdersBody');
  if (!tbody) return;
  const orders = getOrders();

  if (orders.length === 0) {
    tbody.innerHTML = `<tr><td colspan="6" class="text-center py-4 text-muted">Chưa có đơn hàng nào trong hệ thống</td></tr>`;
    return;
  }

  tbody.innerHTML = orders.map(o => {
    const itemsHtml = (o.items && o.items.length > 0) ? o.items.map(it => `
      <div class="adm-order-item-card">
        <img src="${it.image || 'logo_crop.png'}" class="adm-order-thumb" alt="${it.name}">
        <div class="flex-grow-1 overflow-hidden">
          <div class="fw-bold small text-truncate" style="max-width: 180px;" title="${it.name}">${it.name}</div>
          <div class="d-flex align-items-center gap-1 small text-muted" style="font-size: 0.72rem;">
            <span class="badge bg-white text-dark border">Size: ${it.size || 'M'}</span>
            <span class="badge bg-white text-dark border">${it.color || 'Tiêu chuẩn'}</span>
            <span class="badge bg-light text-primary">x${it.quantity || 1}</span>
          </div>
        </div>
        <div class="text-end small fw-bold text-danger flex-shrink-0">
          ${it.priceFormatted || formatCurrency(it.price || 0)}
        </div>
      </div>
    `).join('') : `<div class="small text-muted">${o.itemsSummary || '-'}</div>`;

    return `
      <tr>
        <td>
          <b>${o.id}</b>
          <div class="small text-muted"><i class="bi bi-calendar3 me-1"></i>${o.date}</div>
        </td>
        <td>
          <div class="fw-bold small text-dark">${o.recipient || 'Khách hàng'}</div>
          <div class="text-muted small"><i class="bi bi-telephone me-1"></i>${o.phone || '-'}</div>
          <div class="small text-muted text-truncate" style="max-width: 170px;" title="${o.address || ''}">
            <i class="bi bi-geo-alt me-1"></i>${o.address || '-'}
          </div>
          <span class="badge bg-light text-dark border mt-1" style="font-size: 0.65rem;">${o.paymentMethod || 'COD'}</span>
        </td>
        <td>${itemsHtml}</td>
        <td>
          <div class="text-danger fw-bold fs-6">${o.total}</div>
          <div class="small text-muted" style="font-size: 0.72rem;">
            ${(o.items || []).reduce((s, i) => s + (i.quantity || 1), 0) || 1} sản phẩm
          </div>
        </td>
        <td>
          <select class="form-select form-select-sm" onchange="adminChangeOrderStatus('${o.id}', this.value)">
            <option value="Đang chuẩn bị hàng" ${o.status === 'Đang chuẩn bị hàng' ? 'selected' : ''}>Đang chuẩn bị hàng</option>
            <option value="Đang giao hàng" ${o.status === 'Đang giao hàng' ? 'selected' : ''}>Đang giao hàng</option>
            <option value="Đã giao thành công" ${o.status === 'Đã giao thành công' || o.status === 'Đã giao' ? 'selected' : ''}>Đã giao thành công</option>
            <option value="Đã hủy" ${o.status === 'Đã hủy' ? 'selected' : ''}>Đã hủy</option>
          </select>
        </td>
        <td class="text-center">
          <div class="d-flex justify-content-center gap-1">
            <button class="btn btn-sm btn-outline-dark rounded-pill px-2" onclick="showOrderDetail('${o.id}')" title="Xem chi tiết đơn hàng">
              <i class="bi bi-eye"></i>
            </button>
            <button class="btn btn-sm btn-outline-danger rounded-pill px-2" onclick="deleteUserOrder('${o.id}')" title="Xóa đơn hàng này">
              <i class="bi bi-trash"></i>
            </button>
          </div>
        </td>
      </tr>
    `;
  }).join('');
}

function adminChangeOrderStatus(orderId, newStatus) {
  let orders = getOrders();
  const order = orders.find(o => o.id === orderId);
  if (order) {
    order.status = newStatus;
    localStorage.setItem('velora_orders', JSON.stringify(orders));
    renderAccountOrders();
    adminRenderOrdersTable();
    adminUpdateStats();
    showToast(`Đơn hàng <b>${orderId}</b> đã chuyển trạng thái: <b>${newStatus}</b>`, 'success');

    try {
      const sb = getSupabaseClient();
      if (sb) {
        sb.from('orders').update({ status: newStatus }).eq('id', orderId).then(() => {}).catch(err => console.warn(err));
      }
    } catch (e) {}
  }
}

function deleteUserOrder(orderId, fromModal = false) {
  if (!confirm(`Bạn có chắc chắn muốn xóa đơn hàng "${orderId}" không?`)) {
    return;
  }
  let orders = getOrders();
  const index = orders.findIndex(o => o.id === orderId);
  if (index > -1) {
    orders.splice(index, 1);
    localStorage.setItem('velora_orders', JSON.stringify(orders));

    try {
      const sb = getSupabaseClient();
      if (sb) {
        sb.from('orders').delete().eq('id', orderId).then(() => {}).catch(err => console.warn(err));
      }
    } catch (e) {}

    if (fromModal) {
      const modalEl = document.getElementById('orderDetailModal');
      if (modalEl) {
        const modal = bootstrap.Modal.getInstance(modalEl);
        if (modal) modal.hide();
      }
    }

    renderAccountOrders();
    adminRenderOrdersTable();
    adminUpdateStats();
    showToast(`Đã xóa thành công đơn hàng <b>${orderId}</b>!`, 'info');
  } else {
    showToast(`Không tìm thấy đơn hàng ${orderId}!`, 'warning');
  }
}

function showOrderDetail(orderId) {
  let orders = getOrders();
  let order = orders.find(o => o.id === orderId);
  if (!order) {
    showToast('Không tìm thấy thông tin đơn hàng ' + orderId, 'warning');
    return;
  }

  const content = document.getElementById('orderDetailContent');
  if (content) {
    const isShipping = (order.status || '').includes('Đang');
    const isCancelled = (order.status || '').includes('hủy');
    const badgeClass = isShipping ? 'shipping' : (isCancelled ? 'danger' : 'success');

    const itemsRows = (order.items && order.items.length > 0) ? order.items.map(it => `
      <tr>
        <td style="width: 50px;">
          <img src="${it.image || 'logo_crop.png'}" style="width: 40px; height: 40px; object-fit: cover; border-radius: 6px;">
        </td>
        <td>
          <div class="fw-bold small">${it.name}</div>
          <div class="small text-muted">Phân loại: <span class="badge bg-light text-dark border">Size ${it.size || 'M'}</span> <span class="badge bg-light text-dark border">${it.color || 'Tiêu chuẩn'}</span></div>
        </td>
        <td class="text-center"><b>${it.quantity || 1}</b></td>
        <td class="text-end text-muted small">${it.priceFormatted || formatCurrency(it.price || 0)}</td>
        <td class="text-end fw-bold text-danger">${formatCurrency((it.price || 0) * (it.quantity || 1))}</td>
      </tr>
    `).join('') : `
      <tr>
        <td colspan="5" class="py-2">${order.itemsSummary || 'Sản phẩm thời trang cao cấp Velora'}</td>
      </tr>
    `;

    content.innerHTML = `
      <div class="p-4">
        <div class="d-flex justify-content-between align-items-center pb-3 border-bottom mb-4 flex-wrap gap-2">
          <div>
            <span class="badge bg-dark mb-1">Mã vận đơn điện tử</span>
            <h4 class="fw-bold m-0 font-monospace">${order.id}</h4>
            <div class="small text-muted">Ngày đặt: <b>${order.date || 'Hôm nay'}</b></div>
          </div>
          <span class="order-badge-${badgeClass} fs-6 px-3 py-2 rounded-pill">
            <i class="bi bi-truck me-1"></i> ${order.status || 'Đang giao hàng'}
          </span>
        </div>

        <!-- Progress Timeline -->
        <div class="order-timeline-wrap mb-4 p-3 bg-light rounded-4">
          <h6 class="fw-bold small text-muted text-uppercase mb-3">Lộ trình giao hàng (GHN Express)</h6>
          <div class="d-flex justify-content-between position-relative">
            <div class="text-center" style="width: 25%;">
              <div class="rounded-circle bg-success text-white mx-auto d-flex align-items-center justify-content-center shadow-sm" style="width:36px; height:36px;">
                <i class="bi bi-check-lg"></i>
              </div>
              <div class="small fw-bold mt-2">Đặt hàng</div>
              <div class="text-muted" style="font-size: 0.7rem;">Thành công</div>
            </div>
            <div class="text-center" style="width: 25%;">
              <div class="rounded-circle bg-success text-white mx-auto d-flex align-items-center justify-content-center shadow-sm" style="width:36px; height:36px;">
                <i class="bi bi-check-lg"></i>
              </div>
              <div class="small fw-bold mt-2">Xác nhận</div>
              <div class="text-muted" style="font-size: 0.7rem;">Đã xuất kho</div>
            </div>
            <div class="text-center" style="width: 25%;">
              <div class="rounded-circle ${isCancelled ? 'bg-danger text-white' : ((order.status || '').includes('thành công') ? 'bg-success text-white' : 'bg-warning text-dark')} mx-auto d-flex align-items-center justify-content-center shadow-sm" style="width:36px; height:36px;">
                <i class="bi ${isCancelled ? 'bi-x-lg' : 'bi-truck'}"></i>
              </div>
              <div class="small fw-bold mt-2">Vận chuyển</div>
              <div class="text-muted" style="font-size: 0.7rem;">${order.status}</div>
            </div>
            <div class="text-center" style="width: 25%;">
              <div class="rounded-circle ${(order.status || '').includes('thành công') ? 'bg-success text-white' : 'bg-secondary text-white opacity-50'} mx-auto d-flex align-items-center justify-content-center shadow-sm" style="width:36px; height:36px;">
                <i class="bi bi-box-seam"></i>
              </div>
              <div class="small fw-bold mt-2">Nhận hàng</div>
              <div class="text-muted" style="font-size: 0.7rem;">${(order.status || '').includes('thành công') ? 'Hoàn tất' : 'Chờ giao'}</div>
            </div>
          </div>
        </div>

        <div class="row g-3 mb-3">
          <div class="col-md-6">
            <div class="p-3 border rounded-3 bg-white h-100">
              <div class="small text-muted fw-bold mb-1">NGƯỜI NHẬN HÀNG</div>
              <div class="fw-bold fs-6">${order.recipient || currentUser.name || 'Khách hàng Velora'}</div>
              <div class="small text-muted mt-1"><i class="bi bi-telephone me-1"></i> ${order.phone || currentUser.phone || '0988 123 456'}</div>
              <div class="small text-muted"><i class="bi bi-geo-alt me-1"></i> ${order.address || currentUser.address || '123 Đường Nam Kỳ Khởi Nghĩa, Q.1, TP. HCM'}</div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="p-3 border rounded-3 bg-white h-100">
              <div class="small text-muted fw-bold mb-1">THANH TOÁN & ĐỒNG KIỂM</div>
              <div class="fw-bold text-success"><i class="bi bi-cash-stack me-1"></i> ${order.paymentMethod || 'COD — Thanh toán khi nhận hàng'}</div>
              <div class="small text-muted mt-1">Đồng kiểm: <b>Cho phép mở hộp kiểm tra</b></div>
              <div class="small text-muted">Bảo hành đổi trả: <b>15 ngày miễn phí</b></div>
            </div>
          </div>
        </div>

        <!-- Itemized Products Table -->
        <div class="table-responsive border rounded-3 mb-3">
          <table class="table align-middle m-0">
            <thead class="table-light small">
              <tr>
                <th>Ảnh</th>
                <th>Sản phẩm</th>
                <th class="text-center">Số lượng</th>
                <th class="text-end">Đơn giá</th>
                <th class="text-end">Thành tiền</th>
              </tr>
            </thead>
            <tbody class="small">
              ${itemsRows}
            </tbody>
          </table>
        </div>

        <div class="d-flex justify-content-between align-items-center pt-2 border-top mb-3">
          <span class="fs-6 text-muted">Tổng thanh toán:</span>
          <span class="fs-4 fw-bold text-danger">${order.total || '0đ'}</span>
        </div>

        <!-- Action Footer -->
        <div class="d-flex justify-content-between align-items-center pt-3 border-top flex-wrap gap-2">
          <button type="button" class="btn btn-outline-danger rounded-pill px-3" onclick="deleteUserOrder('${order.id}', true)">
            <i class="bi bi-trash me-1"></i> Xóa đơn hàng này
          </button>
          <div class="d-flex gap-2">
            <button type="button" class="btn btn-outline-dark rounded-pill px-3" onclick="printOrderInvoice('${order.id}')">
              <i class="bi bi-printer me-1"></i> In hóa đơn
            </button>
            <button type="button" class="btn btn-dark rounded-pill px-4" data-bs-dismiss="modal">
              Đóng
            </button>
          </div>
        </div>
      </div>
    `;
    const modalEl = document.getElementById('orderDetailModal');
    if (modalEl) {
      const modal = bootstrap.Modal.getOrCreateInstance(modalEl);
      modal.show();
    }
  }
}

// --- HERO BANNER & IMAGE MANAGEMENT 📸 ---
function getHeroSlides() {
  const stored = localStorage.getItem('velora_hero_slides');
  if (stored !== null) {
    try {
      const parsed = JSON.parse(stored);
      if (Array.isArray(parsed) && parsed.length > 0) return parsed;
    } catch (e) {
      console.warn('Error reading velora_hero_slides', e);
    }
  }
  const defaultSlides = [
    {
      index: 0,
      name: 'Slide 1: Fashion Style (Chính)',
      tag: 'BỘ SƯU TẬP 2026',
      title: 'FASHION STYLE',
      desc: 'Đẳng cấp thời trang định hình phong cách sống thượng lưu. Từng đường may, chất liệu được chắt lọc tinh tế nhất.',
      image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1600&auto=format&fit=crop&q=80',
      btnText: 'Mua ngay',
      btnLink: 'new-arrivals.html'
    },
    {
      index: 1,
      name: 'Slide 2: Urban Elegance',
      tag: 'URBAN ELEGANCE 2026',
      title: 'XU HƯỚNG MỚI',
      desc: 'Sự giao thoa hoàn mỹ giữa nét thanh lịch đương đại và tính ứng dụng linh hoạt cho quý cô & quý ông hiện đại.',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1600&auto=format&fit=crop&q=80',
      btnText: 'Thời trang Nữ',
      btnLink: 'women.html'
    },
    {
      index: 2,
      name: 'Slide 3: Flash Sale Ưu Đãi',
      tag: 'GIỜ VÀNG FLASH SALE',
      title: 'ƯU ĐÃI ĐẾN 50%',
      desc: 'Cơ hội sở hữu những thiết kế may đo cao cấp với mức giá đặc quyền chỉ diễn ra trong tuần lễ ra mắt.',
      image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1600&auto=format&fit=crop&q=80',
      btnText: 'Săn Deal Ngay',
      btnLink: 'flash-sale.html'
    }
  ];
  localStorage.setItem('velora_hero_slides', JSON.stringify(defaultSlides));
  return defaultSlides;
}

function adminRenderHeroBanners() {
  const container = document.getElementById('adminHeroCardsList');
  if (!container) return;
  const slides = getHeroSlides();

  container.innerHTML = slides.map(s => `
    <div class="col-md-4">
      <div class="card border rounded-4 overflow-hidden h-100 shadow-sm">
        <div class="adm-banner-preview" style="background-image: url('${s.image}');">
          <div class="adm-banner-overlay">
            <span class="badge bg-warning text-dark mb-1" style="font-size: 0.65rem; width: fit-content;">${s.tag}</span>
            <h6 class="fw-bold m-0 text-white">${s.title}</h6>
          </div>
        </div>
        <div class="p-3 d-flex flex-column justify-content-between flex-grow-1">
          <p class="small text-muted mb-3" style="font-size: 0.78rem;">${s.desc}</p>
          <button type="button" class="btn btn-sm btn-outline-dark rounded-pill w-100" onclick="adminOpenHeroModal(${s.index})">
            <i class="bi bi-pencil-square me-1"></i> Đổi Ảnh & Sửa Slide
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

// --- ADMIN WEBSITE UI & MEDIA CMS (SLIDERS, BANNERS, LOOKBOOK) ---
function applyHeroSlidesToHome() {
  const slides = getHeroSlides();
  const carouselInner = document.querySelector('#heroFashionCarousel .carousel-inner');
  if (!carouselInner) return;
  const items = carouselInner.querySelectorAll('.hero-slide-item');
  items.forEach((item, idx) => {
    const s = slides[idx];
    if (!s) return;
    const bgImg = item.querySelector('.hero-slide-bg');
    if (bgImg && s.image) bgImg.src = s.image;
    const tag = item.querySelector('.hero-tagline');
    if (tag && s.tag) tag.textContent = s.tag;
    const title = item.querySelector('.hero-title');
    if (title && s.title) title.textContent = s.title;
    const desc = item.querySelector('.hero-desc');
    if (desc && s.desc) desc.textContent = s.desc;
    const btnGroup = item.querySelector('.hero-btn-group');
    if (btnGroup) {
      const btn1 = btnGroup.querySelector('a:first-child');
      if (btn1) {
        if (s.btnText) btn1.textContent = s.btnText;
        if (s.btnLink) btn1.href = s.btnLink;
      }
    }
  });
}

function getCategoryBanners() {
  const stored = localStorage.getItem('velora_category_banners');
  if (stored !== null) {
    try {
      const parsed = JSON.parse(stored);
      if (Array.isArray(parsed) && parsed.length > 0) return parsed;
    } catch (e) {}
  }
  return [
    {
      id: 'cat-men',
      tag: 'BỘ SƯU TẬP NAM',
      title: 'Thời Trang Nam',
      desc: 'Áo nỉ, polo, quần âu & blazer lịch lãm',
      image: 'https://images.unsplash.com/photo-1516257984-b1b4d707412e?w=600&auto=format&fit=crop&q=80',
      link: 'men.html'
    },
    {
      id: 'cat-women',
      tag: 'BỘ SƯU TẬP NỮ',
      title: 'Thời Trang Nữ',
      desc: 'Đầm dạ hội, áo blouse & váy dạ thanh lịch',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=80',
      link: 'women.html'
    },
    {
      id: 'cat-acc',
      tag: 'CHI TIẾT NHỎ PHONG CÁCH LỚN',
      title: 'Phụ Kiện Cao Cấp',
      desc: 'Túi xách da, trang sức ngọc trai & kính mát',
      image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&auto=format&fit=crop&q=80',
      link: 'accessories.html'
    }
  ];
}

function saveCategoryBanners(banners) {
  localStorage.setItem('velora_category_banners', JSON.stringify(banners));
}

function adminRenderCategoryBanners() {
  const container = document.getElementById('adminCategoryBannersList');
  if (!container) return;
  const banners = getCategoryBanners();

  container.innerHTML = banners.map(b => `
    <div class="col-md-4">
      <div class="card border rounded-4 overflow-hidden h-100 shadow-sm">
        <div class="adm-banner-preview" style="background-image: url('${b.image}'); height: 160px; background-size: cover; background-position: center; position: relative;">
          <div class="p-2 position-absolute bottom-0 start-0 end-0 bg-dark bg-opacity-75 text-white">
            <span class="badge bg-warning text-dark mb-1" style="font-size: 0.65rem;">${b.tag}</span>
            <h6 class="fw-bold m-0 text-white">${b.title}</h6>
          </div>
        </div>
        <div class="p-3 d-flex flex-column justify-content-between flex-grow-1">
          <p class="small text-muted mb-2" style="font-size: 0.78rem;">${b.desc}</p>
          <div class="small text-muted mb-3"><i class="bi bi-link-45deg me-1"></i>Link: <code>${b.link}</code></div>
          <button type="button" class="btn btn-sm btn-outline-dark rounded-pill w-100" onclick="adminOpenCategoryBannerModal('${b.id}')">
            <i class="bi bi-pencil-square me-1"></i> Đổi Ảnh & Sửa Card
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

function adminOpenCategoryBannerModal(bannerId) {
  const modalEl = document.getElementById('adminCategoryBannerModal');
  if (!modalEl) return;
  const banners = getCategoryBanners();
  const b = banners.find(x => x.id === bannerId) || banners[0];

  document.getElementById('admCatBannerId').value = b.id;
  document.getElementById('admCatBannerTag').value = b.tag;
  document.getElementById('admCatBannerTitle').value = b.title;
  document.getElementById('admCatBannerDesc').value = b.desc;
  document.getElementById('admCatBannerImage').value = b.image;
  document.getElementById('admCatBannerLink').value = b.link;
  document.getElementById('admCatBannerPreview').src = b.image;

  const modal = bootstrap.Modal.getOrCreateInstance(modalEl);
  modal.show();
}

function adminSaveCategoryBanner(e) {
  if (e) e.preventDefault();
  const id = document.getElementById('admCatBannerId').value;
  const tag = document.getElementById('admCatBannerTag').value.trim();
  const title = document.getElementById('admCatBannerTitle').value.trim();
  const desc = document.getElementById('admCatBannerDesc').value.trim();
  const image = document.getElementById('admCatBannerImage').value.trim();
  const link = document.getElementById('admCatBannerLink').value.trim();

  let banners = getCategoryBanners();
  const idx = banners.findIndex(b => b.id === id);
  if (idx > -1) {
    banners[idx] = { ...banners[idx], tag, title, desc, image, link };
  }
  saveCategoryBanners(banners);

  const modalEl = document.getElementById('adminCategoryBannerModal');
  if (modalEl) {
    const modal = bootstrap.Modal.getInstance(modalEl);
    if (modal) modal.hide();
  }

  adminRenderCategoryBanners();
  applyCategoryBannersToHome();
  showToast(`Đã lưu card ngành hàng <b>${title}</b> thành công!`, 'success');
}

function applyCategoryBannersToHome() {
  const banners = getCategoryBanners();
  const cards = document.querySelectorAll('.category-quick-card');
  if (!cards.length) return;
  cards.forEach((card, idx) => {
    const b = banners[idx];
    if (!b) return;
    card.href = b.link || '#';
    const img = card.querySelector('.category-quick-img');
    if (img && b.image) img.src = b.image;
    const tag = card.querySelector('.category-quick-tag');
    if (tag && b.tag) tag.textContent = b.tag;
    const title = card.querySelector('.category-quick-title');
    if (title && b.title) title.textContent = b.title;
    const desc = card.querySelector('.category-quick-desc');
    if (desc && b.desc) desc.textContent = b.desc;
  });
}

// --- VELORA LOOKBOOK STUDIO ---
function getLookbookMedia() {
  const stored = localStorage.getItem('velora_lookbook_media');
  if (stored !== null) {
    try {
      const parsed = JSON.parse(stored);
      if (Array.isArray(parsed) && parsed.length > 0) return parsed;
    } catch (e) {}
  }
  return [
    {
      id: 'lb-home-1',
      tag: '#STREET_CHIC',
      title: 'Phố Thị Rực Rỡ',
      desc: 'Năng động, cá tính và bắt trọn mọi ánh nhìn.',
      price: '1.248.000đ / set',
      image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&auto=format&fit=crop&q=85',
      hotspotTitle: 'Set Áo Nỉ & Quần Jogger • 649.000đ'
    },
    {
      id: 'lb-home-2',
      tag: '#VINTAGE_MOOD',
      title: 'Lãng Tử Cổ Điển',
      desc: 'Vẻ lãng mạn phong trần kết hợp mũ fedora.',
      price: '898.000đ / set',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&auto=format&fit=crop&q=85',
      hotspotTitle: 'Áo Phông Basic • 219.000đ'
    },
    {
      id: 'lb-home-3',
      tag: '#CONTEMPORARY_ART',
      title: 'Nghệ Thuật Đương Đại',
      desc: 'Họa tiết monochrome tương phản táo bạo.',
      price: '1.789.000đ / set',
      image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&auto=format&fit=crop&q=85',
      hotspotTitle: 'Đầm Xòe Nghệ Thuật • 990.000đ'
    },
    {
      id: 'lb-home-4',
      tag: '#GENTLEMAN_BESPOKE',
      title: 'Quý Ông Lịch Lãm',
      desc: 'Bộ suit may đo cao cấp chuẩn quý tộc hoàng gia.',
      price: '1.990.000đ / set',
      image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&auto=format&fit=crop&q=85',
      hotspotTitle: 'Áo Blazer Classic • 689.000đ'
    }
  ];
}

function saveLookbookMedia(items) {
  localStorage.setItem('velora_lookbook_media', JSON.stringify(items));
}

function adminRenderLookbookMedia() {
  const container = document.getElementById('adminLookbookMediaList');
  if (!container) return;
  const items = getLookbookMedia();

  container.innerHTML = items.map(it => `
    <div class="col-md-3 col-6">
      <div class="card border rounded-4 overflow-hidden h-100 shadow-sm">
        <div class="adm-banner-preview" style="background-image: url('${it.image}'); height: 180px; background-size: cover; background-position: center; position: relative;">
          <div class="p-2 position-absolute bottom-0 start-0 end-0 bg-dark bg-opacity-75 text-white">
            <span class="badge bg-danger mb-1" style="font-size: 0.65rem;">${it.tag}</span>
            <div class="fw-bold small text-truncate text-white">${it.title}</div>
            <div class="text-warning fw-bold" style="font-size: 0.72rem;">${it.price}</div>
          </div>
        </div>
        <div class="p-2 text-center">
          <button type="button" class="btn btn-xs btn-outline-dark rounded-pill w-100 py-1" onclick="adminOpenLookbookModal('${it.id}')">
            <i class="bi bi-pencil me-1"></i> Đổi Ảnh & Sửa
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

function adminOpenLookbookModal(lbId) {
  const modalEl = document.getElementById('adminLookbookModal');
  if (!modalEl) return;
  const items = getLookbookMedia();
  const it = items.find(x => x.id === lbId) || items[0];

  document.getElementById('admLookbookId').value = it.id;
  document.getElementById('admLookbookTag').value = it.tag;
  document.getElementById('admLookbookTitle').value = it.title;
  document.getElementById('admLookbookDesc').value = it.desc;
  document.getElementById('admLookbookPrice').value = it.price;
  document.getElementById('admLookbookImage').value = it.image;
  document.getElementById('admLookbookHotspot').value = it.hotspotTitle;
  document.getElementById('admLookbookPreview').src = it.image;

  const modal = bootstrap.Modal.getOrCreateInstance(modalEl);
  modal.show();
}

function adminSaveLookbookModal(e) {
  if (e) e.preventDefault();
  const id = document.getElementById('admLookbookId').value;
  const tag = document.getElementById('admLookbookTag').value.trim();
  const title = document.getElementById('admLookbookTitle').value.trim();
  const desc = document.getElementById('admLookbookDesc').value.trim();
  const price = document.getElementById('admLookbookPrice').value.trim();
  const image = document.getElementById('admLookbookImage').value.trim();
  const hotspotTitle = document.getElementById('admLookbookHotspot').value.trim();

  let items = getLookbookMedia();
  const idx = items.findIndex(x => x.id === id);
  if (idx > -1) {
    items[idx] = { ...items[idx], tag, title, desc, price, image, hotspotTitle };
  }
  saveLookbookMedia(items);

  const modalEl = document.getElementById('adminLookbookModal');
  if (modalEl) {
    const modal = bootstrap.Modal.getInstance(modalEl);
    if (modal) modal.hide();
  }

  adminRenderLookbookMedia();
  applyLookbookMediaToHome();
  showToast(`Đã lưu Lookbook <b>${title}</b> thành công!`, 'success');
}

function applyLookbookMediaToHome() {
  const items = getLookbookMedia();
  const cards = document.querySelectorAll('#homeLookbook .lookbook-card');
  if (!cards.length) return;
  cards.forEach((card, idx) => {
    const it = items[idx];
    if (!it) return;
    const img = card.querySelector('.lookbook-img');
    if (img && it.image) img.src = it.image;
    const tag = card.querySelector('.lookbook-tag');
    if (tag && it.tag) tag.textContent = it.tag;
    const title = card.querySelector('.lookbook-title');
    if (title && it.title) title.textContent = it.title;
    const desc = card.querySelector('.lookbook-desc');
    if (desc && it.desc) desc.textContent = it.desc;
    const price = card.querySelector('.lookbook-price-badge');
    if (price && it.price) price.textContent = it.price;
    const tooltip = card.querySelector('.hotspot-tooltip');
    if (tooltip && it.hotspotTitle) tooltip.innerHTML = `<i class="bi bi-tag-fill text-warning me-1"></i> ${it.hotspotTitle}`;
  });
}

function applyStoreConfigToUI() {
  const config = getStoreConfig();
  document.querySelectorAll('.nav-hotline-num').forEach(el => el.textContent = config.hotline);
  document.querySelectorAll('.footer-hotline').forEach(el => el.textContent = config.hotline);
  const topText = document.getElementById('topAnnouncementText');
  if (topText && config.announcement) {
    topText.innerHTML = config.announcement;
  }
}

function adminResetDefaultUI() {
  if (!confirm('Bạn có chắc muốn khôi phục toàn bộ ảnh giao diện (Hero slides, Card ngành hàng, Lookbook) về ảnh ban đầu?')) return;
  localStorage.removeItem('velora_hero_slides');
  localStorage.removeItem('velora_category_banners');
  localStorage.removeItem('velora_lookbook_media');
  localStorage.removeItem('velora_store_config');

  adminRenderHeroBanners();
  adminRenderCategoryBanners();
  adminRenderLookbookMedia();
  applyHeroSlidesToHome();
  applyCategoryBannersToHome();
  applyLookbookMediaToHome();
  applyStoreConfigToUI();
  showToast('Đã khôi phục toàn bộ giao diện và hình ảnh website về mặc định!', 'success');
}

function adminOpenHeroModal(slideIndex) {
  const modalEl = document.getElementById('adminHeroModal');
  if (!modalEl) return;
  const slides = getHeroSlides();
  const slide = slides.find(s => s.index == slideIndex) || slides[0];

  document.getElementById('admHeroSlideSelect').value = slide.index;
  document.getElementById('admHeroSlideIndex').value = slide.index;
  document.getElementById('admHeroTag').value = slide.tag;
  document.getElementById('admHeroTitle').value = slide.title;
  document.getElementById('admHeroDesc').value = slide.desc;
  document.getElementById('admHeroImage').value = slide.image;
  adminPreviewHeroImage();

  const modal = bootstrap.Modal.getOrCreateInstance(modalEl);
  modal.show();
}

function adminLoadHeroSlideToForm(slideIndex) {
  const slides = getHeroSlides();
  const slide = slides.find(s => s.index == slideIndex) || slides[0];
  document.getElementById('admHeroSlideIndex').value = slide.index;
  document.getElementById('admHeroTag').value = slide.tag;
  document.getElementById('admHeroTitle').value = slide.title;
  document.getElementById('admHeroDesc').value = slide.desc;
  document.getElementById('admHeroImage').value = slide.image;
  adminPreviewHeroImage();
}

function adminPreviewHeroImage() {
  const input = document.getElementById('admHeroImage');
  const img = document.getElementById('admHeroImgPreview');
  if (!input || !img) return;
  const url = input.value.trim();
  if (url) {
    img.src = url;
    img.style.display = 'block';
  } else {
    img.style.display = 'none';
  }
}

function adminSaveHeroSlide(event) {
  if (event) event.preventDefault();
  const index = parseInt(document.getElementById('admHeroSlideIndex')?.value || '0', 10);
  const tag = document.getElementById('admHeroTag')?.value.trim() || 'BỘ SƯU TẬP 2026';
  const title = document.getElementById('admHeroTitle')?.value.trim() || 'FASHION STYLE';
  const desc = document.getElementById('admHeroDesc')?.value.trim() || '';
  const image = document.getElementById('admHeroImage')?.value.trim() || '';

  let slides = getHeroSlides();
  const idx = slides.findIndex(s => s.index === index);
  if (idx > -1) {
    slides[idx] = { ...slides[idx], tag, title, desc, image };
  } else {
    slides.push({ index, tag, title, desc, image, btnText: 'Khám phá', btnLink: 'index.html' });
  }

  localStorage.setItem('velora_hero_slides', JSON.stringify(slides));

  const modalEl = document.getElementById('adminHeroModal');
  if (modalEl) {
    const modal = bootstrap.Modal.getInstance(modalEl);
    if (modal) modal.hide();
  }

  adminRenderHeroBanners();
  applyHeroSlides();
  showToast(`Đã lưu cập nhật cho Slide ${index + 1}!`, 'success');
}

function applyHeroSlides() {
  const carousel = document.getElementById('heroFashionCarousel');
  if (!carousel) return;
  const slides = getHeroSlides();

  const items = carousel.querySelectorAll('.hero-slide-item');
  slides.forEach((s, i) => {
    if (items[i]) {
      const bgImg = items[i].querySelector('.hero-slide-bg');
      if (bgImg && s.image) bgImg.src = s.image;
      const tagEl = items[i].querySelector('.hero-tagline');
      if (tagEl && s.tag) tagEl.textContent = s.tag;
      const titleEl = items[i].querySelector('.hero-title');
      if (titleEl && s.title) titleEl.textContent = s.title;
      const descEl = items[i].querySelector('.hero-desc');
      if (descEl && s.desc) descEl.textContent = s.desc;
    }
  });
}

// Quick Product Image Changer Modal
function adminOpenChangeImageModal(productId) {
  const p = PRODUCTS.find(x => x.id === productId);
  if (!p) return;
  const modalEl = document.getElementById('adminChangeImageModal');
  if (!modalEl) return;

  document.getElementById('admQuickImgProdId').value = p.id;
  document.getElementById('admQuickImgProdName').textContent = p.name;
  document.getElementById('admQuickImgProdIdDisplay').textContent = `Mã sản phẩm: ${p.id}`;
  document.getElementById('admQuickImgUrl').value = p.image;
  adminPreviewQuickImage(p.image);

  const modal = bootstrap.Modal.getOrCreateInstance(modalEl);
  modal.show();
}

function adminPreviewQuickImage(url) {
  const img = document.getElementById('admQuickImgPreview');
  if (img) img.src = url || 'logo_crop.png';
}

function adminSaveQuickImage(event) {
  if (event) event.preventDefault();
  const id = document.getElementById('admQuickImgProdId')?.value;
  const newUrl = document.getElementById('admQuickImgUrl')?.value.trim();
  if (!id || !newUrl) return;

  const idx = PRODUCTS.findIndex(p => p.id === id);
  if (idx > -1) {
    PRODUCTS[idx].image = newUrl;
    saveCustomProducts();
    adminRenderProductsTable();

    const modalEl = document.getElementById('adminChangeImageModal');
    if (modalEl) {
      const modal = bootstrap.Modal.getInstance(modalEl);
      if (modal) modal.hide();
    }
    showToast(`Đã cập nhật ảnh mới cho sản phẩm <b>${PRODUCTS[idx].name}</b>!`, 'success');
  }
}

// --- STORE CONFIGURATION & CSKH ---
function getStoreConfig() {
  const stored = localStorage.getItem('velora_store_config');
  if (stored !== null) {
    try {
      const parsed = JSON.parse(stored);
      if (parsed && typeof parsed === 'object') return parsed;
    } catch (e) {
      console.warn('Error reading store config', e);
    }
  }
  return {
    hotline: '1900 8899',
    email: 'cskh@velorafashion.vn',
    address: '123 Đường Nam Kỳ Khởi Nghĩa, Quận 1, TP. HCM',
    announcement: 'Miễn phí giao hàng đơn từ 500.000đ • Nhập mã VELORA10 giảm 10%'
  };
}

function adminSaveStoreConfig(e) {
  if (e) e.preventDefault();
  const config = {
    hotline: document.getElementById('admConfigHotline')?.value.trim() || '1900 8899',
    email: document.getElementById('admConfigEmail')?.value.trim() || 'cskh@velorafashion.vn',
    address: document.getElementById('admConfigAddress')?.value.trim() || '123 Đường Nam Kỳ Khởi Nghĩa, Quận 1, TP. HCM',
    announcement: document.getElementById('admConfigAnnouncement')?.value.trim() || 'Ưu đãi thời trang Velora'
  };
  localStorage.setItem('velora_store_config', JSON.stringify(config));
  applyStoreConfig();
  showToast('Đã lưu cấu hình cửa hàng thành công!', 'success');
}

function applyStoreConfig() {
  const config = getStoreConfig();
  document.querySelectorAll('.nav-hotline-num').forEach(el => el.textContent = config.hotline);
}

// --- ADMIN SUITE NAVIGATION & STATS ---
function switchAdminSec(secName) {
  document.querySelectorAll('.adm-nav-pill').forEach(btn => btn.classList.remove('active'));
  const activeBtn = document.getElementById(`admNavBtn-${secName}`);
  if (activeBtn) activeBtn.classList.add('active');

  document.querySelectorAll('.admin-sub-section').forEach(sec => sec.classList.add('d-none'));
  const activeSec = document.getElementById(`admSec-${secName}`);
  if (activeSec) activeSec.classList.remove('d-none');

  if (secName === 'products') {
    adminRenderProductsTable();
  } else if (secName === 'orders') {
    adminRenderOrdersTable();
  } else if (secName === 'vouchers') {
    adminRenderVouchersTable();
  } else if (secName === 'banners') {
    adminRenderHeroBanners();
  } else if (secName === 'overview') {
    adminUpdateStats();
  } else if (secName === 'supabase') {
    adminRenderSupabaseSec();
  }
}

function adminUpdateStats() {
  const statProd = document.getElementById('admStatProducts');
  if (statProd) statProd.textContent = PRODUCTS.length;

  const orders = getOrders();
  const statOrd = document.getElementById('admStatOrders');
  if (statOrd) statOrd.textContent = orders.length;

  const navOrdersCount = document.getElementById('admNavOrdersCount');
  if (navOrdersCount) navOrdersCount.textContent = orders.length;

  const statVouchers = document.getElementById('admStatVouchers');
  if (statVouchers) statVouchers.textContent = getVouchers().length;

  const statRev = document.getElementById('admStatRevenue');
  if (statRev) {
    const rev = orders.filter(o => !o.status.includes('hủy')).reduce((sum, o) => {
      const num = parseInt((o.total || '0').replace(/\D/g, ''), 10) || 0;
      return sum + num;
    }, 0);
    statRev.textContent = formatCurrency(rev);
  }
}

// --- TAB SWITCHER & AUTHENTICATION ---
function switchAccountTab(tabName) {
  document.querySelectorAll('.account-tab-btn').forEach(btn => btn.classList.remove('active'));
  document.querySelectorAll('.account-tab-pane').forEach(pane => pane.classList.add('d-none'));

  const activeBtn = document.querySelector(`.account-tab-btn[data-account-tab="${tabName}"]`);
  if (activeBtn) activeBtn.classList.add('active');

  const activePane = document.getElementById(`accTab-${tabName}`);
  if (activePane) activePane.classList.remove('d-none');

  if (tabName === 'admin') {
    switchAdminSec('overview');
    adminRenderProductsTable();
    adminRenderOrdersTable();
    adminRenderVouchersTable();
    adminRenderHeroBanners();
    adminUpdateStats();
  } else if (tabName === 'orders') {
    renderAccountOrders();
  } else if (tabName === 'vouchers') {
    renderAccountVouchers();
  } else if (tabName === 'addresses') {
    renderAccountAddresses();
  } else if (tabName === 'wishlist') {
    renderAccountWishlist();
  }
}

function loginAs(role, bypassCheck = false) {
  if (role === 'admin' && !bypassCheck) {
    openAdminLoginModal();
    return;
  }

  if (role === 'admin') {
    const adm = getAdminProfile();
    currentUser = {
      isLoggedIn: true,
      role: 'admin',
      name: adm.name || 'Quản Trị Viên Velora',
      email: adm.email || 'admin@velora.vn',
      phone: adm.phone || '1900 8899',
      address: adm.address || 'Trụ sở Điều hành Velora Fashion, Q.1, TP. HCM',
      membershipTier: 'SUPER ADMIN',
      points: 99999,
      avatar: adm.avatar || 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400&auto=format&fit=crop&q=80',
      ordersCount: getOrders().length
    };
  } else {
    // ALWAYS load the customized persistent customer profile!
    const cust = getCustomerProfile();
    currentUser = {
      isLoggedIn: true,
      role: 'customer',
      name: cust.name || 'Đặng Minh Anh',
      email: cust.email || 'minhanh.velora@gmail.com',
      phone: cust.phone || '0988 123 456',
      address: cust.address || '123 Đường Nam Kỳ Khởi Nghĩa, Quận 1, TP. Hồ Chí Minh',
      membershipTier: cust.membershipTier || 'VIP GOLD',
      points: cust.points || 1250,
      avatar: cust.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80',
      ordersCount: getOrders().length
    };
  }
  localStorage.setItem('velora_user', JSON.stringify(currentUser));
  updateAccountUI();
  showToast(`Xin chào, <b>${currentUser.name}</b>! Đã đăng nhập với quyền <b>${currentUser.role === 'admin' ? 'Quản Trị Viên (Admin)' : 'Khách Hàng VIP'}</b>.`, 'success');

  if (currentUser.role === 'admin') {
    switchAccountTab('admin');
  } else {
    switchAccountTab('profile');
  }
}

async function handleLoginForm(event) {
  if (event) event.preventDefault();
  const emailInput = document.getElementById('loginEmail');
  const pwdInput = document.getElementById('loginPassword');
  const val = emailInput ? emailInput.value.trim().toLowerCase() : '';
  const pwd = pwdInput ? pwdInput.value : '';

  if (val.includes('admin')) {
    const isValid = await verifyAdminPasswordAsync(pwd);
    if (isValid) {
      loginAs('admin', true);
    } else {
      showToast('Mật khẩu Quản Trị Viên không đúng! (Mặc định: <code>admin123</code>)', 'error');
      if (pwdInput) pwdInput.focus();
    }
    return;
  }

  // 1. Check against local registered users
  const users = getRegisteredUsers();
  let matchedUser = users.find(u => u.email && u.email.toLowerCase() === val);

  // 2. Real-time check Supabase Cloud for cross-device synchronization
  const client = getSupabaseClient();
  if (client && val) {
    try {
      const { data: dbUser, error } = await client.from('users').select('*').eq('email', val).maybeSingle();
      if (!error && dbUser) {
        matchedUser = {
          id: dbUser.id,
          email: dbUser.email,
          password: dbUser.password,
          name: dbUser.name,
          phone: dbUser.phone,
          address: dbUser.address,
          avatar: dbUser.avatar,
          role: dbUser.role || 'customer',
          membershipTier: dbUser.membership_tier,
          points: dbUser.points
        };
        const idx = users.findIndex(u => u.email && u.email.toLowerCase() === val);
        if (idx > -1) users[idx] = matchedUser;
        else users.push(matchedUser);
        localStorage.setItem('velora_registered_users', JSON.stringify(users));
      }
    } catch (e) {
      console.warn('Supabase real-time login check warning:', e);
    }
  }

  if (matchedUser) {
    if (matchedUser.password && matchedUser.password !== pwd) {
      showToast('Mật khẩu không chính xác! Vui lòng thử lại.', 'error');
      if (pwdInput) pwdInput.focus();
      return;
    }
    saveCustomerProfile(matchedUser);
    currentUser = {
      isLoggedIn: true,
      role: matchedUser.role || 'customer',
      ...matchedUser,
      ordersCount: getOrders().length
    };
    localStorage.setItem('velora_user', JSON.stringify(currentUser));
    updateAccountUI();
    showToast(`Đăng nhập thành công! Chào mừng <b>${currentUser.name}</b> quay trở lại.`, 'success');
    switchAccountTab('profile');
    return;
  }

  // Check demo customer minhanh
  if (val === 'minhanh.velora@gmail.com' || !val) {
    loginAs('customer');
    return;
  }

  showToast('Tài khoản chưa tồn tại trên hệ thống! Vui lòng đăng ký tài khoản mới.', 'warning');
  switchAuthTab('register');
}

function handleLogout() {
  currentUser = {
    isLoggedIn: false,
    role: 'guest',
    name: '',
    email: '',
    phone: '',
    address: '',
    membershipTier: 'Khách vãng lai',
    points: 0,
    avatar: '',
    ordersCount: 0
  };
  localStorage.setItem('velora_user', JSON.stringify(currentUser));
  updateAccountUI();
  showToast('Đã đăng xuất thành công khỏi hệ thống. Hẹn gặp lại quý khách!', 'info');
}

function toggleRole() {
  handleRoleSwitchClick();
}

// --- ADMIN PROFILE QUICK-EDIT ---
function adminOpenEditProfileModal() {
  const modalEl = document.getElementById('adminEditProfileModal');
  if (!modalEl) return;

  const adm = getAdminProfile();
  const inName = document.getElementById('adminProfileNameInput');
  const inEmail = document.getElementById('adminProfileEmailInput');
  const inPhone = document.getElementById('adminProfilePhoneInput');
  const inTitle = document.getElementById('adminProfileTitleInput');

  if (inName) inName.value = currentUser.name || adm.name || 'Quản Trị Viên Velora';
  if (inEmail) inEmail.value = currentUser.email || adm.email || 'admin@velora.vn';
  if (inPhone) inPhone.value = currentUser.phone || adm.phone || '1900 8899';
  if (inTitle) inTitle.value = currentUser.membershipTier || adm.membershipTier || 'SUPER ADMIN';

  const modal = bootstrap.Modal.getOrCreateInstance(modalEl);
  modal.show();
}

function saveAdminProfileInfo(e) {
  if (e) e.preventDefault();
  const inName = document.getElementById('adminProfileNameInput');
  const inEmail = document.getElementById('adminProfileEmailInput');
  const inPhone = document.getElementById('adminProfilePhoneInput');
  const inTitle = document.getElementById('adminProfileTitleInput');

  const name = inName ? inName.value.trim() : '';
  const email = inEmail ? inEmail.value.trim() : '';
  const phone = inPhone ? inPhone.value.trim() : '';
  const title = inTitle ? inTitle.value.trim() : '';

  if (!name) {
    showToast('Vui lòng nhập họ tên Quản trị viên!', 'warning');
    return;
  }

  const adm = getAdminProfile();
  adm.name = name;
  if (email) adm.email = email;
  if (phone) adm.phone = phone;
  if (title) adm.membershipTier = title;
  saveAdminProfile(adm);

  if (currentUser.role === 'admin') {
    currentUser.name = name;
    if (email) currentUser.email = email;
    if (phone) currentUser.phone = phone;
    if (title) currentUser.membershipTier = title;
    localStorage.setItem('velora_user', JSON.stringify(currentUser));
  }

  const modalEl = document.getElementById('adminEditProfileModal');
  if (modalEl) {
    const modal = bootstrap.Modal.getInstance(modalEl);
    if (modal) modal.hide();
  }

  updateAccountUI();
  showToast(`Đã đổi tên Quản Trị Viên thành: <b>${name}</b> thành công!`, 'success');
}

function saveUserProfile(e) {
  if (e) e.preventDefault();
  const inName = document.getElementById('profInputName');
  const inPhone = document.getElementById('profInputPhone');
  const inEmail = document.getElementById('profInputEmail');
  const inAddr = document.getElementById('profInputAddress');

  const newName = inName ? inName.value.trim() : '';
  const newPhone = inPhone ? inPhone.value.trim() : '';
  const newEmail = inEmail ? inEmail.value.trim() : '';
  const newAddr = inAddr ? inAddr.value.trim() : '';

  if (newName) currentUser.name = newName;
  if (newPhone) currentUser.phone = newPhone;
  if (newEmail) currentUser.email = newEmail;
  if (newAddr) currentUser.address = newAddr;

  currentUser.isLoggedIn = true;
  localStorage.setItem('velora_user', JSON.stringify(currentUser));

  // PERSIST PROFILE DEPENDING ON CURRENT ROLE
  if (currentUser.role === 'customer') {
    const cust = getCustomerProfile();
    cust.name = currentUser.name;
    cust.phone = currentUser.phone;
    cust.email = currentUser.email;
    cust.address = currentUser.address;
    if (currentUser.avatar) cust.avatar = currentUser.avatar;
    saveCustomerProfile(cust);
  } else if (currentUser.role === 'admin') {
    const adm = getAdminProfile();
    adm.name = currentUser.name;
    adm.phone = currentUser.phone;
    adm.email = currentUser.email;
    adm.address = currentUser.address;
    if (currentUser.avatar) adm.avatar = currentUser.avatar;
    saveAdminProfile(adm);
  }

  updateAccountUI();
  showToast(`Cập nhật thành công! Họ tên: <b>${currentUser.name}</b>`, 'success');
}

// --- AVATAR CHANGER ENGINE (CHO CẢ KHÁCH HÀNG & ADMIN) ---
function openUserAvatarModal() {
  const modalEl = document.getElementById('userAvatarModal');
  if (!modalEl) return;

  const isAdmin = currentUser && currentUser.role === 'admin';
  const targetBadge = document.getElementById('modalAvatarTargetBadge');
  if (targetBadge) {
    targetBadge.innerHTML = isAdmin 
      ? '<i class="bi bi-shield-check text-warning me-1"></i>Đang đổi ảnh: <b>Quản Trị Viên (Admin)</b>'
      : '<i class="bi bi-person-fill text-primary me-1"></i>Đang đổi ảnh: <b>Khách Hàng VIP</b>';
    targetBadge.className = isAdmin ? 'badge bg-dark text-warning border px-3 py-1 rounded-pill mb-3' : 'badge bg-light text-dark border px-3 py-1 rounded-pill mb-3';
  }

  const currentAvatar = currentUser.avatar || (isAdmin
    ? 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400&auto=format&fit=crop&q=80'
    : 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80'
  );

  const inputUrl = document.getElementById('userAvatarInputUrl');
  if (inputUrl) inputUrl.value = currentAvatar;
  previewUserAvatar(currentAvatar);

  const modal = bootstrap.Modal.getOrCreateInstance(modalEl);
  modal.show();
}

function previewUserAvatar(url) {
  const img = document.getElementById('userAvatarPreview');
  if (img) img.src = url || 'logo_crop.png';
}

function selectPresetAvatar(url) {
  const input = document.getElementById('userAvatarInputUrl');
  if (input) input.value = url;
  previewUserAvatar(url);
}

function saveUserAvatar(e) {
  if (e) e.preventDefault();
  const inputUrl = document.getElementById('userAvatarInputUrl');
  const url = inputUrl ? inputUrl.value.trim() : '';

  if (!url) {
    showToast('Vui lòng nhập đường dẫn ảnh hoặc chọn ảnh mẫu!', 'warning');
    return;
  }

  currentUser.avatar = url;
  localStorage.setItem('velora_user', JSON.stringify(currentUser));

  if (currentUser.role === 'admin') {
    const adm = getAdminProfile();
    adm.avatar = url;
    saveAdminProfile(adm);
    showToast('Đã cập nhật ảnh đại diện Quản Trị Viên thành công!', 'success');
  } else {
    const cust = getCustomerProfile();
    cust.avatar = url;
    saveCustomerProfile(cust);
    showToast('Đã cập nhật ảnh đại diện Khách Hàng thành công!', 'success');
  }

  const modalEl = document.getElementById('userAvatarModal');
  if (modalEl) {
    const modal = bootstrap.Modal.getInstance(modalEl);
    if (modal) modal.hide();
  }

  updateAccountUI();
}

function updateAccountUI() {
  const isLoggedIn = currentUser && currentUser.isLoggedIn;
  const isAdmin = isLoggedIn && currentUser.role === 'admin';
  const currentName = (currentUser && currentUser.name) ? currentUser.name : (isAdmin ? 'Quản Trị Viên Velora' : 'Khách Hàng Velora');
  const nameToDisplay = isLoggedIn ? currentName : 'Tài khoản';

  // 1. Navbar User Link (Shows dynamic Admin name or Customer name)
  document.querySelectorAll('#navAccountName').forEach(el => {
    if (!isLoggedIn) {
      el.textContent = 'Tài khoản';
    } else if (isAdmin) {
      el.innerHTML = `<i class="bi bi-shield-check text-warning me-1"></i>👑 ${currentName}`;
    } else {
      el.textContent = currentName;
    }
  });

  // 2. All user display name tags
  document.querySelectorAll('.user-display-name').forEach(el => {
    el.textContent = currentName;
  });

  const loggedInView = document.getElementById('accountLoggedInView');
  const loggedOutView = document.getElementById('accountLoggedOutView');
  if (loggedInView && loggedOutView) {
    if (isLoggedIn) {
      loggedInView.classList.remove('d-none');
      loggedOutView.classList.add('d-none');
    } else {
      loggedInView.classList.add('d-none');
      loggedOutView.classList.remove('d-none');
    }
  }

  // 3. Welcome Banner
  const welcomeName = document.getElementById('welcomeUserName');
  if (welcomeName) welcomeName.textContent = currentName;
  const welcomeSub = document.getElementById('welcomeUserSub');
  if (welcomeSub) {
    if (isAdmin) {
      welcomeSub.innerHTML = `<span class="text-warning fw-bold"><i class="bi bi-shield-lock-fill me-1"></i>${currentUser.membershipTier || 'SUPER ADMIN'}</span> • Toàn quyền chỉnh sửa hệ thống, đơn hàng & đa phương tiện`;
    } else {
      welcomeSub.innerHTML = `Thành viên ${currentUser.membershipTier || 'VIP Gold'} • Điểm tích lũy: <b class="text-warning" id="welcomeUserPoints">${Number(currentUser.points || 1250).toLocaleString('vi-VN')}</b> pts • Ưu đãi trọn đời`;
    }
  }
  const welcomeRoleBadge = document.getElementById('welcomeRoleBadge');
  if (welcomeRoleBadge) {
    if (isAdmin) {
      welcomeRoleBadge.className = 'badge bg-warning text-dark fw-bold px-3 py-2 rounded-pill shadow-sm';
      welcomeRoleBadge.innerHTML = '<i class="bi bi-shield-lock-fill me-1"></i> ADMIN QUẢN TRỊ VIÊN';
    } else {
      welcomeRoleBadge.className = 'badge bg-dark px-3 py-2 rounded-pill small';
      welcomeRoleBadge.textContent = currentUser.membershipTier || 'VIP GOLD MEMBER';
    }
  }

  // 4. Admin Header Displays
  const adminHeaderName = document.getElementById('adminHeaderNameDisplay');
  if (adminHeaderName) adminHeaderName.textContent = currentName;
  const adminHeaderEmail = document.getElementById('adminHeaderEmailDisplay');
  if (adminHeaderEmail) adminHeaderEmail.textContent = currentUser.email || 'admin@velora.vn';

  // 5. Loyalty Points Display
  const rewardPoints = document.getElementById('rewardPointsDisplay');
  if (rewardPoints) rewardPoints.textContent = Number(currentUser.points || 0).toLocaleString('vi-VN');

  const btnToggleRoleText = document.getElementById('btnToggleRoleText');
  if (btnToggleRoleText) {
    btnToggleRoleText.textContent = isAdmin ? 'Về Giao Diện Khách Hàng' : 'Vào Quản Trị Viên (Admin)';
  }

  const tabBtnAdmin = document.getElementById('tabBtnAdmin');
  if (tabBtnAdmin) {
    if (isAdmin) {
      tabBtnAdmin.classList.remove('d-none');
    } else {
      tabBtnAdmin.classList.add('d-none');
    }
  }

  // 6. Current Avatar syncing
  const currentAvatar = currentUser.avatar || (isAdmin
    ? 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400&auto=format&fit=crop&q=80'
    : 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80'
  );

  const welcomeAvatar = document.getElementById('welcomeUserAvatar');
  if (welcomeAvatar) welcomeAvatar.src = currentAvatar;

  const vipAvatar = document.getElementById('vipCardAvatar');
  if (vipAvatar) vipAvatar.src = currentAvatar;

  const formAvatar = document.getElementById('profFormAvatar');
  if (formAvatar) formAvatar.src = currentAvatar;

  const adminAvatar = document.getElementById('adminHeaderAvatar');
  if (adminAvatar) adminAvatar.src = currentAvatar;

  const navAvatar = document.getElementById('navUserAvatar');
  const navDefaultIcon = document.getElementById('navDefaultUserIcon');
  if (navAvatar) {
    if (isLoggedIn && currentAvatar) {
      navAvatar.src = currentAvatar;
      navAvatar.style.display = 'inline-block';
      if (navDefaultIcon) navDefaultIcon.style.display = 'none';
    } else {
      navAvatar.style.display = 'none';
      if (navDefaultIcon) navDefaultIcon.style.display = 'inline-block';
    }
  }

  // 7. Profile Form & VIP Cardholder sync
  const nameEl = document.getElementById('profName');
  if (nameEl) nameEl.textContent = currentName;
  const tierEl = document.getElementById('profTier');
  if (tierEl) tierEl.textContent = currentUser.membershipTier || (isAdmin ? 'SUPER ADMIN' : 'VIP GOLD');
  const pointsEl = document.getElementById('profPoints');
  if (pointsEl) pointsEl.textContent = Number(currentUser.points || 0).toLocaleString('vi-VN');

  const inName = document.getElementById('profInputName');
  if (inName) inName.value = currentName;
  const inPhone = document.getElementById('profInputPhone');
  if (inPhone) inPhone.value = currentUser.phone || '';
  const inEmail = document.getElementById('profInputEmail');
  if (inEmail) inEmail.value = currentUser.email || '';
  const inAddr = document.getElementById('profInputAddress');
  if (inAddr) inAddr.value = currentUser.address || '';

  renderAccountOrders();
  renderAccountVouchers();
  renderAccountAddresses();
  renderAccountWishlist();

  if (isAdmin) {
    adminRenderProductsTable();
    adminRenderOrdersTable();
    adminRenderVouchersTable();
    adminRenderHeroBanners();
    adminRenderCategoryBanners();
    adminRenderLookbookMedia();
    adminUpdateStats();
  }
}

// --- ADMIN SYSTEM & PRODUCT/ORDER EDITOR 👑 ---
function saveCustomProducts() {
  localStorage.setItem('velora_custom_products', JSON.stringify(PRODUCTS));
  try {
    const sb = getSupabaseClient();
    if (sb && Array.isArray(PRODUCTS)) {
      const prodsToSync = PRODUCTS.map(p => ({
        id: p.id,
        name: p.name,
        category: p.category || 'women',
        sub_category: p.subCategory || '',
        price: p.price || 0,
        old_price: p.oldPrice || null,
        badge: p.badge || null,
        badge_type: p.badgeType || null,
        image: p.image || '',
        colors: p.colors || [],
        rating: p.rating || 5.0,
        reviews: p.reviews || 0,
        tags: p.tags || [],
        stock: p.stock || 50,
        sold: p.sold || 0
      }));
      sb.from('products').upsert(prodsToSync).then(() => {}).catch(err => console.warn(err));
    }
  } catch (e) {}
}

function adminFilterProducts() {
  const input = document.getElementById('admSearchInput');
  const term = input ? input.value.trim().toLowerCase() : '';
  const catFilter = document.getElementById('admCategoryFilter')?.value || 'all';
  adminRenderProductsTable(term, catFilter);
}

function adminRenderProductsTable(filter = '', catFilter = 'all') {
  const tbody = document.getElementById('adminProductsBody');
  if (!tbody) return;

  let list = PRODUCTS;
  if (catFilter && catFilter !== 'all') {
    list = list.filter(p => p.category === catFilter);
  }
  if (filter) {
    list = list.filter(p => 
      (p.id && p.id.toLowerCase().includes(filter)) ||
      (p.name && p.name.toLowerCase().includes(filter)) ||
      (p.category && p.category.toLowerCase().includes(filter))
    );
  }

  if (list.length === 0) {
    tbody.innerHTML = `<tr><td colspan="8" class="text-center py-4 text-muted">Không tìm thấy sản phẩm phù hợp</td></tr>`;
    return;
  }

  tbody.innerHTML = list.map(p => `
    <tr>
      <td style="width: 55px;">
        <div class="position-relative">
          <img src="${p.image}" alt="${p.name}" style="width: 44px; height: 56px; object-fit: cover; border-radius: 6px;">
          <button type="button" class="btn btn-xs btn-dark rounded-circle position-absolute bottom-0 end-0 p-1 shadow" onclick="adminOpenChangeImageModal('${p.id}')" title="Đổi ảnh nhanh">
            <i class="bi bi-camera-fill" style="font-size: 0.65rem;"></i>
          </button>
        </div>
      </td>
      <td><span class="badge bg-secondary font-monospace">${p.id}</span></td>
      <td>
        <div class="fw-bold small text-dark">${p.name}</div>
        <span class="badge ${p.badgeType || 'badge-gold'}" style="font-size: 0.65rem;">${p.badge || 'POPULAR'}</span>
      </td>
      <td><span class="badge bg-light text-dark border">${(p.category || '').toUpperCase()} / ${p.subCategory || '-'}</span></td>
      <td class="text-danger fw-bold">${formatCurrency(p.price)}</td>
      <td class="text-muted small text-decoration-line-through">${p.oldPrice ? formatCurrency(p.oldPrice) : '-'}</td>
      <td>
        <button type="button" class="btn btn-xs border rounded-pill px-2 py-0.5 d-inline-flex align-items-center gap-1 ${p.stock > 10 ? 'btn-outline-success' : (p.stock > 0 ? 'btn-outline-warning text-dark' : 'btn-outline-danger')}" onclick="adminQuickStockEdit('${p.id}')" title="Bấm để cập nhật nhanh số lượng tồn kho">
          <i class="bi bi-box-seam"></i>
          <b>${p.stock || 0}</b>
          <i class="bi bi-pencil" style="font-size: 0.65rem;"></i>
        </button>
      </td>
      <td class="text-center">
        <div class="d-flex justify-content-center gap-1">
          <button class="btn btn-sm btn-outline-dark rounded-pill px-2" onclick="adminOpenEditProduct('${p.id}')" title="Sửa thông tin">
            <i class="bi bi-pencil-square"></i>
          </button>
          <button class="btn btn-sm btn-outline-primary rounded-pill px-2" onclick="adminOpenChangeImageModal('${p.id}')" title="Đổi ảnh sản phẩm">
            <i class="bi bi-image"></i>
          </button>
          <button class="btn btn-sm btn-outline-danger rounded-pill px-2" onclick="adminDeleteProduct('${p.id}')" title="Xóa sản phẩm">
            <i class="bi bi-trash"></i>
          </button>
        </div>
      </td>
    </tr>
  `).join('');
}

function adminOpenAddProduct() {
  const modalEl = document.getElementById('adminProductModal');
  if (!modalEl) return;

  document.getElementById('adminProductModalTitle').innerHTML = '<i class="bi bi-plus-circle text-warning me-2"></i>Thêm Sản Phẩm Mới';
  document.getElementById('admProdId').value = 'sp-' + Math.floor(100 + Math.random() * 900);
  document.getElementById('admProdId').readOnly = false;
  document.getElementById('admProdName').value = '';
  document.getElementById('admProdCategory').value = 'women';
  adminUpdateSubCategories();
  document.getElementById('admProdBadge').value = 'NEW ARRIVAL';
  document.getElementById('admProdPrice').value = '450000';
  document.getElementById('admProdOldPrice').value = '550000';
  document.getElementById('admProdStock').value = '30';
  document.getElementById('admProdImage').value = 'chan_vay_xep_ly_midi.jpg';
  adminPreviewImage();

  const modal = bootstrap.Modal.getOrCreateInstance(modalEl);
  modal.show();
}

function adminOpenEditProduct(productId) {
  const p = PRODUCTS.find(x => x.id === productId);
  if (!p) {
    showToast('Không tìm thấy sản phẩm ' + productId, 'warning');
    return;
  }
  const modalEl = document.getElementById('adminProductModal');
  if (!modalEl) return;

  document.getElementById('adminProductModalTitle').innerHTML = `<i class="bi bi-pencil-square text-warning me-2"></i>Chỉnh Sửa Sản Phẩm: <span class="text-warning">${p.id}</span>`;
  document.getElementById('admProdId').value = p.id;
  document.getElementById('admProdId').readOnly = true;
  document.getElementById('admProdName').value = p.name;
  document.getElementById('admProdCategory').value = p.category;
  adminUpdateSubCategories();
  if (p.subCategory) document.getElementById('admProdSubCategory').value = p.subCategory;
  document.getElementById('admProdBadge').value = p.badge || 'HOT TREND';
  document.getElementById('admProdPrice').value = p.price;
  document.getElementById('admProdOldPrice').value = p.oldPrice || '';
  document.getElementById('admProdStock').value = p.stock || 20;
  document.getElementById('admProdImage').value = p.image;
  adminPreviewImage();

  const modal = bootstrap.Modal.getOrCreateInstance(modalEl);
  modal.show();
}

function adminSaveProduct(event) {
  if (event) event.preventDefault();
  const id = document.getElementById('admProdId').value.trim();
  const name = document.getElementById('admProdName').value.trim();
  const category = document.getElementById('admProdCategory').value;
  const subCategory = document.getElementById('admProdSubCategory').value;
  const badge = document.getElementById('admProdBadge').value;
  const price = parseInt(document.getElementById('admProdPrice').value, 10);
  const oldPrice = parseInt(document.getElementById('admProdOldPrice').value, 10) || 0;
  const stock = parseInt(document.getElementById('admProdStock').value, 10) || 0;
  const image = document.getElementById('admProdImage').value.trim() || 'chan_vay_xep_ly_midi.jpg';

  let badgeType = 'badge-gold';
  if (badge.includes('NEW')) badgeType = 'badge-new';
  else if (badge.includes('TREND') || badge.includes('HOT')) badgeType = 'badge-trend';
  else if (badge.includes('POPULAR')) badgeType = 'badge-gold';
  else if (badge.includes('BEST') || badge.includes('ELEGANT')) badgeType = 'badge-best';

  const existingIndex = PRODUCTS.findIndex(p => p.id === id);
  if (existingIndex > -1) {
    PRODUCTS[existingIndex] = {
      ...PRODUCTS[existingIndex],
      name, category, subCategory, badge, badgeType, price, oldPrice, stock, image
    };
    showToast(`Đã cập nhật sản phẩm <b>${name}</b> thành công!`, 'success');
  } else {
    const newProduct = {
      id,
      name,
      category,
      subCategory,
      price,
      oldPrice,
      badge,
      badgeType,
      image,
      colors: ['#1c1917', '#e2e8f0'],
      rating: 5.0,
      reviews: 1,
      tags: [category, 'new-arrivals'],
      stock,
      sold: 0
    };
    PRODUCTS.unshift(newProduct);
    showToast(`Đã thêm mới sản phẩm <b>${name}</b> thành công!`, 'success');
  }

  saveCustomProducts();

  const modalEl = document.getElementById('adminProductModal');
  if (modalEl) {
    const modal = bootstrap.Modal.getInstance(modalEl);
    if (modal) modal.hide();
  }

  adminRenderProductsTable();
  adminUpdateStats();
}

function adminDeleteProduct(productId) {
  if (!confirm(`Bạn có chắc chắn muốn xóa sản phẩm ${productId} khỏi toàn bộ cửa hàng không?`)) {
    return;
  }
  const index = PRODUCTS.findIndex(p => p.id === productId);
  if (index > -1) {
    const deletedName = PRODUCTS[index].name;
    PRODUCTS.splice(index, 1);
    saveCustomProducts();
    try {
      const sb = getSupabaseClient();
      if (sb) {
        sb.from('products').delete().eq('id', productId).then(() => {}).catch(err => console.warn(err));
      }
    } catch (e) {}
    adminRenderProductsTable();
    adminUpdateStats();
    showToast(`Đã xóa sản phẩm <b>${deletedName}</b>!`, 'info');
  }
}

function adminResetDefaultProducts() {
  if (confirm('Khôi phục toàn bộ danh mục sản phẩm về nguyên bản của nhà sản xuất? Các sản phẩm bạn thêm/sửa sẽ được đặt lại.')) {
    localStorage.removeItem('velora_custom_products');
    location.reload();
  }
}

function adminPreviewImage() {
  const input = document.getElementById('admProdImage');
  const img = document.getElementById('admImgPreview');
  const txt = document.getElementById('admImgPreviewText');
  if (!input || !img || !txt) return;

  const url = input.value.trim();
  if (url) {
    img.src = url;
    img.style.display = 'inline-block';
    txt.style.display = 'none';
  } else {
    img.style.display = 'none';
    txt.style.display = 'inline-block';
  }
}

function adminUpdateSubCategories() {
  const cat = document.getElementById('admProdCategory')?.value;
  const subSelect = document.getElementById('admProdSubCategory');
  if (!subSelect) return;

  if (cat === 'women') {
    subSelect.innerHTML = `
      <option value="ao">Áo kiểu</option>
      <option value="blouse">Áo Blouse</option>
      <option value="chan-vay">Chân Váy</option>
      <option value="dam-vay">Đầm / Váy</option>
      <option value="quan">Quần Nữ</option>
    `;
  } else if (cat === 'men') {
    subSelect.innerHTML = `
      <option value="ao">Áo Polo / Sơ mi / Nỉ</option>
      <option value="quan">Quần Âu / Kaki / Jogger</option>
      <option value="blazer">Áo Blazer / Vest</option>
    `;
  } else {
    subSelect.innerHTML = `
      <option value="tui-xach">Túi Xách</option>
      <option value="giay">Giày dép</option>
      <option value="kinh-mat">Kính mát</option>
      <option value="trang-suc">Trang sức / Ngọc trai</option>
    `;
  }
}

function openZaloModal() {
  const modalEl = document.getElementById('zaloModal');
  if (modalEl) {
    const modal = new bootstrap.Modal(modalEl);
    modal.show();
  }
}

function openMessengerModal() {
  const modalEl = document.getElementById('messengerModal');
  if (modalEl) {
    const modal = new bootstrap.Modal(modalEl);
    modal.show();
  }
}

function copyVoucherCode(code) {
  navigator.clipboard.writeText(code).then(() => {
    applyCouponCodeViaValue(code);
    showToast(`Đã sao chép & áp dụng mã <b>${code}</b>!`, 'success');
  }).catch(() => {
    applyCouponCodeViaValue(code);
    showToast(`Đã áp dụng mã <b>${code}</b>!`, 'success');
  });
}


// 11. VELORA AI STYLIST CHATBOT & CUSTOMER CARE ENGINE 🤖
// ==========================================================================
// ==========================================================================
// 11. VELORA AI FASHION STYLIST 2.0 PRO - ADVANCED INTERACTIVE ENGINE
// ==========================================================================

let aiSizeGender = 'female';
let aiSizeFit = 'regular';
let aiVoiceTimeout = null;

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function toggleAiChat() {
  const chatBox = document.getElementById('veloraAiChatBox');
  if (!chatBox) return;
  chatBox.classList.toggle('open');
  if (chatBox.classList.contains('open')) {
    const input = document.getElementById('aiChatInput');
    if (input) setTimeout(() => input.focus(), 300);
    scrollAiChatToBottom();
  }
}

function openAiChat() {
  const chatBox = document.getElementById('veloraAiChatBox');
  if (chatBox && !chatBox.classList.contains('open')) {
    chatBox.classList.add('open');
    scrollAiChatToBottom();
  }
}

function closeAiChat() {
  const chatBox = document.getElementById('veloraAiChatBox');
  if (chatBox) chatBox.classList.remove('open');
}

function scrollAiChatToBottom() {
  const body = document.getElementById('aiChatBody');
  if (body) {
    setTimeout(() => {
      body.scrollTop = body.scrollHeight;
    }, 50);
  }
}

// --- SIZE TOOL DRAWER CONTROLS ---
function toggleAiSizeDrawer() {
  const drawer = document.getElementById('aiSizeWidgetDrawer');
  if (!drawer) return;
  drawer.classList.toggle('open');
  if (drawer.classList.contains('open')) {
    openAiChat();
  }
}

function showAiSizeWidget() {
  const drawer = document.getElementById('aiSizeWidgetDrawer');
  if (drawer) {
    drawer.classList.add('open');
    openAiChat();
  }
}

function closeAiSizeDrawer() {
  const drawer = document.getElementById('aiSizeWidgetDrawer');
  if (drawer) drawer.classList.remove('open');
}

function setAiSizeGender(gender) {
  aiSizeGender = gender;
  const fPill = document.getElementById('aiGenderFemale');
  const mPill = document.getElementById('aiGenderMale');
  if (fPill && mPill) {
    fPill.classList.toggle('active', gender === 'female');
    mPill.classList.toggle('active', gender === 'male');
  }
}

function updateAiSizeRange() {
  const hInput = document.getElementById('aiHeightRange');
  const wInput = document.getElementById('aiWeightRange');
  const hVal = document.getElementById('aiHeightVal');
  const wVal = document.getElementById('aiWeightVal');
  if (hInput && hVal) hVal.textContent = hInput.value + ' cm';
  if (wInput && wVal) wVal.textContent = wInput.value + ' kg';
}

function setAiSizeFit(fit) {
  aiSizeFit = fit;
  ['regular', 'slim', 'oversize'].forEach(f => {
    const el = document.getElementById('aiFit' + f.charAt(0).toUpperCase() + f.slice(1));
    if (el) el.classList.toggle('active', f === fit);
  });
}

function calculateAiSizeFromDrawer() {
  const hInput = document.getElementById('aiHeightRange');
  const wInput = document.getElementById('aiWeightRange');
  const h = hInput ? parseInt(hInput.value) : 162;
  const w = wInput ? parseInt(wInput.value) : 52;
  
  closeAiSizeDrawer();
  const fitText = aiSizeFit === 'slim' ? 'Tôn dáng (Slim-fit)' : (aiSizeFit === 'oversize' ? 'Rộng thoải mái (Oversize)' : 'Vừa vặn (Regular)');
  const genderText = aiSizeGender === 'female' ? 'Nữ' : 'Nam';
  
  sendAiMessage(`Đo size cho ${genderText}: Chiều cao ${h}cm, Cân nặng ${w}kg, Gu mặc ${fitText}`);
}

// --- RENDER MINI PRODUCT CARDS IN AI CHAT ---
function renderAiProductCards(productIds) {
  if (!Array.isArray(productIds) || !productIds.length) return '';
  const items = productIds.map(id => PRODUCTS.find(p => p.id === id)).filter(Boolean);
  if (!items.length) return '';

  return `
    <div class="ai-product-grid">
      ${items.map(p => `
        <div class="ai-product-card">
          <div class="ai-product-img-wrap">
            <img src="${p.image}" alt="${escapeHtml(p.name)}" loading="lazy">
            ${p.badge ? `<span class="ai-product-badge">${escapeHtml(p.badge)}</span>` : ''}
          </div>
          <div class="ai-product-info">
            <h6 class="ai-product-name" title="${escapeHtml(p.name)}">${escapeHtml(p.name)}</h6>
            <div class="ai-product-price-row">
              <span class="ai-product-price">${formatCurrency(p.price)}</span>
              ${p.oldPrice ? `<span class="ai-product-old-price">${formatCurrency(p.oldPrice)}</span>` : ''}
            </div>
            <div class="ai-product-actions">
              <button class="btn btn-xs btn-dark rounded-pill" onclick="addToCart('${p.id}')">
                <i class="bi bi-bag-plus me-1"></i> + Giỏ hàng
              </button>
              <button class="btn btn-xs btn-outline-secondary rounded-pill" onclick="openQuickView('${p.id}')">
                <i class="bi bi-eye"></i> Xem
              </button>
            </div>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

// --- RESET AI CHAT ---
function resetAiChat() {
  const body = document.getElementById('aiChatBody');
  if (!body) return;

  body.innerHTML = `
    <div class="ai-message bot">
      <div class="ai-chat-avatar" style="width: 32px; height: 32px; font-size: 0.95rem;">V</div>
      <div class="ai-msg-bubble">
        <p class="mb-2">
          Xin chào quý khách! Mình là <b>Velora AI Stylist 2.0</b> ✨. Bạn đang chuẩn bị trang phục cho dịp nào hay cần tư vấn size, phối đồ phù hợp với vóc dáng hôm nay?
        </p>
        <div class="d-flex flex-wrap gap-1 mt-2">
          <button class="btn btn-xs btn-outline-dark rounded-pill" onclick="handleAiChipClick('Gợi ý đầm đi tiệc sang chảnh')">👗 Đầm dự tiệc</button>
          <button class="btn btn-xs btn-outline-dark rounded-pill" onclick="handleAiChipClick('Set đồ công sở thanh lịch tôn dáng')">💼 Set công sở</button>
          <button class="btn btn-xs btn-outline-dark rounded-pill" onclick="toggleAiSizeDrawer()">📏 Đo size AI</button>
          <button class="btn btn-xs btn-outline-dark rounded-pill" onclick="handleAiChipClick('Mã giảm giá hôm nay')">🎁 Voucher 10%</button>
        </div>
        <span class="ai-timestamp">Velora AI Stylist • Trực tuyến</span>
      </div>
    </div>
  `;
  showToast('Đã làm mới cuộc trò chuyện với AI Stylist!');
  scrollAiChatToBottom();
}

// --- SIMULATED VOICE INPUT ---
function simulateVoiceInput() {
  const overlay = document.getElementById('aiVoiceOverlay');
  const hint = document.getElementById('aiVoicePromptHint');
  if (!overlay) return;

  const samplePrompts = [
    "Tư vấn cho mình set đầm đi tiệc tối sang trọng",
    "Gợi ý outfit công sở thanh lịch tôn dáng cho nữ",
    "Mình cao 1m62 nặng 51kg nên chọn size nào mặc đẹp?",
    "Có mã voucher ưu đãi nào hot hôm nay không?",
    "Gợi ý phối đồ nam blazer lịch lãm phong cách Hàn Quốc",
    "Săn deal Flash Sale giờ vàng hôm nay"
  ];
  const chosenPrompt = samplePrompts[Math.floor(Math.random() * samplePrompts.length)];
  if (hint) hint.textContent = `"${chosenPrompt}"`;

  overlay.classList.add('active');

  if (aiVoiceTimeout) clearTimeout(aiVoiceTimeout);
  aiVoiceTimeout = setTimeout(() => {
    overlay.classList.remove('active');
    const input = document.getElementById('aiChatInput');
    if (input) input.value = chosenPrompt;
    sendAiMessage();
  }, 1300);
}

function cancelVoiceInput() {
  const overlay = document.getElementById('aiVoiceOverlay');
  if (overlay) overlay.classList.remove('active');
  if (aiVoiceTimeout) clearTimeout(aiVoiceTimeout);
}

// --- SEND AI MESSAGE & STREAMING RESPONSE ---
function sendAiMessage(customText = null) {
  const input = document.getElementById('aiChatInput');
  const text = customText || (input ? input.value.trim() : '');
  if (!text) return;

  if (input && !customText) input.value = '';

  const body = document.getElementById('aiChatBody');
  if (!body) return;

  body.insertAdjacentHTML('beforeend', `
    <div class="ai-message user">
      <div class="ai-msg-bubble">
        ${escapeHtml(text)}
        <span class="ai-timestamp text-end">Vừa xong</span>
      </div>
    </div>
  `);
  scrollAiChatToBottom();

  const typingId = 'typingIndicator_' + Date.now();
  body.insertAdjacentHTML('beforeend', `
    <div id="${typingId}" class="ai-message bot">
      <div class="ai-chat-avatar" style="width:30px; height:30px; font-size:0.9rem;">V</div>
      <div class="ai-typing-indicator">
        <span class="ai-typing-dot"></span>
        <span class="ai-typing-dot"></span>
        <span class="ai-typing-dot"></span>
      </div>
    </div>
  `);
  scrollAiChatToBottom();

  setTimeout(() => {
    const typingElem = document.getElementById(typingId);
    if (typingElem) typingElem.remove();

    let response = '';
    try {
      response = generateAiAnswer(text);
    } catch (err) {
      console.error('AI Stylist Error:', err);
      response = `
        <div>
          Xin chào quý khách! AI Stylist luôn sẵn sàng hỗ trợ bạn. Bạn có thể chọn một trong các gợi ý bên dưới hoặc hỏi về size, mẫu đầm, blazer nhé:
          <div class="d-flex flex-wrap gap-1 mt-2">
            <button class="btn btn-xs btn-outline-dark rounded-pill" onclick="handleAiChipClick('Tư vấn size')">📏 Bảng size</button>
            <button class="btn btn-xs btn-outline-dark rounded-pill" onclick="handleAiChipClick('Gợi ý phối đồ')">✨ Phối đồ</button>
            <button class="btn btn-xs btn-outline-dark rounded-pill" onclick="handleAiChipClick('Mã giảm giá hôm nay')">🎁 Mã giảm 10%</button>
          </div>
        </div>
      `;
    }

    body.insertAdjacentHTML('beforeend', `
      <div class="ai-message bot">
        <div class="ai-chat-avatar" style="width:30px; height:30px; font-size:0.9rem;">V</div>
        <div class="ai-msg-bubble">
          ${response}
          <span class="ai-timestamp">Velora AI Stylist 2.0 • Vừa xong</span>
        </div>
      </div>
    `);
    scrollAiChatToBottom();
  }, 500);
}

// --- INTELLIGENT AI ANSWER GENERATOR ---
function generateAiAnswer(query) {
  const q = (query || '').toLowerCase().trim();

  // 1. SYSTEM CHECK / "SAO KHÔNG TRẢ LỜI" / "KIỂM TRA LẠI" / TEST
  if (q.includes('kiểm tra') || q.includes('test') || q.includes('không trả lời') || q.includes('sao ko') || q.includes('sao không') || q.includes('có nghe') || q.includes('hoạt động') || q.includes('bị lỗi') || q.includes('bị đơ') || q.includes('bị lag') || q.includes('đứng hình')) {
    return `
      <div>
        ✨ <b>Dạ em đây ạ! Velora AI Stylist 2.0 PRO đang trực tuyến và phản hồi ngay lập tức 24/7!</b><br><br>
        Em luôn sẵn sàng hỗ trợ quý khách về phối đồ, chọn size, tìm kiếm sản phẩm và mã giảm giá. Quý khách muốn em hỗ trợ gì trước ạ:
        <div class="mt-2 d-flex flex-wrap gap-1">
          <button class="btn btn-xs btn-outline-dark rounded-pill" onclick="handleAiChipClick('Gợi ý đầm đi tiệc sang chảnh')">👗 Đầm dự tiệc</button>
          <button class="btn btn-xs btn-outline-dark rounded-pill" onclick="handleAiChipClick('Set đồ công sở thanh lịch tôn dáng')">💼 Set công sở</button>
          <button class="btn btn-xs btn-outline-dark rounded-pill" onclick="toggleAiSizeDrawer()">📏 Đo size AI</button>
          <button class="btn btn-xs btn-outline-dark rounded-pill" onclick="handleAiChipClick('Mã giảm giá hôm nay')">🎁 Voucher 10%</button>
        </div>
      </div>
    `;
  }

  // 2. GREETINGS / CHÀO HỎI / GIỚI THIỆU / BẠN LÀ AI
  if (q.includes('chào') || q.includes('alo') || q.includes('hello') || q.includes('hi ') || q === 'hi' || q.includes('bạn là ai') || q.includes('giới thiệu') || q.includes('shop ơi') || q.includes('admin') || q === 'tư vấn' || q === 'tư vấn giúp' || q === 'tư vấn giúp mình') {
    return `
      <div>
        Xin chào quý khách! Mình là <b>Velora AI Stylist 2.0</b> — Chuyên gia định hình phong cách cá nhân & tư vấn thời trang của Velora ✨.<br><br>
        Hôm nay bạn cần mình hỗ trợ chọn set đồ cho dịp nào hay cần tư vấn size, kiểm tra ưu đãi Flash Sale hôm nay?
        <div class="fw-semibold text-secondary small mt-2 mb-1">Top thiết kế được yêu thích nhất tuần này:</div>
        ${renderAiProductCards(['na-2', 'wm-2', 'na-1'])}
      </div>
    `;
  }

  // 3. POLICY, SHOWROOM, HOTLINE, ĐỔI TRẢ
  if (q.includes('đổi trả') || q.includes('bảo hành') || q.includes('showroom') || q.includes('cửa hàng') || q.includes('hotline') || q.includes('địa chỉ') || q.includes('chi nhánh')) {
    return `
      <div>
        🏢 <b>Chính sách & Hệ thống cửa hàng Velora:</b><br><br>
        • <b>Hotline CSKH:</b> <b class="text-dark">1900 8899</b> (08:30 - 22:00 hàng ngày)<br>
        • <b>Hệ thống:</b> 15 Showroom cao cấp tại Hà Nội, TP.HCM, Đà Nẵng, Hải Phòng.<br>
        • <b>Chính sách đổi hàng:</b> Đổi size / mẫu trong vòng <b>15 ngày</b> miễn phí nếu chưa qua sử dụng.<br>
        • <b>Cam kết:</b> 100% sản phẩm thiết kế chuẩn phom dáng, chất liệu cao cấp.
      </div>
    `;
  }

  // 4. SMART SIZE QUERY WITH HEIGHT & WEIGHT
  let parsedH = null;
  let parsedW = null;
  let textWithoutH = q;

  const mMatch = q.match(/1[m.,](\d{2})/);
  if (mMatch) {
    parsedH = 100 + parseInt(mMatch[1]);
    textWithoutH = q.replace(mMatch[0], ' ');
  } else {
    const cmMatch = q.match(/(\d{3})\s*(?:cm)?/);
    if (cmMatch && parseInt(cmMatch[1]) >= 135 && parseInt(cmMatch[1]) <= 205) {
      parsedH = parseInt(cmMatch[1]);
      textWithoutH = q.replace(cmMatch[0], ' ');
    }
  }

  const kgMatch = textWithoutH.match(/(\d{2,3})\s*(?:kg|kí|cân)?/);
  if (kgMatch && parseInt(kgMatch[1]) >= 35 && parseInt(kgMatch[1]) <= 125) {
    parsedW = parseInt(kgMatch[1]);
  }

  if ((parsedH && parsedW) || q.includes('đo size cho')) {
    const h = parsedH || 162;
    const w = parsedW || 52;
    const isMale = q.includes('nam') || q.includes('men');
    const isOversize = q.includes('oversize') || q.includes('rộng');
    const isSlim = q.includes('slim') || q.includes('tôn dáng');

    let size = 'M';
    if (!isMale) {
      if (w <= 47 || h <= 155) size = 'S';
      else if (w <= 54 || h <= 163) size = 'M';
      else if (w <= 62 || h <= 170) size = 'L';
      else size = 'XL';
    } else {
      if (w <= 58 || h <= 165) size = 'S';
      else if (w <= 67 || h <= 173) size = 'M';
      else if (w <= 76 || h <= 180) size = 'L';
      else if (w <= 86 || h <= 186) size = 'XL';
      else size = 'XXL';
    }

    if (isOversize && size === 'S') size = 'M';
    else if (isOversize && size === 'M') size = 'L';
    else if (isOversize && size === 'L') size = 'XL';

    const bmi = (w / Math.pow(h / 100, 2)).toFixed(1);
    const recoProducts = isMale ? ['na-1', 'mn-1', 'mn-5'] : ['wm-2', 'na-2', 'wm-4'];

    return `
      <div>
        <div class="fw-bold mb-1 text-dark">
          <i class="bi bi-magic text-warning me-1"></i> Kết quả phân tích vóc dáng độc quyền AI Stylist:
        </div>
        <div class="small mb-2 p-2 bg-light rounded border">
          • Giới tính: <b>${isMale ? 'Nam' : 'Nữ'}</b> | Chiều cao: <b>${h}cm</b> | Cân nặng: <b>${w}kg</b><br>
          • Chỉ số BMI: <b>${bmi}</b> (Tỷ lệ cơ thể cân đối lý tưởng ✨)<br>
          • Size chuẩn đề xuất: <span class="badge bg-warning text-dark px-2 py-1 fs-6 fw-bold">SIZE ${size}</span><br>
          • Lời khuyên stylist: <i>${isOversize ? 'Form rộng tạo phong thái phóng khoáng, trẻ trung.' : 'Form vừa vặn tôn trọn eo thon và đường nét cơ thể.'}</i>
        </div>
        <div class="fw-semibold text-secondary small mb-1">Gợi ý sản phẩm chuẩn size & tôn dáng nhất cho bạn:</div>
        ${renderAiProductCards(recoProducts)}
      </div>
    `;
  }

  // 5. GENERAL SIZE QUERY
  if (q.includes('size') || q.includes('kích cỡ') || q.includes('bảng size') || q.includes('vừa không') || q.includes('chọn size')) {
    return `
      <div>
        <b>Bảng size tiêu chuẩn Velora Fashion (Form Á Đông):</b><br><br>
        • <b>Size S:</b> 42kg - 48kg (Cao 1m50 - 1m58)<br>
        • <b>Size M:</b> 49kg - 55kg (Cao 1m58 - 1m65)<br>
        • <b>Size L:</b> 56kg - 62kg (Cao 1m62 - 1m70)<br>
        • <b>Size XL:</b> 63kg - 72kg (Cao 1m68 - 1m78)<br><br>
        <button class="btn btn-sm btn-dark rounded-pill w-100" onclick="toggleAiSizeDrawer()">
          <i class="bi bi-rulers me-1 text-warning"></i> Mở Thước Đo Size AI Tự Động Ngay
        </button>
      </div>
    `;
  }

  // 6. PARTY / EVENING / GALA / TIỆC / DẠ HỘI
  if (q.includes('tiệc') || q.includes('dạ hội') || q.includes('sự kiện') || q.includes('party') || q.includes('prom') || q.includes('đám cưới')) {
    return `
      <div>
        ✨ <b>Bản phối dạ tiệc sang trọng & lộng lẫy:</b><br>
        Để trở thành tâm điểm của buổi tiệc, hãy chọn thiết kế có chi tiết đính kết hoặc chất liệu dạ tweed thượng lưu, kết hợp phụ kiện ngọc trai quý phái:
        ${renderAiProductCards(['wm-5', 'na-2', 'acc-1'])}
      </div>
    `;
  }

  // 7. OFFICE / WORKWEAR / CÔNG SỞ / BLAZER
  if (q.includes('công sở') || q.includes('đi làm') || q.includes('văn phòng') || q.includes('blazer') || q.includes('thanh lịch') || q.includes('đi dạy')) {
    return `
      <div>
        💼 <b>Set đồ công sở thanh lịch & quyền lực:</b><br>
        Tôn vinh thần thái tự tin của quý cô hiện đại với form dáng blazer may đo chuẩn mực cùng chất liệu lụa cao cấp chống nhăn:
        ${renderAiProductCards(['wm-2', 'wm-3', 'wm-4'])}
      </div>
    `;
  }

  // 8. CASUAL / WEEKEND / DẠO PHỐ / CAFE / ĐI CHƠI
  if (q.includes('dạo phố') || q.includes('cafe') || q.includes('cà phê') || q.includes('cuối tuần') || q.includes('hẹn hò') || q.includes('đi chơi')) {
    return `
      <div>
        ☕ <b>Outfit dạo phố cuối tuần nhẹ nhàng & bay bổng:</b><br>
        Sự kết hợp hoàn hảo giữa nét nữ tính của đầm xòe hoa midi cùng túi đeo vai kẹp nách phong cách retro 90s:
        ${renderAiProductCards(['wm-1', 'acc-5', 'na-4'])}
      </div>
    `;
  }

  // 9. MEN'S STYLING
  if (q.includes('nam') || q.includes('men') || q.includes('quý ông') || q.includes('chàng') || q.includes('trai')) {
    return `
      <div>
        🤵 <b>Phong cách quý ông hiện đại & lịch lãm:</b><br>
        Sự kết hợp giữa nét kinh điển cổ điển và tinh thần tối giản, mang lại vẻ ngoài nam tính, cuốn hút:
        ${renderAiProductCards(['na-1', 'mn-1', 'mn-5'])}
      </div>
    `;
  }

  // 10. WOMEN'S GENERAL STYLING / VÁY ĐẦM
  if (q.includes('nữ') || q.includes('women') || q.includes('nàng') || q.includes('tiểu thư') || q.includes('váy') || q.includes('đầm')) {
    return `
      <div>
        🌸 <b>Bộ sưu tập tôn vinh vẻ đẹp nàng thơ Velora:</b><br>
        Những mẫu thiết kế mới nhất vừa cập bến tuần này, may trên nền chất liệu cao cấp mang lại sự thoải mái tuyệt đối:
        ${renderAiProductCards(['wm-2', 'na-2', 'wm-1'])}
      </div>
    `;
  }

  // 11. ÁO / SHIRT / POLO / HOODIE
  if (q.includes('áo') || q.includes('sơ mi') || q.includes('polo') || q.includes('hoodie') || q.includes('sweater') || q.includes('khoác')) {
    return `
      <div>
        🧥 <b>Bộ sưu tập Áo thời thượng mùa mới:</b><br>
        Chất liệu cotton dệt chải kỹ và len dệt kim mềm mịn, tôn dáng và bền đẹp qua nhiều lần giặt:
        ${renderAiProductCards(['na-1', 'na-3', 'wm-3'])}
      </div>
    `;
  }

  // 12. QUẦN & CHÂN VÁY
  if (q.includes('quần') || q.includes('jeans') || q.includes('jean') || q.includes('kaki') || q.includes('chân váy')) {
    return `
      <div>
        👖 <b>Các mẫu Quần & Chân váy tôn dáng chuẩn mực:</b><br>
        Đường cắt cúp tinh tế, cạp cao hack dáng chân dài miên man:
        ${renderAiProductCards(['na-4', 'wm-4', 'mn-5'])}
      </div>
    `;
  }

  // 13. ACCESSORIES / PHỤ KIỆN
  if (q.includes('phụ kiện') || q.includes('túi') || q.includes('kính') || q.includes('ngọc trai') || q.includes('trang sức') || q.includes('dép') || q.includes('giày')) {
    return `
      <div>
        💎 <b>Chi tiết nhỏ — Phong cách lớn:</b><br>
        Điểm nhấn hoàn hảo nâng tầm bất kỳ bộ trang phục nào từ bình thường trở nên sang trọng và ấn tượng:
        ${renderAiProductCards(['acc-1', 'acc-5', 'fs-3'])}
      </div>
    `;
  }

  // 14. VOUCHER / COUPON / DISCOUNT
  if (q.includes('mã') || q.includes('giảm giá') || q.includes('voucher') || q.includes('khuyến mãi') || q.includes('coupon') || q.includes('ưu đãi')) {
    return `
      <div>
        🎁 <b>Đặc quyền voucher VIP dành riêng cho bạn hôm nay:</b>
        <div class="ai-voucher-card">
          <div>
            <div class="ai-voucher-code">VELORA10</div>
            <div class="small text-muted" style="font-size:0.75rem;">Giảm ngay 10% tổng hóa đơn</div>
          </div>
          <button class="btn btn-xs btn-warning text-dark fw-bold rounded-pill" onclick="applyCouponCodeViaValue('VELORA10')">
            Áp dụng
          </button>
        </div>
        <div class="ai-voucher-card">
          <div>
            <div class="ai-voucher-code">FREESHIP</div>
            <div class="small text-muted" style="font-size:0.75rem;">Miễn phí ship toàn quốc từ 500k</div>
          </div>
          <button class="btn btn-xs btn-dark rounded-pill" onclick="applyCouponCodeViaValue('FREESHIP')">
            Áp dụng
          </button>
        </div>
      </div>
    `;
  }

  // 15. FLASH SALE
  if (q.includes('flash') || q.includes('sale') || q.includes('giờ vàng') || q.includes('giá sốc') || q.includes('deal')) {
    return `
      <div>
        ⚡ <b>Flash Sale Giờ Vàng — Giảm sốc tới 58%:</b><br>
        Số lượng giới hạn trong khung giờ hôm nay. Hãy nhanh tay thêm vào giỏ hàng kẻo lỡ:
        ${renderAiProductCards(['fs-1', 'fs-2', 'fs-3'])}
        <div class="mt-2 text-center">
          <a href="flash-sale.html" class="btn btn-sm btn-danger rounded-pill w-100 fw-bold">
            ⚡ Xem Toàn Bộ Flash Sale Giờ Vàng
          </a>
        </div>
      </div>
    `;
  }

  // 16. ORDER TRACKING
  if (q.includes('đơn hàng') || q.includes('vận chuyển') || q.includes('tra cứu') || q.includes('giao hàng') || q.includes('ship')) {
    return `
      <div>
        📦 <b>Thông tin vận chuyển đơn hàng gần nhất:</b>
        <div class="ai-tracker-box">
          <div class="d-flex justify-content-between align-items-center mb-1">
            <span class="fw-bold small text-dark">Mã vận đơn: #VELORA-849201</span>
            <span class="badge bg-success" style="font-size:0.65rem;">Đang vận chuyển</span>
          </div>
          <div class="small text-muted mb-2" style="font-size:0.75rem;">
            Đơn vị: <b>GHN Express</b> • Dự kiến: <b>24h - 48h tới</b>
          </div>
          <div class="ai-stepper">
            <div class="ai-step completed">
              <div class="ai-step-dot"><i class="bi bi-check"></i></div>
              <span>Đặt hàng</span>
            </div>
            <div class="ai-step completed">
              <div class="ai-step-dot"><i class="bi bi-check"></i></div>
              <span>Đóng gói</span>
            </div>
            <div class="ai-step active">
              <div class="ai-step-dot"><i class="bi bi-truck"></i></div>
              <span>Đang giao</span>
            </div>
            <div class="ai-step">
              <div class="ai-step-dot"><i class="bi bi-house"></i></div>
              <span>Đã nhận</span>
            </div>
          </div>
        </div>
        <div class="mt-2 text-center">
          <a href="account.html" class="btn btn-xs btn-outline-dark rounded-pill">
            Xem chi tiết tại Trang Tài Khoản
          </a>
        </div>
      </div>
    `;
  }

  // 17. GENERAL FALLBACK
  return `
    <div>
      Dạ, Velora AI Stylist rất hân hạnh được hỗ trợ bạn về: "<i>${escapeHtml(query)}</i>"!<br><br>
      Để giúp bạn chọn được bộ trang phục hoàn mỹ nhất, dưới đây là 2 gợi ý thịnh hành tuần này từ chuyên gia phong cách:
      ${renderAiProductCards(['na-2', 'na-1'])}
      <div class="mt-2 text-muted small" style="font-size:0.75rem;">
        💡 Bạn có thể hỏi: <i>"Đầm đi tiệc"</i>, <i>"Outfit công sở"</i>, hoặc bấm nút <b>Đo size tự động</b> ở trên nhé!
      </div>
    </div>
  `;
}

function handleAiChipClick(chipText) {
  sendAiMessage(chipText);
}

// ==========================================================================
// 12. MULTI-SLIDER INITIALIZER (KEN BURNS ZOOM ON ALL PAGES)
// ==========================================================================
function initAllCarousels() {
  const carouselIds = [
    'heroFashionCarousel',
    'arrivalsHeroCarousel',
    'womenHeroCarousel',
    'menHeroCarousel',
    'accessoriesHeroCarousel',
    'flashSaleHeroCarousel'
  ];

  carouselIds.forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;

    new bootstrap.Carousel(el, {
      interval: 5000,
      ride: 'carousel',
      pause: 'hover',
      wrap: true
    });

    el.addEventListener('slide.bs.carousel', function (e) {
      const indicators = el.querySelectorAll('.hero-indicator-btn');
      indicators.forEach((ind, idx) => {
        if (idx === e.to) {
          ind.classList.add('active');
        } else {
          ind.classList.remove('active');
        }
      });
    });
  });
}

// ==========================================================================
// 13. PAGE ROUTER & CONTENT DISPATCHER
// ==========================================================================
function initPageContent() {
  const page = document.body.dataset.page || 'home';

  applyHeroSlidesToHome();
  applyCategoryBannersToHome();
  applyLookbookMediaToHome();
  applyStoreConfigToUI();

  if (page === 'home') {
    populateGrid('gridHomeHot', PRODUCTS.slice(0, 8), 'add-to-cart');
    populateGrid('gridHomeAo', PRODUCTS.filter(p => p.subCategory === 'ao' || p.subCategory === 'blouse').slice(0, 4), 'add-to-cart');
    populateGrid('gridHomeQuan', PRODUCTS.filter(p => p.subCategory === 'quan' || p.subCategory === 'chan-vay').slice(0, 4), 'add-to-cart');
    populateGrid('gridHomeAcc', PRODUCTS.filter(p => p.category === 'accessories').slice(0, 4), 'view-product');
    populateGrid('gridHomeFlash', PRODUCTS.filter(p => p.tags && p.tags.includes('flash-sale')).slice(0, 4), 'add-to-cart');
  } else if (page === 'new-arrivals') {
    populateGrid('gridNewArrivals', PRODUCTS.filter(p => p.tags && p.tags.includes('new-arrivals')), 'add-to-cart');
  } else if (page === 'women') {
    populateGrid('gridWomen', PRODUCTS.filter(p => p.category === 'women'), 'add-to-cart-pink');
  } else if (page === 'men') {
    // 1. All Men Tops & Shirts (Áo Sơ Mi, Áo Nỉ, Áo Thun, Áo Khoác, Áo Blazer, Áo Polo, v.v.)
    const menAoAll = PRODUCTS.filter(p => p.category === 'men' && (
      p.subCategory === 'ao' || 
      p.subCategory === 'blazer' || 
      (p.name && p.name.toLowerCase().includes('áo')) ||
      (p.name && p.name.toLowerCase().includes('blazer')) ||
      (p.name && p.name.toLowerCase().includes('sơ mi')) ||
      (p.name && p.name.toLowerCase().includes('nỉ')) ||
      (p.name && p.name.toLowerCase().includes('sweater')) ||
      (p.name && p.name.toLowerCase().includes('polo')) ||
      (p.name && p.name.toLowerCase().includes('phông'))
    ));

    // Group 1: Áo Nam Thu Đông / Sơ Mi / Blazer
    const menAoThuDong = menAoAll.filter(p => !p.name.toLowerCase().includes('polo') && !p.name.toLowerCase().includes('cộc') && !p.name.toLowerCase().includes('phông'));
    populateGrid('gridMenAoNi', menAoThuDong.length ? menAoThuDong : menAoAll, 'add-to-cart');

    // Group 2: Áo Xuân Hè & Polo
    const menAoHe = menAoAll.filter(p => p.name.toLowerCase().includes('polo') || p.name.toLowerCase().includes('phông') || p.name.toLowerCase().includes('cộc') || p.name.toLowerCase().includes('t-shirt') || p.name.toLowerCase().includes('ngắn tay'));
    populateGrid('gridMenPolo', menAoHe.length ? menAoHe : menAoAll, 'add-to-cart');

    // Group 3: Quần Nam
    const menQuan = PRODUCTS.filter(p => p.category === 'men' && (p.subCategory === 'quan' || (p.name && p.name.toLowerCase().includes('quần'))));
    populateGrid('gridMenQuan', menQuan, 'add-to-cart');

    // Group 4: Phụ Kiện Nam
    const menAcc = PRODUCTS.filter(p => p.category === 'accessories' && ((p.tags && p.tags.includes('men')) || (p.name && (p.name.toLowerCase().includes('nam') || p.name.toLowerCase().includes('dây lưng') || p.name.toLowerCase().includes('kính') || p.name.toLowerCase().includes('giày')))));
    populateGrid('gridMenAcc', menAcc.length ? menAcc : PRODUCTS.filter(p => p.category === 'accessories').slice(0, 4), 'view-product');

    // Group 5: Toàn Bộ BST Nam (#gridMenAll)
    filterProducts('men', 'all');
    const totalMenCount = document.getElementById('menTotalCount');
    if (totalMenCount) {
      const allMen = PRODUCTS.filter(p => p.category === 'men' || (p.category === 'accessories' && p.tags && p.tags.includes('men')));
      totalMenCount.textContent = allMen.length;
    }
  } else if (page === 'accessories') {
    populateGrid('gridAccessories', PRODUCTS.filter(p => p.category === 'accessories'), 'view-product');
  } else if (page === 'flash-sale') {
    populateGrid('gridFlashSale', PRODUCTS.filter(p => (p.tags && p.tags.includes('flash-sale')) || p.oldPrice), 'add-to-cart');
  }
}

// DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  initPageContent();
  initAllCarousels();
  initFlashSaleTimer();
  initLiveSearch();
  updateCartUI();
  updateWishlistBadge();
  updateAccountUI();
  if (typeof adminRenderSupabaseSec === 'function' && document.getElementById('admSec-supabase')) {
    adminRenderSupabaseSec();
  }

  // Auto-pull fresh data from Supabase Cloud and listen to realtime changes
  if (typeof autoPullFromCloud === 'function') {
    autoPullFromCloud(true);
  }
  if (typeof setupSupabaseRealtime === 'function') {
    setupSupabaseRealtime();
  }

  // Robust cleanup for any modal backdrops
  document.querySelectorAll('.modal').forEach(m => {
    m.addEventListener('hidden.bs.modal', () => {
      if (!document.querySelector('.modal.show')) {
        document.querySelectorAll('.modal-backdrop').forEach(b => b.remove());
        document.body.classList.remove('modal-open');
        document.body.style.removeProperty('overflow');
        document.body.style.removeProperty('padding-right');
      }
    });
  });

  // AI chat enter listener
  const aiInput = document.getElementById('aiChatInput');
  if (aiInput) {
    aiInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        sendAiMessage();
      }
    });
  }

  // Newsletter forms
  document.querySelectorAll('.newsletter-form').forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = form.querySelector('input[type="email"]');
      if (input && input.value) {
        showToast(`Cảm ơn bạn! Mã voucher 10% <b>VELORA10</b> đã được gửi tới <b>${input.value}</b>`);
        input.value = '';
      }
    });
  });
});

// ==========================================================================
// 14. INTERACTIVE LOOKBOOK LIGHTBOX & OUTFIT SYSTEM
// ==========================================================================
const LOOKBOOK_ITEMS = {
  'lb-home-1': {
    id: 'lb-home-1',
    title: 'Phố Thị Rực Rỡ • Streetwear High-Fashion',
    subtitle: 'Năng động, cá tính và bắt trọn mọi ánh nhìn nơi đô thị sầm uất.',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1000&auto=format&fit=crop&q=85',
    tag: '#STREET_CHIC',
    hotspot: { x: '50%', y: '42%', text: 'Set Áo Nỉ & Quần Jogger Vàng Rực • 649.000đ' },
    total: '1.248.000đ',
    products: [
      { id: 'm3', name: 'Áo Hoodie Nỉ Bông Dày Dặn 380gsm', price: 349000, img: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=200&auto=format&fit=crop&q=80' },
      { id: 'm4', name: 'Quần Parachute Túi Hộp Ống Rộng', price: 399000, img: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=200&auto=format&fit=crop&q=80' },
      { id: 'm12', name: 'Giày Sneaker Chunky Retro Sole', price: 799000, img: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=200&auto=format&fit=crop&q=80' }
    ]
  },
  'lb-home-2': {
    id: 'lb-home-2',
    title: 'Lãng Tử Cổ Điển • Vintage Fedora Style',
    subtitle: 'Vẻ lãng mạn phong trần kết hợp mũ fedora và áo thun basic tối giản.',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=1000&auto=format&fit=crop&q=85',
    tag: '#VINTAGE_MOOD',
    hotspot: { x: '52%', y: '48%', text: 'Áo Phông Cotton 250gsm • 219.000đ' },
    total: '898.000đ',
    products: [
      { id: 'm7', name: 'Áo Phông Nam Basic Premium Form Rộng', price: 219000, img: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=200&auto=format&fit=crop&q=80' },
      { id: 'm10', name: 'Quần Kaki Regular Cạp Chun Co Giãn', price: 389000, img: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=200&auto=format&fit=crop&q=80' },
      { id: 'a5', name: 'Kính Mát Retro Tortoise gọng đồi mồi', price: 289000, img: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=200&auto=format&fit=crop&q=80' }
    ]
  },
  'lb-home-3': {
    id: 'lb-home-3',
    title: 'Nghệ Thuật Đương Đại • High-Fashion Editorial',
    subtitle: 'Táo bạo với họa tiết monochrome tương phản cùng đường may couture chuẩn quốc tế.',
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=1000&auto=format&fit=crop&q=85',
    tag: '#CONTEMPORARY_ART',
    hotspot: { x: '54%', y: '40%', text: 'Set Đầm Xòe Nghệ Thuật • 990.000đ' },
    total: '1.789.000đ',
    products: [
      { id: 'w1', name: 'Đầm Xòe Floral Dáng Midi Nữ Cao Cấp', price: 549000, img: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=200&auto=format&fit=crop&q=80' },
      { id: 'a1', name: 'Túi Mini Quai Ngọc Trai Đính Đá', price: 459000, img: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=200&auto=format&fit=crop&q=80' },
      { id: 'w8', name: 'Giày Cao Gót Mũi Nhọn Satin Đính Khóa', price: 589000, img: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=200&auto=format&fit=crop&q=80' }
    ]
  },
  'lb-home-4': {
    id: 'lb-home-4',
    title: 'Quý Ông Lịch Lãm • Bespoke Navy Suit',
    subtitle: 'Bộ suit may đo cao cấp chuẩn phong thái quý tộc, khẳng định đẳng cấp và uy quyền.',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1000&auto=format&fit=crop&q=85',
    tag: '#GENTLEMAN_BESPOKE',
    hotspot: { x: '48%', y: '35%', text: 'Áo Blazer Nam Form Rộng Classic • 689.000đ' },
    total: '1.990.000đ',
    products: [
      { id: 'm1', name: 'Áo Blazer Nam Form Rộng Classic Dạ Mịn', price: 689000, img: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=200&auto=format&fit=crop&q=80' },
      { id: 'm9', name: 'Quần Tây Xếp Ly Suông Công Sở Cao Cấp', price: 459000, img: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=200&auto=format&fit=crop&q=80' },
      { id: 'a3', name: 'Dây Lưng Da Bò Ý Khóa Kim Mạ Vàng', price: 320000, img: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=200&auto=format&fit=crop&q=80' }
    ]
  },
  'lb-women-1': {
    id: 'lb-women-1',
    title: 'Dịu Dàng Nữ Tính • Set Váy Tweed Tiểu Thư',
    subtitle: 'Vẻ đẹp trong trẻo, yêu kiều với sợi dạ dệt ánh kim và phom dáng chữ A tôn eo.',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1000&auto=format&fit=crop&q=85',
    tag: '#ELEGANT_LADY',
    hotspot: { x: '50%', y: '40%', text: 'Set Váy Dạ Tweed Tiểu Thư Nữ • 799.000đ' },
    total: '1.847.000đ',
    products: [
      { id: 'w2', name: 'Set Váy Dạ Tweed Tiểu Thư Nữ', price: 799000, img: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=200&auto=format&fit=crop&q=80' },
      { id: 'a1', name: 'Túi Mini Quai Ngọc Trai Đính Đá', price: 459000, img: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=200&auto=format&fit=crop&q=80' },
      { id: 'w8', name: 'Giày Cao Gót Mũi Nhọn Satin', price: 589000, img: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=200&auto=format&fit=crop&q=80' }
    ]
  },
  'lb-women-2': {
    id: 'lb-women-2',
    title: 'Quý Cô Công Sở • Office Chic Chuẩn Mực',
    subtitle: 'Sắc sảo, chuyên nghiệp và đầy cuốn hút trong từng bước chân nơi văn phòng.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=1000&auto=format&fit=crop&q=85',
    tag: '#OFFICE_CHIC',
    hotspot: { x: '52%', y: '45%', text: 'Áo Sơ Mi Lụa Cổ V • 329.000đ' },
    total: '1.147.000đ',
    products: [
      { id: 'w3', name: 'Áo Sơ Mi Lụa Cổ V Tay Phồng Nữ', price: 329000, img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80' },
      { id: 'w6', name: 'Quần Tây Xếp Ly Suông Công Sở', price: 459000, img: 'https://images.unsplash.com/photo-1584273143981-41c073dfe8f8?w=200&auto=format&fit=crop&q=80' },
      { id: 'a4', name: 'Túi Đeo Vai Baguette Da Mềm', price: 359000, img: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=200&auto=format&fit=crop&q=80' }
    ]
  },
  'lb-women-3': {
    id: 'lb-women-3',
    title: 'Thanh Lịch Đô Thị • Casual Weekend Vibes',
    subtitle: 'Thoải mái dạo phố cuối tuần với nét phóng khoáng, trẻ trung hiện đại.',
    image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=1000&auto=format&fit=crop&q=85',
    tag: '#WEEKEND_MOOD',
    hotspot: { x: '48%', y: '38%', text: 'Áo Blazer Nữ Form Rộng • 858.000đ' },
    total: '1.417.000đ',
    products: [
      { id: 'w4', name: 'Áo Khoác Bomber Da Lộn Nữ', price: 858000, img: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=200&auto=format&fit=crop&q=80' },
      { id: 'w7', name: 'Chân Váy Chữ A Kèm Thắt Lưng', price: 299000, img: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=200&auto=format&fit=crop&q=80' },
      { id: 'a5', name: 'Kính Mát Retro Tortoise', price: 260000, img: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=200&auto=format&fit=crop&q=80' }
    ]
  },
  'lb-women-4': {
    id: 'lb-women-4',
    title: 'Dạ Hội Quý Phái • Glamour Night Out',
    subtitle: 'Lộng lẫy và kiêu hãnh dưới ánh đèn dạ tiệc với chất liệu lụa satin ôm sát.',
    image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=1000&auto=format&fit=crop&q=85',
    tag: '#NIGHT_GLAMOUR',
    hotspot: { x: '52%', y: '42%', text: 'Đầm Cocktail Silk Dạ Hội • 1.290.000đ' },
    total: '2.148.000đ',
    products: [
      { id: 'w5', name: 'Đầm Cocktail Silk Xẻ Tà Dạ Hội', price: 1290000, img: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=200&auto=format&fit=crop&q=80' },
      { id: 'a2', name: 'Dây Chuyền Ngọc Trai Nuôi Tự Nhiên', price: 189000, img: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=200&auto=format&fit=crop&q=80' },
      { id: 'w8', name: 'Giày Cao Gót Mũi Nhọn Satin', price: 589000, img: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=200&auto=format&fit=crop&q=80' }
    ]
  }
};

function openLookbookModal(lookId) {
  const look = LOOKBOOK_ITEMS[lookId];
  if (!look) return;

  const content = document.getElementById('lookbookModalContent');
  if (!content) return;

  const productRows = look.products.map(p => `
    <div class="outfit-item-row">
      <div class="d-flex align-items-center gap-2">
        <img src="${p.img || look.image}" alt="${p.name}" class="rounded-3" style="width: 44px; height: 44px; object-fit: cover;">
        <div>
          <h6 class="small fw-bold m-0 text-dark">${p.name}</h6>
          <span class="text-danger small fw-bold">${formatCurrency(p.price)}</span>
        </div>
      </div>
      <button class="btn btn-sm btn-outline-dark rounded-pill px-3 py-1" onclick="addToCart('${p.id}');">
        + Thêm
      </button>
    </div>
  `).join('');

  content.innerHTML = `
    <div class="row g-0">
      <div class="col-md-6 position-relative bg-dark">
        <img src="${look.image}" alt="${look.title}" class="outfit-modal-img">
        <div class="position-absolute top-0 start-0 m-3">
          <span class="badge bg-warning text-dark fw-bold px-3 py-1.5 rounded-pill shadow-sm">${look.tag}</span>
        </div>
      </div>
      <div class="col-md-6 p-4 d-flex flex-column justify-content-between bg-white">
        <div>
          <span class="text-uppercase small fw-bold text-danger letter-spacing-1">Bản Phối Thời Thượng 2026</span>
          <h4 class="fw-bold font-serif mt-1 mb-2 text-dark">${look.title}</h4>
          <p class="small text-muted mb-4">${look.subtitle}</p>

          <h6 class="small fw-bold text-uppercase text-muted mb-3 border-bottom pb-2">
            <i class="bi bi-bag-check me-1 text-danger"></i> Chi tiết các món trong set đồ (${look.products.length} sản phẩm):
          </h6>
          <div class="lookbook-outfit-items mb-4">
            ${productRows}
          </div>
        </div>

        <div class="pt-3 border-top">
          <div class="d-flex justify-content-between align-items-center mb-3">
            <span class="text-muted small">Tổng giá trọn bộ set đồ:</span>
            <span class="fs-4 fw-bold text-danger font-serif">${look.total}</span>
          </div>
          <div class="d-grid gap-2">
            <button class="btn btn-dark btn-lg rounded-pill fw-bold shadow-sm d-flex align-items-center justify-content-center gap-2" onclick="addWholeLookToCart('${look.id}')">
              <i class="bi bi-bag-plus-fill"></i> Thêm trọn bộ vào giỏ hàng
            </button>
            <button class="btn btn-outline-secondary btn-sm rounded-pill" onclick="shareLookbook('${look.id}')">
              <i class="bi bi-share me-1"></i> Chia sẻ bản phối này
            </button>
          </div>
        </div>
      </div>
    </div>
  `;

  const modalEl = document.getElementById('lookbookModal');
  if (modalEl) {
    const modal = bootstrap.Modal.getOrCreateInstance(modalEl);
    modal.show();
  }
}

function addWholeLookToCart(lookId) {
  const look = LOOKBOOK_ITEMS[lookId];
  if (!look) return;

  look.products.forEach(p => {
    addToCart(p.id);
  });

  const modalEl = document.getElementById('lookbookModal');
  if (modalEl) {
    const modal = bootstrap.Modal.getInstance(modalEl);
    if (modal) modal.hide();
  }

  showToast(`✨ Đã thêm trọn bộ ${look.products.length} món của set <b>${look.title}</b> vào giỏ hàng!`, 'success');
}

function shareLookbook(lookId) {
  const look = LOOKBOOK_ITEMS[lookId];
  if (!look) return;
  navigator.clipboard.writeText(window.location.href);
  showToast(`Đã sao chép liên kết bản phối <b>${look.title}</b> vào bộ nhớ tạm!`, 'info');
}


// =========================================================================
// NEW FEATURES: ADMIN CRM, QUICK STOCK, SMART FIT, REVIEWS, INVOICE, BUY NOW
// =========================================================================

// --- 1. ADMIN CUSTOMER & MEMBERS CRM ---
function adminRenderCustomersTable() {
  const tbody = document.getElementById('adminCustomersBody');
  if (!tbody) return;

  const regUsers = getRegisteredUsers();
  const custProf = getCustomerProfile();

  const allUsers = [
    {
      id: 'CUST-DEMO',
      name: custProf.name || 'Đặng Minh Anh',
      email: custProf.email || 'minhanh.velora@gmail.com',
      phone: custProf.phone || '0988 123 456',
      membershipTier: custProf.membershipTier || 'VIP GOLD',
      points: custProf.points || 1250,
      avatar: custProf.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100',
      ordersCount: getOrders().length,
      isDemo: true
    },
    ...regUsers.map(u => ({
      id: u.id,
      name: u.name,
      email: u.email,
      phone: u.phone,
      membershipTier: u.membershipTier || 'THÀNH VIÊN MỚI',
      points: u.points || 500,
      avatar: u.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100',
      ordersCount: 0,
      isDemo: false
    }))
  ];

  const countEl = document.getElementById('admNavCustCount');
  if (countEl) countEl.textContent = allUsers.length;
  const totalUsersEl = document.getElementById('admStatTotalUsers');
  if (totalUsersEl) totalUsersEl.textContent = allUsers.length;
  const totalPoints = allUsers.reduce((sum, u) => sum + Number(u.points || 0), 0);
  const totalPointsEl = document.getElementById('admStatTotalPoints');
  if (totalPointsEl) totalPointsEl.textContent = totalPoints.toLocaleString('vi-VN');

  tbody.innerHTML = allUsers.map(u => `
    <tr>
      <td class="ps-3 py-3">
        <div class="d-flex align-items-center gap-2">
          <img src="${u.avatar}" class="rounded-circle border" style="width: 38px; height: 38px; object-fit: cover;">
          <div>
            <div class="fw-bold text-dark">${u.name}</div>
            <div class="small text-muted" style="font-size: 0.72rem;">${u.isDemo ? '<span class="badge bg-secondary">Tài khoản mẫu VIP</span>' : '<span class="badge bg-primary">Đã đăng ký</span>'}</div>
          </div>
        </div>
      </td>
      <td><code>${u.email}</code></td>
      <td>${u.phone}</td>
      <td><span class="badge ${u.membershipTier.includes('GOLD') ? 'bg-warning text-dark' : (u.membershipTier.includes('DIAMOND') ? 'bg-danger' : 'bg-dark')} px-2.5 py-1 rounded-pill">${u.membershipTier}</span></td>
      <td><b class="text-warning">${Number(u.points || 0).toLocaleString('vi-VN')}</b> pts</td>
      <td><span class="badge bg-light text-dark border">${u.ordersCount} đơn</span></td>
      <td class="text-end pe-3">
        <div class="btn-group btn-group-sm">
          <button type="button" class="btn btn-outline-dark btn-sm rounded-pill px-2 py-0" style="font-size: 0.72rem;" onclick="adminAwardPoints('${u.email}', 500)" title="Cộng 500 điểm thưởng">
            <i class="bi bi-gift-fill text-warning me-1"></i>+500đ
          </button>
          <button type="button" class="btn btn-outline-dark btn-sm rounded-pill px-2 py-0 ms-1" style="font-size: 0.72rem;" onclick="adminUpgradeUserTier('${u.email}')" title="Nâng hạng thẻ VIP">
            <i class="bi bi-arrow-up-circle-fill text-danger me-1"></i>Nâng VIP
          </button>
        </div>
      </td>
    </tr>
  `).join('');
}

function adminAwardPoints(email, pts = 500) {
  if (email.includes('minhanh')) {
    const cust = getCustomerProfile();
    cust.points = (cust.points || 1250) + pts;
    saveCustomerProfile(cust);
    if (currentUser.role === 'customer') {
      currentUser.points = cust.points;
      localStorage.setItem('velora_user', JSON.stringify(currentUser));
    }
  } else {
    const users = getRegisteredUsers();
    const u = users.find(x => x.email === email);
    if (u) {
      u.points = (u.points || 500) + pts;
      saveRegisteredUsers(users);
      if (currentUser.email === email) {
        currentUser.points = u.points;
        localStorage.setItem('velora_user', JSON.stringify(currentUser));
      }
    }
  }
  adminRenderCustomersTable();
  updateAccountUI();
  showToast(`Đã cộng <b>+${pts} điểm thưởng</b> cho khách hàng <b>${email}</b>!`, 'success');
}

function adminUpgradeUserTier(email) {
  const newTier = 'VIP DIAMOND (KIM CƯƠNG)';
  if (email.includes('minhanh')) {
    const cust = getCustomerProfile();
    cust.membershipTier = newTier;
    saveCustomerProfile(cust);
    if (currentUser.role === 'customer') {
      currentUser.membershipTier = newTier;
      localStorage.setItem('velora_user', JSON.stringify(currentUser));
    }
  } else {
    const users = getRegisteredUsers();
    const u = users.find(x => x.email === email);
    if (u) {
      u.membershipTier = newTier;
      saveRegisteredUsers(users);
      if (currentUser.email === email) {
        currentUser.membershipTier = newTier;
        localStorage.setItem('velora_user', JSON.stringify(currentUser));
      }
    }
  }
  adminRenderCustomersTable();
  updateAccountUI();
  showToast(`Đã nâng hạng thành công cho <b>${email}</b> lên <b>${newTier}</b>!`, 'success');
}

// --- 2. ADMIN QUICK STOCK EDIT ---
function adminQuickStockEdit(productId) {
  const p = PRODUCTS.find(x => x.id === productId);
  if (!p) return;
  const modalEl = document.getElementById('adminQuickStockModal');
  if (!modalEl) return;

  const idEl = document.getElementById('quickStockProdId');
  if (idEl) idEl.value = p.id;
  const titleEl = document.getElementById('quickStockProdTitle');
  if (titleEl) titleEl.textContent = p.name;
  const inputEl = document.getElementById('quickStockInput');
  if (inputEl) inputEl.value = p.stock || 0;

  if (window.bootstrap && bootstrap.Modal) {
    const modal = bootstrap.Modal.getOrCreateInstance(modalEl);
    if (modal) modal.show();
  }
}

function saveQuickStock(e) {
  if (e) e.preventDefault();
  const idEl = document.getElementById('quickStockProdId');
  const inputEl = document.getElementById('quickStockInput');
  if (!idEl || !inputEl) return;
  const id = idEl.value;
  const newStock = parseInt(inputEl.value, 10) || 0;
  const p = PRODUCTS.find(x => x.id === id);
  if (p) {
    p.stock = newStock;
    saveCustomProducts();
    adminRenderProductsTable();
    const modalEl = document.getElementById('adminQuickStockModal');
    if (modalEl && window.bootstrap && bootstrap.Modal) {
      const modal = bootstrap.Modal.getInstance(modalEl);
      if (modal) modal.hide();
    }
    showToast(`Đã cập nhật tồn kho sản phẩm <b>${p.name}</b> thành <b>${newStock}</b> cái!`, 'success');
  }
}

// --- 3. SMART FIT CALCULATOR & SIZE GUIDE ---
function openSizeGuideModal() {
  const modalEl = document.getElementById('sizeGuideModal');
  if (modalEl) {
    const modal = bootstrap.Modal.getOrCreateInstance(modalEl);
    modal.show();
  }
}

function calculateSmartFit() {
  const gender = document.getElementById('calcGender')?.value || 'women';
  const height = parseInt(document.getElementById('calcHeight')?.value || '165', 10);
  const weight = parseInt(document.getElementById('calcWeight')?.value || '52', 10);

  let recSize = 'M';
  let desc = 'Phom dáng vừa vặn, tôn dáng và cử động thoải mái.';

  if (gender === 'women') {
    if (weight < 45 || height < 155) { recSize = 'XS'; desc = 'Phom dáng nhỏ nhắn, ôm nhẹ vừa vặn.'; }
    else if (weight <= 50) { recSize = 'S'; desc = 'Tôn đường cong tự nhiên, chuẩn phom quý cô.'; }
    else if (weight <= 56) { recSize = 'M'; desc = 'Vừa vặn thoải mái, chuẩn phom thiết kế Velora.'; }
    else if (weight <= 63) { recSize = 'L'; desc = 'Rộng rãi nhẹ nhàng, che khuyết điểm tinh tế.'; }
    else { recSize = 'XL'; desc = 'Phom suông thoải mái, cử động linh hoạt.'; }
  } else {
    if (weight < 58 || height < 165) { recSize = 'S'; desc = 'Phom slimfit vừa vặn cho quý ông nhỏ nhắn.'; }
    else if (weight <= 66) { recSize = 'M'; desc = 'Chuẩn phom dáng người Việt Nam, thoải mái và lịch lãm.'; }
    else if (weight <= 75) { recSize = 'L'; desc = 'Đứng phom vai, tôn vẻ đĩnh đạc và nam tính.'; }
    else if (weight <= 84) { recSize = 'XL'; desc = 'Rộng rãi, lịch thiệp và sang trọng.'; }
    else { recSize = 'XXL'; desc = 'Phom dáng may đo phóng khoáng, cử động tối đa.'; }
  }

  const box = document.getElementById('calcResultBox');
  const sizeEl = document.getElementById('calcResultSize');
  const descEl = document.getElementById('calcResultDesc');

  if (sizeEl) sizeEl.textContent = `Size ${recSize}`;
  if (descEl) descEl.textContent = desc;
  if (box) box.classList.remove('d-none');
}

// --- 4. PRODUCT REVIEWS & RATINGS ---
function openReviewModal(productId) {
  const p = PRODUCTS.find(x => x.id === productId);
  if (!p) return;
  const modalEl = document.getElementById('productReviewModal');
  if (!modalEl) return;

  document.getElementById('reviewProdId').value = p.id;
  document.getElementById('reviewProdName').textContent = p.name;
  document.getElementById('reviewProdPrice').textContent = formatCurrency(p.price);
  document.getElementById('reviewProdThumb').src = p.image || 'logo_crop.png';
  document.getElementById('reviewAuthorName').value = (currentUser && currentUser.name) || '';
  setReviewRating(5);

  const modal = bootstrap.Modal.getOrCreateInstance(modalEl);
  modal.show();
}

function setReviewRating(starCount) {
  const valInput = document.getElementById('reviewRatingVal');
  if (valInput) valInput.value = starCount;
  const labels = ['', 'Rất không hài lòng (1/5)', 'Chưa hài lòng (2/5)', 'Bình thường (3/5)', 'Hài lòng (4/5)', 'Tuyệt vời, rất hài lòng (5/5 sao)'];
  const labelEl = document.getElementById('reviewRatingLabel');
  if (labelEl) labelEl.textContent = labels[starCount] || `${starCount}/5 sao`;

  document.querySelectorAll('#reviewStarWrap .review-star').forEach((star, idx) => {
    if (idx < starCount) {
      star.className = 'bi bi-star-fill review-star text-warning';
    } else {
      star.className = 'bi bi-star review-star text-muted';
    }
  });
}

function saveProductReview(e) {
  if (e) e.preventDefault();
  const prodId = document.getElementById('reviewProdId').value;
  const stars = parseInt(document.getElementById('reviewRatingVal').value, 10) || 5;
  const author = document.getElementById('reviewAuthorName').value.trim();
  const comment = document.getElementById('reviewCommentText').value.trim();

  if (!author || !comment) {
    showToast('Vui lòng nhập họ tên và nhận xét của bạn!', 'warning');
    return;
  }

  const stored = JSON.parse(localStorage.getItem('velora_product_reviews') || '[]');
  const reviewObj = {
    id: 'REV-' + Date.now(),
    prodId,
    author,
    stars,
    comment,
    date: new Date().toLocaleDateString('vi-VN')
  };
  stored.unshift(reviewObj);
  localStorage.setItem('velora_product_reviews', JSON.stringify(stored));

  try {
    const sb = getSupabaseClient();
    if (sb) {
      sb.from('product_reviews').upsert([{
        id: reviewObj.id,
        prod_id: reviewObj.prodId,
        author: reviewObj.author,
        stars: reviewObj.stars,
        comment: reviewObj.comment,
        date: reviewObj.date
      }]).then(() => {}).catch(err => console.warn(err));
    }
  } catch (e) {}

  const modalEl = document.getElementById('productReviewModal');
  if (modalEl) {
    const modal = bootstrap.Modal.getInstance(modalEl);
    if (modal) modal.hide();
  }
  showToast(`Cảm ơn <b>${author}</b>! Đánh giá <b>${stars} sao</b> của bạn đã được ghi nhận.`, 'success');
}

// --- 5. QUICK BUY / EXPRESS CHECKOUT ---
function buyNow(productId) {
  addToCart(productId, 'M', 1);
  showToast('Đang chuyển đến trang thanh toán...', 'info');
  window.location.href = 'cart.html';
}

// --- 6. PRINT INVOICE & DELIVERY ORDER SLIP ---
function printOrderInvoice(orderId) {
  const orders = getOrders();
  const o = orders.find(x => x.id === orderId);
  if (!o) {
    showToast('Không tìm thấy đơn hàng cần in hóa đơn!', 'warning');
    return;
  }

  const itemsHtml = (o.items && o.items.length > 0) ? o.items.map(it => `
    <tr>
      <td style="padding: 10px; border-bottom: 1px solid #eee;"><b>${it.name}</b><br><small style="color:#777;">Phân loại: Size ${it.size || 'M'}, ${it.color || 'Tiêu chuẩn'}</small></td>
      <td style="padding: 10px; border-bottom: 1px solid #eee; text-align: center;">${it.quantity || 1}</td>
      <td style="padding: 10px; border-bottom: 1px solid #eee; text-align: right;">${it.priceFormatted || formatCurrency(it.price || 0)}</td>
      <td style="padding: 10px; border-bottom: 1px solid #eee; text-align: right; font-weight: bold;">${formatCurrency((it.price || 0) * (it.quantity || 1))}</td>
    </tr>
  `).join('') : `<tr><td colspan="4" style="padding:10px;">${o.itemsSummary || 'Sản phẩm thời trang Velora'}</td></tr>`;

  const printHtml = `
    <!DOCTYPE html>
    <html lang="vi">
    <head>
      <meta charset="UTF-8">
      <title>Hóa Đơn Bán Hàng - ${o.id} - Velora Fashion</title>
      <style>
        body { font-family: 'Times New Roman', serif, Arial; padding: 40px; color: #222; max-width: 800px; margin: auto; }
        .header { display: flex; justify-content: space-between; border-bottom: 2px solid #222; padding-bottom: 15px; margin-bottom: 25px; }
        .logo { font-size: 28px; font-weight: bold; letter-spacing: 2px; }
        .title { text-align: center; font-size: 22px; font-weight: bold; margin-bottom: 20px; text-transform: uppercase; }
        .info-grid { display: flex; justify-content: space-between; margin-bottom: 25px; font-size: 14px; }
        table { width: 100%; border-collapse: collapse; margin-bottom: 25px; font-size: 14px; }
        th { background: #f4f4f4; padding: 10px; text-align: left; border-bottom: 2px solid #ddd; }
        .total-box { text-align: right; margin-bottom: 30px; font-size: 15px; }
        .footer { text-align: center; font-size: 13px; color: #666; border-top: 1px solid #eee; padding-top: 20px; }
      </style>
    </head>
    <body>
      <div class="header">
        <div>
          <div class="logo">VELORA LUXURY</div>
          <div style="font-size: 13px; color: #555;">Thời Trang Thượng Lưu Chuẩn Mực</div>
          <div style="font-size: 13px; color: #555;">Hotline CSKH: 1900 8899 • velora.vn</div>
        </div>
        <div style="text-align: right;">
          <div style="font-weight: bold; font-size: 16px;">MÃ ĐƠN HÀNG: ${o.id}</div>
          <div style="font-size: 13px; color: #555;">Ngày lập: ${o.date || new Date().toLocaleDateString('vi-VN')}</div>
          <div style="font-size: 13px; color: #555;">Trạng thái: <b>${o.status || 'Đang xử lý'}</b></div>
        </div>
      </div>

      <div class="title">PHIẾU GIAO HÀNG & HÓA ĐƠN BÁN HÀNG</div>

      <div class="info-grid">
        <div>
          <b>THÔNG TIN KHÁCH HÀNG:</b><br>
          Người nhận: <b>${o.customerName || (currentUser && currentUser.name) || 'Khách Hàng'}</b><br>
          Số điện thoại: ${o.customerPhone || (currentUser && currentUser.phone) || '0988 123 456'}<br>
          Địa chỉ: ${o.customerAddress || 'Showroom Velora Q.1, TP. HCM'}
        </div>
        <div style="text-align: right;">
          <b>PHƯƠNG THỨC THANH TOÁN:</b><br>
          ${o.paymentMethod || 'Thanh toán khi nhận hàng (COD)'}<br>
          Đơn vị vận chuyển: <b>Velora Express Hỏa Tốc</b>
        </div>
      </div>

      <table>
        <thead>
          <tr>
            <th>Tên sản phẩm</th>
            <th style="text-align: center;">Số lượng</th>
            <th style="text-align: right;">Đơn giá</th>
            <th style="text-align: right;">Thành tiền</th>
          </tr>
        </thead>
        <tbody>
          ${itemsHtml}
        </tbody>
      </table>

      <div class="total-box">
        <div>Tạm tính: <b>${o.totalFormatted || formatCurrency(o.total || 0)}</b></div>
        <div>Phí vận chuyển: <b>0đ (Miễn phí toàn quốc)</b></div>
        <div style="font-size: 18px; color: #b91c1c; font-weight: bold; margin-top: 5px;">TỔNG THANH TOÁN: ${o.totalFormatted || formatCurrency(o.total || 0)}</div>
      </div>

      <div class="footer">
        <p>Cảm ơn quý khách đã tin tưởng và lựa chọn thời trang thượng lưu <b>Velora Luxury</b>!</p>
        <p>Đặc quyền đổi trả miễn phí trong 15 ngày tại 15 showroom trên toàn quốc khi còn nguyên tem mác.</p>
      </div>
      <script>
        window.onload = function() { window.print(); }
      <\/script>
    </body>
    </html>
  `;

  const printWin = window.open('', '_blank', 'width=850,height=900');
  if (printWin) {
    printWin.document.write(printHtml);
    printWin.document.close();
  }
}



// ==============================================================================
// --- INTERACTIVE SUBCATEGORY FILTERING SYSTEM (Áo Phông, Áo Polo, Sơ mi, Tank top, Quần, Phụ kiện, v.v.) ---
// ==============================================================================
function filterSectionSubcategory(sectionGridId, subcatKey, el) {
  // 1. Highlight clicked element if provided
  if (el) {
    const parent = el.closest('.subcat-nav-wrap') || el.parentElement;
    if (parent) {
      parent.querySelectorAll('.subcat-link').forEach(item => {
        item.classList.remove('active', 'fw-bold', 'text-dark');
        item.classList.add('text-muted');
      });
      el.classList.add('active', 'fw-bold', 'text-dark');
      el.classList.remove('text-muted');
    }
  }

  // 2. Determine base pool for the section
  let pool = PRODUCTS;
  let actionType = 'add-to-cart';

  if (sectionGridId === 'gridMenAoNi') {
    pool = PRODUCTS.filter(p => p.category === 'men' && (
      p.subCategory === 'ao' || p.subCategory === 'blazer' ||
      (p.name && (p.name.toLowerCase().includes('áo') || p.name.toLowerCase().includes('blazer') || p.name.toLowerCase().includes('nỉ') || p.name.toLowerCase().includes('len') || p.name.toLowerCase().includes('khoác')))
    ));
    actionType = 'add-to-cart';
  } else if (sectionGridId === 'gridMenPolo') {
    pool = PRODUCTS.filter(p => p.category === 'men' && (
      p.subCategory === 'ao' ||
      (p.name && (p.name.toLowerCase().includes('polo') || p.name.toLowerCase().includes('phông') || p.name.toLowerCase().includes('thun') || p.name.toLowerCase().includes('sơ mi') || p.name.toLowerCase().includes('tank') || p.name.toLowerCase().includes('ba lỗ') || p.name.toLowerCase().includes('cộc')))
    ));
    actionType = 'add-to-cart';
  } else if (sectionGridId === 'gridMenQuan') {
    pool = PRODUCTS.filter(p => p.category === 'men' && (
      p.subCategory === 'quan' || (p.name && p.name.toLowerCase().includes('quần'))
    ));
    actionType = 'add-to-cart';
  } else if (sectionGridId === 'gridMenAcc') {
    pool = PRODUCTS.filter(p => (p.category === 'accessories' || (p.tags && p.tags.includes('men'))) && (
      (p.name && (p.name.toLowerCase().includes('nam') || p.name.toLowerCase().includes('dép') || p.name.toLowerCase().includes('giày') || p.name.toLowerCase().includes('dây lưng') || p.name.toLowerCase().includes('mũ') || p.name.toLowerCase().includes('tất') || p.name.toLowerCase().includes('kính') || p.name.toLowerCase().includes('ví'))) ||
      p.category === 'accessories'
    ));
    actionType = 'view-product';
  } else if (sectionGridId === 'gridHomeAo') {
    pool = PRODUCTS.filter(p => p.subCategory === 'ao' || p.subCategory === 'blouse' || (p.name && (p.name.toLowerCase().includes('áo') || p.name.toLowerCase().includes('blazer'))));
    actionType = 'add-to-cart';
  } else if (sectionGridId === 'gridHomeQuan') {
    pool = PRODUCTS.filter(p => p.subCategory === 'quan' || p.subCategory === 'chan-vay' || (p.name && (p.name.toLowerCase().includes('quần') || p.name.toLowerCase().includes('váy'))));
    actionType = 'add-to-cart';
  } else if (sectionGridId === 'gridHomeAcc') {
    pool = PRODUCTS.filter(p => p.category === 'accessories');
    actionType = 'view-product';
  } else if (sectionGridId === 'gridWomen') {
    pool = PRODUCTS.filter(p => p.category === 'women');
    actionType = 'add-to-cart-pink';
  } else if (sectionGridId === 'gridAccessories') {
    pool = PRODUCTS.filter(p => p.category === 'accessories');
    actionType = 'view-product';
  } else if (sectionGridId === 'gridNewArrivals') {
    pool = PRODUCTS.filter(p => p.tags && p.tags.includes('new-arrivals'));
    actionType = 'add-to-cart';
  } else if (sectionGridId === 'gridFlashSale') {
    pool = PRODUCTS.filter(p => p.tags && p.tags.includes('flash-sale'));
    actionType = 'add-to-cart';
  } else if (sectionGridId === 'gridMenAll') {
    pool = PRODUCTS.filter(p => p.category === 'men' || (p.category === 'accessories' && p.tags && p.tags.includes('men')));
    actionType = 'add-to-cart';
  }

  // 3. Filter pool by subcatKey
  let filtered = pool;
  if (!subcatKey || subcatKey === 'all') {
    filtered = pool;
  } else {
    const k = subcatKey.toLowerCase();
    filtered = pool.filter(p => {
      const name = (p.name || '').toLowerCase();
      const sub = (p.subCategory || '').toLowerCase();
      const tags = (p.tags || []).map(t => t.toLowerCase());

      if (k === 'ao-phong') {
        return name.includes('phông') || name.includes('thun') || name.includes('t-shirt') || tags.includes('ao-phong');
      }
      if (k === 'ao-polo') {
        return name.includes('polo');
      }
      if (k === 'ao-so-mi') {
        return name.includes('sơ mi') || name.includes('oxford') || name.includes('cộc tay') || name.includes('dài tay') || tags.includes('ao-so-mi');
      }
      if (k === 'ao-tank-top') {
        return name.includes('tank') || name.includes('ba lỗ') || tags.includes('ao-tank-top');
      }
      if (k === 'ao-ni') {
        return name.includes('nỉ') || name.includes('sweater') || name.includes('hoodie');
      }
      if (k === 'ao-det-kim') {
        return name.includes('dệt kim') || name.includes('len') || name.includes('cardigan');
      }
      if (k === 'ao-khoac') {
        return name.includes('khoác') || name.includes('bomber') || name.includes('gió') || sub === 'ao-khoac';
      }
      if (k === 'blazer') {
        return name.includes('blazer') || sub === 'blazer';
      }
      if (k === 'quan-dai') {
        return (name.includes('dài') || name.includes('tây') || name.includes('jeans') || name.includes('kaki') || name.includes('parachute')) && !name.includes('short') && !name.includes('đùi');
      }
      if (k === 'quan-short') {
        return name.includes('short') || name.includes('đùi') || name.includes('lửng') || tags.includes('quan-short');
      }
      if (k === 'dep-kep') {
        return name.includes('dép') || name.includes('kẹp') || name.includes('sandal') || tags.includes('dep-kep');
      }
      if (k === 'giay-luoi') {
        return name.includes('giày') || name.includes('lười') || name.includes('loafer') || name.includes('sneaker') || tags.includes('giay-luoi');
      }
      if (k === 'day-lung') {
        return name.includes('lưng') || name.includes('thắt lưng') || name.includes('nịt') || tags.includes('day-lung');
      }
      if (k === 'mu') {
        return name.includes('mũ') || name.includes('nón') || name.includes('fedora') || name.includes('lưỡi trai') || tags.includes('mu');
      }
      if (k === 'tat') {
        return name.includes('tất') || name.includes('vớ') || tags.includes('tat');
      }
      if (k === 'tui-xach') {
        return name.includes('túi') || name.includes('ví') || name.includes('cặp') || sub === 'tui-xach';
      }
      if (k === 'trang-suc') {
        return name.includes('ngọc') || name.includes('khuyên') || name.includes('vòng') || name.includes('dây chuyền') || sub === 'trang-suc';
      }
      if (k === 'kinh-mat') {
        return name.includes('kính') || sub === 'kinh-mat';
      }
      if (k === 'dam-vay') {
        return name.includes('đầm') || name.includes('váy') || sub === 'dam-vay';
      }
      if (k === 'chan-vay') {
        return name.includes('chân váy') || sub === 'chan-vay';
      }
      if (k === 'ao') {
        return sub === 'ao' || sub === 'blazer' || sub === 'blouse' || name.includes('áo') || name.includes('sơ mi') || name.includes('polo');
      }
      if (k === 'quan') {
        return sub === 'quan' || name.includes('quần');
      }
      if (k === 'accessories') {
        return p.category === 'accessories' || sub === 'phu-kien';
      }

      return name.includes(k) || sub.includes(k) || tags.some(t => t.includes(k));
    });
  }

  // 4. Render to grid
  populateGrid(sectionGridId, filtered, actionType);

  // 5. Fallback if empty
  const gridEl = document.getElementById(sectionGridId);
  if (gridEl && filtered.length === 0) {
    gridEl.innerHTML = `
      <div class="col-12 py-5 text-center text-muted">
        <i class="bi bi-inbox fs-2 text-secondary mb-2 d-block"></i>
        <p class="mb-2">Mẫu đang được cập nhật thêm vào danh mục này.</p>
        <button type="button" class="btn btn-sm btn-outline-dark rounded-pill px-3" onclick="filterSectionSubcategory('${sectionGridId}', 'all')">
          Xem tất cả trong mục này
        </button>
      </div>
    `;
  }
}
window.filterSectionSubcategory = filterSectionSubcategory;



// ==============================================================================
// --- SUPABASE CLOUD DATABASE INTEGRATION ---
// Project: dan12 (yekokpbulmfugxaqjosc)
// ==============================================================================
const DEFAULT_SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inlla29rcGJ1bG1mdWd4YXFqb3NjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTQ2ODA5NjcsImV4cCI6MjExMDI1Njk2N30.vfgRMLngaks-or85KdDfAFj2hUDg-pUizYXJJAd5XyY';

if (!localStorage.getItem('velora_supabase_anon_key')) {
  try {
    localStorage.setItem('velora_supabase_anon_key', DEFAULT_SUPABASE_ANON_KEY);
  } catch (e) {}
}

const SUPABASE_CONFIG = {
  url: 'https://yekokpbulmfugxaqjosc.supabase.co',
  anonKey: localStorage.getItem('velora_supabase_anon_key') || DEFAULT_SUPABASE_ANON_KEY,
  projectId: 'yekokpbulmfugxaqjosc'
};

let supabaseClient = null;
function getSupabaseClient() {
  if (supabaseClient) return supabaseClient;
  const key = localStorage.getItem('velora_supabase_anon_key') || SUPABASE_CONFIG.anonKey || DEFAULT_SUPABASE_ANON_KEY;
  if (window.supabase && SUPABASE_CONFIG.url && key) {
    try {
      supabaseClient = window.supabase.createClient(SUPABASE_CONFIG.url, key);
      return supabaseClient;
    } catch (e) {
      console.warn('Lỗi khởi tạo Supabase Client:', e);
    }
  }
  return null;
}

function adminRenderSupabaseSec() {
  const keyInput = document.getElementById('admSupabaseAnonKey');
  const storedKey = localStorage.getItem('velora_supabase_anon_key') || SUPABASE_CONFIG.anonKey || DEFAULT_SUPABASE_ANON_KEY;
  if (keyInput) keyInput.value = storedKey;

  const statusBadge = document.getElementById('supabaseStatusBadge');
  if (statusBadge) {
    if (storedKey) {
      statusBadge.innerHTML = `
        <span class="badge bg-success bg-opacity-10 text-success border border-success px-3 py-2 rounded-pill small">
          <i class="bi bi-cloud-check-fill me-1"></i> Đã kết nối Supabase Cloud: dan12
        </span>
      `;
    } else {
      statusBadge.innerHTML = `
        <span class="badge bg-warning bg-opacity-10 text-dark border border-warning px-3 py-2 rounded-pill small">
          <i class="bi bi-exclamation-triangle-fill text-warning me-1"></i> Chưa cấu hình Anon Key
        </span>
      `;
    }
  }
}

function saveSupabaseConfig() {
  const input = document.getElementById('admSupabaseAnonKey');
  if (!input) return;
  const key = input.value.trim();
  if (!key) {
    showToast('Vui lòng nhập anon key của dự án Supabase!', 'warning');
    return;
  }
  localStorage.setItem('velora_supabase_anon_key', key);
  SUPABASE_CONFIG.anonKey = key;
  supabaseClient = null;
  adminRenderSupabaseSec();
  showToast('Đã lưu cấu hình Supabase Anon Key thành công!', 'success');
  testSupabaseConnection();
}

async function testSupabaseConnection() {
  const client = getSupabaseClient();
  if (!client) {
    showToast('Chưa cấu hình Anon Key hoặc thư viện Supabase chưa sẵn sàng!', 'warning');
    return false;
  }
  showToast('Đang kiểm tra kết nối tới Supabase Cloud...', 'info');
  try {
    const { data, error } = await client.from('products').select('id').limit(1);
    if (error) {
      if (error.code === '42P01') {
        showToast('Kết nối Supabase thành công nhưng bảng dữ liệu chưa được tạo! Hãy mở SQL Editor và chạy file <code>supabase_schema.sql</code>.', 'warning');
      } else {
        showToast('Lỗi Supabase: ' + (error.message || JSON.stringify(error)), 'danger');
      }
      return false;
    }
    showToast('Kết nối Supabase Cloud thành công 100%! Cơ sở dữ liệu sẵn sàng hoạt động.', 'success');
    const statusBadge = document.getElementById('supabaseStatusBadge');
    if (statusBadge) {
      statusBadge.innerHTML = `
        <span class="badge bg-success bg-opacity-10 text-success border border-success px-3 py-2 rounded-pill small">
          <i class="bi bi-cloud-check-fill me-1"></i> Kết Nối Cloud Online (Sẵn sàng)
        </span>
      `;
    }
    return true;
  } catch (err) {
    showToast('Không thể kết nối Supabase: ' + err.message, 'danger');
    return false;
  }
}

async function syncLocalToSupabase() {
  const client = getSupabaseClient();
  if (!client) {
    showToast('Vui lòng dán và lưu Supabase Anon Key trước khi đồng bộ!', 'warning');
    return;
  }

  showToast('Đang đồng bộ toàn bộ dữ liệu lên Supabase Cloud...', 'info');

  try {
    // 1. Sync Products
    const prodsToSync = PRODUCTS.map(p => ({
      id: p.id,
      name: p.name,
      category: p.category || 'women',
      sub_category: p.subCategory || '',
      price: p.price || 0,
      old_price: p.oldPrice || null,
      badge: p.badge || null,
      badge_type: p.badgeType || null,
      image: p.image || '',
      colors: p.colors || [],
      rating: p.rating || 5.0,
      reviews: p.reviews || 0,
      tags: p.tags || [],
      stock: p.stock || 50,
      sold: p.sold || 0
    }));

    const { error: prodErr } = await client.from('products').upsert(prodsToSync);
    if (prodErr) throw new Error('Lỗi sync sản phẩm: ' + prodErr.message);

    // 2. Sync Orders
    const orders = getOrders();
    if (orders.length > 0) {
      const ordersToSync = orders.map(o => ({
        id: o.id,
        date: o.date || new Date().toLocaleDateString('vi-VN'),
        status: o.status || 'Đang giao hàng',
        total: o.total || '0₫',
        recipient: o.recipient || '',
        phone: o.phone || '',
        address: o.address || '',
        payment_method: o.paymentMethod || 'COD',
        items: o.items || [],
        items_summary: o.itemsSummary || ''
      }));
      const { error: ordErr } = await client.from('orders').upsert(ordersToSync);
      if (ordErr) console.warn('Lỗi sync đơn hàng:', ordErr.message);
    }

    // 3. Sync Vouchers
    const vouchers = getVouchers();
    if (vouchers.length > 0) {
      const { error: vErr } = await client.from('vouchers').upsert(vouchers.map(v => ({
        code: v.code,
        discount: v.discount,
        description: v.desc || v.description,
        min_order: v.minOrder,
        badge: v.badge,
        expires: v.expires
      })));
      if (vErr) console.warn('Lỗi sync vouchers:', vErr.message);
    }

    // 4. Sync Reviews
    const reviews = JSON.parse(localStorage.getItem('velora_product_reviews') || '[]');
    if (reviews.length > 0) {
      const { error: revErr } = await client.from('product_reviews').upsert(reviews.map(r => ({
        id: r.id,
        prod_id: r.prodId || r.productId,
        author: r.author,
        stars: r.stars,
        comment: r.comment,
        date: r.date
      })));
      if (revErr) console.warn('Lỗi sync reviews:', revErr.message);
    }

    showToast('Đã đồng bộ thành công toàn bộ sản phẩm, đơn hàng, voucher và đánh giá lên Supabase Cloud!', 'success');
  } catch (e) {
    showToast('Đồng bộ thất bại: ' + e.message, 'danger');
  }
}

async function pullFromSupabase() {
  const client = getSupabaseClient();
  if (!client) {
    showToast('Vui lòng lưu Anon Key trước khi tải dữ liệu!', 'warning');
    return;
  }

  showToast('Đang tải dữ liệu từ Supabase Cloud...', 'info');
  try {
    // 1. Pull Products
    const { data: dbProducts, error: prodErr } = await client.from('products').select('*');
    if (prodErr) throw prodErr;
    if (dbProducts && dbProducts.length > 0) {
      const mapped = dbProducts.map(p => ({
        id: p.id,
        name: p.name,
        category: p.category,
        subCategory: p.sub_category,
        price: Number(p.price),
        oldPrice: p.old_price ? Number(p.old_price) : undefined,
        badge: p.badge,
        badgeType: p.badge_type,
        image: p.image,
        colors: p.colors || [],
        rating: Number(p.rating || 5.0),
        reviews: Number(p.reviews || 0),
        tags: p.tags || [],
        stock: Number(p.stock || 50),
        sold: Number(p.sold || 0)
      }));
      PRODUCTS.length = 0;
      mapped.forEach(item => PRODUCTS.push(item));
      localStorage.setItem('velora_products', JSON.stringify(PRODUCTS));
    }

    // 2. Pull Orders
    const { data: dbOrders, error: ordErr } = await client.from('orders').select('*');
    if (!ordErr && dbOrders && dbOrders.length > 0) {
      const mappedOrders = dbOrders.map(o => ({
        id: o.id,
        date: o.date,
        status: o.status,
        total: o.total,
        recipient: o.recipient,
        phone: o.phone,
        address: o.address,
        paymentMethod: o.payment_method,
        items: o.items || [],
        itemsSummary: o.items_summary
      }));
      localStorage.setItem('velora_orders', JSON.stringify(mappedOrders));
    }

    showToast('Đã cập nhật dữ liệu mới nhất từ Supabase Cloud về trang web!', 'success');
    if (typeof initPageContent === 'function') initPageContent();
    if (typeof adminRenderProductsTable === 'function') adminRenderProductsTable();
    if (typeof adminRenderOrdersTable === 'function') adminRenderOrdersTable();
  } catch (e) {
    showToast('Tải dữ liệu thất bại: ' + e.message, 'danger');
  }
}

async function autoPullFromCloud(quiet = true) {
  const client = getSupabaseClient();
  if (!client) return;

  try {
    // 1. Pull Orders from Supabase (latest first)
    const { data: dbOrders, error: ordErr } = await client.from('orders').select('*').order('created_at', { ascending: false });
    if (!ordErr && dbOrders && dbOrders.length > 0) {
      const mappedOrders = dbOrders.map(o => ({
        id: o.id,
        date: o.date,
        status: o.status,
        total: o.total,
        recipient: o.recipient,
        phone: o.phone,
        address: o.address,
        paymentMethod: o.payment_method,
        items: o.items || [],
        itemsSummary: o.items_summary
      }));
      localStorage.setItem('velora_orders', JSON.stringify(mappedOrders));
      if (typeof renderAccountOrders === 'function') renderAccountOrders();
      if (typeof adminRenderOrdersTable === 'function') adminRenderOrdersTable();
      if (typeof adminUpdateStats === 'function') adminUpdateStats();
    }

    // 2. Pull Products from Supabase
    const { data: dbProducts, error: prodErr } = await client.from('products').select('*');
    if (!prodErr && dbProducts && dbProducts.length > 0) {
      const mapped = dbProducts.map(p => ({
        id: p.id,
        name: p.name,
        category: p.category,
        subCategory: p.sub_category,
        price: Number(p.price),
        oldPrice: p.old_price ? Number(p.old_price) : undefined,
        badge: p.badge,
        badgeType: p.badge_type,
        image: p.image,
        colors: p.colors || [],
        rating: Number(p.rating || 5.0),
        reviews: Number(p.reviews || 0),
        tags: p.tags || [],
        stock: Number(p.stock || 50),
        sold: Number(p.sold || 0)
      }));
      PRODUCTS.length = 0;
      mapped.forEach(item => PRODUCTS.push(item));
      localStorage.setItem('velora_products', JSON.stringify(PRODUCTS));
      if (typeof initPageContent === 'function') initPageContent();
      if (typeof adminRenderProductsTable === 'function') adminRenderProductsTable();
    }

    // 3. Pull Vouchers
    const { data: dbVouchers, error: vErr } = await client.from('vouchers').select('*');
    if (!vErr && dbVouchers && dbVouchers.length > 0) {
      const mappedVouchers = dbVouchers.map(v => ({
        code: v.code,
        title: v.discount,
        description: v.description,
        badge: v.discount,
        minSpend: 0,
        expiry: v.expires,
        color: 'danger',
        type: 'fixed'
      }));
      localStorage.setItem('velora_vouchers', JSON.stringify(mappedVouchers));
      if (typeof renderAccountVouchers === 'function') renderAccountVouchers();
      if (typeof adminRenderVouchersTable === 'function') adminRenderVouchersTable();
    }

    // 4. Pull Users and synchronize Admin & Customer Passwords across all devices
    const { data: dbUsers, error: uErr } = await client.from('users').select('*');
    if (!uErr && dbUsers && dbUsers.length > 0) {
      // Sync Admin Password
      const adminUser = dbUsers.find(u => u.id === 'usr-admin' || u.role === 'admin' || (u.email && u.email.includes('admin')));
      if (adminUser && adminUser.password) {
        localStorage.setItem('velora_admin_password', adminUser.password);
      }

      // Sync Registered Customers
      const mappedCusts = dbUsers.filter(u => u.role !== 'admin' && u.id !== 'usr-admin').map(u => ({
        id: u.id,
        email: u.email,
        password: u.password,
        name: u.name,
        phone: u.phone,
        address: u.address,
        avatar: u.avatar,
        role: u.role || 'customer',
        membershipTier: u.membership_tier,
        points: u.points
      }));
      localStorage.setItem('velora_registered_users', JSON.stringify(mappedCusts));

      // Sync current active session
      if (currentUser && currentUser.email) {
        const foundUser = dbUsers.find(u => u.email && u.email.toLowerCase() === currentUser.email.toLowerCase());
        if (foundUser) {
          currentUser.password = foundUser.password;
          currentUser.name = foundUser.name || currentUser.name;
          currentUser.points = foundUser.points || currentUser.points;
          currentUser.membershipTier = foundUser.membership_tier || currentUser.membershipTier;
          localStorage.setItem('velora_user', JSON.stringify(currentUser));
        }
      }
    }
  } catch (err) {
    console.warn('Auto cloud pull error:', err);
  }
}

function setupSupabaseRealtime() {
  const client = getSupabaseClient();
  if (!client || !client.channel) return;
  try {
    client.channel('velora_realtime_sync')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'orders' }, payload => {
        console.log('Realtime change in orders:', payload);
        autoPullFromCloud(true);
      })
      .on('postgres_changes', { event: '*', schema: 'public', table: 'products' }, payload => {
        console.log('Realtime change in products:', payload);
        autoPullFromCloud(true);
      })
      .on('postgres_changes', { event: '*', schema: 'public', table: 'users' }, payload => {
        console.log('Realtime change in users/passwords:', payload);
        autoPullFromCloud(true);
      })
      .subscribe();
  } catch (e) {
    console.warn('Realtime subscription warning:', e);
  }
}

// Auto sync order creation to Supabase
const originalSubmitCheckout = window.submitCheckout;
// Make functions globally available
window.getSupabaseClient = getSupabaseClient;
window.adminRenderSupabaseSec = adminRenderSupabaseSec;
window.saveSupabaseConfig = saveSupabaseConfig;
window.testSupabaseConnection = testSupabaseConnection;
window.syncLocalToSupabase = syncLocalToSupabase;
window.pullFromSupabase = pullFromSupabase;
window.autoPullFromCloud = autoPullFromCloud;
window.customerSubmitChangePassword = customerSubmitChangePassword;
window.adminSubmitChangePassword = adminSubmitChangePassword;
window.submitAdminPasswordLogin = submitAdminPasswordLogin;
window.handleLoginForm = handleLoginForm;
window.pullFromSupabase = pullFromSupabase;
window.autoPullFromCloud = autoPullFromCloud;
