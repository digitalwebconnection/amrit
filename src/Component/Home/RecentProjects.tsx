import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  MapPin,

  Zap,

  CheckCircle2,
 
  Layers,
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
  specs: {
    modules: string;
    inverter: string;
    structure: string;
    metering: string;
  };
  highlights: string[];
  image: string;
}

const filterTabs = [
  { id: "all", label: "All Projects" },
  { id: "solar", label: "Solar EPC" },
  { id: "substation", label: "HT/LT Substations" },
  { id: "automation", label: "Automation & SCADA" },
];

const projectsData: Project[] = [
  {
    id: "p1",
    title: "500 kWp Commercial Rooftop Solar EPC",
    category: "Solar EPC",
    filterCategory: "solar",
    client: "TechPark Solutions Hub",
    location: "Chakan MIDC, Pune, Maharashtra",
    capacity: "500 kWp DC Capacity",
    savings: "₹42 Lakhs / Year Estimated Savings",
    completionYear: "2024",
    scope: "Turnkey engineering, procurement, structural load strengthening, installation of 580Wp TOPCon solar modules, and DISCOM net-metering grid synchronization.",
    specs: {
      modules: "Tier-1 580Wp N-Type Bifacial TOPCon",
      inverter: "High-Efficiency 110kW String Inverters",
      structure: "Custom HDG Non-Penetrative Ballast",
      metering: "33kV HT Net-Metering Synchronized"
    },
    highlights: [
      "7.2 Lakh kWh annual clean generation",
      "580 Tons annual CO2 reduction",
      "3.4 Years calculated financial ROI payback",
      "24/7 IoT cloud generation telemetry"
    ],
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "p2",
    title: "33kV Industrial Substation & Power Distribution",
    category: "HT/LT Substations",
    filterCategory: "substation",
    client: "Adani Logistics & Warehousing Park",
    location: "JNPT Port SEZ, Navi Mumbai",
    capacity: "5 MVA 33kV / 11kV Substation",
    savings: "Zero Downtime & 100% CEA Compliance",
    completionYear: "2023",
    scope: "Complete turnkey HT switchyard erection, 5 MVA oil-cooled transformer installation, HT VCB panels, capacitor banks, and statutory CEA electrical inspection clearance.",
    specs: {
      modules: "N/A (Substation EPC)",
      inverter: "Schneider HT VCB & Protective Relays",
      structure: "Hot-Dip Galvanized Switchyard Gantries",
      metering: "Tri-Vector 0.2s Accuracy Metering"
    },
    highlights: [
      "100% CEA electrical compliance cleared on first inspection",
      "Redundant dual-incomer power distribution network",
      "Automated SCADA tripping and fault protection",
      "Heavy industrial grade harmonic filters installed"
    ],
    image: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "p3",
    title: "1.2 MW Industrial Ground-Mounted Solar Farm",
    category: "Solar EPC",
    filterCategory: "solar",
    client: "Apex Textile & Spinners Ltd",
    location: "Surat Industrial Belt, Gujarat",
    capacity: "1.2 MW Ground Mount Solar",
    savings: "₹1.1 Crore / Year Power Bill Reduction",
    completionYear: "2024",
    scope: "Land contour grading, pile foundation, 1.2 MW single-axis tracking solar PV array erection, dedicated 11kV step-up substation, and dedicated transmission line.",
    specs: {
      modules: "Tier-1 Mono-PERC 550Wp Certified",
      inverter: "Central Inverter Stations with SCADA",
      structure: "Hot-Dip Galvanized Rammed Steel Piles",
      metering: "11kV Dedicated Bay at State DISCOM"
    },
    highlights: [
      "18.5 Lakh kWh clean solar units generated annually",
      "Powering 70% of manufacturing unit power demand",
      "99.2% plant generation uptime achieved",
      "25-Year performance warranty backed by OEM"
    ],
    image: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "p4",
    title: "Hospital Critical Power & 250kWh BESS Storage",
    category: "HT/LT Substations",
    filterCategory: "substation",
    client: "City Multi-Speciality Hospital",
    location: "Thane West, Mumbai",
    capacity: "250 kWh Lithium-Ion BESS",
    savings: "Zero Millisecond Grid Blackout Transfer",
    completionYear: "2024",
    scope: "Integration of 250 kWh high-density Lithium Iron Phosphate (LFP) Battery Energy Storage System with automated synchronizing PLC panels for instant zero-loss ICU power continuity.",
    specs: {
      modules: "Tier-1 LFP Battery Packs (1C Rating)",
      inverter: "Bi-directional Hybrid 150kW Inverters",
      structure: "Fire-Suppressed Outdoor Enclosure",
      metering: "Smart Digital IoT Power Quality Analyzer"
    },
    highlights: [
      "Zero millisecond transition time on grid failure",
      "Diesel generator fuel consumption reduced by 65%",
      "Harmonic distortion (THD) kept below 2.5%",
      "Remote cloud monitoring with SMS alerts"
    ],
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "p5",
    title: "Cloud SCADA & Automated PLC Energy Console",
    category: "Automation & SCADA",
    filterCategory: "automation",
    client: "Mahindra Green Tech Park",
    location: "Industrial Corridor, Nashik",
    capacity: "40+ Integrated PLC Nodes",
    savings: "99.4% MPPT Synchronization",
    completionYear: "2023",
    scope: "Development of custom cloud SCADA dashboard connecting multiple solar and HT transformer nodes for real-time telemetry, automated peak-shaving, and predictive maintenance.",
    specs: {
      modules: "IoT Gateway & Sensors Array",
      inverter: "Modbus/RS485 Protocol Converters",
      structure: "IP65 Weatherproof Industrial Panels",
      metering: "Real-time Multi-parameter Cloud Sync"
    },
    highlights: [
      "Instant notification for underperforming strings",
      "Daily automated generation and billing reports",
      "Historical data logging and trend analytics",
      "Role-based multi-user cloud access"
    ],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "p6",
    title: "250 kWp Elevated Commercial Solar Structure",
    category: "Solar EPC",
    filterCategory: "solar",
    client: "CyberCity IT Corporate Towers",
    location: "Hitec City, Hyderabad",
    capacity: "250 kWp Elevated Structure",
    savings: "₹28 Lakhs / Year Power Cost Saved",
    completionYear: "2024",
    scope: "Custom 3.5-meter elevated super-structure installation allowing unobstructed rooftop corporate recreational space below, coupled with high-yield bifacial modules.",
    specs: {
      modules: "Bifacial 570Wp Dual Glass Panels",
      inverter: "60kW Multi-MPPT Inverters",
      structure: "Elevated High-Grade Galvanized Steel",
      metering: "DISCOM LT Net-Metering Synchronized"
    },
    highlights: [
      "100% usable recreational rooftop space preserved",
      "3.2 Years fast financial payback period",
      "3.8 Lakh units clean solar generation annually",
      "Weather-resistant cyclone-rated engineering"
    ],
    image: "https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?auto=format&fit=crop&q=80&w=1200"
  }
];

