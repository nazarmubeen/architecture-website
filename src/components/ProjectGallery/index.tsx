import React, { useEffect, useState } from 'react';
import './ProjectGallery.css';

interface Project {
    id: number;
    title: string;
    category: string;
    year: string;
    image: string;
}

const BASE = import.meta.env.BASE_URL;
const p = (file: string) => `${BASE}assets/projects/${file}`;

const INT = 'Residential & Office Interiors';
const COM = 'Commercial Complexes';

const projects: Project[] = [
    // ── Residence ─────────────────────────────────────────────────────────────
    { id:  1, title: 'Luxury Residence',            category: 'Residence', year: '2024', image: p('project-1.jpg') },
    { id:  2, title: 'Modern Villa',                category: 'Residence', year: '2023', image: p('project-2.jpg') },
    { id:  3, title: 'Contemporary Home',           category: 'Residence', year: '2023', image: p('ext-04.jpg')    },

    // ── Apartments ────────────────────────────────────────────────────────────
    { id:  4, title: 'Luxury Apartments',           category: 'Apartments', year: '2024', image: p('hero.jpg')     },

    // ── Commercial Complexes ──────────────────────────────────────────────────
    { id:  5, title: 'Corporate Complex',           category: COM, year: '2023', image: p('project-3.jpg') },
    { id:  6, title: 'Design Avenue HQ',            category: COM, year: '2024', image: p('ext-05.jpg')    },
    { id:  7, title: 'Jewellery Store — Main Hall', category: COM, year: '2025', image: p('com-04.jpg')    },
    { id:  8, title: 'Jewellery Store — Counters',  category: COM, year: '2025', image: p('com-02.jpg')    },
    { id:  9, title: 'Jewellery Store — Display',   category: COM, year: '2025', image: p('com-03.jpg')    },
    { id: 10, title: 'Jewellery Store — Play Area', category: COM, year: '2025', image: p('com-01.jpg')    },

    // ── Residential & Office Interiors — Living Rooms ─────────────────────────
    { id: 11, title: 'Drawing Room',                category: INT, year: '2025', image: p('project-4.jpg') },
    { id: 12, title: 'Luxury Living Lounge',        category: INT, year: '2025', image: p('wa-02.jpg')     },
    { id: 13, title: 'Living Room with Staircase',  category: INT, year: '2025', image: p('wa-10.jpg')     },
    { id: 14, title: 'Living Area & Lift Lobby',    category: INT, year: '2025', image: p('wa-03.jpg')     },
    { id: 15, title: 'Sitting Room',                category: INT, year: '2025', image: p('wa-04.jpg')     },
    { id: 16, title: 'Living Room with Fireplace',  category: INT, year: '2025', image: p('wa-09.jpg')     },
    { id: 17, title: 'Aquarium Feature Wall',       category: INT, year: '2025', image: p('wa-13.jpg')     },
    { id: 18, title: 'Marble TV Wall Lounge',       category: INT, year: '2025', image: p('am-liv-01.jpg') },
    { id: 19, title: 'Botanical Mural Living Room', category: INT, year: '2025', image: p('am-liv-02.jpg') },
    { id: 20, title: 'Classic Living Room',         category: INT, year: '2025', image: p('am-liv-03.jpg') },
    // Dining
    { id: 21, title: 'Dining Room — Teal Accent',   category: INT, year: '2025', image: p('am-din-01.jpg') },
    { id: 22, title: 'Dining Room — Green Wall',    category: INT, year: '2025', image: p('am-din-02.jpg') },
    { id: 23, title: 'Dining — Botanical View',     category: INT, year: '2025', image: p('am-din-03.jpg') },
    // Kitchen
    { id: 24, title: 'Modern Kitchen',              category: INT, year: '2025', image: p('wa-11.jpg')     },
    { id: 25, title: 'Kitchen with Island',         category: INT, year: '2025', image: p('am-kit-01.jpg') },
    // Bedrooms
    { id: 26, title: 'Master Bedroom — Blue Arch',  category: INT, year: '2024', image: p('project-5.jpg') },
    { id: 27, title: 'Bedroom Suite — Beige',       category: INT, year: '2024', image: p('project-6.jpg') },
    { id: 28, title: 'Blue Headboard Bedroom',      category: INT, year: '2024', image: p('azhar-1b.jpg')  },
    { id: 29, title: 'Bedroom — Wardrobe View',     category: INT, year: '2024', image: p('azhar-1c.jpg')  },
    { id: 30, title: 'Bedroom — Full View',         category: INT, year: '2024', image: p('azhar-1d.jpg')  },
    { id: 31, title: 'Beige Suite — Side View',     category: INT, year: '2024', image: p('azhar-2b.jpg')  },
    { id: 32, title: 'Beige Suite — Wide View',     category: INT, year: '2024', image: p('azhar-2c.jpg')  },
    { id: 33, title: 'Beige Suite — Detail',        category: INT, year: '2024', image: p('azhar-2d.jpg')  },
    { id: 34, title: 'Classic Bedroom',             category: INT, year: '2025', image: p('wa-01.jpg')     },
    { id: 35, title: 'Blue Arch Bedroom',           category: INT, year: '2025', image: p('wa-06.jpg')     },
    { id: 36, title: 'Zen Bamboo Bedroom',          category: INT, year: '2025', image: p('wa-08.jpg')     },
    { id: 37, title: 'Contemporary Bedroom',        category: INT, year: '2025', image: p('wa-14.jpg')     },
    { id: 38, title: 'Master Bedroom — Wood',       category: INT, year: '2025', image: p('am-bed-01.jpg') },
    { id: 39, title: 'Bedroom — Natural Light',     category: INT, year: '2025', image: p('am-bed-02.jpg') },
    { id: 40, title: 'Bedroom — TV Panel',          category: INT, year: '2025', image: p('am-bed-03.jpg') },
    { id: 41, title: 'Bedroom — Floral Mural',      category: INT, year: '2025', image: p('am-bed-04.jpg') },
    { id: 42, title: 'Master Suite — Dressing',     category: INT, year: '2025', image: p('am-bed-05.jpg') },
    { id: 43, title: "Kids Room — Blush",           category: INT, year: '2025', image: p('am-bed-06.jpg') },
    { id: 44, title: "Kids Room — Warm Tones",      category: INT, year: '2025', image: p('am-bed-07.jpg') },
    { id: 45, title: "Kids Room — Cloud Headboard", category: INT, year: '2025', image: p('am-bed-08.jpg') },
    { id: 46, title: "Kids Room — Pink Palette",    category: INT, year: '2025', image: p('am-bed-09.jpg') },
    { id: 47, title: 'Curved Staircase',            category: INT, year: '2025', image: p('wa-12.jpg')     },
];

