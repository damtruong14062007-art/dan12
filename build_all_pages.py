import os

BASE_DIR = r"C:\Users\Acer\.gemini\antigravity\scratch\velora-fashion"

def get_head(title, desc="VELORA — Thương hiệu thời trang cao cấp phong cách sang trọng, tự tin và thời thượng."):
    return f"""<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{title} — VELORA Premium Fashion</title>
  <meta name="description" content="{desc}">

  <!-- Google Fonts: Bodoni Moda, Playfair Display & Plus Jakarta Sans -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,opsz,wght@0,6..96,400..900;1,6..96,400..900&family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,800;1,400;1,600&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">

  <!-- Bootstrap 5.3.3 CSS -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
  <!-- Bootstrap Icons 1.11.3 -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
  <!-- Custom Stylesheet -->
  <link rel="stylesheet" href="style.css">
</head>
"""

def get_header(active_page):
    def act(p):
        return " active" if active_page == p else ""

    return f"""  <!-- ===================================================================
       1. TOP ANNOUNCEMENT & PROMO BAR
       =================================================================== -->
  <div class="top-promo-bar" id="topAnnouncementBar">
    <div class="container-fluid px-3 px-xl-5">
      <div class="top-promo-inner d-flex justify-content-between align-items-center flex-nowrap text-nowrap">
        <!-- Group 1: 15 Showroom toàn quốc | Hotline: 1900 8899 (08:30 - 22:00) -->
        <div class="top-promo-left d-flex align-items-center gap-2 gap-md-3 flex-shrink-0">
          <span><i class="bi bi-geo-alt me-1 text-danger"></i> 15 Showroom toàn quốc</span>
          <span class="top-promo-sep text-white-50">|</span>
          <a href="tel:19008899" class="text-white text-decoration-none" id="topPromoHotlineLink">
            <i class="bi bi-telephone me-1 text-danger"></i> Hotline: <b id="topPromoHotlineNum" class="nav-hotline-num store-hotline-val">1900 8899</b> <span class="d-none d-xxl-inline text-white-50 store-hours-val" id="topPromoHotlineHours">(08:30 - 22:00)</span>
          </a>
        </div>

        <!-- Group 2: Ưu đãi hôm nay Miễn phí giao hàng đơn từ 500.000đ • Nhập mã VELORA10 giảm 10% -->
        <div class="top-promo-center d-flex align-items-center justify-content-center gap-2 px-2 flex-grow-1 overflow-hidden">
          <span class="top-promo-badge flex-shrink-0">Ưu đãi hôm nay</span>
          <span class="top-promo-text text-truncate" id="topAnnouncementText">
            Miễn phí giao hàng đơn từ <b>500.000đ</b> <span class="mx-1">•</span> Nhập mã <span class="badge bg-warning text-dark px-1.5 py-0.5 fw-bold">VELORA10</span> giảm 10%
          </span>
        </div>

        <!-- Group 3: Tra cứu đơn hàng | 100% Chính hãng -->
        <div class="top-promo-right d-flex align-items-center gap-2 gap-md-3 flex-shrink-0">
          <a href="account.html" class="text-white text-decoration-none hover-underline">
            <i class="bi bi-truck me-1 text-warning"></i> Tra cứu đơn hàng
          </a>
          <span class="top-promo-sep text-white-50">|</span>
          <span class="text-white-50"><i class="bi bi-patch-check-fill me-1 text-info"></i> 100% Chính hãng</span>
        </div>
      </div>
    </div>
  </div>

  <!-- ===================================================================
       2. TWO-TIER LUXURY NAVBAR (ROW 1: BRAND & ACTIONS; ROW 2: CENTERED MENU)
       =================================================================== -->
  <header class="site-header sticky-top bg-white border-bottom shadow-sm">
    <!-- ROW 1: BRAND LOGO + LIVE INSTANT SEARCH + UTILITY ACTIONS -->
    <div class="header-main-row py-2 py-md-3">
      <div class="container d-flex align-items-center justify-content-between gap-3">
        <!-- 100% Vector Crisp Logo (Infinite Sharpness on Retina/4K) -->
        <a href="index.html" class="d-inline-flex align-items-center text-decoration-none" title="VELORA — Premium Fashion">
          <img src="velora_logo_navbar.svg" alt="VELORA" class="img-fluid" style="height: 42px; width: auto; object-fit: contain;">
        </a>

        <!-- Live Instant Search Bar (Center) -->
        <div class="nav-search-wrap flex-grow-1 mx-2 mx-lg-4 position-relative d-none d-md-block" style="max-width: 520px;">
          <form class="d-flex" onsubmit="event.preventDefault(); performSearch();">
            <div class="input-group">
              <span class="input-group-text bg-light border-end-0 text-muted ps-3">
                <i class="bi bi-search"></i>
              </span>
              <input type="text" id="navSearchInput" class="form-control bg-light border-start-0 border-end-0 shadow-none ps-0" placeholder="Tìm kiếm áo blazer, đầm dạ hội, polo, túi xách..." autocomplete="off">
              <button class="btn btn-dark px-3 fw-semibold" type="button" onclick="performSearch()">
                Tìm kiếm
              </button>
            </div>
          </form>
          <!-- Live Autocomplete Search Dropdown -->
          <div id="searchResultsDropdown" class="search-dropdown-menu"></div>
        </div>

        <!-- Utility Action Icons -->
        <div class="d-flex align-items-center gap-2 gap-md-3">
          <!-- Hotline pill (desktop - clickable & styled) -->
          <a href="tel:19008899" class="nav-hotline-pill d-none d-xl-flex align-items-center text-decoration-none shadow-sm" title="Gọi tổng đài tư vấn & CSKH 1900 8899">
            <div class="nav-hotline-icon">
              <i class="bi bi-headset"></i>
            </div>
            <div class="nav-hotline-content">
              <span class="nav-hotline-tag">HỖ TRỢ 24/7</span>
              <span class="nav-hotline-num">1900 8899</span>
            </div>
          </a>

          <!-- Wishlist Button -->
          <button class="btn btn-light rounded-circle position-relative d-inline-flex align-items-center justify-content-center p-0 flex-shrink-0 me-1" onclick="showWishlistModal()" title="Sản phẩm yêu thích" style="width: 40px; height: 40px; min-width: 40px; min-height: 40px;">
            <i class="bi bi-heart fs-5" style="line-height: 1; pointer-events: none;"></i>
            <span class="badge rounded-pill bg-danger wishlist-count-badge" id="navWishlistBadge" style="position: absolute; top: -3px; right: -3px; font-size: 0.65rem;">0</span>
          </button>

          <!-- User Account Link / Button -->
          <a href="account.html" class="btn btn-light rounded-pill px-3 py-2 d-flex align-items-center gap-2 text-decoration-none" title="Tài khoản cá nhân">
            <img id="navUserAvatar" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80" class="rounded-circle border" style="width: 22px; height: 22px; object-fit: cover; display: none;" alt="Avatar">
            <i class="bi bi-person fs-5" id="navDefaultUserIcon"></i>
            <span class="d-none d-lg-inline fw-semibold small" id="navAccountName">Tài khoản</span>
          </a>

          <!-- Shopping Cart Button -->
          <button class="btn btn-dark rounded-pill px-3 py-2 d-flex align-items-center gap-2 shadow-sm" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasCart" title="Giỏ hàng của bạn">
            <i class="bi bi-bag fs-5"></i>
            <span class="d-none d-sm-inline fw-semibold small">Giỏ hàng</span>
            <span class="badge bg-danger rounded-pill cart-badge-count" style="font-size: 0.7rem;">0</span>
          </button>

          <!-- Mobile Hamburger Toggle -->
          <button class="btn btn-outline-dark d-lg-none p-2" type="button" data-bs-toggle="collapse" data-bs-target="#mobileNavCollapse" aria-label="Toggle navigation">
            <i class="bi bi-list fs-4"></i>
          </button>
        </div>
      </div>

      <!-- Mobile Search Field -->
      <div class="container d-md-none mt-2">
        <div class="input-group">
          <input type="text" class="form-control bg-light" placeholder="Tìm kiếm sản phẩm..." onkeyup="if(event.key==='Enter') performSearch(this.value)">
          <button class="btn btn-dark" type="button"><i class="bi bi-search"></i></button>
        </div>
      </div>
    </div>

    <!-- ROW 2: CENTERED HORIZONTAL MENU ROW WITH ICONS (CĂN GIỮA TOÀN BỘ) -->
    <div class="nav-menu-bar collapse d-lg-block" id="mobileNavCollapse">
      <div class="container">
        <ul class="navbar-nav d-flex flex-column flex-lg-row justify-content-center align-items-center gap-1 gap-lg-2 m-0 p-0 list-unstyled">
          <li class="nav-item">
            <a href="index.html" class="nav-menu-link{act('home')}">
              <i class="bi bi-house-door"></i>
              <span>Trang chủ</span>
            </a>
          </li>
          <li class="nav-item">
            <a href="new-arrivals.html" class="nav-menu-link{act('new-arrivals')}">
              <i class="bi bi-stars text-danger"></i>
              <span>Hàng new</span>
              <span class="badge bg-danger ms-1" style="font-size: 0.6rem;">HOT</span>
            </a>
          </li>
          <li class="nav-item">
            <a href="men.html" class="nav-menu-link{act('men')}">
              <i class="bi bi-gender-male"></i>
              <span>Men (nam)</span>
            </a>
          </li>
          <li class="nav-item">
            <a href="women.html" class="nav-menu-link{act('women')}">
              <i class="bi bi-gender-female text-primary"></i>
              <span>Women (nữ)</span>
            </a>
          </li>
          <li class="nav-item">
            <a href="accessories.html" class="nav-menu-link{act('accessories')}">
              <i class="bi bi-handbag"></i>
              <span>Phụ kiện</span>
            </a>
          </li>
          <li class="nav-item">
            <a href="flash-sale.html" class="nav-menu-link flash-sale-link{act('flash-sale')}">
              <i class="bi bi-lightning-charge-fill text-warning"></i>
              <span>Flash Sale ⚡</span>
              <span class="badge bg-danger ms-1 badge-pulse" style="font-size: 0.6rem;">GIẢM 50%</span>
            </a>
          </li>
          <li class="nav-item">
            <a href="cart.html" class="nav-menu-link{act('cart')}">
              <i class="bi bi-bag-check"></i>
              <span>Giỏ hàng</span>
              <span class="badge bg-secondary rounded-pill ms-1 cart-badge-count" style="font-size: 0.65rem;">0</span>
            </a>
          </li>
          <li class="nav-item">
            <a href="account.html" class="nav-menu-link{act('account')}">
              <i class="bi bi-person-circle"></i>
              <span>Tài khoản</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </header>
"""

