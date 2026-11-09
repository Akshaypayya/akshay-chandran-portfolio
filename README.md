# Akshay Chandran — Full-Stack & Flutter Engineer Portfolio

[![Portfolio Live](https://img.shields.io/badge/Live_Portfolio-akshay--chandran--portfolio.vercel.app-blue?style=for-the-badge&logo=vercel)](https://akshay-chandran-portfolio.vercel.app/)
[![Flutter](https://img.shields.io/badge/Flutter-3.x-02569B?style=for-the-badge&logo=flutter&logoColor=white)](https://flutter.dev)
[![Node.js](https://img.shields.io/badge/Node.js-18+-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org)
[![pub.dev](https://img.shields.io/badge/pub.dev-ironclad%20v0.0.3-0175C2?style=for-the-badge&logo=dart&logoColor=white)](https://pub.dev/packages/ironclad)
[![Notice Period](https://img.shields.io/badge/Availability-Immediate_Joiner-00C853?style=for-the-badge)](https://akshay-chandran-portfolio.vercel.app/#contact)

Modern, high-performance portfolio website engineered with **Next.js 15 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**, showcasing 4 years of engineering experience across mobile, full-stack, enterprise RASP security, OTT video streaming, and FinTech applications.

---

## 👨‍💻 About Akshay Chandran P

- **Role**: Flutter Developer & Full-Stack Engineer
- **Experience**: 4 Years building cross-platform mobile, web, and scalable backend applications
- **Status**: **Immediate Joiner** (0 days notice period)
- **Location**: Kerala, India
- **Contact**: [+91-7736976618](tel:+917736976618) | [akshay.payya@gmail.com](mailto:akshay.payya@gmail.com)
- **LinkedIn**: [linkedin.com/in/akshay-chandranp](https://www.linkedin.com/in/akshay-chandranp)
- **GitHub**: [github.com/Akshaypayya](https://github.com/Akshaypayya)
- **Live URL**: [https://akshay-chandran-portfolio.vercel.app/](https://akshay-chandran-portfolio.vercel.app/)

---

## 🌟 Featured Engineering Projects

### 1. 🛡️ Ironclad SDK — Modular RASP & Cybersecurity Ecosystem (`protect_sdk_main`)
* **Category**: Security & Systems | **Status**: **Published on [pub.dev](https://pub.dev/packages/ironclad) (v0.0.3)**
* **Tech Stack**: Dart, Flutter, Platform Channels, RASP Engine, Google Play Integrity, Apple App Attest, AES-GCM, ChaCha20-Poly1305, Post-Quantum Cryptography (ML-KEM/ML-DSA), Shamir Secret Sharing (k,n threshold), DoD 5220.22-M Data Shredding.
* **Architecture & Highlights**:
  - **Modular Architecture**: Architected as a modular ecosystem comprising **38 published/developed companion packages** spanning runtime integrity, identity, cryptography, network protection, privacy, telemetry, compliance, and incident response.
  - **Runtime Application Self-Protection (RASP)**: Root/jailbreak detection, debugger attachment detection, Frida / Xposed / Magisk hook detection, emulator fingerprinting, ADB bridge detection, time-tampering, and app cloning prevention.
  - **Hardware Enclave Attestation**: Validates Google Play Integrity API and Apple App Attest tokens with cryptographic nonce binding and zero-trust verdict interpretation.
  - **Post-Quantum Cryptography (PQC)**: Implements NIST FIPS 203 ML-KEM-512/768/1024 lattice key encapsulation and NIST FIPS 204 ML-DSA digital signatures.
  - **Multi-Party Computation (MPC)**: Galois Field $GF(2^8)$ arithmetic and Shamir $(k, n)$ threshold secret sharing with Lagrange interpolation for distributed key reconstruction without single-point failure.
  - **RAM Wiping & Data Shredding**: Scope-safe `SecureByteBuffer` with automatic RAII zeroization, constant-time comparisons, and multi-pass DoD 5220.22-M memory/storage scrubbing.
  - **Anti-Tapjacking & Screen Protection**: Touch event occlusion filtering and OS-level `FLAG_SECURE` / `UIScreen.isCaptured` enforcement with background app-switcher privacy blur.

---

### 2. 📊 Ironclad Dashboard — Security Diagnostics & Testing Harness (`ironclad_dashboard`)
* **Category**: Security & Systems | **Type**: Interactive Full Example Implementation
* **Tech Stack**: Flutter, Dart, Riverpod, Ironclad Core & 38 Local Subpackages, Live Diagnostics, Trust Score Engine, Custom UI Bento Cards.
* **Architecture & Highlights**:
  - **Reference Implementation**: Companion Flutter application with local path dependencies on Ironclad core and all modular subpackages, serving as a live testing harness.
  - **Real-Time Security Posture & Trust Score**: Reactive trust meter dynamically adjusting based on device integrity checks, hardware attestation verdicts, and anomaly detection.
  - **Attack Simulation Suite**: Interactive control tiles to trigger simulated root, hook attachment, emulator environments, and network tamper events.
  - **Cryptographic Test Runner**: Exercises envelope vault encryption, key derivation (PBKDF2/HKDF), Post-Quantum key exchange, and RAM zeroization in real time.
  - **Tamper-Evident Audit Streaming**: Streams structured forensic events with SHA-256 hash chains verifying event non-repudiation.

---

### 3. 🎬 AetherStream — Enterprise OTT & Cloud Video Streaming Platform (`ott_app`)
* **Category**: Media & Streaming | **Badge**: AWS Media Pipeline
* **Tech Stack**: Flutter, Dart, BLoC / Cubit (`flutter_bloc`), Clean Architecture, `video_player`, AWS Elemental MediaLive, MediaConvert (QVBR), MediaPackage v2 (CMAF fMP4), MediaTailor (SSAI / SCTE-35), Amazon CloudFront (HTTP/3), SPEKE v2.0 Multi-DRM (Widevine L1 & Apple FairPlay), Real-Time QoE Analytics (ITU-T P.1203).
* **Architecture & Highlights**:
  - **Adaptive Bitrate (ABR) Ladder Controller**: Real-time switching between Auto ABR and explicit renditions (`2160p 4K HDR10 HEVC`, `1080p FHD AVC`, `720p HD`, `480p Data Saver`).
  - **AWS Media Services Pipeline Lab**: Interactive 5-stage cloud media inspector covering MediaLive (SRT/RTMPS ingest), MediaConvert (QVBR Level 9), MediaPackage v2 (CMAF packaging to HLS `.m3u8` and DASH `.mpd`), SPEKE v2.0 DRM, and CloudFront CDN delivery.
  - **Prime Video "X-Ray" Scene Intelligence**: Synchronized scene cards displaying cast in scene, production trivia, soundtrack stems, and AWS MediaConvert encoding metadata.
  - **Server-Side Ad Insertion (SSAI)**: AWS Elemental MediaTailor VAST 4.2 / VMAP ad pod stitching with SCTE-35 splice tags for seamless, ad-blocker-resilient playback.
  - **Persistent Dockable Mini-Player**: Floating bottom PiP-style dock maintaining uninterrupted playback while browsing catalog, analytics, or the AWS lab.
  - **Real-Time Video QoE & QoS Telemetry**: In-player "Stats for Nerds" HUD, composite ITU-T P.1203 QoE scoring, Time-to-First-Frame (`TTFF`), rebuffer ratio (%), and dual-series Bitrate vs. Bandwidth charts.
  - **Network Condition Throttle Simulator**: Throttles between 5G/Fiber (25 Mbps), 4G LTE (8.5 Mbps), Congested Cellular (3.8 Mbps), and 3G Tunnel (1.6 Mbps) to observe automatic ABR ladder adaptation.

---

### 4. 💰 GrowK — Digital Gold & Wealth Savings FinTech App (`growk`)
* **Category**: FinTech & Banking | **Badge**: Saudi FinTech
* **Tech Stack**: Flutter, Riverpod, Material 3, Finexus/BankBox APIs, Keycloak OAuth2, Saudi Nafath KYC, Biometrics, Firebase FCM, English/Arabic RTL localization, mTLS.
* **Architecture & Highlights**:
  - Live 24K gold spot pricing and interactive price history graphs.
  - Instant buy/sell flows with automated tax/fee calculation and digital wallet ledger sync.
  - Recurring savings plans (SIP) denominated in Saudi Riyal (SAR).
  - Production Saudi Nafath digital identity & KYC integration with SMS OTP bank account binding.
  - Hardware biometric authentication (Fingerprint / FaceID) and full bilingual Arabic (RTL) localization.

---

### 5. 📑 Payzo Books — Cloud Business Accounting & Financial SaaS (`payzo_books`)
* **Category**: FinTech & Banking | **Badge**: Enterprise SaaS
* **Tech Stack**: Flutter, Riverpod, REST APIs, Dio / HTTP, WebSockets, `fl_chart`, Excel Import/Export, PDF Generation, `MethodChannel`, Firebase FCM, Secure Storage.
* **Architecture & Highlights**:
  - Complete business ERP suite: Invoices, recurring billing, credit notes, quotations, purchase orders, customer/vendor ledgers, and expense management.
  - ZATCA / VAT compliance calculation engine with multi-tier tax structures.
  - Interactive financial analytics dashboards visualizing cash flow, revenue curves, and aging receivables.
  - Bidirectional Excel import/export engine for batch transaction reconciliation.
  - High-performance PDF generation, previewing, and native Android file download via `MethodChannel`.

---

### 6. 🛍️ Multi-Vendor E-Commerce Platform (`eccomerce_app`)
* **Category**: Full-Stack & Cloud | **Badge**: Full-Stack Ecosystem
* **Tech Stack**: Flutter (Buyer & Vendor mobile apps, Web Admin panel), Node.js, Express, MongoDB / Mongoose, Stripe, Cloudinary, AWS SES, Firebase FCM.
* **Architecture & Highlights**:
  - Three distinct client applications (Buyer Mobile, Vendor Mobile, Admin Web) connected to a unified backend.
  - Node.js/Express REST API with JWT authentication and Role-Based Access Control (RBAC).
  - Stripe Checkout integration with webhook signature verification for order processing.
  - Cloudinary automated image optimization pipeline and AWS SES transactional email notifications.

---

### 7. 🚖 AutoRide — Real-Time Ride-Hailing Platform (`ride_booking`)
* **Category**: Real-Time & Mobile | **Badge**: Ride-Hailing
* **Tech Stack**: Flutter, Provider, Google Maps SDK, Polylines, Geolocator, Firebase Realtime Database, Firebase Auth, Node.js / Express, Razorpay, FCM.
* **Architecture & Highlights**:
  - Dual mobile applications for passengers and drivers with dedicated administrative monitoring.
  - Real-time GPS location streaming, driver proximity matching, and turn-by-turn polyline route rendering.
  - Dynamic fare calculation factoring distance, duration, and peak pricing.
  - Integrated Razorpay payment gateway, digital receipts, and driver rating workflows.

---

### 8. 🎮 SkyHopper — 2D Arcade Game (`sky_hopper`)
* **Category**: Real-Time & Mobile | **Badge**: 60 FPS Game Engine
* **Tech Stack**: Flutter, Flame 2D Engine, Flame Audio, Riverpod, CustomPainter, Google Mobile Ads, SharedPreferences.
* **Architecture & Highlights**:
  - Consistent 60 FPS gameplay loop demonstrating custom frame budgeting and collision physics.
  - Multi-layered parallax backgrounds, animated sprite components, and collectible mechanics.
  - Flame Audio engine managing background music (BGM) and low-latency sound effects (SFX).
  - AdMob integration for banner, interstitial, and rewarded ad placements with local high-score persistence.

---

### 9. 🏦 EZ Bank — Digital Banking & Wealth Platform (`ez-bank`)
* **Category**: FinTech & Banking | **Badge**: Wealth Tech
* **Tech Stack**: Flutter, Riverpod, GoRouter, Dio, `flutter_secure_storage`, Dynamic Theming, TypeScript / React Native comparative base.
* **Architecture & Highlights**:
  - Dynamic UI engine with 6 luxury color schemes (Burgundy, Dark, Emerald, Luxury, Ocean, Purple).
  - 3 interchangeable dashboard layout paradigms (V1 Classic, V2 3D Gradient Organic, V3 Bento Grid Power-User).
  - Precious metals trading module with live market quotes, sub-wallets, and OTP-secured transfers.
  - Comprehensive 5-step Systematic Investment Plan (SIP) wizard with timeline transaction visualization.

---

### 10. 💳 SIMT UPI — Bilingual Unified Payments Interface (`sudan-upi`)
* **Category**: FinTech & Banking | **Badge**: National Payments
* **Tech Stack**: Flutter, Material 3, English/Arabic i18n, RTL Engine, Camera QR Scanner, AudioPlayers, Haptic Feedback, `shared_preferences`, `scaled_app`.
* **Architecture & Highlights**:
  - Interoperable payments prototype designed for central banking switches (EBS switch network).
  - SIM card device binding, debit card verification, and UPI PIN setup.
  - Unified camera QR scanner decoding merchant payment codes and POS terminals.
  - Instant P2P/P2M transfers, utility payments, circular theme reveal transitions, and tactile audio/haptics.

---

## 🛠️ Technical Skills Summary

| Domain | Core Technologies & Tools |
|---|---|
| **Flutter & Mobile** | Flutter, Dart, Android, iOS, Flutter Web, Material 3, Responsive Design, CustomPainter, Flame 2D, Localization (RTL) |
| **State & Architecture** | Riverpod, BLoC / Cubit, Provider, GetX, Clean Architecture, MVVM, Repository Pattern, SOLID, Feature-First |
| **Video & Streaming** | Adaptive Bitrate (ABR), video_player, AWS Media Services (MediaLive, MediaConvert QVBR, MediaPackage v2, MediaTailor SSAI), CloudFront CDN, SPEKE v2.0 Multi-DRM (Widevine L1 & FairPlay), Real-Time QoE (ITU-T P.1203) |
| **Security & RASP** | Ironclad RASP (pub.dev v0.0.3), Root/Jailbreak detection, Anti-Frida, Hardware Enclaves (Play Integrity / App Attest), Envelope Vault (AES-GCM/ChaCha20), Post-Quantum Cryptography (ML-KEM/ML-DSA), Shamir Secret Sharing (MPC), RAM Wiping |
| **Backend & APIs** | Node.js, Express.js, TypeScript, RESTful APIs, WebSockets, Socket.IO, Redis Pub/Sub, JWT, RBAC, Microservices |
| **Storage & Databases** | MongoDB, Mongoose, Firebase Firestore, Realtime Database, SQLite, Hive, SharedPreferences, flutter_secure_storage |
| **Languages** | Dart, TypeScript, JavaScript (ES6+), C, HTML5, CSS3 |
| **Integrations** | Stripe, Razorpay, Keycloak OAuth2, Saudi Nafath KYC, Biometrics, Google Maps SDK, Cloudinary, AWS SES, Firebase FCM |
| **DevOps & Testing** | Docker, Docker Compose, Nginx, GitHub Actions (CI/CD), Unit / Widget / BLoC tests (95%+ core coverage), Git, Postman, Gradle, Figma |

---

## 💼 Professional Experience

### Flutter Developer | Mobile App Developer
**Interland Technologies Service Pvt Ltd** · *Kochi, Kerala, India* · *(Apr 2023 – Present)*
- Developed and maintained 10+ cross-platform Flutter applications for Android, iOS, and Flutter Web using Dart.
- Built responsive, reusable UI components using Riverpod, BLoC, and Provider within MVVM / Clean Architecture.
- Integrated REST APIs, Firebase services, Keycloak OAuth2, Saudi Nafath KYC, Stripe, Razorpay, and biometric auth.
- Troubleshot UI/API/device performance issues; achieved **95%+ core-module test coverage** on major client apps.
- Contributed to backend API development with Node.js, Express, TypeScript, and MongoDB with GitHub Actions CI/CD.

### Flutter Developer Intern
**KingoLabs Innovations Pvt Ltd** · *Kochi, Kerala, India* · *(Jan 2023 – Mar 2023)*
- Developed Flutter interfaces with responsive layouts, reusable widgets, REST API integration, and custom UI animations.
- Created CustomPainter-based interactive screens and contributed to internal CRM and cross-platform apps.

---

## 🎓 Education & Certifications

- **B.Tech — Computer Science and Engineering**: Malabar Institute of Technology, Kannur, Kerala (2015 – 2019)
- **Udemy**: Flutter Multi-Vendor E-Commerce (Shop, Food, Store App \| Node.js \| Express \| MongoDB \| Deployment)
- **Spectrum Softech & Avodha Institute**: Flutter Development Certification (2023)

---

## 💻 Running the Portfolio Locally

### Prerequisites
- Node.js 18.x or later
- npm or pnpm

### Setup
```bash
# Clone the repository
git clone https://github.com/Akshaypayya/akshay-chandran-portfolio.git
cd akshay-chandran-portfolio

# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

### Production Build
```bash
# Build optimized production bundle
npm run build

# Start production server
npm start
```

---

## 📬 Contact & Connect

- **Email**: [akshay.payya@gmail.com](mailto:akshay.payya@gmail.com)
- **Phone / WhatsApp**: [+91-7736976618](https://wa.me/917736976618)
- **LinkedIn**: [linkedin.com/in/akshay-chandranp](https://www.linkedin.com/in/akshay-chandranp)
- **GitHub**: [github.com/Akshaypayya](https://github.com/Akshaypayya)
- **Live Portfolio**: [akshay-chandran-portfolio.vercel.app](https://akshay-chandran-portfolio.vercel.app/)
