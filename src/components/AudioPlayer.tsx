import { useState, useRef, useEffect, useCallback } from 'react'; // Farouk
import { Play, Pause, SkipBack, SkipForward, Volume2, Download, Repeat, Shuffle } from 'lucide-react'; // Farouk
import { Surah, getSurahAudioUrl } from '../lib/surahs'; // Farouk

interface AudioPlayerProps { // Farouk
  surah: Surah; // Farouk
  playlist?: Surah[]; // Farouk
  onNext?: () => void; // Farouk
  onPrev?: () => void; // Farouk
} // Farouk

export default function AudioPlayer({ surah, playlist, onNext, onPrev }: AudioPlayerProps) { // Farouk
  const audioRef = useRef<HTMLAudioElement>(null); // Farouk
  const [playing, setPlaying] = useState(false); // Farouk
  const [currentTime, setCurrentTime] = useState(0); // Farouk
  const [duration, setDuration] = useState(0); // Farouk
  const [volume, setVolume] = useState(1); // Farouk
  const [speed, setSpeed] = useState(1); // Farouk
  const [loading, setLoading] = useState(false); // Farouk
  const [repeat, setRepeat] = useState(false); // Farouk

  const audioUrl = getSurahAudioUrl(surah.id); // Farouk

  useEffect(() => { // Farouk
    const audio = audioRef.current; // Farouk
    if (!audio) return; // Farouk
    setPlaying(false); // Farouk
    setCurrentTime(0); // Farouk
    setDuration(0); // Farouk
    setLoading(true); // Farouk
    audio.load(); // Farouk
  }, [surah.id]); // Farouk

  useEffect(() => { // Farouk
    const audio = audioRef.current; // Farouk
    if (!audio) return; // Farouk
    audio.volume = volume; // Farouk
  }, [volume]); // Farouk

  useEffect(() => { // Farouk
    const audio = audioRef.current; // Farouk
    if (!audio) return; // Farouk
    audio.playbackRate = speed; // Farouk
  }, [speed]); // Farouk

  const togglePlay = useCallback(() => { // Farouk
    const audio = audioRef.current; // Farouk
    if (!audio) return; // Farouk
    if (playing) { // Farouk
      audio.pause(); // Farouk
      setPlaying(false); // Farouk
    } else { // Farouk
      audio.play().catch(console.error); // Farouk
      setPlaying(true); // Farouk
    } // Farouk
  }, [playing]); // Farouk

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => { // Farouk
    const audio = audioRef.current; // Farouk
    if (!audio) return; // Farouk
    const time = Number(e.target.value); // Farouk
    audio.currentTime = time; // Farouk
    setCurrentTime(time); // Farouk
  }; // Farouk

  const formatTime = (t: number) => { // Farouk
    if (!isFinite(t)) return '00:00'; // Farouk
    const m = Math.floor(t / 60); // Farouk
    const s = Math.floor(t % 60); // Farouk
    return `${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`; // Farouk
  }; // Farouk

  const speeds = [0.75, 1, 1.25, 1.5, 2]; // Farouk

  return ( // Farouk
    <div className="bg-card border border-border rounded-2xl p-5 shadow-lg w-full" dir="rtl"> {/* Farouk */}
      <audio // Farouk
        ref={audioRef} // Farouk
        src={audioUrl} // Farouk
        onTimeUpdate={() => setCurrentTime(audioRef.current?.currentTime ?? 0)} // Farouk
        onLoadedMetadata={() => { // Farouk
          setDuration(audioRef.current?.duration ?? 0); // Farouk
          setLoading(false); // Farouk
        }} // Farouk
        onEnded={() => { // Farouk
          if (repeat) { // Farouk
            audioRef.current?.play(); // Farouk
          } else { // Farouk
            setPlaying(false); // Farouk
            onNext?.(); // Farouk
          } // Farouk
        }} // Farouk
        onCanPlay={() => setLoading(false)} // Farouk
        preload="metadata" // Farouk
      /> {/* Farouk */}

      {/* Surah name */} {/* Farouk */}
      <div className="text-center mb-4"> {/* Farouk */}
        <h3 className="text-xl font-bold text-foreground">سورة {surah.name}</h3> {/* Farouk */}
        <p className="text-sm text-muted-foreground">{surah.verses} آية — {surah.type}</p> {/* Farouk */}
      </div> {/* Farouk */}

      {/* Progress bar */} {/* Farouk */}
      <div className="mb-3"> {/* Farouk */}
        <input // Farouk
          type="range" // Farouk
          className="audio-progress" // Farouk
          min={0} // Farouk
          max={duration || 100} // Farouk
          value={currentTime} // Farouk
          onChange={handleSeek} // Farouk
          style={{ // Farouk
            background: `linear-gradient(to left, hsl(var(--primary)) ${(currentTime / (duration || 1)) * 100}%, hsl(var(--muted)) ${(currentTime / (duration || 1)) * 100}%)`, // Farouk
          }} // Farouk
        /> {/* Farouk */}
        <div className="flex justify-between text-xs text-muted-foreground mt-1"> {/* Farouk */}
          <span>{formatTime(currentTime)}</span> {/* Farouk */}
          <span>{loading ? 'جاري التحميل...' : formatTime(duration)}</span> {/* Farouk */}
        </div> {/* Farouk */}
      </div> {/* Farouk */}

      {/* Controls */} {/* Farouk */}
      <div className="flex items-center justify-center gap-4 mb-4"> {/* Farouk */}
        <button // Farouk
          onClick={() => setRepeat(r => !r)} // Farouk
          className={`p-2 rounded-full transition-colors ${ repeat ? 'text-primary' : 'text-muted-foreground hover:text-foreground' }`} // Farouk
          title="تكرار" // Farouk
        > {/* Farouk */}
          <Repeat className="w-4 h-4" /> {/* Farouk */}
        </button> {/* Farouk */}

        <button // Farouk
          onClick={onPrev} // Farouk
          className="p-2 rounded-full text-muted-foreground hover:text-foreground transition-colors" // Farouk
          title="السابقة" // Farouk
        > {/* Farouk */}
          <SkipForward className="w-5 h-5" /> {/* Farouk */}
        </button> {/* Farouk */}

        <button // Farouk
          onClick={togglePlay} // Farouk
          className="w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg hover:opacity-90 transition-all active:scale-95" // Farouk
          disabled={loading} // Farouk
        > {/* Farouk */}
          {loading ? ( // Farouk
            <div className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full loader-ring" /> // Farouk
          ) : playing ? ( // Farouk
            <Pause className="w-6 h-6" /> // Farouk
          ) : ( // Farouk
            <Play className="w-6 h-6 mr-0.5" /> // Farouk
          )} {/* Farouk */}
        </button> {/* Farouk */}

        <button // Farouk
          onClick={onNext} // Farouk
          className="p-2 rounded-full text-muted-foreground hover:text-foreground transition-colors" // Farouk
          title="التالية" // Farouk
        > {/* Farouk */}
          <SkipBack className="w-5 h-5" /> {/* Farouk */}
        </button> {/* Farouk */}

        <a // Farouk
          href={audioUrl} // Farouk
          download={`surah-${surah.name}.mp3`} // Farouk
          className="p-2 rounded-full text-muted-foreground hover:text-primary transition-colors" // Farouk
          title="تحميل" // Farouk
        > {/* Farouk */}
          <Download className="w-4 h-4" /> {/* Farouk */}
        </a> {/* Farouk */}
      </div> {/* Farouk */}

      {/* Volume & Speed */} {/* Farouk */}
      <div className="flex items-center justify-between gap-4 flex-wrap"> {/* Farouk */}
        <div className="flex items-center gap-2 flex-1 min-w-[120px]"> {/* Farouk */}
          <Volume2 className="w-4 h-4 text-muted-foreground shrink-0" /> {/* Farouk */}
          <input // Farouk
            type="range" // Farouk
            className="audio-progress flex-1" // Farouk
            min={0} max={1} step={0.05} // Farouk
            value={volume} // Farouk
            onChange={e => setVolume(Number(e.target.value))} // Farouk
          /> {/* Farouk */}
        </div> {/* Farouk */}
        <div className="flex items-center gap-1"> {/* Farouk */}
          {speeds.map(s => ( // Farouk
            <button // Farouk
              key={s} // Farouk
              onClick={() => setSpeed(s)} // Farouk
              className={`px-2 py-1 rounded text-xs font-mono transition-colors ${ speed === s ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground hover:bg-muted/60' }`} // Farouk
            > {/* Farouk */}
              {s}x {/* Farouk */}
            </button> // Farouk
          ))} {/* Farouk */}
        </div> {/* Farouk */}
      </div> {/* Farouk */}
    </div> // Farouk
  ); // Farouk
} // Farouk
