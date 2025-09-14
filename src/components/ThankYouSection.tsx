import { Heart, Sparkles } from "lucide-react";
import { useTranslation } from "@/contexts/TranslationContext";
import VHH_9725 from "@/assets/optimized/VHH_9725.jpg";

export const ThankYouSection = () => {
  const { t } = useTranslation();

  return (
    <section id="thank-you" className="relative py-8 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-[center_top] bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${VHH_9725})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
              <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight py-2 min-h-[3rem] md:min-h-[4rem] drop-shadow-lg">
              Thank You!
            </h2>
            <div className="flex items-center justify-center gap-2 mb-6">
              <Sparkles className="h-6 w-6 text-white" />
              <span className="text-2xl font-bold text-white">
                Trường & Nguyệt
              </span>
              <Sparkles className="h-6 w-6 text-white" />
            </div>
          </div>

          <div className="max-w-5xl mx-auto">
                         <div className="text-center space-y-6">
              {/* Main thank you message */}
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 shadow-elegant border border-white/30">
                <Heart className="h-12 w-12 text-white mx-auto mb-6" />
                <p className="text-lg md:text-xl text-white leading-relaxed mb-6">
                  Cảm ơn bạn đã dành thời gian quan tâm và chia sẻ niềm vui cùng vợ chồng mình trong ngày đặc biệt này!
                </p>
                <p className="text-lg md:text-xl text-white leading-relaxed mb-6">
                  Chúng mình biết ai cũng rất bận rộn với công việc, cuộc sống và những lo toan riêng. Vậy nên, sẽ rất tuyệt vời nếu như ngày Hạnh Phúc của chúng mình có thêm sự góp mặt của bạn - cùng chứng kiến, cùng cười và cùng lưu giữ những khoảnh khắc đáng nhớ.
                </p>
                <p className="text-lg md:text-xl text-white leading-relaxed font-medium">
                  Một lần nữa, chân thành cảm ơn bạn ❤️
                </p>
              </div>

              {/* English version */}
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 shadow-elegant border border-white/30">
                <p className="text-lg md:text-xl text-white leading-relaxed mb-6">
                  Thank you for taking the time to share in our special day! 
                </p>
                <p className="text-lg md:text-xl text-white leading-relaxed mb-6">
                  We know everyone is busy with work, life, and family commitments. 
                  But it would truly be wonderful to have you present on our Happy Day. 
                  We really hope you can join us on this important day to witness and share this happiness with us.
                </p>
                <p className="text-lg md:text-xl text-white leading-relaxed font-medium">
                  Once again, sincerely thank you ❤️
                </p>
              </div>

              {/* Decorative elements */}
              <div className="flex items-center justify-center gap-8 mt-12">
                <div className="w-16 h-px bg-gradient-to-r from-transparent to-white"></div>
                <Heart className="h-8 w-8 text-white" />
                <div className="w-16 h-px bg-gradient-to-l from-transparent to-white"></div>
              </div>

              {/* Final message */}
              <div className="text-center mt-8">
                <p className="text-2xl font-bold text-white mb-2 drop-shadow-lg">
                  "The best is yet to come"
                </p>
                <p className="text-white/80">
                  We can't wait to celebrate with you!
                </p>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
}; 