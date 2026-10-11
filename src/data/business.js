export const business = {
  name: "Lavish Holidays",
  tagline: "Travel • Explore • Live More",
  slogan: "Your Journey, Our Passion",
  founder: {
    name: "Bhuvana Morla",
    designation: "Founder & Managing Director",
    bio: "With a profound passion for exploring the world's most breathtaking destinations, Bhuvana Morla established Lavish Holidays to transform how discerning travelers experience the globe. Her vision is rooted in the belief that every journey should be as unique as the traveler themselves, crafted with meticulous attention to detail and an unwavering commitment to excellence.",
    image: "/founder.png"
  },
  contact: {
    phone: "+91 8555076959",
    phoneSecondary: "+91 8074444678",
    whatsapp: "918555076959",
    email: "lavishholidays89@gmail.com",
    address: "Flat C16, LIC Jeevan Soudha Apartments, HB Colony, Vizag - 530022",
    mapsUrl: "https://maps.google.com/?q=LIC+Jeevan+Soudha+Apartments,+HB+Colony,+Vizag"
  },
  social: {
    instagram: "#",
    facebook: "#",
    youtube: "#"
  },
  logo: "/logo.jpg"
};

export const heroSlides = [
  {
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=85&w=2000&auto=format&fit=crop",
    eyebrow: "YOUR DREAM HOLIDAY AWAITS",
    title: "The World Is Yours to Explore",
    subtitle: "Extraordinary destinations. Thoughtfully planned journeys. Memories that last forever.",
    locationTag: "Maldives • Private Island Haven"
  },
  {
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=85&w=2000&auto=format&fit=crop",
    eyebrow: "HANDCRAFTED LUXURY VOYAGES",
    title: "Grand European Escapes",
    subtitle: "Wander through romantic Parisian boulevards, Swiss alpine summits, and historic Italian coastlines.",
    locationTag: "Europe • Swiss Alps & Paris"
  },
  {
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=85&w=2000&auto=format&fit=crop",
    eyebrow: "TROPICAL SANCTUARIES",
    title: "Enchanting Bali & Far East",
    subtitle: "Emerald rice terraces, ancient water temples, pristine beaches and private luxury villas.",
    locationTag: "Bali • Tropical Retreats"
  }
];

export const specialInterests = [
  { id: "honeymoon", name: "Honeymoon Packages", icon: "Heart", color: "from-rose-500/10 to-pink-500/10" },
  { id: "family", name: "Family Holidays", icon: "Users", color: "from-amber-500/10 to-orange-500/10" },
  { id: "group", name: "Group Tours", icon: "UsersRound", color: "from-blue-500/10 to-indigo-500/10" },
  { id: "adventure", name: "Adventure Trips", icon: "Mountain", color: "from-emerald-500/10 to-teal-500/10" },
  { id: "luxury", name: "Luxury Experiences", icon: "Gem", color: "from-amber-400/10 to-yellow-500/10" },
  { id: "spiritual", name: "Spiritual Journeys", icon: "Sparkles", color: "from-orange-500/10 to-amber-600/10" },
  { id: "beach", name: "Beach Vacations", icon: "Palmtree", color: "from-cyan-500/10 to-blue-500/10" },
  { id: "international", name: "International Packages", icon: "Globe", color: "from-indigo-500/10 to-violet-500/10" },
  { id: "domestic", name: "Domestic Getaways", icon: "Compass", color: "from-teal-500/10 to-emerald-500/10" },
  { id: "customized", name: "Customized Holidays", icon: "SlidersHorizontal", color: "from-purple-500/10 to-pink-500/10" }
];