interface RecentProjectsProps {
  onOpenContact?: () => void;
}

export const RecentProjects: React.FC<RecentProjectsProps> = ({ onOpenContact }) => {
  const [activeTab, setActiveTab] = useState("all");
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

  const filteredProjects = activeTab === "all"
    ? projectsData
    : projectsData.filter((p) => p.filterCategory === activeTab);

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 3);

  return (
    <section id="projects" className="relative py-8 lg:py-14 bg-slate-50/70 overflow-hidden border-t border-slate-200/80">
      
      {/* Background Subtle Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-orange/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-blue/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-10 lg:mb-12">
          
          {/* Eyebrow badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 shadow-xs mb-3.5"
          >
            <span className="w-2 h-2 rounded-full bg-primary-orange animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
              Project Portfolio // Click Image for Full Specs
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-serif font-extrabold text-slate-900 tracking-tight leading-tight mb-4"
          >
            Recent Flagship <br /> <span className="text-transparent bg-clip-text bg-linear-to-r from-primary-blue via-blue-700 to-primary-orange">Projects</span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-900 text-sm sm:text-base max-w-6xl mx-auto leading-relaxed mb-8"
          >
            Click on any project image below to inspect full engineering blueprints, technical specifications, and delivered impact.
          </motion.p>

          {/* Minimalist Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {filterTabs.map((tab) => {
              const isSelected = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id);
                    setShowAll(false);
                  }}
                  className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? 'bg-slate-900 text-white shadow-md'
                      : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200/80 shadow-2xs'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* ================= CLEAN IMAGE GALLERY GRID (3 COLUMNS) ================= */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {displayedProjects.map((project, idx) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                onClick={() => setSelectedProject(project)}
                className="group relative h-72 sm:h-80 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl border border-slate-200/80 cursor-pointer bg-slate-900"
              >
                {/* Full-Cover Image with Hover Zoom */}
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 brightness-95 group-hover:brightness-105"
                />

                {/* Dark Vignette Gradient Overlays */}
                <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/40 to-transparent transition-opacity duration-300" />
                <div className="absolute inset-0 bg-primary-blue/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                {/* Top Corner Badges */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                  <span className="px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-white text-[11px] font-bold uppercase tracking-wider shadow-sm border border-white/20">
                    {project.category}
                  </span>

                  {/* Expand / View Details Icon Badge */}
                  <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md group-hover:bg-primary-orange text-white flex items-center justify-center transition-all duration-300 shadow-md group-hover:scale-110">
                    <Maximize2 size={14} />
                  </div>
                </div>

                {/* Bottom Overlay Info (Clean & Elegant) */}
                <div className="absolute bottom-4 left-4 right-4 z-10">
                  <div className="flex items-center gap-1.5 text-amber-300 text-xs font-semibold mb-1">
                    <MapPin size={12} className="shrink-0 text-primary-orange" />
                    <span className="truncate">{project.location}</span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-white leading-snug group-hover:text-amber-200 transition-colors font-serif line-clamp-2">
                    {project.title}
                  </h3>

                  {/* Hover "Click to View Details" prompt */}
                  <div className="flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-primary-orange mt-2 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <span>Click to view full specs</span>
                    <ArrowRight size={12} />
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View More / Show Less Projects Button */}
        {filteredProjects.length > 3 && (
          <div className="mt-10 flex justify-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="group inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-slate-900 hover:bg-primary-blue text-white font-bold text-xs uppercase tracking-widest transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5 cursor-pointer"
            >
              <span>{showAll ? "Show Less Projects" : `View More Projects (${filteredProjects.length - 3} More)`}</span>
              <ArrowRight size={14} className={`transition-transform duration-300 ${showAll ? '-rotate-90' : 'group-hover:translate-x-1.5'}`} />
            </button>
          </div>
        )}

      </div>

      {/* ================= FULL DETAILS MODAL POPUP ================= */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            
            {/* Backdrop Blur Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-slate-950/80 backdrop-blur-md z-40 cursor-pointer"
            />

            {/* Modal Dialog Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden z-50 flex flex-col border border-slate-200"
            >
              
              {/* Top Modal Header with Close Button */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/80 sticky top-0 z-20">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-primary-blue/10 text-primary-blue text-xs font-bold uppercase tracking-wider">
                    {selectedProject.category}
                  </span>
                  <span className="text-xs font-semibold text-slate-500 hidden sm:inline">
                    • Commissioned {selectedProject.completionYear}
                  </span>
                </div>

                <button
                  onClick={() => setSelectedProject(null)}
                  className="w-9 h-9 rounded-full bg-slate-200 hover:bg-slate-300 text-slate-700 flex items-center justify-center transition-colors cursor-pointer"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Scrollable Modal Content */}
              <div className="overflow-y-auto p-6 sm:p-8 space-y-6">
                
                {/* Hero Image in Modal */}
                <div className="relative h-64 sm:h-80 w-full rounded-2xl overflow-hidden shadow-inner bg-slate-900">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-950/70 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-xs font-bold text-primary-orange uppercase tracking-wider mb-1">
                      {selectedProject.client}
                    </p>
                    <h3 className="text-xl sm:text-2xl font-bold font-serif">
                      {selectedProject.title}
                    </h3>
                  </div>
                </div>

                {/* Key Metrics Strip (2x2 Grid) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-100">
                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Total Capacity</p>
                    <p className="text-base font-black font-mono text-primary-blue mt-0.5">{selectedProject.capacity}</p>
                  </div>
                  <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-100">
                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Financial Impact</p>
                    <p className="text-base font-black font-mono text-emerald-700 mt-0.5">{selectedProject.savings}</p>
                  </div>
                  <div className="p-4 rounded-xl bg-orange-50/70 border border-orange-100">
                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Location</p>
                    <p className="text-xs font-bold text-slate-800 mt-1 truncate">{selectedProject.location}</p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-100 border border-slate-200">
                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Client</p>
                    <p className="text-xs font-bold text-slate-800 mt-1 truncate">{selectedProject.client}</p>
                  </div>
                </div>

                {/* Engineering Scope Description */}
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-2 flex items-center gap-2">
                    <Layers size={16} className="text-primary-blue" />
                    <span>Project Scope &amp; Engineering Execution</span>
                  </h4>
                  <p className="text-slate-600 text-sm leading-relaxed font-normal bg-slate-50 p-4 rounded-xl border border-slate-100">
                    {selectedProject.scope}
                  </p>
                </div>

                {/* Technical Specifications Grid */}
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-3 flex items-center gap-2">
                    <Zap size={16} className="text-primary-orange" />
                    <span>Technical Bill of Materials (BOM)</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div className="p-3 rounded-lg border border-slate-200 bg-white">
                      <span className="text-slate-400 font-bold block uppercase text-[10px]">PV Modules / Equipment</span>
                      <span className="text-slate-800 font-semibold">{selectedProject.specs.modules}</span>
                    </div>
                    <div className="p-3 rounded-lg border border-slate-200 bg-white">
                      <span className="text-slate-400 font-bold block uppercase text-[10px]">Inverter / Switchgear</span>
                      <span className="text-slate-800 font-semibold">{selectedProject.specs.inverter}</span>
                    </div>
                    <div className="p-3 rounded-lg border border-slate-200 bg-white">
                      <span className="text-slate-400 font-bold block uppercase text-[10px]">Mounting / Structure</span>
                      <span className="text-slate-800 font-semibold">{selectedProject.specs.structure}</span>
                    </div>
                    <div className="p-3 rounded-lg border border-slate-200 bg-white">
                      <span className="text-slate-400 font-bold block uppercase text-[10px]">Grid &amp; DISCOM Sync</span>
                      <span className="text-slate-800 font-semibold">{selectedProject.specs.metering}</span>
                    </div>
                  </div>
                </div>

                {/* Project Delivered Highlights */}
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-3 flex items-center gap-2">
                    <Sparkles size={16} className="text-amber-500" />
                    <span>Key Performance Highlights</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedProject.highlights.map((highlight, hIdx) => (
                      <div key={hIdx} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                        <CheckCircle2 size={14} className="text-emerald-600 shrink-0" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Modal Footer CTA */}
              <div className="p-4 sm:p-6 border-t border-slate-100 bg-slate-50/80 flex flex-col sm:flex-row items-center justify-between gap-3">
                <p className="text-xs text-slate-500 text-center sm:text-left">
                  Need a similar turnkey solar or electrical setup for your facility?
                </p>

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
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-linear-to-r from-primary-blue via-blue-800 to-primary-orange text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all cursor-pointer"
                >
                  <span>Request Similar Project Scope</span>
                  <ArrowRight size={14} />
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
