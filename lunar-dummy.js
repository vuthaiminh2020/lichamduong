/**
 * ĐÂY LÀ HÀM GIẢ LẬP ĐỂ TEST CODE.
 * NÓ KHÔNG TÍNH ĐÚNG NGÀY ÂM LỊCH THỰC TẾ.
 * Vui lòng thay thế bằng thư viện lunar.js chuẩn.
 * * Giả định: input month là 1-12
 * Output mong đợi từ thư viện chuẩn: [ngày_âm, tháng_âm, năm_âm, nhuận]
 */
function convertSolar2Lunar(solarDay, solarMonth, solarYear) {
    // LOGIC GIẢ: Chỉ để hiển thị số khác ngày dương một chút
    let lunarDay = solarDay;
    let lunarMonth = solarMonth - 1;
    if (lunarMonth === 0) {
        lunarMonth = 12;
        lunarDay = (solarDay > 5) ? solarDay - 5 : 25 + solarDay; // Đổi ngày linh tinh
    }
    
    // Trả về định dạng mảng giống thư viện thật để app.js dễ xử lý
    return [
        lunarDay,     // Ngày âm
        lunarMonth,   // Tháng âm
        solarYear,    // Năm âm (giả)
        0             // Không nhuận
    ];
}