def get_footer_and_modals():
    return """  <!-- ===================================================================
       FOOTER - LUXURY VELORA BRANDING
       =================================================================== -->
  <footer class="velora-footer bg-dark text-white pt-5 pb-4 mt-5">
    <div class="container">
      <div class="row g-4 pb-4 border-bottom border-secondary border-opacity-25">
        <!-- Col 1: Brand Info -->
        <div class="col-lg-4 col-md-6">
          <div class="mb-3">
            <img src="velora_logo_footer.svg" alt="VELORA" style="height: 48px; width: auto; object-fit: contain;">
          </div>
          <p class="text-white-50 small pe-lg-4 mb-3">
            Thương hiệu thời trang định hình phong cách sang trọng, tự tin và thời thượng. Chất lượng chuẩn quốc tế, tinh xảo trong từng đường may.
          </p>
          <div class="small text-white-50 d-flex flex-column gap-2">
            <div><i class="bi bi-telephone me-2 text-warning"></i> Hotline: <b class="text-white footer-hotline store-hotline-val">1900 8899</b> <span class="text-white-50 store-hours-val">(08:30 - 22:00)</span></div>
            <div><i class="bi bi-envelope me-2 text-warning"></i> Email: <a href="mailto:cskh@velorafashion.vn" class="text-white-50 text-decoration-none footer-email store-email-val">cskh@velorafashion.vn</a></div>
            <div><i class="bi bi-geo-alt me-2 text-warning"></i> Địa chỉ: <span class="footer-address store-address-val">123 Đường Nam Kỳ Khởi Nghĩa, Quận 1, TP. HCM</span> <button type="button" class="btn btn-link btn-sm text-warning p-0 ms-1 text-decoration-none" onclick="copyStoreAddress()" title="Sao chép địa chỉ showroom"><i class="bi bi-clipboard"></i></button></div>
          </div>
        </div>

        <!-- Col 2: Hỗ trợ khách hàng -->
        <div class="col-lg-2 col-md-6 col-6">
          <h6 class="text-uppercase fw-bold text-white mb-3" style="font-size: 0.85rem; letter-spacing: 0.1em;">Hỗ trợ khách hàng</h6>
          <ul class="list-unstyled small d-flex flex-column gap-2 text-white-50">
            <li><a href="javascript:void(0)" onclick="sendAiMessage('Tư vấn chọn size'); toggleAiChat();" class="text-white-50 text-decoration-none">Hướng dẫn chọn size</a></li>
            <li><a href="javascript:void(0)" onclick="sendAiMessage('Chính sách đổi trả'); toggleAiChat();" class="text-white-50 text-decoration-none">Chính sách đổi trả 15 ngày</a></li>
            <li><a href="javascript:void(0)" onclick="sendAiMessage('Chính sách giao hàng'); toggleAiChat();" class="text-white-50 text-decoration-none">Chính sách giao hàng toàn quốc</a></li>
            <li><a href="javascript:void(0)" onclick="openZaloModal()" class="text-white-50 text-decoration-none">Tư vấn Zalo 1:1</a></li>
            <li><a href="account.html" class="text-white-50 text-decoration-none">Tra cứu đơn hàng</a></li>
          </ul>
        </div>

        <!-- Col 3: Về chúng tôi -->
        <div class="col-lg-2 col-md-6 col-6">
          <h6 class="text-uppercase fw-bold text-white mb-3" style="font-size: 0.85rem; letter-spacing: 0.1em;">Về chúng tôi</h6>
          <ul class="list-unstyled small d-flex flex-column gap-2 text-white-50">
            <li><a href="index.html" class="text-white-50 text-decoration-none">Câu chuyện thương hiệu</a></li>
            <li><a href="javascript:void(0)" onclick="showToast('Hệ thống 15 Showroom mở cửa từ 8h30 - 22h00 hàng ngày')" class="text-white-50 text-decoration-none">Hệ thống 15 cửa hàng showroom</a></li>
            <li><a href="account.html" class="text-white-50 text-decoration-none">Khách hàng thân thiết VIP Club</a></li>
            <li><a href="javascript:void(0)" onclick="showToast('Thông tin tuyển dụng: Liên hệ hr@velorafashion.vn')" class="text-white-50 text-decoration-none">Tuyển dụng & Sự nghiệp</a></li>
            <li><a href="javascript:void(0)" onclick="openMessengerModal()" class="text-white-50 text-decoration-none">Hợp tác kinh doanh</a></li>
          </ul>
        </div>

        <!-- Col 4: Newsletter & Social -->
        <div class="col-lg-4 col-md-6">
          <h6 class="text-uppercase fw-bold text-white mb-3" style="font-size: 0.85rem; letter-spacing: 0.1em;">Đăng ký nhận voucher 10%</h6>
          <p class="text-white-50 small mb-3">Nhận thông tin bộ sưu tập mới nhất và voucher giảm 10% gửi thẳng vào hộp thư của bạn.</p>
          <form class="newsletter-form mb-3" onsubmit="event.preventDefault(); showToast('Đã gửi mã voucher VELORA10 vào email của bạn!'); this.reset();">
            <div class="input-group">
              <input type="email" class="form-control bg-dark border-secondary text-white" placeholder="Nhập địa chỉ email của bạn..." required>
              <button class="btn btn-light fw-bold px-3" type="submit">Gửi</button>
            </div>
          </form>
          <div class="d-flex align-items-center gap-3">
            <span class="text-white-50 small">Kết nối cùng chúng tôi:</span>
            <div class="d-flex gap-2">
              <a href="https://facebook.com" target="_blank" rel="noopener" class="btn btn-sm btn-outline-secondary rounded-circle text-white"><i class="bi bi-facebook"></i></a>
              <a href="https://instagram.com" target="_blank" rel="noopener" class="btn btn-sm btn-outline-secondary rounded-circle text-white"><i class="bi bi-instagram"></i></a>
              <a href="https://tiktok.com" target="_blank" rel="noopener" class="btn btn-sm btn-outline-secondary rounded-circle text-white"><i class="bi bi-tiktok"></i></a>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="pt-4 d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
        <div class="small text-white-50">
          © 2026 <b>VELORA</b>. Tất cả quyền được bảo lưu. Thiết kế giao diện thời trang chuẩn thương mại điện tử cao cấp.
        </div>
        <div class="d-flex align-items-center gap-2">
          <span class="badge bg-secondary bg-opacity-25 text-white-50 border border-secondary border-opacity-25">VISA</span>
          <span class="badge bg-secondary bg-opacity-25 text-white-50 border border-secondary border-opacity-25">MASTER</span>
          <span class="badge bg-secondary bg-opacity-25 text-white-50 border border-secondary border-opacity-25">MOMO</span>
          <span class="badge bg-secondary bg-opacity-25 text-white-50 border border-secondary border-opacity-25">VNPAY</span>
          <span class="badge bg-secondary bg-opacity-25 text-white-50 border border-secondary border-opacity-25">COD</span>
        </div>
      </div>
    </div>
  </footer>

  <!-- ===================================================================
       FLOATING CUSTOMER SUPPORT WIDGET (ZALO, MESSENGER, AI CSKH)
       =================================================================== -->
  <div class="floating-support-wrap" id="floatingSupportWrap">
    <!-- AI Stylist Button (Main Highlight) -->
    <button type="button" class="support-action-btn btn-support-ai" onclick="toggleAiChat()" title="AI Stylist 24/7 ✨">
      <div class="ai-pulse-ring"></div>
      <i class="bi bi-robot fs-4"></i>
      <span class="ai-online-badge"></span>
      <span class="support-tooltip">AI Stylist 24/7 ✨</span>
    </button>

    <!-- Facebook Messenger Button -->
    <button type="button" class="support-action-btn btn-support-messenger" onclick="openMessengerModal()" title="Facebook Messenger">
      <i class="bi bi-messenger fs-4"></i>
      <span class="support-tooltip">Chat Messenger</span>
    </button>

    <!-- Zalo 1:1 Button -->
    <button type="button" class="support-action-btn btn-support-zalo" onclick="openZaloModal()" title="Tư vấn Zalo 1:1">
      <span class="fw-bold" style="font-size: 0.95rem; font-family: sans-serif;">Zalo</span>
      <span class="support-tooltip">Tư vấn Zalo 1:1</span>
    </button>

    <!-- Status pill callout above buttons -->
    <div class="support-callout-pill shadow-sm d-none d-md-flex align-items-center gap-2 mb-1">
      <span class="status-indicator-dot"></span>
      <span class="small fw-semibold">Stylist & CSKH online</span>
    </div>
  </div>

  <!-- AI CHAT DRAWER: VELORA PRO FASHION STYLIST 2.0 -->
  <div id="veloraAiChatBox" class="velora-ai-chat-box shadow-lg">
    <!-- Header with Luxury Monogram & Action Controls -->
    <div class="ai-chat-header">
      <div class="d-flex align-items-center gap-2">
        <div class="ai-avatar-wrap">
          <div class="ai-chat-avatar">V</div>
          <span class="ai-avatar-online-dot"></span>
        </div>
        <div>
          <div class="d-flex align-items-center gap-2">
            <h6 class="m-0 fw-bold text-white" style="font-size: 0.95rem; letter-spacing: 0.3px;">Velora AI Stylist</h6>
            <span class="ai-badge-pro"><i class="bi bi-stars"></i>PRO 2.0</span>
          </div>
          <div class="d-flex align-items-center gap-2 mt-1">
            <span class="small" style="font-size: 0.7rem; color: #10b981;"><i class="bi bi-circle-fill me-1" style="font-size: 0.45rem;"></i>Sẵn sàng tư vấn</span>
            <span class="text-white-50" style="font-size: 0.65rem;">•</span>
            <span class="text-white-50" style="font-size: 0.68rem;">Fashion Model v2.4</span>
          </div>
        </div>
      </div>
      <div class="d-flex align-items-center gap-1">
        <button type="button" class="ai-header-btn" onclick="toggleAiSizeDrawer()" title="Thước đo size AI">
          <i class="bi bi-rulers"></i>
        </button>
        <button type="button" class="ai-header-btn" onclick="resetAiChat()" title="Làm mới cuộc trò chuyện">
          <i class="bi bi-arrow-counterclockwise"></i>
        </button>
        <button type="button" class="ai-header-btn" onclick="toggleAiChat()" title="Đóng">
          <i class="bi bi-x-lg"></i>
        </button>
      </div>
    </div>

    <!-- COLLAPSIBLE SMART SIZE CALCULATOR DRAWER -->
    <div id="aiSizeWidgetDrawer" class="ai-size-drawer">
      <div class="d-flex align-items-center justify-content-between mb-2">
        <span class="fw-bold text-dark small"><i class="bi bi-magic me-1 text-warning"></i> Thước Đo Size Chuẩn Dáng AI</span>
        <button type="button" class="btn btn-sm btn-link text-secondary p-0 text-decoration-none" onclick="toggleAiSizeDrawer()">
          <i class="bi bi-chevron-up"></i>
        </button>
      </div>
      
      <!-- Gender Selector -->
      <div class="d-flex gap-2 mb-2">
        <div class="ai-size-gender-pill active" id="aiGenderFemale" onclick="setAiSizeGender('female')">
          <i class="bi bi-gender-female me-1"></i> Nữ
        </div>
        <div class="ai-size-gender-pill" id="aiGenderMale" onclick="setAiSizeGender('male')">
          <i class="bi bi-gender-male me-1"></i> Nam
        </div>
      </div>

      <!-- Height Slider -->
      <div class="ai-size-slider-row">
        <label>
          <span>Chiều cao</span>
          <span class="slider-val" id="aiHeightVal">162 cm</span>
        </label>
        <input type="range" class="form-range" id="aiHeightRange" min="140" max="195" value="162" oninput="updateAiSizeRange()">
      </div>

      <!-- Weight Slider -->
      <div class="ai-size-slider-row">
        <label>
          <span>Cân nặng</span>
          <span class="slider-val" id="aiWeightVal">52 kg</span>
        </label>
        <input type="range" class="form-range" id="aiWeightRange" min="38" max="100" value="52" oninput="updateAiSizeRange()">
      </div>

      <!-- Desired Fit -->
      <div class="d-flex align-items-center justify-content-between mb-3">
        <span class="small text-muted" style="font-size:0.75rem;">Gu mặc:</span>
        <div class="d-flex gap-1">
          <span class="ai-size-fit-pill active" id="aiFitRegular" onclick="setAiSizeFit('regular')">Vừa vặn</span>
          <span class="ai-size-fit-pill" id="aiFitSlim" onclick="setAiSizeFit('slim')">Tôn dáng</span>
          <span class="ai-size-fit-pill" id="aiFitOversize" onclick="setAiSizeFit('oversize')">Rộng rãi</span>
        </div>
      </div>

      <!-- Action Button -->
      <button type="button" class="btn btn-dark btn-sm w-100 rounded-pill fw-bold" onclick="calculateAiSizeFromDrawer()">
        <i class="bi bi-stars me-1 text-warning"></i> Phân Tích & Chọn Size Ngay
      </button>
    </div>

    <!-- Quick Prompt Chips Carousel -->
    <div class="ai-chips-bar">
      <button class="ai-chip-pill" onclick="toggleAiSizeDrawer()"><i class="bi bi-rulers text-primary"></i> Đo size tự động</button>
      <button class="ai-chip-pill" onclick="handleAiChipClick('Gợi ý đầm đi tiệc sang chảnh')"><i class="bi bi-gem text-danger"></i> Đầm dự tiệc</button>
      <button class="ai-chip-pill" onclick="handleAiChipClick('Set đồ công sở thanh lịch tôn dáng')"><i class="bi bi-briefcase text-secondary"></i> Công sở lịch thiệp</button>
      <button class="ai-chip-pill" onclick="handleAiChipClick('Outfit dạo phố cà phê cuối tuần')"><i class="bi bi-cup-hot text-warning"></i> Dạo phố cuối tuần</button>
      <button class="ai-chip-pill" onclick="handleAiChipClick('Phối đồ nam chuẩn quý ông')"><i class="bi bi-person-badge text-info"></i> Quý ông lịch lãm</button>
      <button class="ai-chip-pill" onclick="handleAiChipClick('Mã giảm giá hôm nay')"><i class="bi bi-ticket-perforated text-success"></i> Voucher VIP 10%</button>
      <button class="ai-chip-pill" onclick="handleAiChipClick('Deal Flash Sale giờ vàng')"><i class="bi bi-lightning-charge text-danger"></i> Flash Sale</button>
      <button class="ai-chip-pill" onclick="handleAiChipClick('Tra cứu đơn hàng của tôi')"><i class="bi bi-truck text-primary"></i> Tra cứu đơn</button>
    </div>

    <!-- Chat Messages Stream -->
    <div id="aiChatBody" class="ai-chat-body">
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
    </div>

    <!-- Chat Input Footer -->
    <div class="ai-chat-footer">
      <div class="input-group align-items-center bg-light rounded-pill px-2 py-1 border">
        <button class="btn btn-link text-secondary p-1 border-0" type="button" onclick="simulateVoiceInput()" title="Nói với AI Stylist">
          <i class="bi bi-mic-fill fs-5"></i>
        </button>
        <input type="text" id="aiChatInput" class="form-control border-0 bg-transparent shadow-none" placeholder="Hỏi AI: 'Phối đồ tiệc', 'Đo size 1m62 50kg'..." onkeydown="if(event.key==='Enter'){event.preventDefault(); sendAiMessage();}">
        <button class="btn btn-dark rounded-circle p-2 d-flex align-items-center justify-content-center" style="width: 34px; height: 34px;" type="button" onclick="sendAiMessage()" title="Gửi tin nhắn">
          <i class="bi bi-arrow-up text-white" style="font-size: 1.1rem; -webkit-text-stroke: 0.5px;"></i>
        </button>
      </div>
    </div>

    <!-- SIMULATED VOICE LISTENING OVERLAY -->
    <div id="aiVoiceOverlay" class="ai-voice-overlay">
      <div class="ai-chat-avatar mb-3" style="width: 58px; height: 58px; font-size: 1.6rem;">V</div>
      <h6 class="text-white fw-bold mb-1">Đang lắng nghe bạn nói...</h6>
      <p class="text-white-50 small mb-2" id="aiVoicePromptHint">"Tư vấn cho mình set đồ đi tiệc cuối tuần..."</p>
      <div class="ai-voice-waves">
        <div class="ai-wave-bar"></div>
        <div class="ai-wave-bar"></div>
        <div class="ai-wave-bar"></div>
        <div class="ai-wave-bar"></div>
        <div class="ai-wave-bar"></div>
      </div>
      <button class="btn btn-sm btn-outline-light rounded-pill px-3 mt-2" onclick="cancelVoiceInput()">Hủy bỏ</button>
    </div>
  </div>

  <!-- MODAL: ZALO CONSULTATION -->
  <div class="modal fade" id="zaloModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" style="max-width: 440px;">
      <div class="modal-content border-0 shadow-lg rounded-4 overflow-hidden">
        <div class="modal-header text-white p-3 d-flex justify-content-between align-items-center" style="background: linear-gradient(135deg, #0068ff 0%, #0084ff 100%) !important;">
          <div class="d-flex align-items-center gap-2">
            <span class="bg-white text-primary rounded-circle fw-bold px-2 py-1 small" style="font-size:0.75rem;">Zalo</span>
            <h6 class="m-0 fw-bold">Tư Vấn Zalo 1:1 Cùng Stylist</h6>
          </div>
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
        </div>
        <div class="modal-body p-4 text-center">
          <div class="zalo-qr-box mb-3">
            <div class="bg-white p-3 rounded-3 shadow-sm d-inline-block">
              <svg width="150" height="150" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="100" height="100" fill="white"/>
                <rect x="8" y="8" width="32" height="32" rx="4" stroke="#0068ff" stroke-width="4"/>
                <rect x="16" y="16" width="16" height="16" fill="#0068ff"/>
                <rect x="60" y="8" width="32" height="32" rx="4" stroke="#0068ff" stroke-width="4"/>
                <rect x="68" y="16" width="16" height="16" fill="#0068ff"/>
                <rect x="8" y="60" width="32" height="32" rx="4" stroke="#0068ff" stroke-width="4"/>
                <rect x="16" y="68" width="16" height="16" fill="#0068ff"/>
                <rect x="46" y="46" width="8" height="8" fill="#111"/>
                <rect x="60" y="60" width="12" height="12" fill="#0068ff"/>
                <rect x="76" y="76" width="14" height="14" fill="#0068ff"/>
                <rect x="46" y="18" width="8" height="14" fill="#111"/>
                <rect x="46" y="68" width="8" height="14" fill="#111"/>
                <rect x="18" y="46" width="14" height="8" fill="#111"/>
                <rect x="68" y="46" width="14" height="8" fill="#111"/>
              </svg>
            </div>
            <div class="mt-2 small text-muted">Quét mã QR bằng ứng dụng Zalo trên điện thoại</div>
          </div>
          <h5 class="fw-bold mb-1">VELORA Official Store</h5>
          <div class="d-flex align-items-center justify-content-center gap-2 mb-3">
            <span class="badge bg-success small"><i class="bi bi-circle-fill me-1" style="font-size:0.5rem;"></i> Trực tuyến</span>
            <span class="small text-muted">Phản hồi: &lt; 1 phút</span>
          </div>
          <div class="p-3 bg-light rounded-3 mb-3 text-start small">
            <div class="d-flex justify-content-between mb-1">
              <span class="text-muted">Hotline Zalo VIP:</span>
              <b class="text-dark">0988 889 899</b>
            </div>
            <div class="d-flex justify-content-between">
              <span class="text-muted">Tổng đài CSKH:</span>
              <b class="text-dark">1900 8899</b>
            </div>
          </div>
          <a href="https://zalo.me" target="_blank" rel="noopener" class="btn btn-primary w-100 py-2 rounded-pill fw-bold" style="background: #0068ff;">
            <i class="bi bi-chat-dots-fill me-2"></i> Mở Zalo Chat Trực Tiếp
          </a>
        </div>
      </div>
    </div>
  </div>

  <!-- MODAL: FACEBOOK MESSENGER -->
  <div class="modal fade" id="messengerModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" style="max-width: 440px;">
      <div class="modal-content border-0 shadow-lg rounded-4 overflow-hidden">
        <div class="modal-header text-white p-3 d-flex justify-content-between align-items-center" style="background: linear-gradient(135deg, #00B2FF 0%, #006AFF 50%, #9B51E0 100%) !important;">
          <div class="d-flex align-items-center gap-2">
            <i class="bi bi-messenger fs-5"></i>
            <h6 class="m-0 fw-bold">Facebook Messenger CSKH</h6>
          </div>
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
        </div>
        <div class="modal-body p-4 text-center">
          <div class="messenger-preview-box mb-3 text-start">
            <div class="d-flex align-items-center gap-2 mb-2">
              <div class="rounded-circle bg-dark text-white fw-bold d-flex align-items-center justify-content-center" style="width:34px; height:34px; font-size:0.9rem;">V</div>
              <div>
                <div class="fw-bold small d-flex align-items-center gap-1">VELORA Premium Fashion <i class="bi bi-patch-check-fill text-primary" style="font-size:0.85rem;"></i></div>
                <div class="text-success" style="font-size:0.72rem;"><i class="bi bi-circle-fill me-1" style="font-size:0.45rem;"></i> Thường trả lời ngay lập tức</div>
              </div>
            </div>
            <p class="small text-muted m-0 p-2 bg-white rounded-3 border">
              Xin chào! Cảm ơn bạn đã ghé thăm Velora. Bạn đang cần hỗ trợ chọn size, tư vấn phối đồ hay kiểm tra thông tin đơn hàng?
            </p>
          </div>
          <h6 class="small text-muted fw-bold text-uppercase mb-2 text-start">Câu hỏi thường gặp:</h6>
          <div class="d-flex flex-column gap-2 mb-3">
            <button type="button" class="btn btn-outline-secondary btn-sm text-start rounded-pill px-3 py-2" onclick="sendAiMessage('Tư vấn size'); bootstrap.Modal.getInstance(document.getElementById('messengerModal')).hide(); toggleAiChat();">
              👉 Tư vấn chọn size chuẩn theo dáng
            </button>
            <button type="button" class="btn btn-outline-secondary btn-sm text-start rounded-pill px-3 py-2" onclick="sendAiMessage('Gợi ý set đồ mới'); bootstrap.Modal.getInstance(document.getElementById('messengerModal')).hide(); toggleAiChat();">
              👉 Gợi ý các set đồ mới nhất tuần này
            </button>
            <button type="button" class="btn btn-outline-secondary btn-sm text-start rounded-pill px-3 py-2" onclick="sendAiMessage('Chính sách đổi trả 15 ngày'); bootstrap.Modal.getInstance(document.getElementById('messengerModal')).hide(); toggleAiChat();">
              👉 Hướng dẫn chính sách đổi trả hàng
            </button>
          </div>
          <a href="https://m.me" target="_blank" rel="noopener" class="btn btn-primary w-100 py-2 rounded-pill fw-bold" style="background: #0084ff;">
            <i class="bi bi-messenger me-2"></i> Tiếp tục trên Messenger
          </a>
        </div>
      </div>
    </div>
  </div>

  <!-- MODAL: ORDER DETAILS -->
  <div class="modal fade" id="orderDetailModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-lg modal-dialog-centered">
      <div class="modal-content border-0 shadow-lg rounded-4 overflow-hidden">
        <div class="modal-header border-bottom px-4">
          <h5 class="modal-title fw-bold"><i class="bi bi-receipt text-primary me-2"></i>Chi Tiết Đơn Hàng VELORA</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
        </div>
        <div class="modal-body p-0" id="orderDetailContent">
          <!-- Populated dynamically by script.js -->
        </div>
      </div>
    </div>
  </div>

  <!-- OFFCANVAS SHOPPING CART DRAWER -->
  <div class="offcanvas offcanvas-end offcanvas-cart" tabindex="-1" id="offcanvasCart" aria-labelledby="offcanvasCartLabel" style="width: 440px;">
    <div class="offcanvas-header border-bottom">
      <h5 class="offcanvas-title fw-bold d-flex align-items-center gap-2" id="offcanvasCartLabel">
        <i class="bi bi-bag-check"></i> Giỏ hàng (<span class="cart-badge-count text-danger">0</span>)
      </h5>
      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>

    <!-- Free Shipping Indicator -->
    <div class="p-3 bg-light border-bottom">
      <div class="cart-freeship-text small mb-2 text-center">
        Mua thêm để được <span class="badge bg-danger">FREESHIP</span>
      </div>
      <div class="progress" style="height: 6px;">
        <div class="progress-bar bg-dark cart-freeship-bar" style="width: 0%;"></div>
      </div>
    </div>

    <!-- Cart Items List Container -->
    <div class="offcanvas-body p-3" id="offcanvasCartItems">
      <!-- Injected by script.js -->
    </div>

    <!-- Cart Footer & Checkout Action -->
    <div class="p-3 border-top bg-light">
      <div class="d-flex justify-content-between mb-2">
        <span class="text-muted">Tạm tính:</span>
        <span class="fw-bold fs-5 text-dark cart-subtotal-val">0đ</span>
      </div>
      <div class="d-flex gap-2">
        <a href="cart.html" class="btn btn-outline-dark flex-grow-1">Xem chi tiết giỏ</a>
        <button class="btn btn-dark flex-grow-1 fw-bold" onclick="openCheckoutModal()">Thanh toán ngay</button>
      </div>
    </div>
  </div>

  <!-- MODAL: QUICK VIEW PRODUCT -->
  <div class="modal fade" id="quickViewModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-lg modal-dialog-centered">
      <div class="modal-content border-0 shadow-lg rounded-4 overflow-hidden">
        <div class="modal-body p-0" id="quickViewContent">
          <!-- Populated by script.js -->
        </div>
      </div>
    </div>
  </div>

  <!-- MODAL: CHECKOUT -->
  <div class="modal fade" id="checkoutModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-lg modal-dialog-centered">
      <div class="modal-content border-0 shadow-lg rounded-4">
        <div class="modal-header border-bottom px-4">
          <h5 class="modal-title fw-bold"><i class="bi bi-shield-check text-success me-2"></i>Thanh toán đơn hàng VELORA</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
        </div>
        <div class="modal-body p-4">
          <form id="checkoutForm" onsubmit="event.preventDefault(); completeOrder();">
            <div class="row g-3">
              <div class="col-md-6">
                <label class="form-label small fw-bold">Họ và tên người nhận</label>
                <input type="text" class="form-control" id="orderFullName" value="Đặng Minh Anh" required>
              </div>
              <div class="col-md-6">
                <label class="form-label small fw-bold">Số điện thoại</label>
                <input type="tel" class="form-control" id="orderPhone" value="0988 123 456" required>
              </div>
              <div class="col-12">
                <label class="form-label small fw-bold">Địa chỉ giao hàng chi tiết</label>
                <input type="text" class="form-control" id="orderAddress" value="123 Đường Nam Kỳ Khởi Nghĩa, Phường Bến Nghé, Quận 1, TP. HCM" required>
              </div>
              <div class="col-12">
                <label class="form-label small fw-bold">Ghi chú giao hàng</label>
                <input type="text" class="form-control" id="orderNote" placeholder="Ví dụ: Giao giờ hành chính, gọi trước khi tới...">
              </div>
              <div class="col-12 mt-4">
                <label class="form-label small fw-bold">Phương thức thanh toán</label>
                <div class="d-flex flex-column gap-2">
                  <label class="form-check p-3 border rounded-3 d-flex align-items-center gap-2 cursor-pointer">
                    <input class="form-check-input" type="radio" name="paymentMethod" value="cod" checked>
                    <span><i class="bi bi-cash-stack text-success fs-5 me-2"></i>Thanh toán khi nhận hàng (COD)</span>
                  </label>
                  <label class="form-check p-3 border rounded-3 d-flex align-items-center gap-2 cursor-pointer">
                    <input class="form-check-input" type="radio" name="paymentMethod" value="vnpay">
                    <span><i class="bi bi-qr-code text-primary fs-5 me-2"></i>Chuyển khoản QR Napas / VNPAY (Miễn phí)</span>
                  </label>
                </div>
              </div>
            </div>
            <div class="mt-4 pt-3 border-top d-flex justify-content-between align-items-center">
              <div>
                <span class="text-muted small">Tổng thanh toán:</span>
                <div class="fs-4 fw-bold text-danger cart-total-val">0đ</div>
              </div>
              <button type="submit" class="btn btn-dark btn-lg px-4 fw-bold">Xác nhận đặt hàng</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>

  <!-- MODAL: LOOKBOOK OUTFIT LIGHTBOX -->
  <div class="modal fade" id="lookbookModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-lg modal-dialog-centered">
      <div class="modal-content rounded-4 border-0 shadow-lg overflow-hidden">
        <div class="modal-header border-0 pb-0 position-absolute end-0 top-0 z-3 p-3">
          <button type="button" class="btn-close bg-white rounded-circle p-2 shadow-sm" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body p-0" id="lookbookModalContent">
          <!-- Dynamically injected by openLookbookModal(id) in script.js -->
        </div>
      </div>
    </div>
  </div>

  <!-- MODAL: WISHLIST (SẢN PHẨM YÊU THÍCH) -->
  <div class="modal fade" id="wishlistModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable" style="max-width: 680px;">
      <div class="modal-content rounded-4 border-0 shadow-lg overflow-hidden">
        <div class="modal-header bg-light border-bottom px-4 py-3">
          <div class="d-flex align-items-center gap-2.5">
            <div class="rounded-circle bg-danger bg-opacity-10 text-danger d-flex align-items-center justify-content-center" style="width: 38px; height: 38px; flex-shrink: 0;">
              <i class="bi bi-heart-fill fs-5"></i>
            </div>
            <div>
              <h5 class="modal-title fw-bold m-0 text-dark" style="font-size: 1.05rem;">Sản Phẩm Yêu Thích</h5>
              <div class="small text-muted" id="wishlistModalSubtitle" style="font-size: 0.78rem;">Danh sách trang phục bạn đã lưu để mua sắm</div>
            </div>
          </div>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body p-3 p-md-4" id="wishlistModalBody" style="max-height: 480px; overflow-y: auto;">
          <!-- Injected dynamically by script.js renderWishlistModalContent() -->
        </div>
        <div class="modal-footer bg-light border-top px-4 py-2.5 d-flex justify-content-between align-items-center flex-wrap gap-2">
          <button type="button" class="btn btn-outline-danger btn-sm rounded-pill px-3" onclick="clearAllWishlist()">
            <i class="bi bi-trash me-1"></i>Xóa tất cả
          </button>
          <div class="d-flex gap-2">
            <button type="button" class="btn btn-outline-dark btn-sm rounded-pill px-3" data-bs-dismiss="modal">Đóng</button>
            <button type="button" class="btn btn-dark btn-sm rounded-pill px-3.5 fw-semibold" onclick="addAllWishlistToCart()">
              <i class="bi bi-bag-check me-1"></i>Thêm tất cả vào giỏ
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- FLOATING QUICK-CART BAR (STICKY CHECKOUT HELPER) -->
  <div id="floatingQuickCartBar" class="floating-quick-cart-bar">
    <div class="d-flex align-items-center gap-2.5">
      <div class="position-relative">
        <div class="rounded-circle bg-warning text-dark d-flex align-items-center justify-content-center shadow-sm" style="width: 40px; height: 40px;">
          <i class="bi bi-bag-check-fill fs-5"></i>
        </div>
        <span class="cart-count-badge badge rounded-pill bg-danger" id="quickCartCountBadge">0</span>
      </div>
      <div>
        <div class="small text-white-50" style="font-size: 0.72rem; line-height: 1;">Giỏ hàng đã chọn:</div>
        <div class="fw-bold text-warning" id="quickCartSubtotal" style="font-size: 0.95rem;">0đ</div>
      </div>
    </div>
    <div class="d-flex align-items-center gap-1.5 ms-2">
      <a href="cart.html" class="btn btn-warning btn-sm rounded-pill px-3 py-1.5 fw-bold shadow-sm d-flex align-items-center gap-1.5 text-dark" style="font-size: 0.82rem;">
        <span>Đặt hàng ngay</span> <i class="bi bi-arrow-right"></i>
      </a>
      <button type="button" class="btn btn-outline-light btn-sm rounded-circle p-0 d-flex align-items-center justify-content-center" style="width: 28px; height: 28px;" onclick="closeFloatingQuickCart()" title="Ẩn tạm thời">
        <i class="bi bi-x"></i>
      </button>
    </div>
  </div>

  <!-- MODAL: ADMIN CUSTOMER / VIP MEMBER EDITOR -->
  <div class="modal fade" id="adminEditCustomerModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content border-0 shadow-lg rounded-4 overflow-hidden">
        <div class="modal-header bg-dark text-white border-0 px-4 py-3">
          <div class="d-flex align-items-center gap-2">
            <i class="bi bi-person-gear text-info fs-5"></i>
            <h5 class="modal-title fw-bold m-0" id="adminEditCustomerModalTitle">Chỉnh Sửa Thông Tin Hội Viên</h5>
          </div>
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <form id="adminEditCustomerForm" onsubmit="adminSaveCustomerEdit(event)">
          <div class="modal-body p-4">
            <input type="hidden" id="adminEditCustOrigEmail">
            <div class="row g-3">
              <div class="col-12">
                <label class="form-label small fw-bold">Họ và tên khách hàng <span class="text-danger">*</span></label>
                <input type="text" class="form-control" id="adminEditCustName" required placeholder="Họ và tên">
              </div>
              <div class="col-md-6">
                <label class="form-label small fw-bold">Email đăng nhập</label>
                <input type="email" class="form-control bg-light text-muted" id="adminEditCustEmail" readonly>
                <div class="form-text small" style="font-size: 0.72rem;">Email là mã định danh không thể thay đổi</div>
              </div>
              <div class="col-md-6">
                <label class="form-label small fw-bold">Số điện thoại <span class="text-danger">*</span></label>
                <input type="tel" class="form-control" id="adminEditCustPhone" required placeholder="09xx xxx xxx">
              </div>
              <div class="col-12">
                <label class="form-label small fw-bold">Địa chỉ giao hàng mặc định</label>
                <input type="text" class="form-control" id="adminEditCustAddress" placeholder="Số nhà, đường, phường/xã, quận/huyện, tỉnh/thành">
              </div>
              <div class="col-md-6">
                <label class="form-label small fw-bold">Hạng thẻ hội viên</label>
                <select class="form-select" id="adminEditCustTier">
                  <option value="THÀNH VIÊN MỚI">THÀNH VIÊN MỚI</option>
                  <option value="SILVER">SILVER</option>
                  <option value="VIP GOLD">VIP GOLD</option>
                  <option value="VIP DIAMOND (KIM CƯƠNG)">VIP DIAMOND (KIM CƯƠNG)</option>
                </select>
              </div>
              <div class="col-md-6">
                <label class="form-label small fw-bold">Điểm thưởng tích lũy (pts)</label>
                <input type="number" class="form-control" id="adminEditCustPoints" min="0" step="10" placeholder="0">
              </div>
            </div>
          </div>
          <div class="modal-footer bg-light border-top px-4 py-3 d-flex justify-content-end gap-2">
            <button type="button" class="btn btn-outline-secondary rounded-pill px-4" data-bs-dismiss="modal">Hủy bỏ</button>
            <button type="submit" class="btn btn-dark rounded-pill px-4 fw-bold">
              <i class="bi bi-check-lg me-1"></i>Lưu thay đổi
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>

    <!-- MODAL: ADMIN ADD NEW VIP CUSTOMER -->
  <div class="modal fade" id="adminAddCustomerModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content border-0 shadow-lg rounded-4 overflow-hidden">
        <div class="modal-header bg-dark text-white border-0 px-4 py-3.5">
          <div class="d-flex align-items-center gap-2.5">
            <div class="rounded-circle bg-warning text-dark d-flex align-items-center justify-content-center shadow-xs" style="width: 36px; height: 36px;">
              <i class="bi bi-person-plus-fill fs-5"></i>
            </div>
            <div>
              <h5 class="modal-title fw-bold m-0 font-serif" style="font-size: 1.1rem;">Thêm Hội Viên VIP Mới</h5>
              <div class="text-white-50 small" style="font-size: 0.75rem;">Đăng ký hội viên đặc quyền tại quầy hoặc kích hoạt từ xa</div>
            </div>
          </div>
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <form id="adminAddCustomerForm" onsubmit="adminSaveNewCustomer(event)">
          <div class="modal-body p-4">
            <div class="row g-3">
              <div class="col-12">
                <label class="form-label small fw-bold text-dark mb-1">Họ và tên khách hàng <span class="text-danger">*</span></label>
                <input type="text" class="form-control form-control-luxury" id="adminAddCustName" required placeholder="Ví dụ: Hoàng Mai Linh">
              </div>
              <div class="col-md-6">
                <label class="form-label small fw-bold text-dark mb-1">Địa chỉ Email <span class="text-danger">*</span></label>
                <input type="email" class="form-control form-control-luxury" id="adminAddCustEmail" required placeholder="mailinh@gmail.com">
              </div>
              <div class="col-md-6">
                <label class="form-label small fw-bold text-dark mb-1">Số điện thoại <span class="text-danger">*</span></label>
                <input type="tel" class="form-control form-control-luxury" id="adminAddCustPhone" required placeholder="0912 xxx xxx">
              </div>
              <div class="col-12">
                <label class="form-label small fw-bold text-dark mb-1">Địa chỉ giao hàng</label>
                <input type="text" class="form-control form-control-luxury" id="adminAddCustAddress" placeholder="Số nhà, tên đường, phường/xã, quận/huyện...">
              </div>
              <div class="col-md-6">
                <label class="form-label small fw-bold text-dark mb-1">Hạng thẻ ban đầu</label>
                <select class="form-select form-control-luxury" id="adminAddCustTier">
                  <option value="VIP GOLD" selected>VIP GOLD</option>
                  <option value="VIP DIAMOND (KIM CƯƠNG)">VIP DIAMOND (KIM CƯƠNG)</option>
                  <option value="SILVER">SILVER</option>
                  <option value="THÀNH VIÊN MỚI">THÀNH VIÊN MỚI</option>
                </select>
              </div>
              <div class="col-md-6">
                <label class="form-label small fw-bold text-dark mb-1">Điểm thưởng tặng ban đầu (pts)</label>
                <input type="number" class="form-control form-control-luxury" id="adminAddCustPoints" value="500" min="0" step="50">
              </div>
            </div>
            <div class="form-text small text-muted mt-2.5">
              <i class="bi bi-shield-check text-success me-1"></i> Tài khoản sẽ tự động đồng bộ lên Cloud Supabase và tạo mật khẩu mặc định <code>123456</code>.
            </div>
          </div>
          <div class="modal-footer bg-light border-top px-4 py-3 d-flex justify-content-end gap-2.5">
            <button type="button" class="btn btn-outline-secondary rounded-pill px-4 py-2 small" data-bs-dismiss="modal">Hủy bỏ</button>
            <button type="submit" class="btn btn-warning text-dark rounded-pill px-4 py-2 fw-bold shadow-sm small">
              <i class="bi bi-check2-circle me-1"></i> Lưu & Kích Hoạt Hội Viên
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>

    <!-- MODAL: REDEEM REWARD POINTS TO VOUCHER -->
  <div class="modal fade" id="redeemPointsModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" style="max-width: 580px;">
      <div class="modal-content border-0 shadow-lg rounded-4 overflow-hidden">
        <div class="modal-header bg-dark text-white border-0 px-4 py-3.5">
          <div class="d-flex align-items-center gap-2.5">
            <div class="rounded-circle bg-warning text-dark d-flex align-items-center justify-content-center shadow-xs" style="width: 38px; height: 38px;">
              <i class="bi bi-gift-fill fs-5"></i>
            </div>
            <div>
              <h5 class="modal-title fw-bold m-0 font-serif" style="font-size: 1.15rem;">Đổi Điểm Thưởng Nhận Voucher VIP</h5>
              <div class="text-white-50 small" style="font-size: 0.76rem;">Điểm tích lũy hiện có của bạn: <b class="text-warning font-serif fs-6" id="redeemModalPointsDisplay">1.250</b> pts</div>
            </div>
          </div>
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body p-4 bg-light">
          <div class="d-flex flex-column gap-3">
            <!-- Voucher Option 1: 50K -->
            <div class="p-3.5 bg-white rounded-4 border shadow-xs d-flex align-items-center justify-content-between flex-wrap gap-2.5">
              <div class="d-flex align-items-center gap-3">
                <div class="rounded-circle bg-primary bg-opacity-10 text-primary d-flex align-items-center justify-content-center flex-shrink-0" style="width: 46px; height: 46px;">
                  <i class="bi bi-ticket-perforated-fill fs-4"></i>
                </div>
                <div>
                  <div class="d-flex align-items-center gap-2">
                    <h6 class="fw-bold font-serif text-dark m-0">Voucher Giảm 50.000đ</h6>
                    <span class="badge bg-primary bg-opacity-10 text-primary border border-primary border-opacity-25 rounded-pill small">Mọi đơn từ 300k</span>
                  </div>
                  <div class="small text-muted mt-0.5">Áp dụng cho toàn bộ bộ sưu tập thời trang</div>
                  <div class="fw-bold text-warning small mt-1"><i class="bi bi-stars me-1"></i>Giá đổi: <b>200 pts</b></div>
                </div>
              </div>
              <button type="button" class="btn btn-dark rounded-pill px-3.5 py-2 fw-semibold btn-sm shadow-xs" onclick="redeemPointsAction(200, 50000, 300000, '50K')">
                Đổi Ngay <i class="bi bi-arrow-right ms-1"></i>
              </button>
            </div>

            <!-- Voucher Option 2: 150K -->
            <div class="p-3.5 bg-white rounded-4 border shadow-xs d-flex align-items-center justify-content-between flex-wrap gap-2.5">
              <div class="d-flex align-items-center gap-3">
                <div class="rounded-circle bg-warning bg-opacity-15 text-warning d-flex align-items-center justify-content-center flex-shrink-0" style="width: 46px; height: 46px;">
                  <i class="bi bi-award-fill fs-4"></i>
                </div>
                <div>
                  <div class="d-flex align-items-center gap-2">
                    <h6 class="fw-bold font-serif text-dark m-0">Voucher Giảm 150.000đ</h6>
                    <span class="badge bg-warning bg-opacity-20 text-dark border border-warning border-opacity-50 rounded-pill small fw-bold">HOT VOUCHER</span>
                  </div>
                  <div class="small text-muted mt-0.5">Áp dụng đơn hàng thời trang từ 800.000đ</div>
                  <div class="fw-bold text-warning small mt-1"><i class="bi bi-stars me-1"></i>Giá đổi: <b>500 pts</b></div>
                </div>
              </div>
              <button type="button" class="btn btn-warning text-dark rounded-pill px-3.5 py-2 fw-bold btn-sm shadow-xs" onclick="redeemPointsAction(500, 150000, 800000, '150K')">
                Đổi Ngay <i class="bi bi-arrow-right ms-1"></i>
              </button>
            </div>

            <!-- Voucher Option 3: 350K VIP -->
            <div class="p-3.5 bg-white rounded-4 border border-warning shadow-xs d-flex align-items-center justify-content-between flex-wrap gap-2.5">
              <div class="d-flex align-items-center gap-3">
                <div class="rounded-circle bg-danger bg-opacity-10 text-danger d-flex align-items-center justify-content-center flex-shrink-0" style="width: 46px; height: 46px;">
                  <i class="bi bi-gem fs-4"></i>
                </div>
                <div>
                  <div class="d-flex align-items-center gap-2">
                    <h6 class="fw-bold font-serif text-danger m-0">Voucher VIP Giảm 350.000đ</h6>
                    <span class="badge bg-danger text-white rounded-pill small fw-bold">VIP DIAMOND</span>
                  </div>
                  <div class="small text-muted mt-0.5">Áp dụng đơn hàng thượng lưu từ 1.500.000đ</div>
                  <div class="fw-bold text-danger small mt-1"><i class="bi bi-stars me-1"></i>Giá đổi: <b>1.000 pts</b></div>
                </div>
              </div>
              <button type="button" class="btn btn-danger text-white rounded-pill px-3.5 py-2 fw-bold btn-sm shadow-xs" onclick="redeemPointsAction(1000, 350000, 1500000, '350K')">
                Đổi Ngay <i class="bi bi-arrow-right ms-1"></i>
              </button>
            </div>
          </div>
        </div>
        <div class="modal-footer bg-light px-4 py-3 border-top d-flex justify-content-between align-items-center">
          <span class="small text-muted"><i class="bi bi-info-circle me-1"></i>Voucher sau khi đổi sẽ lưu vào tab Mã Ưu Đãi</span>
          <button type="button" class="btn btn-outline-dark rounded-pill px-4 btn-sm" data-bs-dismiss="modal">Đóng</button>
        </div>
      </div>
    </div>
  </div>

  <!-- MODAL: ORDER INVOICE / VAT RECEIPT -->
  <div class="modal fade" id="orderInvoiceModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content border-0 shadow-lg rounded-4 overflow-hidden">
        <div class="modal-header bg-dark text-white border-0 px-4 py-3.5">
          <div class="d-flex align-items-center gap-2.5">
            <div class="rounded-circle bg-warning text-dark d-flex align-items-center justify-content-center shadow-xs" style="width: 36px; height: 36px;">
              <i class="bi bi-receipt-cutoff fs-5"></i>
            </div>
            <div>
              <h5 class="modal-title fw-bold m-0 font-serif" style="font-size: 1.15rem;">Hóa Đơn Điện Tử Bán Lẻ (E-Invoice)</h5>
              <div class="text-white-50 small" id="invoiceModalSub">VELORA Luxury Fashion Store</div>
            </div>
          </div>
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body p-4 p-md-5" id="orderInvoicePrintArea" style="background: #ffffff; color: #111113;">
          <!-- Dynamically populated by script.js renderOrderInvoiceContent(orderId) -->
        </div>
        <div class="modal-footer bg-light px-4 py-3 border-top d-flex justify-content-between align-items-center">
          <button type="button" class="btn btn-outline-secondary rounded-pill px-4 btn-sm" data-bs-dismiss="modal">Đóng</button>
          <div class="d-flex gap-2">
            <button type="button" class="btn btn-outline-dark rounded-pill px-3.5 py-2 btn-sm fw-semibold" onclick="copyInvoiceCode()">
              <i class="bi bi-copy me-1"></i>Sao chép mã đơn
            </button>
            <button type="button" class="btn btn-dark rounded-pill px-4 py-2 btn-sm fw-bold shadow-xs" onclick="window.print()">
              <i class="bi bi-printer-fill me-1.5"></i>In hóa đơn
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- MODAL: ADMIN PRODUCT EDITOR -->
  <div class="modal fade" id="adminProductModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-lg modal-dialog-centered">
      <div class="modal-content border-0 shadow-lg rounded-4 overflow-hidden">
        <div class="modal-header bg-dark text-white border-0 px-4 py-3">
          <h5 class="modal-title fw-bold" id="adminProductModalTitle">
            <i class="bi bi-pencil-square text-warning me-2"></i>Chỉnh Sửa Sản Phẩm
          </h5>
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
        </div>
        <form id="adminProductForm" onsubmit="adminSaveProduct(event)">
          <div class="modal-body p-4">
            <div class="row g-3">
              <div class="col-md-4">
                <label class="form-label small fw-bold">Mã sản phẩm (ID) <span class="text-danger">*</span></label>
                <input type="text" class="form-control" id="admProdId" required placeholder="vd: wm-99, na-10">
              </div>
              <div class="col-md-8">
                <label class="form-label small fw-bold">Tên sản phẩm <span class="text-danger">*</span></label>
                <input type="text" class="form-control" id="admProdName" required placeholder="Nhập tên sản phẩm...">
              </div>
              <div class="col-md-4">
                <label class="form-label small fw-bold">Danh mục <span class="text-danger">*</span></label>
                <select class="form-select" id="admProdCategory" required onchange="adminUpdateSubCategories()">
                  <option value="women">Thời trang Nữ (Women)</option>
                  <option value="men">Thời trang Nam (Men)</option>
                  <option value="accessories">Phụ kiện (Accessories)</option>
                </select>
              </div>
              <div class="col-md-4">
                <label class="form-label small fw-bold">Phân loại (SubCategory) <span class="text-danger">*</span></label>
                <select class="form-select" id="admProdSubCategory" required>
                  <option value="ao">Áo kiểu</option>
                  <option value="blouse">Áo Blouse</option>
                  <option value="chan-vay">Chân Váy</option>
                  <option value="dam-vay">Đầm / Váy</option>
                  <option value="quan">Quần</option>
                </select>
              </div>
              <div class="col-md-4">
                <label class="form-label small fw-bold">Huy hiệu (Badge)</label>
                <select class="form-select" id="admProdBadge">
                  <option value="HOT TREND">HOT TREND</option>
                  <option value="NEW ARRIVAL">NEW ARRIVAL</option>
                  <option value="POPULAR">POPULAR</option>
                  <option value="BEST SELLER">BEST SELLER</option>
                  <option value="ELEGANT">ELEGANT</option>
                  <option value="PREMIUM">PREMIUM</option>
                </select>
              </div>
              <div class="col-md-4">
                <label class="form-label small fw-bold">Giá bán (VNĐ) <span class="text-danger">*</span></label>
                <input type="number" class="form-control" id="admProdPrice" required min="10000" step="1000" placeholder="vd: 450000">
              </div>
              <div class="col-md-4">
                <label class="form-label small fw-bold">Giá gốc (VNĐ)</label>
                <input type="number" class="form-control" id="admProdOldPrice" min="0" step="1000" placeholder="vd: 600000">
              </div>
              <div class="col-md-4">
                <label class="form-label small fw-bold">Số lượng tồn kho <span class="text-danger">*</span></label>
                <input type="number" class="form-control" id="admProdStock" required min="0" value="25">
              </div>
              <div class="col-12">
                <label class="form-label small fw-bold">Đường dẫn ảnh (URL hoặc tên file ảnh) <span class="text-danger">*</span></label>
                <div class="input-group">
                  <input type="text" class="form-control" id="admProdImage" required placeholder="https://images.unsplash.com/... hoặc chan_vay_xep_ly_midi.jpg" oninput="adminPreviewImage()">
                  <button class="btn btn-outline-secondary" type="button" onclick="adminPreviewImage()">Xem trước</button>
                </div>
                <div class="mt-2 text-center p-2 bg-light rounded-3" id="admImgPreviewBox">
                  <img id="admImgPreview" src="" alt="Preview" style="max-height: 140px; object-fit: cover; border-radius: 8px; display: none;">
                  <span id="admImgPreviewText" class="text-muted small">Chưa có ảnh xem trước</span>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer bg-light px-4 py-3">
            <button type="button" class="btn btn-outline-secondary rounded-pill px-4" data-bs-dismiss="modal">Hủy bỏ</button>
            <button type="submit" class="btn btn-dark rounded-pill px-4 fw-bold shadow-sm">
              <i class="bi bi-check-circle me-1"></i> Lưu thông tin sản phẩm
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>

  <!-- MODAL: ADMIN AUTHENTICATION / SECURE PASSWORD GATE -->
  <div class="modal fade" id="adminLoginModal" tabindex="-1" aria-hidden="true" data-bs-backdrop="static">
    <div class="modal-dialog modal-dialog-centered" style="max-width: 480px;">
      <div class="modal-content border-0 shadow-lg rounded-4 overflow-hidden">
        <div class="modal-header bg-dark text-white border-0 px-4 py-3.5">
          <div class="d-flex align-items-center gap-2.5">
            <div class="rounded-circle bg-warning text-dark d-flex align-items-center justify-content-center shadow-xs" style="width: 36px; height: 36px;">
              <i class="bi bi-shield-lock-fill fs-5"></i>
            </div>
            <div>
              <h5 class="modal-title fw-bold m-0 font-serif" style="font-size: 1.1rem;">Xác Thực Quản Trị Viên</h5>
              <div class="text-white-50 small" style="font-size: 0.76rem;">Khu vực kiểm soát toàn quyền hệ thống VELORA</div>
            </div>
          </div>
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <form id="adminLoginForm" onsubmit="submitAdminPasswordLogin(event)">
          <div class="modal-body p-4 p-sm-4.5">
            <div class="p-3.5 bg-light rounded-4 mb-3.5 text-start border d-flex align-items-center justify-content-between">
              <div class="d-flex align-items-center gap-3">
                <div class="rounded-circle bg-dark text-warning d-flex align-items-center justify-content-center fw-bold shadow-xs" style="width: 42px; height: 42px;">
                  <i class="bi bi-person-badge-fill fs-5"></i>
                </div>
                <div>
                  <div class="small text-muted" style="font-size: 0.75rem;">Tài khoản Quản Trị Hệ Thống:</div>
                  <div class="fw-bold text-dark font-monospace" style="font-size: 0.95rem;">admin@velora.vn</div>
                </div>
              </div>
              <span class="badge bg-warning text-dark px-2.5 py-1 rounded-pill small fw-bold">ROOT ADMIN</span>
            </div>

            <div class="mb-3.5 text-start">
              <label class="form-label small fw-bold text-dark mb-2 d-flex align-items-center justify-content-between">
                <span><i class="bi bi-key-fill text-warning me-1.5"></i>Mật khẩu Quản Trị <span class="text-danger">*</span></span>
                <span class="text-muted fw-normal" style="font-size: 0.74rem;">Mặc định: <code>admin123</code></span>
              </label>
              <div class="input-group">
                <span class="input-group-text bg-white border-end-0 px-3"><i class="bi bi-lock text-muted"></i></span>
                <input type="password" class="form-control border-start-0 border-end-0 py-2.5 px-2 form-control-luxury" id="modalAdminPassword" required placeholder="Nhập mật khẩu quản trị..." autocomplete="current-password" style="font-size: 0.95rem;">
                <button class="btn btn-outline-secondary border-start-0 px-3" type="button" onclick="togglePasswordVisibility('modalAdminPassword', this)" title="Hiện/ẩn mật khẩu">
                  <i class="bi bi-eye"></i>
                </button>
              </div>
              <div class="form-text small mt-1.5 text-muted" style="font-size: 0.76rem;">
                <i class="bi bi-shield-check text-success me-1"></i> Đồng bộ xác thực trực tiếp qua Cloud Supabase mọi thiết bị.
              </div>
            </div>

            <div id="adminLoginError" class="alert alert-danger py-2.5 px-3 small d-none mb-0 rounded-3">
              <i class="bi bi-exclamation-triangle-fill me-1.5"></i> Mật khẩu Quản Trị Viên không đúng. Vui lòng kiểm tra lại!
            </div>
          </div>
          <div class="modal-footer bg-light px-4 py-3 border-top d-flex justify-content-end gap-2.5">
            <button type="button" class="btn btn-outline-secondary rounded-pill px-4 py-2 small" data-bs-dismiss="modal">Hủy bỏ</button>
            <button type="submit" class="btn btn-warning text-dark rounded-pill px-4 py-2 fw-bold shadow-sm small">
              <i class="bi bi-unlock-fill me-1.5"></i> Xác Nhận Vào Admin
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>

  <!-- MODAL: ADMIN VOUCHER MANAGER -->
  <div class="modal fade" id="adminVoucherModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content border-0 shadow-lg rounded-4 overflow-hidden">
        <div class="modal-header bg-dark text-white border-0 px-4 py-3">
          <h5 class="modal-title fw-bold">
            <i class="bi bi-ticket-perforated-fill text-warning me-2"></i>Thêm / Chỉnh Sửa Voucher Ưu Đãi
          </h5>
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
        </div>
        <form id="adminVoucherForm" onsubmit="adminSaveVoucher(event)">
          <div class="modal-body p-4">
            <div class="row g-3">
              <div class="col-md-6">
                <label class="form-label small fw-bold">Mã Voucher (Code) <span class="text-danger">*</span></label>
                <input type="text" class="form-control text-uppercase font-monospace fw-bold" id="admVoucherCode" required placeholder="vd: VELORA20, VIP100K">
              </div>
              <div class="col-md-6">
                <label class="form-label small fw-bold">Loại ưu đãi <span class="text-danger">*</span></label>
                <select class="form-select" id="admVoucherType" required onchange="adminUpdateVoucherTypeLabel()">
                  <option value="percent">Giảm theo % hóa đơn</option>
                  <option value="fixed">Giảm tiền mặt trực tiếp (VNĐ)</option>
                  <option value="shipping">Miễn phí giao hàng (Freeship)</option>
                </select>
              </div>
              <div class="col-md-6">
                <label class="form-label small fw-bold" id="admVoucherValueLabel">Mức giảm (%) <span class="text-danger">*</span></label>
                <input type="number" class="form-control" id="admVoucherValue" required min="0" placeholder="vd: 15 hoặc 50000">
              </div>
              <div class="col-md-6">
                <label class="form-label small fw-bold">Đơn tối thiểu áp dụng (VNĐ)</label>
                <input type="number" class="form-control" id="admVoucherMinSpend" min="0" step="10000" value="0" placeholder="0 = Áp dụng mọi đơn">
              </div>
              <div class="col-md-6">
                <label class="form-label small fw-bold">Hạn sử dụng (HSD) <span class="text-danger">*</span></label>
                <input type="text" class="form-control" id="admVoucherExpiry" required placeholder="vd: 31/12/2026">
              </div>
              <div class="col-md-6">
                <label class="form-label small fw-bold">Gắn thẻ / Màu sắc</label>
                <select class="form-select" id="admVoucherColor">
                  <option value="danger">Màu Đỏ (Khuyến mãi Hot)</option>
                  <option value="success">Màu Xanh Lá (Freeship)</option>
                  <option value="primary">Màu Xanh Dương (VIP Gold)</option>
                  <option value="warning">Màu Vàng (Special Event)</option>
                  <option value="dark">Màu Đen Sang Trọng (Luxury)</option>
                </select>
              </div>
              <div class="col-12">
                <label class="form-label small fw-bold">Tiêu đề ngắn voucher <span class="text-danger">*</span></label>
                <input type="text" class="form-control" id="admVoucherTitle" required placeholder="vd: Giảm 15% Toàn Bộ Đơn Hàng">
              </div>
              <div class="col-12">
                <label class="form-label small fw-bold">Mô tả điều kiện sử dụng</label>
                <textarea class="form-control" id="admVoucherDesc" rows="2" placeholder="Áp dụng cho mọi khách hàng khi đặt online..."></textarea>
              </div>
            </div>
          </div>
          <div class="modal-footer bg-light px-4 py-3">
            <button type="button" class="btn btn-outline-secondary rounded-pill px-4" data-bs-dismiss="modal">Hủy</button>
            <button type="submit" class="btn btn-dark rounded-pill px-4 fw-bold shadow-sm">
              <i class="bi bi-check-circle me-1"></i> Lưu & Kích Hoạt Voucher
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>

  <!-- MODAL: ADMIN HERO SLIDE / BANNER MANAGER -->
  <div class="modal fade" id="adminHeroModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-lg modal-dialog-centered">
      <div class="modal-content border-0 shadow-lg rounded-4 overflow-hidden">
        <div class="modal-header bg-dark text-white border-0 px-4 py-3">
          <h5 class="modal-title fw-bold">
            <i class="bi bi-images text-warning me-2"></i>Quản Lý Banner Hero Trang Chủ
          </h5>
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
        </div>
        <form id="adminHeroForm" onsubmit="adminSaveHeroSlide(event)">
          <div class="modal-body p-4">
            <input type="hidden" id="admHeroSlideIndex" value="0">
            <div class="row g-3">
              <div class="col-md-6">
                <label class="form-label small fw-bold">Chọn Slide cần cập nhật</label>
                <select class="form-select" id="admHeroSlideSelect" onchange="adminLoadHeroSlideToForm(this.value)">
                  <option value="0">Slide 1: Fashion Style (Trang chủ chính)</option>
                  <option value="1">Slide 2: Urban Elegance (Xu hướng mới)</option>
                  <option value="2">Slide 3: Khuyến Mãi Flash Sale (Ưu đãi)</option>
                </select>
              </div>
              <div class="col-md-6">
                <label class="form-label small fw-bold">Tagline nhỏ</label>
                <input type="text" class="form-control" id="admHeroTag" placeholder="vd: BỘ SƯU TẬP 2026">
              </div>
              <div class="col-12">
                <label class="form-label small fw-bold">Tiêu đề lớn (Title) <span class="text-danger">*</span></label>
                <input type="text" class="form-control fw-bold" id="admHeroTitle" required placeholder="vd: FASHION STYLE">
              </div>
              <div class="col-12">
                <label class="form-label small fw-bold">Mô tả phụ</label>
                <textarea class="form-control" id="admHeroDesc" rows="2" placeholder="Đẳng cấp thời trang định hình phong cách sống thượng lưu..."></textarea>
              </div>
              <div class="col-12">
                <label class="form-label small fw-bold">Đường dẫn ảnh nền banner (URL hoặc tên ảnh local) <span class="text-danger">*</span></label>
                <div class="input-group">
                  <input type="text" class="form-control" id="admHeroImage" required placeholder="https://images.unsplash.com/... hoặc chan_vay_xep_ly_midi.jpg" oninput="adminPreviewHeroImage()">
                  <button class="btn btn-outline-secondary" type="button" onclick="adminPreviewHeroImage()">Xem trước</button>
                </div>
                <div class="mt-2 p-2 bg-light rounded-3 text-center" style="max-height: 180px; overflow: hidden;">
                  <img id="admHeroImgPreview" src="" alt="Hero Preview" style="width: 100%; max-height: 160px; object-fit: cover; border-radius: 8px;">
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer bg-light px-4 py-3">
            <button type="button" class="btn btn-outline-secondary rounded-pill px-4" data-bs-dismiss="modal">Đóng</button>
            <button type="submit" class="btn btn-dark rounded-pill px-4 fw-bold shadow-sm">
              <i class="bi bi-save me-1"></i> Lưu Thay Đổi Banner
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>

  <!-- MODAL: QUICK PRODUCT IMAGE CHANGER -->
  <div class="modal fade" id="adminChangeImageModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content border-0 shadow-lg rounded-4 overflow-hidden">
        <div class="modal-header bg-dark text-white border-0 px-4 py-3">
          <h5 class="modal-title fw-bold">
            <i class="bi bi-camera-fill text-warning me-2"></i>Đổi Ảnh Sản Phẩm
          </h5>
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
        </div>
        <form id="adminChangeImageForm" onsubmit="adminSaveQuickImage(event)">
          <input type="hidden" id="admQuickImgProdId">
          <div class="modal-body p-4 text-center">
            <div class="fw-bold mb-1" id="admQuickImgProdName">Tên sản phẩm</div>
            <div class="small text-muted mb-3 font-monospace" id="admQuickImgProdIdDisplay">ID: wm-1</div>

            <div class="mb-3 text-start">
              <label class="form-label small fw-bold">Đường dẫn ảnh mới (URL hoặc file local) <span class="text-danger">*</span></label>
              <input type="text" class="form-control" id="admQuickImgUrl" required placeholder="vd: chan_vay_xep_ly_midi.jpg hoặc https://..." oninput="adminPreviewQuickImage(this.value)">
            </div>

            <div class="p-3 bg-light rounded-4 border text-center mb-3">
              <div class="small text-muted mb-2">Xem trước ảnh sản phẩm:</div>
              <img id="admQuickImgPreview" src="" alt="Preview" style="max-height: 180px; max-width: 100%; object-fit: contain; border-radius: 8px;">
            </div>

            <div class="small text-muted text-start">
              <i class="bi bi-lightbulb text-warning me-1"></i> Gợi ý: Có thể sử dụng ảnh lookbook nội bộ như <code>chan_vay_xep_ly_midi.jpg</code> hoặc các ảnh thời trang Unsplash độ phân giải cao.
            </div>
          </div>
          <div class="modal-footer bg-light px-4 py-3">
            <button type="button" class="btn btn-outline-secondary rounded-pill px-4" data-bs-dismiss="modal">Hủy</button>
            <button type="submit" class="btn btn-dark rounded-pill px-4 fw-bold shadow-sm">
              <i class="bi bi-check-circle me-1"></i> Cập Nhật Ảnh Này
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>

  <!-- MODAL: CHANGE AVATAR / PROFILE PHOTO (CHO CẢ KHÁCH HÀNG & ADMIN) -->
  <div class="modal fade" id="userAvatarModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content border-0 shadow-lg rounded-4 overflow-hidden">
        <div class="modal-header bg-dark text-white border-0 px-4 py-3">
          <h5 class="modal-title fw-bold">
            <i class="bi bi-camera-fill text-warning me-2"></i>Đổi Ảnh Đại Diện (Avatar)
          </h5>
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
        </div>
        <form id="userAvatarForm" onsubmit="saveUserAvatar(event)">
          <div class="modal-body p-4 text-center">
            <div class="badge bg-light text-dark border px-3 py-1 rounded-pill mb-3" id="modalAvatarTargetBadge">
              Đang chỉnh sửa: <b>Tài khoản Khách Hàng</b>
            </div>

            <!-- Avatar Preview Box -->
            <div class="mb-3 position-relative d-inline-block">
              <img id="userAvatarPreview" 
                   src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80" 
                   alt="Preview" 
                   class="rounded-circle border border-4 border-warning shadow" 
                   style="width: 110px; height: 110px; object-fit: cover;">
              <span class="position-absolute bottom-0 end-0 badge rounded-pill bg-dark border border-white p-2">
                <i class="bi bi-stars text-warning"></i>
              </span>
            </div>

            <!-- Custom URL Input -->
            <div class="mb-3 text-start">
              <label class="form-label small fw-bold">Đường dẫn ảnh đại diện (URL hoặc tên file ảnh local) <span class="text-danger">*</span></label>
              <div class="input-group">
                <span class="input-group-text bg-white"><i class="bi bi-link-45deg text-muted"></i></span>
                <input type="text" class="form-control" id="userAvatarInputUrl" required placeholder="Dán link ảnh hoặc nhập tên file..." oninput="previewUserAvatar(this.value)">
              </div>
            </div>

            <!-- Quick Presets -->
            <div class="text-start mb-2">
              <label class="form-label small fw-bold text-muted text-uppercase" style="font-size: 0.72rem;">
                <i class="bi bi-lightning-charge-fill text-warning me-1"></i> Hoặc chọn nhanh ảnh mẫu phong cách Velora:
              </label>
              <div class="row g-2">
                <div class="col-4">
                  <button type="button" class="btn btn-outline-light text-dark border p-1 rounded-3 w-100 text-center" onclick="selectPresetAvatar('https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80')">
                    <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80" class="rounded-circle mb-1" style="width: 38px; height: 38px; object-fit: cover;">
                    <div class="small fw-semibold" style="font-size: 0.68rem;">Quý Cô Sang</div>
                  </button>
                </div>
                <div class="col-4">
                  <button type="button" class="btn btn-outline-light text-dark border p-1 rounded-3 w-100 text-center" onclick="selectPresetAvatar('https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&auto=format&fit=crop&q=80')">
                    <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&auto=format&fit=crop&q=80" class="rounded-circle mb-1" style="width: 38px; height: 38px; object-fit: cover;">
                    <div class="small fw-semibold" style="font-size: 0.68rem;">Nữ Hiện Đại</div>
                  </button>
                </div>
                <div class="col-4">
                  <button type="button" class="btn btn-outline-light text-dark border p-1 rounded-3 w-100 text-center" onclick="selectPresetAvatar('https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400&auto=format&fit=crop&q=80')">
                    <img src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=100&auto=format&fit=crop&q=80" class="rounded-circle mb-1" style="width: 38px; height: 38px; object-fit: cover;">
                    <div class="small fw-semibold" style="font-size: 0.68rem;">Quý Ông Suit</div>
                  </button>
                </div>
                <div class="col-4">
                  <button type="button" class="btn btn-outline-light text-dark border p-1 rounded-3 w-100 text-center" onclick="selectPresetAvatar('https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80')">
                    <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80" class="rounded-circle mb-1" style="width: 38px; height: 38px; object-fit: cover;">
                    <div class="small fw-semibold" style="font-size: 0.68rem;">Nam Lịch Lãm</div>
                  </button>
                </div>
                <div class="col-4">
                  <button type="button" class="btn btn-outline-light text-dark border p-1 rounded-3 w-100 text-center" onclick="selectPresetAvatar('https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80')">
                    <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&auto=format&fit=crop&q=80" class="rounded-circle mb-1" style="width: 38px; height: 38px; object-fit: cover;">
                    <div class="small fw-semibold" style="font-size: 0.68rem;">Super Admin</div>
                  </button>
                </div>
                <div class="col-4">
                  <button type="button" class="btn btn-outline-light text-dark border p-1 rounded-3 w-100 text-center" onclick="selectPresetAvatar('chan_vay_xep_ly_midi.jpg')">
                    <img src="chan_vay_xep_ly_midi.jpg" class="rounded-circle mb-1" style="width: 38px; height: 38px; object-fit: cover;">
                    <div class="small fw-semibold" style="font-size: 0.68rem;">Lookbook Velora</div>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer bg-light px-4 py-3">
            <button type="button" class="btn btn-outline-secondary rounded-pill px-4" data-bs-dismiss="modal">Hủy</button>
            <button type="submit" class="btn btn-dark rounded-pill px-4 fw-bold shadow-sm">
              <i class="bi bi-check-circle me-1"></i> Lưu Ảnh Đại Diện
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>

  <!-- MODAL 1: EDIT ADMIN PROFILE (TÊN, EMAIL, SĐT, DANH XƯNG) -->
  <div class="modal fade" id="adminEditProfileModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content border-0 shadow-lg rounded-4 overflow-hidden">
        <div class="modal-header bg-dark text-white border-0 px-4 py-3">
          <h5 class="modal-title fw-bold">
            <i class="bi bi-person-gear text-warning me-2"></i>Chỉnh Sửa Hồ Sơ Quản Trị Viên (Admin)
          </h5>
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
        </div>
        <form id="adminEditProfileForm" onsubmit="saveAdminProfileInfo(event)">
          <div class="modal-body p-4 text-start">
            <div class="mb-3">
              <label class="form-label small fw-bold">Họ và tên Quản trị viên <span class="text-danger">*</span></label>
              <div class="input-group">
                <span class="input-group-text bg-white"><i class="bi bi-person-fill text-muted"></i></span>
                <input type="text" class="form-control" id="adminProfileNameInput" required placeholder="Ví dụ: Trần Minh Quân">
              </div>
              <div class="form-text small">Tên này sẽ hiển thị trên Navbar, Header quản trị và toàn bộ thông báo hệ thống.</div>
            </div>

            <div class="mb-3">
              <label class="form-label small fw-bold">Email quản trị</label>
              <div class="input-group">
                <span class="input-group-text bg-white"><i class="bi bi-envelope-fill text-muted"></i></span>
                <input type="email" class="form-control" id="adminProfileEmailInput" placeholder="admin@velora.vn">
              </div>
            </div>

            <div class="mb-3">
              <label class="form-label small fw-bold">Số điện thoại điều hành</label>
              <div class="input-group">
                <span class="input-group-text bg-white"><i class="bi bi-telephone-fill text-muted"></i></span>
                <input type="tel" class="form-control" id="adminProfilePhoneInput" placeholder="1900 8899 hoặc 0988 888 999">
              </div>
            </div>

            <div class="mb-2">
              <label class="form-label small fw-bold">Chức danh / Danh xưng hiển thị</label>
              <div class="input-group">
                <span class="input-group-text bg-white"><i class="bi bi-shield-check text-warning"></i></span>
                <input type="text" class="form-control" id="adminProfileTitleInput" placeholder="Ví dụ: SUPER ADMIN • Tổng Quản Trị Velora">
              </div>
            </div>
          </div>
          <div class="modal-footer bg-light px-4 py-3">
            <button type="button" class="btn btn-outline-secondary rounded-pill px-4" data-bs-dismiss="modal">Hủy</button>
            <button type="submit" class="btn btn-dark rounded-pill px-4 fw-bold shadow-sm">
              <i class="bi bi-check-circle me-1"></i> Lưu & Cập Nhật Tên Admin
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>

  <!-- MODAL 2: EDIT CATEGORY SHOWCASE BANNER -->
  <div class="modal fade" id="adminCategoryBannerModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content border-0 shadow-lg rounded-4 overflow-hidden">
        <div class="modal-header bg-dark text-white border-0 px-4 py-3">
          <h5 class="modal-title fw-bold">
            <i class="bi bi-grid-fill text-warning me-2"></i>Chỉnh Sửa Ảnh & Nội Dung Ngành Hàng
          </h5>
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
        </div>
        <form onsubmit="adminSaveCategoryBanner(event)">
          <input type="hidden" id="admCatBannerId">
          <div class="modal-body p-4 text-start">
            <div class="row g-3">
              <!-- Left Preview -->
              <div class="col-md-5 text-center">
                <label class="form-label small fw-bold text-muted d-block">Xem trước ảnh card:</label>
                <div class="border rounded-4 overflow-hidden shadow-sm position-relative d-inline-block w-100" style="height: 220px; background: #f8f9fa;">
                  <img id="admCatBannerPreview" src="" alt="Preview" class="w-100 h-100" style="object-fit: cover;">
                </div>
              </div>

              <!-- Right Inputs -->
              <div class="col-md-7">
                <div class="mb-2">
                  <label class="form-label small fw-bold">Đường dẫn ảnh card (URL hoặc tên file local) <span class="text-danger">*</span></label>
                  <div class="input-group">
                    <span class="input-group-text bg-white"><i class="bi bi-link-45deg"></i></span>
                    <input type="text" class="form-control" id="admCatBannerImage" required oninput="document.getElementById('admCatBannerPreview').src = this.value">
                  </div>
                </div>

                <div class="mb-2">
                  <label class="form-label small fw-bold">Tagline nhỏ</label>
                  <input type="text" class="form-control" id="admCatBannerTag" required>
                </div>

                <div class="mb-2">
                  <label class="form-label small fw-bold">Tiêu đề chính</label>
                  <input type="text" class="form-control" id="admCatBannerTitle" required>
                </div>

                <div class="mb-2">
                  <label class="form-label small fw-bold">Mô tả phụ</label>
                  <input type="text" class="form-control" id="admCatBannerDesc" required>
                </div>

                <div class="mb-2">
                  <label class="form-label small fw-bold">Đường dẫn trang đích (Link)</label>
                  <input type="text" class="form-control" id="admCatBannerLink" required placeholder="women.html, men.html, v.v.">
                </div>
              </div>
            </div>

            <!-- Quick Preset High-Res Photos -->
            <div class="mt-3 pt-3 border-top">
              <label class="form-label small fw-bold text-muted text-uppercase" style="font-size: 0.72rem;">
                <i class="bi bi-lightning-charge-fill text-warning me-1"></i> Hoặc chọn nhanh ảnh mẫu thời trang chuẩn:
              </label>
              <div class="row g-2">
                <div class="col-3">
                  <button type="button" class="btn btn-outline-light text-dark border p-1 rounded-3 w-100" onclick="document.getElementById('admCatBannerImage').value = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600'; document.getElementById('admCatBannerPreview').src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600';">
                    <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100" class="rounded w-100 mb-1" style="height: 45px; object-fit: cover;">
                    <div style="font-size: 0.65rem;">Nữ Haute</div>
                  </button>
                </div>
                <div class="col-3">
                  <button type="button" class="btn btn-outline-light text-dark border p-1 rounded-3 w-100" onclick="document.getElementById('admCatBannerImage').value = 'https://images.unsplash.com/photo-1516257984-b1b4d707412e?w=600'; document.getElementById('admCatBannerPreview').src = 'https://images.unsplash.com/photo-1516257984-b1b4d707412e?w=600';">
                    <img src="https://images.unsplash.com/photo-1516257984-b1b4d707412e?w=100" class="rounded w-100 mb-1" style="height: 45px; object-fit: cover;">
                    <div style="font-size: 0.65rem;">Nam Urban</div>
                  </button>
                </div>
                <div class="col-3">
                  <button type="button" class="btn btn-outline-light text-dark border p-1 rounded-3 w-100" onclick="document.getElementById('admCatBannerImage').value = 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600'; document.getElementById('admCatBannerPreview').src = 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600';">
                    <img src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=100" class="rounded w-100 mb-1" style="height: 45px; object-fit: cover;">
                    <div style="font-size: 0.65rem;">Túi Luxury</div>
                  </button>
                </div>
                <div class="col-3">
                  <button type="button" class="btn btn-outline-light text-dark border p-1 rounded-3 w-100" onclick="document.getElementById('admCatBannerImage').value = 'chan_vay_xep_ly_midi.jpg'; document.getElementById('admCatBannerPreview').src = 'chan_vay_xep_ly_midi.jpg';">
                    <img src="chan_vay_xep_ly_midi.jpg" class="rounded w-100 mb-1" style="height: 45px; object-fit: cover;">
                    <div style="font-size: 0.65rem;">Váy Midi</div>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer bg-light px-4 py-3">
            <button type="button" class="btn btn-outline-secondary rounded-pill px-4" data-bs-dismiss="modal">Hủy</button>
            <button type="submit" class="btn btn-dark rounded-pill px-4 fw-bold shadow-sm">
              <i class="bi bi-check-circle me-1"></i> Lưu Card Ngành Hàng
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>

  <!-- MODAL 3: EDIT LOOKBOOK MEDIA CARD -->
  <div class="modal fade" id="adminLookbookModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content border-0 shadow-lg rounded-4 overflow-hidden">
        <div class="modal-header bg-dark text-white border-0 px-4 py-3">
          <h5 class="modal-title fw-bold">
            <i class="bi bi-camera-reels-fill text-warning me-2"></i>Chỉnh Sửa Ảnh & Outfit Lookbook
          </h5>
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
        </div>
        <form onsubmit="adminSaveLookbookModal(event)">
          <input type="hidden" id="admLookbookId">
          <div class="modal-body p-4 text-start">
            <div class="row g-3">
              <div class="col-md-5 text-center">
                <label class="form-label small fw-bold text-muted d-block">Xem trước ảnh lookbook:</label>
                <div class="border rounded-4 overflow-hidden shadow-sm position-relative d-inline-block w-100" style="height: 260px; background: #f8f9fa;">
                  <img id="admLookbookPreview" src="" alt="Preview" class="w-100 h-100" style="object-fit: cover;">
                </div>
              </div>
              <div class="col-md-7">
                <div class="mb-2">
                  <label class="form-label small fw-bold">Đường dẫn ảnh Lookbook (URL / file local) <span class="text-danger">*</span></label>
                  <input type="text" class="form-control" id="admLookbookImage" required oninput="document.getElementById('admLookbookPreview').src = this.value">
                </div>
                <div class="row g-2 mb-2">
                  <div class="col-6">
                    <label class="form-label small fw-bold">Hashtag Tag</label>
                    <input type="text" class="form-control" id="admLookbookTag" required>
                  </div>
                  <div class="col-6">
                    <label class="form-label small fw-bold">Giá set đồ hiển thị</label>
                    <input type="text" class="form-control" id="admLookbookPrice" required placeholder="1.250.000đ / set">
                  </div>
                </div>
                <div class="mb-2">
                  <label class="form-label small fw-bold">Tiêu đề bản phối</label>
                  <input type="text" class="form-control" id="admLookbookTitle" required>
                </div>
                <div class="mb-2">
                  <label class="form-label small fw-bold">Mô tả ngắn</label>
                  <input type="text" class="form-control" id="admLookbookDesc" required>
                </div>
                <div class="mb-2">
                  <label class="form-label small fw-bold">Thông tin điểm ghim (Hotspot)</label>
                  <input type="text" class="form-control" id="admLookbookHotspot" required placeholder="Set Áo Nỉ & Quần Jogger • 649.000đ">
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer bg-light px-4 py-3">
            <button type="button" class="btn btn-outline-secondary rounded-pill px-4" data-bs-dismiss="modal">Hủy</button>
            <button type="submit" class="btn btn-dark rounded-pill px-4 fw-bold shadow-sm">
              <i class="bi bi-check-circle me-1"></i> Lưu Ảnh Lookbook
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>

  <!-- MODAL 4: ADD/EDIT CUSTOMER DELIVERY ADDRESS -->
  <div class="modal fade" id="customerAddressModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content border-0 shadow-lg rounded-4 overflow-hidden">
        <div class="modal-header bg-dark text-white border-0 px-4 py-3">
          <h5 class="modal-title fw-bold" id="customerAddressModalTitle">
            <i class="bi bi-geo-alt-fill text-warning me-2"></i>Thêm Địa Chỉ Nhận Hàng Mới
          </h5>
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
        </div>
        <form onsubmit="saveAddressForm(event)">
          <input type="hidden" id="addrIdInput">
          <div class="modal-body p-4 text-start">
            <div class="row g-2 mb-3">
              <div class="col-6">
                <label class="form-label small fw-bold">Họ và tên người nhận <span class="text-danger">*</span></label>
                <input type="text" class="form-control" id="addrNameInput" required placeholder="Nguyễn Văn A">
              </div>
              <div class="col-6">
                <label class="form-label small fw-bold">Số điện thoại <span class="text-danger">*</span></label>
                <input type="tel" class="form-control" id="addrPhoneInput" required placeholder="0988 123 456">
              </div>
            </div>

            <div class="row g-2 mb-3">
              <div class="col-6">
                <label class="form-label small fw-bold">Tỉnh / Thành phố <span class="text-danger">*</span></label>
                <input type="text" class="form-control" id="addrCityInput" required placeholder="TP. Hồ Chí Minh">
              </div>
              <div class="col-6">
                <label class="form-label small fw-bold">Quận / Huyện <span class="text-danger">*</span></label>
                <input type="text" class="form-control" id="addrDistrictInput" required placeholder="Quận 1">
              </div>
            </div>

            <div class="mb-3">
              <label class="form-label small fw-bold">Địa chỉ chi tiết (Số nhà, đường, phường/xã) <span class="text-danger">*</span></label>
              <textarea class="form-control" id="addrDetailInput" rows="2" required placeholder="Ví dụ: 123 Đường Nam Kỳ Khởi Nghĩa, P. Bến Nghé..."></textarea>
            </div>

            <div class="mb-3">
              <label class="form-label small fw-bold">Nhãn địa chỉ</label>
              <select class="form-select" id="addrLabelInput">
                <option value="Nhà riêng">Nhà riêng</option>
                <option value="Văn phòng làm việc">Văn phòng làm việc</option>
                <option value="Khác">Khác</option>
              </select>
            </div>

            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="addrDefaultCheck">
              <label class="form-check-label small fw-semibold" for="addrDefaultCheck">
                Đặt làm địa chỉ giao hàng mặc định
              </label>
            </div>
          </div>
          <div class="modal-footer bg-light px-4 py-3">
            <button type="button" class="btn btn-outline-secondary rounded-pill px-4" data-bs-dismiss="modal">Hủy</button>
            <button type="submit" class="btn btn-dark rounded-pill px-4 fw-bold shadow-sm">
              <i class="bi bi-check-circle me-1"></i> Lưu Địa Chỉ
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>

  <!-- MODAL: SMART SIZE GUIDE & FIT ASSISTANT -->
  <div class="modal fade" id="sizeGuideModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content border-0 shadow-lg rounded-4 overflow-hidden">
        <div class="modal-header bg-dark text-white border-0 px-4 py-3">
          <h5 class="modal-title fw-bold">
            <i class="bi bi-rulers text-warning me-2"></i>Bảng Tra Size & Trợ Lý Chọn Size Chuẩn
          </h5>
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
        </div>
        <div class="modal-body p-4">
          <!-- Size Guide Tabs -->
          <ul class="nav nav-pills mb-4 justify-content-center gap-2" role="tablist">
            <li class="nav-item">
              <button class="nav-link active rounded-pill px-4 fw-bold" data-bs-toggle="pill" data-bs-target="#sizeTabCalculator">
                <i class="bi bi-magic me-1"></i> Trợ Lý Tính Size Nhanh
              </button>
            </li>
            <li class="nav-item">
              <button class="nav-link rounded-pill px-4 fw-bold" data-bs-toggle="pill" data-bs-target="#sizeTabWomen">
                <i class="bi bi-gender-female me-1"></i> Bảng Size Nữ
              </button>
            </li>
            <li class="nav-item">
              <button class="nav-link rounded-pill px-4 fw-bold" data-bs-toggle="pill" data-bs-target="#sizeTabMen">
                <i class="bi bi-gender-male me-1"></i> Bảng Size Nam
              </button>
            </li>
          </ul>

          <div class="tab-content">
            <!-- TAB 1: SMART CALCULATOR -->
            <div class="tab-pane fade show active" id="sizeTabCalculator">
              <div class="card border-0 bg-light rounded-4 p-4 text-center">
                <h6 class="fw-bold font-serif mb-2">Nhập Thông Số Cơ Thể Để Nhận Gợi Ý Size Chuẩn:</h6>
                <p class="small text-muted mb-4">Thuật toán phân tích dựa trên phom dáng thời trang may đo cao cấp của Velora</p>

                <div class="row g-3 justify-content-center text-start">
                  <div class="col-md-4">
                    <label class="form-label small fw-bold">Giới tính:</label>
                    <select class="form-select" id="calcGender">
                      <option value="women">Nữ giới (Women)</option>
                      <option value="men">Nam giới (Men)</option>
                    </select>
                  </div>
                  <div class="col-md-4">
                    <label class="form-label small fw-bold">Chiều cao (cm):</label>
                    <input type="number" class="form-control" id="calcHeight" value="165" min="140" max="210">
                  </div>
                  <div class="col-md-4">
                    <label class="form-label small fw-bold">Cân nặng (kg):</label>
                    <input type="number" class="form-control" id="calcWeight" value="52" min="35" max="150">
                  </div>
                </div>

                <div class="mt-4">
                  <button type="button" class="btn btn-dark rounded-pill px-5 fw-bold shadow-sm" onclick="calculateSmartFit()">
                    <i class="bi bi-calculator me-1"></i> Gợi Ý Size Cho Tôi
                  </button>
                </div>

                <!-- Result Box -->
                <div class="mt-4 p-3 bg-white border border-warning rounded-4 shadow-sm text-center d-none" id="calcResultBox">
                  <div class="small text-muted text-uppercase fw-bold letter-spacing-1">Kết quả phân tích:</div>
                  <h3 class="fw-bold font-serif text-danger my-1" id="calcResultSize">Size M</h3>
                  <p class="small text-muted mb-0" id="calcResultDesc">Phù hợp phom dáng vừa vặn, tôn dáng và cử động thoải mái.</p>
                </div>
              </div>
            </div>

            <!-- TAB 2: WOMEN SIZE CHART -->
            <div class="tab-pane fade" id="sizeTabWomen">
              <div class="table-responsive">
                <table class="table table-bordered text-center align-middle small mb-0">
                  <thead class="table-light">
                    <tr>
                      <th>Size</th>
                      <th>Chiều cao (cm)</th>
                      <th>Cân nặng (kg)</th>
                      <th>Vòng ngực (cm)</th>
                      <th>Vòng eo (cm)</th>
                      <th>Vòng mông (cm)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td><b>XS</b></td><td>150 - 155</td><td>40 - 45</td><td>78 - 82</td><td>60 - 64</td><td>84 - 88</td></tr>
                    <tr><td><b>S</b></td><td>154 - 160</td><td>45 - 50</td><td>82 - 86</td><td>64 - 68</td><td>88 - 92</td></tr>
                    <tr><td class="table-warning"><b>M</b></td><td>158 - 165</td><td>50 - 56</td><td>86 - 90</td><td>68 - 72</td><td>92 - 96</td></tr>
                    <tr><td><b>L</b></td><td>162 - 170</td><td>56 - 62</td><td>90 - 94</td><td>72 - 76</td><td>96 - 100</td></tr>
                    <tr><td><b>XL</b></td><td>165 - 175</td><td>62 - 70</td><td>94 - 100</td><td>76 - 82</td><td>100 - 106</td></tr>
                  </tbody>
                </table>
              </div>
            </div>

            <!-- TAB 3: MEN SIZE CHART -->
            <div class="tab-pane fade" id="sizeTabMen">
              <div class="table-responsive">
                <table class="table table-bordered text-center align-middle small mb-0">
                  <thead class="table-light">
                    <tr>
                      <th>Size</th>
                      <th>Chiều cao (cm)</th>
                      <th>Cân nặng (kg)</th>
                      <th>Rộng vai (cm)</th>
                      <th>Vòng ngực (cm)</th>
                      <th>Dài áo (cm)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td><b>S</b></td><td>160 - 165</td><td>50 - 58</td><td>42 - 43</td><td>88 - 92</td><td>66 - 68</td></tr>
                    <tr><td><b>M</b></td><td>165 - 172</td><td>58 - 66</td><td>44 - 45</td><td>92 - 96</td><td>68 - 70</td></tr>
                    <tr><td class="table-warning"><b>L</b></td><td>170 - 178</td><td>66 - 74</td><td>46 - 47</td><td>96 - 102</td><td>70 - 72</td></tr>
                    <tr><td><b>XL</b></td><td>175 - 183</td><td>74 - 82</td><td>48 - 49</td><td>102 - 108</td><td>72 - 74</td></tr>
                    <tr><td><b>XXL</b></td><td>180 - 190</td><td>82 - 92</td><td>50 - 52</td><td>108 - 116</td><td>74 - 76</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer bg-light px-4 py-3">
          <button type="button" class="btn btn-outline-secondary rounded-pill px-4" data-bs-dismiss="modal">Đóng</button>
          <button type="button" class="btn btn-dark rounded-pill px-4" onclick="sendAiMessage('Tư vấn size đồ cho tôi'); toggleAiChat(); bootstrap.Modal.getInstance(document.getElementById('sizeGuideModal')).hide();">
            <i class="bi bi-chat-dots me-1"></i> Hỏi AI Stylist 1:1
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- MODAL: PRODUCT REVIEW & RATING -->
  <div class="modal fade" id="productReviewModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content border-0 shadow-lg rounded-4 overflow-hidden">
        <div class="modal-header bg-dark text-white border-0 px-4 py-3">
          <h5 class="modal-title fw-bold">
            <i class="bi bi-star-fill text-warning me-2"></i>Đánh Giá Sản Phẩm
          </h5>
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
        </div>
        <form onsubmit="saveProductReview(event)">
          <input type="hidden" id="reviewProdId" value="">
          <div class="modal-body p-4 text-start">
            <div class="d-flex align-items-center gap-3 mb-3 pb-3 border-bottom">
              <img id="reviewProdThumb" src="logo_crop.png" class="rounded-3 border" style="width: 50px; height: 50px; object-fit: cover;">
              <div>
                <h6 class="fw-bold font-serif m-0" id="reviewProdName">Tên sản phẩm</h6>
                <div class="small text-danger fw-bold" id="reviewProdPrice">0đ</div>
              </div>
            </div>

            <div class="mb-3 text-center">
              <label class="form-label small fw-bold text-muted text-uppercase d-block mb-1">Mức độ hài lòng của bạn:</label>
              <div class="d-flex justify-content-center gap-2 fs-3 text-warning cursor-pointer" id="reviewStarWrap">
                <i class="bi bi-star-fill review-star" data-val="1" onclick="setReviewRating(1)"></i>
                <i class="bi bi-star-fill review-star" data-val="2" onclick="setReviewRating(2)"></i>
                <i class="bi bi-star-fill review-star" data-val="3" onclick="setReviewRating(3)"></i>
                <i class="bi bi-star-fill review-star" data-val="4" onclick="setReviewRating(4)"></i>
                <i class="bi bi-star-fill review-star" data-val="5" onclick="setReviewRating(5)"></i>
              </div>
              <input type="hidden" id="reviewRatingVal" value="5">
              <div class="small fw-semibold text-muted mt-1" id="reviewRatingLabel">Tuyệt vời (5/5 sao)</div>
            </div>

            <div class="mb-3">
              <label class="form-label small fw-bold">Họ và tên người đánh giá <span class="text-danger">*</span></label>
              <input type="text" class="form-control" id="reviewAuthorName" required placeholder="Nguyễn Văn A">
            </div>

            <div class="mb-2">
              <label class="form-label small fw-bold">Nhận xét chi tiết <span class="text-danger">*</span></label>
              <textarea class="form-control" id="reviewCommentText" rows="3" required placeholder="Chất liệu vải thế nào? Form dáng có chuẩn không?..."></textarea>
            </div>
          </div>
          <div class="modal-footer bg-light px-4 py-3">
            <button type="button" class="btn btn-outline-secondary rounded-pill px-4" data-bs-dismiss="modal">Hủy</button>
            <button type="submit" class="btn btn-dark rounded-pill px-4 fw-bold shadow-sm">
              <i class="bi bi-send-fill me-1"></i> Gửi Đánh Giá Ngay
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>

  <!-- MODAL: ADMIN QUICK STOCK EDIT -->
  <div class="modal fade" id="adminQuickStockModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-sm">
      <div class="modal-content border-0 shadow-lg rounded-4 overflow-hidden">
        <div class="modal-header bg-dark text-white border-0 px-3 py-2">
          <h6 class="modal-title fw-bold">
            <i class="bi bi-boxes text-warning me-2"></i>Cập Nhật Kho Nhanh
          </h6>
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
        </div>
        <form onsubmit="saveQuickStock(event)">
          <input type="hidden" id="quickStockProdId" value="">
          <div class="modal-body p-3 text-start">
            <div class="small fw-bold text-truncate mb-2" id="quickStockProdTitle">Tên sản phẩm</div>
            <label class="form-label small fw-bold">Số lượng tồn kho mới:</label>
            <input type="number" class="form-control form-control-lg text-center fw-bold" id="quickStockInput" min="0" required>
          </div>
          <div class="modal-footer bg-light px-3 py-2">
            <button type="button" class="btn btn-sm btn-outline-secondary rounded-pill" data-bs-dismiss="modal">Hủy</button>
            <button type="submit" class="btn btn-sm btn-dark rounded-pill px-3 fw-bold">
              <i class="bi bi-check-lg me-1"></i> Lưu Tồn Kho
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>


  <!-- TOAST NOTIFICATION CONTAINER -->
  <div id="toastContainer" class="toast-container-velora"></div>

  <!-- Bootstrap 5.3.3 JS Bundle -->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
  <!-- Supabase JS Client v2 CDN -->
  <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
  <!-- Custom Core Engine -->
  <script src="script.js"></script>
</body>
</html>
"""

