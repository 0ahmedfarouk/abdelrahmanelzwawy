import { useState, useEffect, useRef } from 'react'; // Farouk
import { Link } from 'wouter'; // Farouk
import { // Farouk
  Facebook, Youtube, Twitter, Instagram, Send, Music2, // Farouk
  MapPin, Download, Play, ChevronLeft, ExternalLink, // Farouk
  MessageCircle // Farouk
} from 'lucide-react'; // Farouk
import AudioPlayer from '../components/AudioPlayer'; // Farouk
import { surahs } from '../lib/surahs'; // Farouk

// Social links configuration // Farouk
const socialLinks = [ // Farouk
  { // Farouk
    name: 'فيسبوك', // Farouk
    href: 'https://www.facebook.com/AbdElRahmanElzwawy', // Farouk
    icon: Facebook, // Farouk
    color: 'bg-blue-600 hover:bg-blue-700', // Farouk
    textColor: 'text-white', // Farouk
  }, // Farouk
  { // Farouk
    name: 'يوتيوب', // Farouk
    href: 'https://www.youtube.com/channel/UCmEQwRROa-hTlySNvMtFWnw', // Farouk
    icon: Youtube, // Farouk
    color: 'bg-red-600 hover:bg-red-700', // Farouk
    textColor: 'text-white', // Farouk
  }, // Farouk
  { // Farouk
    name: 'إكس (تويتر)', // Farouk
    href: 'https://twitter.com/Sheikh_Elzwawy', // Farouk
    icon: Twitter, // Farouk
    color: 'bg-black hover:bg-gray-900 dark:bg-gray-800 dark:hover:bg-gray-700', // Farouk
    textColor: 'text-white', // Farouk
  }, // Farouk
  { // Farouk
    name: 'إنستجرام', // Farouk
    href: 'https://www.instagram.com/abdelrahman.elzwawy/', // Farouk
    icon: Instagram, // Farouk
    color: 'bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 hover:opacity-90', // Farouk
    textColor: 'text-white', // Farouk
  }, // Farouk
  { // Farouk
    name: 'تليجرام', // Farouk
    href: 'https://t.me/abdelrahmanelzwawy', // Farouk
    icon: Send, // Farouk
    color: 'bg-sky-500 hover:bg-sky-600', // Farouk
    textColor: 'text-white', // Farouk
  }, // Farouk
  { // Farouk
    name: 'تليجرام (2)', // Farouk
    href: 'https://t.me/shelzwawy', // Farouk
    icon: Send, // Farouk
    color: 'bg-cyan-600 hover:bg-cyan-700', // Farouk
    textColor: 'text-white', // Farouk
  }, // Farouk
  { // Farouk
    name: 'تيك توك', // Farouk
    href: 'https://www.tiktok.com/@abdelrahman.elzwawy', // Farouk
    icon: Music2, // Farouk
    color: 'bg-gray-900 hover:bg-black', // Farouk
    textColor: 'text-white', // Farouk
  }, // Farouk
  { // Farouk
    name: 'ساوند كلاود', // Farouk
    href: 'https://soundcloud.com/abdelrahmanelzwawy', // Farouk
    icon: Music2, // Farouk
    color: 'bg-orange-500 hover:bg-orange-600', // Farouk
    textColor: 'text-white', // Farouk
  }, // Farouk
  { // Farouk
    name: 'موقع المسجد', // Farouk
    href: 'https://maps.app.goo.gl/VqNXrqVBTsYTkQi6A', // Farouk
    icon: MapPin, // Farouk
    color: 'bg-green-600 hover:bg-green-700', // Farouk
    textColor: 'text-white', // Farouk
  }, // Farouk
  { // Farouk
    name: 'قناة واتساب', // Farouk
    href: 'https://whatsapp.com/channel/', // Farouk
    icon: MessageCircle, // Farouk
    color: 'bg-emerald-500 hover:bg-emerald-600', // Farouk
    textColor: 'text-white', // Farouk
  }, // Farouk
]; // Farouk

