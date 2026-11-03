import React from 'react';

interface DiagramProps {
  id: string;
  className?: string;
}

export const BiologyDiagram: React.FC<DiagramProps> = ({ id, className = '' }) => {
  switch (id) {
    case 'diagram-enzim-kinetika':
      return (
        <div className={`p-4 bg-white/90 rounded-2xl border border-pink-100 shadow-sm ${className}`}>
          <div className="text-xs font-semibold text-rose-700 uppercase tracking-wider mb-2 flex items-center justify-between">
            <span>Grafik 1: Pengaruh Suhu terhadap Laju Reaksi Enzimatis</span>
            <span className="text-[10px] bg-rose-100 text-rose-800 px-2 py-0.5 rounded-full">Data Laboratorium</span>
          </div>
          <svg viewBox="0 0 500 240" className="w-full h-auto max-h-56">
            <defs>
              <linearGradient id="curveGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#f43f5e" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#f43f5e" stopOpacity="0.0" />
              </linearGradient>
            </defs>
            {/* Grid */}
            <line x1="50" y1="20" x2="50" y2="200" stroke="#cbd5e1" strokeWidth="1.5" />
            <line x1="50" y1="200" x2="480" y2="200" stroke="#cbd5e1" strokeWidth="1.5" />
            
            {/* Horizontal gridlines */}
            <line x1="50" y1="150" x2="480" y2="150" stroke="#f1f5f9" strokeDasharray="3 3" />
            <line x1="50" y1="100" x2="480" y2="100" stroke="#f1f5f9" strokeDasharray="3 3" />
            <line x1="50" y1="50" x2="480" y2="50" stroke="#f1f5f9" strokeDasharray="3 3" />

            {/* Labels */}
            <text x="20" y="115" transform="rotate(-90 20 115)" textAnchor="middle" className="text-[11px] fill-slate-500 font-medium">Laju Reaksi (μmol/menit)</text>
            <text x="265" y="230" textAnchor="middle" className="text-[11px] fill-slate-500 font-medium">Suhu (°C)</text>

            {/* X Axis ticks */}
            <text x="50" y="215" textAnchor="middle" className="text-[10px] fill-slate-600">0</text>
            <text x="120" y="215" textAnchor="middle" className="text-[10px] fill-slate-600">10</text>
            <text x="190" y="215" textAnchor="middle" className="text-[10px] fill-slate-600">20</text>
            <text x="260" y="215" textAnchor="middle" className="text-[10px] fill-slate-600">30</text>
            <text x="310" y="215" textAnchor="middle" className="text-[10px] fill-rose-600 font-bold">37°C</text>
            <text x="360" y="215" textAnchor="middle" className="text-[10px] fill-slate-600">45</text>
            <text x="430" y="215" textAnchor="middle" className="text-[10px] fill-slate-600">60</text>

            {/* Curve Fill */}
            <path d="M 50 195 Q 180 185, 250 120 T 310 40 Q 345 70, 375 190 L 375 200 L 50 200 Z" fill="url(#curveGrad)" />
            {/* Curve Stroke */}
            <path d="M 50 195 Q 180 185, 250 120 T 310 40 Q 345 70, 375 190" fill="none" stroke="#e11d48" strokeWidth="3.5" strokeLinecap="round" />

            {/* Optimum point indicator */}
            <circle cx="310" cy="40" r="5" fill="#e11d48" />
            <circle cx="310" cy="40" r="9" fill="none" stroke="#f43f5e" strokeWidth="1.5" strokeDasharray="2 2" />
            <line x1="310" y1="40" x2="310" y2="200" stroke="#f43f5e" strokeWidth="1" strokeDasharray="3 3" />
            <rect x="250" y="15" width="120" height="20" rx="4" fill="#ffe4e6" stroke="#fda4af" />
            <text x="310" y="29" textAnchor="middle" className="text-[10px] fill-rose-900 font-bold">Titik Optimum (37°C)</text>

            {/* Denaturation zone */}
            <rect x="350" y="70" width="110" height="42" rx="4" fill="#fef2f2" stroke="#fecaca" />
            <text x="405" y="86" textAnchor="middle" className="text-[10px] fill-red-800 font-bold">Zona Denaturasi</text>
            <text x="405" y="102" textAnchor="middle" className="text-[9px] fill-red-600">Kerusakan Ikatan H &amp; Tersier</text>
          </svg>
        </div>
      );

    case 'diagram-inhibitor':
      return (
        <div className={`p-4 bg-white/90 rounded-2xl border border-pink-100 shadow-sm ${className}`}>
          <div className="text-xs font-semibold text-rose-700 uppercase tracking-wider mb-2 flex items-center justify-between">
            <span>Grafik 2: Kinetika Michaelis-Menten (Inhibitor Kompetitif vs Nonkompetitif)</span>
            <span className="text-[10px] bg-purple-100 text-purple-800 px-2 py-0.5 rounded-full">Kinetika Enzim</span>
          </div>
          <svg viewBox="0 0 500 230" className="w-full h-auto max-h-56">
            <line x1="50" y1="20" x2="50" y2="190" stroke="#cbd5e1" strokeWidth="1.5" />
            <line x1="50" y1="190" x2="480" y2="190" stroke="#cbd5e1" strokeWidth="1.5" />

            <text x="18" y="105" transform="rotate(-90 18 105)" textAnchor="middle" className="text-[11px] fill-slate-500">Laju Reaksi (V)</text>
            <text x="265" y="215" textAnchor="middle" className="text-[11px] fill-slate-500">Konsentrasi Substrat [S]</text>

            {/* Asymptote Vmax */}
            <line x1="50" y1="45" x2="480" y2="45" stroke="#94a3b8" strokeDasharray="3 3" />
            <text x="75" y="40" className="text-[10px] fill-slate-500 font-medium">Vmax Normal</text>

            {/* Curve A: Tanpa inhibitor */}
            <path d="M 50 190 Q 120 50, 480 46" fill="none" stroke="#059669" strokeWidth="3" />
            <text x="410" y="38" className="text-[10px] fill-emerald-700 font-bold">1. Normal</text>

            {/* Curve B: Inhibitor Kompetitif (Vmax tetap, Km naik) */}
            <path d="M 50 190 Q 220 120, 480 50" fill="none" stroke="#2563eb" strokeWidth="2.5" strokeDasharray="4 2" />
            <text x="340" y="70" className="text-[10px] fill-blue-700 font-bold">2. Inhibitor Kompetitif</text>

            {/* Curve C: Inhibitor Nonkompetitif (Vmax turun, Km tetap) */}
            <path d="M 50 190 Q 120 110, 480 115" fill="none" stroke="#e11d48" strokeWidth="2.5" strokeDasharray="6 2" />
            <text x="330" y="130" className="text-[10px] fill-rose-700 font-bold">3. Inhibitor Nonkompetitif</text>

            {/* Legend card */}
            <rect x="250" y="145" width="220" height="40" rx="4" fill="#f8fafc" stroke="#e2e8f0" />
            <text x="260" y="160" className="text-[9px] fill-slate-700">• Kompetitif: Berebut sisi aktif, Vmax tercapai di [S] tinggi</text>
            <text x="260" y="176" className="text-[9px] fill-slate-700">• Nonkompetitif: Terikat sisi alosterik, Vmax menurun permanen</text>
          </svg>
        </div>
      );

    case 'diagram-kloroplas':
      return (
        <div className={`p-4 bg-white/90 rounded-2xl border border-pink-100 shadow-sm ${className}`}>
          <div className="text-xs font-semibold text-rose-700 uppercase tracking-wider mb-2 flex items-center justify-between">
            <span>Diagram 3: Integrasi Reaksi Terang &amp; Siklus Calvin pada Kloroplas</span>
            <span className="text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full">Fotosintesis</span>
          </div>
          <svg viewBox="0 0 520 250" className="w-full h-auto max-h-60">
            {/* Outer Chloroplast */}
            <rect x="15" y="20" width="490" height="215" rx="28" fill="#f0fdf4" stroke="#16a34a" strokeWidth="2.5" />
            <text x="35" y="42" className="text-[12px] fill-emerald-800 font-bold">Kloroplas (Membran Ganda)</text>

            {/* Tilakoid (Reaksi Terang) */}
            <rect x="40" y="65" width="170" height="150" rx="16" fill="#dcfce7" stroke="#22c55e" strokeWidth="2" />
            <text x="125" y="90" textAnchor="middle" className="text-[12px] fill-emerald-900 font-bold">GRANA (Tilakoid)</text>
            <text x="125" y="108" textAnchor="middle" className="text-[10px] fill-emerald-700 font-semibold">[Reaksi Terang]</text>

            {/* Inputs & Outputs for Reaksi Terang */}
            <path d="M 125 15 L 125 60" stroke="#f59e0b" strokeWidth="3" markerEnd="url(#arrow-amber)" />
            <text x="130" y="38" className="text-[10px] fill-amber-700 font-bold">Cahaya Matahari + H₂O</text>

            <path d="M 125 215 L 125 242" stroke="#0284c7" strokeWidth="2.5" />
            <text x="125" y="246" textAnchor="middle" className="text-[10px] fill-sky-800 font-bold">O₂ (Fotolisis H₂O)</text>

            {/* Siklus Calvin (Stroma) */}
            <rect x="310" y="65" width="175" height="150" rx="16" fill="#fdf2f8" stroke="#ec4899" strokeWidth="2" />
            <text x="397" y="90" textAnchor="middle" className="text-[12px] fill-pink-900 font-bold">STROMA</text>
            <text x="397" y="108" textAnchor="middle" className="text-[10px] fill-pink-700 font-semibold">[Siklus Calvin]</text>

            {/* Input & Output Calvin */}
            <path d="M 397 15 L 397 60" stroke="#64748b" strokeWidth="2.5" />
            <text x="405" y="38" className="text-[10px] fill-slate-700 font-bold">CO₂ (Fiksasi RuBP)</text>

            <path d="M 397 215 L 397 242" stroke="#16a34a" strokeWidth="2.5" />
            <text x="397" y="246" textAnchor="middle" className="text-[10px] fill-emerald-800 font-bold">Glukosa / PGAL (C₆H₁₂O₆)</text>

            {/* Arrows Between Grana and Stroma */}
            {/* ATP + NADPH from Tilakoid to Stroma */}
            <path d="M 215 110 Q 260 95, 305 110" fill="none" stroke="#e11d48" strokeWidth="2.5" />
            <text x="260" y="100" textAnchor="middle" className="text-[10px] fill-rose-700 font-bold">ATP + NADPH</text>

            {/* ADP + NADP+ from Stroma back to Tilakoid */}
            <path d="M 305 165 Q 260 180, 215 165" fill="none" stroke="#475569" strokeWidth="2" strokeDasharray="3 2" />
            <text x="260" y="180" textAnchor="middle" className="text-[9px] fill-slate-600 font-medium">ADP + Pi + NADP⁺</text>
          </svg>
        </div>
      );

    case 'diagram-nefron':
      return (
        <div className={`p-4 bg-white/90 rounded-2xl border border-pink-100 shadow-sm ${className}`}>
          <div className="text-xs font-semibold text-rose-700 uppercase tracking-wider mb-2 flex items-center justify-between">
            <span>Diagram 4: Anatomi Nefron dan 3 Tahapan Pembentukan Urine</span>
            <span className="text-[10px] bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">Sistem Ekskresi</span>
          </div>
          <svg viewBox="0 0 520 250" className="w-full h-auto max-h-60">
            {/* Background Zones */}
            <rect x="20" y="20" width="480" height="110" fill="#fdf4ff" opacity="0.6" rx="8" />
            <text x="30" y="38" className="text-[11px] fill-purple-900 font-bold">KORTEKS GINJAL</text>

            <rect x="20" y="135" width="480" height="100" fill="#fef2f2" opacity="0.6" rx="8" />
            <text x="30" y="152" className="text-[11px] fill-rose-900 font-bold">MEDULA GINJAL</text>

            {/* 1. Glomerulus & Kapsula Bowman */}
            <circle cx="85" cy="75" r="32" fill="#ffe4e6" stroke="#e11d48" strokeWidth="2.5" />
            <circle cx="85" cy="75" r="18" fill="#fda4af" stroke="#be123c" strokeWidth="1.5" />
            <text x="85" y="125" textAnchor="middle" className="text-[10px] fill-rose-900 font-bold">1. FILTRASI</text>
            <text x="85" y="137" textAnchor="middle" className="text-[8.5px] fill-slate-600">Glomerulus → Urine Primer</text>

            {/* 2. Tubulus Kontortus Proksimal */}
            <path d="M 115 75 Q 160 50, 190 75 T 225 75" fill="none" stroke="#3b82f6" strokeWidth="4" />
            <text x="180" y="45" textAnchor="middle" className="text-[10px] fill-blue-900 font-bold">2. REABSORPSI</text>
            <text x="180" y="125" textAnchor="middle" className="text-[8.5px] fill-slate-600">TKP → Glukosa &amp; Asam Amino Diserap</text>

            {/* 3. Lengkung Henle descending & ascending */}
            <path d="M 225 75 L 225 210 Q 255 225, 280 210 L 280 75" fill="none" stroke="#059669" strokeWidth="3.5" />
            <text x="253" y="185" textAnchor="middle" className="text-[9px] fill-emerald-800 font-bold">Lengkung Henle</text>
            <text x="253" y="198" textAnchor="middle" className="text-[8px] fill-emerald-600">Osmoregulasi Garis Cair</text>

            {/* 4. Tubulus Kontortus Distal (Augmentasi) */}
            <path d="M 280 75 Q 320 55, 360 75 T 400 75" fill="none" stroke="#d97706" strokeWidth="4" />
            <text x="345" y="45" textAnchor="middle" className="text-[10px] fill-amber-900 font-bold">3. AUGMENTASI</text>
            <text x="345" y="125" textAnchor="middle" className="text-[8.5px] fill-slate-600">TKD → Zat sisa obat, H⁺ ditambahkan</text>

            {/* 5. Tubulus Kolektivus */}
            <line x1="400" y1="35" x2="400" y2="230" stroke="#7c3aed" strokeWidth="5" />
            <text x="445" y="140" textAnchor="middle" className="text-[10px] fill-purple-900 font-bold">Tubulus Kolektivus</text>
            <text x="445" y="155" textAnchor="middle" className="text-[8.5px] fill-purple-700">Urine Sesungguhnya</text>
            <text x="445" y="170" textAnchor="middle" className="text-[8.5px] fill-rose-600 font-semibold">Respon Hormon ADH</text>
          </svg>
        </div>
      );

    case 'diagram-respon-imun':
      return (
        <div className={`p-4 bg-white/90 rounded-2xl border border-pink-100 shadow-sm ${className}`}>
          <div className="text-xs font-semibold text-rose-700 uppercase tracking-wider mb-2 flex items-center justify-between">
            <span>Grafik 5: Respon Imun Humoral (Primer vs Sekunder Pasca-Vaksinasi)</span>
            <span className="text-[10px] bg-rose-100 text-rose-800 px-2 py-0.5 rounded-full">Sistem Imun</span>
          </div>
          <svg viewBox="0 0 520 230" className="w-full h-auto max-h-56">
            <line x1="50" y1="20" x2="50" y2="190" stroke="#cbd5e1" strokeWidth="1.5" />
            <line x1="50" y1="190" x2="490" y2="190" stroke="#cbd5e1" strokeWidth="1.5" />

            <text x="18" y="105" transform="rotate(-90 18 105)" textAnchor="middle" className="text-[10px] fill-slate-500">Titer Antibodi Serum</text>
            <text x="270" y="215" textAnchor="middle" className="text-[10px] fill-slate-500">Waktu (Hari)</text>

            {/* Exposure 1 indicator */}
            <line x1="70" y1="25" x2="70" y2="190" stroke="#e11d48" strokeWidth="1.5" strokeDasharray="3 3" />
            <text x="70" y="20" textAnchor="middle" className="text-[9px] fill-rose-700 font-bold">Paparan I (Vaksin)</text>

            {/* Primary Response Curve (lag phase, moderate peak) */}
            <path d="M 70 190 L 100 190 Q 140 100, 160 130 T 230 190" fill="none" stroke="#f43f5e" strokeWidth="2.5" />
            <text x="145" y="115" textAnchor="middle" className="text-[10px] fill-rose-600 font-bold">Respon Primer (IgM &gt; IgG)</text>
            <text x="145" y="130" textAnchor="middle" className="text-[8px] fill-slate-500">Fase Lag 5-10 hari</text>

            {/* Exposure 2 (Booster) */}
            <line x1="260" y1="25" x2="260" y2="190" stroke="#7c3aed" strokeWidth="1.5" strokeDasharray="3 3" />
            <text x="260" y="20" textAnchor="middle" className="text-[9px] fill-purple-700 font-bold">Paparan II (Patogen Riil)</text>

            {/* Secondary Response Curve (very fast, very high peak) */}
            <path d="M 260 190 L 275 185 Q 315 25, 340 30 T 470 120" fill="none" stroke="#7c3aed" strokeWidth="3" />
            <circle cx="340" cy="30" r="5" fill="#7c3aed" />
            <text x="365" y="42" className="text-[10px] fill-purple-800 font-bold">Respon Sekunder (IgG Tinggi &amp; Cepat)</text>
            <text x="365" y="56" className="text-[8.5px] fill-purple-600">Peran Sel Limfosit Memori</text>
          </svg>
        </div>
      );

    case 'diagram-bakteri-gram':
      return (
        <div className={`p-4 bg-white/90 rounded-2xl border border-pink-100 shadow-sm ${className}`}>
          <div className="text-xs font-semibold text-rose-700 uppercase tracking-wider mb-2 flex items-center justify-between">
            <span>Diagram 6: Arsitektur Dinding Sel Bakteri Gram Positif vs Gram Negatif</span>
            <span className="text-[10px] bg-indigo-100 text-indigo-800 px-2 py-0.5 rounded-full">Mikrobiologi</span>
          </div>
          <svg viewBox="0 0 520 220" className="w-full h-auto max-h-56">
            {/* Left: Gram Positif */}
            <rect x="25" y="20" width="225" height="185" rx="12" fill="#faf5ff" stroke="#a855f7" strokeWidth="1.5" />
            <text x="137" y="42" textAnchor="middle" className="text-[12px] fill-purple-900 font-bold">GRAM POSITIF (Ungu)</text>

            {/* Thick Peptidoglycan */}
            <rect x="45" y="58" width="185" height="65" rx="6" fill="#e9d5ff" stroke="#9333ea" strokeWidth="1.5" />
            <text x="137" y="90" textAnchor="middle" className="text-[10px] fill-purple-900 font-bold">Lapisan Peptidoglikan Tebal</text>
            <text x="137" y="105" textAnchor="middle" className="text-[8.5px] fill-purple-700">Mengandung Asam Teikoat</text>

            {/* Membran Plasma */}
            <rect x="45" y="135" width="185" height="30" rx="4" fill="#fed7aa" stroke="#f97316" strokeWidth="1" />
            <text x="137" y="154" textAnchor="middle" className="text-[9px] fill-amber-900 font-medium">Membran Plasma (Fosfolipid)</text>
            <text x="137" y="192" textAnchor="middle" className="text-[9px] fill-emerald-700 font-semibold">Rentan terhadap Penisilin</text>

            {/* Right: Gram Negatif */}
            <rect x="270" y="20" width="225" height="185" rx="12" fill="#fff1f2" stroke="#f43f5e" strokeWidth="1.5" />
            <text x="382" y="42" textAnchor="middle" className="text-[12px] fill-rose-900 font-bold">GRAM NEGATIF (Merah/Pink)</text>

            {/* Outer Membrane LPS */}
            <rect x="290" y="55" width="185" height="25" rx="4" fill="#fecdd3" stroke="#e11d48" strokeWidth="1" />
            <text x="382" y="72" textAnchor="middle" className="text-[9px] fill-rose-900 font-bold">Membran Luar + Lipopolisakarida (LPS)</text>

            {/* Thin Peptidoglycan */}
            <rect x="290" y="90" width="185" height="20" rx="4" fill="#e9d5ff" stroke="#a855f7" strokeWidth="1" />
            <text x="382" y="104" textAnchor="middle" className="text-[8.5px] fill-purple-800">Peptidoglikan Tipis (Periplasmic)</text>

            {/* Inner Plasma Membrane */}
            <rect x="290" y="120" width="185" height="30" rx="4" fill="#fed7aa" stroke="#f97316" strokeWidth="1" />
            <text x="382" y="139" textAnchor="middle" className="text-[9px] fill-amber-900 font-medium">Membran Plasma Dalam</text>
            <text x="382" y="192" textAnchor="middle" className="text-[9px] fill-rose-700 font-semibold">Tahan Penisilin (Perlindungan LPS)</text>
          </svg>
        </div>
      );

    case 'diagram-wallace-weber':
      return (
        <div className={`p-4 bg-white/90 rounded-2xl border border-pink-100 shadow-sm ${className}`}>
          <div className="text-xs font-semibold text-rose-700 uppercase tracking-wider mb-2 flex items-center justify-between">
            <span>Peta Biogeografi: Garis Wallace dan Garis Weber Indonesia</span>
            <span className="text-[10px] bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full">Keanekaragaman Hayati</span>
          </div>
          <svg viewBox="0 0 520 220" className="w-full h-auto max-h-56">
            {/* Zone 1: Asiatis */}
            <rect x="20" y="30" width="150" height="160" rx="12" fill="#ecfdf5" stroke="#10b981" strokeWidth="1.5" />
            <text x="95" y="55" textAnchor="middle" className="text-[11px] fill-emerald-900 font-bold">Zona Asiatis (Barat)</text>
            <text x="95" y="75" textAnchor="middle" className="text-[8.5px] fill-emerald-700">Paparan Sunda</text>
            <text x="95" y="105" textAnchor="middle" className="text-[9px] fill-slate-700">• Mamalia besar berkantong (-)</text>
            <text x="95" y="125" textAnchor="middle" className="text-[9px] fill-slate-700">• Gajah, Harimau, Badak</text>
            <text x="95" y="145" textAnchor="middle" className="text-[9px] fill-slate-700">• Burung warna suram, merdu</text>

            {/* Wallace Line */}
            <line x1="185" y1="20" x2="185" y2="200" stroke="#e11d48" strokeWidth="2.5" strokeDasharray="5 3" />
            <text x="185" y="15" textAnchor="middle" className="text-[9.5px] fill-rose-700 font-extrabold">Garis Wallace</text>

            {/* Zone 2: Peralihan */}
            <rect x="200" y="30" width="135" height="160" rx="12" fill="#fff7ed" stroke="#f97316" strokeWidth="1.5" />
            <text x="267" y="55" textAnchor="middle" className="text-[11px] fill-amber-900 font-bold">Zona Peralihan</text>
            <text x="267" y="75" textAnchor="middle" className="text-[8.5px] fill-amber-700">Wallacea (Sulawesi, Nusa Tenggara)</text>
            <text x="267" y="105" textAnchor="middle" className="text-[9px] fill-slate-700">• Spesies Endemik Tinggi</text>
            <text x="267" y="125" textAnchor="middle" className="text-[9px] fill-slate-700">• Komodo, Anoa, Babirusa</text>
            <text x="267" y="145" textAnchor="middle" className="text-[9px] fill-slate-700">• Burung Maleo</text>

            {/* Weber Line */}
            <line x1="350" y1="20" x2="350" y2="200" stroke="#7c3aed" strokeWidth="2.5" strokeDasharray="5 3" />
            <text x="350" y="15" textAnchor="middle" className="text-[9.5px] fill-purple-700 font-extrabold">Garis Weber</text>

            {/* Zone 3: Australis */}
            <rect x="365" y="30" width="135" height="160" rx="12" fill="#eff6ff" stroke="#3b82f6" strokeWidth="1.5" />
            <text x="432" y="55" textAnchor="middle" className="text-[11px] fill-blue-900 font-bold">Zona Australis (Timur)</text>
            <text x="432" y="75" textAnchor="middle" className="text-[8.5px] fill-blue-700">Paparan Sahul (Papua, Aru)</text>
            <text x="432" y="105" textAnchor="middle" className="text-[9px] fill-slate-700">• Mamalia berkantong (Marsupial)</text>
            <text x="432" y="125" textAnchor="middle" className="text-[9px] fill-slate-700">• Kanguru pohon, Kuskus</text>
            <text x="432" y="145" textAnchor="middle" className="text-[9px] fill-slate-700">• Cendrawasih, Kasuari</text>
          </svg>
        </div>
      );

    case 'diagram-siklus-menstruasi':
      return (
        <div className={`p-4 bg-white/90 rounded-2xl border border-pink-100 shadow-sm ${className}`}>
          <div className="text-xs font-semibold text-rose-700 uppercase tracking-wider mb-2 flex items-center justify-between">
            <span>Grafik 7: Fluktuasi Hormon Hipofisis &amp; Ovarium pada Siklus 28 Hari</span>
            <span className="text-[10px] bg-pink-100 text-pink-800 px-2 py-0.5 rounded-full">Sistem Reproduksi</span>
          </div>
          <svg viewBox="0 0 520 230" className="w-full h-auto max-h-56">
            <line x1="40" y1="20" x2="40" y2="190" stroke="#cbd5e1" strokeWidth="1.5" />
            <line x1="40" y1="190" x2="490" y2="190" stroke="#cbd5e1" strokeWidth="1.5" />

            {/* Day ticks */}
            <text x="40" y="205" textAnchor="middle" className="text-[9px] fill-slate-500">Hari 1</text>
            <text x="140" y="205" textAnchor="middle" className="text-[9px] fill-slate-500">Hari 7</text>
            <text x="260" y="205" textAnchor="middle" className="text-[10px] fill-rose-600 font-bold">Hari 14 (Ovulasi)</text>
            <text x="380" y="205" textAnchor="middle" className="text-[9px] fill-slate-500">Hari 21</text>
            <text x="480" y="205" textAnchor="middle" className="text-[9px] fill-slate-500">Hari 28</text>

            <line x1="260" y1="20" x2="260" y2="190" stroke="#f43f5e" strokeWidth="1.5" strokeDasharray="3 3" />

            {/* LH Surge */}
            <path d="M 40 170 L 220 160 Q 260 25, 275 160 L 490 175" fill="none" stroke="#e11d48" strokeWidth="3" />
            <text x="270" y="35" className="text-[10px] fill-rose-700 font-bold">Lonjakan LH (Memicu Ovulasi)</text>

            {/* Estrogen Peak before ovulation */}
            <path d="M 40 160 Q 180 150, 230 65 Q 260 140, 370 110 T 490 175" fill="none" stroke="#0ea5e9" strokeWidth="2.5" />
            <text x="160" y="70" className="text-[9px] fill-sky-700 font-bold">Estrogen</text>

            {/* Progesterone in Luteal Phase */}
            <path d="M 40 180 L 260 180 Q 360 45, 420 110 L 490 185" fill="none" stroke="#8b5cf6" strokeWidth="3" />
            <text x="360" y="60" className="text-[10px] fill-purple-700 font-bold">Progesteron (Korpus Luteum)</text>
          </svg>
        </div>
      );

    case 'diagram-sinapsis':
      return (
        <div className={`p-4 bg-white/90 rounded-2xl border border-pink-100 shadow-sm ${className}`}>
          <div className="text-xs font-semibold text-rose-700 uppercase tracking-wider mb-2 flex items-center justify-between">
            <span>Diagram 8: Mekanisme Transmisi Impuls pada Celah Sinapsis Kimia</span>
            <span className="text-[10px] bg-purple-100 text-purple-800 px-2 py-0.5 rounded-full">Sistem Koordinasi</span>
          </div>
          <svg viewBox="0 0 520 210" className="w-full h-auto max-h-52">
            {/* Presynaptic Knob */}
            <path d="M 60 20 L 210 20 Q 250 80, 250 140 L 60 140 Z" fill="#fdf2f8" stroke="#db2777" strokeWidth="2" />
            <text x="130" y="45" className="text-[11px] fill-pink-900 font-bold">Akson Prasinapsis</text>

            {/* Vesicles */}
            <circle cx="160" cy="70" r="10" fill="#fbcfe8" stroke="#db2777" />
            <circle cx="190" cy="95" r="10" fill="#fbcfe8" stroke="#db2777" />
            <circle cx="215" cy="120" r="8" fill="#fda4af" stroke="#e11d48" />
            <text x="95" y="85" className="text-[9px] fill-pink-800">Vesikel Sinaps (Asetilkolin)</text>

            {/* Ca2+ influx */}
            <path d="M 230 40 L 205 65" stroke="#eab308" strokeWidth="2" markerEnd="url(#arrow-yellow)" />
            <text x="210" y="35" className="text-[9px] fill-amber-700 font-bold">Ion Ca²⁺ Masuk</text>

            {/* Synaptic Cleft */}
            <rect x="255" y="20" width="30" height="160" fill="#f8fafc" stroke="#cbd5e1" strokeDasharray="3 3" />
            <text x="270" y="105" transform="rotate(90 270 105)" textAnchor="middle" className="text-[9px] fill-slate-500 font-semibold">Celah Sinapsis (20 nm)</text>

            {/* Postsynaptic Membrane */}
            <path d="M 290 20 L 460 20 L 460 170 L 290 170 Z" fill="#eff6ff" stroke="#3b82f6" strokeWidth="2" />
            <text x="360" y="45" className="text-[11px] fill-blue-900 font-bold">Membran Pascasinapsis</text>

            {/* Receptors */}
            <rect x="286" y="70" width="10" height="24" rx="3" fill="#60a5fa" />
            <rect x="286" y="115" width="10" height="24" rx="3" fill="#60a5fa" />
            <text x="310" y="85" className="text-[9px] fill-blue-800 font-medium">Reseptor Kanal Na⁺ Terbuka</text>
            <text x="310" y="130" className="text-[9px] fill-emerald-700 font-bold">Depolarisasi Impuls Baru</text>
          </svg>
        </div>
      );

    default:
      return null;
  }
};
