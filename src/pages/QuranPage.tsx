import { useState } from 'react'; // Farouk
import { Search, Download, Play, BookOpen } from 'lucide-react'; // Farouk
import { surahs, getSurahAudioUrl } from '../lib/surahs'; // Farouk
import AudioPlayer from '../components/AudioPlayer'; // Farouk

export default function QuranPage() { // Farouk
  const [search, setSearch] = useState(''); // Farouk
  const [filter, setFilter] = useState<'all' | 'مكية' | 'مدنية'>('all'); // Farouk
  const [activeSurahIdx, setActiveSurahIdx] = useState<number | null>(null); // Farouk

  const filtered = surahs.filter(s => { // Farouk
    const matchSearch = s.name.includes(search) || s.englishName.toLowerCase().includes(search.toLowerCase()); // Farouk
    const matchFilter = filter === 'all' || s.type === filter; // Farouk
    return matchSearch && matchFilter; // Farouk
  }); // Farouk

  const activeSurah = activeSurahIdx !== null ? surahs[activeSurahIdx] : null; // Farouk

  return ( // Farouk
    <div dir="rtl" className="min-h-screen py-8 px-4"> {/* Farouk */}
      <div className="max-w-5xl mx-auto"> {/* Farouk */}

        {/* Header */} {/* Farouk */}
        <div className="text-center mb-8"> {/* Farouk */}
          <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg"> {/* Farouk */}
            <BookOpen className="w-8 h-8 text-primary-foreground" /> {/* Farouk */}
          </div> {/* Farouk */}
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">المصحف الكريم</h1> {/* Farouk */}
          <p className="text-muted-foreground">بصوت الشيخ عبد الرحمن الزواوي — 114 سورة كاملة</p> {/* Farouk */}
        </div> {/* Farouk */}

        {/* Active Player */} {/* Farouk */}
        {activeSurah && ( // Farouk
          <div className="mb-8"> {/* Farouk */}
            <AudioPlayer // Farouk
              surah={activeSurah} // Farouk
              playlist={surahs} // Farouk
              onNext={() => setActiveSurahIdx(i => i !== null ? Math.min(i + 1, surahs.length - 1) : 0)} // Farouk
              onPrev={() => setActiveSurahIdx(i => i !== null ? Math.max(i - 1, 0) : 0)} // Farouk
            /> {/* Farouk */}
          </div> // Farouk
        )} {/* Farouk */}

        {/* Search & Filter */} {/* Farouk */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6"> {/* Farouk */}
          <div className="relative flex-1"> {/* Farouk */}
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" /> {/* Farouk */}
            <input // Farouk
              type="search" // Farouk
              placeholder="ابحث عن سورة..." // Farouk
              value={search} // Farouk
              onChange={e => setSearch(e.target.value)} // Farouk
              className="w-full pr-10 pl-4 py-2.5 rounded-xl border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50" // Farouk
            /> {/* Farouk */}
          </div> {/* Farouk */}
          <div className="flex gap-2"> {/* Farouk */}
            {(['all', 'مكية', 'مدنية'] as const).map(f => ( // Farouk
              <button // Farouk
                key={f} // Farouk
                onClick={() => setFilter(f)} // Farouk
                className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${ // Farouk
                  filter === f ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground hover:bg-muted/60' // Farouk
                }`} // Farouk
              > {/* Farouk */}
                {f === 'all' ? 'الكل' : f} {/* Farouk */}
              </button> // Farouk
            ))} {/* Farouk */}
          </div> {/* Farouk */}
        </div> {/* Farouk */}

        {/* Stats */} {/* Farouk */}
        <p className="text-muted-foreground text-sm mb-4">يعرض {filtered.length} سورة</p> {/* Farouk */}

        {/* Surahs Grid */} {/* Farouk */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3"> {/* Farouk */}
          {filtered.map(surah => { // Farouk
            const isActive = activeSurah?.id === surah.id; // Farouk
            return ( // Farouk
              <div // Farouk
                key={surah.id} // Farouk
                className={`glow-card bg-card border rounded-2xl p-4 transition-all ${ // Farouk
                  isActive ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/40' // Farouk
                }`} // Farouk
              > {/* Farouk */}
                <div className="flex items-center justify-between mb-2"> {/* Farouk */}
                  <div className="flex items-center gap-3"> {/* Farouk */}
                    <div className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold ${ // Farouk
                      isActive ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground' // Farouk
                    }`}> {/* Farouk */}
                      {surah.id} {/* Farouk */}
                    </div> {/* Farouk */}
                    <div> {/* Farouk */}
                      <h3 className="font-bold text-foreground text-sm">سورة {surah.name}</h3> {/* Farouk */}
                      <p className="text-xs text-muted-foreground">{surah.verses} آية — {surah.type}</p> {/* Farouk */}
                    </div> {/* Farouk */}
                  </div> {/* Farouk */}
                  <span className={`text-xs px-2 py-1 rounded-full ${ // Farouk
                    surah.type === 'مكية' ? 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400' : 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400' // Farouk
                  }`}>{surah.type}</span> {/* Farouk */}
                </div> {/* Farouk */}
                <div className="flex gap-2 mt-3"> {/* Farouk */}
                  <button // Farouk
                    onClick={() => setActiveSurahIdx(surah.id - 1)} // Farouk
                    className={`flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl text-xs font-medium transition-colors ${ // Farouk
                      isActive ? 'bg-primary text-primary-foreground' : 'bg-muted hover:bg-muted/60 text-muted-foreground' // Farouk
                    }`} // Farouk
                  > {/* Farouk */}
                    <Play className="w-3.5 h-3.5" /> {/* Farouk */}
                    {isActive ? 'يعزف الآن' : 'تشغيل'} {/* Farouk */}
                  </button> {/* Farouk */}
                  <a // Farouk
                    href={getSurahAudioUrl(surah.id)} // Farouk
                    download // Farouk
                    className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium bg-muted hover:bg-muted/60 text-muted-foreground transition-colors" // Farouk
                  > {/* Farouk */}
                    <Download className="w-3.5 h-3.5" /> {/* Farouk */}
                  </a> {/* Farouk */}
                </div> {/* Farouk */}
              </div> // Farouk
            ); // Farouk
          })} {/* Farouk */}
        </div> {/* Farouk */}

      </div> {/* Farouk */}
    </div> // Farouk
  ); // Farouk
} // Farouk
