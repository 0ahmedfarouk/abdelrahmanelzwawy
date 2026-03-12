import { Download, ExternalLink, FolderOpen, Music, Archive, Headphones } from 'lucide-react'; // Farouk

const downloadCategories = [ // Farouk
  { // Farouk
    id: 1, // Farouk
    title: 'المصحف الكريم كاملاً', // Farouk
    desc: 'تحميل المصحف الكريم كاملاً بصوت الشيخ عبد الرحمن الزواوي — جودة عالية MP3', // Farouk
    icon: Archive, // Farouk
    color: 'bg-emerald-500', // Farouk
    href: 'https://drive.google.com/drive/folders/1PZtZ8SOg0EHNujKyTYuJynPJzmAO-3bZ', // Farouk
    badge: 'Drive', // Farouk
    size: 'مجلد كامل', // Farouk
  }, // Farouk
  { // Farouk
    id: 2, // Farouk
    title: 'قناة ساوند كلاود', // Farouk
    desc: 'استمع وحمّل التلاوات مباشرة من ساوند كلاود', // Farouk
    icon: Music, // Farouk
    color: 'bg-orange-500', // Farouk
    href: 'https://soundcloud.com/abdelrahmanelzwawy', // Farouk
    badge: 'SoundCloud', // Farouk
    size: 'متعدد الملفات', // Farouk
  }, // Farouk
  { // Farouk
    id: 3, // Farouk
    title: 'قناة يوتيوب', // Farouk
    desc: 'مقاطع الفيديو والتلاوات على قناة الشيخ الرسمية', // Farouk
    icon: Headphones, // Farouk
    color: 'bg-red-600', // Farouk
    href: 'https://www.youtube.com/channel/UCmEQwRROa-hTlySNvMtFWnw', // Farouk
    badge: 'YouTube', // Farouk
    size: 'قناة كاملة', // Farouk
  }, // Farouk
]; // Farouk

// Featured surahs for direct download // Farouk
const featuredDownloads = [ // Farouk
  { id: 1, name: 'الفاتحة', verses: 7 }, // Farouk
  { id: 2, name: 'البقرة', verses: 286 }, // Farouk
  { id: 18, name: 'الكهف', verses: 110 }, // Farouk
  { id: 36, name: 'يس', verses: 83 }, // Farouk
  { id: 55, name: 'الرحمن', verses: 78 }, // Farouk
  { id: 67, name: 'الملك', verses: 30 }, // Farouk
  { id: 112, name: 'الإخلاص', verses: 4 }, // Farouk
  { id: 113, name: 'الفلق', verses: 5 }, // Farouk
  { id: 114, name: 'الناس', verses: 6 }, // Farouk
]; // Farouk

