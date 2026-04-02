import {
  Globe,
  Layers,
  Library,
  Bot,
  Cpu,
  List,
  Zap,
  MonitorPlay,
  Lock,
  BookOpen,
  MonitorCloud,
} from "lucide-react";

export const menu = [
  { name: "Agents", icon: <Bot size={16} />, path: "/agents" },
  { name: "AI Models", icon: <Layers size={16} />, path: "/ai-models" },
  { name: "Library", icon: <Library size={16} />, path: "/library" },
];

export const orchestrator = [
  { name: "Published", icon: <Bot size={16} />, path: "/published" },
  { name: "Machines", icon: <Cpu size={16} />, path: "/machines" },
  { name: "Queues", icon: <List size={16} />, path: "/queues" },
  { name: "Triggers", icon: <Zap size={16} />, path: "/triggers" },
  { name: "Jobs", icon: <MonitorPlay size={16} />, path: "/jobs" },
  { name: "Executions", icon: <MonitorPlay size={16} />, path: "/executions" },
  { name: "Vault", icon: <Lock size={16} />, path: "/vault" },
  { name: "Knowledge Base", icon: <BookOpen size={16} />, path: "/" },
  { name: "Key Store", icon: <Library size={16} />, path: "/key-store" },
];

export const admin = [
  { name: "Tenant", icon: <MonitorCloud size={16} />, path: "/tenant" },
  { name: "Integrations", icon: <Globe size={16} />, path: "/integrations" },
];
