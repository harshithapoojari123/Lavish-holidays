import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Phone, Mail, MapPin, Calendar, Users, MessageCircle, CheckCircle } from 'lucide-react';
import { business, popularDestinations } from '../data/business';

export default function EnquiryModal({ isOpen, onClose, initialDestination = "", initialPackage = "" }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    destination: initialDestination || 'Maldives',
    travelDate: '',
    travellers: '2 Adults',
    packageInterest: initialPackage || '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialDestination) {
      setFormData(prev => ({ ...prev, destination: initialDestination }));
    }
    if (initialPackage) {
      setFormData(prev => ({ ...prev, packageInterest: initialPackage }));
    }
  }, [initialDestination, initialPackage]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Construct pre-formatted WhatsApp message
    const waText = encodeURIComponent(
      `*New Trip Enquiry - Lavish Holidays*\n\n` +
      `👤 *Name:* ${formData.name || 'Not provided'}\n` +
      `📞 *Phone:* ${formData.phone || 'Not provided'}\n` +
      `📍 *Destination:* ${formData.destination}\n` +
      `${formData.packageInterest ? `📦 *Package:* ${formData.packageInterest}\n` : ''}` +
      `📅 *Travel Date:* ${formData.travelDate || 'Flexible'}\n` +
      `👥 *Travellers:* ${formData.travellers}\n` +
      `💬 *Notes:* ${formData.message || 'Looking for customized itinerary options.'}\n\n` +
      `_Sent from lavish-holidays website_`
    );

    // Open WhatsApp
    window.open(`https://wa.me/${business.contact.whatsapp}?text=${waText}`, '_blank');
    setSubmitted(true);
  };

  const handleEmailSubmit = () => {
    const subject = encodeURIComponent(`Holiday Enquiry for ${formData.destination} - ${formData.name}`);
    const body = encodeURIComponent(
      `Hello Lavish Holidays Team,\n\n` +
      `I am interested in planning a vacation.\n\n` +
      `Name: ${formData.name}\n` +
      `Phone: ${formData.phone}\n` +
      `Destination: ${formData.destination}\n` +
      `Package: ${formData.packageInterest || 'Custom Itinerary'}\n` +
      `Preferred Travel Date: ${formData.travelDate || 'Flexible'}\n` +
      `Travellers: ${formData.travellers}\n` +
      `Message: ${formData.message}\n\n` +
      `Please contact me with customized travel options.\n`
    );
    window.location.href = `mailto:${business.contact.email}?subject=${subject}&body=${body}`;
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/70 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative bg-white rounded-3xl shadow-2xl max-w-xl w-full overflow-hidden z-10 border border-slate-100"
        >
          {/* Header Banner */}
          <div className="bg-gradient-to-r from-[#0F294A] to-[#1E3A8A] text-white p-6 sm:p-8 relative">
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
            <p className="text-amber-300 font-semibold text-xs tracking-[0.2em] uppercase mb-1">
              Start Planning Your Journey
            </p>
            <h3 className="text-2xl sm:text-3xl font-heading font-normal text-white">
              {formData.packageInterest ? `Enquire for ${formData.packageInterest}` : 'Tailor Your Dream Holiday'}
            </h3>
            <p className="text-white/80 text-sm mt-1 font-light">
              Tell us your preferences and our travel designers will craft a bespoke itinerary for you.
            </p>
          </div>

          {submitted ? (
            <div className="p-8 text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-heading text-slate-800">Enquiry Initiated!</h4>
              <p className="text-slate-600 text-sm leading-relaxed max-w-md mx-auto">
                Your request has been forwarded to our travel desk on WhatsApp. You can also reach our team immediately on phone or email.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={`tel:${business.contact.phone.replace(/\s/g, '')}`}
                  className="px-6 py-3 bg-slate-900 text-white text-xs font-semibold rounded-xl uppercase tracking-wider hover:bg-slate-800 transition-colors"
                >
                  Call {business.contact.phone}
                </a>
                <button
                  onClick={() => { setSubmitted(false); onClose(); }}
                  className="px-6 py-3 border border-slate-200 text-slate-700 text-xs font-semibold rounded-xl uppercase tracking-wider hover:bg-slate-50 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rajesh Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                    Destination
                  </label>
                  <select
                    value={formData.destination}
                    onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500"
                  >
                    <option value="Maldives">Maldives</option>
                    <option value="Europe">Europe (Paris, Swiss, Italy)</option>
                    <option value="Bali">Bali (Indonesia)</option>
                    <option value="Dubai">Dubai & UAE</option>
                    <option value="Thailand">Thailand (Phuket & Krabi)</option>
                    <option value="Singapore">Singapore</option>
                    <option value="Domestic (Kashmir/Kerala/Goa)">Domestic Getaway</option>
                    <option value="Other / Multiple Destinations">Other / Customized</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                    Travellers
                  </label>
                  <select
                    value={formData.travellers}
                    onChange={(e) => setFormData({ ...formData, travellers: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500"
                  >
                    <option value="Solo Traveller">Solo (1 Person)</option>
                    <option value="2 Adults (Couple / Honeymoon)">2 Adults (Couple / Honeymoon)</option>
                    <option value="Family (2 Adults + Kids)">Family (2 Adults + Kids)</option>
                    <option value="Group (4-8 Travellers)">Small Group (4-8 Travellers)</option>
                    <option value="Large Group (10+ Travellers)">Large Group (10+)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                    Preferred Travel Date / Month
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Next Month / Nov 2026"
                    value={formData.travelDate}
                    onChange={(e) => setFormData({ ...formData, travelDate: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                    Email Address (Optional)
                  </label>
                  <input
                    type="email"
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                  Special Wishes / Requirements (Optional)
                </label>
                <textarea
                  rows="2"
                  placeholder="e.g. Need beachfront pool villa, anniversary celebration, candlelight dinner..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 resize-none"
                ></textarea>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  className="flex-1 py-3.5 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/20 transition-all cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Enquire on WhatsApp</span>
                </button>
                <button
                  type="button"
                  onClick={handleEmailSubmit}
                  className="py-3.5 px-5 rounded-xl border border-slate-200 hover:border-slate-300 text-slate-700 font-semibold text-sm flex items-center justify-center gap-2 hover:bg-slate-50 transition-colors cursor-pointer"
                >
                  <Mail className="w-4 h-4 text-slate-500" />
                  <span>Email Instead</span>
                </button>
              </div>

              <p className="text-[11px] text-center text-slate-400 pt-1">
                🔒 No payment required. Tailored pricing and luxury options shared directly.
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