# ==============================================================================
# 1. GENERATE index.html (Trang chủ)
# ==============================================================================
def make_index_html():
    content = get_head("Trang chủ — Bộ Sưu Tập Thời Trang Thượng Lưu 2026")
    content += '<body data-page="home">\n'
    content += get_header("home")
    content += """
  <!-- HERO CAROUSEL: FASHION STYLE (3 SLIDES KEN BURNS ZOOM) -->
  <section class="container py-3">
    <div id="heroFashionCarousel" class="carousel slide carousel-fade hero-slider-wrap" data-bs-ride="carousel" data-bs-interval="4500">
      <div class="hero-carousel-indicators">
        <button type="button" class="hero-indicator-btn active" data-bs-target="#heroFashionCarousel" data-bs-slide-to="0" aria-label="Slide 1"></button>
        <button type="button" class="hero-indicator-btn" data-bs-target="#heroFashionCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" class="hero-indicator-btn" data-bs-target="#heroFashionCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>

      <div class="carousel-inner">
        <!-- Slide 1 -->
        <div class="carousel-item active hero-slide-item">
          <img src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1600&auto=format&fit=crop&q=80" class="hero-slide-bg" alt="Velora Fashion Style">
          <div class="hero-slide-overlay overlay-dark"></div>
          <div class="container position-relative">
            <div class="hero-slide-content text-white">
              <span class="hero-tagline">BỘ SƯU TẬP 2026</span>
              <h1 class="hero-title">FASHION STYLE</h1>
              <p class="hero-desc">Đẳng cấp thời trang định hình phong cách sống thượng lưu. Từng đường may, chất liệu được chắt lọc tinh tế nhất.</p>
              <div class="d-flex align-items-center gap-3 hero-btn-group">
                <a href="new-arrivals.html" class="btn btn-light btn-lg rounded-pill px-4 fw-bold">Mua ngay</a>
                <a href="#homeLookbook" class="btn btn-outline-light btn-lg rounded-pill px-4">Xem Lookbook</a>
              </div>
            </div>
          </div>
        </div>

        <!-- Slide 2 -->
        <div class="carousel-item hero-slide-item">
          <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1600&auto=format&fit=crop&q=80" class="hero-slide-bg" alt="Urban Elegance">
          <div class="hero-slide-overlay overlay-dark"></div>
          <div class="container position-relative">
            <div class="hero-slide-content text-white">
              <span class="hero-tagline">URBAN ELEGANCE 2026</span>
              <h1 class="hero-title">XU HƯỚNG MỚI</h1>
              <p class="hero-desc">Sự giao thoa hoàn mỹ giữa nét thanh lịch đương đại và tính ứng dụng linh hoạt cho quý cô & quý ông hiện đại.</p>
              <div class="d-flex align-items-center gap-3 hero-btn-group">
                <a href="women.html" class="btn btn-warning btn-lg rounded-pill px-4 fw-bold text-dark">Thời trang Nữ</a>
                <a href="men.html" class="btn btn-outline-light btn-lg rounded-pill px-4">Thời trang Nam</a>
              </div>
            </div>
          </div>
        </div>

        <!-- Slide 3 -->
        <div class="carousel-item hero-slide-item">
          <img src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1600&auto=format&fit=crop&q=80" class="hero-slide-bg" alt="Timeless Luxury">
          <div class="hero-slide-overlay overlay-dark"></div>
          <div class="container position-relative">
            <div class="hero-slide-content text-white">
              <span class="hero-tagline">TIMELESS LUXURY</span>
              <h1 class="hero-title">ĐẲNG CẤP VƯỢT THỜI GIAN</h1>
              <p class="hero-desc">Chất liệu cao cấp thủ công kết hợp cùng kỹ thuật may đo tinh xảo chuẩn quốc tế mang lại sự tự tin tuyệt đối.</p>
              <div class="d-flex align-items-center gap-3 hero-btn-group">
                <a href="accessories.html" class="btn btn-light btn-lg rounded-pill px-4 fw-bold">Xem Phụ Kiện</a>
                <a href="flash-sale.html" class="btn btn-danger btn-lg rounded-pill px-4 fw-bold">⚡ Flash Sale</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Controls -->
      <button class="carousel-control-prev" type="button" data-bs-target="#heroFashionCarousel" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Trước</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#heroFashionCarousel" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Sau</span>
      </button>
    </div>
  </section>

  <!-- CATEGORY QUICK BANNERS & VALUE PROPS (FIGMA AUTHENTIC) -->
  <section class="container py-3">
    <div class="row g-3 mb-4">
      <!-- Men Banner -->
      <div class="col-md-4">
        <a href="men.html" class="category-quick-card">
          <div class="category-quick-img-wrap">
            <img src="https://images.unsplash.com/photo-1516257984-b1b4d707412e?w=400&auto=format&fit=crop&q=80" alt="Bộ sưu tập nam" class="category-quick-img">
          </div>
          <div class="category-quick-body">
            <span class="category-quick-tag text-uppercase">Bộ sưu tập nam</span>
            <h5 class="category-quick-title">Thời Trang Nam</h5>
            <p class="category-quick-desc">Áo nỉ, polo, quần âu & blazer</p>
          </div>
          <div class="category-quick-arrow">
            <i class="bi bi-arrow-right"></i>
          </div>
        </a>
      </div>

      <!-- Women Banner (100% Female Model - Elegant High Fashion) -->
      <div class="col-md-4">
        <a href="women.html" class="category-quick-card">
          <div class="category-quick-img-wrap">
            <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80" alt="Bộ sưu tập nữ" class="category-quick-img">
          </div>
          <div class="category-quick-body">
            <span class="category-quick-tag text-uppercase text-danger">Bộ sưu tập nữ</span>
            <h5 class="category-quick-title">Thời Trang Nữ</h5>
            <p class="category-quick-desc">Đầm dạ hội, áo blouse & váy dạ</p>
          </div>
          <div class="category-quick-arrow">
            <i class="bi bi-arrow-right"></i>
          </div>
        </a>
      </div>

      <!-- Accessories Banner -->
      <div class="col-md-4">
        <a href="accessories.html" class="category-quick-card">
          <div class="category-quick-img-wrap">
            <img src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&auto=format&fit=crop&q=80" alt="Phụ Kiện Cao Cấp" class="category-quick-img">
          </div>
          <div class="category-quick-body">
            <span class="category-quick-tag text-uppercase text-warning text-dark">Chi tiết nhỏ phong cách lớn</span>
            <h5 class="category-quick-title">Phụ Kiện Cao Cấp</h5>
            <p class="category-quick-desc">Túi xách, ngọc trai & kính mát</p>
          </div>
          <div class="category-quick-arrow">
            <i class="bi bi-arrow-right"></i>
          </div>
        </a>
      </div>
    </div>

    <!-- Value Props Row (Figma Authentic) -->
    <div class="row g-3">
      <!-- Item 1: Giao Hàng Hỏa Tốc (Icon bi-truck fixed) -->
      <div class="col-md-4">
        <div class="value-prop-item">
          <div class="value-prop-icon text-danger">
            <i class="bi bi-truck fs-4"></i>
          </div>
          <div>
            <h6 class="value-prop-title">Giao Hàng Hỏa Tốc</h6>
            <p class="value-prop-desc">Miễn phí vận chuyển toàn quốc từ 500k</p>
          </div>
        </div>
      </div>

      <!-- Item 2: Đổi Trả 15 Ngày Tận Nơi -->
      <div class="col-md-4">
        <div class="value-prop-item">
          <div class="value-prop-icon text-primary">
            <i class="bi bi-arrow-repeat fs-4"></i>
          </div>
          <div>
            <h6 class="value-prop-title">Đổi Trả 15 Ngày Tận Nơi</h6>
            <p class="value-prop-desc">Miễn phí đổi hàng không cần lý do</p>
          </div>
        </div>
      </div>

      <!-- Item 3: Hỗ Trợ 24/7 Hotline 1900 8899 -->
      <div class="col-md-4">
        <a href="tel:19008899" class="value-prop-item text-decoration-none">
          <div class="value-prop-icon text-success">
            <i class="bi bi-headset fs-4"></i>
          </div>
          <div>
            <h6 class="value-prop-title text-dark">Hỗ Trợ 24/7</h6>
            <p class="value-prop-desc">Hotline: <b class="text-danger">1900 8899</b> • Stylist tư vấn 1:1</p>
          </div>
        </a>
      </div>
    </div>
  </section>

  <!-- SECTION 1: SẢN PHẨM NỔI BẬT (HOT) -->
  <section class="container py-4">
    <div class="d-flex justify-content-between align-items-end mb-4 border-bottom pb-3">
      <div>
        <span class="text-uppercase small fw-bold text-danger letter-spacing-1">Xu hướng tuần này</span>
        <h3 class="fw-bold font-serif m-0">Sản phẩm nổi bật</h3>
      </div>
      <a href="new-arrivals.html" class="btn btn-outline-dark btn-sm rounded-pill px-3">Xem tất cả <i class="bi bi-arrow-right"></i></a>
    </div>
    <div class="row g-4" id="gridHomeHot">
      <!-- Populated by script.js -->
    </div>
  </section>

  <!-- SECTION 2: ÁO -->
  <section class="container py-4">
    <div class="d-flex justify-content-between align-items-end mb-4 border-bottom pb-3 flex-wrap gap-2">
      <div>
        <span class="text-uppercase small fw-bold text-muted letter-spacing-1">Bộ sưu tập áo</span>
        <h3 class="fw-bold font-serif m-0">Áo Nam &amp; Nữ Cao Cấp</h3>
        <div class="subcat-nav-wrap small text-muted mt-1">
          <span class="subcat-link active" onclick="filterSectionSubcategory('gridHomeAo', 'all', this)">Tất cả áo</span>
          <span class="subcat-sep">•</span>
          <span class="subcat-link" onclick="filterSectionSubcategory('gridHomeAo', 'ao-phong', this)">Áo Phông &amp; Polo</span>
          <span class="subcat-sep">•</span>
          <span class="subcat-link" onclick="filterSectionSubcategory('gridHomeAo', 'ao-so-mi', this)">Áo Sơ Mi &amp; Blouse</span>
          <span class="subcat-sep">•</span>
          <span class="subcat-link" onclick="filterSectionSubcategory('gridHomeAo', 'ao-khoac', this)">Áo Khoác &amp; Blazer</span>
        </div>
      </div>
      <a href="new-arrivals.html" class="btn btn-link text-dark text-decoration-none p-0 fw-semibold">Xem thêm áo <i class="bi bi-chevron-right"></i></a>
    </div>
    <div class="row g-4" id="gridHomeAo">
      <!-- Populated by script.js -->
    </div>
  </section>

  <!-- SECTION 3: QUẦN & CHÂN VÁY -->
  <section class="container py-4">
    <div class="d-flex justify-content-between align-items-end mb-4 border-bottom pb-3 flex-wrap gap-2">
      <div>
        <span class="text-uppercase small fw-bold text-muted letter-spacing-1">Form dáng chuẩn mực</span>
        <h3 class="fw-bold font-serif m-0">Quần &amp; Chân Váy</h3>
        <div class="subcat-nav-wrap small text-muted mt-1">
          <span class="subcat-link active" onclick="filterSectionSubcategory('gridHomeQuan', 'all', this)">Tất cả</span>
          <span class="subcat-sep">•</span>
          <span class="subcat-link" onclick="filterSectionSubcategory('gridHomeQuan', 'quan-dai', this)">Quần dài &amp; Tây</span>
          <span class="subcat-sep">•</span>
          <span class="subcat-link" onclick="filterSectionSubcategory('gridHomeQuan', 'quan-short', this)">Quần Short</span>
          <span class="subcat-sep">•</span>
          <span class="subcat-link" onclick="filterSectionSubcategory('gridHomeQuan', 'chan-vay', this)">Chân Váy Midi</span>
        </div>
      </div>
      <a href="new-arrivals.html" class="btn btn-link text-dark text-decoration-none p-0 fw-semibold">Xem thêm quần <i class="bi bi-chevron-right"></i></a>
    </div>
    <div class="row g-4" id="gridHomeQuan">
      <!-- Populated by script.js -->
    </div>
  </section>

  <!-- SECTION 4: FLASH SALE BANNER & MINI GRID -->
  <section class="container py-4">
    <div class="card border-0 rounded-4 overflow-hidden bg-danger text-white p-4 shadow-lg mb-4">
      <div class="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3">
        <div class="d-flex align-items-center gap-3">
          <div class="bg-white text-danger rounded-circle p-3 d-flex align-items-center justify-content-center shadow" style="width: 54px; height: 54px;">
            <i class="bi bi-lightning-charge-fill fs-3"></i>
          </div>
          <div>
            <h4 class="fw-bold m-0 font-serif">FLASH SALE GIỜ VÀNG ⚡</h4>
            <p class="small text-white-50 m-0">Giảm giá sốc tới 60% — Giới hạn 2 món mỗi khách hàng</p>
          </div>
        </div>
        <!-- Live Countdown Timer -->
        <div class="d-flex align-items-center gap-2">
          <span class="small fw-semibold text-white-50 me-2">Kết thúc sau:</span>
          <div class="countdown-box bg-dark text-white px-3 py-2 rounded-3 text-center fw-bold fs-5 timer-hours">08</div>
          <span class="fs-5 fw-bold">:</span>
          <div class="countdown-box bg-dark text-white px-3 py-2 rounded-3 text-center fw-bold fs-5 timer-minutes">45</div>
          <span class="fs-5 fw-bold">:</span>
          <div class="countdown-box bg-dark text-white px-3 py-2 rounded-3 text-center fw-bold fs-5 timer-seconds">20</div>
        </div>
      </div>
    </div>
    <div class="row g-4" id="gridHomeFlash">
      <!-- Populated by script.js -->
    </div>
    <div class="text-center mt-4">
      <a href="flash-sale.html" class="btn btn-danger btn-lg rounded-pill px-5 fw-bold shadow">
        ⚡ Khám phá toàn bộ Flash Sale (Giảm tới 60%)
      </a>
    </div>
  </section>

  <!-- SECTION 5: PHỤ KIỆN -->
  <section class="container py-4">
    <div class="d-flex justify-content-between align-items-end mb-4 border-bottom pb-3">
      <div>
        <span class="text-uppercase small fw-bold text-muted letter-spacing-1">Phụ kiện biểu tượng</span>
        <h3 class="fw-bold font-serif m-0">Túi Xách, Trang Sức & Kính</h3>
      </div>
      <a href="accessories.html" class="btn btn-link text-dark text-decoration-none p-0 fw-semibold">Xem toàn bộ phụ kiện <i class="bi bi-chevron-right"></i></a>
    </div>
    <div class="row g-4" id="gridHomeAcc">
      <!-- Populated by script.js -->
    </div>
  </section>

    <!-- LOOKBOOK SECTION (VELORA FASHION LOOKBOOK WITH INTERACTIVE EFFECTS) -->
  <section class="container py-5" id="homeLookbook">
    <div class="text-center mb-5">
      <span class="section-subtitle-tag text-danger">Cảm hứng phong cách</span>
      <h2 class="fw-bold font-serif display-6 mb-2">Velora Fashion Lookbook</h2>
      <p class="text-muted small mx-auto" style="max-width: 580px;">
        Khám phá những bản phối đỉnh cao tôn vinh thần thái tự tin của giới mộ điệu. Chạm vào từng bức ảnh để khám phá chi tiết outfit và trải nghiệm mua sắm đồng bộ.
      </p>
    </div>
    
    <div class="row g-4">
      <!-- Lookbook 1: Phố Thị Rực Rỡ -->
      <div class="col-lg-3 col-md-6 col-12">
        <div class="lookbook-card h-100" onclick="openLookbookModal('lb-home-1')">
          <div class="lookbook-media" style="height: 440px;">
            <img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&auto=format&fit=crop&q=85" class="lookbook-img" alt="Phố Thị Rực Rỡ">
            <div class="lookbook-shine"></div>
            
            <!-- Hotspot Pin -->
            <div class="lookbook-hotspot" style="top: 42%; left: 50%;">
              <div class="hotspot-dot">
                <div class="hotspot-ring"></div>
              </div>
              <div class="hotspot-tooltip">
                <i class="bi bi-tag-fill text-warning me-1"></i> Set Áo Nỉ & Quần Jogger • 649.000đ
              </div>
            </div>

            <!-- Glassmorphic Caption -->
            <div class="lookbook-caption">
              <span class="lookbook-tag">#STREET_CHIC</span>
              <h5 class="lookbook-title">Phố Thị Rực Rỡ</h5>
              <p class="lookbook-desc">Năng động, cá tính và bắt trọn mọi ánh nhìn.</p>
              <div class="lookbook-action">
                <span class="lookbook-price-badge">1.248.000đ / set</span>
                <button type="button" class="lookbook-btn-explore">
                  Xem set đồ <i class="bi bi-arrow-up-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Lookbook 2: Lãng Tử Cổ Điển -->
      <div class="col-lg-3 col-md-6 col-12">
        <div class="lookbook-card h-100" onclick="openLookbookModal('lb-home-2')">
          <div class="lookbook-media" style="height: 440px;">
            <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&auto=format&fit=crop&q=85" class="lookbook-img" alt="Lãng Tử Cổ Điển">
            <div class="lookbook-shine"></div>

            <!-- Hotspot Pin -->
            <div class="lookbook-hotspot" style="top: 46%; left: 52%;">
              <div class="hotspot-dot">
                <div class="hotspot-ring"></div>
              </div>
              <div class="hotspot-tooltip">
                <i class="bi bi-tag-fill text-warning me-1"></i> Áo Phông Basic • 219.000đ
              </div>
            </div>

            <!-- Glassmorphic Caption -->
            <div class="lookbook-caption">
              <span class="lookbook-tag">#VINTAGE_MOOD</span>
              <h5 class="lookbook-title">Lãng Tử Cổ Điển</h5>
              <p class="lookbook-desc">Vẻ lãng mạn phong trần kết hợp mũ fedora.</p>
              <div class="lookbook-action">
                <span class="lookbook-price-badge">898.000đ / set</span>
                <button type="button" class="lookbook-btn-explore">
                  Xem set đồ <i class="bi bi-arrow-up-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Lookbook 3: Nghệ Thuật Đương Đại -->
      <div class="col-lg-3 col-md-6 col-12">
        <div class="lookbook-card h-100" onclick="openLookbookModal('lb-home-3')">
          <div class="lookbook-media" style="height: 440px;">
            <img src="https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&auto=format&fit=crop&q=85" class="lookbook-img" alt="Nghệ Thuật Đương Đại">
            <div class="lookbook-shine"></div>

            <!-- Hotspot Pin -->
            <div class="lookbook-hotspot" style="top: 38%; left: 54%;">
              <div class="hotspot-dot">
                <div class="hotspot-ring"></div>
              </div>
              <div class="hotspot-tooltip">
                <i class="bi bi-tag-fill text-warning me-1"></i> Đầm Xòe Nghệ Thuật • 990.000đ
              </div>
            </div>

            <!-- Glassmorphic Caption -->
            <div class="lookbook-caption">
              <span class="lookbook-tag">#CONTEMPORARY_ART</span>
              <h5 class="lookbook-title">Nghệ Thuật Đương Đại</h5>
              <p class="lookbook-desc">Họa tiết monochrome tương phản táo bạo.</p>
              <div class="lookbook-action">
                <span class="lookbook-price-badge">1.789.000đ / set</span>
                <button type="button" class="lookbook-btn-explore">
                  Xem set đồ <i class="bi bi-arrow-up-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Lookbook 4: Quý Ông Lịch Lãm -->
      <div class="col-lg-3 col-md-6 col-12">
        <div class="lookbook-card h-100" onclick="openLookbookModal('lb-home-4')">
          <div class="lookbook-media" style="height: 440px;">
            <img src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&auto=format&fit=crop&q=85" class="lookbook-img" alt="Quý Ông Lịch Lãm">
            <div class="lookbook-shine"></div>

            <!-- Hotspot Pin -->
            <div class="lookbook-hotspot" style="top: 35%; left: 48%;">
              <div class="hotspot-dot">
                <div class="hotspot-ring"></div>
              </div>
              <div class="hotspot-tooltip">
                <i class="bi bi-tag-fill text-warning me-1"></i> Áo Blazer Classic • 689.000đ
              </div>
            </div>

            <!-- Glassmorphic Caption -->
            <div class="lookbook-caption">
              <span class="lookbook-tag">#GENTLEMAN_BESPOKE</span>
              <h5 class="lookbook-title">Quý Ông Lịch Lãm</h5>
              <p class="lookbook-desc">Bộ suit may đo cao cấp chuẩn quý tộc hoàng gia.</p>
              <div class="lookbook-action">
                <span class="lookbook-price-badge">1.990.000đ / set</span>
                <button type="button" class="lookbook-btn-explore">
                  Xem set đồ <i class="bi bi-arrow-up-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
"""
    content += get_footer_and_modals()
    with open(os.path.join(BASE_DIR, "index.html"), "w", encoding="utf-8") as f:
        f.write(content)
    print("Generated index.html")