const CATEGORIES = ['All', 'Residence', 'Apartments', 'Commercial Complexes', 'Institutional', 'Hospitality', 'Residential & Office Interiors'];

const ProjectGallery: React.FC = () => {
    const [active, setActive] = useState('All');
    const [lightbox, setLightbox] = useState<number | null>(null);

    const filtered = active === 'All' ? projects : projects.filter(p => p.category === active);

    const closeLightbox = () => setLightbox(null);
    const prev = () => setLightbox(i => (i !== null ? (i - 1 + filtered.length) % filtered.length : null));
    const next = () => setLightbox(i => (i !== null ? (i + 1) % filtered.length : null));

    useEffect(() => {
        if (lightbox === null) return;
        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowLeft') prev();
            if (e.key === 'ArrowRight') next();
        };
        document.addEventListener('keydown', onKey);
        document.body.style.overflow = 'hidden';
        return () => {
            document.removeEventListener('keydown', onKey);
            document.body.style.overflow = '';
        };
    }, [lightbox, filtered.length]);

    return (
        <div className="project-gallery-wrapper">
            {/* Filters */}
            <div className="gallery-filters">
                {CATEGORIES.map(cat => (
                    <button
                        key={cat}
                        className={`filter-btn ${active === cat ? 'active' : ''}`}
                        onClick={() => setActive(cat)}
                    >
                        {cat}
                        <span className="filter-count">
                            {cat === 'All' ? projects.length : projects.filter(p => p.category === cat).length}
                        </span>
                    </button>
                ))}
            </div>

            {/* Grid */}
            <div className="project-gallery grid grid-3">
                {filtered.map((project, idx) => (
                    <div key={project.id} className="project-card glass-card" onClick={() => setLightbox(idx)}>
                        <div className="project-image">
                            <img src={project.image} alt={project.title} loading="lazy" />
                            <div className="project-image-hover">
                                <span className="zoom-icon">⤢</span>
                            </div>
                        </div>
                        <div className="project-info">
                            <span className="project-category">{project.category}</span>
                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-year">{project.year}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Lightbox */}
            {lightbox !== null && (
                <div className="lightbox" onClick={closeLightbox}>
                    <button className="lightbox-close" onClick={closeLightbox}>✕</button>
                    <button className="lightbox-nav lightbox-prev" onClick={e => { e.stopPropagation(); prev(); }}>‹</button>
                    <div className="lightbox-content" onClick={e => e.stopPropagation()}>
                        <img
                            src={filtered[lightbox].image}
                            alt={filtered[lightbox].title}
                            className="lightbox-img"
                        />
                        <div className="lightbox-caption">
                            <span className="project-category">{filtered[lightbox].category}</span>
                            <h3>{filtered[lightbox].title}</h3>
                            <p>{filtered[lightbox].year} · {lightbox + 1} / {filtered.length}</p>
                        </div>
                    </div>
                    <button className="lightbox-nav lightbox-next" onClick={e => { e.stopPropagation(); next(); }}>›</button>
                </div>
            )}
        </div>
    );
};

export default ProjectGallery;