// Typing effect hook // Farouk
function useTyping(texts: string[], speed = 80) { // Farouk
  const [displayed, setDisplayed] = useState(''); // Farouk
  const [idx, setIdx] = useState(0); // Farouk
  const [charIdx, setCharIdx] = useState(0); // Farouk
  const [deleting, setDeleting] = useState(false); // Farouk

  useEffect(() => { // Farouk
    const current = texts[idx]; // Farouk
    if (!deleting && charIdx < current.length) { // Farouk
      const t = setTimeout(() => { // Farouk
        setDisplayed(current.slice(0, charIdx + 1)); // Farouk
        setCharIdx(c => c + 1); // Farouk
      }, speed); // Farouk
      return () => clearTimeout(t); // Farouk
    } else if (!deleting && charIdx === current.length) { // Farouk
      const t = setTimeout(() => setDeleting(true), 1600); // Farouk
      return () => clearTimeout(t); // Farouk
    } else if (deleting && charIdx > 0) { // Farouk
      const t = setTimeout(() => { // Farouk
        setDisplayed(current.slice(0, charIdx - 1)); // Farouk
        setCharIdx(c => c - 1); // Farouk
      }, speed / 2); // Farouk
      return () => clearTimeout(t); // Farouk
    } else if (deleting && charIdx === 0) { // Farouk
      setDeleting(false); // Farouk
      setIdx(i => (i + 1) % texts.length); // Farouk
    } // Farouk
  }, [displayed, charIdx, deleting, idx, texts, speed]); // Farouk

  return displayed; // Farouk
} // Farouk

const typingTexts = [ // Farouk
  'قارئ القرآن الكريم', // Farouk
  'إمام المسجد', // Farouk
  'معلم القرآن', // Farouk
  'صوت القرآن الكريم', // Farouk
]; // Farouk

// YouTube video IDs // Farouk
const youtubeVideos = [ // Farouk
  { id: 'UCmEQwRROa-hTlySNvMtFWnw', title: 'قناة الشيخ على يوتيوب', embed: '' }, // Farouk
]; // Farouk

