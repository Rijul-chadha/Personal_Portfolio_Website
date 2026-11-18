import { useEffect, useRef, useState } from 'react';
import { profile, work, projects, earlier, process, education, skills } from './data';
import { GitHubIcon, LinkedInIcon, MailIcon, SunIcon, MoonIcon } from './icons';

const NAV = [
  { id: 'work', label: 'work' },
  { id: 'projects', label: 'projects' },
  { id: 'principles', label: 'process' },
  { id: 'education', label: 'education' },
];
// sections without their own nav link highlight the closest one
const SECTION_TO_NAV = { work: 'work', projects: 'projects', earlier: 'projects', principles: 'principles', education: 'education', toolkit: 'education' };

function useTheme() {
  const [theme, setTheme] = useState(() => document.documentElement.getAttribute('data-theme') || 'light');
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try { localStorage.setItem('theme', theme); } catch { /* storage blocked */ }
  }, [theme]);
  return [theme, () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))];
}

function useScrollNav() {
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState(null);
  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 120);
      const mid = window.innerHeight * 0.4;
      let current = null;
      for (const id of Object.keys(SECTION_TO_NAV)) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top < mid) current = SECTION_TO_NAV[id];
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return { visible, active };
}

function useTorontoClock() {
  const fmt = () => {
    try {
      return new Intl.DateTimeFormat('en-CA', { hour: '2-digit', minute: '2-digit', hour12: false, timeZone: 'America/Toronto' }).format(new Date());
    } catch { return ''; }
  };
  const [time, setTime] = useState(fmt);
  useEffect(() => {
    const id = setInterval(() => setTime(fmt()), 30000);
    return () => clearInterval(id);
  }, []);
  return time;
}

