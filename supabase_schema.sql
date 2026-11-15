-- ==============================================================================
-- VELORA FASHION - SUPABASE DATABASE SCHEMA & INITIAL DATA
-- Project: dan12 (yekokpbulmfugxaqjosc)
-- Organization: damtruong14062007-art's Org
-- Project URL: https://yekokpbulmfugxaqjosc.supabase.co
-- ==============================================================================

-- 1. DROP EXISTING TABLES (IF ANY)
DROP TABLE IF EXISTS product_reviews CASCADE;
DROP TABLE IF EXISTS orders CASCADE;
DROP TABLE IF EXISTS products CASCADE;
DROP TABLE IF EXISTS vouchers CASCADE;
DROP TABLE IF EXISTS users CASCADE;

-- 2. CREATE PRODUCTS TABLE
CREATE TABLE products (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    category TEXT NOT NULL,
    sub_category TEXT,
    price BIGINT NOT NULL,
    old_price BIGINT,
    badge TEXT,
    badge_type TEXT,
    image TEXT NOT NULL,
    colors JSONB DEFAULT '[]'::jsonb,
    rating NUMERIC DEFAULT 5.0,
    reviews INT DEFAULT 0,
    tags JSONB DEFAULT '[]'::jsonb,
    stock INT DEFAULT 50,
    sold INT DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. CREATE ORDERS TABLE
CREATE TABLE orders (
    id TEXT PRIMARY KEY,
    date TEXT,
    status TEXT DEFAULT 'Đang giao hàng',
    total TEXT,
    recipient TEXT,
    phone TEXT,
    address TEXT,
    payment_method TEXT,
    items JSONB DEFAULT '[]'::jsonb,
    items_summary TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. CREATE USERS TABLE
CREATE TABLE users (
    id TEXT PRIMARY KEY,
    email TEXT UNIQUE NOT NULL,
    password TEXT,
    name TEXT,
    phone TEXT,
    address TEXT,
    avatar TEXT,
    role TEXT DEFAULT 'customer',
    membership_tier TEXT DEFAULT 'VIP GOLD',
    points INT DEFAULT 1250,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 5. CREATE VOUCHERS TABLE
CREATE TABLE vouchers (
    code TEXT PRIMARY KEY,
    discount TEXT NOT NULL,
    description TEXT,
    min_order TEXT,
    badge TEXT,
    expires TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 6. CREATE PRODUCT REVIEWS TABLE
CREATE TABLE product_reviews (
    id TEXT PRIMARY KEY,
    prod_id TEXT,
    author TEXT NOT NULL,
    stars INT DEFAULT 5,
    comment TEXT NOT NULL,
    date TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ==============================================================================
-- ENABLE ROW LEVEL SECURITY (RLS) & PUBLIC ACCESS POLICIES
-- ==============================================================================

ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE vouchers ENABLE ROW LEVEL SECURITY;
ALTER TABLE product_reviews ENABLE ROW LEVEL SECURITY;

-- Allow anon public role to read and write (for web client integration)
CREATE POLICY "Allow public read products" ON products FOR SELECT USING (true);
CREATE POLICY "Allow public insert products" ON products FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public update products" ON products FOR UPDATE USING (true);
CREATE POLICY "Allow public delete products" ON products FOR DELETE USING (true);

CREATE POLICY "Allow public read orders" ON orders FOR SELECT USING (true);
CREATE POLICY "Allow public insert orders" ON orders FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public update orders" ON orders FOR UPDATE USING (true);
CREATE POLICY "Allow public delete orders" ON orders FOR DELETE USING (true);

CREATE POLICY "Allow public read users" ON users FOR SELECT USING (true);
CREATE POLICY "Allow public insert users" ON users FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public update users" ON users FOR UPDATE USING (true);
CREATE POLICY "Allow public delete users" ON users FOR DELETE USING (true);

CREATE POLICY "Allow public read vouchers" ON vouchers FOR SELECT USING (true);
CREATE POLICY "Allow public insert vouchers" ON vouchers FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public update vouchers" ON vouchers FOR UPDATE USING (true);
CREATE POLICY "Allow public delete vouchers" ON vouchers FOR DELETE USING (true);

CREATE POLICY "Allow public read reviews" ON product_reviews FOR SELECT USING (true);
CREATE POLICY "Allow public insert reviews" ON product_reviews FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public update reviews" ON product_reviews FOR UPDATE USING (true);
CREATE POLICY "Allow public delete reviews" ON product_reviews FOR DELETE USING (true);

-- ==============================================================================
-- INITIAL SEED DATA
-- ==============================================================================

-- 1. Insert Default Users
INSERT INTO users (id, email, password, name, phone, address, avatar, role, membership_tier, points) VALUES
('usr-admin', 'admin@velora.vn', 'admin123', 'Quản Trị Viên Velora', '1900 8899', 'Trụ sở Điều hành Velora Fashion, Q.1, TP. HCM', 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400&auto=format&fit=crop&q=80', 'admin', 'SUPER ADMIN', 99999),
('usr-cust-1', 'minhanh.velora@gmail.com', '123456', 'Đặng Minh Anh', '0988 123 456', '123 Đường Nam Kỳ Khởi Nghĩa, Quận 1, TP. Hồ Chí Minh', 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80', 'customer', 'VIP GOLD', 1250),
('usr-cust-2', 'lanhuong@gmail.com', '123456', 'Nguyễn Thị Lan Hương', '0912 345 678', '45 Hoàng Diệu, Ba Đình, Hà Nội', 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&auto=format&fit=crop&q=80', 'customer', 'VIP GOLD', 850),
('usr-cust-3', 'tran.tuan@gmail.com', '123456', 'Trần Tuấn Anh', '0903 888 999', '78 Lê Duẩn, Hải Châu, Đà Nẵng', 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80', 'customer', 'SILVER', 420);

-- 2. Insert Default Vouchers
INSERT INTO vouchers (code, discount, description, min_order, badge, expires) VALUES
('VELORA10', 'Giảm 10%', 'Áp dụng cho mọi đơn hàng mùa lễ hội', 'Đơn từ 0đ', 'Phổ biến', '31/12/2026'),
('FREESHIP', 'Miễn phí vận chuyển', 'Miễn phí giao hàng tiêu chuẩn toàn quốc', 'Đơn từ 500.000đ', 'Hot Deal', '31/12/2026'),
('VIP50K', 'Giảm 50.000đ', 'Dành riêng cho khách hàng VIP Gold & Diamond', 'Đơn từ 799.000đ', 'VIP Only', '31/12/2026'),
('WELCOME100', 'Giảm 100.000đ', 'Voucher chào mừng thành viên mới đăng ký', 'Đơn từ 1.200.000đ', 'Quà tặng', '31/12/2026');

-- 3. Insert Initial Orders
INSERT INTO orders (id, date, status, total, recipient, phone, address, payment_method, items, items_summary) VALUES
('DH-8849', '14/11/2026', 'Đang giao hàng (GHN Express)', '1.458.000₫', 'Đặng Minh Anh', '0988 123 456', '123 Đường Nam Kỳ Khởi Nghĩa, Q.1, TP. HCM', 'COD — Thanh toán khi nhận hàng', '[{"name":"Set Váy Dạ Tweed Tiểu Thư Nữ","price":799000,"quantity":1,"size":"M","color":"Hồng Pastel"},{"name":"Áo Blazer Nam Form Rộng Classic","price":659000,"quantity":1,"size":"L","color":"Navy"}]'::jsonb, 'Set Váy Dạ Tweed Tiểu Thư Nữ, Áo Blazer Nam Form Rộng Classic'),
('DH-8120', '08/11/2026', 'Giao thành công', '689.000₫', 'Đặng Minh Anh', '0988 123 456', '123 Đường Nam Kỳ Khởi Nghĩa, Q.1, TP. HCM', 'Chuyển khoản VietQR', '[{"name":"Áo Blazer Nam Form Rộng Classic","price":689000,"quantity":1,"size":"M","color":"Đen"}]'::jsonb, 'Áo Blazer Nam Form Rộng Classic');

-- 4. Insert Products
INSERT INTO products (id, name, category, sub_category, price, old_price, badge, badge_type, image, colors, rating, reviews, tags, stock, sold) VALUES
('na-1', 'Áo Blazer Nam Form Rộng Classic', 'men', 'ao', 689000, 850000, 'NEW ARRIVAL', 'badge-new', 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&auto=format&fit=crop&q=80', '["#2b3a4a", "#8a9ea7", "#1a1a1a"]'::jsonb, 5.0, 24, '["new-arrivals", "men"]'::jsonb, 15, 85),
('na-2', 'Set Váy Dạ Tweed Tiểu Thư Nữ', 'women', 'dam-vay', 799000, 950000, 'HOT TREND', 'badge-trend', 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&auto=format&fit=crop&q=80', '["#f472b6", "#fbcfe8", "#ffffff"]'::jsonb, 4.9, 65, '["new-arrivals", "women"]'::jsonb, 8, 92),
('na-3', 'Áo Hoodie Nỉ Bông Dày Dặn 380gsm', 'men', 'ao', 349000, 450000, 'NEW', 'badge-new', 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=600&auto=format&fit=crop&q=80', '["#3b82f6", "#1e293b", "#94a3b8"]'::jsonb, 4.9, 120, '["new-arrivals", "men"]'::jsonb, 22, 78),
('na-4', 'Quần Parachute Túi Hộp Ống Rộng', 'men', 'quan', 399000, 490000, 'BEST PICK', 'badge-best', 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=600&auto=format&fit=crop&q=80', '["#1e293b", "#64748b"]'::jsonb, 4.8, 52, '["new-arrivals", "men"]'::jsonb, 14, 86),
('na-5', 'Áo Khoác Bomber Da Lộn Minimalist', 'men', 'ao', 859000, 1150000, 'PREMIUM', 'badge-gold', 'https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=600&auto=format&fit=crop&q=80', '["#b45309", "#78350f"]'::jsonb, 5.0, 38, '["new-arrivals", "men"]'::jsonb, 10, 90),
('na-6', 'Áo Sơ Mi Lụa Cổ V Tay Phồng Nữ', 'women', 'blouse', 329000, 419000, 'NEW', 'badge-new', 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600&auto=format&fit=crop&q=80', '["#e0e7ff", "#ffffff"]'::jsonb, 4.9, 43, '["new-arrivals", "women"]'::jsonb, 30, 70),
('na-7', 'Quần Tây Xếp Ly Suông Công Sở', 'men', 'quan', 459000, 580000, 'ELEGANT', 'badge-best', 'https://images.unsplash.com/photo-1479064555552-3ef4979f8908?w=600&auto=format&fit=crop&q=80', '["#0f766e", "#134e4a"]'::jsonb, 4.9, 115, '["new-arrivals", "men"]'::jsonb, 18, 82),
('na-8', 'Chân Váy Chữ A Kèm Thắt Lưng', 'women', 'chan-vay', 299000, 390000, 'NEW', 'badge-new', 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=600&auto=format&fit=crop&q=80', '["#fee2e2", "#b91c1c"]'::jsonb, 4.7, 84, '["new-arrivals", "women"]'::jsonb, 19, 81),
('na-9', 'Áo Len Dệt Kim Họa Tiết Retro', 'men', 'ao', 419000, 520000, 'VINTAGE', 'badge-hot', 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=600&auto=format&fit=crop&q=80', '["#dc2626", "#fca5a5"]'::jsonb, 4.8, 58, '["new-arrivals", "men"]'::jsonb, 12, 88),
('na-10', 'Áo Gió Thể Thao Chống Nước 2 Lớp', 'men', 'ao', 489000, 600000, 'NEW', 'badge-new', 'https://images.unsplash.com/photo-1544441893-675973e31985?w=600&auto=format&fit=crop&q=80', '["#059669", "#10b981"]'::jsonb, 4.8, 40, '["new-arrivals", "men"]'::jsonb, 25, 75),
('na-11', 'Túi Đeo Vai Kẹp Nách Da Cao Cấp', 'accessories', 'tui-xach', 379000, 490000, 'ACCESSORY', 'badge-best', 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&auto=format&fit=crop&q=80', '["#3b82f6", "#1d4ed8"]'::jsonb, 4.9, 62, '["new-arrivals", "accessories"]'::jsonb, 17, 83),
('na-12', 'Giày Sneaker Chunky Retro Sole', 'accessories', 'giay', 799000, 950000, 'NEW', 'badge-new', 'https://images.unsplash.com/photo-1552346154-21d32810aba3?w=600&auto=format&fit=crop&q=80', '["#0284c7", "#38bdf8"]'::jsonb, 4.9, 126, '["new-arrivals", "accessories"]'::jsonb, 16, 84),
('wm-1', 'Đầm Xòe Floral Dáng Midi Nữ Tinh Tế', 'women', 'dam-vay', 549000, 750000, 'HOT TREND', 'badge-trend', 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=600&auto=format&fit=crop&q=80', '["#f43f5e", "#fecdd3"]'::jsonb, 5.0, 98, '["women"]'::jsonb, 6, 94),
('wm-2', 'Set Blazer + Quần Âu Nữ Công Sở Thanh Lịch', 'women', 'cong-so', 1189000, 1450000, 'BEST SELLER', 'badge-best', 'https://images.unsplash.com/photo-1584273143981-41c073dfe8f8?w=600&auto=format&fit=crop&q=80', '["#6366f1", "#a5b4fc"]'::jsonb, 5.0, 156, '["women"]'::jsonb, 11, 89),
('wm-3', 'Áo Blouse Lụa Tay Bồng Phối Cổ Nơ Xinh', 'women', 'blouse', 379000, 480000, 'NEW', 'badge-new', 'https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=600&auto=format&fit=crop&q=80', '["#fca5a5", "#fee2e2"]'::jsonb, 4.8, 73, '["women"]'::jsonb, 14, 86),
('wm-4', 'Chân Váy Xếp Ly Dáng Dài Midi Phong Cách', 'women', 'chan-vay', 439000, 560000, 'POPULAR', 'badge-gold', 'chan_vay_xep_ly_midi.jpg', '["#d97706", "#1c1917"]'::jsonb, 4.9, 207, '["women"]'::jsonb, 20, 80),
('wm-5', 'Đầm Cocktail Đính Hạt Dạ Hội Quyến Rũ', 'women', 'dam-vay', 1290000, 1750000, 'ELEGANT', 'badge-best', 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=600&auto=format&fit=crop&q=80', '["#10b981", "#065f46"]'::jsonb, 5.0, 43, '["women"]'::jsonb, 5, 95),
('wm-6', 'Áo Cardigan Len Mỏng Nữ Pastel Dịu Dàng', 'women', 'ao-khoac', 299000, 420000, 'NEW', 'badge-new', 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=600&auto=format&fit=crop&q=80', '["#dc2626", "#f87171"]'::jsonb, 4.8, 84, '["women"]'::jsonb, 17, 83),
('wm-7', 'Túi Xách Canvas Phong Cách Nữ Hàn Quốc', 'accessories', 'tui-xach', 219000, 299000, 'FAST SHIP', 'badge-best', 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&auto=format&fit=crop&q=80', '["#2563eb", "#1e293b"]'::jsonb, 4.9, 139, '["women", "accessories"]'::jsonb, 28, 72),
('wm-8', 'Giày Cao Gót Mũi Nhọn 7cm Nữ Thanh Thoát', 'accessories', 'giay', 589000, 750000, 'HOT', 'badge-hot', 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=600&auto=format&fit=crop&q=80', '["#9333ea", "#c084fc"]'::jsonb, 4.9, 184, '["women", "accessories"]'::jsonb, 12, 88),
('mn-1', 'Áo Nỉ Cổ Polo Dệt Tay Raglan', 'men', 'ao', 319000, 420000, 'NEW', 'badge-new', 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600&auto=format&fit=crop&q=80', '["#94a3b8", "#334155"]'::jsonb, 4.9, 41, '["men"]'::jsonb, 22, 78),
('mn-2', 'Áo Nỉ Sweater Basic Cotton Ấm Áp', 'men', 'ao', 289000, 380000, 'TREND', 'badge-trend', 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=600&auto=format&fit=crop&q=80', '["#475569", "#1e293b"]'::jsonb, 4.8, 79, '["men"]'::jsonb, 18, 82),
('mn-3', 'Áo Nỉ Henley Dệt Họa Tiết Gân', 'men', 'ao', 329000, 450000, 'NEW', 'badge-new', 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=600&auto=format&fit=crop&q=80', '["#cbd5e1", "#64748b"]'::jsonb, 4.9, 53, '["men"]'::jsonb, 15, 85),
('mn-4', 'Áo Polo Cotton Pique Thêu Logo Tinh Tế', 'men', 'ao', 249000, 320000, 'HOT', 'badge-hot', 'https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=600&auto=format&fit=crop&q=80', '["#ffffff", "#000000"]'::jsonb, 5.0, 112, '["men"]'::jsonb, 35, 65),
('mn-5', 'Quần Jeans Denim Regular Fit Co Giãn', 'men', 'quan', 399000, 510000, 'BEST PICK', 'badge-best', 'https://images.unsplash.com/photo-1542272604-780c96856592?w=600&auto=format&fit=crop&q=80', '["#1e293b", "#3b82f6"]'::jsonb, 4.8, 87, '["men"]'::jsonb, 14, 86),
('mn-6', 'Quần Kaki Chino Regular Màu Be Cát', 'men', 'quan', 349000, 450000, 'ELEGANT', 'badge-gold', 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=600&auto=format&fit=crop&q=80', '["#e2d7c5", "#78716c"]'::jsonb, 4.9, 64, '["men"]'::jsonb, 19, 81),
('mn-7', 'Dép Da Quai Ngang Đế Êm Khóa Kim Loại', 'accessories', 'giay', 319000, 410000, 'POPULAR', 'badge-best', 'https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=600&auto=format&fit=crop&q=80', '["#000000", "#78350f"]'::jsonb, 4.9, 130, '["men", "accessories"]'::jsonb, 22, 78),
('mn-8', 'Sục Bông Da Lộn Lót Lông Đi Trong Nhà', 'accessories', 'giay', 249000, 320000, 'COZY', 'badge-trend', 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&auto=format&fit=crop&q=80', '["#d97706", "#b45309"]'::jsonb, 4.8, 45, '["men", "accessories"]'::jsonb, 12, 88),
('acc-1', 'Túi Mini Quai Ngọc Trai Đính Đá Sang Trọng', 'accessories', 'tui-xach', 459000, 590000, 'HOT DEAL', 'badge-hot', 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&auto=format&fit=crop&q=80', '["#fce7f3", "#ffffff"]'::jsonb, 5.0, 82, '["accessories"]'::jsonb, 9, 91),
('acc-2', 'Dây Chuyền Ngọc Trai Tự Nhiên Khóa Vàng', 'accessories', 'trang-suc', 189000, 240000, 'TREND', 'badge-trend', 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&auto=format&fit=crop&q=80', '["#fef3c7", "#ffffff"]'::jsonb, 4.9, 140, '["accessories"]'::jsonb, 25, 75),
('acc-3', 'Kính Mát Oval Retro Gọng Đồi Mồi Phong Cách', 'accessories', 'kinh-mat', 229000, 310000, '-26%', 'badge-sale', 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&auto=format&fit=crop&q=80', '["#78350f", "#000000"]'::jsonb, 4.8, 67, '["accessories"]'::jsonb, 14, 86),
('acc-4', 'Kẹp Tóc Nơ Satin Bản To Tiểu Thư Pháp', 'accessories', 'phu-kien-toc', 59000, 89000, 'FLASH', 'badge-sale', 'https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?w=600&auto=format&fit=crop&q=80', '["#ffffff", "#f43f5e", "#000000"]'::jsonb, 4.9, 215, '["accessories"]'::jsonb, 3, 97),
('acc-5', 'Túi Đeo Vai Baguette Da Trơn Retro 90s', 'accessories', 'tui-xach', 359000, 470000, 'BEST', 'badge-best', 'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=600&auto=format&fit=crop&q=80', '["#451a03", "#1c1917"]'::jsonb, 4.9, 95, '["accessories"]'::jsonb, 11, 89),
('acc-6', 'Khuyên Tai Vòng Mạ Vàng 18k Chunky Minimal', 'accessories', 'trang-suc', 159000, 210000, 'HOT', 'badge-hot', 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=600&auto=format&fit=crop&q=80', '["#fbbf24", "#f59e0b"]'::jsonb, 4.8, 88, '["accessories"]'::jsonb, 16, 84),
('acc-7', 'Khăn Lụa Vuông Họa Tiết Hoa Cổ Điển', 'accessories', 'phu-kien-toc', 129000, 180000, '-28%', 'badge-sale', 'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=600&auto=format&fit=crop&q=80', '["#fed7aa", "#ffffff"]'::jsonb, 4.9, 104, '["accessories"]'::jsonb, 20, 80),
('acc-8', 'Vòng Tay Ngọc Trai Nhỏ Dịu Dàng Nữ Tính', 'accessories', 'trang-suc', 149000, 199000, 'TREND', 'badge-trend', 'https://images.unsplash.com/photo-1611591475870-0761358055ee?w=600&auto=format&fit=crop&q=80', '["#fef3c7", "#ffffff"]'::jsonb, 5.0, 76, '["accessories"]'::jsonb, 15, 85),
('fs-1', 'Set Đồ Bộ Thể Thao Nữ Năng Động Quick-Dry', 'women', 'the-thao', 299000, 650000, '-54%', 'badge-sale', 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&auto=format&fit=crop&q=80', '["#ec4899", "#f43f5e"]'::jsonb, 5.0, 320, '["flash-sale", "women"]'::jsonb, 4, 96),
('fs-2', 'Áo Khoác Gió Bomber Nam Phối Màu Block', 'men', 'ao-khoac', 369000, 790000, '-53%', 'badge-sale', 'https://images.unsplash.com/photo-1548883354-7622d03aca27?w=600&auto=format&fit=crop&q=80', '["#ef4444", "#1e293b"]'::jsonb, 4.9, 210, '["flash-sale", "men"]'::jsonb, 7, 93),
('fs-3', 'Mắt Kính Cat-Eye Phong Cách Milan Fashion', 'accessories', 'kinh-mat', 159000, 380000, '-58%', 'badge-sale', 'https://images.unsplash.com/photo-1577803645773-f96470509666?w=600&auto=format&fit=crop&q=80', '["#000000", "#78350f"]'::jsonb, 4.9, 145, '["flash-sale", "accessories"]'::jsonb, 2, 98),
('fs-4', 'Đầm Lụa Satin 2 Dây Quyến Rũ Party Chic', 'women', 'dam-vay', 399000, 890000, '-55%', 'badge-sale', 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=600&auto=format&fit=crop&q=80', '["#be123c", "#000000"]'::jsonb, 5.0, 280, '["flash-sale", "women"]'::jsonb, 5, 95),
('mn-phong-1', 'Áo Phông Nam Cotton 250gsm Phom Regular Thoáng Mát', 'men', 'ao', 219000, 289000, 'BÁN CHẠY', 'badge-hot', 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=600&auto=format&fit=crop&q=80', '["#ffffff", "#000000", "#9ca3af"]'::jsonb, 4.9, 142, '["men", "ao-phong", "new-arrivals", "flash-sale"]'::jsonb, 45, 312),
('mn-phong-2', 'Áo Phông Nam Cổ Tròn Minimalist Thêu Tag Hông', 'men', 'ao', 249000, 320000, 'MỚI VỀ', 'badge-new', 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600&auto=format&fit=crop&q=80', '["#27272a", "#f4f4f5"]'::jsonb, 4.8, 89, '["men", "ao-phong"]'::jsonb, 35, 178),
('mn-somi-1', 'Áo Sơ Mi Nam Cộc Tay Họa Tiết Cuban Resort', 'men', 'ao', 349000, 450000, 'HÈ 2026', 'badge-new', 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&auto=format&fit=crop&q=80', '["#e2e8f0", "#cbd5e1"]'::jsonb, 4.8, 68, '["men", "ao-so-mi", "new-arrivals"]'::jsonb, 30, 115),
('mn-somi-2', 'Áo Sơ Mi Nam Dài Tay Oxford May Đo Tinh Tế', 'men', 'ao', 429000, 550000, 'BESTSELLER', 'badge-hot', 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600&auto=format&fit=crop&q=80', '["#ffffff", "#bfdbfe"]'::jsonb, 5.0, 94, '["men", "ao-so-mi"]'::jsonb, 28, 210),
('mn-tank-1', 'Áo Tank Top Thể Thao Nam Co Giãn Thoáng Khí', 'men', 'ao', 189000, 240000, 'NĂNG ĐỘNG', 'badge-new', 'https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=600&auto=format&fit=crop&q=80', '["#18181b", "#71717a", "#ffffff"]'::jsonb, 4.9, 53, '["men", "ao-tank-top"]'::jsonb, 35, 180),
('mn-short-1', 'Quần Short Kaki Nam Co Giãn Dáng Trẻ Trung', 'men', 'quan', 289000, 380000, 'ƯA CHUỘNG', 'badge-hot', 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=600&auto=format&fit=crop&q=80', '["#d7ccc8", "#374151", "#1f2937"]'::jsonb, 4.9, 87, '["men", "quan-short", "flash-sale"]'::jsonb, 32, 145),
('mn-short-2', 'Quần Short Nỉ Thể Thao Dạo Phố Thoải Mái', 'men', 'quan', 239000, 320000, 'COMFORT', 'badge-new', 'https://images.unsplash.com/photo-1562157873-818bc0726f68?w=600&auto=format&fit=crop&q=80', '["#9ca3af", "#111827"]'::jsonb, 4.8, 62, '["men", "quan-short"]'::jsonb, 40, 195),
('mn-dep-1', 'Dép Kẹp Nam Quai Da Bò Thật Đế Cao Su Êm Ái', 'accessories', 'giay', 259000, 350000, 'DA THẬT', 'badge-hot', 'https://images.unsplash.com/photo-1560343090-f0409e92791a?w=600&auto=format&fit=crop&q=80', '["#78350f", "#18181b"]'::jsonb, 4.9, 76, '["accessories", "men", "dep-kep"]'::jsonb, 25, 160),
('mn-giay-1', 'Giày Lười Loafer Nam Da Bò Ý Thanh Lịch', 'accessories', 'giay', 849000, 1100000, 'CAO CẤP', 'badge-hot', 'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=600&auto=format&fit=crop&q=80', '["#18181b", "#451a03"]'::jsonb, 5.0, 92, '["accessories", "men", "giay-luoi", "new-arrivals"]'::jsonb, 18, 110),
('mn-daylung-1', 'Dây Lưng Nam Da Bò Khóa Tự Động Hợp Kim Cao Cấp', 'accessories', 'phu-kien', 299000, 420000, 'KHÓA BỀN', 'badge-new', 'https://images.unsplash.com/photo-1624222247344-550fb60583dc?w=600&auto=format&fit=crop&q=80', '["#000000", "#78350f"]'::jsonb, 4.9, 115, '["accessories", "men", "day-lung"]'::jsonb, 50, 280),
('mn-mu-1', 'Mũ Lưỡi Trai Classic Velora Thêu 3D Tinh Tế', 'accessories', 'phu-kien', 169000, 220000, 'TRENDING', 'badge-new', 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=600&auto=format&fit=crop&q=80', '["#000000", "#f4f4f5", "#1e3a8a"]'::jsonb, 4.8, 88, '["accessories", "men", "mu", "flash-sale"]'::jsonb, 45, 240),
('mn-tat-1', 'Set 3 Đôi Tất Nam Cổ Ngắn Cotton Kháng Khuẩn', 'accessories', 'phu-kien', 99000, 150000, 'COMBO 3', 'badge-hot', 'https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?w=600&auto=format&fit=crop&q=80', '["#000000", "#ffffff", "#9ca3af"]'::jsonb, 4.9, 165, '["accessories", "men", "tat"]'::jsonb, 80, 410);

-- FINISHED CREATING SCHEMA & INITIAL SEED DATA FOR VELORA SUPABASE DATABASE!