export default function HomePage() { // Farouk
  const typingText = useTyping(typingTexts); // Farouk
  const [currentSurahIdx, setCurrentSurahIdx] = useState(0); // Farouk
  const featuredSurahs = surahs.slice(0, 10); // Farouk

  return ( // Farouk
    <div dir="rtl" className="min-h-screen"> {/* Farouk */}

      {/* ===== HERO SECTION ===== */} {/* Farouk */}
      <section className="relative overflow-hidden py-20 px-4 bg-background"> {/* Farouk */}
        {/* Particle background */} {/* Farouk */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none"> {/* Farouk */}
          {[...Array(20)].map((_, i) => ( // Farouk
            <div // Farouk
              key={i} // Farouk
              className="particle" // Farouk
              style={{ // Farouk
                right: `${Math.random() * 100}%`, // Farouk
                animationDuration: `${8 + Math.random() * 12}s`, // Farouk
                animationDelay: `${Math.random() * 8}s`, // Farouk
                opacity: 0.3 + Math.random() * 0.4, // Farouk
              }} // Farouk
            /> // Farouk
          ))} {/* Farouk */}
        </div> {/* Farouk */}

        <div className="max-w-4xl mx-auto text-center relative z-10"> {/* Farouk */}

          {/* Avatar */} {/* Farouk */}
          <div className="relative inline-block mb-6"> {/* Farouk */}
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-2xl border-4 border-primary/30 mx-auto overflow-hidden"> {/* Farouk */}
              <span className="text-5xl md:text-6xl">🕌</span> {/* Farouk */}
            </div> {/* Farouk */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs px-3 py-0.5 rounded-full shadow"> {/* Farouk */}
              ● متاح الآن {/* Farouk */}
            </div> {/* Farouk */}
          </div> {/* Farouk */}

          {/* Title with glitch */} {/* Farouk */}
          <h1 // Farouk
            className="glitch-text text-3xl md:text-5xl font-bold text-foreground mb-3" // Farouk
            data-text="الشيخ عبد الرحمن الزواوي" // Farouk
          > {/* Farouk */}
            الشيخ عبد الرحمن الزواوي {/* Farouk */}
          </h1> {/* Farouk */}

          {/* Typing */} {/* Farouk */}
          <div className="h-8 flex items-center justify-center mb-6"> {/* Farouk */}
            <span className="text-lg md:text-xl text-primary font-medium typing-cursor"> {/* Farouk */}
              {typingText} {/* Farouk */}
            </span> {/* Farouk */}
          </div> {/* Farouk */}

          {/* Bio */} {/* Farouk */}
          <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg leading-relaxed mb-8"> {/* Farouk */}
            الشيخ عبد الرحمن الزواوي، قارئ القرآن الكريم بأجمل الأصوات وأعذبها. {/* Farouk */}
            يُقدّم تلاوات خاشعة للقرآن الكريم كاملاً، ويُحيي الشعائر والمناسبات الدينية. {/* Farouk */}
            متاح للاستماع والتحميل المجاني. {/* Farouk */}
          </p> {/* Farouk */}

          {/* CTA Buttons */} {/* Farouk */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-8"> {/* Farouk */}
            <Link href="/quran"> {/* Farouk */}
              <button className="flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold text-base shadow-lg hover:opacity-90 transition-all active:scale-95"> {/* Farouk */}
                <Play className="w-5 h-5" /> {/* Farouk */}
                استمع للمصحف {/* Farouk */}
              </button> {/* Farouk */}
            </Link> {/* Farouk */}
            <a // Farouk
              href="https://drive.google.com/drive/folders/1PZtZ8SOg0EHNujKyTYuJynPJzmAO-3bZ" // Farouk
              target="_blank" // Farouk
              rel="noopener noreferrer" // Farouk
              className="flex items-center gap-2 bg-secondary text-secondary-foreground px-6 py-3 rounded-full font-semibold text-base shadow-lg hover:opacity-90 transition-all active:scale-95 border border-border" // Farouk
            > {/* Farouk */}
              <Download className="w-5 h-5" /> {/* Farouk */}
              تحميل المصحف كاملاً {/* Farouk */}
            </a> {/* Farouk */}
          </div> {/* Farouk */}
        </div> {/* Farouk */}
      </section> {/* Farouk */}

      {/* ===== SOCIAL LINKS ===== */} {/* Farouk */}
      <section className="py-12 px-4 bg-muted/30"> {/* Farouk */}
        <div className="max-w-5xl mx-auto"> {/* Farouk */}
          <h2 className="text-2xl font-bold text-center text-foreground mb-8"> {/* Farouk */}
            تابعونا على منصات التواصل الاجتماعي {/* Farouk */}
          </h2> {/* Farouk */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3"> {/* Farouk */}
            {socialLinks.map(link => { // Farouk
              const Icon = link.icon; // Farouk
              return ( // Farouk
                <a // Farouk
                  key={link.name} // Farouk
                  href={link.href} // Farouk
                  target="_blank" // Farouk
                  rel="noopener noreferrer" // Farouk
                  className={`social-card flex flex-col items-center gap-2 p-4 rounded-2xl shadow-md ${link.color} ${link.textColor} cursor-pointer`} // Farouk
                > {/* Farouk */}
                  <Icon className="w-6 h-6" /> {/* Farouk */}
                  <span className="text-sm font-semibold text-center leading-tight">{link.name}</span> {/* Farouk */}
                </a> // Farouk
              ); // Farouk
            })} {/* Farouk */}
          </div> {/* Farouk */}
        </div> {/* Farouk */}
      </section> {/* Farouk */}

      {/* ===== AUDIO PLAYER SECTION ===== */} {/* Farouk */}
      <section className="py-12 px-4"> {/* Farouk */}
        <div className="max-w-3xl mx-auto"> {/* Farouk */}
          <h2 className="text-2xl font-bold text-center text-foreground mb-2"> {/* Farouk */}
            🎵 استمع لتلاوات الشيخ {/* Farouk */}
          </h2> {/* Farouk */}
          <p className="text-muted-foreground text-center text-sm mb-6"> {/* Farouk */}
            مشغل صوتي متقدم مع جميع سور القرآن الكريم {/* Farouk */}
          </p> {/* Farouk */}

          <AudioPlayer // Farouk
            surah={featuredSurahs[currentSurahIdx]} // Farouk
            playlist={featuredSurahs} // Farouk
            onNext={() => setCurrentSurahIdx(i => Math.min(i + 1, featuredSurahs.length - 1))} // Farouk
            onPrev={() => setCurrentSurahIdx(i => Math.max(i - 1, 0))} // Farouk
          /> {/* Farouk */}

          {/* Playlist */} {/* Farouk */}
          <div className="mt-4 bg-card border border-border rounded-2xl overflow-hidden"> {/* Farouk */}
            <div className="px-4 py-3 border-b border-border bg-muted/40"> {/* Farouk */}
              <h3 className="font-semibold text-sm text-foreground">قائمة التشغيل — أبرز السور</h3> {/* Farouk */}
            </div> {/* Farouk */}
            <div className="divide-y divide-border max-h-64 overflow-y-auto"> {/* Farouk */}
              {featuredSurahs.map((s, i) => ( // Farouk
                <button // Farouk
                  key={s.id} // Farouk
                  onClick={() => setCurrentSurahIdx(i)} // Farouk
                  className={`w-full flex items-center justify-between px-4 py-2.5 text-sm transition-colors hover:bg-muted/50 ${ // Farouk
                    i === currentSurahIdx ? 'bg-primary/10 text-primary' : 'text-foreground' // Farouk
                  }`} // Farouk
                > {/* Farouk */}
                  <div className="flex items-center gap-3"> {/* Farouk */}
                    <span className="w-6 h-6 rounded-full bg-muted text-muted-foreground text-xs flex items-center justify-center font-mono"> {/* Farouk */}
                      {s.id} {/* Farouk */}
                    </span> {/* Farouk */}
                    <span className="font-medium">سورة {s.name}</span> {/* Farouk */}
                  </div> {/* Farouk */}
                  <span className="text-muted-foreground text-xs">{s.verses} آية</span> {/* Farouk */}
                </button> // Farouk
              ))} {/* Farouk */}
            </div> {/* Farouk */}
            <div className="px-4 py-3 border-t border-border text-center"> {/* Farouk */}
              <Link href="/quran"> {/* Farouk */}
                <button className="text-primary hover:underline text-sm flex items-center gap-1 mx-auto"> {/* Farouk */}
                  عرض جميع السور (114 سورة) <ChevronLeft className="w-4 h-4" /> {/* Farouk */}
                </button> {/* Farouk */}
              </Link> {/* Farouk */}
            </div> {/* Farouk */}
          </div> {/* Farouk */}
        </div> {/* Farouk */}
      </section> {/* Farouk */}

      {/* ===== YOUTUBE SECTION ===== */} {/* Farouk */}
      <section className="py-12 px-4 bg-muted/30"> {/* Farouk */}
        <div className="max-w-5xl mx-auto"> {/* Farouk */}
          <h2 className="text-2xl font-bold text-center text-foreground mb-2"> {/* Farouk */}
            📺 قناة يوتيوب {/* Farouk */}
          </h2> {/* Farouk */}
          <p className="text-muted-foreground text-center text-sm mb-8"> {/* Farouk */}
            اشترك في القناة لمتابعة أحدث التلاوات والمقاطع {/* Farouk */}
          </p> {/* Farouk */}
          <div className="max-w-2xl mx-auto"> {/* Farouk */}
            <div className="aspect-video rounded-2xl overflow-hidden bg-card border border-border shadow-lg"> {/* Farouk */}
              <iframe // Farouk
                src="https://www.youtube.com/embed/videoseries?list=UUmEQwRROa-hTlySNvMtFWnw" // Farouk
                title="قناة الشيخ عبد الرحمن الزواوي" // Farouk
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" // Farouk
                allowFullScreen // Farouk
                className="w-full h-full" // Farouk
              /> {/* Farouk */}
            </div> {/* Farouk */}
            <div className="mt-4 text-center"> {/* Farouk */}
              <a // Farouk
                href="https://www.youtube.com/channel/UCmEQwRROa-hTlySNvMtFWnw" // Farouk
                target="_blank" // Farouk
                rel="noopener noreferrer" // Farouk
                className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-700 transition-colors shadow-md" // Farouk
              > {/* Farouk */}
                <Youtube className="w-5 h-5" /> {/* Farouk */}
                اشترك في القناة {/* Farouk */}
                <ExternalLink className="w-4 h-4" /> {/* Farouk */}
              </a> {/* Farouk */}
            </div> {/* Farouk */}
          </div> {/* Farouk */}
        </div> {/* Farouk */}
      </section> {/* Farouk */}

      {/* ===== QUICK LINKS ===== */} {/* Farouk */}
      <section className="py-12 px-4"> {/* Farouk */}
        <div className="max-w-5xl mx-auto"> {/* Farouk */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4"> {/* Farouk */}
            {[ // Farouk
              { title: 'المصحف الكامل', desc: '114 سورة — استماع وتحميل مجاني', href: '/quran', icon: '📖' }, // Farouk
              { title: 'التحميلات', desc: 'تحميل ملفات المصحف بجودة عالية', href: '/downloads', icon: '⬇️' }, // Farouk
              { title: 'اتصل بنا', desc: 'تواصل معنا عبر الواتساب أو البريد', href: '/contact', icon: '📞' }, // Farouk
            ].map(card => ( // Farouk
              <Link key={card.href} href={card.href}> {/* Farouk */}
                <div className="glow-card bg-card border border-border rounded-2xl p-6 cursor-pointer h-full transition-all hover:border-primary/40"> {/* Farouk */}
                  <div className="text-3xl mb-3">{card.icon}</div> {/* Farouk */}
                  <h3 className="font-bold text-foreground text-lg mb-1">{card.title}</h3> {/* Farouk */}
                  <p className="text-muted-foreground text-sm">{card.desc}</p> {/* Farouk */}
                </div> {/* Farouk */}
              </Link> // Farouk
            ))} {/* Farouk */}
          </div> {/* Farouk */}
        </div> {/* Farouk */}
      </section> {/* Farouk */}

    </div> // Farouk
  ); // Farouk
} // Farouk