# ==============================================================================
# 2. GENERATE new-arrivals.html (Hàng new / Hàng mới về)
# ==============================================================================
def make_new_arrivals_html():
    content = get_head("Hàng Mới Về — New Arrivals 2026")
    content += '<body data-page="new-arrivals">\n'
    content += get_header("new-arrivals")
    content += """
  <!-- BREADCRUMB -->
  <div class="container pt-3">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb small text-muted">
        <li class="breadcrumb-item"><a href="index.html" class="text-muted text-decoration-none">Trang chủ</a></li>
        <li class="breadcrumb-item active text-dark fw-semibold" aria-current="page">Hàng mới về (New Arrivals)</li>
      </ol>
    </nav>
  </div>

  <!-- HERO CAROUSEL: NEW ARRIVALS (3 SLIDES KEN BURNS ZOOM) -->
  <section class="container py-2">
    <div id="arrivalsHeroCarousel" class="carousel slide carousel-fade hero-slider-wrap" data-bs-ride="carousel" data-bs-interval="4500">
      <div class="hero-carousel-indicators">
        <button type="button" class="hero-indicator-btn active" data-bs-target="#arrivalsHeroCarousel" data-bs-slide-to="0" aria-label="Slide 1"></button>
        <button type="button" class="hero-indicator-btn" data-bs-target="#arrivalsHeroCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" class="hero-indicator-btn" data-bs-target="#arrivalsHeroCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>

      <div class="carousel-inner">
        <!-- Slide 1 -->
        <div class="carousel-item active hero-slide-item">
          <img src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1600&auto=format&fit=crop&q=80" class="hero-slide-bg" alt="New Arrivals 2026">
          <div class="hero-slide-overlay overlay-dark"></div>
          <div class="container position-relative">
            <div class="d-flex flex-column flex-md-row justify-content-between align-items-md-center hero-slide-content text-white" style="max-width: 100%;">
              <div style="max-width: 620px;">
                <span class="badge bg-secondary bg-opacity-50 text-white mb-2 px-3 py-2 rounded-pill small">BỘ SƯU TẬP 2026</span>
                <h1 class="hero-title" style="font-size: 2.8rem;">HÀNG MỚI VỀ — NEW ARRIVALS</h1>
                <p class="hero-desc">Khám phá hơn 128+ mẫu thiết kế thời trang xu hướng mới nhất vừa cập bến tuần này.</p>
              </div>
              <div class="arrivals-stat-box d-none d-md-block text-center p-3 rounded-4 bg-white bg-opacity-10 border border-light border-opacity-25">
                <div class="display-6 fw-bold text-warning arrivals-stat-num">128+</div>
                <div class="small text-white-50">Mẫu thiết kế mới</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Slide 2 -->
        <div class="carousel-item hero-slide-item">
          <img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1600&auto=format&fit=crop&q=80" class="hero-slide-bg" alt="Limited Edition">
          <div class="hero-slide-overlay overlay-dark"></div>
          <div class="container position-relative">
            <div class="d-flex flex-column flex-md-row justify-content-between align-items-md-center hero-slide-content text-white" style="max-width: 100%;">
              <div style="max-width: 620px;">
                <span class="badge bg-danger mb-2 px-3 py-2 rounded-pill small">LIMITED DROP</span>
                <h1 class="hero-title" style="font-size: 2.8rem;">PHIÊN BẢN GIỚI HẠN</h1>
                <p class="hero-desc">Thiết kế độc quyền, chất dạ tweed & lụa tơ tằm thượng hạng tôn vinh vẻ đẹp kiêu sa.</p>
              </div>
              <div class="arrivals-stat-box d-none d-md-block text-center p-3 rounded-4 bg-white bg-opacity-10 border border-light border-opacity-25">
                <div class="display-6 fw-bold text-danger arrivals-stat-num">50</div>
                <div class="small text-white-50">Bản giới hạn</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Slide 3 -->
        <div class="carousel-item hero-slide-item">
          <img src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1600&auto=format&fit=crop&q=80" class="hero-slide-bg" alt="Contemporary Style">
          <div class="hero-slide-overlay overlay-dark"></div>
          <div class="container position-relative">
            <div class="d-flex flex-column flex-md-row justify-content-between align-items-md-center hero-slide-content text-white" style="max-width: 100%;">
              <div style="max-width: 620px;">
                <span class="badge bg-warning text-dark mb-2 px-3 py-2 rounded-pill small">MINIMALIST SUIT</span>
                <h1 class="hero-title" style="font-size: 2.8rem;">XU HƯỚNG TỐI GIẢN</h1>
                <p class="hero-desc">Blazer form rộng, quần ống suông tôn vinh phong thái đĩnh đạc của quý ông hiện đại.</p>
              </div>
              <div class="arrivals-stat-box d-none d-md-block text-center p-3 rounded-4 bg-white bg-opacity-10 border border-light border-opacity-25">
                <div class="display-6 fw-bold text-success arrivals-stat-num">99%</div>
                <div class="small text-white-50">Hài lòng đánh giá</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Controls -->
      <button class="carousel-control-prev" type="button" data-bs-target="#arrivalsHeroCarousel" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Trước</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#arrivalsHeroCarousel" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Sau</span>
      </button>
    </div>
  </section>

  <!-- FILTER & SORT TOOLBAR -->
  <section class="container py-4">
    <div class="mb-3">
      <h4 class="fw-bold font-serif text-dark m-0">Sản Phẩm Mới Ra Mắt</h4>
      <div class="subcat-nav-wrap small text-muted mt-1">
        <span class="subcat-link active" onclick="filterSectionSubcategory('gridNewArrivals', 'all', this)">Tất cả hàng mới</span>
        <span class="subcat-sep">•</span>
        <span class="subcat-link" onclick="filterSectionSubcategory('gridNewArrivals', 'ao', this)">Áo &amp; Blazer</span>
        <span class="subcat-sep">•</span>
        <span class="subcat-link" onclick="filterSectionSubcategory('gridNewArrivals', 'dam-vay', this)">Váy đầm nữ</span>
        <span class="subcat-sep">•</span>
        <span class="subcat-link" onclick="filterSectionSubcategory('gridNewArrivals', 'quan', this)">Quần nam nữ</span>
        <span class="subcat-sep">•</span>
        <span class="subcat-link" onclick="filterSectionSubcategory('gridNewArrivals', 'accessories', this)">Phụ kiện mới</span>
      </div>
    </div>
    <div class="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3 border-bottom pb-3">
      <!-- Filter Pills -->
      <div class="filter-pills-wrap d-flex flex-wrap gap-2">
        <button class="btn btn-dark rounded-pill px-3 py-2 small filter-pill active" onclick="filterProducts('new-arrivals', 'all', this)">
          Tất cả (128)
        </button>
        <button class="btn btn-outline-secondary rounded-pill px-3 py-2 small filter-pill" onclick="filterProducts('new-arrivals', 'ao', this)">
          Áo mới về (48)
        </button>
        <button class="btn btn-outline-secondary rounded-pill px-3 py-2 small filter-pill" onclick="filterProducts('new-arrivals', 'quan', this)">
          Quần mới về (32)
        </button>
        <button class="btn btn-outline-secondary rounded-pill px-3 py-2 small filter-pill" onclick="filterProducts('new-arrivals', 'dam-vay', this)">
          Váy đầm nữ (28)
        </button>
        <button class="btn btn-outline-secondary rounded-pill px-3 py-2 small filter-pill" onclick="filterProducts('new-arrivals', 'phu-kien', this)">
          Phụ kiện hot (20)
        </button>
      </div>

      <!-- Sort & Filter Dropdown -->
      <div class="d-flex align-items-center gap-2">
        <span class="small text-muted text-nowrap"><i class="bi bi-funnel me-1"></i> Sắp xếp:</span>
        <select class="sort-select-velora" onchange="sortProducts('new-arrivals', this.value, 'gridNewArrivals')">
          <option value="newest">Mới nhất</option>
          <option value="bestseller">Bán chạy nhất</option>
          <option value="price-asc">Giá tăng dần</option>
          <option value="price-desc">Giá giảm dần</option>
          <option value="rating">Đánh giá cao nhất</option>
        </select>
      </div>
    </div>
  </section>

  <!-- PRODUCT GRID: NEW ARRIVALS -->
  <section class="container py-2">
    <div class="row g-4" id="gridNewArrivals">
      <!-- Populated by script.js -->
    </div>
  </section>

  <!-- DYNAMIC PAGINATION -->
  <div class="container" id="pagination-gridNewArrivals"></div>
"""
    content += get_footer_and_modals()
    with open(os.path.join(BASE_DIR, "new-arrivals.html"), "w", encoding="utf-8") as f:
        f.write(content)
    print("Generated new-arrivals.html")

# ==============================================================================
# 3. GENERATE women.html (Thời trang Nữ)
# ==============================================================================
def make_women_html():
    content = get_head("Thời Trang Nữ — Thanh Lịch, Tự Tin & Quý Phái")
    content += '<body data-page="women">\n'
    content += get_header("women")
    content += """
  <!-- BREADCRUMB -->
  <div class="container pt-3">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb small text-muted">
        <li class="breadcrumb-item"><a href="index.html" class="text-muted text-decoration-none">Trang chủ</a></li>
        <li class="breadcrumb-item active text-danger fw-semibold" aria-current="page">Thời trang Nữ</li>
      </ol>
    </nav>
  </div>

    <!-- ===================================================================
       HERO SHOWCASE: THỜI TRANG PHỤ NỮ (FIGMA EDITORIAL LAYOUT)
       =================================================================== -->
  <section class="container py-3">
    <div id="womenHeroCarousel" class="carousel slide carousel-fade women-hero-wrap shadow-sm" data-bs-ride="carousel" data-bs-interval="5000">
      
      <!-- Slide Indicators -->
      <div class="hero-carousel-indicators">
        <button type="button" class="hero-indicator-btn indicator-dark active" data-bs-target="#womenHeroCarousel" data-bs-slide-to="0" aria-label="Slide 1"></button>
        <button type="button" class="hero-indicator-btn indicator-dark" data-bs-target="#womenHeroCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" class="hero-indicator-btn indicator-dark" data-bs-target="#womenHeroCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>

      <div class="carousel-inner">
        <!-- Slide 1: Debut Editorial - Thời Trang Phụ Nữ -->
        <div class="carousel-item active">
          <div class="women-hero-card">
            <div class="row align-items-center g-4">
              <!-- Left Column: Typography & CTAs -->
              <div class="col-lg-6">
                <div class="women-hero-text pe-lg-4">
                  <div class="d-inline-flex align-items-center gap-2 mb-3">
                    <span class="badge bg-danger bg-opacity-10 text-danger border border-danger-subtle px-3 py-1.5 rounded-pill fw-bold text-uppercase letter-spacing-1" style="font-size: 0.72rem;">
                      WOMEN 2026
                    </span>
                    <span class="small text-muted">• Bộ sưu tập cao cấp</span>
                  </div>

                  <h1 class="women-hero-title font-serif">
                    Thời Trang <br>
                    <span class="women-hero-script text-danger">Phụ Nữ</span>
                  </h1>

                  <p class="women-hero-desc text-muted mb-4">
                    Thanh lịch • Nữ tính • Tự tin tỏa sáng. Không gian mua sắm thời trang cao cấp với những thiết kế may đo chuẩn mực, tôn vinh vóc dáng và khí chất của mọi quý cô.
                  </p>

                  <div class="d-flex align-items-center gap-3 mb-4">
                    <a href="#womenProducts" class="btn btn-danger btn-lg rounded-pill px-4 fw-bold shadow-sm d-inline-flex align-items-center gap-2">
                      Khám phá ngay <i class="bi bi-arrow-right"></i>
                    </a>
                    <a href="#womenLookbook" class="btn btn-outline-danger btn-lg rounded-pill px-4 fw-semibold">
                      Xem Lookbook
                    </a>
                  </div>

                  <!-- Stats Row -->
                  <div class="d-flex align-items-center gap-4 pt-3 border-top border-danger border-opacity-20">
                    <div>
                      <div class="fs-4 fw-bold text-dark font-serif">240+</div>
                      <div class="small text-muted">Mẫu thiết kế mới</div>
                    </div>
                    <div class="vr opacity-25"></div>
                    <div>
                      <div class="fs-4 fw-bold text-dark font-serif">10</div>
                      <div class="small text-muted">Bộ sưu tập</div>
                    </div>
                    <div class="vr opacity-25"></div>
                    <div>
                      <div class="fs-4 fw-bold text-dark font-serif">98%</div>
                      <div class="small text-muted">Khách hàng hài lòng</div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Right Column: Dual Floating Showcase Cards (Figma Authentic) -->
              <div class="col-lg-6">
                <div class="row g-3 justify-content-center">
                  <!-- Showcase Card 1 (Pastel Pink) -->
                  <div class="col-6">
                    <div class="women-showcase-box showcase-pink">
                      <div class="women-showcase-img-wrap">
                        <img src="https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=600&auto=format&fit=crop&q=80" alt="Đầm Xòe Floral" class="women-showcase-img">
                        <span class="showcase-badge-hot">Bán chạy #1</span>
                      </div>
                      <div class="women-showcase-meta">
                        <h6 class="showcase-name text-truncate">Đầm Xòe Floral Dáng Midi</h6>
                        <div class="d-flex align-items-center justify-content-between">
                          <span class="showcase-price text-danger fw-bold">549.000đ</span>
                          <button class="btn btn-sm btn-dark rounded-circle p-1" style="width:28px; height:28px;" onclick="addToCart('w1')" title="Thêm vào giỏ">
                            <i class="bi bi-bag-plus" style="font-size:0.75rem;"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- Showcase Card 2 (Pastel Lavender) -->
                  <div class="col-6">
                    <div class="women-showcase-box showcase-lavender">
                      <div class="women-showcase-img-wrap">
                        <img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&auto=format&fit=crop&q=80" alt="Áo Sơ Mi Lụa Cổ V" class="women-showcase-img">
                        <span class="showcase-badge-new">Mới về</span>
                      </div>
                      <div class="women-showcase-meta">
                        <h6 class="showcase-name text-truncate">Áo Sơ Mi Lụa Cổ V Phồng</h6>
                        <div class="d-flex align-items-center justify-content-between">
                          <span class="showcase-price text-danger fw-bold">329.000đ</span>
                          <button class="btn btn-sm btn-dark rounded-circle p-1" style="width:28px; height:28px;" onclick="addToCart('w3')" title="Thêm vào giỏ">
                            <i class="bi bi-bag-plus" style="font-size:0.75rem;"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Slide 2: Urban Romance - Nàng Thơ Nơi Phố Thị -->
        <div class="carousel-item">
          <div class="women-hero-card">
            <div class="row align-items-center g-4">
              <div class="col-lg-6">
                <div class="women-hero-text pe-lg-4">
                  <div class="d-inline-flex align-items-center gap-2 mb-3">
                    <span class="badge bg-warning text-dark border border-warning-subtle px-3 py-1.5 rounded-pill fw-bold text-uppercase letter-spacing-1" style="font-size: 0.72rem;">
                      AUTUMN BLOOM 2026
                    </span>
                    <span class="small text-muted">• Phong cách thu đông</span>
                  </div>
                  <h1 class="women-hero-title font-serif">
                    Nàng Thơ <br>
                    <span class="women-hero-script text-danger">Nơi Phố Thị</span>
                  </h1>
                  <p class="women-hero-desc text-muted mb-4">
                    Giai điệu lãng mạn nơi góc phố thu. Chất liệu dạ tweed dệt tay kết hợp sắc pastel ngọt ngào mang lại diện mạo kiêu kỳ, tươi mới cho mọi buổi hẹn hò.
                  </p>
                  <div class="d-flex align-items-center gap-3 mb-4">
                    <a href="#womenProducts" class="btn btn-danger btn-lg rounded-pill px-4 fw-bold shadow-sm d-inline-flex align-items-center gap-2">
                      Mua ngay <i class="bi bi-arrow-right"></i>
                    </a>
                    <a href="#womenLookbook" class="btn btn-outline-danger btn-lg rounded-pill px-4 fw-semibold">
                      Xem Lookbook
                    </a>
                  </div>
                  <div class="d-flex align-items-center gap-4 pt-3 border-top border-danger border-opacity-20">
                    <div>
                      <div class="fs-4 fw-bold text-dark font-serif">85+</div>
                      <div class="small text-muted">Mẫu đầm tweed</div>
                    </div>
                    <div class="vr opacity-25"></div>
                    <div>
                      <div class="fs-4 fw-bold text-dark font-serif">Giảm 20%</div>
                      <div class="small text-muted">Tuần lễ ra mắt</div>
                    </div>
                    <div class="vr opacity-25"></div>
                    <div>
                      <div class="fs-4 fw-bold text-dark font-serif">Freeship</div>
                      <div class="small text-muted">Toàn quốc từ 500k</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="row g-3 justify-content-center">
                  <div class="col-6">
                    <div class="women-showcase-box showcase-pink">
                      <div class="women-showcase-img-wrap">
                        <img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&auto=format&fit=crop&q=80" alt="Set Váy Dạ Tweed" class="women-showcase-img">
                        <span class="showcase-badge-hot">Tweed Trend</span>
                      </div>
                      <div class="women-showcase-meta">
                        <h6 class="showcase-name text-truncate">Set Váy Dạ Tweed Tiểu Thư</h6>
                        <div class="d-flex align-items-center justify-content-between">
                          <span class="showcase-price text-danger fw-bold">799.000đ</span>
                          <button class="btn btn-sm btn-dark rounded-circle p-1" style="width:28px; height:28px;" onclick="addToCart('w2')" title="Thêm vào giỏ">
                            <i class="bi bi-bag-plus" style="font-size:0.75rem;"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="women-showcase-box showcase-lavender">
                      <div class="women-showcase-img-wrap">
                        <img src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=600&auto=format&fit=crop&q=80" alt="Áo Blazer Form Rộng" class="women-showcase-img">
                        <span class="showcase-badge-new">Xu hướng</span>
                      </div>
                      <div class="women-showcase-meta">
                        <h6 class="showcase-name text-truncate">Áo Blazer Nữ Form Rộng</h6>
                        <div class="d-flex align-items-center justify-content-between">
                          <span class="showcase-price text-danger fw-bold">858.000đ</span>
                          <button class="btn btn-sm btn-dark rounded-circle p-1" style="width:28px; height:28px;" onclick="addToCart('w4')" title="Thêm vào giỏ">
                            <i class="bi bi-bag-plus" style="font-size:0.75rem;"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Slide 3: Office Chic - Quý Cô Công Sở -->
        <div class="carousel-item">
          <div class="women-hero-card">
            <div class="row align-items-center g-4">
              <div class="col-lg-6">
                <div class="women-hero-text pe-lg-4">
                  <div class="d-inline-flex align-items-center gap-2 mb-3">
                    <span class="badge bg-dark text-white px-3 py-1.5 rounded-pill fw-bold text-uppercase letter-spacing-1" style="font-size: 0.72rem;">
                      OFFICE CHIC 2026
                    </span>
                    <span class="small text-muted">• Phong thái lãnh đạo</span>
                  </div>
                  <h1 class="women-hero-title font-serif">
                    Quý Cô <br>
                    <span class="women-hero-script text-danger">Công Sở</span>
                  </h1>
                  <p class="women-hero-desc text-muted mb-4">
                    Sự kết hợp hoàn hảo giữa phom dáng sắc bén và chất liệu lụa satin thượng hạng. Tự tin khẳng định vị thế và sức hút chuyên nghiệp trong mọi cuộc gặp đối tác.
                  </p>
                  <div class="d-flex align-items-center gap-3 mb-4">
                    <a href="#womenProducts" class="btn btn-danger btn-lg rounded-pill px-4 fw-bold shadow-sm d-inline-flex align-items-center gap-2">
                      Mua ngay <i class="bi bi-arrow-right"></i>
                    </a>
                    <a href="#womenLookbook" class="btn btn-outline-danger btn-lg rounded-pill px-4 fw-semibold">
                      Xem Lookbook
                    </a>
                  </div>
                  <div class="d-flex align-items-center gap-4 pt-3 border-top border-danger border-opacity-20">
                    <div>
                      <div class="fs-4 fw-bold text-dark font-serif">120+</div>
                      <div class="small text-muted">Thiết kế công sở</div>
                    </div>
                    <div class="vr opacity-25"></div>
                    <div>
                      <div class="fs-4 fw-bold text-dark font-serif">Chuẩn Form</div>
                      <div class="small text-muted">May đo tỉ mỉ</div>
                    </div>
                    <div class="vr opacity-25"></div>
                    <div>
                      <div class="fs-4 fw-bold text-dark font-serif">Đổi trả 15N</div>
                      <div class="small text-muted">Tận nơi miễn phí</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="row g-3 justify-content-center">
                  <div class="col-6">
                    <div class="women-showcase-box showcase-pink">
                      <div class="women-showcase-img-wrap">
                        <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=80" alt="Đầm Cocktail Silk" class="women-showcase-img">
                        <span class="showcase-badge-hot">Cao cấp</span>
                      </div>
                      <div class="women-showcase-meta">
                        <h6 class="showcase-name text-truncate">Đầm Cocktail Silk Dạ Hội</h6>
                        <div class="d-flex align-items-center justify-content-between">
                          <span class="showcase-price text-danger fw-bold">1.290.000đ</span>
                          <button class="btn btn-sm btn-dark rounded-circle p-1" style="width:28px; height:28px;" onclick="addToCart('w5')" title="Thêm vào giỏ">
                            <i class="bi bi-bag-plus" style="font-size:0.75rem;"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="women-showcase-box showcase-lavender">
                      <div class="women-showcase-img-wrap">
                        <img src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=600&auto=format&fit=crop&q=80" alt="Quần Tây Xếp Ly" class="women-showcase-img">
                        <span class="showcase-badge-new">Bestseller</span>
                      </div>
                      <div class="women-showcase-meta">
                        <h6 class="showcase-name text-truncate">Quần Tây Xếp Ly Suông</h6>
                        <div class="d-flex align-items-center justify-content-between">
                          <span class="showcase-price text-danger fw-bold">459.000đ</span>
                          <button class="btn btn-sm btn-dark rounded-circle p-1" style="width:28px; height:28px;" onclick="addToCart('w6')" title="Thêm vào giỏ">
                            <i class="bi bi-bag-plus" style="font-size:0.75rem;"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Carousel Navigation Controls -->
      <button class="carousel-control-prev" type="button" data-bs-target="#womenHeroCarousel" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Trước</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#womenHeroCarousel" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Sau</span>
      </button>
    </div>
  </section>

  <!-- 7 CIRCULAR PASTEL CATEGORY PILLS -->
  <section class="container py-4">
    <div class="d-flex justify-content-between align-items-center mb-3">
      <h5 class="fw-bold font-serif m-0">Danh mục</h5>
      <a href="javascript:void(0)" class="text-danger small fw-bold text-decoration-none">Xem tất cả ></a>
    </div>
    <div class="row row-cols-3 row-cols-sm-4 row-cols-md-7 g-3 text-center">
      <div class="col">
        <div class="card border-0 rounded-4 p-3 shadow-sm cursor-pointer hover-scale" style="background-color: #ffe4e6;" onclick="filterProducts('women', 'dam-vay')">
          <div class="fs-2 mb-1">👗</div>
          <div class="fw-bold small text-dark">Đầm & Váy</div>
          <div class="text-muted" style="font-size: 0.72rem;">48 mẫu</div>
        </div>
      </div>
      <div class="col">
        <div class="card border-0 rounded-4 p-3 shadow-sm cursor-pointer hover-scale" style="background-color: #ede9fe;" onclick="filterProducts('women', 'blouse')">
          <div class="fs-2 mb-1">👚</div>
          <div class="fw-bold small text-dark">Áo Blouse</div>
          <div class="text-muted" style="font-size: 0.72rem;">32 mẫu</div>
        </div>
      </div>
      <div class="col">
        <div class="card border-0 rounded-4 p-3 shadow-sm cursor-pointer hover-scale" style="background-color: #d1fae5;" onclick="filterProducts('women', 'cong-so')">
          <div class="fs-2 mb-1">💼</div>
          <div class="fw-bold small text-dark">Đồ Công Sở</div>
          <div class="text-muted" style="font-size: 0.72rem;">28 mẫu</div>
        </div>
      </div>
      <div class="col">
        <div class="card border-0 rounded-4 p-3 shadow-sm cursor-pointer hover-scale" style="background-color: #fef3c7;" onclick="filterProducts('women', 'ao')">
          <div class="fs-2 mb-1">🧥</div>
          <div class="fw-bold small text-dark">Áo Khoác</div>
          <div class="text-muted" style="font-size: 0.72rem;">22 mẫu</div>
        </div>
      </div>
      <div class="col">
        <div class="card border-0 rounded-4 p-3 shadow-sm cursor-pointer hover-scale" style="background-color: #ffe4e6;" onclick="filterProducts('women', 'chan-vay')">
          <div class="fs-2 mb-1">💃</div>
          <div class="fw-bold small text-dark">Chân Váy</div>
          <div class="text-muted" style="font-size: 0.72rem;">20 mẫu</div>
        </div>
      </div>
      <div class="col">
        <div class="card border-0 rounded-4 p-3 shadow-sm cursor-pointer hover-scale" style="background-color: #e0f2fe;" onclick="filterProducts('women', 'the-thao')">
          <div class="fs-2 mb-1">🏃‍♀️</div>
          <div class="fw-bold small text-dark">Đồ Thể Thao</div>
          <div class="text-muted" style="font-size: 0.72rem;">21 mẫu</div>
        </div>
      </div>
      <div class="col">
        <div class="card border-0 rounded-4 p-3 shadow-sm cursor-pointer hover-scale" style="background-color: #f3f4f6;" onclick="location.href='accessories.html'">
          <div class="fs-2 mb-1">👜</div>
          <div class="fw-bold small text-dark">Phụ Kiện Nữ</div>
          <div class="text-muted" style="font-size: 0.72rem;">17 mẫu</div>
        </div>
      </div>
    </div>
  </section>

  <!-- FILTER & SORT TOOLBAR -->
  <section class="container py-3" id="womenProducts">
    <div class="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3 border-bottom pb-3">
      <div class="filter-pills-wrap d-flex flex-wrap gap-2">
        <button class="btn btn-danger rounded-pill px-3 py-2 small filter-pill active" onclick="filterProducts('women', 'all', this)">
          Tất cả (128)
        </button>
        <button class="btn btn-outline-secondary rounded-pill px-3 py-2 small filter-pill" onclick="filterProducts('women', 'dam-vay', this)">
          Đầm & Váy (48)
        </button>
        <button class="btn btn-outline-secondary rounded-pill px-3 py-2 small filter-pill" onclick="filterProducts('women', 'blouse', this)">
          Áo Blouse (32)
        </button>
        <button class="btn btn-outline-secondary rounded-pill px-3 py-2 small filter-pill" onclick="filterProducts('women', 'cong-so', this)">
          Đồ công sở (28)
        </button>
        <button class="btn btn-outline-secondary rounded-pill px-3 py-2 small filter-pill" onclick="filterProducts('women', 'chan-vay', this)">
          Chân váy (24)
        </button>
        <button class="btn btn-outline-secondary rounded-pill px-3 py-2 small filter-pill" onclick="filterProducts('women', 'ao', this)">
          Áo khoác (18)
        </button>
      </div>

      <div class="d-flex align-items-center gap-2">
        <span class="small text-muted text-nowrap"><i class="bi bi-funnel me-1"></i> Sắp xếp:</span>
        <select class="sort-select-velora" onchange="sortProducts('women', this.value, 'gridWomen')">
          <option value="newest">Mới nhất</option>
          <option value="bestseller">Bán chạy nhất</option>
          <option value="price-asc">Giá tăng dần</option>
          <option value="price-desc">Giá giảm dần</option>
          <option value="rating">Đánh giá cao</option>
        </select>
      </div>
    </div>
  </section>

  <!-- WOMEN PRODUCT GRID -->
  <section class="container py-2">
    <div class="row g-4" id="gridWomen">
      <!-- Populated by script.js -->
    </div>
  </section>

  <!-- DYNAMIC PAGINATION -->
  <div class="container" id="pagination-gridWomen"></div>

  <!-- WOMEN NEWSLETTER -->
  <section class="container py-3">
    <div class="card border-0 rounded-4 p-4 text-center text-md-start" style="background-color: #fdf2f8;">
      <div class="d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
        <div>
          <h5 class="fw-bold text-danger m-0 font-serif">Nhận ưu đãi dành riêng cho hội chị em ✨</h5>
          <p class="text-muted small m-0">Đăng ký để nhận voucher 100k cho đơn hàng váy đầm đầu tiên của bạn.</p>
        </div>
        <form class="d-flex gap-2" onsubmit="event.preventDefault(); showToast('Chúc mừng bạn nhận được voucher 100K: VELORAWOMEN!'); this.reset();">
          <input type="email" class="form-control rounded-pill px-3" placeholder="Nhập địa chỉ email..." required>
          <button class="btn btn-danger rounded-pill px-4 fw-bold text-nowrap" type="submit">Đăng ký ngay</button>
        </form>
      </div>
    </div>
  </section>

  <!-- WOMEN LOOKBOOK -->
  <section class="container py-5" id="womenLookbook">
    <div class="text-center mb-5">
      <span class="section-subtitle-tag text-danger">Bản phối phái đẹp</span>
      <h2 class="fw-bold font-serif display-6 mb-2">Lookbook Nữ — Phong Cách Thực Tế</h2>
      <p class="text-muted small mx-auto" style="max-width: 580px;">
        Cảm xúc thời trang trọn vẹn trong từng khoảnh khắc đời thường. Khám phá các công thức phối đồ thịnh hành được các quý cô thượng lưu săn đón nhất. Chạm vào bức ảnh để khám phá chi tiết set đồ.
      </p>
    </div>

    <div class="women-bento-grid">
      <!-- Col 1: Bento Tall Card - Dịu Dàng Nữ Tính -->
      <div>
        <div class="lookbook-card bento-card-tall" onclick="openLookbookModal('lb-women-1')">
          <div class="lookbook-media h-100">
            <img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&auto=format&fit=crop&q=85" class="lookbook-img" alt="Dịu Dàng Nữ Tính">
            <div class="lookbook-shine"></div>

            <div class="lookbook-hotspot" style="top: 40%; left: 50%;">
              <div class="hotspot-dot">
                <div class="hotspot-ring"></div>
              </div>
              <div class="hotspot-tooltip">
                <i class="bi bi-tag-fill text-danger me-1"></i> Set Váy Dạ Tweed • 799.000đ
              </div>
            </div>

            <div class="lookbook-caption">
              <span class="lookbook-tag text-danger-emphasis">#ELEGANT_LADY</span>
              <h5 class="lookbook-title">Dịu Dàng Nữ Tính</h5>
              <p class="lookbook-desc">Vẻ đẹp tiểu thư kiêu sa với sợi dạ dệt ánh kim.</p>
              <div class="lookbook-action">
                <span class="lookbook-price-badge">1.847.000đ / set</span>
                <button type="button" class="lookbook-btn-explore">
                  Xem chi tiết <i class="bi bi-arrow-up-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Col 2: Stacked Half Cards (Quý Cô Công Sở + Thanh Lịch Đô Thị) -->
      <div class="bento-col-stack">
        <!-- Top Half Card: Quý Cô Công Sở -->
        <div class="lookbook-card bento-card-half" onclick="openLookbookModal('lb-women-2')">
          <div class="lookbook-media h-100">
            <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&auto=format&fit=crop&q=85" class="lookbook-img" alt="Quý Cô Công Sở">
            <div class="lookbook-shine"></div>

            <div class="lookbook-hotspot" style="top: 45%; left: 52%;">
              <div class="hotspot-dot">
                <div class="hotspot-ring"></div>
              </div>
              <div class="hotspot-tooltip">
                <i class="bi bi-tag-fill text-danger me-1"></i> Sơ Mi Lụa Cổ V • 329.000đ
              </div>
            </div>

            <div class="lookbook-caption py-2">
              <span class="lookbook-tag text-danger-emphasis">#OFFICE_CHIC</span>
              <h6 class="lookbook-title m-0">Quý Cô Công Sở</h6>
              <div class="lookbook-action">
                <span class="lookbook-price-badge small">1.147.000đ / set</span>
                <button type="button" class="lookbook-btn-explore py-1 px-2.5 small">
                  Xem set <i class="bi bi-arrow-up-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Bottom Half Card: Thanh Lịch Đô Thị -->
        <div class="lookbook-card bento-card-half" onclick="openLookbookModal('lb-women-3')">
          <div class="lookbook-media h-100">
            <img src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=800&auto=format&fit=crop&q=85" class="lookbook-img" alt="Thanh Lịch Đô Thị">
            <div class="lookbook-shine"></div>

            <div class="lookbook-hotspot" style="top: 40%; left: 48%;">
              <div class="hotspot-dot">
                <div class="hotspot-ring"></div>
              </div>
              <div class="hotspot-tooltip">
                <i class="bi bi-tag-fill text-danger me-1"></i> Áo Blazer Form Rộng • 858.000đ
              </div>
            </div>

            <div class="lookbook-caption py-2">
              <span class="lookbook-tag text-danger-emphasis">#WEEKEND_MOOD</span>
              <h6 class="lookbook-title m-0">Thanh Lịch Đô Thị</h6>
              <div class="lookbook-action">
                <span class="lookbook-price-badge small">1.417.000đ / set</span>
                <button type="button" class="lookbook-btn-explore py-1 px-2.5 small">
                  Xem set <i class="bi bi-arrow-up-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Col 3: Bento Tall Card - Dạ Hội Quý Phái -->
      <div>
        <div class="lookbook-card bento-card-tall" onclick="openLookbookModal('lb-women-4')">
          <div class="lookbook-media h-100">
            <img src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=800&auto=format&fit=crop&q=85" class="lookbook-img" alt="Dạ Hội Quý Phái">
            <div class="lookbook-shine"></div>

            <div class="lookbook-hotspot" style="top: 42%; left: 52%;">
              <div class="hotspot-dot">
                <div class="hotspot-ring"></div>
              </div>
              <div class="hotspot-tooltip">
                <i class="bi bi-tag-fill text-danger me-1"></i> Đầm Cocktail Silk Dạ Hội • 1.290.000đ
              </div>
            </div>

            <div class="lookbook-caption">
              <span class="lookbook-tag text-danger-emphasis">#NIGHT_GLAMOUR</span>
              <h5 class="lookbook-title">Dạ Hội Quý Phái</h5>
              <p class="lookbook-desc">Lộng lẫy và kiêu hãnh với lụa satin thượng hạng.</p>
              <div class="lookbook-action">
                <span class="lookbook-price-badge">2.148.000đ / set</span>
                <button type="button" class="lookbook-btn-explore">
                  Xem chi tiết <i class="bi bi-arrow-up-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
"""
    content += get_footer_and_modals()
    with open(os.path.join(BASE_DIR, "women.html"), "w", encoding="utf-8") as f:
        f.write(content)
    print("Generated women.html")

