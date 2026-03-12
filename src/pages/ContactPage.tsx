import { useState } from 'react'; // Farouk
import { // Farouk
  MessageCircle, Send, Facebook, Youtube, Twitter, // Farouk
  Instagram, Music2, MapPin, Mail, Phone, CheckCircle // Farouk
} from 'lucide-react'; // Farouk

const contactLinks = [ // Farouk
  { // Farouk
    name: 'واتساب', // Farouk
    href: 'https://wa.me/+20', // Farouk
    icon: MessageCircle, // Farouk
    color: 'bg-emerald-500', // Farouk
    desc: 'تواصل عبر الواتساب مباشرة', // Farouk
  }, // Farouk
  { // Farouk
    name: 'تليجرام', // Farouk
    href: 'https://t.me/abdelrahmanelzwawy', // Farouk
    icon: Send, // Farouk
    color: 'bg-sky-500', // Farouk
    desc: 'قناة الشيخ على تليجرام', // Farouk
  }, // Farouk
  { // Farouk
    name: 'فيسبوك', // Farouk
    href: 'https://www.facebook.com/AbdElRahmanElzwawy', // Farouk
    icon: Facebook, // Farouk
    color: 'bg-blue-600', // Farouk
    desc: 'الصفحة الرسمية على فيسبوك', // Farouk
  }, // Farouk
  { // Farouk
    name: 'إنستجرام', // Farouk
    href: 'https://www.instagram.com/abdelrahman.elzwawy/', // Farouk
    icon: Instagram, // Farouk
    color: 'bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400', // Farouk
    desc: 'متابعة على انستجرام', // Farouk
  }, // Farouk
  { // Farouk
    name: 'موقع المسجد', // Farouk
    href: 'https://maps.app.goo.gl/VqNXrqVBTsYTkQi6A', // Farouk
    icon: MapPin, // Farouk
    color: 'bg-green-600', // Farouk
    desc: 'عنوان المسجد على الخريطة', // Farouk
  }, // Farouk
]; // Farouk

