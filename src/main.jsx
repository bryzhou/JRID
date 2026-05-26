import React, { useEffect, useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';
import logoWhite from './assets/Ativo 1@2x.png';
import logoBlack from './assets/Ativo 4@2x.png';

const navItems = ['Home', 'Services', 'Equipment', 'About', 'Project Gallery', 'Contact'];

const images = {
  // Replace these placeholder image URLs with final files such as /images/hero-industrial.jpg.
  homeHero:
    'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&fm=jpg&q=78&w=2400',
  aboutHero:
    'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&fm=jpg&q=78&w=2400',
  servicesHero:
    'https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&fm=jpg&q=78&w=2400',
  equipmentHero:
    'https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&fm=jpg&q=78&w=2400',
  galleryHero:
    'https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&fm=jpg&q=78&w=2400',
  contactHero:
    'https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&fm=jpg&q=78&w=2400',
  engineering:
    'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&fm=jpg&q=72&w=1200',
  assembly:
    'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&fm=jpg&q=72&w=1200',
  rigging:
    'https://images.unsplash.com/photo-1581093458791-9d15482442f6?auto=format&fit=crop&fm=jpg&q=72&w=1200',
  maintenance:
    'https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&fm=jpg&q=72&w=1200',
  automation:
    'https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&fm=jpg&q=72&w=1200',
  fabrication:
    'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&fm=jpg&q=72&w=1200',
  equipment:
    'https://images.unsplash.com/photo-1581092919535-7146ff1a590b?auto=format&fit=crop&fm=jpg&q=72&w=1200',
  plant:
    'https://images.unsplash.com/photo-1581091215367-59ab6e4763b4?auto=format&fit=crop&fm=jpg&q=72&w=1200',
};

const coreCapabilities = [
  { title: 'Electromechanical Assembly', text: '', image: images.assembly },
  { title: 'Rigging and Relocations', text: '', image: images.rigging },
  { title: 'Industrial Maintenance Services', text: '', image: images.maintenance },
  { title: 'Engineering and Industrial Design', text: '', image: images.engineering },
];

const whyChoose = [
  ['30+ Years of Industrial Experience', 'Hands-on credibility through founder Jose Robledo and international manufacturing work.'],
  ['International Project Experience', 'Project exposure across Spain, Italy, the United States, Mexico, Brazil, and broader markets.'],
  ['Turnkey Project Support', 'Disciplined coordination across design, assembly, integration, commissioning, and closeout.'],
  ['Practical Engineering Knowledge', 'Solutions grounded in real production environments, not theory alone.'],
  ['Manufacturing & Commissioning Expertise', 'Field-tested support for systems that need to operate safely and reliably.'],
  ['U.S., Mexico & Brazil Presence', 'Based in the United States with offices and operational presence in Mexico and Brazil.'],
].map(([title, text]) => ({ title, text }));

const detailedServices = [
  { title: 'Predictive Maintenance', image: images.maintenance, text: '' },
  { title: 'Industrial and Electrical Services', image: images.engineering, text: '' },
  { title: 'Industrial Mechanical Services', image: images.assembly, text: '' },
  { title: 'Industrial Metal Fabrication (in-Plant) and out', image: images.fabrication, text: '' },
  { title: 'Full Industrial Assembly', image: images.plant, text: '' },
  { title: 'Full mechanical/electrical integration (all mfg.)', image: images.automation, text: '' },
  { title: 'Machine Guarding Fabrication (OSHA Complaint)', image: images.fabrication, text: '' },
  { title: 'Industrial Rigging and Relocation services (Nationwide)', image: images.rigging, text: '' },
];

const equipmentCards = [
  ['End-of-Line Packaging', 'Packaging systems for final-stage handling, wrapping, palletizing, and shipment preparation.', images.equipment],
  ['Complete Packaging Lines', 'Integrated line support from production output to packed, shipment-ready product.', images.plant],
  ['Bulk Material Handling', 'Conveying, storage, and movement solutions for demanding plant environments.', images.automation],
  ['Industrial Automation', 'Automation support that improves throughput, repeatability, and operator confidence.', images.engineering],
  ['Dust Collection Systems', 'Collection systems designed to support cleaner, safer production spaces.', images.maintenance],
  ['Fume Filtering Systems', 'Industrial filtering solutions for processes where air quality and safety matter.', images.fabrication],
  ['Water Treatment Plants', 'Plant systems and support for industrial process water treatment requirements.', images.plant],
  ['Air Filtering Products & Parts', 'Replacement products, parts, and equipment for reliable filtration performance.', images.equipment],
  ['Pumps & Mixing', 'Pump and mixing solutions for industrial fluids, materials, and process needs.', images.assembly],
  ['Ceramic Tile Equipment', 'Equipment support informed by ceramics manufacturing and plant experience.', images.rigging],
  ['Cutting Equipment', 'Cutting systems and equipment for production, fabrication, and plant operations.', images.fabrication],
  ['Combustion Engineering', 'Combustion system support for reliability, control, and industrial performance.', images.engineering],
].map(([title, text, image]) => ({ title, text, image }));

const projects = [
  {
    region: 'United States',
    title: 'Manufacturing System Integration',
    text: 'Production system support for equipment integration, layout coordination, and commissioning readiness.',
    image: images.plant,
    tags: ['Manufacturing Systems', 'Equipment Integration', 'Commissioning'],
  },
  {
    region: 'Mexico',
    title: 'Plant Assembly & Field Support',
    text: 'Industrial assembly and project support for manufacturing operations requiring coordinated execution.',
    image: images.assembly,
    tags: ['Turnkey Plant Support', 'Assembly', 'Field Support'],
  },
  {
    region: 'Brazil',
    title: 'Process Solutions Support',
    text: 'Manufacturing process guidance and equipment planning for international production environments.',
    image: images.engineering,
    tags: ['Process Engineering', 'Manufacturing Systems'],
  },
  {
    region: 'Spain',
    title: 'Industrial Facility Development',
    text: 'Project experience supporting full-scale industrial systems from design direction through operational readiness.',
    image: images.equipment,
    tags: ['Turnkey Plant Support', 'Commissioning'],
  },
  {
    region: 'Italy',
    title: 'Ceramics Manufacturing Systems',
    text: 'Manufacturing and equipment experience connected to ceramics production and industrial facility operations.',
    image: images.automation,
    tags: ['Manufacturing Systems', 'Equipment Integration'],
  },
  {
    region: 'Additional International Projects',
    title: 'International Plant Support',
    text: 'Project support across multiple regions for manufacturers seeking experienced industrial execution.',
    image: images.rigging,
    tags: ['International Experience', 'Project Support'],
  },
];

const regions = ['All', 'United States', 'Mexico', 'Brazil', 'Spain', 'Italy', 'Additional International Projects'];

const locations = [
  {
    title: 'United States',
    // Replace placeholder contact details when final office information is available.
    company: 'JMD, LLC',
    address: '1259 Route 113 PA, Suite 309\nPerkasie, PA 18944\nUSA',
    phone: '+1 (267) 446-4833',
    website: 'www.jridesign.com',
    email: 'info@jridesign.com',
  },
  {
    title: 'Mexico',
    company: 'MSM, SA de CV',
    address: '1230 #53 Calle\nSan Nicolás de los Garza, NL\nMexico',
    phone: '+52 (334) 614-8312',
    website: 'www.msmty.com.mx',
    email: 'info@msmty.com',
  },
  {
    title: 'Brazil',
    address: 'Address to be updated',
    phone: 'Phone to be updated',
    email: 'Email to be updated',
  },
];

const serviceAreas = [
  'United States',
  'Mexico',
  'Brazil',
  'Spain',
  'Italy',
];

function Logo({ variant = 'white' }) {
  const src = variant === 'black' ? logoBlack : logoWhite;
  return (
    <div className="logo">
      <img className="logo-image" src={src} alt="JRID" />
    </div>
  );
}

function Header({ activePage, setActivePage }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = (page) => {
    setActivePage(page);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="site-header">
      <button className="brand-button" onClick={() => navigate('Home')} aria-label="Go to JRID home">
        <Logo />
      </button>

      <nav className={`site-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Primary navigation">
        {navItems.map((item) => (
          <button
            key={item}
            className={`${activePage === item ? 'is-active' : ''} ${item === 'Contact' ? 'nav-contact-button' : ''}`.trim()}
            onClick={() => navigate(item)}
          >
            {item}
          </button>
        ))}
      </nav>

      <button
        className="menu-toggle"
        onClick={() => setMenuOpen((open) => !open)}
        aria-label="Toggle navigation"
        aria-expanded={menuOpen}
      >
        <span />
        <span />
      </button>
    </header>
  );
}

function Button({ children, page, setActivePage, variant = 'primary' }) {
  return (
    <button className={`button button--${variant}`} onClick={() => setActivePage(page)}>
      {children}
    </button>
  );
}

function HeroSection({ eyebrow, title, text, image, actions }) {
  return (
    <section className="hero-section" style={{ '--hero-image': `url("${image}")` }}>
      <div className="hero-section__content">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        {typeof title === 'string' || typeof title === 'number' ? (
          <h1>{title}</h1>
        ) : (
          <div className="hero-logo">{title}</div>
        )}
        <p>{text}</p>
        {actions && <div className="button-row">{actions}</div>}
      </div>
    </section>
  );
}

function SectionHeader({ eyebrow, title, text, align = 'left' }) {
  return (
    <div className={`section-header section-header--${align}`}>
      {eyebrow && <p className="eyebrow eyebrow--dark">{eyebrow}</p>}
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}

function CTASection({ setActivePage, title, text, primaryPage = 'Contact', secondaryPage = 'Services' }) {
  return (
    <section className="section cta-section">
      <div className="section-inner cta-panel">
        <div>
          <p className="eyebrow">Start a Project</p>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
        <div className="button-row">
          <Button page={primaryPage} setActivePage={setActivePage}>Contact JRID</Button>
          <Button page={secondaryPage} setActivePage={setActivePage} variant="secondary">
            Explore Services
          </Button>
        </div>
      </div>
    </section>
  );
}

function TextCard({ title, text, image }) {
  return (
    <article className="text-card">
      {image && <img className="text-card__image" src={image} alt="" loading="lazy" />}
      <div className="text-card__body">
        <div className="text-card__bar" />
        <h3>{title}</h3>
        {text ? <p>{text}</p> : null}
      </div>
    </article>
  );
}

function ImageCard({ title, text, image, tags = [] }) {
  return (
    <article className="image-card">
      <img src={image} alt="" loading="lazy" />
      <div className="image-card__body">
        <h3>{title}</h3>
        {text ? <p>{text}</p> : null}
        {tags.length > 0 && (
          <div className="tag-list">
            {tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}

function ProjectCard({ title, region, text, image, tags = [] }) {
  return (
    <article className="image-card project-card">
      <img src={image} alt="" loading="lazy" />
      <div className="image-card__body">
        <p className="card-meta">{region}</p>
        <h3>{title}</h3>
        <p>{text}</p>
        <div className="tag-list">
          {tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>
    </article>
  );
}

function HomePage({ setActivePage }) {
  return (
    <main>
      <HeroSection
        eyebrow="Industrial Design / Engineering / Manufacturing Systems"
        title={<Logo variant="white" />}
        text="Industrial design, engineering, manufacturing systems, and turnkey project support for operations that need dependable execution from planning through commissioning."
        image={images.homeHero}
        actions={
          <>
            <Button page="Contact" setActivePage={setActivePage}>Contact JRID</Button>
            <Button page="Services" setActivePage={setActivePage} variant="secondary">Explore Services</Button>
          </>
        }
      />

      <section className="section section--diagonal">
        <div className="section-inner">
          <SectionHeader
            eyebrow="Core Services"
            title="Industrial capabilities built for real production environments."
            text="JRID supports manufacturers with disciplined design, systems, integration, and project execution."
          />
          <div className="card-grid card-grid--four">
            {coreCapabilities.map((item) => <TextCard key={item.title} {...item} />)}
          </div>
          <div className="section-action">
            <Button page="Services" setActivePage={setActivePage}>View Services</Button>
          </div>
        </div>
      </section>

      <section className="section split-section">
        <div className="section-inner split-layout">
          <div>
            <p className="eyebrow eyebrow--dark">Who We Are</p>
            <h2>Industrial project support with international manufacturing experience.</h2>
          </div>
          <div className="rich-text">
            <p>
              JRID provides industrial design, engineering, manufacturing systems, and turnkey
              project support for clients across the United States and internationally. The company
              helps manufacturers plan, integrate, assemble, and commission dependable industrial
              systems built for long-term performance.
            </p>
            <Button page="About" setActivePage={setActivePage}>About JRID</Button>
          </div>
        </div>
      </section>

      <section className="section section--charcoal section--diagonal">
        <div className="section-inner">
          <SectionHeader
            eyebrow="Why Choose JRID"
            title="Credibility grounded in field-tested industrial execution."
            text="JRID brings practical engineering knowledge, global project exposure, and disciplined support across manufacturing environments."
          />
          <div className="card-grid card-grid--three">
            {whyChoose.map((item) => <TextCard key={item.title} {...item} />)}
          </div>
        </div>
      </section>

      <section className="section reliability-section">
        <div className="section-inner reliability-panel">
          <div>
            <p className="eyebrow">Safety & Reliability</p>
            <h2>Serious industrial work requires safe execution and dependable systems.</h2>
          </div>
          <p>
            JRID approaches projects with careful planning, field-tested processes, and practical
            attention to long-term performance. From equipment movement to system commissioning,
            the priority is safe, reliable execution that supports production goals.
          </p>
        </div>
      </section>

      <section className="section section--diagonal">
        <div className="section-inner split-layout">
          <div>
            <p className="eyebrow eyebrow--dark">Our Mission</p>
            <h2>JRID delivers a true competitive advantage through safe, efficient, and reliable execution.</h2>
          </div>
          <div className="rich-text">
            <p>
              We prioritize safety at every level while meeting project timelines and reducing unnecessary costs. Our focus is simple: prompt delivery that enhances productivity—without compromising quality.
            </p>
            <Button page="About" setActivePage={setActivePage}>Learn More</Button>
          </div>
        </div>
      </section>

      <CTASection
        setActivePage={setActivePage}
        title="Ready to discuss an industrial project?"
        text="Talk with JRID about services, equipment, manufacturing systems, or turnkey project support."
      />
    </main>
  );
}

function AboutPage({ setActivePage }) {
  return (
    <main>
      <HeroSection
        eyebrow="About"
        title="About JRID"
        text="JRID provides industrial design, engineering, and turnkey project support for manufacturing operations in the United States and internationally."
        image={images.aboutHero}
      />
      <section className="section">
        <div className="section-inner split-layout">
          <SectionHeader eyebrow="Company Overview" title="Built around dependable industrial execution." />
          <div className="rich-text">
            <p>
              JRID provides industrial design, engineering, and turnkey project support for manufacturing operations in the United States and internationally.
            </p>
            <p>
              Founded in 2022, JRID operates with headquarters and offices in the United States, Mexico, and Brazil, supporting companies that need dependable industrial systems, efficient manufacturing processes, and experienced guidance. The company works across industries and regions, helping manufacturers transform complex operational needs into practical, well-built solutions.
            </p>
            <p>
              JRID is grounded in more than thirty years of hands-on industrial experience. Founder Jose Robledo has designed, assembled, and commissioned manufacturing systems and full-scale facilities across the United States, Mexico, Brazil, Spain, and Italy. His background spans plant development, process engineering, equipment integration, and real-world manufacturing execution.
            </p>
            <p>
              This foundation gives JRID a clear advantage: the company understands not only how industrial systems are designed, but how they are built, operated, and improved in the field.
            </p>
            <p>
              Today, JRID combines technical expertise, global project experience, and practical execution to help manufacturers create reliable systems built for long-term performance.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--muted section--diagonal">
        <div className="section-inner">
          <SectionHeader
            eyebrow="Industrial Background"
            title="Experience across facilities, systems, and regions."
            text="JRID is grounded in more than thirty years of hands-on industrial experience through founder Jose Robledo."
          />
          <div className="stat-grid">
            <TextCard title="Established in 2026" text="Created to support manufacturers with practical industrial project expertise." />
            <TextCard title="U.S., Mexico & Brazil" text="Based in the United States with offices and operational presence in Mexico and Brazil." />
            <TextCard title="30+ Years of Experience" text="Backed by founder Jose Robledo's design, assembly, and commissioning background." />
            <TextCard title="International Exposure" text="Project experience includes Spain, Italy, the United States, Mexico, and Brazil." />
          </div>
        </div>
      </section>

      <CTASection
        setActivePage={setActivePage}
        title="Work with an industrial partner built for execution."
        text="Contact JRID to discuss manufacturing systems, equipment, services, or project support."
        secondaryPage="Services"
      />
    </main>
  );
}

function ServicesPage({ setActivePage }) {
  return (
    <main>
      <HeroSection
        eyebrow="Services"
        title="Services"
        text="Industrial design, engineering, manufacturing systems, and turnkey project capabilities for demanding operations."
        image={images.servicesHero}
      />

      <section className="section">
        <div className="section-inner">
          <SectionHeader
            eyebrow="Core Capabilities"
            title="A clear summary of JRID's industrial support."
            text="JRID works across the planning, systems, assembly, integration, and commissioning stages of industrial projects."
          />
          <div className="card-grid card-grid--four">
            {coreCapabilities.map((item) => <TextCard key={item.title} {...item} />)}
          </div>
        </div>
      </section>

      <section className="section section--muted section--diagonal">
        <div className="section-inner">
          <SectionHeader
            eyebrow="Detailed Services"
            title="Field-ready support for manufacturing operations."
          />
          <div className="image-card-grid">
            {detailedServices.map((service) => <ImageCard key={service.title} {...service} />)}
          </div>
        </div>
      </section>

      <section className="section process-section">
        <div className="section-inner">
          <SectionHeader
            eyebrow="Approach"
            title="A disciplined path from discovery to project completion."
          />
          <ol className="process-list">
            <li><span>01</span><strong>Consultation / Discovery</strong><p>Understand project goals, constraints, production needs, and operating conditions.</p></li>
            <li><span>02</span><strong>Design and Planning</strong><p>Develop practical layouts, scopes, schedules, equipment plans, and execution strategy.</p></li>
            <li><span>03</span><strong>Engineering and Assembly Support</strong><p>Coordinate technical support, fabrication, integration, assembly, and field execution.</p></li>
            <li><span>04</span><strong>Commissioning and Completion</strong><p>Support installation readiness, startup, performance checks, and project closeout.</p></li>
          </ol>
        </div>
      </section>

      <CTASection
        setActivePage={setActivePage}
        title="Need support for an industrial system or project?"
        text="Contact JRID to discuss requirements, timelines, and practical next steps."
      />
    </main>
  );
}

function EquipmentPage({ setActivePage }) {
  return (
    <main>
      <HeroSection
        eyebrow="Equipment"
        title="Equipment"
        text="Industrial equipment, systems, and integration support for manufacturing environments."
        image={images.equipmentHero}
      />

      <section className="section section--diagonal">
        <div className="section-inner split-layout">
          <SectionHeader
            eyebrow="Equipment Overview"
            title="Systems and categories used in active manufacturing environments."
          />
          <div className="rich-text">
            <p>
              JRID works with industrial equipment and systems that support production, packaging,
              material handling, air quality, process performance, and plant reliability.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--muted">
        <div className="section-inner">
          <div className="image-card-grid">
            {equipmentCards.map((item) => <ImageCard key={item.title} {...item} />)}
          </div>
        </div>
      </section>

      <CTASection
        setActivePage={setActivePage}
        title="Looking for equipment or integration support?"
        text="Contact JRID to discuss equipment needs, project scope, and service support."
        secondaryPage="Services"
      />
    </main>
  );
}

function ProjectGalleryPage({ setActivePage }) {
  const [activeRegion, setActiveRegion] = useState('All');
  const groupedProjects = useMemo(
    () => regions
      .filter((region) => region !== 'All')
      .map((region) => ({
        region,
        projects: projects.filter((project) => project.region === region),
      }))
      .filter((group) => activeRegion === 'All' || group.region === activeRegion),
    [activeRegion],
  );

  return (
    <main>
      <HeroSection
        eyebrow="Project Experience"
        title="Project Gallery"
        text="Examples of industrial project experience across regions, manufacturing environments, and system types."
        image={images.galleryHero}
      />

      <section className="section">
        <div className="section-inner">
          <SectionHeader
            eyebrow="Gallery"
            title="Industrial support across countries and regions."
            text="JRID has supported manufacturing and industrial projects across the United States, Mexico, Brazil, Spain, Italy, and additional international operations."
          />
          <div className="filter-bar" aria-label="Filter projects by region">
            {regions.map((region) => (
              <button
                key={region}
                className={activeRegion === region ? 'is-active' : ''}
                onClick={() => setActiveRegion(region)}
              >
                {region}
              </button>
            ))}
          </div>
          <div className="project-groups">
            {groupedProjects.map((group) => (
              <section className="project-group" key={group.region} aria-label={`${group.region} projects`}>
                <h3>{group.region}</h3>
                <div className="project-grid">
                  {group.projects.map((project) => (
                    <ProjectCard key={`${project.region}-${project.title}`} {...project} />
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        setActivePage={setActivePage}
        title="Have a project that needs experienced industrial support?"
        text="Talk with JRID about your manufacturing environment, equipment needs, and execution goals."
      />
    </main>
  );
}

function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    region: '',
    projectType: '',
    message: '',
  });

  const updateField = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const submit = (event) => {
    event.preventDefault();
    alert('Thank you. This form is ready for future backend integration.');
  };

  return (
    <main>
      <HeroSection
        eyebrow="Contact"
        title="Contact JRID"
        text="Reach out about industrial systems, services, equipment, or turnkey project support."
        image={images.contactHero}
      />

      <section className="section">
        <div className="section-inner contact-layout">
          <div>
            <SectionHeader
              eyebrow="Project Inquiry"
              title="Tell JRID what you are planning."
              text="Share the basics and the JRID team can review your service, equipment, or project support needs."
            />
          </div>
          <form className="contact-form" onSubmit={submit}>
            <label>Name<input name="name" value={form.name} onChange={updateField} required /></label>
            <label>Company<input name="company" value={form.company} onChange={updateField} /></label>
            <label>Email<input name="email" type="email" value={form.email} onChange={updateField} required /></label>
            <label>Phone<input name="phone" type="tel" value={form.phone} onChange={updateField} /></label>
            <label>Country / Region<input name="region" value={form.region} onChange={updateField} /></label>
            <label>
              Project Type
              <select name="projectType" value={form.projectType} onChange={updateField}>
                <option value="">Select a project type</option>
                <option>Industrial Design & Engineering</option>
                <option>Manufacturing Systems</option>
                <option>Equipment Integration</option>
                <option>Turnkey Project Support</option>
                <option>Maintenance / Field Support</option>
              </select>
            </label>
            <label className="form-full">Message<textarea name="message" value={form.message} onChange={updateField} rows="6" required /></label>
            <button className="button button--primary form-full" type="submit">Submit Inquiry</button>
          </form>
        </div>
      </section>

      <section className="section section--muted section--diagonal">
        <div className="section-inner">
          <SectionHeader eyebrow="Locations" title="Office and operational presence." />
          <div className="card-grid card-grid--three">
            {locations.map((location) => {
              const tel = location.phone ? location.phone.replace(/[^+0-9]/g, '') : null;
              const hrefWebsite = location.website
                ? location.website.startsWith('http')
                  ? location.website
                  : `https://${location.website}`
                : null;
              return (
                <article className="location-card" key={location.title}>
                  <h3>{location.title}</h3>
                  {location.company && <p className="location-company">{location.company}</p>}
                  {location.address && (
                    <p className="location-address" style={{ whiteSpace: 'pre-line' }}>{location.address}</p>
                  )}
                  {location.phone && tel && (
                    <p><a href={`tel:${tel}`}>{location.phone}</a></p>
                  )}
                  {hrefWebsite && (
                    <p><a href={hrefWebsite} target="_blank" rel="noopener noreferrer">{location.website}</a></p>
                  )}
                  {location.email && (
                    <p><a href={`mailto:${location.email}`}>{location.email}</a></p>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-inner split-layout">
          <SectionHeader
            eyebrow="Areas We Service"
            title="Supporting manufacturers across the United States and internationally."
          />
          <ul className="area-list">
            {serviceAreas.map((area) => <li key={area}>{area}</li>)}
          </ul>
        </div>
      </section>
    </main>
  );
}

function Footer({ setActivePage }) {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <Logo />
        <nav className="footer-links" aria-label="Footer navigation">
          {navItems.map((item) => (
            <button key={item} onClick={() => setActivePage(item)}>{item}</button>
          ))}
        </nav>
        <p>Industrial design, engineering, manufacturing systems, and turnkey project support.</p>
      </div>
    </footer>
  );
}

function App() {
  const [activePage, setActivePage] = useState('Home');

  useEffect(() => {
    document.title = activePage === 'Home' ? 'JRID Industrial Services' : `${activePage} | JRID`;
  }, [activePage]);

  return (
    <>
      <Header activePage={activePage} setActivePage={setActivePage} />
      {activePage === 'Home' && <HomePage setActivePage={setActivePage} />}
      {activePage === 'About' && <AboutPage setActivePage={setActivePage} />}
      {activePage === 'Services' && <ServicesPage setActivePage={setActivePage} />}
      {activePage === 'Equipment' && <EquipmentPage setActivePage={setActivePage} />}
      {activePage === 'Project Gallery' && <ProjectGalleryPage setActivePage={setActivePage} />}
      {activePage === 'Contact' && <ContactPage />}
      <Footer setActivePage={setActivePage} />
    </>
  );
}

createRoot(document.getElementById('root')).render(<App />);
