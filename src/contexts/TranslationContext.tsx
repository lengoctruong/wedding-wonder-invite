import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'vi';

interface TranslationContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

const translations = {
  en: {
    // Hero Section
    saveTheDate: "Save The Date",
    weddingCeremony: "Wedding Ceremony",
    rsvp: "RSVP",
    viewVenue: "View Venue",
    countdown: "Countdown",
    wednesday: "Wednesday",
    october2025: "OCTOBER 2025",
    venue: "Hoi An 1 Community Center",
    address: "Hoi An 1 Hamlet, Tra Cau, Quang Ngai Province",
    
    // Countdown
    countdownTitle: "Countdown to Our Special Day",
    countdownTitleDDay: "🎉 IT'S OUR WEDDING DAY! 🎉",
    countdownSubtitle: "We can't wait to celebrate with you!",
    countdownDDay:"The moment we've been waiting for has finally arrived!",
    days: "Days",
    hours: "Hours",
    minutes: "Minutes", 
    seconds: "Seconds",
    
    // Couple Intro
    introduction: "Introduction",
    bride: "The Bride",
    groom: "The Groom",
    brideName: "Nguyen Thi Nhu Nguyet",
    groomName: "Le Ngoc Truong",
    brideAbout: "A beautiful soul with a heart full of love and dreams. Sarah brings joy and laughter to everyone around her.",
    groomAbout: "A kind and caring person who believes in love and commitment. Michael is ready to start this new chapter of life.",
    brideFamily: "Daughter of Mr. Nguyen Lon & Mrs. Nguyen Thi Tien",
    groomFamily: "Son of Mr. Le Ngoc Tuan & Mrs. Nguyen Thi Xinh",
    
    // Calendar
    weddingSchedule: "Wedding Schedule",
    scheduleSubtitle: "Mark your calendar and join us for these special moments",
    october: "October",
    october2025Calendar: "October 2025",
    scheduleOfEvents: "Schedule of Events",
    rehearsalDinner: "Rehearsal Dinner",
    reception: "Reception & Lunch",
    dressCode: "Dress Code: Formal / Black Tie Optional",
    cantWait: "We can't wait to celebrate with you!",
    groomHouse: "Groom's House",
    
    // Photo Gallery
    ourMemories: "Our Album",
    memoriesSubtitle: "Capturing the beautiful moments of our journey together",
    uploadPhoto: "Upload Your Photo",
    shareMemory: "Share a Memory",
    
    // Venue
    venueTitle: "Wedding Venue",
    venueSubtitle: "Join us at this beautiful location for our special day",
    venueDetails: "Venue Details",
    schedule: "Schedule",
    parking: "Parking",
    catering: "Catering & Menu",
    getDirections: "Get Directions",
    contact: "Contact Information",
    contactInfo: "Groom's Phone Number:",
    addressLabel: "Address",
    parkingInfo: "Complimentary valet parking available for all guests. Self-parking is also available in the adjacent garage.",
    cateringInfo: "Enjoy a delicious three-course dinner featuring locally sourced ingredients, with vegetarian and dietary restriction options available.",
    
    // RSVP
    rsvpTitle: "RSVP",
    rsvpSubtitle: "Please confirm your attendance by Oct 1, 2025",
    rsvpFrench: "Répondez S'il Vous Plaît",
    fullName: "Full Name",
    email: "Email Address",
    phone: "Phone Number",
    attending: "Will you be attending?",
    yes: "Yes, I'll be there!",
    no: "Sorry, I can't make it",
    numberOfGuests: "Number of guests (including yourself)",
    dietaryRestrictions: "Dietary restrictions or special requests",
    message: "Message for us",
    submitRsvp: "Submit RSVP",
    thankYou: "Thank you! Your RSVP has been submitted.",
    
    // Wishes
    wishesTitle: "Wedding Wishes",
    wishesSubtitle: "Share your love and best wishes for us",
    yourName: "Your Name",
    yourWish: "Your Wish",
    shareWish: "Share Your Wish",
    wishSubmitted: "Thank you! Your wish has been shared.",
    messagesFromLovedOnes: "Messages from everyone",
    beFirstToShare: "Be the first to share your wishes for us!",
    messageWillAppear: "Your message will appear here once submitted.",
    loadingMessages: "Loading messages from loved ones...",
    pleaseFillBoth: "Please fill in both your name and message.",
    submittingWish: "Submitting wish...",
    failedToSubmit: "Failed to submit wish. Please try again.",
    failedToLoad: "Failed to load wishes",
    
    // Language
    language: "Language",
    vietnamese: "Tiếng Việt",
    english: "English"
  },
  vi: {
    // Hero Section
    saveTheDate: "Save The Date",
    weddingCeremony: "Lễ Thành Hôn",
    rsvp: "Xác Nhận Tham Dự",
    viewVenue: "Xem Địa Điểm",
    countdown: "Đếm Ngược",
    wednesday: "Thứ Tư",
    october2025: "THÁNG 10 2025",
    venue: "Nhà Văn Hóa Hội An 1",
    address: "Thôn Hội An 1 - Trà Câu - Quảng Ngãi",
    
    // Countdown
    countdownTitle: "Đếm Ngược Đến Ngày Đặc Biệt",
    countdownTitleDDay: "🎉 Hôm nay chúng mình cưới nhau rồi! 🎉",

    countdownSubtitle: "Chúng mình rất mong được chia sẻ niềm vui cùng bạn!",
    countdownDDay:"Khoảnh khắc mà chúng mình đã chờ đợi đã đến!",
    days: "Ngày",
    hours: "Giờ",
    minutes: "Phút",
    seconds: "Giây",
    
    // Couple Intro
    introduction: "Giới thiệu",
    bride: "Cô Dâu",
    groom: "Chú Rể",
    brideName: "Nguyễn Thị Như Nguyệt",
    groomName: "Lê Ngọc Trường",
    brideAbout: "Một tâm hồn xinh đẹp với trái tim tràn đầy tình yêu và ước mơ. Sarah mang lại niềm vui và tiếng cười cho mọi người xung quanh.",
    groomAbout: "Một người tốt bụng và quan tâm, tin tưởng vào tình yêu và sự cam kết. Michael đã sẵn sàng bắt đầu chương mới này của cuộc đời.",
    brideFamily: "Con gái của Ông Nguyễn Lớn & Bà Nguyễn Thị Tiến",
    groomFamily: "Con trai của Ông Lê Ngọc Tuấn & Bà Nguyễn Thị Xinh",
    
    // Calendar
    weddingSchedule: "Lịch Trình Đám Cưới",
    scheduleSubtitle: "Đánh dấu lịch và tham gia cùng chúng mình trong những khoảnh khắc đặc biệt này",
    october: "Tháng 10",
    october2025Calendar: "Tháng 10 2025",
    scheduleOfEvents: "Lịch Trình Sự Kiện",
    rehearsalDinner: "Tiệc Trà",
    reception: "Tiệc Cưới",
    dressCode: "Trang Phục: Trang Trọng / Lễ Phục",
    cantWait: "Chúng mình rất mong được chia sẻ niềm vui cùng bạn!",
    groomHouse: "Nhà Cô Dâu",
    
    // Photo Gallery
    ourMemories: "Ảnh Cưới Của Chúng Mình",
    memoriesSubtitle: "Ghi lại những khoảnh khắc đẹp trong hành trình chung của chúng mình",
    uploadPhoto: "Tải Ảnh Lên",
    shareMemory: "Chia Sẻ Kỷ Niệm",
    
    // Venue
    venueTitle: "Địa Điểm Tổ Chức",
    venueSubtitle: "Hãy tham gia cùng chúng mình tại đây trong ngày đặc biệt này",
    venueDetails: "Chi Tiết Địa Điểm",
    schedule: "Lịch Trình",
    parking: "Bãi Đỗ Xe",
    catering: "Tiệc Cưới & Thực Đơn",
    getDirections: "Chỉ Đường",
    contact: "Thông Tin Liên Hệ",
    contactInfo: "Số điện thoại cô dâu:",
    addressLabel: "Địa Chỉ",
    parkingInfo: "Dịch vụ đỗ xe miễn phí có sẵn cho tất cả khách mời. Bãi đỗ xe tự phục vụ cũng có sẵn tại garage liền kề.",
    cateringInfo: "Thưởng thức bữa tối ba món ngon với nguyên liệu địa phương, có các lựa chọn chay và phù hợp với hạn chế ăn kiêng.",
    
    // RSVP
    rsvpTitle: "Xác Nhận Tham Dự",
    rsvpSubtitle: "Vui lòng xác nhận sự tham dự của bạn trước ngày 1 tháng 10, 2025",
    rsvpFrench: "Vui Lòng Trả Lời",
    fullName: "Họ và Tên",
    email: "Địa Chỉ Email",
    phone: "Số Điện Thoại",
    attending: "Bạn có tham dự không?",
    yes: "Có, tôi sẽ có mặt!",
    no: "Xin lỗi, tôi không thể tham dự",
    numberOfGuests: "Số lượng khách (bao gồm bạn)",
    dietaryRestrictions: "Hạn chế ăn kiêng hoặc yêu cầu đặc biệt",
    message: "Lời nhắn cho chúng mình",
    submitRsvp: "Gửi Xác Nhận",
    thankYou: "Cảm ơn! Xác nhận của bạn đã được gửi.",
    
    // Wishes
    wishesTitle: "Lời Chúc",
    wishesSubtitle: "Chia sẻ tình yêu và những lời chúc tốt đẹp nhất cho chúng mình",
    yourName: "Tên Của Bạn",
    yourWish: "Lời Chúc Của Bạn",
    shareWish: "Chia Sẻ Lời Chúc",
    wishSubmitted: "Cảm ơn! Lời chúc của bạn đã được chia sẻ.",
    messagesFromLovedOnes: "Lời Chúc Từ Mọi Người",
    beFirstToShare: "Hãy là người đầu tiên chia sẻ lời chúc cho chúng mình!",
    messageWillAppear: "Lời nhắn của bạn sẽ xuất hiện ở đây sau khi gửi.",
    loadingMessages: "Đang tải lời chúc từ những người thân yêu...",
    pleaseFillBoth: "Vui lòng điền cả tên của bạn và lời chúc.",
    submittingWish: "Đang gửi lời chúc...",
    failedToSubmit: "Gửi lời chúc thất bại. Vui lòng thử lại.",
    failedToLoad: "Không thể tải lời chúc",
    
    // Language
    language: "Ngôn Ngữ",
    vietnamese: "Tiếng Việt", 
    english: "English"
  }
};

export const TranslationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('vi');
  
  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <TranslationContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
};