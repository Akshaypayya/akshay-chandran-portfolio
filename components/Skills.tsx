import Reveal from "./Reveal";
import { Code2, Smartphone, Server, Database, Cpu, Terminal, ShieldCheck } from "lucide-react";

const groups = [
  {
    title: "Languages",
    icon: Code2,
    color: "text-blue-400 bg-blue-500/10 border-blue-500/20",
    items: ["Dart", "TypeScript", "JavaScript", "HTML5", "CSS3", "C"]
  },
  {
    title: "Mobile & Web",
    icon: Smartphone,
    color: "text-sky-400 bg-sky-500/10 border-sky-500/20",
    items: ["Flutter", "Android", "iOS", "Flutter Web", "Responsive Web Design", "Material Design 3"]
  },
  {
    title: "Backend & APIs",
    icon: Server,
    color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    items: ["Node.js", "Express.js", "RESTful APIs", "WebSockets", "Socket.IO", "Redis Pub/Sub", "JWT Authentication", "Microservices"]
  },
  {
    title: "Data & Storage",
    icon: Database,
    color: "text-amber-400 bg-amber-500/10 border-amber-500/20",
    items: ["MongoDB", "Mongoose", "Firebase Realtime DB", "SQLite", "Hive", "Offline Caching"]
  },
  {
    title: "Architecture",
    icon: Cpu,
    color: "text-purple-400 bg-purple-500/10 border-purple-500/20",
    items: ["Riverpod", "Provider", "GetX", "BLoC", "Clean Architecture", "MVVM", "Repository Pattern"]
  },
  {
    title: "DevOps & Tools",
    icon: Terminal,
    color: "text-indigo-400 bg-indigo-500/10 border-indigo-500/20",
    items: ["Docker", "Docker Compose", "Nginx", "GitHub Actions", "CI/CD", "Firebase FCM", "Cloudinary", "AWS SES", "Git", "Postman"]
  },
  {
    title: "Integrations & Security",
    icon: ShieldCheck,
    color: "text-rose-400 bg-rose-500/10 border-rose-500/20",
    items: ["WebRTC", "Stripe", "Razorpay", "Keycloak OAuth2", "Nafath KYC", "Biometrics", "mTLS", "SSL", "Rate Limiting"]
  }
];

export default function Skills() {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {groups.map(group => {
        const Icon = group.icon;
        return (
          <Reveal key={group.title}>
            <div className="glass-card rounded-[2rem] p-7 transition duration-300 hover:border-white/20">
              <div className="flex items-center gap-3">
                <div className={`flex h-10 w-10 items-center justify-center rounded-xl border ${group.color}`}>
                  <Icon size={20} />
                </div>
                <h3 className="font-display text-xl font-bold text-white">{group.title}</h3>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map(x => (
                  <span
                    key={x}
                    className="rounded-xl border border-white/8 bg-white/[0.03] px-3.5 py-2 text-sm font-medium text-zinc-300 transition duration-200 hover:border-white/20 hover:bg-white/[0.08] hover:text-white"
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

