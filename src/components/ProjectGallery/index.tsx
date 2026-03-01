import React, { useEffect, useState } from 'react';
import './ProjectGallery.css';

interface Project {
    id: number;
    title: string;
    category: string;
    year: string;
    image: string;
    featured?: boolean;
}

const BASE = import.meta.env.BASE_URL;
const p = (file: string) => `${BASE}assets/projects/${file}`;

const INT = 'Residential & Office Interiors';
const COM = 'Commercial Complexes';

const projects: Project[] = [
    // ── Residence ─────────────────────────────────────────────────────────────
    { id:  1, title: 'Modern Villa',                category: 'Residence', year: '2024', image: p('project-1.jpg'), featured: true  },
    { id:  2, title: 'Contemporary Residence',      category: 'Residence', year: '2024', image: p('res-new-01.jpg'), featured: true },
    { id:  3, title: 'Duplex Exterior',             category: 'Residence', year: '2025', image: p('res-new-02.jpg'), featured: true },
    { id:  4, title: 'Classic Residence',           category: 'Residence', year: '2023', image: p('project-2.jpg') },
    { id:  5, title: 'Contemporary Home',           category: 'Residence', year: '2023', image: p('ext-04.jpg')    },
    { id:  6, title: 'Corner House',                category: 'Residence', year: '2024', image: p('ext-05.jpg')    },
    { id:  7, title: 'Urban Residence',             category: 'Residence', year: '2024', image: p('project-3.jpg') },

    // ── Apartments ────────────────────────────────────────────────────────────
    { id:  8, title: 'Classical Apartment Block',   category: 'Apartments', year: '2025', image: p('apt-new-01.jpg'), featured: true },
    { id:  9, title: 'Luxury Apartment Building',   category: 'Apartments', year: '2025', image: p('apt-new-02.jpg'), featured: true },
    { id: 10, title: 'Signature Apartments',        category: 'Apartments', year: '2024', image: p('hero.jpg')      },

    // ── Commercial Complexes ──────────────────────────────────────────────────
    { id: 11, title: 'Commercial Complex',          category: COM, year: '2025', image: p('com-new-01.jpg'), featured: true },
    { id: 12, title: 'Jewellery Store — Entrance',  category: COM, year: '2025', image: p('com-04.jpg'),    featured: true },
    { id: 13, title: 'Jewellery Store — Counters',  category: COM, year: '2025', image: p('com-02.jpg')    },
    { id: 14, title: 'Jewellery Store — Display',   category: COM, year: '2025', image: p('com-03.jpg')    },
    { id: 15, title: 'Jewellery Store — Hall',      category: COM, year: '2025', image: p('com-01.jpg')    },

    // ── Residential & Office Interiors — Living / Lounge ──────────────────────
    { id: 16, title: 'Biophilic Living Room',       category: INT, year: '2025', image: p('nd-liv-01.jpg'),  featured: true },
    { id: 17, title: 'Arch Mirror Lounge',          category: INT, year: '2025', image: p('nd-liv-02.jpg') },
    { id: 18, title: 'Living Room — Mauve',         category: INT, year: '2025', image: p('nd-liv-03.jpg') },
    { id: 19, title: 'Staircase & Aquarium Wall',   category: INT, year: '2025', image: p('nd-stair-01.jpg') },
    { id: 20, title: 'Apartment Lobby',             category: INT, year: '2025', image: p('la-lob-01.jpg'),  featured: true },
    { id: 21, title: 'Grand Staircase',             category: INT, year: '2025', image: p('la-stair-01.jpg'), featured: true },
    { id: 22, title: 'Luxury Living Lounge',        category: INT, year: '2025', image: p('wa-02.jpg'),      featured: true },
    { id: 23, title: 'Aquarium Feature Lounge',     category: INT, year: '2025', image: p('wa-13.jpg') },
    { id: 24, title: 'Marble TV Wall Lounge',       category: INT, year: '2025', image: p('am-liv-01.jpg'),  featured: true },
    { id: 25, title: 'Botanical Mural Living',      category: INT, year: '2025', image: p('am-liv-02.jpg') },
    { id: 26, title: 'Classic Drawing Room',        category: INT, year: '2025', image: p('am-draw-01.jpg') },
    { id: 27, title: 'Living Room',                 category: INT, year: '2024', image: p('project-4.jpg') },
    { id: 28, title: 'Natural Wood Living',         category: INT, year: '2025', image: p('np-liv-01.jpg') },
    { id: 29, title: 'Living Room with Staircase',  category: INT, year: '2025', image: p('wa-10.jpg') },
    { id: 30, title: 'Living Area & Lift Lobby',    category: INT, year: '2025', image: p('wa-03.jpg') },
    { id: 31, title: 'Living Room with Fireplace',  category: INT, year: '2025', image: p('wa-09.jpg') },
    { id: 32, title: 'Classic Living Room',         category: INT, year: '2025', image: p('am-liv-03.jpg') },

    // Dining
    { id: 33, title: 'Luxury Dining Room',          category: INT, year: '2025', image: p('la-din-01.jpg'),  featured: true },
    { id: 34, title: 'Arch Dining Room',            category: INT, year: '2025', image: p('la-din-02.jpg') },
    { id: 35, title: 'Dining — Teal Accent',        category: INT, year: '2025', image: p('am-din-01.jpg') },
    { id: 36, title: 'Dining — Botanical View',     category: INT, year: '2025', image: p('am-din-02.jpg') },
    { id: 37, title: 'Dining — Green Wall',         category: INT, year: '2025', image: p('am-din-03.jpg') },
    { id: 38, title: 'Dining with Mirror',          category: INT, year: '2025', image: p('am-din-04.jpg') },

    // Kitchens
    { id: 39, title: 'Modern Kitchen',              category: INT, year: '2025', image: p('wa-11.jpg') },
    { id: 40, title: 'Kitchen with Island',         category: INT, year: '2025', image: p('am-kit-01.jpg') },

    // Bedrooms
    { id: 41, title: 'Master Bedroom — Blue Arch',  category: INT, year: '2025', image: p('nd-bed-02.jpg'),  featured: true },
    { id: 42, title: 'Master Bedroom — Beige',      category: INT, year: '2025', image: p('nd-bed-01.jpg') },
    { id: 43, title: 'Minimalist Master Bedroom',   category: INT, year: '2025', image: p('la-bed-01.jpg'),  featured: true },
    { id: 44, title: 'Girl\'s Bedroom',             category: INT, year: '2025', image: p('la-bed-02.jpg') },
    { id: 45, title: 'Gaming Room',                 category: INT, year: '2025', image: p('la-game-01.jpg'), featured: true },
    { id: 46, title: 'Kids\' Gaming Bedroom',       category: INT, year: '2025', image: p('la-bed-03.jpg') },
    { id: 47, title: 'Study Bedroom',               category: INT, year: '2025', image: p('la-bed-04.jpg') },
    { id: 48, title: 'Blue Headboard Bedroom',      category: INT, year: '2024', image: p('azhar-1b.jpg') },
    { id: 49, title: 'Bedroom — Wardrobe View',     category: INT, year: '2024', image: p('azhar-1c.jpg') },
    { id: 50, title: 'Bedroom — Full View',         category: INT, year: '2024', image: p('azhar-1d.jpg') },
    { id: 51, title: 'Beige Suite — Side View',     category: INT, year: '2024', image: p('azhar-2b.jpg') },
    { id: 52, title: 'Beige Suite — Wide View',     category: INT, year: '2024', image: p('azhar-2c.jpg') },
    { id: 53, title: 'Beige Suite — Detail',        category: INT, year: '2024', image: p('azhar-2d.jpg') },
    { id: 54, title: 'Classic Bedroom',             category: INT, year: '2025', image: p('wa-01.jpg') },
    { id: 55, title: 'Blue Arch Bedroom',           category: INT, year: '2025', image: p('wa-06.jpg') },
    { id: 56, title: 'Zen Bamboo Bedroom',          category: INT, year: '2025', image: p('wa-08.jpg') },
    { id: 57, title: 'Contemporary Bedroom',        category: INT, year: '2025', image: p('wa-14.jpg') },
    { id: 58, title: 'Master Bedroom — Wood',       category: INT, year: '2025', image: p('am-bed-01.jpg') },
    { id: 59, title: 'Bedroom — Natural Light',     category: INT, year: '2025', image: p('am-bed-02.jpg') },
    { id: 60, title: 'Bedroom — TV Panel',          category: INT, year: '2025', image: p('am-bed-03.jpg') },
    { id: 61, title: 'Bedroom — Floral Mural',      category: INT, year: '2025', image: p('am-bed-04.jpg') },
    { id: 62, title: 'Master Suite — Dressing',     category: INT, year: '2025', image: p('am-bed-05.jpg') },
    { id: 63, title: "Kids Room — Blush",           category: INT, year: '2025', image: p('am-bed-06.jpg') },
    { id: 64, title: "Kids Room — Warm Tones",      category: INT, year: '2025', image: p('am-bed-07.jpg') },
    { id: 65, title: "Kids Room — Cloud Headboard", category: INT, year: '2025', image: p('am-bed-08.jpg') },
    { id: 66, title: "Kids Room — Pink Palette",    category: INT, year: '2025', image: p('am-bed-09.jpg') },
    { id: 67, title: 'Bedroom — Classic Style',     category: INT, year: '2025', image: p('am-bed-10.jpg') },
    { id: 68, title: 'Curved Staircase',            category: INT, year: '2025', image: p('wa-12.jpg') },
    { id: 69, title: 'Sitting Room',                category: INT, year: '2025', image: p('wa-04.jpg') },
];

const CATEGORIES = ['All', 'Residence', 'Apartments', COM, INT];

const ProjectGallery: React.FC = () => {
    const [active, setActive] = useState('All');
    const [lightbox, setLightbox] = useState<number | null>(null);

    const filtered = active === 'All'
        ? projects.filter(p => p.featured)
        : projects.filter(p => p.category === active);

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

    const getCount = (cat: string) => {
        if (cat === 'All') return projects.filter(p => p.featured).length;
        return projects.filter(p => p.category === cat).length;
    };

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
                        <span className="filter-count">{getCount(cat)}</span>
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
