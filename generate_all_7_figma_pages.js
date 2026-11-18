// =========================================================================
// VELORA HIGH-FASHION E-COMMERCE 2026 — SCRIPT TẠO 7 TRANG FIGMA CÒN LẠI
// Cách dùng: Mở file Figma của bạn -> Nhấn F12 (hoặc mở plugin Scripter/Console) -> Dán toàn bộ mã này vào và Enter.
// =========================================================================

(async () => {
  console.log("🚀 Bắt đầu khởi tạo 7 trang Figma cho VELORA...");

  // 1. Tải Font chữ chuẩn
  await figma.loadFontAsync({ family: "Playfair Display", style: "Bold" });
  await figma.loadFontAsync({ family: "Playfair Display", style: "Regular" });
  await figma.loadFontAsync({ family: "Plus Jakarta Sans", style: "Regular" });
  await figma.loadFontAsync({ family: "Plus Jakarta Sans", style: "Medium" });
  await figma.loadFontAsync({ family: "Plus Jakarta Sans", style: "SemiBold" });
  await figma.loadFontAsync({ family: "Plus Jakarta Sans", style: "Bold" });

  // 2. Hệ màu chuẩn
  const C = {
    dark: { r: 17/255, g: 17/255, b: 19/255 },
    dark2: { r: 26/255, g: 26/255, b: 30/255 },
    gold: { r: 183/255, g: 138/255, b: 87/255 },
    goldLight: { r: 247/255, g: 240/255, b: 232/255 },
    goldMetallic: { r: 200/255, g: 150/255, b: 62/255 },
    red: { r: 224/255, g: 36/255, b: 36/255 },
    rose: { r: 216/255, g: 90/255, b: 127/255 },
    canvas: { r: 251/255, g: 251/255, b: 251/255 },
    white: { r: 1, g: 1, b: 1 },
    border: { r: 235/255, g: 235/255, b: 235/255 },
    textDark: { r: 24/255, g: 24/255, b: 27/255 },
    textMuted: { r: 113/255, g: 113/255, b: 122/255 }
  };

  function solid(color) {
    return [{ type: 'SOLID', color: color }];
  }

  function createText(text, size, weight, color, font = "Plus Jakarta Sans") {
    const t = figma.createText();
    t.fontName = { family: font, style: weight };
    t.characters = text;
    t.fontSize = size;
    t.fills = solid(color);
    return t;
  }

  function buildHeader(activePage) {
    const header = figma.createAutoLayout('VERTICAL');
    header.resize(1440, 120);
    header.layoutSizingHorizontal = 'FIXED';
    header.layoutSizingVertical = 'HUG';
    header.itemSpacing = 0;

    const bar = figma.createAutoLayout('HORIZONTAL');
    bar.resize(1440, 40);
    bar.layoutSizingHorizontal = 'FIXED';
    bar.fills = solid(C.dark);
    bar.primaryAxisAlignItems = 'CENTER';
    bar.counterAxisAlignItems = 'CENTER';
    bar.appendChild(createText("✨ VELORA PRIVILEGE: MIỄN PHÍ VẬN CHUYỂN TOÀN QUỐC CHO ĐƠN TỪ 500.000Đ • HOTLINE: 1900 8899", 12, "Medium", C.goldLight));
    header.appendChild(bar);

    const nav = figma.createAutoLayout('HORIZONTAL');
    nav.resize(1440, 80);
    nav.layoutSizingHorizontal = 'FIXED';
    nav.fills = solid(C.white);
    nav.strokes = solid(C.border);
    nav.strokeWeight = 1;
    nav.paddingLeft = 80;
    nav.paddingRight = 80;
    nav.primaryAxisAlignItems = 'SPACE_BETWEEN';
    nav.counterAxisAlignItems = 'CENTER';

    const logoBox = figma.createAutoLayout('VERTICAL');
    logoBox.itemSpacing = 2;
    const logo = createText("VELORA", 26, "Bold", C.dark, "Playfair Display");
    logo.letterSpacing = { unit: "PERCENT", value: 15 };
    const tag = createText("HAUTE COUTURE", 9, "SemiBold", C.gold);
    tag.letterSpacing = { unit: "PERCENT", value: 25 };
    logoBox.appendChild(logo);
    logoBox.appendChild(tag);
    nav.appendChild(logoBox);

    const menu = figma.createAutoLayout('HORIZONTAL');
    menu.itemSpacing = 28;
    menu.counterAxisAlignItems = 'CENTER';
    const links = [
      { name: "TRANG CHỦ", id: "home" },
      { name: "HÀNG MỚI", id: "new" },
      { name: "NỮ", id: "women" },
      { name: "NAM", id: "men" },
      { name: "PHỤ KIỆN", id: "accessories" },
      { name: "FLASH SALE ⚡", id: "sale" }
    ];
    for (const l of links) {
      const isActive = (l.id === activePage);
      menu.appendChild(createText(l.name, 13, isActive ? "Bold" : "SemiBold", isActive ? C.gold : C.textDark));
    }
    nav.appendChild(menu);

    const actions = figma.createAutoLayout('HORIZONTAL');
    actions.itemSpacing = 18;
    actions.counterAxisAlignItems = 'CENTER';
    actions.appendChild(createText("🔍 Tìm kiếm", 13, "Medium", C.textMuted));
    actions.appendChild(createText("♡ Yêu thích (3)", 13, "SemiBold", C.rose));
    actions.appendChild(createText("🛍 Giỏ hàng (2)", 13, "Bold", C.gold));
    
    const accPill = figma.createAutoLayout('HORIZONTAL');
    accPill.fills = solid(C.goldLight);
    accPill.cornerRadius = 20;
    accPill.paddingLeft = 14;
    accPill.paddingRight = 14;
    accPill.paddingTop = 8;
    accPill.paddingBottom = 8;
    accPill.appendChild(createText("👤 VIP Gold", 12, "Bold", C.dark));
    actions.appendChild(accPill);
    nav.appendChild(actions);

    header.appendChild(nav);
    return header;
  }

  function buildFooter() {
    const footer = figma.createAutoLayout('VERTICAL');
    footer.resize(1440, 340);
    footer.layoutSizingHorizontal = 'FIXED';
    footer.layoutSizingVertical = 'HUG';
    footer.fills = solid(C.dark);
    footer.paddingTop = 48;
    footer.paddingBottom = 32;
    footer.paddingLeft = 80;
    footer.paddingRight = 80;
    footer.itemSpacing = 36;

    const cols = figma.createAutoLayout('HORIZONTAL');
    cols.resize(1280, 180);
    cols.layoutSizingHorizontal = 'FIXED';
    cols.primaryAxisAlignItems = 'SPACE_BETWEEN';

    const col1 = figma.createAutoLayout('VERTICAL');
    col1.resize(360, 170);
    col1.itemSpacing = 10;
    const fLogo = createText("VELORA", 22, "Bold", C.white, "Playfair Display");
    fLogo.letterSpacing = { unit: "PERCENT", value: 15 };
    col1.appendChild(fLogo);
    col1.appendChild(createText("Thương hiệu thời trang may đo cao cấp Haute Couture 2026.", 13, "Regular", { r: 161/255, g: 161/255, b: 170/255 }));
    col1.appendChild(createText("📞 Hotline: 1900 8899 | ✉ cskh@velorafashion.vn", 13, "SemiBold", C.goldLight));
    col1.appendChild(createText("📍 123 Nam Kỳ Khởi Nghĩa, Quận 1, TP. HCM", 13, "Regular", { r: 212/255, g: 212/255, b: 216/255 }));
    cols.appendChild(col1);

    const col2 = figma.createAutoLayout('VERTICAL');
    col2.resize(220, 170);
    col2.itemSpacing = 10;
    col2.appendChild(createText("CHĂM SÓC KHÁCH HÀNG", 13, "Bold", C.gold, "Playfair Display"));
    col2.appendChild(createText("Chính sách đổi trả 30 ngày", 13, "Regular", { r: 212/255, g: 212/255, b: 216/255 }));
    col2.appendChild(createText("Bảng quy đổi kích cỡ chuẩn", 13, "Regular", { r: 212/255, g: 212/255, b: 216/255 }));
    col2.appendChild(createText("Đặc quyền hội viên VIP", 13, "Regular", { r: 212/255, g: 212/255, b: 216/255 }));
    cols.appendChild(col2);

    const col3 = figma.createAutoLayout('VERTICAL');
    col3.resize(320, 170);
    col3.itemSpacing = 12;
    col3.appendChild(createText("BẢN TIN ƯU ĐÃI VIP", 13, "Bold", C.gold, "Playfair Display"));
    col3.appendChild(createText("Đăng ký nhận voucher 10% đơn hàng đầu tiên.", 13, "Regular", { r: 212/255, g: 212/255, b: 216/255 }));
    const inputMock = figma.createAutoLayout('HORIZONTAL');
    inputMock.resize(320, 40);
    inputMock.fills = solid(C.dark2);
    inputMock.strokes = solid({ r: 63/255, g: 63/255, b: 70/255 });
    inputMock.strokeWeight = 1;
    inputMock.cornerRadius = 6;
    inputMock.paddingLeft = 12;
    inputMock.paddingRight = 12;
    inputMock.primaryAxisAlignItems = 'SPACE_BETWEEN';
    inputMock.counterAxisAlignItems = 'CENTER';
    inputMock.appendChild(createText("Email của bạn...", 12, "Regular", C.textMuted));
    inputMock.appendChild(createText("ĐĂNG KÝ", 12, "Bold", C.gold));
    col3.appendChild(inputMock);
    cols.appendChild(col3);

    footer.appendChild(cols);
    footer.appendChild(createText("© 2026 VELORA Premium Fashion Co., Ltd. Bảo lưu mọi quyền. Thanh toán bảo mật SSL.", 12, "Regular", C.textMuted));
    return footer;
  }

  function buildProductCard(title, cat, price, oldPrice, tagText, tagColor, cardWidth = 302) {
    const card = figma.createAutoLayout('VERTICAL');
    card.resize(cardWidth, 450);
    card.layoutSizingHorizontal = 'FIXED';
    card.fills = solid(C.white);
    card.strokes = solid(C.border);
    card.strokeWeight = 1;
    card.cornerRadius = 10;
    card.paddingBottom = 16;
    card.itemSpacing = 8;

    const imgFrame = figma.createAutoLayout('VERTICAL');
    imgFrame.resize(cardWidth, 280);
    imgFrame.layoutSizingHorizontal = 'FIXED';
    imgFrame.fills = solid({ r: 243/255, g: 244/255, b: 246/255 });
    imgFrame.cornerRadius = 10;
    imgFrame.paddingTop = 10;
    imgFrame.paddingLeft = 10;
    imgFrame.paddingRight = 10;
    imgFrame.primaryAxisAlignItems = 'SPACE_BETWEEN';

    const badgeRow = figma.createAutoLayout('HORIZONTAL');
    badgeRow.resize(cardWidth - 20, 24);
    badgeRow.primaryAxisAlignItems = 'SPACE_BETWEEN';
    if (tagText) {
      const badge = figma.createAutoLayout('HORIZONTAL');
      badge.fills = solid(tagColor || C.dark);
      badge.cornerRadius = 4;
      badge.paddingLeft = 8;
      badge.paddingRight = 8;
      badge.paddingTop = 3;
      badge.paddingBottom = 3;
      badge.appendChild(createText(tagText, 10, "Bold", C.white));
      badgeRow.appendChild(badge);
    } else {
      badgeRow.appendChild(figma.createFrame());
    }

    const heart = figma.createAutoLayout('HORIZONTAL');
    heart.fills = solid(C.white);
    heart.cornerRadius = 12;
    heart.paddingLeft = 8;
    heart.paddingRight = 8;
    heart.paddingTop = 3;
    heart.paddingBottom = 3;
    heart.appendChild(createText("♡", 12, "Bold", C.rose));
    badgeRow.appendChild(heart);
    imgFrame.appendChild(badgeRow);

    const centerIcon = figma.createAutoLayout('VERTICAL');
    centerIcon.counterAxisAlignItems = 'CENTER';
    centerIcon.primaryAxisAlignItems = 'CENTER';
    centerIcon.resize(cardWidth - 20, 180);
    centerIcon.appendChild(createText("VELORA ATELIER", 12, "Bold", { r: 209/255, g: 213/255, b: 219/255 }, "Playfair Display"));
    imgFrame.appendChild(centerIcon);
    card.appendChild(imgFrame);

    const info = figma.createAutoLayout('VERTICAL');
    info.paddingLeft = 14;
    info.paddingRight = 14;
    info.itemSpacing = 4;
    info.appendChild(createText(cat.toUpperCase(), 10, "Bold", C.gold));
    const titleTxt = createText(title, 13, "Bold", C.textDark);
    titleTxt.resize(cardWidth - 28, 18);
    info.appendChild(titleTxt);

    const priceRow = figma.createAutoLayout('HORIZONTAL');
    priceRow.itemSpacing = 8;
    priceRow.appendChild(createText(price, 14, "Bold", C.dark));
    if (oldPrice) {
      priceRow.appendChild(createText(oldPrice, 11, "Regular", C.textMuted));
    }
    info.appendChild(priceRow);
    card.appendChild(info);

    const btnRow = figma.createAutoLayout('HORIZONTAL');
    btnRow.paddingLeft = 14;
    btnRow.paddingRight = 14;
    const btn = figma.createAutoLayout('HORIZONTAL');
    btn.resize(cardWidth - 28, 36);
    btn.fills = solid(C.dark);
    btn.cornerRadius = 6;
    btn.primaryAxisAlignItems = 'CENTER';
    btn.counterAxisAlignItems = 'CENTER';
    btn.appendChild(createText("Thêm vào giỏ", 11, "Bold", C.white));
    btnRow.appendChild(btn);
    card.appendChild(btnRow);

    return card;
  }

  function buildBanner(crumb, title, desc, bg, isDark = false) {
    const b = figma.createAutoLayout('VERTICAL');
    b.resize(1440, 240);
    b.layoutSizingHorizontal = 'FIXED';
    b.fills = solid(bg);
    b.paddingLeft = 80;
    b.paddingRight = 80;
    b.primaryAxisAlignItems = 'CENTER';
    b.itemSpacing = 10;
    b.appendChild(createText(crumb, 12, "Medium", isDark ? C.goldLight : C.textMuted));
    b.appendChild(createText(title, 34, "Bold", isDark ? C.white : C.dark, "Playfair Display"));
    b.appendChild(createText(desc, 14, "Regular", isDark ? { r: 212/255, g: 212/255, b: 216/255 } : C.textMuted));
    return b;
  }

  // 02 · HÀNG NEW (NEW ARRIVALS)
  const fNew = figma.createAutoLayout('VERTICAL');
  fNew.name = "02 · Hàng New (New Arrivals)";
  fNew.resize(1440, 2100);
  fNew.layoutSizingHorizontal = 'FIXED';
  fNew.layoutSizingVertical = 'HUG';
  fNew.x = 1600;
  fNew.y = 0;
  fNew.fills = solid(C.canvas);
  fNew.appendChild(buildHeader("new"));
  fNew.appendChild(buildBanner("Trang chủ / Hàng New 2026", "BỘ SƯU TẬP MỚI — NEW ARRIVALS", "Tuyển tập 24 thiết kế thời trang Haute Couture vừa ra mắt tuần này", { r: 245/255, g: 243/255, b: 240/255 }));
  const rowN1 = figma.createAutoLayout('HORIZONTAL');
  rowN1.resize(1440, 470);
  rowN1.paddingLeft = 80;
  rowN1.paddingRight = 80;
  rowN1.paddingTop = 30;
  rowN1.itemSpacing = 24;
  rowN1.appendChild(buildProductCard("Đầm Dạ Hội Lụa Satin Pháp", "Nữ", "1.850.000đ", "2.200.000đ", "NEW", C.rose));
  rowN1.appendChild(buildProductCard("Áo Blazer Dạ Tweed Chanel", "Nữ", "2.450.000đ", null, "NEW", C.dark));
  rowN1.appendChild(buildProductCard("Bộ Suit Nam May Đo Ý Classic", "Nam", "3.890.000đ", "4.500.000đ", "NEW", C.gold));
  rowN1.appendChild(buildProductCard("Chân Váy Xếp Ly Midi Dáng Xòe", "Nữ", "1.250.000đ", null, "NEW", C.rose));
  fNew.appendChild(rowN1);
  const rowN2 = figma.createAutoLayout('HORIZONTAL');
  rowN2.resize(1440, 470);
  rowN2.paddingLeft = 80;
  rowN2.paddingRight = 80;
  rowN2.itemSpacing = 24;
  rowN2.appendChild(buildProductCard("Áo Sơ Mi Lụa Tơ Tằm Cổ Đức", "Nam", "980.000đ", "1.150.000đ", "NEW", C.dark));
  rowN2.appendChild(buildProductCard("Áo Polo Dệt Kim Mercerized", "Nam", "750.000đ", null, "NEW", C.dark));
  rowN2.appendChild(buildProductCard("Túi Xách Da Bò Khóa Mạ Vàng", "Phụ Kiện", "1.650.000đ", null, "NEW", C.goldMetallic));
  rowN2.appendChild(buildProductCard("Giày Stiletto Mũi Nhọn Ánh Kim", "Phụ Kiện", "1.450.000đ", "1.750.000đ", "NEW", C.gold));
  fNew.appendChild(rowN2);
  fNew.appendChild(buildFooter());

  // 03 · MEN (NAM)
  const fMen = figma.createAutoLayout('VERTICAL');
  fMen.name = "03 · Men / Nam (Men's Collection)";
  fMen.resize(1440, 2100);
  fMen.layoutSizingHorizontal = 'FIXED';
  fMen.layoutSizingVertical = 'HUG';
  fMen.x = 3200;
  fMen.y = 0;
  fMen.fills = solid(C.canvas);
  fMen.appendChild(buildHeader("men"));
  fMen.appendChild(buildBanner("Trang chủ / Thời Trang Nam", "MEN'S LUXURY ATELIER — QUÝ TỘC Ý", "Quy chuẩn may đo cổ điển phối hợp cùng chất liệu vải wool Ý thượng hạng", C.dark, true));
  const rowM1 = figma.createAutoLayout('HORIZONTAL');
  rowM1.resize(1440, 470);
  rowM1.paddingLeft = 80;
  rowM1.paddingRight = 80;
  rowM1.paddingTop = 30;
  rowM1.itemSpacing = 24;
  rowM1.appendChild(buildProductCard("Bộ Suit Nam May Đo Ý Classic", "Nam", "3.890.000đ", "4.500.000đ", "BESTSELLER", C.gold));
  rowM1.appendChild(buildProductCard("Áo Blazer Kẻ Sọc Dáng Ôm", "Nam", "2.950.000đ", null, "NEW", C.dark));
  rowM1.appendChild(buildProductCard("Áo Sơ Mi Lụa Tơ Tằm Trắng", "Nam", "980.000đ", "1.150.000đ", "-15%", C.red));
  rowM1.appendChild(buildProductCard("Áo Polo Dệt Kim Mercerized", "Nam", "750.000đ", null, "HOT", C.dark));
  fMen.appendChild(rowM1);
  const rowM2 = figma.createAutoLayout('HORIZONTAL');
  rowM2.resize(1440, 470);
  rowM2.paddingLeft = 80;
  rowM2.paddingRight = 80;
  rowM2.itemSpacing = 24;
  rowM2.appendChild(buildProductCard("Quần Tây Xếp Ly Ống Suông", "Nam", "850.000đ", null, null, null));
  rowM2.appendChild(buildProductCard("Giày Da Oxford Da Bò Ý", "Nam", "2.150.000đ", "2.500.000đ", "-14%", C.red));
  rowM2.appendChild(buildProductCard("Thắt Lưng Da Khóa Mạ Vàng", "Nam", "650.000đ", null, null, null));
  rowM2.appendChild(buildProductCard("Áo Măng Tô Dạ Nam Dáng Dài", "Nam", "3.450.000đ", null, "EXCLUSIVE", C.dark2));
  fMen.appendChild(rowM2);
  fMen.appendChild(buildFooter());

  // 04 · WOMEN (NỮ)
  const fWomen = figma.createAutoLayout('VERTICAL');
  fWomen.name = "04 · Women / Nữ (Women's Collection)";
  fWomen.resize(1440, 2100);
  fWomen.layoutSizingHorizontal = 'FIXED';
  fWomen.layoutSizingVertical = 'HUG';
  fWomen.x = 4800;
  fWomen.y = 0;
  fWomen.fills = solid(C.canvas);
  fWomen.appendChild(buildHeader("women"));
  fWomen.appendChild(buildBanner("Trang chủ / Thời Trang Nữ", "WOMEN'S ATELIER — NỮ TÍNH & QUYẾN RŨ", "Bộ sưu tập đầm lụa, chân váy midi xếp ly và áo tweed phong cách Parisienne", { r: 253/255, g: 242/255, b: 248/255 }));
  const rowW1 = figma.createAutoLayout('HORIZONTAL');
  rowW1.resize(1440, 470);
  rowW1.paddingLeft = 80;
  rowW1.paddingRight = 80;
  rowW1.paddingTop = 30;
  rowW1.itemSpacing = 24;
  rowW1.appendChild(buildProductCard("Đầm Dạ Hội Lụa Satin Pháp", "Nữ", "1.850.000đ", "2.200.000đ", "HOT", C.rose));
  rowW1.appendChild(buildProductCard("Áo Blazer Dạ Tweed Chanel", "Nữ", "2.450.000đ", null, "NEW", C.dark));
  rowW1.appendChild(buildProductCard("Chân Váy Xếp Ly Midi Dáng Xòe", "Nữ", "1.250.000đ", null, "FAVORITE", C.rose));
  rowW1.appendChild(buildProductCard("Áo Kiểu Lụa Tơ Tằm Cổ Nơ", "Nữ", "890.000đ", "1.050.000đ", "-15%", C.red));
  fWomen.appendChild(rowW1);
  const rowW2 = figma.createAutoLayout('HORIZONTAL');
  rowW2.resize(1440, 470);
  rowW2.paddingLeft = 80;
  rowW2.paddingRight = 80;
  rowW2.itemSpacing = 24;
  rowW2.appendChild(buildProductCard("Đầm Maxi Lụa Hoa Nhí Vintage", "Nữ", "1.650.000đ", null, null, null));
  rowW2.appendChild(buildProductCard("Áo Măng Tô Dạ Nữ Thắt Đai", "Nữ", "3.250.000đ", "3.800.000đ", "WINTER", C.dark));
  rowW2.appendChild(buildProductCard("Set Áo Tweed Chân Váy Chữ A", "Nữ", "2.190.000đ", null, "NEW", C.rose));
  rowW2.appendChild(buildProductCard("Giày Stiletto Mũi Nhọn Ánh Kim", "Phụ Kiện", "1.450.000đ", "1.750.000đ", "-17%", C.gold));
  fWomen.appendChild(rowW2);
  fWomen.appendChild(buildFooter());

  // 05 · PHỤ KIỆN (ACCESSORIES)
  const fAcc = figma.createAutoLayout('VERTICAL');
  fAcc.name = "05 · Phụ Kiện (Accessories)";
  fAcc.resize(1440, 2100);
  fAcc.layoutSizingHorizontal = 'FIXED';
  fAcc.layoutSizingVertical = 'HUG';
  fAcc.x = 6400;
  fAcc.y = 0;
  fAcc.fills = solid(C.canvas);
  fAcc.appendChild(buildHeader("accessories"));
  fAcc.appendChild(buildBanner("Trang chủ / Phụ Kiện", "EXCLUSIVE ACCESSORIES — ĐIỂM NHẤN HOÀN HẢO", "Túi da bò thật, giày gót nhọn Stiletto, thắt lưng mạ vàng và khăn lụa tơ tằm", { r: 248/255, g: 247/255, b: 244/255 }));
  const rowA1 = figma.createAutoLayout('HORIZONTAL');
  rowA1.resize(1440, 470);
  rowA1.paddingLeft = 80;
  rowA1.paddingRight = 80;
  rowA1.paddingTop = 30;
  rowA1.itemSpacing = 24;
  rowA1.appendChild(buildProductCard("Túi Xách Da Bò Khóa Mạ Vàng", "Phụ Kiện", "1.650.000đ", null, "LIMITED", C.goldMetallic));
  rowA1.appendChild(buildProductCard("Giày Stiletto Mũi Nhọn Ánh Kim", "Phụ Kiện", "1.450.000đ", "1.750.000đ", "-17%", C.gold));
  rowA1.appendChild(buildProductCard("Thắt Lưng Da Bò Khóa Kim Loại", "Phụ Kiện", "650.000đ", null, "ESSENTIAL", C.dark));
  rowA1.appendChild(buildProductCard("Khăn Lụa Tơ Tằm Họa Tiết Ý", "Phụ Kiện", "450.000đ", "550.000đ", "-18%", C.rose));
  fAcc.appendChild(rowA1);
  const rowA2 = figma.createAutoLayout('HORIZONTAL');
  rowA2.resize(1440, 470);
  rowA2.paddingLeft = 80;
  rowA2.paddingRight = 80;
  rowA2.itemSpacing = 24;
  rowA2.appendChild(buildProductCard("Ví Cầm Tay Da Cá Sấu Mini", "Phụ Kiện", "1.850.000đ", "2.100.000đ", "HOT", C.dark));
  rowA2.appendChild(buildProductCard("Kính Mát Gọng Mạ Vàng 18K", "Phụ Kiện", "1.250.000đ", null, "NEW", C.gold));
  rowA2.appendChild(buildProductCard("Cà Vạt Lụa Tơ Tằm Thủ Công", "Phụ Kiện", "490.000đ", null, null, null));
  rowA2.appendChild(buildProductCard("Ghim Cài Áo Đính Đá Swarovski", "Phụ Kiện", "390.000đ", "490.000đ", "-20%", C.goldLight));
  fAcc.appendChild(rowA2);
  fAcc.appendChild(buildFooter());

  // 06 · FLASH SALE (DEALS & COUNTDOWN)
  const fSale = figma.createAutoLayout('VERTICAL');
  fSale.name = "06 · Flash Sale (Special Deals & Countdown)";
  fSale.resize(1440, 2100);
  fSale.layoutSizingHorizontal = 'FIXED';
  fSale.layoutSizingVertical = 'HUG';
  fSale.x = 8000;
  fSale.y = 0;
  fSale.fills = solid(C.canvas);
  fSale.appendChild(buildHeader("sale"));
  const saleHero = figma.createAutoLayout('VERTICAL');
  saleHero.resize(1440, 280);
  saleHero.layoutSizingHorizontal = 'FIXED';
  saleHero.fills = solid(C.dark);
  saleHero.paddingLeft = 80;
  saleHero.paddingRight = 80;
  saleHero.primaryAxisAlignItems = 'CENTER';
  saleHero.itemSpacing = 16;
  saleHero.appendChild(createText("⚡ SIÊU ƯU ĐÃI GIỚI HẠN — GIẢM ĐẾN 50%", 13, "Bold", C.red));
  saleHero.appendChild(createText("FLASH SALE HAUTE COUTURE 2026", 36, "Bold", C.white, "Playfair Display"));
  const timerRow = figma.createAutoLayout('HORIZONTAL');
  timerRow.itemSpacing = 12;
  const times = [{ n: "08", l: "Giờ" }, { n: "30", l: "Phút" }, { n: "15", l: "Giây" }];
  for (const t of times) {
    const box = figma.createAutoLayout('VERTICAL');
    box.resize(70, 60);
    box.fills = solid(C.red);
    box.cornerRadius = 8;
    box.primaryAxisAlignItems = 'CENTER';
    box.counterAxisAlignItems = 'CENTER';
    box.appendChild(createText(t.n, 20, "Bold", C.white));
    box.appendChild(createText(t.l, 10, "Medium", C.white));
    timerRow.appendChild(box);
  }
  saleHero.appendChild(timerRow);
  fSale.appendChild(saleHero);
  const rowS1 = figma.createAutoLayout('HORIZONTAL');
  rowS1.resize(1440, 470);
  rowS1.paddingLeft = 80;
  rowS1.paddingRight = 80;
  rowS1.paddingTop = 30;
  rowS1.itemSpacing = 24;
  rowS1.appendChild(buildProductCard("Đầm Dạ Hội Lụa Satin Pháp", "Flash Sale", "1.100.000đ", "2.200.000đ", "-50%", C.red));
  rowS1.appendChild(buildProductCard("Bộ Suit Nam May Đo Ý Classic", "Flash Sale", "2.690.000đ", "4.500.000đ", "-40%", C.red));
  rowS1.appendChild(buildProductCard("Khăn Lụa Tơ Tằm Họa Tiết Ý", "Flash Sale", "275.000đ", "550.000đ", "-50%", C.red));
  rowS1.appendChild(buildProductCard("Giày Stiletto Mũi Nhọn Ánh Kim", "Flash Sale", "875.000đ", "1.750.000đ", "-50%", C.red));
  fSale.appendChild(rowS1);
  const rowS2 = figma.createAutoLayout('HORIZONTAL');
  rowS2.resize(1440, 470);
  rowS2.paddingLeft = 80;
  rowS2.paddingRight = 80;
  rowS2.itemSpacing = 24;
  rowS2.appendChild(buildProductCard("Áo Sơ Mi Lụa Cổ Đức Trắng", "Flash Sale", "590.000đ", "1.150.000đ", "-48%", C.red));
  rowS2.appendChild(buildProductCard("Chân Váy Xếp Ly Midi Dáng Xòe", "Flash Sale", "750.000đ", "1.250.000đ", "-40%", C.red));
  rowS2.appendChild(buildProductCard("Áo Blazer Dạ Tweed Chanel", "Flash Sale", "1.470.000đ", "2.450.000đ", "-40%", C.red));
  rowS2.appendChild(buildProductCard("Túi Xách Da Bò Khóa Mạ Vàng", "Flash Sale", "990.000đ", "1.650.000đ", "-40%", C.red));
  fSale.appendChild(rowS2);
  fSale.appendChild(buildFooter());

  // 07 · GIỎ HÀNG (CART & CHECKOUT)
  const fCart = figma.createAutoLayout('VERTICAL');
  fCart.name = "07 · Giỏ Hàng (Cart & Checkout)";
  fCart.resize(1440, 1600);
  fCart.layoutSizingHorizontal = 'FIXED';
  fCart.layoutSizingVertical = 'HUG';
  fCart.x = 9600;
  fCart.y = 0;
  fCart.fills = solid(C.canvas);
  fCart.appendChild(buildHeader("cart"));
  fCart.appendChild(buildBanner("Trang chủ / Giỏ hàng", "GIỎ HÀNG & THANH TOÁN AN TOÀN", "Xem lại danh sách 2 món trang phục đã chọn và áp dụng mã ưu đãi VIP", { r: 245/255, g: 243/255, b: 240/255 }));
  const cartBody = figma.createAutoLayout('HORIZONTAL');
  cartBody.resize(1440, 680);
  cartBody.paddingLeft = 80;
  cartBody.paddingRight = 80;
  cartBody.paddingTop = 36;
  cartBody.paddingBottom = 36;
  cartBody.itemSpacing = 40;
  const leftCart = figma.createAutoLayout('VERTICAL');
  leftCart.resize(800, 600);
  leftCart.itemSpacing = 16;
  const cartItems = [
    { title: "Đầm Dạ Hội Lụa Satin Pháp", cat: "Size: M • Màu: Đỏ Rượu Burgundy", price: "1.850.000đ", qty: "1", sub: "1.850.000đ" },
    { title: "Áo Blazer Dạ Tweed Chanel", cat: "Size: L • Màu: Trắng Kem Ngà", price: "2.450.000đ", qty: "1", sub: "2.450.000đ" }
  ];
  for (const it of cartItems) {
    const row = figma.createAutoLayout('HORIZONTAL');
    row.resize(800, 120);
    row.fills = solid(C.white);
    row.strokes = solid(C.border);
    row.strokeWeight = 1;
    row.cornerRadius = 10;
    row.paddingLeft = 20;
    row.paddingRight = 20;
    row.counterAxisAlignItems = 'CENTER';
    row.primaryAxisAlignItems = 'SPACE_BETWEEN';
    const itImg = figma.createAutoLayout('VERTICAL');
    itImg.resize(80, 80);
    itImg.fills = solid({ r: 243/255, g: 244/255, b: 246/255 });
    itImg.cornerRadius = 6;
    itImg.primaryAxisAlignItems = 'CENTER';
    itImg.counterAxisAlignItems = 'CENTER';
    itImg.appendChild(createText("VELORA", 10, "Bold", C.textMuted));
    row.appendChild(itImg);
    const itInfo = figma.createAutoLayout('VERTICAL');
    itInfo.resize(320, 60);
    itInfo.itemSpacing = 4;
    itInfo.appendChild(createText(it.title, 14, "Bold", C.dark));
    itInfo.appendChild(createText(it.cat, 12, "Regular", C.textMuted));
    itInfo.appendChild(createText(it.price, 13, "SemiBold", C.gold));
    row.appendChild(itInfo);
    const qtyBox = figma.createAutoLayout('HORIZONTAL');
    qtyBox.resize(100, 36);
    qtyBox.strokes = solid(C.border);
    qtyBox.strokeWeight = 1;
    qtyBox.cornerRadius = 6;
    qtyBox.primaryAxisAlignItems = 'SPACE_BETWEEN';
    qtyBox.counterAxisAlignItems = 'CENTER';
    qtyBox.paddingLeft = 12;
    qtyBox.paddingRight = 12;
    qtyBox.appendChild(createText("—", 12, "Bold", C.textDark));
    qtyBox.appendChild(createText(it.qty, 13, "Bold", C.dark));
    qtyBox.appendChild(createText("+", 13, "Bold", C.textDark));
    row.appendChild(qtyBox);
    row.appendChild(createText(it.sub, 15, "Bold", C.dark));
    row.appendChild(createText("🗑 Xóa", 12, "Medium", C.red));
    leftCart.appendChild(row);
  }
  cartBody.appendChild(leftCart);
  const rightCart = figma.createAutoLayout('VERTICAL');
  rightCart.resize(440, 480);
  rightCart.fills = solid(C.white);
  rightCart.strokes = solid(C.border);
  rightCart.strokeWeight = 1;
  rightCart.cornerRadius = 12;
  rightCart.paddingTop = 28;
  rightCart.paddingBottom = 28;
  rightCart.paddingLeft = 24;
  rightCart.paddingRight = 24;
  rightCart.itemSpacing = 16;
  rightCart.appendChild(createText("TỔNG QUAN ĐƠN HÀNG", 16, "Bold", C.dark, "Playfair Display"));
  const sumRows = [
    { label: "Tạm tính (2 món):", val: "4.300.000đ" },
    { label: "Voucher VIP (15%):", val: "-645.000đ", isRed: true },
    { label: "Phí vận chuyển:", val: "Miễn phí (Freeship VIP)" }
  ];
  for (const s of sumRows) {
    const r = figma.createAutoLayout('HORIZONTAL');
    r.resize(392, 24);
    r.primaryAxisAlignItems = 'SPACE_BETWEEN';
    r.appendChild(createText(s.label, 13, "Regular", C.textDark));
    r.appendChild(createText(s.val, 13, "Bold", s.isRed ? C.red : C.dark));
    rightCart.appendChild(r);
  }
  const divider = figma.createAutoLayout('HORIZONTAL');
  divider.resize(392, 1);
  divider.fills = solid(C.border);
  rightCart.appendChild(divider);
  const totalRow = figma.createAutoLayout('HORIZONTAL');
  totalRow.resize(392, 30);
  totalRow.primaryAxisAlignItems = 'SPACE_BETWEEN';
  totalRow.counterAxisAlignItems = 'CENTER';
  totalRow.appendChild(createText("Tổng thanh toán:", 14, "Bold", C.dark));
  totalRow.appendChild(createText("3.655.000đ", 20, "Bold", C.gold, "Playfair Display"));
  rightCart.appendChild(totalRow);
  const chkBtn = figma.createAutoLayout('HORIZONTAL');
  chkBtn.resize(392, 46);
  chkBtn.fills = solid(C.dark);
  chkBtn.cornerRadius = 8;
  chkBtn.primaryAxisAlignItems = 'CENTER';
  chkBtn.counterAxisAlignItems = 'CENTER';
  chkBtn.appendChild(createText("TIẾN HÀNH THANH TOÁN →", 13, "Bold", C.white));
  rightCart.appendChild(chkBtn);
  cartBody.appendChild(rightCart);
  fCart.appendChild(cartBody);
  fCart.appendChild(buildFooter());

  // 08 · TÀI KHOẢN (ACCOUNT & VIP DASHBOARD)
  const fAccnt = figma.createAutoLayout('VERTICAL');
  fAccnt.name = "08 · Tài Khoản & Quản Trị (Account & CRM)";
  fAccnt.resize(1440, 1800);
  fAccnt.layoutSizingHorizontal = 'FIXED';
  fAccnt.layoutSizingVertical = 'HUG';
  fAccnt.x = 11200;
  fAccnt.y = 0;
  fAccnt.fills = solid(C.canvas);
  fAccnt.appendChild(buildHeader("account"));
  const vipHead = figma.createAutoLayout('HORIZONTAL');
  vipHead.resize(1440, 260);
  vipHead.fills = solid(C.dark);
  vipHead.paddingLeft = 80;
  vipHead.paddingRight = 80;
  vipHead.primaryAxisAlignItems = 'SPACE_BETWEEN';
  vipHead.counterAxisAlignItems = 'CENTER';
  const userLeft = figma.createAutoLayout('VERTICAL');
  userLeft.itemSpacing = 8;
  userLeft.appendChild(createText("HỘI VIÊN CAO CẤP", 12, "Bold", C.gold));
  userLeft.appendChild(createText("Trường Đàm (VIP Gold Member)", 28, "Bold", C.white, "Playfair Display"));
  userLeft.appendChild(createText("damtruong14062007@gmail.com • Điểm tích lũy: 1.250 / 2.000 pts", 13, "Regular", { r: 212/255, g: 212/255, b: 216/255 }));
  vipHead.appendChild(userLeft);
  const metalCard = figma.createAutoLayout('VERTICAL');
  metalCard.resize(340, 160);
  metalCard.fills = solid(C.goldLight);
  metalCard.strokes = solid(C.goldMetallic);
  metalCard.strokeWeight = 1.5;
  metalCard.cornerRadius = 14;
  metalCard.paddingTop = 18;
  metalCard.paddingLeft = 20;
  metalCard.paddingRight = 20;
  metalCard.itemSpacing = 10;
  metalCard.appendChild(createText("VELORA VIP PRIVILEGE", 11, "Bold", C.gold));
  metalCard.appendChild(createText("HẠNG THẺ: VIP GOLD", 18, "Bold", C.dark, "Playfair Display"));
  metalCard.appendChild(createText("Đặc quyền: Chiết khấu 15% • Freeship toàn quốc • Quà sinh nhật", 11, "Regular", C.textDark));
  metalCard.appendChild(createText("Tích lũy thêm 750 pts để thăng hạng VIP Diamond!", 11, "SemiBold", C.gold));
  vipHead.appendChild(metalCard);
  fAccnt.appendChild(vipHead);
  const accBody = figma.createAutoLayout('VERTICAL');
  accBody.resize(1440, 620);
  accBody.paddingLeft = 80;
  accBody.paddingRight = 80;
  accBody.paddingTop = 36;
  accBody.itemSpacing = 20;
  accBody.appendChild(createText("LỊCH SỬ ĐƠN HÀNG GẦN ĐÂY", 20, "Bold", C.dark, "Playfair Display"));
  const ordTable = figma.createAutoLayout('VERTICAL');
  ordTable.resize(1280, 260);
  ordTable.fills = solid(C.white);
  ordTable.strokes = solid(C.border);
  ordTable.strokeWeight = 1;
  ordTable.cornerRadius = 10;
  ordTable.itemSpacing = 0;
  const tHead = figma.createAutoLayout('HORIZONTAL');
  tHead.resize(1280, 48);
  tHead.fills = solid({ r: 248/255, g: 248/255, b: 248/255 });
  tHead.paddingLeft = 24;
  tHead.paddingRight = 24;
  tHead.primaryAxisAlignItems = 'SPACE_BETWEEN';
  tHead.counterAxisAlignItems = 'CENTER';
  tHead.appendChild(createText("MÃ ĐƠN HÀNG", 12, "Bold", C.textDark));
  tHead.appendChild(createText("NGÀY ĐẶT", 12, "Bold", C.textDark));
  tHead.appendChild(createText("SẢN PHẨM", 12, "Bold", C.textDark));
  tHead.appendChild(createText("TỔNG TIỀN", 12, "Bold", C.textDark));
  tHead.appendChild(createText("TRẠNG THÁI", 12, "Bold", C.textDark));
  tHead.appendChild(createText("THAO TÁC", 12, "Bold", C.textDark));
  ordTable.appendChild(tHead);
  const orders = [
    { code: "#VEL-2026-8891", date: "18/11/2026", item: "Đầm Dạ Hội Lụa Satin Pháp", total: "1.850.000đ", status: "Đang giao hàng", stColor: C.gold },
    { code: "#VEL-2026-7732", date: "10/11/2026", item: "Bộ Suit Nam May Đo Ý", total: "3.890.000đ", status: "Hoàn thành", stColor: { r: 22/255, g: 163/255, b: 74/255 } },
    { code: "#VEL-2026-6610", date: "25/10/2026", item: "Túi Xách Da Bò Khóa Vàng", total: "1.650.000đ", status: "Hoàn thành", stColor: { r: 22/255, g: 163/255, b: 74/255 } }
  ];
  for (const o of orders) {
    const row = figma.createAutoLayout('HORIZONTAL');
    row.resize(1280, 56);
    row.strokes = solid(C.border);
    row.strokeWeight = 0.5;
    row.paddingLeft = 24;
    row.paddingRight = 24;
    row.primaryAxisAlignItems = 'SPACE_BETWEEN';
    row.counterAxisAlignItems = 'CENTER';
    row.appendChild(createText(o.code, 13, "Bold", C.dark));
    row.appendChild(createText(o.date, 13, "Regular", C.textMuted));
    row.appendChild(createText(o.item, 13, "Medium", C.dark));
    row.appendChild(createText(o.total, 13, "Bold", C.dark));
    row.appendChild(createText(o.status, 12, "SemiBold", o.stColor));
    row.appendChild(createText("📄 Xem hóa đơn", 12, "Bold", C.gold));
    ordTable.appendChild(row);
  }
  accBody.appendChild(ordTable);
  const adminCard = figma.createAutoLayout('HORIZONTAL');
  adminCard.resize(1280, 100);
  adminCard.fills = solid(C.dark2);
  adminCard.cornerRadius = 10;
  adminCard.paddingLeft = 28;
  adminCard.paddingRight = 28;
  adminCard.primaryAxisAlignItems = 'SPACE_BETWEEN';
  adminCard.counterAxisAlignItems = 'CENTER';
  const admLeft = figma.createAutoLayout('VERTICAL');
  admLeft.itemSpacing = 4;
  admLeft.appendChild(createText("HỆ THỐNG QUẢN TRỊ ADMIN VELORA", 12, "Bold", C.gold));
  admLeft.appendChild(createText("Quản lý 64 sản phẩm • 12 Đơn hàng chờ xử lý • 4 Khách hàng VIP", 14, "Medium", C.white));
  adminCard.appendChild(admLeft);
  const admBtn = figma.createAutoLayout('HORIZONTAL');
  admBtn.fills = solid(C.gold);
  admBtn.cornerRadius = 6;
  admBtn.paddingLeft = 18;
  admBtn.paddingRight = 18;
  admBtn.paddingTop = 10;
  admBtn.paddingBottom = 10;
  admBtn.appendChild(createText("Mở Bảng Quản Trị CRM", 12, "Bold", C.white));
  adminCard.appendChild(admBtn);
  accBody.appendChild(adminCard);
  fAccnt.appendChild(accBody);
  fAccnt.appendChild(buildFooter());

  console.log("✅ ĐÃ TẠO XONG TOÀN BỘ 7 TRANG TRÊN CANVAS FIGMA!");
})();