export const popularDestinations = [
  {
    id: "maldives",
    name: "Maldives",
    tagline: "Overwater Villas & Azure Lagoons",
    category: "Beach Vacations",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=85&w=1000&auto=format&fit=crop",
    featured: true,
    highlights: ["Private Overwater Bungalows", "Snorkeling with Manta Rays", "Underwater Dining", "Speedboat & Seaplane Transfers"]
  },
  {
    id: "europe",
    name: "Europe",
    tagline: "Paris, Switzerland & Italian Lakes",
    category: "International Packages",
    image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=85&w=1000&auto=format&fit=crop",
    featured: true,
    highlights: ["Eiffel Tower & Seine Cruise", "Swiss Alps Jungfraujoch", "Venice Gondola Rides", "Scenic High-Speed Trains"]
  },
  {
    id: "bali",
    name: "Bali",
    tagline: "Temples, Terraces & Ocean Sunsets",
    category: "Honeymoon Packages",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=85&w=1000&auto=format&fit=crop",
    featured: true,
    highlights: ["Ubud Private Pool Villas", "Ulun Danu Water Temple", "Nusa Penida Day Tour", "Traditional Balinese Spa"]
  },
  {
    id: "dubai",
    name: "Dubai",
    tagline: "Futuristic Wonders & Desert Glamour",
    category: "Luxury Experiences",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=85&w=1000&auto=format&fit=crop",
    featured: true,
    highlights: ["Burj Khalifa Top View", "VIP Desert Safari with BBQ", "Marina Luxury Yacht Cruise", "Dazzling Gold & Spice Souks"]
  },
  {
    id: "thailand",
    name: "Thailand",
    tagline: "Tropical Islands & Grand Palaces",
    category: "Beach Vacations",
    image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=85&w=1000&auto=format&fit=crop",
    featured: true,
    highlights: ["Phuket Luxury Resorts", "Phi Phi Islands Speedboat", "Bangkok Floating Markets", "Iconic Buddhist Sanctuaries"]
  },
  {
    id: "singapore",
    name: "Singapore",
    tagline: "Garden Metropolis & Sentosa Fun",
    category: "Family Holidays",
    image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=85&w=1000&auto=format&fit=crop",
    featured: true,
    highlights: ["Marina Bay Sands SkyPark", "Gardens by the Bay Avatar Grove", "Sentosa Island Cable Car", "Universal Studios VIP Access"]
  }
];

export const featuredPackages = [
  {
    id: "maldives-bliss",
    badge: "Best Seller",
    badgeColor: "bg-amber-600 text-white",
    name: "Maldives Bliss",
    tagline: "Crystal clear waters, luxury overwater villa stay & private island experience",
    destination: "Maldives",
    duration: "4N / 5D",
    mealPlan: "All Inclusive Meals",
    hotelCategory: "5★ Overwater Villa Resort",
    image: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=85&w=1000&auto=format&fit=crop",
    highlights: [
      "Speedboat transfers from Malé Airport",
      "Stay in luxury sunrise ocean overwater bungalow",
      "Complimentary snorkeling safari & gear",
      "Sunset dolphin cruise with refreshments"
    ]
  },
  {
    id: "european-delight",
    badge: "Most Popular",
    badgeColor: "bg-blue-600 text-white",
    name: "European Delight",
    tagline: "Paris, Switzerland, Italy – A magical, bespoke European grand tour",
    destination: "Europe",
    duration: "7N / 8D",
    mealPlan: "Daily Breakfast & Select Dinners",
    hotelCategory: "4★ & 5★ Premium Hotels",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=85&w=1000&auto=format&fit=crop",
    highlights: [
      "Paris City Tour with 2nd Level Eiffel Access",
      "Scenic Lake Lucerne cruise & Mount Titlis cable car",
      "High-speed panoramic Swiss railway journey",
      "Venice historic walking tour & private gondola"
    ]
  },
  {
    id: "bali-escape",
    badge: "Trending",
    badgeColor: "bg-emerald-600 text-white",
    name: "Bali Escape",
    tagline: "Beaches, cultural sanctuaries, adventure & serene tropical relaxation",
    destination: "Bali",
    duration: "5N / 6D",
    mealPlan: "Daily Gourmet Breakfast",
    hotelCategory: "4★ Boutique Pool Villa",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=85&w=1000&auto=format&fit=crop",
    highlights: [
      "Private pool villa in lush Ubud & Seminyak beachfront",
      "Kintamani volcano and scenic coffee plantation tour",
      "Nusa Penida Island day excursion with transfers",
      "Sunset seafood candlelight dinner at Jimbaran Bay"
    ]
  },
  {
    id: "dubai-experience",
    badge: "Family Favourite",
    badgeColor: "bg-purple-600 text-white",
    name: "Dubai Experience",
    tagline: "Iconic architectural wonders, desert safari, luxury shopping & cruises",
    destination: "Dubai",
    duration: "4N / 5D",
    mealPlan: "Daily Breakfast & Desert BBQ",
    hotelCategory: "5★ City Luxury Stay",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=85&w=1000&auto=format&fit=crop",
    highlights: [
      "Burj Khalifa 124th floor observation deck tickets",
      "Premium Desert Safari with dune bashing & belly dance",
      "Dubai Marina luxury glass boat dinner cruise",
      "Abu Dhabi day tour including Sheikh Zayed Grand Mosque"
    ]
  }
];

