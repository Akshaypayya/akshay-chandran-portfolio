export type Project = {
  slug: string;
  name: string;
  type: string;
  summary: string;
  description: string;
  gradient: string;
  stack: string[];
  features: string[];
  impact: string;
};

export const projects: Project[] = [
  {
    slug: "growk",
    name: "GrowK",
    type: "FinTech Digital Gold & Wealth Savings App",
    summary: "A digital 24K gold investment and savings experience with KYC, wallet transactions and bilingual RTL support.",
    description: "A Flutter FinTech application for live 24K gold pricing, buy/sell flows, wallet transactions and recurring savings goals, integrating OAuth2 authentication, Saudi Nafath KYC, bank binding and biometric security.",
    gradient: "from-amber-500/25 via-orange-500/10 to-transparent",
    stack: ["Flutter", "Riverpod", "Material 3", "Finexus/BankBox APIs", "Keycloak OAuth2", "Nafath KYC", "Biometrics", "Firebase FCM", "English/Arabic i18n"],
    features: ["Live 24K gold price tracking", "Instant buy/sell flows", "Wallet transaction processing", "Recurring savings schedules in SAR", "Saudi Nafath KYC", "Bank account binding with OTP", "Nominee management", "Biometric authentication", "OAuth2 token refresh", "mTLS/SSL security", "English/Arabic RTL localization"],
    impact: "Production FinTech workflow spanning identity, KYC, transactions and savings"
  },
  {
    slug: "multi-vendor-ecommerce",
    name: "Multi-Vendor E-Commerce",
    type: "Three-Tier Marketplace Ecosystem",
    summary: "Buyer app, vendor management app and web admin panel backed by a Node.js/Express marketplace API.",
    description: "A full-stack marketplace ecosystem covering buyer, vendor and administrative workflows with reusable Flutter components, responsive web layouts, payments, media processing and transactional notifications.",
    gradient: "from-blue-500/25 via-cyan-500/10 to-transparent",
    stack: ["Flutter", "Riverpod", "Flutter Web", "Node.js", "Express", "MongoDB", "Stripe", "Cloudinary", "AWS SES", "Firebase Cloud Messaging"],
    features: ["Buyer mobile application", "Vendor store management", "Web admin panel", "Node.js/Express REST APIs", "Stripe checkout + webhook verification", "JWT/RBAC security", "Cloudinary media pipeline", "AWS SES transactional email", "Responsive grids", "Compile-time environment configuration"],
    impact: "Three connected product surfaces sharing a common backend ecosystem"
  },
  {
    slug: "autoride",
    name: "AutoRide",
    type: "Real-Time Ride-Hailing Platform",
    summary: "Dedicated rider and driver applications with live tracking, route rendering, ride matching and dynamic fares.",
    description: "A transportation platform using Flutter, Firebase Realtime Database and Node.js to coordinate rider and driver workflows, location streaming, route rendering, fare calculation and Razorpay payments.",
    gradient: "from-emerald-500/25 via-teal-500/10 to-transparent",
    stack: ["Flutter", "Provider", "Google Maps SDK", "Polylines", "Geolocator", "Firebase Realtime Database", "Firebase Auth", "Node.js", "Razorpay"],
    features: ["Rider and driver applications", "Real-time driver tracking", "Ride matching", "Google Maps route rendering", "Dynamic fare calculation", "Live location streaming", "Distance estimation", "Razorpay payment backend", "Push notifications", "QR code scanning"],
    impact: "Real-time location and payment workflows across two dedicated mobile roles"
  },
  {
    slug: "skyhopper",
    name: "SkyHopper",
    type: "2D Arcade Game",
    summary: "A 60 FPS Flutter/Flame arcade game with animation, collision detection, audio, ads and local persistence.",
    description: "A mobile arcade game built with the Flame 2D engine, demonstrating game-loop architecture, collision detection, animated sprites, layered parallax backgrounds, audio, monetization and local high-score persistence.",
    gradient: "from-fuchsia-500/25 via-purple-500/10 to-transparent",
    stack: ["Flutter", "Flame 2D Game Engine", "Flame Audio", "Riverpod", "Google Mobile Ads", "SharedPreferences"],
    features: ["60 FPS gameplay", "Flame component lifecycle", "Collision detection", "Animated sprite rendering", "Layered parallax backgrounds", "BGM and SFX audio", "Responsive controls", "AdMob banner/interstitial/rewarded ads", "Local high-score persistence"],
    impact: "A technically different project demonstrating performance-sensitive Flutter development"
  },
  {
    slug: "synctalk",
    name: "SyncTalk",
    type: "Full-Stack Real-Time Communication Platform",
    summary: "Real-time messaging and WebRTC calling with scalable WebSocket infrastructure and offline-first persistence.",
    description: "A Flutter client backed by Node.js and TypeScript, designed around real-time communication, horizontally scalable Socket.IO infrastructure, offline-first message persistence, background sync and production deployment concerns.",
    gradient: "from-violet-500/30 via-blue-500/10 to-transparent",
    stack: ["Flutter", "Riverpod", "GoRouter", "WebRTC", "Socket.IO", "Node.js", "TypeScript", "Express", "MongoDB", "Redis", "Docker", "Nginx", "Cloudinary", "Hive", "Firebase FCM"],
    features: ["Real-time messaging", "WebRTC video calling", "Socket.IO Redis Adapter", "Redis pub/sub distribution", "Offline-first message persistence with Hive", "Background synchronization", "Docker Compose + Nginx deployment", "SSL, security headers and rate limiting", "GitHub Actions CI/CD"],
    impact: "Resume-documented sub-100ms message delivery latency"
  }
];
