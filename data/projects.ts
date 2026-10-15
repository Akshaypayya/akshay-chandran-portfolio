export type Project = {
  slug: string;
  name: string;
  type: string;
  category: "Security & Systems" | "FinTech & Banking" | "Full-Stack & Cloud" | "Real-Time & Mobile";
  summary: string;
  description: string;
  gradient: string;
  stack: string[];
  features: string[];
  impact: string;
  stats?: { label: string; value: string }[];
  badge?: string;
  architecture?: string;
};

export const projects: Project[] = [
  {
    slug: "ironclad-sdk",
    name: "Ironclad SDK & Dashboard",
    type: "Modular RASP & Cybersecurity Ecosystem",
    category: "Security & Systems",
    badge: "Published on pub.dev",
    summary: "Published pub.dev RASP security SDK with 38 modular companion packages covering zero-trust attestation, anti-tampering, cryptography, MPC, and an interactive diagnostics dashboard.",
    description: "An enterprise-grade mobile security platform providing Runtime Application Self-Protection (RASP), Google Play Integrity & Apple App Attest enclave verification, anti-tampering (anti-Frida/hooking), RAM wiping, active cyber deception, envelope vault encryption, post-quantum cryptography (ML-KEM/ML-DSA), multi-party computation (Shamir SSS), and forensics helpers. Accompanied by an interactive Flutter dashboard to test security postures in real time.",
    gradient: "from-red-500/25 via-amber-500/10 to-transparent",
    stack: [
      "Dart",
      "Flutter",
      "pub.dev v0.0.3",
      "Platform Channels",
      "RASP",
      "Hardware Enclaves",
      "AES-GCM",
      "ChaCha20-Poly1305",
      "Post-Quantum (ML-KEM)",
      "MPC / Shamir SSS",
      "Play Integrity API",
      "App Attest",
      "Riverpod"
    ],
    features: [
      "Published core 'ironclad' package on pub.dev (v0.0.3) with 38 modular companion packages",
      "Runtime integrity checks: root, jailbreak, debugger, Frida, Xposed, Magisk, emulator & ADB detection",
      "Hardware enclave attestation validating Google Play Integrity & Apple App Attest tokens",
      "Envelope encryption vault with PBKDF2 key scheduling & HKDF derivation",
      "Post-Quantum Cryptography: NIST FIPS 203 ML-KEM and NIST FIPS 204 ML-DSA lattice encryption",
      "Multi-Party Computation & Shamir (k,n) threshold secret sharing via Galois Field arithmetic",
      "Anti-tapjacking touch filtering & OS-level FLAG_SECURE screen protection",
      "Active cyber deception honeypots, canary tokens, and decompilation trip-wires",
      "Companion Flutter live dashboard with trust score meters, threat logs, and real-time posture audits"
    ],
    impact: "Production-ready open-source security ecosystem engineered for high-assurance Fintech, Banking, and Web3 mobile applications.",
    stats: [
      { label: "Packages", value: "38 Packages" },
      { label: "pub.dev Status", value: "Published v0.0.3" },
      { label: "Architecture", value: "Modular RASP" }
    ],
    architecture: "Native OS Signals → Platform Channel → RASP Engine → Enclave Attestation → Policy Enforcement → Threat Redaction"
  },
  {
    slug: "payzo-books",
    name: "Payzo Books",
    type: "Cloud Business Accounting & Financial SaaS",
    category: "FinTech & Banking",
    badge: "Enterprise SaaS",
    summary: "Comprehensive business accounting and ERP platform handling invoicing, quotations, purchase orders, VAT/tax calculations, and automated recurring billing.",
    description: "A production accounting and business management application built with Flutter, Riverpod, and REST/WebSocket APIs. Supports invoices, recurring billing, expense tracking, quotations, purchase orders, customer/vendor ledgers, multi-rate tax calculations, approval hierarchies, and dynamic financial analytics dashboards. Includes bidirectional Excel import/export and PDF generation with native Android MethodChannel file integration.",
    gradient: "from-blue-600/25 via-indigo-500/10 to-transparent",
    stack: [
      "Flutter",
      "Riverpod",
      "REST APIs",
      "Dio / HTTP",
      "WebSockets",
      "fl_chart",
      "Excel Import/Export",
      "PDF Generation",
      "MethodChannel",
      "Firebase FCM",
      "Secure Storage"
    ],
    features: [
      "Complete billing suite: Invoices, recurring invoices, credit notes, quotations, purchase orders, and expenses",
      "Vendor & Customer directory with transaction history, payment due trackers, and ledger balances",
      "ZATCA / VAT compliance calculation engine with multi-tier tax structures",
      "Interactive financial dashboards with cash flow charts, revenue trends, and aging receivables",
      "Excel data import/export engine for batch transaction processing",
      "High-performance PDF invoice generation, printing, and file system sharing via native Android MethodChannel",
      "Real-time approval workflow notifications powered by WebSockets and Firebase Cloud Messaging",
      "Modular repository pattern with 95%+ core module test reliability and strict validation"
    ],
    impact: "Streamlines day-to-day accounting, tax compliance, and automated billing workflows for SMEs and enterprise businesses.",
    stats: [
      { label: "Workflows", value: "15+ Modules" },
      { label: "Reliability", value: "95%+ Coverage" },
      { label: "Native Bridge", value: "MethodChannel" }
    ],
    architecture: "Presentation (Riverpod) → Domain Entities → Repository Layer → BaseApiService (HTTP/Dio) → Backend Service"
  },
  {
    slug: "growk",
    name: "GrowK",
    type: "FinTech Digital Gold & Wealth Savings App",
    category: "FinTech & Banking",
    badge: "Saudi FinTech",
    summary: "A digital 24K gold investment and savings experience with KYC, wallet transactions and bilingual RTL support.",
    description: "A Flutter FinTech application for live 24K gold pricing, buy/sell flows, wallet transactions and recurring savings goals, integrating OAuth2 authentication, Saudi Nafath KYC, bank binding and biometric security.",
    gradient: "from-amber-500/25 via-orange-500/10 to-transparent",
    stack: [
      "Flutter",
      "Riverpod",
      "Material 3",
      "Finexus/BankBox APIs",
      "Keycloak OAuth2",
      "Nafath KYC",
      "Biometrics",
      "Firebase FCM",
      "English/Arabic i18n",
      "mTLS"
    ],
    features: [
      "Live 24K gold price tracking with market trend charts",
      "Instant buy/sell flows with real-time fee and tax calculation",
      "Digital wallet transaction processing with ledger synchronization",
      "Recurring savings schedules (SIP) denominated in Saudi Riyal (SAR)",
      "Saudi Nafath national digital identity and KYC integration",
      "Bank account binding with two-factor SMS OTP verification",
      "Nominee management and beneficiary allocation",
      "Hardware biometric authentication (Fingerprint / FaceID) with fallback",
      "Seamless OAuth2 token refresh cycle and mTLS communication",
      "Full English and Arabic (RTL) localization"
    ],
    impact: "Production FinTech workflow spanning identity, KYC, transactions and savings.",
    stats: [
      { label: "Currencies", value: "24K Gold / SAR" },
      { label: "Compliance", value: "Saudi Nafath KYC" },
      { label: "Localization", value: "Bilingual RTL" }
    ],
    architecture: "Client (Flutter/Riverpod) → Keycloak OAuth2 → Nafath Identity Gateway → Banking Core → Digital Ledger"
  },
  {
    slug: "ez-bank",
    name: "EZ Bank",
    type: "Digital Banking & Wealth Management Platform",
    category: "FinTech & Banking",
    badge: "Wealth Tech",
    summary: "Feature-first mobile banking experience featuring a 6-theme customization engine, 3 dashboard layouts, gold trading, and a 5-step SIP wealth wizard.",
    description: "A modern Flutter banking and wealth management application utilizing Domain-Driven Feature-First Architecture. Offers dynamic UI personalization with 6 bespoke color themes, 3 distinct dashboard layout paradigms, live precious metals trading, sub-wallet management, dealer quote negotiation with timers, and a comprehensive 5-step Systematic Investment Plan (SIP) wizard with timeline transaction visualization.",
    gradient: "from-emerald-500/25 via-teal-500/10 to-transparent",
    stack: [
      "Flutter",
      "Dart",
      "Riverpod",
      "GoRouter",
      "Dio",
      "flutter_secure_storage",
      "Dynamic Theming",
      "Micro-animations",
      "TypeScript",
      "React Native Comparative Base"
    ],
    features: [
      "Dynamic UI personalization engine with 6 luxury color themes (Burgundy, Dark, Emerald, Luxury, Ocean, Purple)",
      "3 distinct dashboard layout models (V1 Classic, V2 3D Gradient Organic, V3 Bento Grid Power-User)",
      "Comprehensive Precious Metals module: live spot prices, instant buy/sell, and wallet transfers with OTP",
      "Dealer quote negotiation system with live countdown acceptance timers",
      "5-step Systematic Investment Plan (SIP) creation and management wizard",
      "Interactive ROI and Fund Performance calculators with timeline execution status views",
      "Internal/external bank transfers, beneficiary management, and digital bill payments",
      "Secure token storage with biometric gatekeeping and offline preference persistence"
    ],
    impact: "Demonstrates advanced UI engineering, modular state architecture, and complex financial wealth modeling.",
    stats: [
      { label: "Themes", value: "6 Luxury Themes" },
      { label: "Dashboards", value: "3 Dynamic Layouts" },
      { label: "SIP Wizard", value: "5-Step Execution" }
    ],
    architecture: "Feature-First Core → ThemeController → Riverpod Notifiers → GoRouter Shell → Secure Storage Engine"
  },
  {
    slug: "synctalk",
    name: "SyncTalk",
    type: "Full-Stack Real-Time Communication Platform",
    category: "Real-Time & Mobile",
    badge: "Sub-100ms Latency",
    summary: "Real-time messaging and WebRTC video calling platform with horizontally scalable Socket.IO infrastructure, Redis pub/sub, and offline-first Hive caching.",
    description: "A production-grade communication platform featuring a Flutter mobile client, Flutter Web admin portal, and a Node.js/TypeScript backend. Designed for low latency messaging under 100ms, peer-to-peer WebRTC video/voice calls, Redis pub/sub cluster message distribution, offline-first message caching with Hive, and containerized Docker deployment.",
    gradient: "from-violet-500/30 via-blue-500/10 to-transparent",
    stack: [
      "Flutter",
      "Riverpod",
      "WebRTC",
      "Socket.IO",
      "Node.js",
      "TypeScript",
      "Express",
      "MongoDB",
      "Redis Pub/Sub",
      "Docker Compose",
      "Nginx",
      "Hive",
      "GoRouter"
    ],
    features: [
      "Sub-100ms real-time messaging with delivery, read receipts, and typing indicators",
      "WebRTC peer-to-peer audio and video calling with STUN/TURN ICE negotiation",
      "Horizontal clustering with Socket.IO Redis Adapter for multi-instance message broadcasting",
      "Offline-first architecture with local Hive database and automated background sync queue",
      "Flutter Web administration dashboard for user moderation, chat metrics, and system telemetry",
      "Rich media transmission (images, audio notes, video clips) via Cloudinary pipeline",
      "Docker Compose orchestration with Nginx reverse proxy, SSL termination, and rate limiting",
      "Automated CI/CD pipelines with GitHub Actions for linting and build validation"
    ],
    impact: "Engineered sub-100ms message delivery latency and high-concurrency real-time WebSocket infrastructure.",
    stats: [
      { label: "Delivery Latency", value: "<100ms" },
      { label: "Calling", value: "WebRTC Audio/Video" },
      { label: "Deployment", value: "Docker + Nginx" }
    ],
    architecture: "Flutter Mobile / Web → WebSocket / WebRTC → Nginx Load Balancer → Node.js Cluster → Redis Pub/Sub → MongoDB"
  },
  {
    slug: "multi-vendor-ecommerce",
    name: "Multi-Vendor E-Commerce",
    type: "Three-Tier Marketplace Ecosystem",
    category: "Full-Stack & Cloud",
    badge: "Full-Stack Ecosystem",
    summary: "Buyer app, vendor management app and web admin panel backed by a Node.js/Express marketplace API.",
    description: "A full-stack marketplace ecosystem covering buyer, vendor and administrative workflows with reusable Flutter components, responsive web layouts, payments, media processing and transactional notifications.",
    gradient: "from-blue-500/25 via-cyan-500/10 to-transparent",
    stack: [
      "Flutter",
      "Riverpod",
      "Flutter Web",
      "Node.js",
      "Express",
      "MongoDB / Mongoose",
      "Stripe",
      "Cloudinary",
      "AWS SES",
      "Firebase Cloud Messaging"
    ],
    features: [
      "Customer mobile application for product discovery, checkout, reviews, and order tracking",
      "Vendor mobile application for inventory management, sales metrics, and payout requests",
      "Responsive Web Admin dashboard for platform moderation, catalog controls, and user management",
      "Node.js/Express REST API backend with JWT authentication and Role-Based Access Control (RBAC)",
      "Stripe checkout integration with secure webhook signature verification",
      "Automated media processing and optimization pipeline with Cloudinary",
      "Transactional email dispatch via AWS SES and push notifications with FCM",
      "Compile-time environment configuration and strict data validation schemas"
    ],
    impact: "Three connected product surfaces sharing a unified backend ecosystem.",
    stats: [
      { label: "Surfaces", value: "Customer / Vendor / Admin" },
      { label: "Payments", value: "Stripe + Webhooks" },
      { label: "Media Pipeline", value: "Cloudinary + AWS SES" }
    ],
    architecture: "3 Clients (Buyer, Vendor, Admin) → Express REST API → MongoDB Cluster → Stripe / Cloudinary / AWS Services"
  },
  {
    slug: "autoride",
    name: "AutoRide",
    type: "Real-Time Ride-Hailing Platform",
    category: "Real-Time & Mobile",
    badge: "Ride-Hailing",
    summary: "Dedicated rider, driver, and admin applications with live GPS tracking, route polyline rendering, and fare computation.",
    description: "A complete auto-rickshaw transportation platform featuring passenger, driver, and admin applications. Coordinates real-time ride matching, live location streaming, Google Maps polyline routing, dynamic fare calculation, Razorpay payment processing, and administrative fleet telemetry.",
    gradient: "from-yellow-500/25 via-amber-500/10 to-transparent",
    stack: [
      "Flutter",
      "Provider",
      "Google Maps SDK",
      "Polylines",
      "Geolocator",
      "Firebase Realtime Database",
      "Firebase Auth",
      "Node.js / Express",
      "Razorpay",
      "Firebase FCM"
    ],
    features: [
      "Dual mobile applications for passengers and drivers plus administrative oversight panel",
      "Real-time driver location streaming and live turn-by-turn map polyline rendering",
      "Automated ride matching algorithm based on proximity and driver availability",
      "Dynamic fare calculation engine factoring in distance, estimated duration, and peak rates",
      "Driver verification system with document upload and license review workflow",
      "Integrated Razorpay payment gateway and QR code payment generation",
      "Instant push notifications for ride requests, acceptance, arrivals, and trip completions",
      "Trip history logging with digital receipts and driver rating system"
    ],
    impact: "Real-time location, socket streaming, and payment workflows operating seamlessly across two dedicated mobile user roles.",
    stats: [
      { label: "Apps", value: "Rider / Driver / Admin" },
      { label: "Live Telemetry", value: "Firebase Realtime DB" },
      { label: "Routing", value: "Google Maps SDK" }
    ],
    architecture: "Passenger / Driver Apps → Geolocator GPS → Firebase Realtime DB → Express Payment Backend → Razorpay Gateway"
  },
  {
    slug: "sudan-upi",
    name: "SIMT UPI",
    type: "Bilingual Unified Payments Interface",
    category: "FinTech & Banking",
    badge: "National Payments",
    summary: "Bilingual (English / Arabic RTL) interoperable payments prototype with SIM card verification, QR scanning, and instant P2P/P2M transfers.",
    description: "A high-fidelity mobile banking and payments application designed for national payment networks (such as Sudan's EBS switch). Features native English/Arabic localization with seamless RTL layout switching, secure device registration via SIM card binding, debit card UPI PIN initialization, unified camera QR scanning, instant P2P/P2M transfers, bill payments, and gamified cashback scratch cards.",
    gradient: "from-teal-500/25 via-emerald-500/10 to-transparent",
    stack: [
      "Flutter",
      "Dart",
      "Material 3",
      "English / Arabic i18n",
      "RTL Engine",
      "Camera QR Scanner",
      "AudioPlayers",
      "Haptic Feedback",
      "shared_preferences",
      "scaled_app"
    ],
    features: [
      "Bilingual English and Arabic localization with instant RTL layout flipping",
      "Secure device binding and SIM card verification flow",
      "Debit card verification and multi-digit UPI PIN setup",
      "Instant bank account discovery across simulated central banking switch",
      "Unified camera QR scanner decoding merchant payment codes and POS terminals",
      "Instant P2P transfers using Virtual Payment Addresses (VPA) or mobile numbers",
      "Utility bill payment engine for electricity, telecom, and municipal services",
      "Modern Bento-grid dashboard with dynamic dark/light circular theme transitions",
      "Tactile audio chimes and haptic vibrations on successful transaction completion",
      "Gamified instant cashback scratch cards and loyalty rewards"
    ],
    impact: "Illustrates complex financial onboarding, hardware camera/sensor integrations, and multilingual RTL UX.",
    stats: [
      { label: "Switch Interop", value: "EBS Network Prototype" },
      { label: "Localization", value: "English & Arabic RTL" },
      { label: "Interactions", value: "Audio + Haptic Chimes" }
    ],
    architecture: "Device SIM & Biometrics → Locale/Theme Controllers → Account Discovery → EBS Network Switch → QR/P2P Engine"
  },
  {
    slug: "skyhopper",
    name: "SkyHopper",
    type: "2D Arcade Game",
    category: "Real-Time & Mobile",
    badge: "60 FPS Game Engine",
    summary: "A 60 FPS Flutter/Flame arcade game with custom physics, sprite animations, collision detection, audio, and local high-score persistence.",
    description: "A 2D arcade mobile game built with the Flame game engine, demonstrating custom game loop implementation, sprite animation rendering, rigid-body collision detection, layered parallax backgrounds, responsive touch/tilt controls, BGM/SFX audio management, and local high-score progression.",
    gradient: "from-fuchsia-500/25 via-purple-500/10 to-transparent",
    stack: [
      "Flutter",
      "Flame 2D Engine",
      "Flame Audio",
      "Riverpod",
      "CustomPainter",
      "Google Mobile Ads",
      "SharedPreferences"
    ],
    features: [
      "Fluid 60 FPS gameplay powered by the Flame game engine loop",
      "Component lifecycle management with continuous delta-time physics updates",
      "Precision bounding-box collision detection for obstacles and collectible coins/energy",
      "Multi-layered parallax scrolling backgrounds with depth illusion",
      "Dynamic audio management with background music (BGM) and spatial sound effects (SFX)",
      "Comprehensive game state machine: start menu, active gameplay, pause, and game-over states",
      "AdMob advertising framework integration for banners, interstitials, and rewarded video",
      "Local high-score and progression persistence using SharedPreferences"
    ],
    impact: "Demonstrates deep mastery of Flutter's rendering pipeline, frame budgets, custom graphics, and game architecture.",
    stats: [
      { label: "Framerate", value: "60 FPS Target" },
      { label: "Engine", value: "Flame 2D Engine" },
      { label: "Monetization", value: "Google Mobile Ads" }
    ],
    architecture: "Flutter Canvas → Flame GameLoop → Sprite Component Tree → Collision Rects → Flame Audio → SharedPreferences"
  }
];