export default function ContactPage() { // Farouk
  const [form, setForm] = useState({ name: '', email: '', message: '' }); // Farouk
  const [sent, setSent] = useState(false); // Farouk

  const handleSubmit = (e: React.FormEvent) => { // Farouk
    e.preventDefault(); // Farouk
    // Build WhatsApp message // Farouk
    const text = encodeURIComponent(`الاسم: ${form.name}\nالبريد: ${form.email}\nالرسالة: ${form.message}`); // Farouk
    window.open(`https://wa.me/+20?text=${text}`, '_blank'); // Farouk
    setSent(true); // Farouk
    setTimeout(() => setSent(false), 4000); // Farouk
  }; // Farouk

  return ( // Farouk
    <div dir="rtl" className="min-h-screen py-8 px-4"> {/* Farouk */}
      <div className="max-w-4xl mx-auto"> {/* Farouk */}

        {/* Header */} {/* Farouk */}
        <div className="text-center mb-10"> {/* Farouk */}
          <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg"> {/* Farouk */}
            <Mail className="w-8 h-8 text-primary-foreground" /> {/* Farouk */}
          </div> {/* Farouk */}
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">اتصل بنا</h1> {/* Farouk */}
          <p className="text-muted-foreground">نسعد بتواصلكم وإقتراحاتكم الكريمة</p> {/* Farouk */}
        </div> {/* Farouk */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8"> {/* Farouk */}

          {/* Contact Form */} {/* Farouk */}
          <div className="bg-card border border-border rounded-2xl p-6 shadow-md"> {/* Farouk */}
            <h2 className="text-xl font-bold text-foreground mb-5 flex items-center gap-2"> {/* Farouk */}
              <MessageCircle className="w-5 h-5 text-primary" /> {/* Farouk */}
              أرسل رسالة {/* Farouk */}
            </h2> {/* Farouk */}

            {sent && ( // Farouk
              <div className="flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 rounded-xl px-4 py-3 mb-4 text-sm"> {/* Farouk */}
                <CheckCircle className="w-4 h-4" /> {/* Farouk */}
                تم الإرسال عبر الواتساب! {/* Farouk */}
              </div> // Farouk
            )} {/* Farouk */}

            <form onSubmit={handleSubmit} className="flex flex-col gap-4"> {/* Farouk */}
              <div> {/* Farouk */}
                <label className="block text-sm font-medium text-foreground mb-1">الاسم</label> {/* Farouk */}
                <input // Farouk
                  type="text" // Farouk
                  required // Farouk
                  placeholder="اكتب اسمك هنا..." // Farouk
                  value={form.name} // Farouk
                  onChange={e => setForm(f => ({ ...f, name: e.target.value }))} // Farouk
                  className="w-full px-4 py-2.5 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm" // Farouk
                /> {/* Farouk */}
              </div> {/* Farouk */}
              <div> {/* Farouk */}
                <label className="block text-sm font-medium text-foreground mb-1">البريد الإلكتروني (اختياري)</label> {/* Farouk */}
                <input // Farouk
                  type="email" // Farouk
                  placeholder="example@email.com" // Farouk
                  value={form.email} // Farouk
                  onChange={e => setForm(f => ({ ...f, email: e.target.value }))} // Farouk
                  className="w-full px-4 py-2.5 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm" // Farouk
                  dir="ltr" // Farouk
                /> {/* Farouk */}
              </div> {/* Farouk */}
              <div> {/* Farouk */}
                <label className="block text-sm font-medium text-foreground mb-1">الرسالة</label> {/* Farouk */}
                <textarea // Farouk
                  required // Farouk
                  rows={5} // Farouk
                  placeholder="اكتب رسالتك هنا..." // Farouk
                  value={form.message} // Farouk
                  onChange={e => setForm(f => ({ ...f, message: e.target.value }))} // Farouk
                  className="w-full px-4 py-2.5 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm resize-none" // Farouk
                /> {/* Farouk */}
              </div> {/* Farouk */}
              <button // Farouk
                type="submit" // Farouk
                className="flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-semibold text-sm hover:opacity-90 transition-all active:scale-95 shadow-md" // Farouk
              > {/* Farouk */}
                <MessageCircle className="w-4 h-4" /> {/* Farouk */}
                إرسال عبر الواتساب {/* Farouk */}
              </button> {/* Farouk */}
            </form> {/* Farouk */}
          </div> {/* Farouk */}

          {/* Contact Links */} {/* Farouk */}
          <div className="flex flex-col gap-4"> {/* Farouk */}
            <h2 className="text-xl font-bold text-foreground flex items-center gap-2"> {/* Farouk */}
              <Phone className="w-5 h-5 text-primary" /> {/* Farouk */}
              قنوات التواصل {/* Farouk */}
            </h2> {/* Farouk */}
            {contactLinks.map(link => { // Farouk
              const Icon = link.icon; // Farouk
              return ( // Farouk
                <a // Farouk
                  key={link.name} // Farouk
                  href={link.href} // Farouk
                  target="_blank" // Farouk
                  rel="noopener noreferrer" // Farouk
                  className="social-card flex items-center gap-4 bg-card border border-border rounded-2xl p-4 hover:border-primary/40 transition-all group" // Farouk
                > {/* Farouk */}
                  <div className={`w-11 h-11 rounded-xl ${link.color} flex items-center justify-center shadow-md shrink-0`}> {/* Farouk */}
                    <Icon className="w-5 h-5 text-white" /> {/* Farouk */}
                  </div> {/* Farouk */}
                  <div className="flex-1"> {/* Farouk */}
                    <p className="font-semibold text-foreground text-sm">{link.name}</p> {/* Farouk */}
                    <p className="text-xs text-muted-foreground">{link.desc}</p> {/* Farouk */}
                  </div> {/* Farouk */}
                  <span className="text-muted-foreground group-hover:text-primary text-xs transition-colors">←</span> {/* Farouk */}
                </a> // Farouk
              ); // Farouk
            })} {/* Farouk */}

            {/* Map Embed */} {/* Farouk */}
            <div className="bg-card border border-border rounded-2xl overflow-hidden h-40 shadow-md"> {/* Farouk */}
              <iframe // Farouk
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55250.06!2d31.24!3d30.06!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDAzJzM2LjAiTiAzMcKwMTQnMjQuMCJF!5e0!3m2!1sar!2seg!4v1" // Farouk
                title="موقع المسجد" // Farouk
                width="100%" // Farouk
                height="100%" // Farouk
                style={{ border: 0 }} // Farouk
                allowFullScreen // Farouk
                loading="lazy" // Farouk
                referrerPolicy="no-referrer-when-downgrade" // Farouk
              /> {/* Farouk */}
            </div> {/* Farouk */}
          </div> {/* Farouk */}
        </div> {/* Farouk */}

      </div> {/* Farouk */}
    </div> // Farouk
  ); // Farouk
} // Farouk