export default function DownloadsPage() { // Farouk
  return ( // Farouk
    <div dir="rtl" className="min-h-screen py-8 px-4"> {/* Farouk */}
      <div className="max-w-5xl mx-auto"> {/* Farouk */}

        {/* Header */} {/* Farouk */}
        <div className="text-center mb-10"> {/* Farouk */}
          <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg"> {/* Farouk */}
            <Download className="w-8 h-8 text-primary-foreground" /> {/* Farouk */}
          </div> {/* Farouk */}
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">التحميلات</h1> {/* Farouk */}
          <p className="text-muted-foreground">حمّل تلاوات الشيخ مجاناً بأعلى جودة صوتية</p> {/* Farouk */}
        </div> {/* Farouk */}

        {/* Main Sources */} {/* Farouk */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10"> {/* Farouk */}
          {downloadCategories.map(cat => { // Farouk
            const Icon = cat.icon; // Farouk
            return ( // Farouk
              <a // Farouk
                key={cat.id} // Farouk
                href={cat.href} // Farouk
                target="_blank" // Farouk
                rel="noopener noreferrer" // Farouk
                className="glow-card bg-card border border-border rounded-2xl p-6 flex flex-col gap-3 hover:border-primary/40 transition-all group" // Farouk
              > {/* Farouk */}
                <div className={`w-12 h-12 rounded-2xl ${cat.color} flex items-center justify-center shadow-md`}> {/* Farouk */}
                  <Icon className="w-6 h-6 text-white" /> {/* Farouk */}
                </div> {/* Farouk */}
                <div> {/* Farouk */}
                  <div className="flex items-center gap-2 mb-1"> {/* Farouk */}
                    <h3 className="font-bold text-foreground">{cat.title}</h3> {/* Farouk */}
                    <span className="text-xs bg-muted text-muted-foreground px-2 py-0.5 rounded-full">{cat.badge}</span> {/* Farouk */}
                  </div> {/* Farouk */}
                  <p className="text-sm text-muted-foreground">{cat.desc}</p> {/* Farouk */}
                </div> {/* Farouk */}
                <div className="flex items-center justify-between mt-auto pt-2 border-t border-border"> {/* Farouk */}
                  <span className="text-xs text-muted-foreground">{cat.size}</span> {/* Farouk */}
                  <span className="flex items-center gap-1 text-primary text-sm font-medium group-hover:gap-2 transition-all"> {/* Farouk */}
                    فتح <ExternalLink className="w-3.5 h-3.5" /> {/* Farouk */}
                  </span> {/* Farouk */}
                </div> {/* Farouk */}
              </a> // Farouk
            ); // Farouk
          })} {/* Farouk */}
        </div> {/* Farouk */}

        {/* Featured Surahs Direct Download */} {/* Farouk */}
        <div className="bg-card border border-border rounded-2xl overflow-hidden"> {/* Farouk */}
          <div className="px-6 py-4 border-b border-border bg-muted/40 flex items-center gap-3"> {/* Farouk */}
            <FolderOpen className="w-5 h-5 text-primary" /> {/* Farouk */}
            <h2 className="font-bold text-foreground">تحميل مباشر — سور مختارة</h2> {/* Farouk */}
          </div> {/* Farouk */}
          <div className="divide-y divide-border"> {/* Farouk */}
            {featuredDownloads.map((s, i) => { // Farouk
              const paddedId = String(s.id).padStart(3, '0'); // Farouk
              const url = `https://server8.mp3quran.net/afs/${paddedId}.mp3`; // Farouk
              return ( // Farouk
                <div key={s.id} className="flex items-center justify-between px-6 py-3.5 hover:bg-muted/30 transition-colors"> {/* Farouk */}
                  <div className="flex items-center gap-4"> {/* Farouk */}
                    <span className="w-8 h-8 rounded-full bg-primary/10 text-primary text-sm font-bold flex items-center justify-center"> {/* Farouk */}
                      {s.id} {/* Farouk */}
                    </span> {/* Farouk */}
                    <div> {/* Farouk */}
                      <p className="font-semibold text-foreground text-sm">سورة {s.name}</p> {/* Farouk */}
                      <p className="text-xs text-muted-foreground">{s.verses} آية — MP3</p> {/* Farouk */}
                    </div> {/* Farouk */}
                  </div> {/* Farouk */}
                  <div className="flex items-center gap-2"> {/* Farouk */}
                    <a // Farouk
                      href={url} // Farouk
                      target="_blank" // Farouk
                      rel="noopener noreferrer" // Farouk
                      className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground text-muted-foreground transition-colors" // Farouk
                      title="استماع" // Farouk
                    > {/* Farouk */}
                      <Music className="w-4 h-4" /> {/* Farouk */}
                    </a> {/* Farouk */}
                    <a // Farouk
                      href={url} // Farouk
                      download={`surah-${s.name}.mp3`} // Farouk
                      className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-primary text-primary-foreground text-xs font-medium hover:opacity-90 transition-opacity" // Farouk
                    > {/* Farouk */}
                      <Download className="w-3.5 h-3.5" /> {/* Farouk */}
                      تحميل {/* Farouk */}
                    </a> {/* Farouk */}
                  </div> {/* Farouk */}
                </div> // Farouk
              ); // Farouk
            })} {/* Farouk */}
          </div> {/* Farouk */}
          <div className="px-6 py-4 bg-muted/20 border-t border-border"> {/* Farouk */}
            <p className="text-xs text-muted-foreground text-center"> {/* Farouk */}
              جميع الملفات مجانية للاستخدام الشخصي — المصدر: mp3quran.net {/* Farouk */}
            </p> {/* Farouk */}
          </div> {/* Farouk */}
        </div> {/* Farouk */}

      </div> {/* Farouk */}
    </div> // Farouk
  ); // Farouk
} // Farouk
