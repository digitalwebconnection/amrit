import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  MapPin,
  CheckCircle2,
  ArrowRight,
  Maximize2,
  Sparkles
} from 'lucide-react';

interface Project {
  id: string;
  title: string;
  category: string;
  filterCategory: string;
  client: string;
  location: string;
  capacity: string;
  savings: string;
  completionYear: string;
  scope: string;
  highlights: string[];
  image: string;
}

const projectsData: Project[] = [
  {
    id: "p1",
    title: "500 kWp Commercial Rooftop Solar",
    category: "Solar EPC",
    filterCategory: "solar",
    client: "TechPark Solutions Hub",
    location: "Chakan, Pune",
    capacity: "500 kWp",
    savings: "₹42 Lakhs / Yr",
    completionYear: "2024",
    scope: "Turnkey engineering, 580Wp TOPCon bifacial modules, and DISCOM net-metering synchronization.",
    highlights: [
      "7.2 Lakh kWh annual clean generation",
      "580 Tons annual CO2 reduction",
      "3.4 Years calculated payback"
    ],
    image: "/images/projects/project_commercial_rooftop.webp"
  },
  {
    id: "p2",
    title: "33kV Industrial Substation & Power Setup",
    category: "HT/LT Substations",
    filterCategory: "substation",
    client: "Adani Logistics Park",
    location: "JNPT Port, Navi Mumbai",
    capacity: "5 MVA (33/11kV)",
    savings: "100% CEA Compliant",
    completionYear: "2023",
    scope: "Turnkey HT switchyard erection, 5 MVA oil-cooled transformer, and statutory CEA clearance.",
    highlights: [
      "Zero electrical downtime record",
      "Dual-incomer power distribution",
      "Automated SCADA fault protection"
    ],
    image: "/images/projects/project_substation_33kv.webp"
  },
  {
    id: "p3",
    title: "1.2 MW Ground-Mounted Solar Farm",
    category: "Solar EPC",
    filterCategory: "solar",
    client: "Apex Textile & Spinners",
    location: "Surat, Gujarat",
    capacity: "1.2 MW",
    savings: "₹1.1 Crore / Yr",
    completionYear: "2024",
    scope: "Single-axis tracking solar PV array erection with dedicated 11kV step-up transmission bay.",
    highlights: [
      "18.5 Lakh clean solar units / yr",
      "Powers 70% of factory operations",
      "25-Year performance warranty"
    ],
    image: "/images/projects/project_industrial_shed.webp"
  },
  {
    id: "p4",
    title: "Hospital Critical Power & 250kWh BESS",
    category: "HT/LT Substations",
    filterCategory: "substation",
    client: "City Multi-Speciality Hospital",
    location: "Thane, Mumbai",
    capacity: "250 kWh BESS",
    savings: "Zero-Loss Backup",
    completionYear: "2024",
    scope: "High-density LFP Battery Energy Storage with automated PLC synchronizing for ICU power continuity.",
    highlights: [
      "Zero ms blackout transition",
      "65% diesel generator fuel saved",
      "Remote IoT telemetry with SMS alerts"
    ],
    image: "/images/projects/project_warehouse_kit.webp"
  },
  {
    id: "p5",
    title: "Cloud SCADA & Automated PLC Console",
    category: "Automation & SCADA",
    filterCategory: "automation",
    client: "Mahindra Green Tech Park",
    location: "Nashik, Maharashtra",
    capacity: "40+ PLC Nodes",
    savings: "Real-time Telemetry",
    completionYear: "2023",
    scope: "Custom cloud SCADA connecting solar and HT transformer nodes for real-time telemetry and peak-shaving.",
    highlights: [
      "Instant underperforming string alerts",
      "Automated generation & billing reports",
      "Predictive preventive maintenance"
    ],
    image: "/images/projects/project_dlms_metering.webp"
  },
  {
    id: "p6",
    title: "250 kWp Elevated Rooftop Solar Setup",
    category: "Solar EPC",
    filterCategory: "solar",
    client: "CyberCity IT Corporate Towers",
    location: "Hitec City, Hyderabad",
    capacity: "250 kWp",
    savings: "₹28 Lakhs / Yr",
    completionYear: "2024",
    scope: "3.5-meter elevated super-structure preserving 100% usable recreational space on corporate rooftop.",
    highlights: [
      "100% usable rooftop space preserved",
      "3.8 Lakh units clean solar generation",
      "Cyclone-rated galvanized structure"
    ],
    image: "/images/projects/project_inverter_scada.webp"
  }
];

interface RecentProjectsProps {
  onOpenContact?: () => void;
}

