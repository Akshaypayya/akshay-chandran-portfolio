import Reveal from "./Reveal";
import {
  Code2,
  Smartphone,
  Server,
  Database,
  Cpu,
  Terminal,
  ShieldCheck,
  Sparkles,
  Layers,
  CheckCircle2
} from "lucide-react";

const groups = [
  {
    title: "Flutter & Mobile Ecosystem",
    icon: Smartphone,
    color: "text-sky-400 bg-sky-500/10 border-sky-500/20",
    badge: "Primary Mobile Stack",
    items: [
      "Flutter",
      "Dart",
      "Android",
      "iOS",
      "Flutter Web",
      "Material 3",
      "Responsive & Adaptive UI",
      "CustomPainter",
      "Flame 2D Engine",
      "Bilingual RTL Localization",
      "Animations",
      "Plugin Integration"
    ]
  },
  {
    title: "State Management & Architecture",
    icon: Cpu,
    color: "text-purple-400 bg-purple-500/10 border-purple-500/20",
    badge: "95%+ Test Coverage Pattern",
    items: [
      "Riverpod",
      "Provider",
      "GetX",
      "BLoC (basic)",
      "Clean Architecture",
      "MVVM",
      "Repository Pattern",
      "MVC",
      "SOLID Principles",
      "Feature-First Modular Architecture"
    ]
  },
  {
    title: "Security, Cryptography & RASP",
    icon: ShieldCheck,
    color: "text-rose-400 bg-rose-500/10 border-rose-500/20",
    badge: "Published pub.dev Author",
    items: [
      "Runtime Self-Protection (RASP)",
      "Frida / Root / Hook Detection",
      "Hardware Enclaves (Play Integrity / App Attest)",
      "Envelope Encryption (AES-GCM/ChaCha20)",
      "Post-Quantum Crypto (ML-KEM/ML-DSA)",
      "Multi-Party Computation (Shamir SSS)",
      "RAM Wiping & Secure Scrubber",
      "Anti-Tapjacking & Screen Blur",
      "MethodChannel Native Bridge"
    ]
  },
  {
    title: "Backend, APIs & Real-Time",
    icon: Server,
    color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    badge: "Sub-100ms Latency Systems",
    items: [
      "Node.js",
      "Express.js",
      "TypeScript",
      "RESTful APIs",
      "WebSockets",
      "Socket.IO",
      "Redis Pub/Sub",
      "JWT & Role-Based Access Control",
      "Dio / HTTP Interceptors",
      "Microservices"
    ]
  },
  {
    title: "Data & Storage Persistence",
    icon: Database,
    color: "text-amber-400 bg-amber-500/10 border-amber-500/20",
    badge: "Offline-First Caching",
    items: [
      "MongoDB / Mongoose",
      "Firebase Cloud Firestore",
      "Firebase Realtime Database",
      "SQLite",
      "Hive (Offline Sync)",
      "SharedPreferences",
      "flutter_secure_storage"
    ]
  },
  {
    title: "Languages & Programming",
    icon: Code2,
    color: "text-blue-400 bg-blue-500/10 border-blue-500/20",
    badge: "Object-Oriented & Async",
    items: [
      "Dart",
      "TypeScript",
      "JavaScript (ES6+)",
      "C",
      "HTML5",
      "CSS3",
      "Null Safety",
      "Asynchronous Programming"
    ]
  },
  {
    title: "Integrations & Third-Party SDKs",
    icon: Layers,
    color: "text-indigo-400 bg-indigo-500/10 border-indigo-500/20",
    badge: "Fintech & Payments",
    items: [
      "Stripe Payments & Webhooks",
      "Razorpay",
      "Keycloak OAuth2",
      "Saudi Nafath KYC",
      "Biometrics (local_auth)",
      "Google Maps SDK & Polylines",
      "WebRTC Audio/Video",
      "Cloudinary Pipeline",
      "AWS SES",
      "Firebase FCM"
    ]
  },
  {
    title: "DevOps, Quality & Tools",
    icon: Terminal,
    color: "text-teal-400 bg-teal-500/10 border-teal-500/20",
    badge: "CI/CD & Delivery",
    items: [
      "Docker & Docker Compose",
      "Nginx",
      "GitHub Actions (CI/CD)",
      "Unit, Widget & Integration Tests",
      "Git & GitHub",
      "Android Studio",
      "VS Code",
      "Postman",
      "Gradle",
      "Figma",
      "Performance Profiling"
    ]
  }
];

export default function Skills() {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {groups.map(group => {
        const Icon = group.icon;
        return (
          <Reveal key={group.title}>
            <div className="glass-card group rounded-[2rem] p-7 transition duration-300 hover:border-white/20 hover:shadow-xl hover:shadow-blue-500/5">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className={`flex h-11 w-11 items-center justify-center rounded-xl border ${group.color} transition duration-300 group-hover:scale-105`}>
                    <Icon size={22} />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-white sm:text-xl">{group.title}</h3>
                    <span className="font-mono text-[11px] text-zinc-500">{group.badge}</span>
                  </div>
                </div>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map(x => (
                  <span
                    key={x}
                    className="rounded-xl border border-white/8 bg-white/[0.03] px-3.5 py-2 text-xs font-medium text-zinc-300 transition duration-200 hover:border-white/20 hover:bg-white/[0.08] hover:text-white"
                  >
                    {x}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
