import { Heart } from 'lucide-react'; // Farouk

export default function Footer() { // Farouk
  return ( // Farouk
    <footer className="border-t border-border bg-card mt-16 py-8" dir="rtl"> {/* Farouk */}
      <div className="max-w-6xl mx-auto px-4 text-center"> {/* Farouk */}
        <p className="text-muted-foreground text-sm flex items-center justify-center gap-1"> {/* Farouk */}
          جميع الحقوق محفوظة © {new Date().getFullYear()} — الشيخ عبد الرحمن الزواوي {/* Farouk */}
          <Heart className="w-3.5 h-3.5 text-red-500 inline-block fill-red-500" /> {/* Farouk */}
        </p> {/* Farouk */}
        <p className="text-muted-foreground/60 text-xs mt-1"> {/* Farouk */}
          تصميم وبرمجة: Farouk — نسخة احترافية {/* Farouk */}
        </p> {/* Farouk */}
      </div> {/* Farouk */}
    </footer> // Farouk
  ); // Farouk
} // Farouk