export const RecentProjects: React.FC<RecentProjectsProps> = ({ onOpenContact }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showAll, setShowAll] = useState(false);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedProject(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedProject]);

  const displayedProjects = showAll ? projectsData : projectsData.slice(0, 3);

  return (
    <section id="projects" className="relative py-12 lg:py-16 bg-slate-50/70 border-t border-slate-200/80">
      
      {/* Background Subtle Accents */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-orange-100/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-2xs mb-3">
            <Sparkles size={13} className="text-primary-orange" />
            <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
              Execution Portfolio
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
            Recent Flagship <span className="text-primary-blue">Projects</span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            High-yield solar EPC and heavy electrical turnkey installations delivered for commercial and industrial clients.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group relative h-72 sm:h-80 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-200 cursor-pointer bg-slate-900 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Cover Image */}
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/40 to-transparent" />

              {/* Top Badges */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                <span className="px-3 py-1 rounded-full bg-slate-900/80 text-white text-[11px] font-bold uppercase tracking-wider border border-white/15 backdrop-blur-xs">
                  {project.category}
                </span>

                <div className="w-8 h-8 rounded-full bg-white/20 group-hover:bg-primary-orange text-white flex items-center justify-center transition-colors">
                  <Maximize2 size={13} />
                </div>
              </div>

              {/* Bottom Info */}
              <div className="absolute bottom-4 left-4 right-4 z-10">
                <div className="flex items-center gap-1.5 text-amber-300 text-xs font-semibold mb-1">
                  <MapPin size={12} className="shrink-0 text-primary-orange" />
                  <span className="truncate">{project.location}</span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-white leading-snug line-clamp-2">
                  {project.title}
                </h3>

                <div className="flex items-center justify-between mt-2.5 pt-2 border-t border-white/10 text-xs">
                  <span className="font-mono text-white/90 font-bold">{project.capacity}</span>
                  <span className="text-primary-orange font-bold text-[11px] uppercase tracking-wide inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                    View Specs <ArrowRight size={12} />
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* View More / Show Less Button */}
        {projectsData.length > 3 && (
          <div className="mt-8 flex justify-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-slate-900 hover:bg-primary-blue text-white font-bold text-xs uppercase tracking-wider transition-all shadow-sm hover:shadow-md cursor-pointer"
            >
              <span>{showAll ? "Show Less" : `View All Projects (${projectsData.length})`}</span>
              <ArrowRight size={13} className={`transition-transform duration-300 ${showAll ? '-rotate-90' : ''}`} />
            </button>
          </div>
        )}

      </div>

      {/* ================= COMPACT, CLEAN DETAILS MODAL ================= */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-slate-950/70 backdrop-blur-xs z-40 cursor-pointer"
            />

            {/* Compact Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 12 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden z-50 flex flex-col border border-slate-200 max-h-[92vh]"
            >
              {/* Compact Image Header */}
              <div className="relative h-44 sm:h-48 w-full bg-slate-900 shrink-0">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-950/90 via-slate-950/40 to-black/20" />

                {/* Top Actions: Category Badge & Close Button */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
                  <span className="px-2.5 py-1 rounded-md bg-white/90 backdrop-blur-xs text-slate-900 text-[11px] font-bold uppercase tracking-wider">
                    {selectedProject.category} • {selectedProject.completionYear}
                  </span>

                  <button
                    onClick={() => setSelectedProject(null)}
                    aria-label="Close modal"
                    className="w-8 h-8 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center transition-colors cursor-pointer"
                  >
                    <X size={16} />
                  </button>
                </div>

                {/* Bottom Title on Image */}
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <p className="text-[11px] font-bold text-primary-orange uppercase tracking-wider mb-0.5">
                    {selectedProject.client}
                  </p>
                  <h3 className="text-base sm:text-lg font-extrabold leading-snug">
                    {selectedProject.title}
                  </h3>
                </div>
              </div>

              {/* Compact Modal Body */}
              <div className="p-4 sm:p-5 space-y-4 overflow-y-auto">
                
                {/* 3 Metric Pills */}
                <div className="grid grid-cols-3 gap-2">
                  <div className="p-2.5 rounded-xl bg-blue-50 border border-blue-100 text-center">
                    <span className="text-[10px] font-bold text-slate-500 uppercase block">Capacity</span>
                    <span className="text-xs sm:text-sm font-extrabold font-mono text-primary-blue mt-0.5 block truncate">
                      {selectedProject.capacity}
                    </span>
                  </div>

                  <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-100 text-center">
                    <span className="text-[10px] font-bold text-slate-500 uppercase block">Impact</span>
                    <span className="text-xs sm:text-sm font-extrabold font-mono text-emerald-700 mt-0.5 block truncate">
                      {selectedProject.savings}
                    </span>
                  </div>

                  <div className="p-2.5 rounded-xl bg-orange-50 border border-orange-100 text-center">
                    <span className="text-[10px] font-bold text-slate-500 uppercase block">Location</span>
                    <span className="text-xs font-bold text-slate-800 mt-0.5 block truncate">
                      {selectedProject.location}
                    </span>
                  </div>
                </div>

                {/* Scope: 1 concise sentence */}
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-200/80">
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block mb-1">
                    Project Scope
                  </span>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    {selectedProject.scope}
                  </p>
                </div>

                {/* Key Highlights */}
                <div>
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block mb-2">
                    Key Highlights
                  </span>
                  <div className="space-y-1.5">
                    {selectedProject.highlights.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                        <CheckCircle2 size={13} className="text-emerald-600 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Compact Modal Footer */}
              <div className="p-3 sm:p-4 border-t border-slate-100 bg-slate-50/90 flex items-center justify-between gap-2">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-4 py-2 text-xs font-bold text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
                >
                  Close
                </button>

                <button
                  onClick={() => {
                    setSelectedProject(null);
                    if (onOpenContact) {
                      onOpenContact();
                    } else {
                      const el = document.getElementById('contact');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-primary-orange hover:bg-orange-600 text-white font-bold text-xs uppercase tracking-wider rounded-lg shadow-xs hover:shadow-sm transition-all cursor-pointer"
                >
                  <span>Inquire Similar Scope</span>
                  <ArrowRight size={13} />
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default RecentProjects;