export const whyChooseFeatures = [
  {
    id: "customized",
    title: "Customized Itineraries",
    description: "Every trip is uniquely tailored around your personal preferences, travel pace, and vision.",
    icon: "MapPinned"
  },
  {
    id: "value",
    title: "Best Value Assurance",
    description: "Handcrafted journeys with premium luxury properties and vetted operators with zero hidden charges.",
    icon: "Award"
  },
  {
    id: "trusted",
    title: "Trusted Travel Partner",
    description: "Experienced, passionate travel professionals dedicated to delivering flawless, memorable journeys.",
    icon: "ShieldCheck"
  },
  {
    id: "support",
    title: "24/7 Dedicated Support",
    description: "Around-the-clock personal assistance before your trip, throughout your travels, and on your return.",
    icon: "Headphones"
  },
  {
    id: "destinations",
    title: "Wide Range of Destinations",
    description: "Bespoke itineraries covering top international wonderlands as well as exotic domestic escapes.",
    icon: "Globe2"
  },
  {
    id: "hasslefree",
    title: "Hassle-Free Experience",
    description: "End-to-end management covering flight tickets, luxury stays, private transfers, visas & excursions.",
    icon: "Luggage"
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Priya & Family",
    trip: "Maldives Island Getaway",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=300&auto=format&fit=crop",
    review: "Our Maldives trip was absolutely perfect! Excellent planning and 24/7 support from the Lavish Holidays team. The overwater villa recommended by them was breathtaking.",
    rating: 5
  },
  {
    id: 2,
    name: "Rakesh Kumar",
    trip: "Switzerland & Paris Tour",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop",
    review: "Europe trip was a dream come true. Everything was well organized, transfers were super smooth and completely hassle-free. Highly recommended for family travels!",
    rating: 5
  },
  {
    id: 3,
    name: "Suma Reddy",
    trip: "Dubai Luxury Holiday",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop",
    review: "Professional, friendly, and always available. Our Dubai vacation was truly memorable thanks to Lavish Holidays. Their attention to detail was exceptional.",
    rating: 5
  }
];

export const services = [
  {
    id: "flights",
    name: "Flight Bookings",
    description: "Seamless domestic and international flight arrangements tailored to your schedule.",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1600&auto=format&fit=crop"
  },
  {
    id: "packages",
    name: "Holiday Packages",
    description: "Carefully curated travel experiences designed around your ideal getaway.",
    image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?q=80&w=1600&auto=format&fit=crop"
  },
  {
    id: "hotels",
    name: "Hotel Reservations",
    description: "Exclusive accommodations and premium properties selected for your comfort.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1600&auto=format&fit=crop"
  },
  {
    id: "tours",
    name: "Worldwide Tours",
    description: "Comprehensive guided journeys exploring the globe's most captivating destinations.",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1600&auto=format&fit=crop"
  }
];
