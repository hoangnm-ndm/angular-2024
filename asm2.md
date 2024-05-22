# 1. Khởi tạo ứng dụng web Angular và xây dựng bộ định tuyến bao gồm: 0.5đ

- `home` hiển thị danh sách sản phẩm
- `product/:id` hiển thị chi tiết sản phẩm
- `register` để người dùng đăng ký tài khoản
- `login` để người dùng đăng nhập
- `admin` hiển thị giao diện danh sách sản phẩm dạng bảng.
  - `admin/product-add` để thêm sản phẩm
  - `admin/product-edit/:id` để sửa sản phẩm

# 2. Tạo service ProductService để lấy dữ liệu từ json-server: 0.5đ

# 3. Các tính năng phía người dùng: 4đ

- Register có validation (email required và đúng định dạng, password required và tối thiểu 6 ký tự)
- Login có validation (validation giống đăng ký).
- Home: hiển thị danh sách sản phẩm dạng lưới (bao gồm tên, giá, hình ảnh, nút xem chi tiết)
- Product Detail: hiển thị chi tiết sản phẩm

# 4. Các tính năng phía admin: 4đ

- Danh sách sản phẩm dạng bảng.
- Thêm sản phẩm mới (bắt buộc bao gồm: tên, giá, mô tả)
- Sửa sản phẩm.
- Xóa sản phẩm.

# 5. Phân quyền: 1đ

- Lưu token tại localStorage sau khi đăng nhập. (0.5đ)
- Khi người dùng muốn vào admin, kiểm tra token tại localStorage, nếu không có token thì chuyển hướng về trang login. (0.5đ)
