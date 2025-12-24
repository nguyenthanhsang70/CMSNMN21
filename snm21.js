function checkValid() {
    var input = document.getElementById("nhapngaysinh");
    var inputValue = input.value.trim();
    
    if (inputValue === "") {
        alert("Vui lòng nhập ngày sinh!");
        return;
    }
    
    // Chỉ chấp nhận duy nhất một mật khẩu: 02/01/2010
    if (inputValue === "02/01/2010") {
        
        // Lấy ngày hiện tại theo múi giờ Việt Nam
        var now = new Date();
        var vietnamTime = new Date(now.toLocaleString("en-US", {timeZone: "Asia/Ho_Chi_Minh"}));
        
        var currentDay = vietnamTime.getDate();
        var currentMonth = vietnamTime.getMonth() + 1; // Tháng bắt đầu từ 0
        var currentYear = vietnamTime.getFullYear();
        
        // ============================================
        // THAY ĐỔI NGÀY MỞ Ở ĐÂY:
        // ============================================
        var allowedDay = 2;      // Ngày (1-31)
        var allowedMonth = 1;    // Tháng (1-12)
        var allowedYear = 2026;  // Năm
        // ============================================
        
        // Kiểm tra xem có đúng ngày không
        if (currentDay === allowedDay && currentMonth === allowedMonth && currentYear === allowedYear) {
            
            // Đóng modal
            $('#modalHoiNgaySinh').modal('hide');
            
            // Tạo overlay countdown
            var countdownHTML = `
                <div id="countdownOverlay" style="position:fixed;top:0;left:0;width:100vw;height:100vh;background:rgba(0,0,0,0.95);z-index:9999;display:flex;align-items:center;justify-content:center;flex-direction:column;color:white;">
                    <h1 style="font-size:5rem;margin:0;animation:pulse 1s infinite;">10</h1>
                    <p style="font-size:1.5rem;margin-top:20px;opacity:0.8;">Chuẩn bị đón điều bất ngờ nào... ❤️</p>
                </div>`;
            
            $('body').append(countdownHTML);
            
            var count = 10;
            var countdownElement = $('#countdownOverlay h1');
            
            var timer = setInterval(function() {
                count--;
                countdownElement.text(count);
                
                if (count <= 0) {
                    clearInterval(timer);
                    $('#countdownOverlay').fadeOut(800, function() {
                        // Chuyển thẳng đến trang chính
                        window.location.href = "thoinen.html";
                    });
                }
            }, 1000);
            
        } else {
            // Hiển thị thông báo ngày chưa đến
            var dateStr = (allowedDay < 10 ? '0' + allowedDay : allowedDay) + '/' + 
                         (allowedMonth < 10 ? '0' + allowedMonth : allowedMonth) + '/' + 
                         allowedYear;
            alert("Chưa đến ngày mở quà nhé! 🎁\nHãy quay lại vào ngày: " + dateStr);
        }
        
    } else {
        alert("Mật khẩu không chính xác!");
    }
}

// Hàm kiểm tra ngày hiện tại (có thể dùng để debug)
function checkCurrentDate() {
    var now = new Date();
    var vietnamTime = new Date(now.toLocaleString("en-US", {timeZone: "Asia/Ho_Chi_Minh"}));
    
    var day = vietnamTime.getDate();
    var month = vietnamTime.getMonth() + 1;
    var year = vietnamTime.getFullYear();
    
    console.log("Ngày hiện tại: " + day + "/" + month + "/" + year);
}
