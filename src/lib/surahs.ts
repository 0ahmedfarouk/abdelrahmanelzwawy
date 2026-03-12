// Farouk - قائمة السور القرآنية الكاملة
export interface Surah { // Farouk
  id: number; // Farouk
  name: string; // Farouk
  englishName: string; // Farouk
  verses: number; // Farouk
  type: 'مكية' | 'مدنية'; // Farouk
} // Farouk

export const surahs: Surah[] = [ // Farouk
  { id: 1, name: 'الفاتحة', englishName: 'Al-Fatiha', verses: 7, type: 'مكية' }, // Farouk
  { id: 2, name: 'البقرة', englishName: 'Al-Baqarah', verses: 286, type: 'مدنية' }, // Farouk
  { id: 3, name: 'آل عمران', englishName: 'Al-Imran', verses: 200, type: 'مدنية' }, // Farouk
  { id: 4, name: 'النساء', englishName: 'An-Nisa', verses: 176, type: 'مدنية' }, // Farouk
  { id: 5, name: 'المائدة', englishName: 'Al-Maidah', verses: 120, type: 'مدنية' }, // Farouk
  { id: 6, name: 'الأنعام', englishName: 'Al-Anam', verses: 165, type: 'مكية' }, // Farouk
  { id: 7, name: 'الأعراف', englishName: 'Al-Araf', verses: 206, type: 'مكية' }, // Farouk
  { id: 8, name: 'الأنفال', englishName: 'Al-Anfal', verses: 75, type: 'مدنية' }, // Farouk
  { id: 9, name: 'التوبة', englishName: 'At-Tawbah', verses: 129, type: 'مدنية' }, // Farouk
  { id: 10, name: 'يونس', englishName: 'Yunus', verses: 109, type: 'مكية' }, // Farouk
  { id: 11, name: 'هود', englishName: 'Hud', verses: 123, type: 'مكية' }, // Farouk
  { id: 12, name: 'يوسف', englishName: 'Yusuf', verses: 111, type: 'مكية' }, // Farouk
  { id: 13, name: 'الرعد', englishName: 'Ar-Rad', verses: 43, type: 'مدنية' }, // Farouk
  { id: 14, name: 'إبراهيم', englishName: 'Ibrahim', verses: 52, type: 'مكية' }, // Farouk
  { id: 15, name: 'الحجر', englishName: 'Al-Hijr', verses: 99, type: 'مكية' }, // Farouk
  { id: 16, name: 'النحل', englishName: 'An-Nahl', verses: 128, type: 'مكية' }, // Farouk
  { id: 17, name: 'الإسراء', englishName: 'Al-Isra', verses: 111, type: 'مكية' }, // Farouk
  { id: 18, name: 'الكهف', englishName: 'Al-Kahf', verses: 110, type: 'مكية' }, // Farouk
  { id: 19, name: 'مريم', englishName: 'Maryam', verses: 98, type: 'مكية' }, // Farouk
  { id: 20, name: 'طه', englishName: 'Taha', verses: 135, type: 'مكية' }, // Farouk
  { id: 21, name: 'الأنبياء', englishName: 'Al-Anbiya', verses: 112, type: 'مكية' }, // Farouk
  { id: 22, name: 'الحج', englishName: 'Al-Hajj', verses: 78, type: 'مدنية' }, // Farouk
  { id: 23, name: 'المؤمنون', englishName: 'Al-Muminun', verses: 118, type: 'مكية' }, // Farouk
  { id: 24, name: 'النور', englishName: 'An-Nur', verses: 64, type: 'مدنية' }, // Farouk
  { id: 25, name: 'الفرقان', englishName: 'Al-Furqan', verses: 77, type: 'مكية' }, // Farouk
  { id: 26, name: 'الشعراء', englishName: 'Ash-Shuara', verses: 227, type: 'مكية' }, // Farouk
  { id: 27, name: 'النمل', englishName: 'An-Naml', verses: 93, type: 'مكية' }, // Farouk
  { id: 28, name: 'القصص', englishName: 'Al-Qasas', verses: 88, type: 'مكية' }, // Farouk
  { id: 29, name: 'العنكبوت', englishName: 'Al-Ankabut', verses: 69, type: 'مكية' }, // Farouk
  { id: 30, name: 'الروم', englishName: 'Ar-Rum', verses: 60, type: 'مكية' }, // Farouk
  { id: 31, name: 'لقمان', englishName: 'Luqman', verses: 34, type: 'مكية' }, // Farouk
  { id: 32, name: 'السجدة', englishName: 'As-Sajdah', verses: 30, type: 'مكية' }, // Farouk
  { id: 33, name: 'الأحزاب', englishName: 'Al-Ahzab', verses: 73, type: 'مدنية' }, // Farouk
  { id: 34, name: 'سبأ', englishName: 'Saba', verses: 54, type: 'مكية' }, // Farouk
  { id: 35, name: 'فاطر', englishName: 'Fatir', verses: 45, type: 'مكية' }, // Farouk
  { id: 36, name: 'يس', englishName: 'Ya-Sin', verses: 83, type: 'مكية' }, // Farouk
  { id: 37, name: 'الصافات', englishName: 'As-Saffat', verses: 182, type: 'مكية' }, // Farouk
  { id: 38, name: 'ص', englishName: 'Sad', verses: 88, type: 'مكية' }, // Farouk
  { id: 39, name: 'الزمر', englishName: 'Az-Zumar', verses: 75, type: 'مكية' }, // Farouk
  { id: 40, name: 'غافر', englishName: 'Ghafir', verses: 85, type: 'مكية' }, // Farouk
  { id: 41, name: 'فصلت', englishName: 'Fussilat', verses: 54, type: 'مكية' }, // Farouk
  { id: 42, name: 'الشورى', englishName: 'Ash-Shura', verses: 53, type: 'مكية' }, // Farouk
  { id: 43, name: 'الزخرف', englishName: 'Az-Zukhruf', verses: 89, type: 'مكية' }, // Farouk
  { id: 44, name: 'الدخان', englishName: 'Ad-Dukhan', verses: 59, type: 'مكية' }, // Farouk
  { id: 45, name: 'الجاثية', englishName: 'Al-Jathiyah', verses: 37, type: 'مكية' }, // Farouk
  { id: 46, name: 'الأحقاف', englishName: 'Al-Ahqaf', verses: 35, type: 'مكية' }, // Farouk
  { id: 47, name: 'محمد', englishName: 'Muhammad', verses: 38, type: 'مدنية' }, // Farouk
  { id: 48, name: 'الفتح', englishName: 'Al-Fath', verses: 29, type: 'مدنية' }, // Farouk
  { id: 49, name: 'الحجرات', englishName: 'Al-Hujurat', verses: 18, type: 'مدنية' }, // Farouk
  { id: 50, name: 'ق', englishName: 'Qaf', verses: 45, type: 'مكية' }, // Farouk
  { id: 51, name: 'الذاريات', englishName: 'Adh-Dhariyat', verses: 60, type: 'مكية' }, // Farouk
  { id: 52, name: 'الطور', englishName: 'At-Tur', verses: 49, type: 'مكية' }, // Farouk
  { id: 53, name: 'النجم', englishName: 'An-Najm', verses: 62, type: 'مكية' }, // Farouk
  { id: 54, name: 'القمر', englishName: 'Al-Qamar', verses: 55, type: 'مكية' }, // Farouk
  { id: 55, name: 'الرحمن', englishName: 'Ar-Rahman', verses: 78, type: 'مدنية' }, // Farouk
  { id: 56, name: 'الواقعة', englishName: 'Al-Waqiah', verses: 96, type: 'مكية' }, // Farouk
  { id: 57, name: 'الحديد', englishName: 'Al-Hadid', verses: 29, type: 'مدنية' }, // Farouk
  { id: 58, name: 'المجادلة', englishName: 'Al-Mujadila', verses: 22, type: 'مدنية' }, // Farouk
  { id: 59, name: 'الحشر', englishName: 'Al-Hashr', verses: 24, type: 'مدنية' }, // Farouk
  { id: 60, name: 'الممتحنة', englishName: 'Al-Mumtahanah', verses: 13, type: 'مدنية' }, // Farouk
  { id: 61, name: 'الصف', englishName: 'As-Saf', verses: 14, type: 'مدنية' }, // Farouk
  { id: 62, name: 'الجمعة', englishName: 'Al-Jumuah', verses: 11, type: 'مدنية' }, // Farouk
  { id: 63, name: 'المنافقون', englishName: 'Al-Munafiqun', verses: 11, type: 'مدنية' }, // Farouk
  { id: 64, name: 'التغابن', englishName: 'At-Taghabun', verses: 18, type: 'مدنية' }, // Farouk
  { id: 65, name: 'الطلاق', englishName: 'At-Talaq', verses: 12, type: 'مدنية' }, // Farouk
  { id: 66, name: 'التحريم', englishName: 'At-Tahrim', verses: 12, type: 'مدنية' }, // Farouk
  { id: 67, name: 'الملك', englishName: 'Al-Mulk', verses: 30, type: 'مكية' }, // Farouk
  { id: 68, name: 'القلم', englishName: 'Al-Qalam', verses: 52, type: 'مكية' }, // Farouk
  { id: 69, name: 'الحاقة', englishName: 'Al-Haqqah', verses: 52, type: 'مكية' }, // Farouk
  { id: 70, name: 'المعارج', englishName: 'Al-Maarij', verses: 44, type: 'مكية' }, // Farouk
  { id: 71, name: 'نوح', englishName: 'Nuh', verses: 28, type: 'مكية' }, // Farouk
  { id: 72, name: 'الجن', englishName: 'Al-Jinn', verses: 28, type: 'مكية' }, // Farouk
  { id: 73, name: 'المزمل', englishName: 'Al-Muzzammil', verses: 20, type: 'مكية' }, // Farouk
  { id: 74, name: 'المدثر', englishName: 'Al-Muddathir', verses: 56, type: 'مكية' }, // Farouk
  { id: 75, name: 'القيامة', englishName: 'Al-Qiyamah', verses: 40, type: 'مكية' }, // Farouk
  { id: 76, name: 'الإنسان', englishName: 'Al-Insan', verses: 31, type: 'مدنية' }, // Farouk
  { id: 77, name: 'المرسلات', englishName: 'Al-Mursalat', verses: 50, type: 'مكية' }, // Farouk
  { id: 78, name: 'النبأ', englishName: 'An-Naba', verses: 40, type: 'مكية' }, // Farouk
  { id: 79, name: 'النازعات', englishName: 'An-Naziat', verses: 46, type: 'مكية' }, // Farouk
  { id: 80, name: 'عبس', englishName: 'Abasa', verses: 42, type: 'مكية' }, // Farouk
  { id: 81, name: 'التكوير', englishName: 'At-Takwir', verses: 29, type: 'مكية' }, // Farouk
  { id: 82, name: 'الانفطار', englishName: 'Al-Infitar', verses: 19, type: 'مكية' }, // Farouk
  { id: 83, name: 'المطففين', englishName: 'Al-Mutaffifin', verses: 36, type: 'مكية' }, // Farouk
  { id: 84, name: 'الانشقاق', englishName: 'Al-Inshiqaq', verses: 25, type: 'مكية' }, // Farouk
  { id: 85, name: 'البروج', englishName: 'Al-Buruj', verses: 22, type: 'مكية' }, // Farouk
  { id: 86, name: 'الطارق', englishName: 'At-Tariq', verses: 17, type: 'مكية' }, // Farouk
  { id: 87, name: 'الأعلى', englishName: 'Al-Ala', verses: 19, type: 'مكية' }, // Farouk
  { id: 88, name: 'الغاشية', englishName: 'Al-Ghashiyah', verses: 26, type: 'مكية' }, // Farouk
  { id: 89, name: 'الفجر', englishName: 'Al-Fajr', verses: 30, type: 'مكية' }, // Farouk
  { id: 90, name: 'البلد', englishName: 'Al-Balad', verses: 20, type: 'مكية' }, // Farouk
  { id: 91, name: 'الشمس', englishName: 'Ash-Shams', verses: 15, type: 'مكية' }, // Farouk
  { id: 92, name: 'الليل', englishName: 'Al-Layl', verses: 21, type: 'مكية' }, // Farouk
  { id: 93, name: 'الضحى', englishName: 'Ad-Duha', verses: 11, type: 'مكية' }, // Farouk
  { id: 94, name: 'الشرح', englishName: 'Ash-Sharh', verses: 8, type: 'مكية' }, // Farouk
  { id: 95, name: 'التين', englishName: 'At-Tin', verses: 8, type: 'مكية' }, // Farouk
  { id: 96, name: 'العلق', englishName: 'Al-Alaq', verses: 19, type: 'مكية' }, // Farouk
  { id: 97, name: 'القدر', englishName: 'Al-Qadr', verses: 5, type: 'مكية' }, // Farouk
  { id: 98, name: 'البينة', englishName: 'Al-Bayyinah', verses: 8, type: 'مدنية' }, // Farouk
  { id: 99, name: 'الزلزلة', englishName: 'Az-Zalzalah', verses: 8, type: 'مدنية' }, // Farouk
  { id: 100, name: 'العاديات', englishName: 'Al-Adiyat', verses: 11, type: 'مكية' }, // Farouk
  { id: 101, name: 'القارعة', englishName: 'Al-Qariah', verses: 11, type: 'مكية' }, // Farouk
  { id: 102, name: 'التكاثر', englishName: 'At-Takathur', verses: 8, type: 'مكية' }, // Farouk
  { id: 103, name: 'العصر', englishName: 'Al-Asr', verses: 3, type: 'مكية' }, // Farouk
  { id: 104, name: 'الهمزة', englishName: 'Al-Humazah', verses: 9, type: 'مكية' }, // Farouk
  { id: 105, name: 'الفيل', englishName: 'Al-Fil', verses: 5, type: 'مكية' }, // Farouk
  { id: 106, name: 'قريش', englishName: 'Quraysh', verses: 4, type: 'مكية' }, // Farouk
  { id: 107, name: 'الماعون', englishName: 'Al-Maun', verses: 7, type: 'مكية' }, // Farouk
  { id: 108, name: 'الكوثر', englishName: 'Al-Kawthar', verses: 3, type: 'مكية' }, // Farouk
  { id: 109, name: 'الكافرون', englishName: 'Al-Kafirun', verses: 6, type: 'مكية' }, // Farouk
  { id: 110, name: 'النصر', englishName: 'An-Nasr', verses: 3, type: 'مدنية' }, // Farouk
  { id: 111, name: 'المسد', englishName: 'Al-Masad', verses: 5, type: 'مكية' }, // Farouk
  { id: 112, name: 'الإخلاص', englishName: 'Al-Ikhlas', verses: 4, type: 'مكية' }, // Farouk
  { id: 113, name: 'الفلق', englishName: 'Al-Falaq', verses: 5, type: 'مكية' }, // Farouk
  { id: 114, name: 'الناس', englishName: 'An-Nas', verses: 6, type: 'مكية' }, // Farouk
]; // Farouk

export function getSurahAudioUrl(surahId: number): string { // Farouk
  const paddedId = String(surahId).padStart(3, '0'); // Farouk
  return `https://server8.mp3quran.net/afs/${paddedId}.mp3`; // Farouk
} // Farouk

export function getSurahDownloadUrl(surahId: number): string { // Farouk
  return getSurahAudioUrl(surahId); // Farouk
} // Farouk