# ==============================================================================
# 4. GENERATE men.html (Thời trang Nam)
# ==============================================================================
def make_men_html():
    content = get_head("Thời Trang Nam — Warm Tones For Cooler Days")
    content += '<body data-page="men">\n'
    content += get_header("men")
    content += """
  <!-- BREADCRUMB -->
  <div class="container pt-3">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb small text-muted">
        <li class="breadcrumb-item"><a href="index.html" class="text-muted text-decoration-none">Trang chủ</a></li>
        <li class="breadcrumb-item active text-dark fw-semibold" aria-current="page">Thời trang Nam</li>
      </ol>
    </nav>
  </div>

  <!-- HERO CAROUSEL: MEN FASHION (3 SLIDES WARM TONES KEN BURNS ZOOM) -->
  <section class="container py-2">
    <div id="menHeroCarousel" class="carousel slide carousel-fade hero-slider-wrap" data-bs-ride="carousel" data-bs-interval="4500" style="background-color: #eed8c5;">
      <div class="hero-carousel-indicators">
        <button type="button" class="hero-indicator-btn indicator-dark active" data-bs-target="#menHeroCarousel" data-bs-slide-to="0" aria-label="Slide 1"></button>
        <button type="button" class="hero-indicator-btn indicator-dark" data-bs-target="#menHeroCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" class="hero-indicator-btn indicator-dark" data-bs-target="#menHeroCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>

      <div class="carousel-inner">
        <!-- Slide 1 -->
        <div class="carousel-item active hero-slide-item">
          <img src="https://images.unsplash.com/photo-1516257984-b1b4d707412e?w=1600&auto=format&fit=crop&q=80" class="hero-slide-bg" alt="Feel The Breeze">
          <div class="hero-slide-overlay overlay-men"></div>
          <div class="container position-relative">
            <div class="hero-slide-content text-dark" style="max-width: 620px;">
              <span class="hero-tagline text-dark fw-bold">VELORA MEN</span>
              <h1 class="hero-title hero-title-dark font-serif" style="font-size: 3.4rem; color: #18181b;">
                FEEL THE BREEZE
              </h1>
              <p class="fst-italic fs-5 text-muted mb-4">Warm tones for cooler days</p>
              <a href="#menAoNiSec" class="btn btn-dark btn-lg rounded-pill px-4 fw-bold">Mua ngay</a>
            </div>
          </div>
        </div>

        <!-- Slide 2 -->
        <div class="carousel-item hero-slide-item">
          <img src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1600&auto=format&fit=crop&q=80" class="hero-slide-bg" alt="Gentleman Essentials">
          <div class="hero-slide-overlay overlay-men"></div>
          <div class="container position-relative">
            <div class="hero-slide-content text-dark" style="max-width: 620px;">
              <span class="hero-tagline text-dark fw-bold">GENTLEMAN ESSENTIALS</span>
              <h1 class="hero-title hero-title-dark font-serif" style="font-size: 3.2rem; color: #18181b;">
                PHONG ĐỘ QUÝ ÔNG
              </h1>
              <p class="hero-desc text-dark text-opacity-75">Sự kết hợp hoàn mỹ giữa suit may đo và áo nỉ cổ bẻ thanh lịch tôn vinh phong thái dẫn đầu.</p>
              <a href="#menPoloSec" class="btn btn-dark btn-lg rounded-pill px-4 fw-bold">Khám phá ngay</a>
            </div>
          </div>
        </div>

        <!-- Slide 3 -->
        <div class="carousel-item hero-slide-item">
          <img src="https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?w=1600&auto=format&fit=crop&q=80" class="hero-slide-bg" alt="Streetwear & Casual">
          <div class="hero-slide-overlay overlay-men"></div>
          <div class="container position-relative">
            <div class="hero-slide-content text-dark" style="max-width: 620px;">
              <span class="hero-tagline text-dark fw-bold">STREETWEAR & CASUAL</span>
              <h1 class="hero-title hero-title-dark font-serif" style="font-size: 3.2rem; color: #18181b;">
                TỰ TIN TỪNG KHOẢNH KHẮC
              </h1>
              <p class="hero-desc text-dark text-opacity-75">Áo polo dệt thoáng khí, quần short kaki năng động sẵn sàng cho những chuyến đi hè bất tận.</p>
              <a href="#menQuanSec" class="btn btn-dark btn-lg rounded-pill px-4 fw-bold">Xem BST Quần</a>
            </div>
          </div>
        </div>
      </div>

      <!-- Controls -->
      <button class="carousel-control-prev" type="button" data-bs-target="#menHeroCarousel" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Trước</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#menHeroCarousel" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Sau</span>
      </button>
    </div>
  </section>

  <!-- CATEGORY 1: THỜI TRANG NAM -->
  <section class="container py-4" id="menAoNiSec">
    <div class="d-flex justify-content-between align-items-end mb-3 border-bottom pb-2 flex-wrap gap-2">
      <div>
        <h4 class="fw-bold font-serif text-dark m-0">THỜI TRANG NAM</h4>
        <div class="subcat-nav-wrap small text-muted mt-1">
          <span class="subcat-link active" onclick="filterSectionSubcategory('gridMenAoNi', 'all', this)">Tất cả</span>
          <span class="subcat-sep">•</span>
          <span class="subcat-link" onclick="filterSectionSubcategory('gridMenAoNi', 'ao-ni', this)">Áo nỉ &amp; Sweater</span>
          <span class="subcat-sep">•</span>
          <span class="subcat-link" onclick="filterSectionSubcategory('gridMenAoNi', 'ao-det-kim', this)">Áo dệt kim &amp; Len</span>
          <span class="subcat-sep">•</span>
          <span class="subcat-link" onclick="filterSectionSubcategory('gridMenAoNi', 'ao-khoac', this)">Áo khoác thu đông</span>
          <span class="subcat-sep">•</span>
          <span class="subcat-link" onclick="filterSectionSubcategory('gridMenAoNi', 'blazer', this)">Áo Blazer nam</span>
        </div>
      </div>
      <a href="javascript:void(0)" onclick="sendAiMessage('Tư vấn chọn áo nam phù hợp dáng'); toggleAiChat();" class="btn btn-sm btn-link text-dark text-decoration-none p-0 fw-semibold">AI Tư Vấn Size &gt;</a>
    </div>
    <div class="row g-4" id="gridMenAoNi">
      <!-- Populated by script.js -->
    </div>
  </section>

  <!-- CATEGORY 2: ÁO XUÂN HÈ -->
  <section class="container py-4" id="menPoloSec">
    <div class="d-flex justify-content-between align-items-end mb-3 border-bottom pb-2 flex-wrap gap-2">
      <div>
        <h4 class="fw-bold font-serif text-dark m-0">Áo Xuân Hè</h4>
        <div class="subcat-nav-wrap small text-muted mt-1">
          <span class="subcat-link" onclick="filterSectionSubcategory('gridMenPolo', 'all', this)">Tất cả</span>
          <span class="subcat-sep">•</span>
          <span class="subcat-link" onclick="filterSectionSubcategory('gridMenPolo', 'ao-phong', this)">Áo Phông</span>
          <span class="subcat-sep">•</span>
          <span class="subcat-link active" onclick="filterSectionSubcategory('gridMenPolo', 'ao-polo', this)">Áo Polo</span>
          <span class="subcat-sep">•</span>
          <span class="subcat-link" onclick="filterSectionSubcategory('gridMenPolo', 'ao-so-mi', this)">Áo sơ mi cộc tay/dài tay</span>
          <span class="subcat-sep">•</span>
          <span class="subcat-link" onclick="filterSectionSubcategory('gridMenPolo', 'ao-tank-top', this)">Áo tank tops</span>
        </div>
      </div>
      <a href="javascript:void(0)" onclick="filterSectionSubcategory('gridMenPolo', 'all')" class="btn btn-sm btn-link text-dark text-decoration-none p-0 fw-semibold">Xem tất cả áo hè &gt;</a>
    </div>
    <div class="row g-4" id="gridMenPolo">
      <!-- Populated by script.js -->
    </div>
  </section>

  <!-- CATEGORY 3: QUẦN -->
  <section class="container py-4" id="menQuanSec">
    <div class="d-flex justify-content-between align-items-end mb-3 border-bottom pb-2 flex-wrap gap-2">
      <div>
        <h4 class="fw-bold font-serif text-dark m-0">Quần</h4>
        <div class="subcat-nav-wrap small text-muted mt-1">
          <span class="subcat-link" onclick="filterSectionSubcategory('gridMenQuan', 'all', this)">Tất cả quần</span>
          <span class="subcat-sep">•</span>
          <span class="subcat-link active" onclick="filterSectionSubcategory('gridMenQuan', 'quan-dai', this)">Quần dài</span>
          <span class="subcat-sep">•</span>
          <span class="subcat-link" onclick="filterSectionSubcategory('gridMenQuan', 'quan-short', this)">Quần short</span>
        </div>
      </div>
      <a href="javascript:void(0)" onclick="filterSectionSubcategory('gridMenQuan', 'all')" class="btn btn-sm btn-link text-dark text-decoration-none p-0 fw-semibold">Xem tất cả quần &gt;</a>
    </div>
    <div class="row g-4" id="gridMenQuan">
      <!-- Populated by script.js -->
    </div>
  </section>

  <!-- CATEGORY 4: PHỤ KIỆN NAM -->
  <section class="container py-4" id="menAccSec">
    <div class="d-flex justify-content-between align-items-end mb-3 border-bottom pb-2 flex-wrap gap-2">
      <div>
        <h4 class="fw-bold font-serif text-dark m-0">Phụ Kiện</h4>
        <div class="subcat-nav-wrap small text-muted mt-1">
          <span class="subcat-link active" onclick="filterSectionSubcategory('gridMenAcc', 'all', this)">Tất cả phụ kiện</span>
          <span class="subcat-sep">•</span>
          <span class="subcat-link" onclick="filterSectionSubcategory('gridMenAcc', 'dep-kep', this)">Dép kẹp</span>
          <span class="subcat-sep">•</span>
          <span class="subcat-link" onclick="filterSectionSubcategory('gridMenAcc', 'giay-luoi', this)">Giày lười</span>
          <span class="subcat-sep">•</span>
          <span class="subcat-link" onclick="filterSectionSubcategory('gridMenAcc', 'day-lung', this)">Dây lưng</span>
          <span class="subcat-sep">•</span>
          <span class="subcat-link" onclick="filterSectionSubcategory('gridMenAcc', 'mu', this)">Mũ</span>
          <span class="subcat-sep">•</span>
          <span class="subcat-link" onclick="filterSectionSubcategory('gridMenAcc', 'tat', this)">Tất</span>
        </div>
      </div>
      <a href="accessories.html" class="btn btn-sm btn-link text-dark text-decoration-none p-0 fw-semibold">Xem toàn bộ phụ kiện &gt;</a>
    </div>
    <div class="row g-4" id="gridMenAcc">
      <!-- Populated by script.js -->
    </div>
  </section>

  <!-- MEN LOOKBOOK -->
  <section class="container py-5">
    <div class="text-center mb-4">
      <span class="text-uppercase small fw-bold text-muted letter-spacing-1">CONFIDENCE & STYLE</span>
      <h3 class="fw-bold font-serif">Velora Lookbook</h3>
      <p class="text-muted small">Cảm nhận sự tự do & phóng khoáng trong từng thiết kế phái mạnh.</p>
    </div>
    <div class="row g-3">
      <div class="col-md-3 col-6">
        <div class="card border-0 rounded-4 overflow-hidden shadow-sm h-100">
          <img src="https://images.unsplash.com/photo-1516257984-b1b4d707412e?w=600&auto=format&fit=crop&q=80" class="img-fluid rounded-4 h-100 object-fit-cover" alt="Men Lookbook 1">
        </div>
      </div>
      <div class="col-md-3 col-6">
        <div class="card border-0 rounded-4 overflow-hidden shadow-sm h-100">
          <img src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&auto=format&fit=crop&q=80" class="img-fluid rounded-4 h-100 object-fit-cover" alt="Men Lookbook 2">
        </div>
      </div>
      <div class="col-md-3 col-6">
        <div class="card border-0 rounded-4 overflow-hidden shadow-sm h-100">
          <img src="https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?w=600&auto=format&fit=crop&q=80" class="img-fluid rounded-4 h-100 object-fit-cover" alt="Men Lookbook 3">
        </div>
      </div>
      <div class="col-md-3 col-6">
        <div class="card border-0 rounded-4 overflow-hidden shadow-sm h-100">
          <img src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=600&auto=format&fit=crop&q=80" class="img-fluid rounded-4 h-100 object-fit-cover" alt="Men Lookbook 4">
        </div>
      </div>
    </div>
  </section>
"""
    content += """  <!-- COMPREHENSIVE MEN COLLECTION WITH FILTER PILLS -->
  <section class="container py-5 border-top" id="menAllProductsSec">
    <div class="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2">
      <div>
        <span class="text-uppercase small fw-bold text-danger letter-spacing-1">Bộ sưu tập thời trang nam</span>
        <h3 class="fw-bold font-serif m-0">Tất Cả Thiết Kế Cho Phái Mạnh</h3>
        <p class="small text-muted mb-0">Tự do lựa chọn từ áo nỉ, sơ mi, polo, blazer may đo đến quần âu & phụ kiện</p>
      </div>
      <div class="d-flex gap-2 flex-wrap" id="menFilterPills">
        <button type="button" class="btn btn-sm btn-dark rounded-pill px-3 active filter-pill" onclick="filterProducts('men', 'all', this)">
          Tất cả (<span id="menTotalCount">0</span>)
        </button>
        <button type="button" class="btn btn-sm btn-outline-dark rounded-pill px-3 filter-pill" onclick="filterProducts('men', 'ao', this)">
          Áo nam &amp; Blazer
        </button>
        <button type="button" class="btn btn-sm btn-outline-dark rounded-pill px-3 filter-pill" onclick="filterProducts('men', 'ao-phong', this)">
          Áo Phông &amp; Polo
        </button>
        <button type="button" class="btn btn-sm btn-outline-dark rounded-pill px-3 filter-pill" onclick="filterProducts('men', 'ao-so-mi', this)">
          Sơ mi Oxford
        </button>
        <button type="button" class="btn btn-sm btn-outline-dark rounded-pill px-3 filter-pill" onclick="filterProducts('men', 'quan', this)">
          Quần nam
        </button>
        <button type="button" class="btn btn-sm btn-outline-dark rounded-pill px-3 filter-pill" onclick="filterProducts('men', 'quan-short', this)">
          Quần short
        </button>
        <button type="button" class="btn btn-sm btn-outline-dark rounded-pill px-3 filter-pill" onclick="filterProducts('men', 'accessories', this)">
          Phụ kiện nam
        </button>
      </div>
    </div>
    <div class="row g-4" id="gridMenAll">
      <!-- Populated dynamically by script.js filterProducts('men', 'all') -->
    </div>
    <!-- DYNAMIC PAGINATION -->
    <div id="pagination-gridMenAll"></div>
  </section>
"""
    content += get_footer_and_modals()
    with open(os.path.join(BASE_DIR, "men.html"), "w", encoding="utf-8") as f:
        f.write(content)
    print("Generated men.html")

# ==============================================================================
# 5. GENERATE accessories.html (Phụ kiện)
# ==============================================================================
def make_accessories_html():
    content = get_head("Phụ Kiện Thời Trang — Chi Tiết Nhỏ, Phong Cách Lớn")
    content += '<body data-page="accessories">\n'
    content += get_header("accessories")
    content += """
  <!-- BREADCRUMB -->
  <div class="container pt-3">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb small text-muted">
        <li class="breadcrumb-item"><a href="index.html" class="text-muted text-decoration-none">Trang chủ</a></li>
        <li class="breadcrumb-item active text-dark fw-semibold" aria-current="page">Phụ kiện</li>
      </ol>
    </nav>
  </div>

  <!-- HERO CAROUSEL: ACCESSORIES (3 SLIDES PASTEL KEN BURNS ZOOM) -->
  <section class="container py-2">
    <div id="accessoriesHeroCarousel" class="carousel slide carousel-fade hero-slider-wrap" data-bs-ride="carousel" data-bs-interval="4500" style="background-color: #f7f3ee;">
      <div class="hero-carousel-indicators">
        <button type="button" class="hero-indicator-btn indicator-dark active" data-bs-target="#accessoriesHeroCarousel" data-bs-slide-to="0" aria-label="Slide 1"></button>
        <button type="button" class="hero-indicator-btn indicator-dark" data-bs-target="#accessoriesHeroCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" class="hero-indicator-btn indicator-dark" data-bs-target="#accessoriesHeroCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>

      <div class="carousel-inner">
        <!-- Slide 1 -->
        <div class="carousel-item active hero-slide-item">
          <img src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=1600&auto=format&fit=crop&q=80" class="hero-slide-bg" alt="Little Details Collection">
          <div class="hero-slide-overlay overlay-accessories"></div>
          <div class="container position-relative">
            <div class="hero-slide-content text-dark" style="max-width: 620px;">
              <span class="badge bg-danger mb-2 px-3 py-2 rounded-pill small">THE LITTLE DETAILS COLLECTION</span>
              <h1 class="hero-title hero-title-dark font-serif" style="font-size: 3rem; color: #18181b;">
                Chi tiết nhỏ,<br>phong cách lớn.
              </h1>
              <p class="hero-desc text-muted">Tủ nước hoa yêu thích điểm chút ngọt ngào lấp lánh. Tìm điểm nhấn dành riêng cho mọi phiên bản của bạn.</p>
              <a href="#accGridSec" class="btn btn-danger btn-lg rounded-pill px-4 fw-bold">Khám phá bộ sưu tập</a>
            </div>
          </div>
        </div>

        <!-- Slide 2 -->
        <div class="carousel-item hero-slide-item">
          <img src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=1600&auto=format&fit=crop&q=80" class="hero-slide-bg" alt="Pearl & Gold 18K">
          <div class="hero-slide-overlay overlay-accessories"></div>
          <div class="container position-relative">
            <div class="hero-slide-content text-dark" style="max-width: 620px;">
              <span class="badge bg-warning text-dark mb-2 px-3 py-2 rounded-pill small">PEARL & GOLD 18K</span>
              <h1 class="hero-title hero-title-dark font-serif" style="font-size: 3rem; color: #18181b;">
                Trang Sức Quý Phái
              </h1>
              <p class="hero-desc text-muted">Vòng ngọc trai nuôi nước ngọt và khuyên tai mạ vàng 18K sắc sảo tôn vinh nét quyến rũ vương giả.</p>
              <a href="#accGridSec" class="btn btn-dark btn-lg rounded-pill px-4 fw-bold" onclick="filterProducts('accessories', 'trang-suc')">Xem Trang Sức</a>
            </div>
          </div>
        </div>

        <!-- Slide 3 -->
        <div class="carousel-item hero-slide-item">
          <img src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=1600&auto=format&fit=crop&q=80" class="hero-slide-bg" alt="Iconic Leather Bags">
          <div class="hero-slide-overlay overlay-accessories"></div>
          <div class="container position-relative">
            <div class="hero-slide-content text-dark" style="max-width: 620px;">
              <span class="badge bg-dark mb-2 px-3 py-2 rounded-pill small">ICONIC BAGS & SUNGLASSES</span>
              <h1 class="hero-title hero-title-dark font-serif" style="font-size: 3rem; color: #18181b;">
                Điểm Nhấn Hoàn Hảo
              </h1>
              <p class="hero-desc text-muted">Kính mắt retro chống tia UV400 và túi quai kẹp nách sang trọng cho nàng sành điệu.</p>
              <a href="#accGridSec" class="btn btn-dark btn-lg rounded-pill px-4 fw-bold" onclick="filterProducts('accessories', 'tui-xach')">Xem Túi Xách</a>
            </div>
          </div>
        </div>
      </div>

      <!-- Controls -->
      <button class="carousel-control-prev" type="button" data-bs-target="#accessoriesHeroCarousel" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Trước</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#accessoriesHeroCarousel" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Sau</span>
      </button>
    </div>
  </section>

  <!-- CATEGORY PILLS -->
  <section class="container py-4">
    <div class="d-flex justify-content-between align-items-center mb-3">
      <h5 class="fw-bold font-serif m-0">Tìm món phụ kiện của bạn</h5>
      <span class="text-muted small">Phong cách thanh lịch cá tính cho mọi sự kiện</span>
    </div>
    <div class="filter-pills-wrap d-flex flex-wrap gap-2">
      <button class="btn btn-danger rounded-pill px-4 py-2 small filter-pill active" onclick="filterProducts('accessories', 'all', this)">
        <i class="bi bi-grid-fill me-1"></i> Tất cả phụ kiện
      </button>
      <button class="btn btn-outline-secondary rounded-pill px-4 py-2 small filter-pill" onclick="filterProducts('accessories', 'tui-xach', this)">
        <i class="bi bi-handbag me-1"></i> Túi xách
      </button>
      <button class="btn btn-outline-secondary rounded-pill px-4 py-2 small filter-pill" onclick="filterProducts('accessories', 'trang-suc', this)">
        <i class="bi bi-gem me-1"></i> Trang sức
      </button>
      <button class="btn btn-outline-secondary rounded-pill px-4 py-2 small filter-pill" onclick="filterProducts('accessories', 'kinh-mat', this)">
        <i class="bi bi-sunglasses me-1"></i> Kính mát
      </button>
      <button class="btn btn-outline-secondary rounded-pill px-4 py-2 small filter-pill" onclick="filterProducts('accessories', 'phu-kien-toc', this)">
        <i class="bi bi-scissors me-1"></i> Phụ kiện tóc
      </button>
    </div>
  </section>

  <!-- SUB FILTER & SORT TOOLBAR -->
  <section class="container py-2" id="accGridSec">
    <div class="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3 border-bottom pb-3">
      <div>
        <h4 class="fw-bold font-serif m-0">Phụ kiện dành cho bạn</h4>
        <div class="subcat-nav-wrap small text-muted mt-1">
          <span class="subcat-link active" onclick="filterSectionSubcategory('gridAccessories', 'all', this)">Tất cả</span>
          <span class="subcat-sep">•</span>
          <span class="subcat-link" onclick="filterSectionSubcategory('gridAccessories', 'tui-xach', this)">Túi xách &amp; Kẹp nách</span>
          <span class="subcat-sep">•</span>
          <span class="subcat-link" onclick="filterSectionSubcategory('gridAccessories', 'trang-suc', this)">Trang sức ngọc trai</span>
          <span class="subcat-sep">•</span>
          <span class="subcat-link" onclick="filterSectionSubcategory('gridAccessories', 'kinh-mat', this)">Kính mắt</span>
          <span class="subcat-sep">•</span>
          <span class="subcat-link" onclick="filterSectionSubcategory('gridAccessories', 'day-lung', this)">Thắt lưng da</span>
          <span class="subcat-sep">•</span>
          <span class="subcat-link" onclick="filterSectionSubcategory('gridAccessories', 'giay-luoi', this)">Giày lười &amp; Dép</span>
        </div>
      </div>
      <div class="d-flex align-items-center gap-2">
        <span class="small text-muted text-nowrap"><i class="bi bi-funnel me-1"></i> Sắp xếp:</span>
        <select class="sort-select-velora" onchange="sortProducts('accessories', this.value, 'gridAccessories')">
          <option value="newest">Mới nhất</option>
          <option value="bestseller">Bán chạy nhất</option>
          <option value="price-asc">Giá tăng dần</option>
          <option value="price-desc">Giá giảm dần</option>
          <option value="rating">Đánh giá cao</option>
        </select>
      </div>
    </div>
  </section>

  <!-- ACCESSORIES GRID -->
  <section class="container py-3">
    <div class="row g-4" id="gridAccessories">
      <!-- Populated by script.js -->
    </div>
    <!-- DYNAMIC PAGINATION -->
    <div id="pagination-gridAccessories"></div>
  </section>

  <!-- SPOTLIGHT PAIRING BANNER -->
  <section class="container py-4">
    <div class="card border-0 rounded-4 overflow-hidden shadow-sm" style="background-color: #f5f3ff;">
      <div class="row g-0 align-items-center">
        <div class="col-md-5">
          <img src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&auto=format&fit=crop&q=80" class="img-fluid h-100 object-fit-cover" alt="Spotlight Pairing">
        </div>
        <div class="col-md-7 p-4 p-lg-5">
          <span class="badge bg-primary mb-2 px-3 py-2 rounded-pill small">TÂM ĐIỂM BẢN PHỐI</span>
          <h2 class="fw-bold font-serif mb-3">Một bản phối, nhiều dấu ấn.</h2>
          <p class="text-muted mb-4">
            Túi mini ngọc trai xô xếp, chiếc nơ satin mềm mại. Ba chi tiết nhỏ đủ để biến diện mạo trở nên thật sống động và tinh tế.
          </p>
          <div class="d-flex flex-wrap gap-3 mb-4">
            <span class="badge bg-white text-dark border px-3 py-2">01 Chuỗi ngọc & Đầm dạ hội</span>
            <span class="badge bg-white text-dark border px-3 py-2">02 Túi kẹp nách & Áo blazer</span>
          </div>
          <button class="btn btn-dark rounded-pill px-4 fw-bold" onclick="sendAiMessage('Gợi ý phối phụ kiện túi và ngọc trai'); toggleAiChat();">
            Xem cảm hứng phối đồ
          </button>
        </div>
      </div>
    </div>
  </section>

  <!-- 3 VALUE PROPOSITIONS -->
  <section class="container py-4">
    <div class="row g-4">
      <div class="col-md-4">
        <div class="card border-0 rounded-4 p-4 bg-light h-100">
          <div class="display-6 fw-bold text-danger font-serif mb-2">01</div>
          <h5 class="fw-bold">Chọn lọc từng chi tiết</h5>
          <p class="text-muted small m-0">Thiết kế cá tính, tạo điểm nhấn cho outfit dạo phố hoặc dạ tiệc sang trọng.</p>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card border-0 rounded-4 p-4 bg-light h-100">
          <div class="display-6 fw-bold text-danger font-serif mb-2">02</div>
          <h5 class="fw-bold">Đóng gói trang nhã</h5>
          <p class="text-muted small m-0">Mỗi món đồ gửi đến đều như một món quà xinh xắn trong hộp lót nhung cao cấp.</p>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card border-0 rounded-4 p-4 bg-light h-100">
          <div class="display-6 fw-bold text-danger font-serif mb-2">03</div>
          <h5 class="fw-bold">Luôn sẵn sàng tư vấn</h5>
          <p class="text-muted small m-0">Cùng bạn tìm kiếm phụ kiện phù hợp phong cách & trang phục dự tiệc.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- ACCESSORIES NEWSLETTER -->
  <section class="container py-4">
    <div class="card border-0 rounded-4 p-4 text-center text-md-start" style="background-color: #fdf2f8;">
      <div class="d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
        <div>
          <h5 class="fw-bold text-danger m-0 font-serif">Một chút cảm hứng gửi đến bạn</h5>
          <p class="text-muted small m-0">Khám phá xu hướng mới và gợi ý phối đồ từ Apple/MeeMee Lookbook.</p>
        </div>
        <form class="d-flex gap-2" onsubmit="event.preventDefault(); showToast('Cảm ơn bạn! Đã đăng ký nhận cảm hứng phụ kiện.'); this.reset();">
          <input type="email" class="form-control rounded-pill px-3" placeholder="Nhập địa chỉ email của bạn..." required>
          <button class="btn btn-danger rounded-pill px-4 fw-bold text-nowrap" type="submit">Đăng ký</button>
        </form>
      </div>
    </div>
  </section>
"""
    content += get_footer_and_modals()
    with open(os.path.join(BASE_DIR, "accessories.html"), "w", encoding="utf-8") as f:
        f.write(content)
    print("Generated accessories.html")

