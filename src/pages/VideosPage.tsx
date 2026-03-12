import { Youtube, ExternalLink } from 'lucide-react'; // Farouk

const videoPlaylists = [ // Farouk
  { // Farouk
    title: 'أحدث التلاوات', // Farouk
    embedUrl: 'https://www.youtube.com/embed/videoseries?list=UUmEQwRROa-hTlySNvMtFWnw', // Farouk
    desc: 'آخر ما نشره الشيخ على قناته الرسمية', // Farouk
  }, // Farouk
  { // Farouk
    title: 'ختمات القرآن الكريم', // Farouk
    embedUrl: 'https://www.youtube.com/embed/videoseries?list=UUmEQwRROa-hTlySNvMtFWnw', // Farouk
    desc: 'ختمات كاملة لأجزاء وسور القرآن الكريم', // Farouk
  }, // Farouk
]; // Farouk

export default function VideosPage() { // Farouk
  return ( // Farouk
    <div dir="rtl" className="min-h-screen py-8 px-4"> {/* Farouk */}
      <div className="max-w-5xl mx-auto"> {/* Farouk */}

        {/* Header */} {/* Farouk */}
        <div className="text-center mb-10"> {/* Farouk */}
          <div className="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg"> {/* Farouk */}
            <Youtube className="w-8 h-8 text-white" /> {/* Farouk */}
          </div> {/* Farouk */}
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">الفيديوهات</h1> {/* Farouk */}
          <p className="text-muted-foreground mb-4">مقاطع ومجموعات من قناة الشيخ على يوتيوب</p> {/* Farouk */}
          <a // Farouk
            href="https://www.youtube.com/channel/UCmEQwRROa-hTlySNvMtFWnw" // Farouk
            target="_blank" // Farouk
            rel="noopener noreferrer" // Farouk
            className="inline-flex items-center gap-2 bg-red-600 text-white px-5 py-2.5 rounded-full font-semibold text-sm hover:bg-red-700 transition-colors shadow-md" // Farouk
          > {/* Farouk */}
            <Youtube className="w-4 h-4" /> {/* Farouk */}
            اشترك في القناة {/* Farouk */}
            <ExternalLink className="w-3.5 h-3.5" /> {/* Farouk */}
          </a> {/* Farouk */}
        </div> {/* Farouk */}

        {/* Video Grid */} {/* Farouk */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6"> {/* Farouk */}
          {videoPlaylists.map((v, i) => ( // Farouk
            <div key={i} className="bg-card border border-border rounded-2xl overflow-hidden shadow-md"> {/* Farouk */}
              <div className="aspect-video bg-black"> {/* Farouk */}
                <iframe // Farouk
                  src={v.embedUrl} // Farouk
                  title={v.title} // Farouk
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" // Farouk
                  allowFullScreen // Farouk
                  className="w-full h-full" // Farouk
                  loading="lazy" // Farouk
                /> {/* Farouk */}
              </div> {/* Farouk */}
              <div className="p-4"> {/* Farouk */}
                <h3 className="font-bold text-foreground mb-1">{v.title}</h3> {/* Farouk */}
                <p className="text-sm text-muted-foreground">{v.desc}</p> {/* Farouk */}
              </div> {/* Farouk */}
            </div> // Farouk
          ))} {/* Farouk */}
        </div> {/* Farouk */}

        {/* Full Channel Banner */} {/* Farouk */}
        <div className="mt-10 bg-gradient-to-r from-red-600/20 to-red-900/20 border border-red-500/30 rounded-2xl p-6 text-center"> {/* Farouk */}
          <h2 className="text-xl font-bold text-foreground mb-2">🎬 القناة الرسمية على يوتيوب</h2> {/* Farouk */}
          <p className="text-muted-foreground text-sm mb-4"> {/* Farouk */}
            اشترك ليصلك كل جديد من تلاوات وإعلانات الشيخ عبد الرحمن الزواوي {/* Farouk */}
          </p> {/* Farouk */}
          <a // Farouk
            href="https://www.youtube.com/channel/UCmEQwRROa-hTlySNvMtFWnw" // Farouk
            target="_blank" // Farouk
            rel="noopener noreferrer" // Farouk
            className="inline-flex items-center gap-2 bg-red-600 text-white px-8 py-3 rounded-full font-bold text-base hover:bg-red-700 transition-colors shadow-lg" // Farouk
          > {/* Farouk */}
            <Youtube className="w-5 h-5" /> {/* Farouk */}
            زيارة القناة {/* Farouk */}
          </a> {/* Farouk */}
        </div> {/* Farouk */}

      </div> {/* Farouk */}
    </div> // Farouk
  ); // Farouk
} // Farouk