function DotGrid() {
  const ref = useRef(null);
  useEffect(() => {
    const onMove = (e) => {
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      el.style.setProperty('--mx', `${e.clientX - r.left}px`);
      el.style.setProperty('--my', `${e.clientY - r.top}px`);
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    return () => window.removeEventListener('pointermove', onMove);
  }, []);
  return <div className="grid" ref={ref} aria-hidden="true" />;
}

function Stats({ items }) {
  if (!items?.length) return null;
  return (
    <div className="stats">
      {items.map((s) => (
        <div className="stat" key={s.l}>
          <span className="n">{s.n}{s.small && <> <small>{s.small}</small></>}</span>
          <span className="l">{s.l}</span>
        </div>
      ))}
    </div>
  );
}

function Pipe({ steps }) {
  if (!steps?.length) return null;
  return (
    <div className="pipe" aria-label="How it works">
      {steps.map((s, i) => {
        const label = typeof s === 'string' ? s : s.label;
        const llm = typeof s === 'object' && s.llm;
        return (
          <span key={label} style={{ display: 'contents' }}>
            {i > 0 && <i>→</i>}
            <span className={llm ? 'llm' : undefined}>{label}</span>
          </span>
        );
      })}
    </div>
  );
}

export default function App() {
  const [theme, toggleTheme] = useTheme();
  const { visible, active } = useScrollNav();
  const time = useTorontoClock();
  const [toast, setToast] = useState(null);
  const [emailLabel, setEmailLabel] = useState('Email');
  const emailRef = useRef(null);
  const toastTimer = useRef(null);

  const showToast = (msg) => {
    setToast(msg);
    clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(null), 1800);
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      showToast(`copied ${profile.email}`);
    } catch {
      setEmailLabel(profile.email);
      requestAnimationFrame(() => {
        const range = document.createRange();
        range.selectNodeContents(emailRef.current);
        const sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);
      });
      showToast('selected, press ⌘C to copy');
    }
  };

  return (
    <>
      <DotGrid />

      <button className="toggle" onClick={toggleTheme} aria-label="Switch between light and dark theme">
        <span className="knob">{theme === 'dark' ? <MoonIcon /> : <SunIcon />}</span>
      </button>

      <main className="page">
        <header id="top">
          <div className="eyebrow mono"><span className="dot" aria-hidden="true" />{profile.status}</div>
          <h1>{profile.name}<span className="role">{profile.role}</span></h1>
          <div className="lede">
            {profile.intro.map((p, i) => (
              <p key={i}>{p.before}{p.em && <em>{p.em}</em>}{p.after}</p>
            ))}
          </div>
          <div className="chips" aria-label="Focus areas">
            {profile.focus.map((f) => <span className="chip" key={f}>{f}</span>)}
          </div>
          <div className="links">
            <a className="btn" href={profile.github} target="_blank" rel="noopener noreferrer"><GitHubIcon />GitHub</a>
            <a className="btn" href={profile.linkedin} target="_blank" rel="noopener noreferrer"><LinkedInIcon />LinkedIn</a>
            <button className="btn" onClick={copyEmail}><MailIcon /><span ref={emailRef}>{emailLabel}</span></button>
          </div>
        </header>

        <section id="work">
          <h2>Work</h2>
          <div className="list">
            {work.map((w) => (
              <article className="entry" key={w.org}>
                <div className="row">
                  <div className="who">
                    <img className="logo" src={w.logo} alt={w.logoAlt} width="30" height="30" />
                    <div className="who-text">
                      <span className="title">{w.title}</span>
                      <span className="org"><a href={w.orgUrl} target="_blank" rel="noopener noreferrer">{w.org}</a></span>
                    </div>
                  </div>
                  <span className="mono date">{w.dates}</span>
                </div>
                <p className="hook">{w.hook}</p>
                <p>{w.body}</p>
                <Stats items={w.stats} />
                <div className="stack">{w.stack}</div>
              </article>
            ))}
          </div>
        </section>

        <section id="projects">
          <h2>Things I&rsquo;ve built</h2>
          <div className="list">
            {projects.map((p) => (
              <article className="entry" key={p.title}>
                <div className="row">
                  <span className="title">{p.title}</span>
                  {p.url
                    ? <a className="out" href={p.url} target="_blank" rel="noopener noreferrer">source <span className="arr">↗</span></a>
                    : <span className="mono">private</span>}
                </div>
                <p className="hook">{p.hook}</p>
                <p>{p.body}</p>
                <Pipe steps={p.pipe} />
                <Stats items={p.stats} />
                <div className="stack">{p.stack}</div>
              </article>
            ))}
          </div>
        </section>

        <section id="earlier">
          <h2>Earlier on GitHub</h2>
          <div className="earlier">
            {earlier.map((e) => (
              <a key={e.name} href={e.url} target="_blank" rel="noopener noreferrer">
                <span className="yr">{e.year}</span>
                <span className="nm">{e.name}</span>
                <span className="ds">{e.desc}</span>
                <span className="arr">↗</span>
              </a>
            ))}
          </div>
        </section>

        <section id="principles">
          <h2>How I build</h2>
          <ol className="principles">
            {process.map((s, i) => (
              <li className="principle" key={s.title}>
                <span className="step">{String(i + 1).padStart(2, '0')}</span>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </li>
            ))}
          </ol>
        </section>

        <section id="education">
          <h2>Education</h2>
          <div className="who">
            <img className="logo" src={education.logo} alt={education.logoAlt} width="30" height="30" />
            <div className="who-text">
              <span className="title">{education.school}</span>
              <span className="org">{education.detail}</span>
            </div>
          </div>
        </section>

        <section id="toolkit">
          <h2>Toolkit</h2>
          <dl className="skills">
            {skills.map(([k, v]) => (
              <div key={k} style={{ display: 'contents' }}><dt>{k}</dt><dd>{v}</dd></div>
            ))}
          </dl>
        </section>

        <footer className="mono">
          <span>built in toronto · {time} local</span>
          <span><a href="#top">back to top ↑</a></span>
        </footer>
      </main>

      <nav className={`dock${visible ? ' show' : ''}`} aria-label="Sections">
        <a href="#top" aria-label="Back to top">↑</a>
        <span className="sep" aria-hidden="true" />
        {NAV.map((n) => (
          <a key={n.id} href={`#${n.id}`} className={active === n.id ? 'on' : undefined}>{n.label}</a>
        ))}
      </nav>

      <div className={`toast${toast ? ' on' : ''}`} role="status" aria-live="polite">{toast}</div>
    </>
  );
}