# ==============================================================================
# 6. GENERATE flash-sale.html (Flash Sale ⚡)
# ==============================================================================
def make_flash_sale_html():
    content = get_head("Flash Sale Giờ Vàng ⚡ — Giảm Giá Sốc Tới 60%")
    content += '<body data-page="flash-sale">\n'
    content += get_header("flash-sale")
    content += """
  <!-- BREADCRUMB -->
  <div class="container pt-3">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb small text-muted">
        <li class="breadcrumb-item"><a href="index.html" class="text-muted text-decoration-none">Trang chủ</a></li>
        <li class="breadcrumb-item active text-danger fw-semibold" aria-current="page">Flash Sale Giờ Vàng ⚡</li>
      </ol>
    </nav>
  </div>

  <!-- HERO CAROUSEL: FLASH SALE (3 SLIDES RED NEON KEN BURNS ZOOM) -->
  <section class="container py-2">
    <div id="flashSaleHeroCarousel" class="carousel slide carousel-fade hero-slider-wrap" data-bs-ride="carousel" data-bs-interval="4500" style="background-color: #b91c1c;">
      <div class="hero-carousel-indicators">
        <button type="button" class="hero-indicator-btn active" data-bs-target="#flashSaleHeroCarousel" data-bs-slide-to="0" aria-label="Slide 1"></button>
        <button type="button" class="hero-indicator-btn" data-bs-target="#flashSaleHeroCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" class="hero-indicator-btn" data-bs-target="#flashSaleHeroCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>

      <div class="carousel-inner">
        <!-- Slide 1 -->
        <div class="carousel-item active hero-slide-item">
          <img src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1600&auto=format&fit=crop&q=80" class="hero-slide-bg" alt="Flash Sale Giờ Vàng">
          <div class="hero-slide-overlay overlay-flashsale"></div>
          <div class="container position-relative">
            <div class="d-flex flex-column flex-lg-row justify-content-between align-items-lg-center hero-slide-content text-white" style="max-width: 100%;">
              <div style="max-width: 620px;">
                <span class="badge bg-warning text-dark mb-2 px-3 py-2 rounded-pill small fw-bold">⚡ GIỜ VÀNG GIÁ SỐC — UP TO 60% OFF</span>
                <h1 class="hero-title font-serif" style="font-size: 3.2rem;">FLASH SALE GIỜ VÀNG</h1>
                <p class="hero-desc">Săn deal siêu sốc độc quyền trong ngày! Giới hạn 2 sản phẩm mỗi tài khoản. Hết thời gian giá sẽ trở về ban đầu.</p>
                <a href="#flashSaleGrid" class="btn btn-warning btn-lg rounded-pill px-5 fw-bold text-dark shadow">Săn Deal Ngay</a>
              </div>

              <!-- Live Countdown Clock Box -->
              <div class="mt-4 mt-lg-0 text-center p-4 rounded-4 bg-black bg-opacity-40 border border-white border-opacity-25 shadow-lg">
                <span class="small text-warning fw-bold text-uppercase d-block mb-2">⚡ THỜI GIAN CÒN LẠI</span>
                <div class="d-flex align-items-center gap-2 justify-content-center">
                  <div class="text-center">
                    <div class="bg-dark text-white rounded-3 px-3 py-2 fs-3 fw-bold timer-hours">08</div>
                    <span class="small text-white-50" style="font-size: 0.7rem;">GIỜ</span>
                  </div>
                  <span class="fs-4 fw-bold">:</span>
                  <div class="text-center">
                    <div class="bg-dark text-white rounded-3 px-3 py-2 fs-3 fw-bold timer-minutes">45</div>
                    <span class="small text-white-50" style="font-size: 0.7rem;">PHÚT</span>
                  </div>
                  <span class="fs-4 fw-bold">:</span>
                  <div class="text-center">
                    <div class="bg-dark text-white rounded-3 px-3 py-2 fs-3 fw-bold timer-seconds">20</div>
                    <span class="small text-white-50" style="font-size: 0.7rem;">GIÂY</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Slide 2 -->
        <div class="carousel-item hero-slide-item">
          <img src="https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1600&auto=format&fit=crop&q=80" class="hero-slide-bg" alt="Đồng Giá 199k">
          <div class="hero-slide-overlay overlay-flashsale"></div>
          <div class="container position-relative">
            <div class="hero-slide-content text-white" style="max-width: 620px;">
              <span class="badge bg-white text-danger mb-2 px-3 py-2 rounded-pill small fw-bold">ĐỒNG GIÁ 199K — 299K</span>
              <h1 class="hero-title font-serif" style="font-size: 3rem;">BÙNG NỔ DEAL ĐỒNG GIÁ</h1>
              <p class="hero-desc">Hàng trăm mẫu áo polo dệt kháng khuẩn, chân váy midi và phụ kiện kính mắt đồng giá cực sốc.</p>
              <a href="#flashSaleGrid" class="btn btn-light btn-lg rounded-pill px-5 fw-bold text-danger">Xem Danh Sách Đồng Giá</a>
            </div>
          </div>
        </div>

        <!-- Slide 3 -->
        <div class="carousel-item hero-slide-item">
          <img src="https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?w=1600&auto=format&fit=crop&q=80" class="hero-slide-bg" alt="Coupon Stacking">
          <div class="hero-slide-overlay overlay-flashsale"></div>
          <div class="container position-relative">
            <div class="hero-slide-content text-white" style="max-width: 620px;">
              <span class="badge bg-warning text-dark mb-2 px-3 py-2 rounded-pill small fw-bold">MEGA COUPON STACKING</span>
              <h1 class="hero-title font-serif" style="font-size: 3rem;">GIẢM THÊM 10% VỚI VELORA10</h1>
              <p class="hero-desc">Được áp dụng đồng thời mã VELORA10 và FREESHIP trên các sản phẩm Flash Sale đang giảm sâu.</p>
              <button class="btn btn-warning btn-lg rounded-pill px-5 fw-bold text-dark" onclick="applyCouponCodeViaValue('VELORA10'); showToast('Đã lưu mã VELORA10 vào giỏ hàng!');">
                Lấy Mã VELORA10 Ngay
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Controls -->
      <button class="carousel-control-prev" type="button" data-bs-target="#flashSaleHeroCarousel" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Trước</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#flashSaleHeroCarousel" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Sau</span>
      </button>
    </div>
  </section>

  <!-- FLASH SALE FILTER PILLS -->
  <section class="container py-4" id="flashSaleGrid">
    <div class="mb-3">
      <h4 class="fw-bold font-serif text-dark m-0">Ưu Đãi Flash Sale Hôm Nay</h4>
      <div class="subcat-nav-wrap small text-muted mt-1">
        <span class="subcat-link active" onclick="filterSectionSubcategory('gridFlashSale', 'all', this)">Tất cả Deal Sốc</span>
        <span class="subcat-sep">•</span>
        <span class="subcat-link" onclick="filterSectionSubcategory('gridFlashSale', 'ao', this)">Áo phông &amp; Polo</span>
        <span class="subcat-sep">•</span>
        <span class="subcat-link" onclick="filterSectionSubcategory('gridFlashSale', 'dam-vay', this)">Đầm váy giảm 50%</span>
        <span class="subcat-sep">•</span>
        <span class="subcat-link" onclick="filterSectionSubcategory('gridFlashSale', 'quan', this)">Quần &amp; Phụ kiện</span>
      </div>
    </div>
    <div class="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3 border-bottom pb-3">
      <div class="filter-pills-wrap d-flex flex-wrap gap-2">
        <button class="btn btn-danger rounded-pill px-3 py-2 small filter-pill active" onclick="filterProducts('flash-sale', 'all', this)">
          ⚡ Tất cả Flash Sale
        </button>
        <button class="btn btn-outline-danger rounded-pill px-3 py-2 small filter-pill" onclick="filterProducts('flash-sale', 'men', this)">
          Thời trang Nam sale
        </button>
        <button class="btn btn-outline-danger rounded-pill px-3 py-2 small filter-pill" onclick="filterProducts('flash-sale', 'women', this)">
          Thời trang Nữ sale
        </button>
        <button class="btn btn-outline-danger rounded-pill px-3 py-2 small filter-pill" onclick="filterProducts('flash-sale', 'accessories', this)">
          Phụ kiện sale
        </button>
      </div>

      <div class="d-flex align-items-center gap-2">
        <span class="small text-muted text-nowrap"><i class="bi bi-funnel me-1"></i> Sắp xếp:</span>
        <select class="sort-select-velora" onchange="sortProducts('flash-sale', this.value, 'gridFlashSale')">
          <option value="bestseller">Đang bán chạy nhất</option>
          <option value="price-asc">Giá từ thấp đến cao</option>
          <option value="price-desc">Giá từ cao xuống thấp</option>
          <option value="newest">Mới cập bến</option>
        </select>
      </div>
    </div>
  </section>

  <!-- FLASH SALE PRODUCTS GRID -->
  <section class="container py-2">
    <div class="row g-4" id="gridFlashSale">
      <!-- Populated by script.js -->
    </div>
    <!-- DYNAMIC PAGINATION -->
    <div id="pagination-gridFlashSale"></div>
  </section>

  <!-- FLASH SALE GUARANTEE CARDS -->
  <section class="container py-5">
    <div class="row g-4 text-center">
      <div class="col-md-4">
        <div class="card border-0 rounded-4 p-4 bg-light h-100 shadow-sm">
          <div class="fs-1 text-danger mb-2"><i class="bi bi-lightning-charge"></i></div>
          <h5 class="fw-bold">Giao hàng 2H Siêu Tốc</h5>
          <p class="text-muted small m-0">Nội thành Hà Nội & TP. HCM nhận hàng nhanh trong vòng 2 giờ đồng hồ.</p>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card border-0 rounded-4 p-4 bg-light h-100 shadow-sm">
          <div class="fs-1 text-danger mb-2"><i class="bi bi-arrow-repeat"></i></div>
          <h5 class="fw-bold">Đổi trả 7 ngày linh hoạt</h5>
          <p class="text-muted small m-0">Áp dụng đổi size miễn phí tận nhà cho sản phẩm Flash Sale không vừa.</p>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card border-0 rounded-4 p-4 bg-light h-100 shadow-sm">
          <div class="fs-1 text-danger mb-2"><i class="bi bi-shield-check"></i></div>
          <h5 class="fw-bold">Đồng kiểm khi nhận hàng</h5>
          <p class="text-muted small m-0">Được mở bưu phẩm kiểm tra đúng mẫu, đúng size trước khi thanh toán.</p>
        </div>
      </div>
    </div>
  </section>
"""
    content += get_footer_and_modals()
    with open(os.path.join(BASE_DIR, "flash-sale.html"), "w", encoding="utf-8") as f:
        f.write(content)
    print("Generated flash-sale.html")

# ==============================================================================
# 7. GENERATE cart.html (Giỏ hàng & Đơn hàng)
# ==============================================================================
def make_cart_html():
    content = get_head("Giỏ Hàng Của Bạn — VELORA Fashion")
    content += '<body data-page="cart">\n'
    content += get_header("cart")
    content += """
  <!-- BREADCRUMB -->
  <div class="container pt-3">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb small text-muted">
        <li class="breadcrumb-item"><a href="index.html" class="text-muted text-decoration-none">Trang chủ</a></li>
        <li class="breadcrumb-item active text-dark fw-semibold" aria-current="page">Giỏ hàng của bạn</li>
      </ol>
    </nav>
  </div>

  <!-- CART PAGE CONTENT -->
  <section class="container py-4 cart-page-wrap">
    <div class="row g-4">
      <!-- Left Column: Cart Items Table -->
      <div class="col-lg-8">
        <!-- Free Shipping Progress Box -->
        <div class="card border-0 rounded-4 p-4 bg-light mb-4 shadow-sm">
          <div class="d-flex align-items-center justify-content-between mb-2">
            <span class="fw-bold small cart-freeship-text">
              Mua thêm <b>200.000đ</b> để được <span class="badge bg-danger">FREESHIP</span>
            </span>
            <span class="small text-muted"><i class="bi bi-truck me-1"></i> Giao toàn quốc</span>
          </div>
          <div class="progress" style="height: 8px;">
            <div class="progress-bar bg-danger cart-freeship-bar" style="width: 50%;"></div>
          </div>
        </div>

        <!-- Table Card -->
        <div class="card border-0 rounded-4 overflow-hidden shadow-sm">
          <div class="table-responsive">
            <table class="table cart-table align-middle m-0">
              <thead class="table-light">
                <tr>
                  <th scope="col" style="min-width: 240px;">Sản phẩm</th>
                  <th scope="col" class="text-center">Đơn giá</th>
                  <th scope="col" class="text-center">Số lượng</th>
                  <th scope="col" class="text-end">Thành tiền</th>
                  <th scope="col" class="text-center">Xóa</th>
                </tr>
              </thead>
              <tbody id="fullCartTableBody">
                <!-- Populated dynamically by script.js -->
              </tbody>
            </table>
          </div>
        </div>

        <!-- Bottom Actions -->
        <div class="d-flex justify-content-between align-items-center mt-3">
          <a href="index.html" class="btn btn-outline-dark rounded-pill px-4">
            <i class="bi bi-arrow-left me-1"></i> Tiếp tục mua sắm
          </a>
          <button class="btn btn-light text-danger rounded-pill px-4" onclick="clearCart()">
            <i class="bi bi-trash3 me-1"></i> Xóa tất cả
          </button>
        </div>
      </div>

      <!-- Right Column: Summary Card -->
      <div class="col-lg-4">
        <div class="cart-summary-card">
          <h5 class="fw-bold font-serif mb-3">Tóm tắt đơn hàng</h5>

          <div class="d-flex justify-content-between py-2 border-bottom">
            <span class="text-muted">Tạm tính:</span>
            <span class="fw-semibold cart-subtotal-val">0đ</span>
          </div>

          <div class="d-flex justify-content-between py-2 border-bottom">
            <span class="text-muted">Giảm giá voucher:</span>
            <span class="fw-semibold text-danger cart-discount-val">-0đ</span>
          </div>

          <div class="d-flex justify-content-between py-2 border-bottom">
            <span class="text-muted">Phí giao hàng:</span>
            <span class="fw-semibold cart-shipping-val">30.000đ</span>
          </div>

          <div class="d-flex justify-content-between py-3 border-bottom">
            <span class="fw-bold fs-5">Tổng thanh toán:</span>
            <span class="fw-bold fs-4 text-danger cart-total-val">0đ</span>
          </div>

          <!-- Coupon Input -->
          <div class="mt-4">
            <label class="form-label small fw-bold text-muted">Mã giảm giá ưu đãi</label>
            <div class="input-group mb-2">
              <input type="text" id="pageCouponInput" class="form-control text-uppercase" placeholder="Nhập mã VELORA10...">
              <button class="btn btn-dark fw-bold px-3" type="button" onclick="applyCoupon('pageCouponInput')">Áp dụng</button>
            </div>
            <!-- Quick Voucher Badges -->
            <div class="d-flex flex-wrap gap-2 mt-2">
              <span class="coupon-quick-badge" onclick="applyCouponCodeViaValue('VELORA10')" title="Bấm để áp dụng">
                <i class="bi bi-tag-fill me-1"></i> VELORA10 (-10%)
              </span>
              <span class="coupon-quick-badge" onclick="applyCouponCodeViaValue('FREESHIP')" title="Bấm để áp dụng">
                <i class="bi bi-truck me-1"></i> FREESHIP
              </span>
              <span class="coupon-quick-badge" onclick="applyCouponCodeViaValue('VIP50K')" title="Bấm để áp dụng">
                <i class="bi bi-star-fill me-1"></i> VIP50K (-50K)
              </span>
            </div>
          </div>

          <!-- Checkout CTA -->
          <button class="btn btn-dark btn-lg w-100 rounded-pill fw-bold mt-4 py-3 shadow" onclick="openCheckoutModal()">
            <i class="bi bi-shield-check me-2"></i> Tiến hành đặt hàng
          </button>

          <!-- Security Badges -->
          <div class="mt-4 pt-3 border-top text-center text-muted small">
            <div class="d-flex justify-content-around">
              <div><i class="bi bi-shield-lock fs-5 d-block text-dark"></i> Bảo mật 100%</div>
              <div><i class="bi bi-arrow-counterclockwise fs-5 d-block text-dark"></i> Đổi 15 ngày</div>
              <div><i class="bi bi-award fs-5 d-block text-dark"></i> Hàng chính hãng</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
"""
    content += get_footer_and_modals()
    with open(os.path.join(BASE_DIR, "cart.html"), "w", encoding="utf-8") as f:
        f.write(content)
    print("Generated cart.html")

# ==============================================================================
# 8. GENERATE account.html (Tài khoản & Quản lý đơn)
# ==============================================================================
def make_account_html():
    content = get_head("Tài Khoản Cá Nhân & Quản Trị Hệ Thống")
    content += '<body data-page="account">\n'
    content += get_header("account")
    content += """
  <!-- BREADCRUMB -->
  <div class="container pt-3">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb small text-muted">
        <li class="breadcrumb-item"><a href="index.html" class="text-muted text-decoration-none">Trang chủ</a></li>
        <li class="breadcrumb-item active text-dark fw-semibold" aria-current="page">Tài khoản cá nhân & Quản trị</li>
      </ol>
    </nav>
  </div>

  <!-- ACCOUNT PAGE CONTENT -->
  <section class="container py-4">

    <!-- VIEW 1: LOGGED OUT (ĐĂNG NHẬP / CHỌN TÀI KHOẢN) -->
    <div id="accountLoggedOutView" class="d-none">
      <div class="row justify-content-center py-4">
        <div class="col-lg-6 col-md-8 col-12">
          <div class="card border-0 rounded-4 shadow-sm p-4 p-sm-5 bg-white auth-card">
            <div class="text-center mb-4">
              <img src="velora_logo_footer.svg" alt="VELORA" style="height: 42px; width: auto; filter: invert(1);">
              <h4 class="fw-bold font-serif mt-3 mb-2" id="authCardTitle">Đăng Nhập Tài Khoản</h4>
              <p class="text-muted small mb-0" id="authCardSubtitle">Chào mừng quý khách quay lại với không gian thời trang thượng lưu Velora Luxury</p>
            </div>

            <!-- Auth Switcher Pills (Đăng Nhập / Đăng Ký) -->
            <div class="d-flex p-1.5 bg-light rounded-pill mb-4 border">
              <button type="button" class="btn btn-sm rounded-pill flex-fill fw-bold auth-switch-btn active bg-white shadow-sm py-2" id="tabBtnAuthLogin" onclick="switchAuthTab('login')">
                <i class="bi bi-box-arrow-in-right me-1.5"></i> Đăng Nhập
              </button>
              <button type="button" class="btn btn-sm rounded-pill flex-fill fw-bold auth-switch-btn text-muted py-2" id="tabBtnAuthRegister" onclick="switchAuthTab('register')">
                <i class="bi bi-person-plus-fill me-1.5"></i> Đăng Ký Mới
              </button>
            </div>

            <!-- PANE 1: LOGIN -->
            <div id="authPaneLogin">
              <!-- Quick Selection Demo Accounts -->
              <div class="p-3.5 p-sm-4 bg-light rounded-4 mb-4 text-start border">
                <div class="small fw-bold text-muted mb-3 text-uppercase d-flex align-items-center gap-1.5" style="font-size: 0.74rem; letter-spacing: 0.05em;">
                  <i class="bi bi-lightning-charge-fill text-warning fs-6"></i> Đăng nhập nhanh tài khoản thử nghiệm:
                </div>
                <div class="d-flex flex-column gap-3">
                  <button type="button" class="btn btn-outline-dark rounded-4 p-3.5 text-start d-flex flex-column flex-sm-row justify-content-between align-items-start align-items-sm-center gap-2.5 w-100 quick-auth-btn bg-white shadow-xs" onclick="loginAs('customer')">
                    <div class="d-flex align-items-start gap-3" style="min-width: 0;">
                      <div class="rounded-circle bg-primary bg-opacity-10 text-primary d-flex align-items-center justify-content-center flex-shrink-0" style="width: 44px; height: 44px;">
                        <i class="bi bi-person-fill fs-5"></i>
                      </div>
                      <div style="min-width: 0;">
                        <div class="fw-bold text-dark text-truncate" style="font-size: 0.95rem;">Tài khoản Khách Hàng (VIP Gold)</div>
                        <div class="small text-muted text-break mt-0.5">Đặng Minh Anh • minhanh.velora@gmail.com</div>
                      </div>
                    </div>
                    <span class="badge bg-dark rounded-pill px-3.5 py-2 flex-shrink-0 align-self-stretch align-self-sm-auto text-center fw-semibold">
                      Đăng nhập <i class="bi bi-arrow-right ms-1"></i>
                    </span>
                  </button>

                  <button type="button" class="btn btn-dark rounded-4 p-3.5 text-start d-flex flex-column flex-sm-row justify-content-between align-items-start align-items-sm-center gap-2.5 w-100 border-warning quick-auth-btn shadow-xs" onclick="openAdminLoginModal()">
                    <div class="d-flex align-items-start gap-3" style="min-width: 0;">
                      <div class="rounded-circle bg-warning text-dark d-flex align-items-center justify-content-center flex-shrink-0" style="width: 44px; height: 44px;">
                        <i class="bi bi-shield-lock-fill fs-5"></i>
                      </div>
                      <div style="min-width: 0;">
                        <div class="fw-bold text-warning text-truncate" style="font-size: 0.95rem;">Tài khoản Quản Trị Viên (Admin)</div>
                        <div class="small text-white-50 text-break mt-0.5">admin@velora.vn • Yêu cầu mật khẩu bảo mật</div>
                      </div>
                    </div>
                    <span class="badge bg-warning text-dark rounded-pill px-3.5 py-2 fw-bold flex-shrink-0 align-self-stretch align-self-sm-auto text-center">
                      <i class="bi bi-lock-fill me-1"></i> Nhập Mật Khẩu
                    </span>
                  </button>
                </div>
              </div>

              <!-- Traditional Login Form -->
              <form onsubmit="handleLoginForm(event)">
                <div class="mb-3.5 text-start">
                  <label class="form-label small fw-bold text-dark mb-2">Địa chỉ Email / Tên đăng nhập <span class="text-danger">*</span></label>
                  <div class="input-group">
                    <span class="input-group-text bg-white border-end-0 px-3"><i class="bi bi-envelope text-muted"></i></span>
                    <input type="email" class="form-control border-start-0 py-2.5 px-2 form-control-luxury" id="loginEmail" placeholder="minhanh.velora@gmail.com hoặc email đã đăng ký..." required style="font-size: 0.95rem;">
                  </div>
                  <div class="form-text small text-muted mt-1.5" style="font-size: 0.76rem;">Đăng nhập bằng email đã tạo tài khoản hoặc <b>admin@velora.vn</b> (mật khẩu: <code>admin123</code>).</div>
                </div>

                <div class="mb-4 text-start">
                  <div class="d-flex justify-content-between align-items-center mb-2">
                    <label class="form-label small fw-bold text-dark m-0">Mật khẩu <span class="text-danger">*</span></label>
                    <span class="text-muted small" style="font-size: 0.75rem;">Tối thiểu 6 ký tự</span>
                  </div>
                  <div class="input-group">
                    <span class="input-group-text bg-white border-end-0 px-3"><i class="bi bi-lock text-muted"></i></span>
                    <input type="password" class="form-control border-start-0 border-end-0 py-2.5 px-2 form-control-luxury" id="loginPassword" placeholder="Nhập mật khẩu của bạn..." required style="font-size: 0.95rem;">
                    <button class="btn btn-outline-secondary border-start-0 px-3" type="button" onclick="togglePasswordVisibility('loginPassword', this)">
                      <i class="bi bi-eye"></i>
                    </button>
                  </div>
                </div>

                <button type="submit" class="btn btn-dark w-100 rounded-pill py-2.5 fw-bold shadow-sm mb-3.5" style="font-size: 0.95rem;">
                  <i class="bi bi-box-arrow-in-right me-1.5"></i> Đăng Nhập Ngay
                </button>

                <div class="text-center pt-1">
                  <span class="small text-muted">Chưa có tài khoản?</span>
                  <a href="javascript:void(0)" class="small fw-bold text-danger text-decoration-none ms-1.5" onclick="switchAuthTab('register')">Đăng ký thành viên mới <i class="bi bi-arrow-right"></i></a>
                </div>
              </form>
            </div>

            <!-- PANE 2: REGISTER -->
            <div id="authPaneRegister" class="d-none">
              <!-- Welcome Perk Banner -->
              <div class="p-3.5 p-sm-4 bg-danger bg-opacity-10 border border-danger border-opacity-25 rounded-4 mb-4 text-start">
                <div class="d-flex align-items-center gap-2 mb-2">
                  <i class="bi bi-gift-fill text-danger fs-5"></i>
                  <b class="text-danger">Đặc Quyền Thành Viên Mới Velora:</b>
                </div>
                <ul class="small text-muted mb-0 ps-3" style="line-height: 1.7;">
                  <li>Tặng ngay <b>500 điểm thưởng</b> tích lũy vào tài khoản.</li>
                  <li>Tặng <b>Voucher WELCOME10</b> giảm 10% cho đơn hàng đầu tiên.</li>
                  <li>Đặc quyền tích điểm đổi quà và chăm sóc khách hàng VIP 1:1.</li>
                </ul>
              </div>

              <!-- Register Form -->
              <form onsubmit="handleRegisterForm(event)">
                <div class="mb-3.5 text-start">
                  <label class="form-label small fw-bold text-dark mb-2">Họ và tên đầy đủ <span class="text-danger">*</span></label>
                  <div class="input-group">
                    <span class="input-group-text bg-white border-end-0 px-3"><i class="bi bi-person text-muted"></i></span>
                    <input type="text" class="form-control border-start-0 py-2.5 px-2 form-control-luxury" id="regName" placeholder="Ví dụ: Nguyễn Thị Hương Thảo" required style="font-size: 0.95rem;">
                  </div>
                </div>

                <div class="row g-3 mb-3.5 text-start">
                  <div class="col-md-6">
                    <label class="form-label small fw-bold text-dark mb-2">Số điện thoại <span class="text-danger">*</span></label>
                    <div class="input-group">
                      <span class="input-group-text bg-white border-end-0 px-3"><i class="bi bi-telephone text-muted"></i></span>
                      <input type="tel" class="form-control border-start-0 py-2.5 px-2 form-control-luxury" id="regPhone" placeholder="0912 345 678" required style="font-size: 0.95rem;">
                    </div>
                  </div>
                  <div class="col-md-6">
                    <label class="form-label small fw-bold text-dark mb-2">Địa chỉ Email <span class="text-danger">*</span></label>
                    <div class="input-group">
                      <span class="input-group-text bg-white border-end-0 px-3"><i class="bi bi-envelope text-muted"></i></span>
                      <input type="email" class="form-control border-start-0 py-2.5 px-2 form-control-luxury" id="regEmail" placeholder="huongthao@gmail.com" required style="font-size: 0.95rem;">
                    </div>
                  </div>
                </div>

                <div class="row g-3 mb-3.5 text-start">
                  <div class="col-md-6">
                    <label class="form-label small fw-bold text-dark mb-2">Mật khẩu <span class="text-danger">*</span></label>
                    <div class="input-group">
                      <span class="input-group-text bg-white border-end-0 px-3"><i class="bi bi-lock text-muted"></i></span>
                      <input type="password" class="form-control border-start-0 py-2.5 px-2 form-control-luxury" id="regPassword" placeholder="Tối thiểu 6 ký tự" required style="font-size: 0.95rem;">
                    </div>
                  </div>
                  <div class="col-md-6">
                    <label class="form-label small fw-bold text-dark mb-2">Xác nhận mật khẩu <span class="text-danger">*</span></label>
                    <div class="input-group">
                      <span class="input-group-text bg-white border-end-0 px-3"><i class="bi bi-shield-check text-muted"></i></span>
                      <input type="password" class="form-control border-start-0 py-2.5 px-2 form-control-luxury" id="regConfirmPassword" placeholder="Nhập lại mật khẩu..." required style="font-size: 0.95rem;">
                    </div>
                  </div>
                </div>

                <button type="submit" class="btn btn-dark w-100 rounded-pill py-2.5 fw-bold shadow-sm mb-3.5" style="font-size: 0.95rem;">
                  <i class="bi bi-check2-circle me-1.5"></i> Hoàn Tất Đăng Ký Tài Khoản
                </button>

                <div class="text-center pt-1">
                  <span class="small text-muted">Đã có tài khoản?</span>
                  <a href="javascript:void(0)" class="small fw-bold text-danger text-decoration-none ms-1.5" onclick="switchAuthTab('login')">Đăng nhập ngay <i class="bi bi-arrow-right"></i></a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- VIEW 2: LOGGED IN (KHÁCH HÀNG / ADMIN DASHBOARD) -->
    <div id="accountLoggedInView">
      <!-- User Welcome Greeting Banner -->
      <div class="card border-0 rounded-4 shadow-sm p-3 mb-4 bg-white d-flex flex-row align-items-center justify-content-between flex-wrap gap-3 account-welcome-box">
        <div class="d-flex align-items-center gap-3 flex-wrap">
          <div class="position-relative">
            <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80" 
                 id="welcomeUserAvatar" 
                 alt="Avatar" 
                 class="rounded-circle shadow-sm border border-2 border-warning" 
                 style="width: 54px; height: 54px; object-fit: cover; cursor: pointer;"
                 onclick="openUserAvatarModal()"
                 title="Nhấn để đổi ảnh đại diện">
            <button type="button" 
                    class="btn btn-warning btn-sm rounded-circle position-absolute bottom-0 end-0 p-0 d-flex align-items-center justify-content-center shadow" 
                    style="width: 20px; height: 20px; font-size: 0.65rem;" 
                    onclick="openUserAvatarModal()" 
                    title="Đổi ảnh đại diện">
              <i class="bi bi-camera-fill text-dark"></i>
            </button>
          </div>
          <div>
            <div class="d-flex align-items-center gap-2 flex-wrap">
              <h5 class="fw-bold m-0 font-serif">Xin chào, <span id="welcomeUserName" class="user-display-name text-danger">Đặng Minh Anh</span>!</h5>
              <button type="button" class="btn btn-xs btn-outline-secondary rounded-pill py-0 px-2" style="font-size: 0.72rem;" onclick="openUserAvatarModal()" title="Đổi ảnh đại diện">
                <i class="bi bi-camera me-1"></i>Đổi ảnh
              </button>
            </div>
            <span class="small text-muted" id="welcomeUserSub">Thành viên VIP Gold • Điểm tích lũy: <b class="text-warning" id="welcomeUserPoints">1.250</b> pts • Ưu đãi giảm 10% trọn đời</span>
          </div>
        </div>
        <div class="role-action-group d-flex align-items-center gap-2 flex-wrap">
          <span class="badge bg-dark px-3 py-2 rounded-pill small" id="welcomeRoleBadge">VIP GOLD MEMBER</span>
          <button class="btn btn-sm btn-outline-dark rounded-pill px-3 shadow-sm" id="btnToggleRole" onclick="handleRoleSwitchClick()" title="Chuyển đổi vai trò">
            <i class="bi bi-shield-lock me-1"></i> <span id="btnToggleRoleText">Vào Quản Trị Viên (Admin)</span>
          </button>
        </div>
      </div>

      <div class="row g-4">
        <!-- Left Column: VIP Card & Menu Navigation -->
        <div class="col-lg-4">
          <!-- VIP Membership Holographic Card -->
          <div class="account-vip-card mb-4" id="accountVipCard">
            <div class="d-flex justify-content-between align-items-center mb-4">
              <img src="velora_logo_footer.svg" alt="VELORA" style="height: 28px; width: auto;">
              <span class="badge bg-warning text-dark fw-bold px-3 py-1 rounded-pill" id="profTier">VIP GOLD</span>
            </div>
            <div class="mb-4">
              <span class="vip-chip"></span>
            </div>
            <div class="font-monospace fs-5 letter-spacing-2 mb-3">8899 4521 9923 0014</div>
            <div class="d-flex justify-content-between align-items-end">
              <div>
                <div class="small text-white-50" style="font-size: 0.7rem;">CHỦ THẺ</div>
                <div class="d-flex align-items-center gap-2 mt-1">
                  <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80" 
                       id="vipCardAvatar" 
                       class="rounded-circle border border-white" 
                       style="width: 26px; height: 26px; object-fit: cover;" 
                       alt="Avatar">
                  <div class="fw-bold fs-6 text-white" id="profName">Đặng Minh Anh</div>
                </div>
              </div>
              <div class="text-end">
                <div class="small text-white-50" style="font-size: 0.7rem;">ĐIỂM TÍCH LŨY</div>
                <div class="fw-bold fs-5 text-warning"><span id="profPoints">1.250</span> pts</div>
              </div>
            </div>
          </div>

          <!-- Account Tab Navigation List -->
          <div class="card border-0 rounded-4 shadow-sm p-2 bg-white">
            <button class="account-tab-btn bg-dark text-warning border border-warning border-opacity-50 fw-bold d-none mb-2" id="tabBtnAdmin" data-account-tab="admin" onclick="switchAccountTab('admin')">
              <i class="bi bi-shield-lock-fill text-warning"></i>
              <span>Trung Tâm Quản Trị (Admin)</span>
            </button>
            <button class="account-tab-btn active" data-account-tab="profile" onclick="switchAccountTab('profile')">
              <i class="bi bi-person-badge"></i>
              <span>Thông tin cá nhân</span>
            </button>
            <button class="account-tab-btn" data-account-tab="orders" onclick="switchAccountTab('orders')">
              <i class="bi bi-box-seam"></i>
              <span>Đơn hàng của tôi (<span id="profOrdersBadge">3</span>)</span>
            </button>
            <button class="account-tab-btn" data-account-tab="vouchers" onclick="switchAccountTab('vouchers')">
              <i class="bi bi-ticket-perforated"></i>
              <span>Kho Voucher ưu đãi</span>
            </button>
            <button class="account-tab-btn" data-account-tab="addresses" onclick="switchAccountTab('addresses')">
              <i class="bi bi-geo-alt"></i>
              <span>Sổ địa chỉ nhận hàng</span>
            </button>
            <button class="account-tab-btn" data-account-tab="wishlist" onclick="switchAccountTab('wishlist')">
              <i class="bi bi-heart"></i>
              <span>Yêu thích của tôi (<span id="profWishlistBadge">0</span>)</span>
            </button>
            <button class="account-tab-btn text-danger border-top mt-2 pt-3 fw-bold" onclick="handleLogout()" title="Đăng xuất tài khoản">
              <i class="bi bi-box-arrow-right"></i>
              <span>Đăng xuất</span>
            </button>
          </div>
        </div>

        <!-- Right Column: Tab Panes -->
        <div class="col-lg-8">
          <!-- TAB 1: PROFILE INFO FORM -->
          <div id="accTab-profile" class="account-tab-pane card border-0 rounded-4 shadow-sm p-4 bg-white">
            <div class="d-flex justify-content-between align-items-center mb-4 pb-2 border-bottom">
              <div>
                <h5 class="fw-bold font-serif m-0">Hồ sơ cá nhân</h5>
                <div class="small text-muted">Thay đổi thông tin tài khoản và cập nhật ngay lập tức</div>
              </div>
              <span class="badge bg-success bg-opacity-10 text-success border border-success px-3 py-2 rounded-pill small">
                <i class="bi bi-shield-check me-1"></i> Tài khoản đã xác thực
              </span>
            </div>

                        <!-- VIP PRIVILEGE JOURNEY & PROGRESS TRACKER (REFINED LUXURY DESIGN - NO OVERLAY) -->
            <div class="card border rounded-4 p-4 text-white mb-4 shadow-sm" style="background: linear-gradient(135deg, #18181b 0%, #202025 50%, #0f0f11 100%); border-color: rgba(234, 179, 8, 0.3) !important;">
              <!-- Header Row -->
              <div class="d-flex justify-content-between align-items-start align-items-sm-center flex-column flex-sm-row gap-3 mb-3.5 pb-3 border-bottom border-secondary border-opacity-25">
                <div class="d-flex align-items-center gap-3">
                  <div class="rounded-circle d-flex align-items-center justify-content-center shadow-xs flex-shrink-0" style="width: 48px; height: 48px; background: rgba(234, 179, 8, 0.15); border: 1.5px solid rgba(234, 179, 8, 0.4);">
                    <i class="bi bi-gem text-warning fs-5"></i>
                  </div>
                  <div>
                    <div class="d-flex align-items-center gap-2 flex-wrap">
                      <span class="badge bg-warning text-dark px-2.5 py-1 rounded-pill fw-bold" style="font-size: 0.72rem; letter-spacing: 0.04em;">
                        VELORA VIP PRIVILEGE
                      </span>
                      <span class="badge bg-white bg-opacity-10 text-white border border-secondary border-opacity-50 px-2 py-0.5 rounded-pill" style="font-size: 0.7rem;">
                        #MEMBER-VIP
                      </span>
                    </div>
                    <h5 class="fw-bold font-serif text-white m-0 mt-1">Hạng Thẻ Hiện Tại: <span class="text-warning" id="userTierCurrentDisplay">VIP GOLD</span></h5>
                  </div>
                </div>

                <div class="d-flex align-items-center gap-2 flex-wrap">
                  <div class="text-start text-sm-end me-sm-2">
                    <div class="small text-white-50" style="font-size: 0.75rem;">Điểm thưởng khả dụng:</div>
                    <div class="h5 fw-bold font-serif text-warning m-0"><span id="userPointsCurrentDisplay">1.250</span> <span class="fs-6 fw-normal text-white-50">/ 2.000 pts</span></div>
                  </div>
                  <button type="button" class="btn btn-warning btn-sm rounded-pill px-3.5 py-2 fw-bold text-dark shadow-xs d-flex align-items-center gap-1.5" onclick="openRedeemPointsModal()">
                    <i class="bi bi-gift-fill"></i> <span>Đổi Điểm Nhận Voucher</span>
                  </button>
                </div>
              </div>

              <!-- Animated Tier Progress Bar -->
              <div class="mb-3.5">
                <div class="d-flex justify-content-between text-white-50 small mb-1.5" style="font-size: 0.78rem;">
                  <span class="d-flex align-items-center gap-1"><i class="bi bi-award-fill text-warning"></i> VIP Gold (1.000 pts)</span>
                  <span class="text-warning fw-bold d-flex align-items-center gap-1"><i class="bi bi-gem text-warning"></i> VIP Diamond (2.000 pts)</span>
                </div>
                <div class="progress rounded-pill bg-black bg-opacity-50 border border-secondary border-opacity-50" style="height: 12px; padding: 2px;">
                  <div class="progress-bar progress-bar-striped progress-bar-animated bg-warning rounded-pill" id="userTierProgressBar" role="progressbar" style="width: 62.5%;" aria-valuenow="62.5" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <div class="d-flex justify-content-between align-items-center flex-wrap gap-2 mt-2">
                  <div class="small text-white-50 d-flex align-items-center gap-1.5" style="font-size: 0.78rem;">
                    <i class="bi bi-info-circle-fill text-warning"></i>
                    <span>Tích lũy thêm <b class="text-warning" id="userPointsNeededDisplay">750 pts</b> để thăng hạng <b>VIP Diamond</b> và nhận chiết khấu 15% trọn đời!</span>
                  </div>
                  <span class="badge bg-success bg-opacity-20 text-success border border-success border-opacity-30 rounded-pill px-2.5 py-1" style="font-size: 0.72rem;">
                    <i class="bi bi-check-circle-fill me-1"></i> Ưu đãi 10% trọn đời đang hiệu lực
                  </span>
                </div>
              </div>

              <!-- 4 VIP Perks Cards -->
              <div class="row g-2.5 pt-3 border-top border-secondary border-opacity-25">
                <div class="col-lg-3 col-6">
                  <div class="p-2.5 rounded-3 bg-white bg-opacity-5 border border-white border-opacity-10 d-flex align-items-center gap-2.5 h-100">
                    <div class="rounded-circle bg-warning bg-opacity-10 text-warning d-flex align-items-center justify-content-center flex-shrink-0" style="width: 34px; height: 34px;">
                      <i class="bi bi-truck fs-6"></i>
                    </div>
                    <div>
                      <div class="fw-semibold text-white small" style="font-size: 0.78rem;">Freeship Toàn Quốc</div>
                      <div class="text-white-50" style="font-size: 0.68rem;">Mọi đơn hàng 0đ</div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-6">
                  <div class="p-2.5 rounded-3 bg-white bg-opacity-5 border border-white border-opacity-10 d-flex align-items-center gap-2.5 h-100">
                    <div class="rounded-circle bg-warning bg-opacity-10 text-warning d-flex align-items-center justify-content-center flex-shrink-0" style="width: 34px; height: 34px;">
                      <i class="bi bi-arrow-repeat fs-6"></i>
                    </div>
                    <div>
                      <div class="fw-semibold text-white small" style="font-size: 0.78rem;">Đổi Trả 30 Ngày</div>
                      <div class="text-white-50" style="font-size: 0.68rem;">Hỗ trợ tận nơi miễn phí</div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-6">
                  <div class="p-2.5 rounded-3 bg-white bg-opacity-5 border border-white border-opacity-10 d-flex align-items-center gap-2.5 h-100">
                    <div class="rounded-circle bg-warning bg-opacity-10 text-warning d-flex align-items-center justify-content-center flex-shrink-0" style="width: 34px; height: 34px;">
                      <i class="bi bi-gift fs-6"></i>
                    </div>
                    <div>
                      <div class="fw-semibold text-white small" style="font-size: 0.78rem;">Quà Tặng Sinh Nhật</div>
                      <div class="text-white-50" style="font-size: 0.68rem;">Voucher VIP 500.000đ</div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-6">
                  <div class="p-2.5 rounded-3 bg-white bg-opacity-5 border border-white border-opacity-10 d-flex align-items-center gap-2.5 h-100">
                    <div class="rounded-circle bg-warning bg-opacity-10 text-warning d-flex align-items-center justify-content-center flex-shrink-0" style="width: 34px; height: 34px;">
                      <i class="bi bi-chat-heart fs-6"></i>
                    </div>
                    <div>
                      <div class="fw-semibold text-white small" style="font-size: 0.78rem;">Stylist 1:1 VIP</div>
                      <div class="text-white-50" style="font-size: 0.68rem;">Tư vấn phong cách riêng</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Avatar Edit Section -->
            <div class="p-3 bg-light rounded-4 border mb-4 d-flex align-items-center justify-content-between flex-wrap gap-3">
              <div class="d-flex align-items-center gap-3">
                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80" 
                     id="profFormAvatar" 
                     class="rounded-circle border border-2 border-dark shadow-sm" 
                     style="width: 52px; height: 52px; object-fit: cover;" alt="Avatar">
                <div>
                  <div class="fw-bold small text-dark">Ảnh đại diện tài khoản</div>
                  <div class="text-muted small" style="font-size: 0.75rem;">Hỗ trợ ảnh online hoặc file ảnh local trong cửa hàng</div>
                </div>
              </div>
              <button type="button" class="btn btn-sm btn-dark rounded-pill px-3 shadow-sm" onclick="openUserAvatarModal()">
                <i class="bi bi-camera-fill me-1"></i> Thay đổi ảnh đại diện
              </button>
            </div>

            <form onsubmit="saveUserProfile(event)">
              <div class="row g-3">
                <div class="col-md-6">
                  <label class="form-label small fw-bold">Họ và tên người dùng <span class="text-danger">*</span></label>
                  <input type="text" class="form-control" id="profInputName" value="Đặng Minh Anh" required placeholder="Nhập họ và tên...">
                </div>
                <div class="col-md-6">
                  <label class="form-label small fw-bold">Số điện thoại <span class="text-danger">*</span></label>
                  <input type="tel" class="form-control" id="profInputPhone" value="0988 123 456" required placeholder="Nhập số điện thoại...">
                </div>
                <div class="col-md-6">
                  <label class="form-label small fw-bold">Địa chỉ Email <span class="text-danger">*</span></label>
                  <input type="email" class="form-control" id="profInputEmail" value="minhanh.velora@gmail.com" required placeholder="Nhập email...">
                </div>
                <div class="col-md-6">
                  <label class="form-label small fw-bold">Hạng thẻ thành viên</label>
                  <input type="text" class="form-control bg-light" value="VIP Gold Member (Ưu đãi 10% trọn đời)" readonly>
                </div>
                <div class="col-12">
                  <label class="form-label small fw-bold">Địa chỉ nhận hàng mặc định <span class="text-danger">*</span></label>
                  <input type="text" class="form-control" id="profInputAddress" value="123 Đường Nam Kỳ Khởi Nghĩa, Quận 1, TP. HCM" required placeholder="Nhập số nhà, tên đường, quận huyện...">
                </div>
              </div>
              <div class="mt-4 pt-3 border-top d-flex justify-content-between align-items-center flex-wrap gap-2">
                <span class="small text-muted">Mọi thay đổi sẽ được cập nhật trên thẻ VIP và thanh điều hướng.</span>
                <button type="submit" class="btn btn-dark rounded-pill px-4 fw-bold shadow-sm">
                  <i class="bi bi-check2-circle me-1"></i> Lưu thay đổi
                </button>
              </div>
            </form>

            <!-- Customer Change Password Card -->
            <div class="mt-4 pt-4 border-top">
              <div class="d-flex justify-content-between align-items-center mb-3">
                <h6 class="fw-bold font-serif m-0"><i class="bi bi-shield-lock-fill text-warning me-2"></i>Đổi Mật Khẩu Tài Khoản (Đồng bộ Đám Mây)</h6>
                <span class="small text-muted">Tự động đồng bộ trên tất cả thiết bị qua Supabase</span>
              </div>
              <form id="custChangePwdForm" onsubmit="customerSubmitChangePassword(event)">
                <div class="row g-3">
                  <div class="col-md-4">
                    <label class="form-label small fw-bold">Mật khẩu hiện tại <span class="text-danger">*</span></label>
                    <div class="input-group">
                      <input type="password" class="form-control" id="custOldPassword" required placeholder="Mật khẩu hiện tại...">
                      <button class="btn btn-outline-secondary" type="button" onclick="togglePasswordVisibility('custOldPassword', this)">
                        <i class="bi bi-eye"></i>
                      </button>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <label class="form-label small fw-bold">Mật khẩu mới <span class="text-danger">*</span></label>
                    <div class="input-group">
                      <input type="password" class="form-control" id="custNewPassword" required minlength="6" placeholder="Tối thiểu 6 ký tự...">
                      <button class="btn btn-outline-secondary" type="button" onclick="togglePasswordVisibility('custNewPassword', this)">
                        <i class="bi bi-eye"></i>
                      </button>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <label class="form-label small fw-bold">Xác nhận mật khẩu mới <span class="text-danger">*</span></label>
                    <div class="input-group">
                      <input type="password" class="form-control" id="custConfirmPassword" required minlength="6" placeholder="Nhập lại mật khẩu mới...">
                      <button class="btn btn-outline-secondary" type="button" onclick="togglePasswordVisibility('custConfirmPassword', this)">
                        <i class="bi bi-eye"></i>
                      </button>
                    </div>
                  </div>
                  <div class="col-12 text-end">
                    <button type="submit" class="btn btn-outline-dark rounded-pill px-4 fw-bold shadow-sm">
                      <i class="bi bi-key-fill me-1"></i> Cập Nhật Mật Khẩu
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <!-- TAB 2: ORDER HISTORY (ITEMIZED ACCURATE ORDERS + DELETE) -->
          <div id="accTab-orders" class="account-tab-pane card border-0 rounded-4 shadow-sm p-4 bg-white d-none">
            <div class="d-flex justify-content-between align-items-center mb-3 pb-2 border-bottom flex-wrap gap-2">
              <div>
                <h5 class="fw-bold font-serif m-0">Lịch sử đơn hàng của tôi</h5>
                <div class="small text-muted">Danh sách chính xác từng sản phẩm, số lượng và lộ trình giao hàng</div>
              </div>
              <span class="badge bg-light text-dark border px-3 py-2 rounded-pill small">
                <i class="bi bi-info-circle me-1"></i> Có thể hủy đơn khi đang chuẩn bị hoặc xóa đơn cũ
              </span>
            </div>

            <!-- Customer Order Filter & Search Bar -->
            <div class="d-flex justify-content-between align-items-center mb-3 flex-wrap gap-2">
              <div class="d-flex align-items-center gap-1.5 flex-wrap">
                <button type="button" class="order-filter-pill active" onclick="filterAccountOrders('all', this)">Tất cả</button>
                <button type="button" class="order-filter-pill" onclick="filterAccountOrders('Đang chuẩn bị', this)">Đang chuẩn bị</button>
                <button type="button" class="order-filter-pill" onclick="filterAccountOrders('Đang giao', this)">Đang giao hàng</button>
                <button type="button" class="order-filter-pill" onclick="filterAccountOrders('thành công', this)">Đã giao</button>
                <button type="button" class="order-filter-pill" onclick="filterAccountOrders('Đã hủy', this)">Đã hủy</button>
              </div>
              <div class="input-group input-group-sm" style="max-width: 240px;">
                <span class="input-group-text bg-light border-end-0"><i class="bi bi-search text-muted"></i></span>
                <input type="text" class="form-control bg-light border-start-0" id="accOrderSearchInput" placeholder="Tìm theo mã đơn..." onkeyup="searchAccountOrders(this.value)">
              </div>
            </div>

            <div class="table-responsive">
              <table class="table align-middle m-0">
                <thead class="table-light small">
                  <tr>
                    <th>Mã đơn</th>
                    <th>Ngày đặt</th>
                    <th>Chi tiết sản phẩm</th>
                    <th>Tổng tiền</th>
                    <th>Trạng thái</th>
                    <th class="text-center">Thao tác</th>
                  </tr>
                </thead>
                <tbody id="accOrdersBody">
                  <!-- Populated dynamically with itemized products by script.js -->
                </tbody>
              </table>
            </div>
          </div>

          <!-- TAB 3: VOUCHERS (DYNAMICALLY RENDERED FROM STORAGE) -->
          <div id="accTab-vouchers" class="account-tab-pane card border-0 rounded-4 shadow-sm p-4 bg-white d-none">
            <div class="d-flex justify-content-between align-items-center mb-4 pb-2 border-bottom flex-wrap gap-2">
              <div>
                <h5 class="fw-bold font-serif m-0">Kho Voucher & Đổi Điểm Thưởng VIP</h5>
                <div class="small text-muted">Dùng điểm tích lũy đổi voucher hoặc sao chép mã ưu đãi độc quyền</div>
              </div>
              <span class="badge bg-warning text-dark px-3 py-2 rounded-pill fw-bold shadow-sm">
                <i class="bi bi-stars me-1"></i> Điểm của bạn: <b id="rewardPointsDisplay">1.250</b> pts
              </span>
            </div>

            <!-- VIP Points Rewards Exchange Studio -->
            <div class="p-3 bg-light rounded-4 border mb-4">
              <div class="d-flex justify-content-between align-items-center mb-3 flex-wrap gap-2">
                <div class="fw-bold small text-uppercase text-dark">
                  <i class="bi bi-gift-fill text-danger me-1"></i> Trung Tâm Đổi Điểm Thưởng Tích Lũy:
                </div>
                <span class="small text-muted" style="font-size: 0.72rem;">Đổi voucher giảm trực tiếp vào đơn hàng</span>
              </div>
              <div class="row g-2">
                <div class="col-md-4">
                  <div class="p-2.5 bg-white border rounded-3 text-center h-100 d-flex flex-column justify-content-between">
                    <div>
                      <span class="badge bg-secondary mb-1">200 Điểm</span>
                      <div class="fw-bold fs-6 text-danger">Giảm 30.000đ</div>
                      <div class="small text-muted" style="font-size: 0.7rem;">Mã: <code>REWARD30K</code> • Mọi đơn hàng</div>
                    </div>
                    <button type="button" class="btn btn-xs btn-outline-dark rounded-pill mt-2 py-1 w-100" onclick="exchangePointsForVoucher(200, 'REWARD30K', '30.000đ')">
                      Đổi ngay
                    </button>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="p-2.5 bg-white border border-warning rounded-3 text-center h-100 d-flex flex-column justify-content-between shadow-sm">
                    <div>
                      <span class="badge bg-warning text-dark mb-1 fw-bold">Phổ Biến • 500 Điểm</span>
                      <div class="fw-bold fs-6 text-danger">Giảm 70.000đ</div>
                      <div class="small text-muted" style="font-size: 0.7rem;">Mã: <code>REWARD70K</code> • Mọi đơn hàng</div>
                    </div>
                    <button type="button" class="btn btn-xs btn-warning rounded-pill mt-2 py-1 fw-bold w-100" onclick="exchangePointsForVoucher(500, 'REWARD70K', '70.000đ')">
                      Đổi ngay
                    </button>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="p-2.5 bg-white border rounded-3 text-center h-100 d-flex flex-column justify-content-between">
                    <div>
                      <span class="badge bg-dark mb-1">VIP • 1.000 Điểm</span>
                      <div class="fw-bold fs-6 text-danger">Giảm 150.000đ</div>
                      <div class="small text-muted" style="font-size: 0.7rem;">Mã: <code>REWARD150K</code> • Mọi đơn hàng</div>
                    </div>
                    <button type="button" class="btn btn-xs btn-outline-dark rounded-pill mt-2 py-1 w-100" onclick="exchangePointsForVoucher(1000, 'REWARD150K', '150.000đ')">
                      Đổi ngay
                    </button>
                  </div>
                </div>
              </div>
            </div>
              <a href="cart.html" class="btn btn-sm btn-outline-dark rounded-pill px-3">
                <i class="bi bi-bag-check me-1"></i> Đến Giỏ Hàng
              </a>
            </div>

            <!-- Dynamic Voucher Cards populated by script.js -->
            <div class="row g-3" id="accountVouchersList">
              <!-- Populated dynamically by script.js renderAccountVouchers() -->
            </div>
          </div>

          <!-- TAB 4: ADDRESSES -->
          <div id="accTab-addresses" class="account-tab-pane card border-0 rounded-4 shadow-sm p-4 bg-white d-none">
            <div class="d-flex justify-content-between align-items-center mb-4 pb-2 border-bottom flex-wrap gap-2">
              <div>
                <h5 class="fw-bold font-serif m-0">Sổ địa chỉ nhận hàng</h5>
                <div class="small text-muted">Quản lý và cập nhật địa chỉ giao hàng thuận tiện khi mua sắm</div>
              </div>
              <button type="button" class="btn btn-sm btn-dark rounded-pill px-3 shadow-sm" onclick="openAddressModal()">
                <i class="bi bi-plus-lg me-1"></i> Thêm địa chỉ mới
              </button>
            </div>
            
            <div id="accountAddressesList" class="d-flex flex-column gap-3">
              <!-- Populated dynamically by script.js renderAccountAddresses() -->
            </div>
          </div>

          <!-- TAB 4B: WISHLIST / YÊU THÍCH TRONG TÀI KHOẢN -->
          <div id="accTab-wishlist" class="account-tab-pane card border-0 rounded-4 shadow-sm p-4 bg-white d-none">
            <div class="d-flex justify-content-between align-items-center mb-4 pb-2 border-bottom flex-wrap gap-2">
              <div>
                <h5 class="fw-bold font-serif m-0">Bộ Sưu Tập Yêu Thích Của Bạn</h5>
                <div class="small text-muted">Danh sách thiết kế thời trang thượng lưu bạn đã lưu lại để mua sắm</div>
              </div>
              <div class="d-flex gap-2 align-items-center flex-wrap">
                <button type="button" class="btn btn-sm btn-outline-secondary rounded-pill px-3 shadow-xs" onclick="shareWishlist()">
                  <i class="bi bi-share me-1"></i> Chia sẻ danh sách
                </button>
                <button type="button" class="btn btn-sm btn-outline-danger rounded-pill px-3 shadow-xs" onclick="clearAllWishlist()">
                  <i class="bi bi-trash me-1"></i> Xóa tất cả
                </button>
                <button type="button" class="btn btn-sm btn-dark rounded-pill px-3.5 shadow-xs fw-semibold" onclick="addAllWishlistToCart()">
                  <i class="bi bi-bag-check me-1"></i> Thêm tất cả vào giỏ
                </button>
              </div>
            </div>
            
            <div id="accountWishlistGrid" class="row g-3 g-md-4">
              <!-- Populated dynamically by script.js renderAccountWishlist() -->
            </div>
          </div>

          <!-- TAB 5: ADMIN MANAGEMENT SUITE (TOÀN QUYỀN QUẢN TRỊ VIÊN) -->
          <div id="accTab-admin" class="account-tab-pane card border-0 rounded-4 shadow-sm p-4 bg-white d-none">
            <!-- Admin Header -->
            <div class="d-flex justify-content-between align-items-center mb-3 pb-3 border-bottom flex-wrap gap-2">
              <div>
                <div class="d-flex align-items-center gap-3">
                  <div class="position-relative">
                    <img src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400&auto=format&fit=crop&q=80" 
                         id="adminHeaderAvatar" 
                         class="rounded-circle border border-2 border-warning shadow-sm" 
                         style="width: 44px; height: 44px; object-fit: cover; cursor: pointer;"
                         onclick="openUserAvatarModal()"
                         title="Nhấn để đổi ảnh đại diện Admin">
                    <button type="button" class="btn btn-warning btn-sm rounded-circle position-absolute bottom-0 end-0 p-0 d-flex align-items-center justify-content-center shadow" style="width: 18px; height: 18px; font-size: 0.6rem;" onclick="openUserAvatarModal()" title="Đổi ảnh đại diện">
                      <i class="bi bi-camera-fill text-dark"></i>
                    </button>
                  </div>
                  <div>
                    <div class="d-flex align-items-center gap-2 flex-wrap">
                      <span class="badge bg-warning text-dark fw-bold px-2 py-1 rounded-pill" style="font-size: 0.72rem;">SUPER ADMIN</span>
                      <h5 class="fw-bold font-serif m-0 text-dark" id="adminHeaderNameDisplay">Quản Trị Viên Velora</h5>
                      <button type="button" class="btn btn-xs btn-outline-dark rounded-pill px-2 py-0" style="font-size: 0.72rem;" onclick="adminOpenEditProfileModal()" title="Đổi tên và thông tin Quản Trị Viên">
                        <i class="bi bi-pencil-square me-1"></i>Đổi tên Admin
                      </button>
                    </div>
                    <div class="small text-muted mt-0.5" style="font-size: 0.76rem;">Email: <span id="adminHeaderEmailDisplay">admin@velora.vn</span> • Quyền hạn: Toàn quyền quản trị website & giao diện</div>
                  </div>
                </div>
                <div class="small text-muted mt-1">Toàn quyền quản lý sản phẩm, đơn hàng chi tiết, kho voucher, banner & bảo mật</div>
              </div>
              <div class="d-flex gap-2">
                <button class="btn btn-sm btn-dark rounded-pill px-3 shadow-sm" onclick="adminOpenAddProduct()">
                  <i class="bi bi-plus-lg me-1"></i> Thêm sản phẩm
                </button>
                <button class="btn btn-sm btn-outline-danger rounded-pill px-3" onclick="adminResetDefaultProducts()" title="Khôi phục dữ liệu ban đầu">
                  <i class="bi bi-arrow-counterclockwise"></i> Khôi phục gốc
                </button>
              </div>
            </div>

            <!-- Admin Sub-Navigation Pills -->
            <div class="d-flex align-items-center gap-2 mb-4 pb-2 overflow-auto adm-nav-pills-wrap" style="white-space: nowrap; -webkit-overflow-scrolling: touch;">
              <button type="button" class="adm-nav-pill active" id="admNavBtn-overview" onclick="switchAdminSec('overview')">
                <i class="bi bi-speedometer2"></i> Tổng quan KPIs
              </button>
              <button type="button" class="adm-nav-pill" id="admNavBtn-products" onclick="switchAdminSec('products')">
                <i class="bi bi-grid-3x3-gap-fill text-danger"></i> Quản lý Sản Phẩm & Đổi Ảnh
              </button>
              <button type="button" class="adm-nav-pill" id="admNavBtn-orders" onclick="switchAdminSec('orders')">
                <i class="bi bi-receipt-cutoff text-primary"></i> Quản lý Đơn Hàng (<span id="admNavOrdersCount">3</span>)
              </button>
              <button type="button" class="adm-nav-pill" id="admNavBtn-customers" onclick="switchAdminSec('customers')">
                <i class="bi bi-people-fill text-info"></i> Quản lý Khách Hàng (<span id="admNavCustCount">2</span>)
              </button>
              <button type="button" class="adm-nav-pill" id="admNavBtn-vouchers" onclick="switchAdminSec('vouchers')">
                <i class="bi bi-ticket-perforated-fill text-warning"></i> Kho Voucher Khuyến Mãi
              </button>
              <button type="button" class="adm-nav-pill" id="admNavBtn-banners" onclick="switchAdminSec('banners')">
                <i class="bi bi-images text-info"></i> Quản Lý Banner & Hero
              </button>
              <button type="button" class="adm-nav-pill" id="admNavBtn-store" onclick="switchAdminSec('store')">
                <i class="bi bi-gear-fill text-secondary"></i> Hotline & Showroom
              </button>
              <button type="button" class="adm-nav-pill" id="admNavBtn-security" onclick="switchAdminSec('security')">
                <i class="bi bi-shield-lock-fill text-success"></i> Bảo Mật & Đổi Mật Khẩu
              </button>
              <button type="button" class="adm-nav-pill" id="admNavBtn-supabase" onclick="switchAdminSec('supabase')">
                <i class="bi bi-cloud-check-fill text-primary"></i> Cloud Supabase
              </button>
            </div>

            <!-- SUB-SECTION 1: OVERVIEW & REAL KPIS -->
            <div id="admSec-overview" class="admin-sub-section">
              <div class="row g-3 mb-4">
                <div class="col-6 col-md-3">
                  <div class="p-3 bg-light rounded-4 border text-center h-100">
                    <div class="small text-muted text-uppercase fw-semibold" style="font-size: 0.7rem;">Doanh thu thực tế</div>
                    <div class="fs-4 fw-bold text-danger mt-1" id="admStatRevenue">3.415.000đ</div>
                    <div class="small text-muted" style="font-size: 0.72rem;">Tính từ các đơn hàng</div>
                  </div>
                </div>
                <div class="col-6 col-md-3">
                  <div class="p-3 bg-light rounded-4 border text-center h-100">
                    <div class="small text-muted text-uppercase fw-semibold" style="font-size: 0.7rem;">Đơn hàng toàn sàn</div>
                    <div class="fs-4 fw-bold text-primary mt-1" id="admStatOrders">3</div>
                    <div class="small text-muted" style="font-size: 0.72rem;">Đang cập nhật realtime</div>
                  </div>
                </div>
                <div class="col-6 col-md-3">
                  <div class="p-3 bg-light rounded-4 border text-center h-100">
                    <div class="small text-muted text-uppercase fw-semibold" style="font-size: 0.7rem;">Tổng sản phẩm</div>
                    <div class="fs-4 fw-bold text-dark mt-1" id="admStatProducts">49</div>
                    <div class="small text-muted" style="font-size: 0.72rem;">Đang bày bán online</div>
                  </div>
                </div>
                <div class="col-6 col-md-3">
                  <div class="p-3 bg-light rounded-4 border text-center h-100">
                    <div class="small text-muted text-uppercase fw-semibold" style="font-size: 0.7rem;">Kho Voucher VIP</div>
                    <div class="fs-4 fw-bold text-success mt-1" id="admStatVouchers">4</div>
                    <div class="small text-muted" style="font-size: 0.72rem;">Đang kích hoạt áp dụng</div>
                  </div>
                </div>
              </div>

              <!-- Quick action links -->
              <div class="card border rounded-4 p-3 bg-light mb-4">
                <div class="small fw-bold text-uppercase text-muted mb-2">Thao tác nhanh Quản Trị Viên:</div>
                <div class="d-flex flex-wrap gap-2">
                  <button class="btn btn-sm btn-dark rounded-pill px-3" onclick="adminOpenAddProduct()">
                    <i class="bi bi-plus-circle me-1"></i> Thêm sản phẩm mới
                  </button>
                  <button class="btn btn-sm btn-warning text-dark fw-bold rounded-pill px-3" onclick="adminOpenAddVoucher()">
                    <i class="bi bi-ticket-perforated me-1"></i> Tạo Voucher mới
                  </button>
                  <button class="btn btn-sm btn-outline-dark rounded-pill px-3" onclick="adminOpenHeroModal(0)">
                    <i class="bi bi-image me-1"></i> Thay đổi ảnh Banner Hero
                  </button>
                  <button class="btn btn-sm btn-outline-success rounded-pill px-3" onclick="switchAdminSec('security')">
                    <i class="bi bi-key me-1"></i> Đổi mật khẩu Admin
                  </button>
                </div>
              </div>
            </div>

            <!-- SUB-SECTION 2: PRODUCT MANAGEMENT & IMAGE CHANGER -->
            <div id="admSec-products" class="admin-sub-section d-none">
              <div class="d-flex justify-content-between align-items-center mb-3 flex-wrap gap-2">
                <h6 class="fw-bold font-serif m-0"><i class="bi bi-grid-3x3-gap-fill text-danger me-2"></i>Danh Sách & Quản Trị Sản Phẩm</h6>
                <div class="d-flex gap-2 flex-grow-1 justify-content-end" style="max-width: 480px;">
                  <select class="form-select form-select-sm" id="admCategoryFilter" onchange="adminFilterProducts()" style="max-width: 160px;">
                    <option value="all">Tất cả danh mục</option>
                    <option value="women">Thời trang Nữ</option>
                    <option value="men">Thời trang Nam</option>
                    <option value="accessories">Phụ kiện</option>
                  </select>
                  <div class="input-group">
                    <span class="input-group-text bg-light border-end-0"><i class="bi bi-search text-muted"></i></span>
                    <input type="text" class="form-control form-control-sm border-start-0" id="admSearchInput" placeholder="Tìm tên hoặc mã SP..." oninput="adminFilterProducts()">
                  </div>
                </div>
              </div>

              <div class="table-responsive" style="max-height: 480px; overflow-y: auto;">
                <table class="table table-hover align-middle m-0" id="adminProductsTable">
                  <thead class="table-dark small sticky-top">
                    <tr>
                      <th>Ảnh</th>
                      <th>Mã ID</th>
                      <th>Tên sản phẩm</th>
                      <th>Danh mục</th>
                      <th>Giá bán</th>
                      <th>Giá gốc</th>
                      <th>Kho</th>
                      <th class="text-center">Thao tác</th>
                    </tr>
                  </thead>
                  <tbody id="adminProductsBody" class="small">
                    <!-- Populated dynamically by script.js -->
                  </tbody>
                </table>
              </div>
            </div>

            <!-- SUB-SECTION 3: ACCURATE ITEMIZED ORDERS & STATUS UPDATER -->
            <div id="admSec-orders" class="admin-sub-section d-none">
              <div class="d-flex justify-content-between align-items-center mb-3 flex-wrap gap-2">
                <div>
                  <h6 class="fw-bold font-serif m-0"><i class="bi bi-receipt-cutoff text-primary me-2"></i>Quản Lý Đơn Hàng & Cập Nhật Trạng Thái</h6>
                  <span class="small text-muted">Hiển thị chính xác từng sản phẩm, số lượng, thumbnail và trạng thái xử lý</span>
                </div>
                <span class="badge bg-primary px-3 py-2 rounded-pill small">
                  <i class="bi bi-arrow-repeat me-1"></i> Tự động đồng bộ giỏ hàng
                </span>
              </div>

              <!-- Admin Orders Filter, Search & Export Bar -->
              <div class="card border rounded-3 p-3 bg-light mb-3 shadow-sm">
                <div class="d-flex justify-content-between align-items-center flex-wrap gap-2">
                  <div class="d-flex align-items-center gap-1.5 flex-wrap">
                    <button type="button" class="order-filter-pill active" onclick="adminFilterOrdersByStatus('all', this)">Tất cả</button>
                    <button type="button" class="order-filter-pill" onclick="adminFilterOrdersByStatus('Đang chuẩn bị', this)">Đang chuẩn bị</button>
                    <button type="button" class="order-filter-pill" onclick="adminFilterOrdersByStatus('Đang giao', this)">Đang giao hàng</button>
                    <button type="button" class="order-filter-pill" onclick="adminFilterOrdersByStatus('thành công', this)">Đã giao</button>
                    <button type="button" class="order-filter-pill" onclick="adminFilterOrdersByStatus('Đã hủy', this)">Đã hủy</button>
                  </div>
                  <div class="d-flex align-items-center gap-2 flex-wrap">
                    <div class="input-group input-group-sm" style="max-width: 250px;">
                      <span class="input-group-text bg-white border-end-0"><i class="bi bi-search text-muted"></i></span>
                      <input type="text" class="form-control bg-white border-start-0" id="admOrderSearchInput" placeholder="Tìm theo mã, tên, SĐT..." onkeyup="adminSearchOrders(this.value)">
                    </div>
                    <button type="button" class="btn btn-sm btn-outline-success rounded-pill px-3 fw-bold shadow-sm" onclick="adminExportOrdersCSV()" title="Xuất toàn bộ đơn hàng ra file Excel CSV">
                      <i class="bi bi-file-earmark-excel-fill me-1"></i> Xuất Excel (CSV)
                    </button>
                  </div>
                </div>
              </div>

              <div class="table-responsive">
                <table class="table align-middle m-0" id="adminOrdersTable">
                  <thead class="table-light small">
                    <tr>
                      <th>Mã đơn & Ngày</th>
                      <th>Khách hàng & Địa chỉ</th>
                      <th style="min-width: 240px;">Chi tiết sản phẩm trong đơn</th>
                      <th>Tổng tiền</th>
                      <th style="min-width: 170px;">Trạng thái đơn</th>
                      <th class="text-center">Thao tác</th>
                    </tr>
                  </thead>
                  <tbody id="adminOrdersBody" class="small">
                    <!-- Populated dynamically with accurate itemized rows by script.js -->
                  </tbody>
                </table>
              </div>
            </div>

            <!-- SUB-SECTION 3B: CUSTOMER & VIP MEMBERS CRM SUITE -->
            <div id="admSec-customers" class="admin-sub-section d-none">
              <!-- Section Title & Top Actions -->
              <div class="d-flex justify-content-between align-items-start align-items-md-center mb-4 flex-column flex-md-row gap-3">
                <div>
                  <div class="d-flex align-items-center gap-2 mb-1">
                    <span class="badge bg-info bg-opacity-10 text-info border border-info border-opacity-25 px-2.5 py-1 rounded-pill small fw-bold">
                      <i class="bi bi-people-fill me-1"></i> VELORA VIP CRM SUITE
                    </span>
                    <span class="badge bg-success bg-opacity-10 text-success border border-success border-opacity-25 px-2.5 py-1 rounded-pill small">
                      <span class="security-badge-pulse me-1"></span> Live Cloud Sync
                    </span>
                  </div>
                  <h5 class="fw-bold font-serif m-0 text-dark" style="font-size: 1.25rem;">Quản Lý Danh Sách Khách Hàng & Hội Viên VIP</h5>
                  <span class="small text-muted">Kiểm soát toàn diện hồ sơ hội viên, điểm thưởng tích lũy, đặc quyền hạng thẻ và lịch sử mua sắm cao cấp</span>
                </div>
                <div class="d-flex gap-2 flex-wrap align-items-center">
                  <button type="button" class="btn btn-warning text-dark btn-sm rounded-pill px-3.5 py-2 fw-bold shadow-xs d-flex align-items-center gap-1.5" onclick="adminOpenAddCustomerModal()">
                    <i class="bi bi-person-plus-fill"></i> <span>+ Thêm Hội Viên VIP Mới</span>
                  </button>
                  <button type="button" class="btn btn-outline-success btn-sm rounded-pill px-3.5 py-2 fw-semibold d-flex align-items-center gap-1.5 shadow-xs" onclick="adminExportCustomersCSV()" title="Xuất dữ liệu khách hàng ra file Excel / CSV">
                    <i class="bi bi-file-earmark-spreadsheet-fill text-success"></i> <span>Xuất CSV</span>
                  </button>
                  <button type="button" class="btn btn-outline-secondary btn-sm rounded-pill px-3 py-2 shadow-xs" onclick="adminRenderCustomersTable()" title="Làm mới dữ liệu từ Cloud">
                    <i class="bi bi-arrow-clockwise"></i>
                  </button>
                </div>
              </div>

              <!-- 4 Luxury CRM Metric Cards -->
              <div class="row g-3 mb-4">
                <div class="col-xl-3 col-sm-6">
                  <div class="card border rounded-4 p-3.5 bg-white shadow-xs h-100 position-relative overflow-hidden crm-kpi-card">
                    <div class="d-flex align-items-center justify-content-between mb-2">
                      <span class="small text-muted fw-bold text-uppercase" style="font-size: 0.72rem; letter-spacing: 0.04em;">Tổng Hội Viên CRM</span>
                      <div class="rounded-circle bg-primary bg-opacity-10 text-primary d-flex align-items-center justify-content-center" style="width: 38px; height: 38px;">
                        <i class="bi bi-people-fill fs-5"></i>
                      </div>
                    </div>
                    <div class="h3 fw-bold font-serif text-dark m-0" id="admStatTotalUsers">0</div>
                    <div class="d-flex align-items-center gap-1.5 mt-2 small text-muted" style="font-size: 0.75rem;">
                      <span class="badge bg-primary bg-opacity-10 text-primary px-2 py-0.5 rounded-pill"><i class="bi bi-database-check me-1"></i>Realtime</span>
                      <span>Đang hoạt động trên hệ thống</span>
                    </div>
                  </div>
                </div>

                <div class="col-xl-3 col-sm-6">
                  <div class="card border rounded-4 p-3.5 bg-white shadow-xs h-100 position-relative overflow-hidden crm-kpi-card">
                    <div class="d-flex align-items-center justify-content-between mb-2">
                      <span class="small text-muted fw-bold text-uppercase" style="font-size: 0.72rem; letter-spacing: 0.04em;">Hội Viên Hạng VIP</span>
                      <div class="rounded-circle bg-warning bg-opacity-20 text-warning d-flex align-items-center justify-content-center" style="width: 38px; height: 38px;">
                        <i class="bi bi-gem fs-5"></i>
                      </div>
                    </div>
                    <div class="h3 fw-bold font-serif text-warning m-0" id="admStatVipUsers">0</div>
                    <div class="d-flex align-items-center gap-1.5 mt-2 small text-muted" style="font-size: 0.75rem;">
                      <span class="badge bg-warning bg-opacity-15 text-dark px-2 py-0.5 rounded-pill"><i class="bi bi-stars me-1"></i>Gold & Diamond</span>
                      <span>Khách hàng thân thiết</span>
                    </div>
                  </div>
                </div>

                <div class="col-xl-3 col-sm-6">
                  <div class="card border rounded-4 p-3.5 bg-white shadow-xs h-100 position-relative overflow-hidden crm-kpi-card">
                    <div class="d-flex align-items-center justify-content-between mb-2">
                      <span class="small text-muted fw-bold text-uppercase" style="font-size: 0.72rem; letter-spacing: 0.04em;">Điểm Thưởng Lưu Hành</span>
                      <div class="rounded-circle bg-info bg-opacity-10 text-info d-flex align-items-center justify-content-center" style="width: 38px; height: 38px;">
                        <i class="bi bi-award-fill fs-5"></i>
                      </div>
                    </div>
                    <div class="h3 fw-bold font-serif text-dark m-0"><span id="admStatTotalPoints">0</span> <span class="fs-6 fw-normal text-muted">pts</span></div>
                    <div class="d-flex align-items-center gap-1.5 mt-2 small text-muted" style="font-size: 0.75rem;">
                      <span class="badge bg-info bg-opacity-10 text-info px-2 py-0.5 rounded-pill"><i class="bi bi-gift-fill me-1"></i>Quy đổi</span>
                      <span>Sẵn sàng đổi voucher giảm giá</span>
                    </div>
                  </div>
                </div>

                <div class="col-xl-3 col-sm-6">
                  <div class="card border rounded-4 p-3.5 bg-white shadow-xs h-100 position-relative overflow-hidden crm-kpi-card">
                    <div class="d-flex align-items-center justify-content-between mb-2">
                      <span class="small text-muted fw-bold text-uppercase" style="font-size: 0.72rem; letter-spacing: 0.04em;">Doanh Thu Từ Hội Viên</span>
                      <div class="rounded-circle bg-success bg-opacity-10 text-success d-flex align-items-center justify-content-center" style="width: 38px; height: 38px;">
                        <i class="bi bi-wallet2 fs-5"></i>
                      </div>
                    </div>
                    <div class="h3 fw-bold font-serif text-success m-0" id="admStatTotalSpent">0đ</div>
                    <div class="d-flex align-items-center gap-1.5 mt-2 small text-muted" style="font-size: 0.75rem;">
                      <span class="badge bg-success bg-opacity-10 text-success px-2 py-0.5 rounded-pill"><i class="bi bi-check-circle-fill me-1"></i>Đã thanh toán</span>
                      <span>Tổng giá trị đơn hoàn tất</span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Customer Filter, Search & Segment Bar -->
              <div class="card border rounded-4 p-3 bg-white mb-3 shadow-xs">
                <div class="d-flex justify-content-between align-items-center flex-wrap gap-2.5">
                  <div class="d-flex align-items-center gap-2 flex-wrap">
                    <button type="button" class="order-filter-pill active" onclick="adminFilterCustomers('all', this)">
                      Tất cả (<span id="custFilterCountAll">0</span>)
                    </button>
                    <button type="button" class="order-filter-pill" onclick="adminFilterCustomers('DIAMOND', this)">
                      <i class="bi bi-gem text-danger me-1"></i> Kim Cương (<span id="custFilterCountDiamond">0</span>)
                    </button>
                    <button type="button" class="order-filter-pill" onclick="adminFilterCustomers('GOLD', this)">
                      <i class="bi bi-award-fill text-warning me-1"></i> VIP Gold (<span id="custFilterCountGold">0</span>)
                    </button>
                    <button type="button" class="order-filter-pill" onclick="adminFilterCustomers('SILVER', this)">
                      Silver (<span id="custFilterCountSilver">0</span>)
                    </button>
                    <button type="button" class="order-filter-pill" onclick="adminFilterCustomers('MỚI', this)">
                      Mới gia nhập (<span id="custFilterCountNew">0</span>)
                    </button>
                  </div>
                  <div class="input-group input-group-sm" style="max-width: 280px;">
                    <span class="input-group-text bg-light border-end-0 px-2.5"><i class="bi bi-search text-muted"></i></span>
                    <input type="text" class="form-control bg-light border-start-0 py-2" id="admCustomerSearchInput" placeholder="Tìm tên, email, SĐT..." onkeyup="adminSearchCustomers(this.value)">
                  </div>
                </div>
              </div>

              <!-- Customer Table with Luxury Polish -->
              <div class="table-responsive bg-white rounded-4 border shadow-xs overflow-hidden">
                <table class="table table-hover align-middle mb-0">
                  <thead style="background: #18181b; color: #f4f4f5;" class="small text-uppercase">
                    <tr>
                      <th class="ps-4 py-3 text-white-50" style="font-size: 0.72rem; letter-spacing: 0.05em;">Hội Viên VIP</th>
                      <th class="text-white-50" style="font-size: 0.72rem; letter-spacing: 0.05em;">Thông Tin Liên Hệ</th>
                      <th class="text-white-50" style="font-size: 0.72rem; letter-spacing: 0.05em;">Hạng Thẻ & Đặc Quyền</th>
                      <th class="text-white-50" style="font-size: 0.72rem; letter-spacing: 0.05em;">Điểm Thưởng</th>
                      <th class="text-white-50" style="font-size: 0.72rem; letter-spacing: 0.05em;">Lịch Sử Đơn Hàng</th>
                      <th class="text-white-50" style="font-size: 0.72rem; letter-spacing: 0.05em;">Trạng Thái</th>
                      <th class="text-end pe-4 text-white-50" style="font-size: 0.72rem; letter-spacing: 0.05em;">Thao Tác Quản Trị</th>
                    </tr>
                  </thead>
                  <tbody id="adminCustomersBody">
                    <!-- Populated dynamically by script.js adminRenderCustomersTable() -->
                  </tbody>
                </table>
              </div>
            </div>

            <!-- SUB-SECTION 4: KHO VOUCHER & TẠO VOUCHER MỚI -->
            <div id="admSec-vouchers" class="admin-sub-section d-none">
              <div class="d-flex justify-content-between align-items-center mb-3 flex-wrap gap-2">
                <div>
                  <h6 class="fw-bold font-serif m-0"><i class="bi bi-ticket-perforated-fill text-warning me-2"></i>Quản Lý Kho Voucher & Mã Khuyến Mãi</h6>
                  <span class="small text-muted">Admin có thể thêm mới voucher, thiết lập % giảm hoặc số tiền, HSD và điều kiện</span>
                </div>
                <button class="btn btn-sm btn-warning text-dark fw-bold rounded-pill px-3 shadow-sm" onclick="adminOpenAddVoucher()">
                  <i class="bi bi-plus-lg me-1"></i> Thêm Voucher Mới
                </button>
              </div>

              <div class="table-responsive">
                <table class="table align-middle m-0" id="adminVouchersTable">
                  <thead class="table-light small">
                    <tr>
                      <th>Mã Voucher</th>
                      <th>Loại ưu đãi</th>
                      <th>Mức giảm</th>
                      <th>Đơn tối thiểu</th>
                      <th>Hạn sử dụng</th>
                      <th>Mô tả áp dụng</th>
                      <th class="text-center">Thao tác</th>
                    </tr>
                  </thead>
                  <tbody id="adminVouchersBody" class="small">
                    <!-- Populated dynamically by script.js -->
                  </tbody>
                </table>
              </div>
            </div>

            <!-- SUB-SECTION 5: HERO BANNER & IMAGE MANAGER -->
            <div id="admSec-banners" class="admin-sub-section d-none">
              <!-- Header & Quick Actions -->
              <div class="d-flex justify-content-between align-items-center mb-4 pb-2 border-bottom flex-wrap gap-2">
                <div>
                  <h6 class="fw-bold font-serif m-0 fs-5"><i class="bi bi-images text-info me-2"></i>Trung Tâm Quản Trị Giao Diện & Hình Ảnh Website</h6>
                  <span class="small text-muted">Tùy biến toàn bộ banner lớn, ảnh slider, ảnh giới thiệu ngành hàng, lookbook và thanh thông báo</span>
                </div>
                <div class="d-flex gap-2">
                  <button type="button" class="btn btn-sm btn-outline-danger rounded-pill px-3" onclick="adminResetDefaultUI()" title="Khôi phục toàn bộ ảnh giao diện gốc">
                    <i class="bi bi-arrow-counterclockwise me-1"></i> Khôi phục ảnh gốc
                  </button>
                  <a href="index.html" target="_blank" class="btn btn-sm btn-dark rounded-pill px-3 shadow-sm">
                    <i class="bi bi-box-arrow-up-right me-1"></i> Xem Trang Chủ
                  </a>
                </div>
              </div>

              <!-- STUDIO 1: HERO CAROUSEL SLIDES (3 ẢNH LỚN TRANG CHỦ) -->
              <div class="card border rounded-4 p-3 mb-4 shadow-sm bg-white">
                <div class="d-flex justify-content-between align-items-center mb-3">
                  <div>
                    <h6 class="fw-bold font-serif m-0 text-dark">
                      <i class="bi bi-collection-play-fill text-primary me-2"></i>1. Slider Hero Trang Chủ (3 Slide Banner Lớn)
                    </h6>
                    <span class="small text-muted">Hiển thị đầu trang chủ kèm hiệu ứng phóng to Ken-Burns</span>
                  </div>
                </div>
                <div class="row g-3" id="adminHeroCardsList">
                  <!-- Populated dynamically by script.js adminRenderHeroBanners() -->
                </div>
              </div>

              <!-- STUDIO 2: ẢNH LỚN GIỚI THIỆU NGÀNH HÀNG (NAM, NỮ, PHỤ KIỆN) -->
              <div class="card border rounded-4 p-3 mb-4 shadow-sm bg-white">
                <div class="d-flex justify-content-between align-items-center mb-3">
                  <div>
                    <h6 class="fw-bold font-serif m-0 text-dark">
                      <i class="bi bi-grid-fill text-warning me-2"></i>2. Ảnh Lớn Giới Thiệu Ngành Hàng (Category Showcase Quick Banners)
                    </h6>
                    <span class="small text-muted">3 Card ảnh lớn nổi bật giới thiệu Thời Trang Nam, Nữ và Phụ Kiện</span>
                  </div>
                </div>
                <div class="row g-3" id="adminCategoryBannersList">
                  <!-- Populated dynamically by script.js adminRenderCategoryBanners() -->
                </div>
              </div>

              <!-- STUDIO 3: VELORA LOOKBOOK STUDIO (4 BỨC ẢNH NGHỆ THUẬT) -->
              <div class="card border rounded-4 p-3 mb-4 shadow-sm bg-white">
                <div class="d-flex justify-content-between align-items-center mb-3">
                  <div>
                    <h6 class="fw-bold font-serif m-0 text-dark">
                      <i class="bi bi-camera-reels-fill text-danger me-2"></i>3. Velora Fashion Lookbook (4 Bức Ảnh Cảm Hứng & Set Đồ)
                    </h6>
                    <span class="small text-muted">Bộ ảnh thời trang nghệ thuật tương tác với hotspot và xem set đồ trọn gói</span>
                  </div>
                </div>
                <div class="row g-3" id="adminLookbookMediaList">
                  <!-- Populated dynamically by script.js adminRenderLookbookMedia() -->
                </div>
              </div>

              <!-- STUDIO 4: THANH THÔNG BÁO TOÀN TRANG (TOP ANNOUNCEMENT BAR) -->
              <div class="card border rounded-4 p-3 mb-3 shadow-sm bg-white">
                <div class="d-flex justify-content-between align-items-center mb-2">
                  <h6 class="fw-bold font-serif m-0 text-dark">
                    <i class="bi bi-megaphone-fill text-success me-2"></i>4. Thanh Chạy Chữ Thông Báo Toàn Website
                  </h6>
                </div>
                <p class="small text-muted mb-3">Nội dung thanh thông báo trên cùng xuất hiện ở toàn bộ 8 trang của hệ thống</p>
                <form onsubmit="adminSaveStoreConfig(event)">
                  <div class="input-group mb-2">
                    <span class="input-group-text bg-light"><i class="bi bi-chat-left-dots text-muted"></i></span>
                    <input type="text" class="form-control" id="admConfigAnnouncement" placeholder="Ví dụ: Miễn phí giao hàng đơn từ 500k • Nhập mã VELORA10 giảm 10%">
                    <button type="submit" class="btn btn-dark px-4 fw-bold">
                      <i class="bi bi-check2-circle me-1"></i> Lưu & Áp Dụng Toàn Trang
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <!-- SUB-SECTION 6: STORE CONFIG & SHOWROOM -->
            <div id="admSec-store" class="admin-sub-section d-none">
              <div class="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2">
                <div>
                  <h5 class="fw-bold font-serif m-0 text-dark"><i class="bi bi-gear-fill text-warning me-2"></i>Cấu Hình Kênh Liên Hệ & Hệ Thống Showroom</h5>
                  <span class="small text-muted">Toàn quyền tùy chỉnh Hotline CSKH, Email hỗ trợ, Showroom Flagship và Thanh thông báo ưu đãi trực tiếp cho toàn bộ trang web</span>
                </div>
                <div class="d-flex gap-2">
                  <button type="button" class="btn btn-outline-secondary btn-sm rounded-pill px-3 shadow-xs" onclick="adminResetStoreConfig()">
                    <i class="bi bi-arrow-counterclockwise me-1"></i> Khôi phục mặc định
                  </button>
                  <a href="index.html" target="_blank" class="btn btn-outline-dark btn-sm rounded-pill px-3 shadow-xs">
                    <i class="bi bi-box-arrow-up-right me-1"></i> Xem trang chủ
                  </a>
                </div>
              </div>

              <!-- Interactive Live Preview Card (Mô Phỏng Trực Quan Khách Hàng) -->
              <div class="card border rounded-4 p-4 mb-4 store-preview-card shadow-sm">
                <div class="d-flex justify-content-between align-items-center mb-3 flex-wrap gap-2">
                  <div class="small fw-bold text-uppercase text-dark d-flex align-items-center gap-2" style="font-size: 0.76rem; letter-spacing: 0.05em;">
                    <span class="security-badge-pulse"></span>
                    <span>Mô phỏng hiển thị trực tiếp cho khách hàng trên website:</span>
                  </div>
                  <span class="badge bg-success bg-opacity-10 text-success border border-success border-opacity-25 rounded-pill px-3 py-1.5 small fw-semibold">
                    <i class="bi bi-check-circle-fill me-1"></i> Trực tuyến 24/7
                  </span>
                </div>
                <div class="row g-3">
                  <div class="col-lg-4 col-md-6">
                    <div class="p-3 bg-white rounded-4 border shadow-xs d-flex align-items-center justify-content-between h-100 admin-preview-pill">
                      <div>
                        <div class="small text-muted text-uppercase fw-semibold" style="font-size: 0.7rem;">Tổng đài Hotline CSKH:</div>
                        <div class="fw-bold text-dark fs-5 font-serif" id="previewHotlineDisplay">1900 8899</div>
                        <div class="small text-muted" id="previewHoursDisplay" style="font-size: 0.75rem;">(08:30 - 22:00)</div>
                      </div>
                      <a href="tel:19008899" id="previewHotlineBtn" class="btn btn-sm btn-outline-danger rounded-circle p-2.5 shadow-xs" title="Gọi thử hotline">
                        <i class="bi bi-telephone-fill fs-6"></i>
                      </a>
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-6">
                    <div class="p-3 bg-white rounded-4 border shadow-xs d-flex align-items-center justify-content-between h-100 admin-preview-pill">
                      <div style="min-width: 0;">
                        <div class="small text-muted text-uppercase fw-semibold" style="font-size: 0.7rem;">Hộp thư hỗ trợ:</div>
                        <div class="fw-bold text-dark text-truncate fs-6" id="previewEmailDisplay">cskh@velorafashion.vn</div>
                        <div class="small text-success fw-semibold" style="font-size: 0.75rem;"><i class="bi bi-lightning-charge-fill me-0.5"></i> Phản hồi trong 15p</div>
                      </div>
                      <a href="mailto:cskh@velorafashion.vn" id="previewEmailBtn" class="btn btn-sm btn-outline-primary rounded-circle p-2.5 ms-2 flex-shrink-0 shadow-xs" title="Gửi thử email">
                        <i class="bi bi-envelope-fill fs-6"></i>
                      </a>
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-12">
                    <div class="p-3 bg-white rounded-4 border shadow-xs d-flex align-items-center justify-content-between h-100 admin-preview-pill">
                      <div style="min-width: 0;">
                        <div class="small text-muted text-uppercase fw-semibold" style="font-size: 0.7rem;">Showroom Flagship:</div>
                        <div class="fw-bold text-dark text-truncate fs-6" id="previewAddressDisplay">123 Đường Nam Kỳ Khởi Nghĩa, Quận 1, TP. HCM</div>
                        <div class="small text-muted" style="font-size: 0.75rem;"><i class="bi bi-geo-alt-fill text-danger me-0.5"></i> Trụ sở chính & Flagship Store</div>
                      </div>
                      <button type="button" class="btn btn-sm btn-outline-secondary rounded-circle p-2.5 ms-2 flex-shrink-0 shadow-xs" onclick="copyStoreAddress()" title="Sao chép địa chỉ">
                        <i class="bi bi-clipboard fs-6"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Store Configuration Form -->
              <div class="card border rounded-4 p-4 p-md-4.5 bg-white shadow-sm mb-4">
                <div class="fw-bold fs-6 text-dark mb-3 pb-2 border-bottom d-flex align-items-center gap-2">
                  <i class="bi bi-sliders text-primary"></i> <span>Biểu Mẫu Chỉnh Sửa Dữ Liệu Thông Tin Thương Hiệu</span>
                </div>
                <form id="adminStoreConfigForm" onsubmit="adminSaveStoreConfig(event)">
                  <div class="row g-3.5">
                    <div class="col-md-4">
                      <label class="form-label small fw-bold text-dark">Số Hotline Tổng Đài <span class="text-danger">*</span></label>
                      <div class="input-group">
                        <span class="input-group-text bg-light border-end-0"><i class="bi bi-telephone-fill text-danger"></i></span>
                        <input type="text" class="form-control border-start-0" id="admConfigHotline" value="1900 8899" required placeholder="Ví dụ: 1900 8899">
                      </div>
                    </div>
                    <div class="col-md-4">
                      <label class="form-label small fw-bold text-dark">Khung Giờ Phục Vụ</label>
                      <div class="input-group">
                        <span class="input-group-text bg-light border-end-0"><i class="bi bi-clock-fill text-warning"></i></span>
                        <input type="text" class="form-control border-start-0" id="admConfigHotlineHours" value="(08:30 - 22:00)" placeholder="(08:30 - 22:00)">
                      </div>
                    </div>
                    <div class="col-md-4">
                      <label class="form-label small fw-bold text-dark">Hộp Thư Điện Tử (Email) <span class="text-danger">*</span></label>
                      <div class="input-group">
                        <span class="input-group-text bg-light border-end-0"><i class="bi bi-envelope-fill text-primary"></i></span>
                        <input type="email" class="form-control border-start-0" id="admConfigEmail" value="cskh@velorafashion.vn" required placeholder="cskh@velorafashion.vn">
                      </div>
                    </div>
                    <div class="col-12">
                      <label class="form-label small fw-bold text-dark">Địa Chỉ Showroom Flagship & Trụ Sở Điều Hành <span class="text-danger">*</span></label>
                      <div class="input-group">
                        <span class="input-group-text bg-light border-end-0"><i class="bi bi-geo-alt-fill text-danger"></i></span>
                        <input type="text" class="form-control border-start-0" id="admConfigAddress" value="123 Đường Nam Kỳ Khởi Nghĩa, Quận 1, TP. HCM" required placeholder="Số nhà, tên đường, phường/xã, quận/huyện, tỉnh/thành">
                      </div>
                    </div>
                    <div class="col-12">
                      <label class="form-label small fw-bold text-dark">Nội Dung Thanh Thông Báo Toàn Sàn (Top Announcement Bar)</label>
                      <div class="input-group">
                        <span class="input-group-text bg-light border-end-0"><i class="bi bi-megaphone-fill text-warning"></i></span>
                        <input type="text" class="form-control border-start-0" id="admConfigAnnouncement" value="Miễn phí giao hàng đơn từ 500.000đ • Nhập mã VELORA10 giảm 10%" required>
                      </div>
                      <div class="form-text small" style="font-size: 0.75rem;">Thông điệp này sẽ chạy trên thanh màu đen trên cùng của toàn bộ 8 trang web VELORA.</div>
                    </div>
                  </div>
                  <div class="mt-4 pt-3 border-top d-flex justify-content-between align-items-center flex-wrap gap-2">
                    <span class="small text-muted"><i class="bi bi-shield-check text-success me-1"></i> Dữ liệu tự động lưu trữ và đồng bộ đám mây Supabase ngay khi lưu.</span>
                    <button type="submit" class="btn btn-dark rounded-pill px-4 py-2.5 fw-bold shadow-sm d-inline-flex align-items-center gap-1.5">
                      <i class="bi bi-check-lg"></i> <span>Lưu Cấu Hình Cửa Hàng & Đồng Bộ Toàn Bộ Web</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <!-- SUB-SECTION 7: SECURITY & CHANGE PASSWORD -->
            <div id="admSec-security" class="admin-sub-section d-none">
              <div class="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2">
                <div>
                  <h5 class="fw-bold font-serif m-0 text-dark"><i class="bi bi-shield-lock-fill text-success me-2"></i>Bảo Mật Hệ Thống & Thay Đổi Mật Khẩu Admin</h5>
                  <span class="small text-muted">Bảo mật cấp cao dành riêng cho tài khoản quản trị tối cao với mã hóa bảo vệ phiên làm việc</span>
                </div>
                <span class="badge bg-success bg-opacity-10 text-success border border-success border-opacity-25 px-3 py-2 rounded-pill small fw-semibold d-inline-flex align-items-center gap-1.5 shadow-2xs">
                  <span class="security-badge-pulse"></span> Bảo Mật Đã Kích Hoạt
                </span>
              </div>

              <!-- Security Overview Cards -->
              <div class="row g-3 mb-4">
                <div class="col-md-4">
                  <div class="p-3.5 bg-white border rounded-4 shadow-xs h-100">
                    <div class="d-flex align-items-center gap-2 mb-2">
                      <div class="rounded-circle bg-success bg-opacity-10 text-success d-flex align-items-center justify-content-center" style="width: 34px; height: 34px;">
                        <i class="bi bi-key-fill"></i>
                      </div>
                      <div class="fw-bold text-dark small">Mật Khẩu Phiên</div>
                    </div>
                    <div class="small text-muted">Bảo vệ tài khoản quản trị, tự động khóa sau khi đăng xuất.</div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="p-3.5 bg-white border rounded-4 shadow-xs h-100">
                    <div class="d-flex align-items-center gap-2 mb-2">
                      <div class="rounded-circle bg-primary bg-opacity-10 text-primary d-flex align-items-center justify-content-center" style="width: 34px; height: 34px;">
                        <i class="bi bi-database-lock"></i>
                      </div>
                      <div class="fw-bold text-dark small">Cloud Encrypted</div>
                    </div>
                    <div class="small text-muted">Đồng bộ mã hóa 2 chiều với bảng <code>public.users</code> trên Supabase.</div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="p-3.5 bg-white border rounded-4 shadow-xs h-100">
                    <div class="d-flex align-items-center gap-2 mb-2">
                      <div class="rounded-circle bg-warning bg-opacity-10 text-warning d-flex align-items-center justify-content-center" style="width: 34px; height: 34px;">
                        <i class="bi bi-person-badge-fill"></i>
                      </div>
                      <div class="fw-bold text-dark small">Quyền Hạn Tối Cao</div>
                    </div>
                    <div class="small text-muted">Toàn quyền điều khiển danh mục, đơn hàng và kho lưu trữ giao diện.</div>
                  </div>
                </div>
              </div>

              <!-- Change Password Form -->
              <div class="card border rounded-4 p-4 p-md-4.5 bg-white mb-4 shadow-sm">
                <div class="fw-bold fs-6 text-dark mb-3 pb-2 border-bottom d-flex align-items-center gap-2">
                  <i class="bi bi-lock-fill text-warning"></i> <span>Thay Đổi Mật Khẩu Quản Trị Viên</span>
                </div>
                <form id="adminChangePwdForm" onsubmit="adminSubmitChangePassword(event)">
                  <div class="row g-3.5" style="max-width: 650px;">
                    <div class="col-12">
                      <label class="form-label small fw-bold text-dark">Mật khẩu hiện tại <span class="text-danger">*</span></label>
                      <div class="input-group">
                        <span class="input-group-text bg-light border-end-0"><i class="bi bi-key text-muted"></i></span>
                        <input type="password" class="form-control border-start-0 border-end-0" id="admOldPassword" required placeholder="Nhập mật khẩu cũ (mặc định: admin123)">
                        <button class="btn btn-outline-secondary border-start-0" type="button" onclick="togglePasswordVisibility('admOldPassword', this)">
                          <i class="bi bi-eye"></i>
                        </button>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <label class="form-label small fw-bold text-dark">Mật khẩu mới (tối thiểu 6 ký tự) <span class="text-danger">*</span></label>
                      <div class="input-group">
                        <span class="input-group-text bg-light border-end-0"><i class="bi bi-lock text-muted"></i></span>
                        <input type="password" class="form-control border-start-0 border-end-0" id="admNewPassword" required minlength="6" placeholder="Mật khẩu mới...">
                        <button class="btn btn-outline-secondary border-start-0" type="button" onclick="togglePasswordVisibility('admNewPassword', this)">
                          <i class="bi bi-eye"></i>
                        </button>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <label class="form-label small fw-bold text-dark">Xác nhận mật khẩu mới <span class="text-danger">*</span></label>
                      <div class="input-group">
                        <span class="input-group-text bg-light border-end-0"><i class="bi bi-lock-fill text-muted"></i></span>
                        <input type="password" class="form-control border-start-0 border-end-0" id="admConfirmPassword" required minlength="6" placeholder="Nhập lại mật khẩu mới...">
                        <button class="btn btn-outline-secondary border-start-0" type="button" onclick="togglePasswordVisibility('admConfirmPassword', this)">
                          <i class="bi bi-eye"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="mt-4 pt-3 border-top d-flex flex-wrap gap-2">
                    <button type="submit" class="btn btn-dark rounded-pill px-4 py-2.5 fw-bold shadow-sm d-inline-flex align-items-center gap-1.5">
                      <i class="bi bi-shield-check"></i> <span>Cập Nhật Mật Khẩu Admin</span>
                    </button>
                    <button type="button" class="btn btn-outline-danger rounded-pill px-3.5 py-2.5 d-inline-flex align-items-center gap-1.5" onclick="handleLogout()">
                      <i class="bi bi-box-arrow-right"></i> <span>Đăng xuất & Khóa phiên an toàn</span>
                    </button>
                  </div>
                </form>
              </div>

              <!-- Security Information Note -->
              <div class="p-4 bg-light rounded-4 border">
                <div class="small fw-bold text-dark mb-2 d-flex align-items-center gap-2">
                  <i class="bi bi-shield-shaded text-primary fs-5"></i> <span>Tiêu chuẩn bảo mật tài khoản quản trị Velora Luxury:</span>
                </div>
                <div class="small text-muted lh-base">
                  • <b>Khóa phiên tự động</b>: Khi đăng xuất, mọi yêu cầu truy cập lại khu vực Quản Trị Viên đều bắt buộc nhập lại mật khẩu.<br>
                  • <b>Phân tách vai trò</b>: Người dùng phổ thông trên máy khác không thể tự ý chuyển sang quyền Admin mà không có mật khẩu hợp lệ.<br>
                  • <b>Đồng bộ đám mây</b>: Mật khẩu mới sẽ được mã hóa và cập nhật ngay lập tức lên cơ sở dữ liệu Supabase.
                </div>
              </div>
            </div>

            <!-- SUB SECTION 9: CƠ SỞ DỮ LIỆU ĐÁM MÂY SUPABASE (POSTGRESQL CLOUD) -->
            <div id="admSec-supabase" class="admin-sub-section d-none">
              <div class="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2">
                <div>
                  <h5 class="fw-bold font-serif m-0 text-dark"><i class="bi bi-cloud-check-fill text-primary me-2"></i>Cơ Sở Dữ Liệu Đám Mây Supabase Cloud (PostgreSQL)</h5>
                  <span class="small text-muted">Lưu trữ sản phẩm, đơn hàng, tài khoản hội viên và voucher vĩnh viễn trên Supabase Cloud</span>
                </div>
                <div id="supabaseStatusBadge">
                  <span class="badge bg-success bg-opacity-10 text-success border border-success border-opacity-25 px-3 py-2 rounded-pill small fw-semibold d-inline-flex align-items-center gap-1.5 shadow-2xs">
                    <span class="security-badge-pulse"></span> Đã kết nối Supabase Cloud (dan12)
                  </span>
                </div>
              </div>

              <!-- Project Information Card -->
              <div class="card border rounded-4 p-4 p-md-4.5 bg-white mb-4 shadow-sm">
                <div class="fw-bold fs-6 text-dark mb-3 pb-2 border-bottom d-flex align-items-center gap-2">
                  <i class="bi bi-hdd-network text-info"></i> <span>Thông Số Kết Nối Supabase Architecture</span>
                </div>
                <div class="row g-3.5">
                  <div class="col-md-6">
                    <label class="form-label small fw-bold text-muted text-uppercase" style="font-size: 0.72rem;">Project ID / Tên dự án</label>
                    <div class="p-2.5 bg-light border rounded-3 fw-bold font-monospace small d-flex justify-content-between align-items-center">
                      <span>yekokpbulmfugxaqjosc (dan12)</span>
                      <a href="https://supabase.com/dashboard/project/yekokpbulmfugxaqjosc" target="_blank" class="badge bg-primary text-decoration-none px-2.5 py-1.5 shadow-xs">
                        Mở Dashboard <i class="bi bi-box-arrow-up-right ms-1"></i>
                      </a>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <label class="form-label small fw-bold text-muted text-uppercase" style="font-size: 0.72rem;">Project URL (REST Endpoint)</label>
                    <div class="p-2.5 bg-light border rounded-3 font-monospace small text-primary fw-semibold d-flex justify-content-between align-items-center text-truncate">
                      <span class="text-truncate">https://yekokpbulmfugxaqjosc.supabase.co</span>
                      <button class="btn btn-sm btn-link text-muted p-0 ms-2" type="button" onclick="navigator.clipboard.writeText('https://yekokpbulmfugxaqjosc.supabase.co'); showToast('Đã sao chép Project URL!', 'info');" title="Sao chép URL">
                        <i class="bi bi-clipboard"></i>
                      </button>
                    </div>
                  </div>

                  <div class="col-12">
                    <label class="form-label small fw-bold text-muted text-uppercase" style="font-size: 0.72rem;">Public Anon Key (Client SDK)</label>
                    <div class="input-group">
                      <span class="input-group-text bg-light"><i class="bi bi-shield-lock text-success"></i></span>
                      <input type="password" class="form-control font-monospace small bg-light" id="admSupabaseKeyInput" value="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inlla29rcGJ1bG1mdWd4YXFqb3NjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjMxMTc4MjcsImV4cCI6MjA3ODY5MzgyN30.S4_i0E-5j63d0-W18zJ613lX3Q8G26224eC9520QZ7Q" readonly>
                      <button class="btn btn-outline-secondary" type="button" onclick="togglePasswordVisibility('admSupabaseKeyInput', this)">
                        <i class="bi bi-eye"></i>
                      </button>
                      <button class="btn btn-dark" type="button" onclick="navigator.clipboard.writeText(document.getElementById('admSupabaseKeyInput').value); showToast('Đã copy Anon Key vào bộ nhớ tạm!', 'success');">
                        <i class="bi bi-clipboard me-1"></i> Copy Key
                      </button>
                    </div>
                  </div>
                </div>

                <div class="mt-4 pt-3 border-top d-flex flex-wrap gap-2">
                  <button type="button" class="btn btn-dark btn-sm rounded-pill px-3.5 py-2 fw-bold shadow-xs d-inline-flex align-items-center gap-1.5" onclick="testSupabaseConnection()">
                    <i class="bi bi-arrow-repeat"></i> Kiểm Tra Kết Nối Realtime
                  </button>
                  <button type="button" class="btn btn-outline-primary btn-sm rounded-pill px-3.5 py-2 fw-semibold d-inline-flex align-items-center gap-1.5" onclick="syncLocalToSupabase()">
                    <i class="bi bi-cloud-arrow-up-fill"></i> Đẩy Toàn Bộ Dữ Liệu Lên Cloud
                  </button>
                  <button type="button" class="btn btn-outline-success btn-sm rounded-pill px-3.5 py-2 fw-semibold d-inline-flex align-items-center gap-1.5" onclick="pullFromSupabase()">
                    <i class="bi bi-cloud-arrow-down-fill"></i> Tải Dữ Liệu Mới Nhất Từ Cloud
                  </button>
                </div>
              </div>

              <!-- Supabase Status & Live Tables Info -->
              <div class="card border rounded-4 p-4 p-md-4.5 bg-white shadow-sm">
                <div class="d-flex justify-content-between align-items-center mb-3 flex-wrap gap-2">
                  <div class="fw-bold fs-6 text-dark d-flex align-items-center gap-2">
                    <i class="bi bi-database-check text-success fs-5"></i> <span>Trạng Thái 5 Bảng Cơ Sở Dữ Liệu Cloud (dan12)</span>
                  </div>
                  <div class="d-flex gap-2">
                    <a href="https://supabase.com/dashboard/project/yekokpbulmfugxaqjosc/editor" target="_blank" class="btn btn-sm btn-outline-primary rounded-pill px-3 shadow-xs">
                      <i class="bi bi-table me-1"></i> Xem Table Editor
                    </a>
                    <a href="https://supabase.com/dashboard/project/yekokpbulmfugxaqjosc/sql/new" target="_blank" class="btn btn-sm btn-outline-success rounded-pill px-3 shadow-xs">
                      <i class="bi bi-terminal me-1"></i> SQL Editor
                    </a>
                  </div>
                </div>
                <p class="small text-muted mb-3">
                  Toàn bộ cơ sở dữ liệu trên dự án <b>dan12</b> đã được đồng bộ với bảo mật cấp hàng (Row Level Security - RLS) cho phép đọc ghi dữ liệu tức thì:
                </p>
                <div class="row g-3 small">
                  <div class="col-md-4">
                    <div class="p-3 bg-light rounded-4 border h-100">
                      <div class="d-flex justify-content-between align-items-center mb-1">
                        <div class="fw-bold text-dark"><i class="bi bi-box-seam text-primary me-1"></i> public.products</div>
                        <span class="badge bg-success bg-opacity-10 text-success table-status-pill">RLS ACTIVE</span>
                      </div>
                      <div class="text-muted small">52 sản phẩm thời trang đa dạng (Nam, Nữ, Phụ kiện, Flash sale).</div>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="p-3 bg-light rounded-4 border h-100">
                      <div class="d-flex justify-content-between align-items-center mb-1">
                        <div class="fw-bold text-dark"><i class="bi bi-receipt text-success me-1"></i> public.orders</div>
                        <span class="badge bg-success bg-opacity-10 text-success table-status-pill">RLS ACTIVE</span>
                      </div>
                      <div class="text-muted small">Đơn hàng, tổng tiền, chi tiết trang phục và trạng thái giao vận.</div>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="p-3 bg-light rounded-4 border h-100">
                      <div class="d-flex justify-content-between align-items-center mb-1">
                        <div class="fw-bold text-dark"><i class="bi bi-people-fill text-info me-1"></i> public.users</div>
                        <span class="badge bg-success bg-opacity-10 text-success table-status-pill">RLS ACTIVE</span>
                      </div>
                      <div class="text-muted small">Tài khoản Admin và Khách hàng VIP, điểm tích lũy và phân hạng thẻ.</div>
                    </div>
                  </div>
                  <div class="col-md-6 mt-3">
                    <div class="p-3 bg-light rounded-4 border h-100">
                      <div class="d-flex justify-content-between align-items-center mb-1">
                        <div class="fw-bold text-dark"><i class="bi bi-ticket-perforated-fill text-warning me-1"></i> public.vouchers</div>
                        <span class="badge bg-success bg-opacity-10 text-success table-status-pill">RLS ACTIVE</span>
                      </div>
                      <div class="text-muted small">Kho voucher khuyến mãi, giảm giá % hoặc tiền mặt và mã Freeship.</div>
                    </div>
                  </div>
                  <div class="col-md-6 mt-3">
                    <div class="p-3 bg-light rounded-4 border h-100">
                      <div class="d-flex justify-content-between align-items-center mb-1">
                        <div class="fw-bold text-dark"><i class="bi bi-star-fill text-warning me-1"></i> public.product_reviews</div>
                        <span class="badge bg-success bg-opacity-10 text-success table-status-pill">RLS ACTIVE</span>
                      </div>
                      <div class="text-muted small">Đánh giá 5 sao kèm nhận xét chi tiết của khách hàng theo từng mã áo/váy.</div>
                    </div>
                  </div>
                </div>
                <div class="mt-3.5 p-3 bg-success bg-opacity-10 border border-success border-opacity-25 rounded-4 text-success small d-flex align-items-center gap-2.5">
                  <i class="bi bi-check-circle-fill fs-5 flex-shrink-0"></i>
                  <span>Khóa kết nối Public Anon Key đã được cấu hình sẵn. Mọi hành động thêm sản phẩm, tạo đơn hàng hay sửa mật khẩu đều được tự động lưu trữ lên Supabase Cloud!</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </section>
"""
    content += get_footer_and_modals()
    with open(os.path.join(BASE_DIR, "account.html"), "w", encoding="utf-8") as f:
        f.write(content)
    print("Generated account.html")


# Run all generators
if __name__ == '__main__':
    make_index_html()
    make_new_arrivals_html()
    make_women_html()
    make_men_html()
    make_accessories_html()
    make_flash_sale_html()
    make_cart_html()
    make_account_html()
    print("ALL 8 STANDALONE HTML PAGES RE-GENERATED SUCCESSFULLY WITH ADVANCED FEATURES!")
