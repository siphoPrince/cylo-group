import { Link } from "react-router-dom";
import {
    ArrowRight, MessageCircle, Check, Code2, Rocket, Wrench,
    ShieldCheck, Users, BarChart3, Smartphone, Layers, Clock,
    FileCode, Zap, Building2, Calendar, TrendingUp, Cog
} from "lucide-react";
import "../styles/LandingForBusiness.css";

// ─── EDIT THESE ───
const WHATSAPP_NUMBER = "+27682691386";
const WHATSAPP_TEXT = encodeURIComponent(
    "Hi Cylo Group, I'd like to discuss a software project."
);
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_TEXT}`;
const CONTACT_EMAIL = "info@cylosocials.co.za";
// ──────────────────

const LandingForBusiness = () => {
    return (
        <div className="group-page">

            {/* ═══════════ TOP BAR ═══════════ */}
            <header className="group-topbar">
                <Link to="/" className="group-logo">
                    Cylo<span>Group</span>
                </Link>
                <nav className="group-nav">
                    <a href="#services" className="group-nav-link">Services</a>
                    <a href="#work" className="group-nav-link">Work</a>
                    <a href="#process" className="group-nav-link">Process</a>
                    <a href="#pricing" className="group-nav-link">Engagements</a>
                    <a href="#faq" className="group-nav-link">FAQ</a>
                    <a
                        href={WHATSAPP_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group-topbar-cta"
                    >
                        Start a project
                    </a>
                </nav>
            </header>

            {/* ═══════════ HERO ═══════════ */}
            <section className="group-hero">
                <div className="group-hero-inner">
                    <div className="group-eyebrow-row">
                        <span className="group-eyebrow-dot" />
                        <span className="group-eyebrow-text">
                            Software studio · Johannesburg
                        </span>
                    </div>

                    <h1 className="group-headline">
                        We build the software
                        <br />
                        <em>your business runs on.</em>
                    </h1>

                    <p className="group-subhead">
                        Cylo Group is a software studio for growing businesses.
                        We design, build, and ship web apps, internal tools,
                        and product MVPs — the kind of software that actually
                        gets used, not shelved.
                    </p>

                    <div className="group-hero-ctas">
                        <a
                            href={WHATSAPP_LINK}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group-cta-primary"
                        >
                            Start a project
                            <ArrowRight size={18} />
                        </a>
                        <a href="#work" className="group-cta-secondary">
                            See our work
                        </a>
                    </div>

                    <div className="group-trust-row">
                        <div className="group-trust-item">
                            <Check size={14} /> Production systems, not demos
                        </div>
                        <div className="group-trust-item">
                            <Check size={14} /> Fixed-scope projects
                        </div>
                        <div className="group-trust-item">
                            <Check size={14} /> Transparent process
                        </div>
                    </div>
                </div>

                <div className="group-hero-visual">
                    <div className="group-mockup">
                        <div className="group-mockup-topbar">
                            <span className="group-mockup-dot" />
                            <span className="group-mockup-dot" />
                            <span className="group-mockup-dot" />
                        </div>
                        <div className="group-mockup-body">
                            <div className="group-mockup-sidebar">
                                <div className="group-mockup-line" />
                                <div className="group-mockup-line short" />
                                <div className="group-mockup-line" />
                                <div className="group-mockup-line short" />
                            </div>
                            <div className="group-mockup-main">
                                <div className="group-mockup-kpis">
                                    <div className="group-mockup-kpi">
                                        <span>Revenue</span>
                                        <strong>R1.2M</strong>
                                    </div>
                                    <div className="group-mockup-kpi">
                                        <span>Orders</span>
                                        <strong>4,812</strong>
                                    </div>
                                    <div className="group-mockup-kpi">
                                        <span>Uptime</span>
                                        <strong>99.9%</strong>
                                    </div>
                                </div>
                                <div className="group-mockup-chart">
                                    <div className="group-mockup-bar" style={{ height: "40%" }} />
                                    <div className="group-mockup-bar" style={{ height: "62%" }} />
                                    <div className="group-mockup-bar" style={{ height: "48%" }} />
                                    <div className="group-mockup-bar" style={{ height: "78%" }} />
                                    <div className="group-mockup-bar" style={{ height: "55%" }} />
                                    <div className="group-mockup-bar" style={{ height: "88%" }} />
                                    <div className="group-mockup-bar" style={{ height: "70%" }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════ TRUST BAR ═══════════ */}
            <section className="group-trustbar">
                <div className="group-trustbar-inner">
                    <span className="group-trustbar-label">
                        Built by the team behind
                    </span>
                    <div className="group-trustbar-items">
                        <span className="group-trustbar-item">Cylo Kitchen</span>
                        <span className="group-trustbar-divider">·</span>
                        <span className="group-trustbar-item">Live in production</span>
                        <span className="group-trustbar-divider">·</span>
                        <span className="group-trustbar-item">.NET · React · Azure</span>
                    </div>
                </div>
            </section>

            {/* ═══════════ SERVICES ═══════════ */}
            <section id="services" className="group-section">
                <div className="group-section-inner">
                    <div className="group-eyebrow-row centered">
                        <span className="group-eyebrow-dot" />
                        <span className="group-eyebrow-text">Services</span>
                    </div>

                    <h2 className="group-section-title">
                        Three ways we work with you.
                    </h2>

                    <p className="group-section-lead">
                        Whether you need something new built, something old
                        fixed, or a team embedded in yours — we've done all
                        three, many times.
                    </p>

                    <div className="group-services">
                        <div className="group-service-card">
                            <div className="group-service-icon">
                                <Rocket size={22} />
                            </div>
                            <h3>Custom builds</h3>
                            <p>
                                Web apps, internal tools, customer portals,
                                MVPs. Scoped, quoted, and shipped on a
                                timeline you can plan around.
                            </p>
                            <ul className="group-service-list">
                                <li>Web apps</li>
                                <li>Admin dashboards</li>
                                <li>APIs &amp; integrations</li>
                                <li>MVPs for startups</li>
                            </ul>
                        </div>

                        <div className="group-service-card">
                            <div className="group-service-icon">
                                <Wrench size={22} />
                            </div>
                            <h3>Backlog rescue</h3>
                            <p>
                                You've got a system that half-works and a
                                backlog that never ends. We take it over,
                                clean it up, and start shipping again.
                            </p>
                            <ul className="group-service-list">
                                <li>Legacy modernization</li>
                                <li>Bug triage &amp; cleanup</li>
                                <li>Performance work</li>
                                <li>Ongoing maintenance</li>
                            </ul>
                        </div>

                        <div className="group-service-card">
                            <div className="group-service-icon">
                                <Users size={22} />
                            </div>
                            <h3>Team on demand</h3>
                            <p>
                                Need more engineering capacity without a
                                three-month hiring process? We embed with
                                your team on a monthly retainer.
                            </p>
                            <ul className="group-service-list">
                                <li>Embedded developers</li>
                                <li>Sprint-based delivery</li>
                                <li>Architecture support</li>
                                <li>Code review</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════ SELECTED WORK ═══════════ */}
            <section id="work" className="group-section group-section-alt">
                <div className="group-section-inner">
                    <div className="group-eyebrow-row centered">
                        <span className="group-eyebrow-dot" />
                        <span className="group-eyebrow-text">Selected work</span>
                    </div>

                    <h2 className="group-section-title">
                        We don't pitch concepts. We ship products.
                    </h2>

                    <p className="group-section-lead">
                        Our own product, Cylo Kitchen, is what we build every
                        day. It's proof of what we can do for you.
                    </p>

                    <div className="group-case-study">
                        <div className="group-case-visual">
                            <div className="group-case-badge">Case study</div>
                            <div className="group-case-image">
                                <img
                                    src="/2.png"
                                    alt="Cylo Kitchen menu interface"
                                    className="group-case-screenshot"
                                    loading="lazy"
                                />
                            </div>
                        </div>

                        <div className="group-case-body">
                            <span className="group-case-tag">Cylo Kitchen</span>
                            <h3 className="group-case-title">
                                A QR-powered menu platform for restaurants.
                            </h3>
                            <p className="group-case-copy">
                                We designed, built, and shipped a full
                                video-first menu system for South African
                                restaurants — QR scanning, a public menu
                                page, per-table analytics, follower system,
                                and a business dashboard. Live in
                                production, used by real restaurants.
                            </p>

                            <div className="group-case-stats">
                                <div className="group-case-stat">
                                    <span className="group-case-stat-value">6 weeks</span>
                                    <span className="group-case-stat-label">Concept to launch</span>
                                </div>
                                <div className="group-case-stat">
                                    <span className="group-case-stat-value">20+</span>
                                    <span className="group-case-stat-label">Features shipped</span>
                                </div>
                                <div className="group-case-stat">
                                    <span className="group-case-stat-value">1</span>
                                    <span className="group-case-stat-label">Live product</span>
                                </div>
                            </div>

                            <div className="group-case-tech">
                                <span className="group-case-tech-chip">.NET 8</span>
                                <span className="group-case-tech-chip">React</span>
                                <span className="group-case-tech-chip">SQL Server</span>
                                <span className="group-case-tech-chip">Cloudflare R2</span>
                                <span className="group-case-tech-chip">SignalR</span>
                            </div>

                            <a
                                href="https://cylosocials.co.za/restaurants"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group-case-link"
                            >
                                View the product
                                <ArrowRight size={16} />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════ PROCESS ═══════════ */}
            <section id="process" className="group-section">
                <div className="group-section-inner">
                    <div className="group-eyebrow-row centered">
                        <span className="group-eyebrow-dot" />
                        <span className="group-eyebrow-text">How we work</span>
                    </div>

                    <h2 className="group-section-title">
                        Predictable. Transparent. No surprises.
                    </h2>

                    <p className="group-section-lead">
                        You always know what's happening, what's next, and
                        what it costs. That's the whole process.
                    </p>

                    <div className="group-process">
                        <div className="group-process-step">
                            <div className="group-process-num">01</div>
                            <h3>Scope call</h3>
                            <p>
                                30 minutes. We listen to what you need, ask
                                the hard questions, and tell you honestly
                                if we're the right fit.
                            </p>
                        </div>

                        <div className="group-process-step">
                            <div className="group-process-num">02</div>
                            <h3>Proposal</h3>
                            <p>
                                Within 3 business days you get a written
                                scope, a timeline, and a price. No vague
                                estimates, no hidden extras.
                            </p>
                        </div>

                        <div className="group-process-step">
                            <div className="group-process-num">03</div>
                            <h3>Weekly sprints</h3>
                            <p>
                                You see progress every Friday. Demo,
                                feedback, next sprint. No black boxes, no
                                silence for weeks.
                            </p>
                        </div>

                        <div className="group-process-step">
                            <div className="group-process-num">04</div>
                            <h3>Handover &amp; support</h3>
                            <p>
                                Clean code, documentation, and a runbook.
                                Then we stick around for support — monthly
                                or on-call.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════ ENGAGEMENTS (was Pricing) ═══════════ */}
            <section id="pricing" className="group-section group-section-alt">
                <div className="group-section-inner">
                    <div className="group-eyebrow-row centered">
                        <span className="group-eyebrow-dot" />
                        <span className="group-eyebrow-text">
                            How we engage
                        </span>
                    </div>

                    <h2 className="group-section-title">
                        Three ways to work with us.
                        <br />
                        <em>You pick what fits.</em>
                    </h2>

                    <p className="group-section-lead">
                        Every project is different. We don't do one-size-fits-all
                        pricing. On our first call we'll discuss scope,
                        timeline, and a structure that works for both sides.
                    </p>

                    <div className="group-pricing">
                        {/* PROJECT */}
                        <div className="group-pricing-card">
                            <div className="group-pricing-header">
                                <h3>Project</h3>
                                <p>One-off build, fixed scope</p>
                            </div>

                            <div className="group-pricing-price">
                                <span className="group-pricing-amount custom">
                                    Let&apos;s talk
                                </span>
                            </div>

                            <ul className="group-pricing-list">
                                <li><Check size={16} /> Fixed scope &amp; timeline</li>
                                <li><Check size={16} /> Milestone-based payments</li>
                                <li><Check size={16} /> Full documentation &amp; handover</li>
                                <li><Check size={16} /> 30-day post-launch support</li>
                                <li><Check size={16} /> You own the source code</li>
                            </ul>

                            <a
                                href={WHATSAPP_LINK}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group-pricing-cta"
                            >
                                Discuss a project
                                <ArrowRight size={16} />
                            </a>
                        </div>

                        {/* RETAINER — featured */}
                        <div className="group-pricing-card group-pricing-card-featured">
                            <div className="group-pricing-badge">
                                Most popular
                            </div>

                            <div className="group-pricing-header">
                                <h3>Retainer</h3>
                                <p>A dedicated squad, on demand</p>
                            </div>

                            <div className="group-pricing-price">
                                <span className="group-pricing-amount custom">
                                    Monthly
                                </span>
                                <span className="group-pricing-plus">rolling</span>
                            </div>

                            <ul className="group-pricing-list">
                                <li><Check size={16} /> 1–2 dedicated developers</li>
                                <li><Check size={16} /> Weekly sprint delivery</li>
                                <li><Check size={16} /> Architecture &amp; code review</li>
                                <li><Check size={16} /> Priority response time</li>
                                <li><Check size={16} /> Rollover hours (up to 20%)</li>
                                <li><Check size={16} /> Cancel with 30 days notice</li>
                            </ul>

                            <a
                                href={WHATSAPP_LINK}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group-pricing-cta group-pricing-cta-featured"
                            >
                                Start a retainer
                                <ArrowRight size={16} />
                            </a>
                        </div>

                        {/* ENTERPRISE */}
                        <div className="group-pricing-card">
                            <div className="group-pricing-header">
                                <h3>Enterprise</h3>
                                <p>Scoped to your team</p>
                            </div>

                            <div className="group-pricing-price">
                                <span className="group-pricing-amount custom">
                                    Custom
                                </span>
                            </div>

                            <ul className="group-pricing-list">
                                <li><Check size={16} /> Multi-team projects</li>
                                <li><Check size={16} /> Long-term engagements</li>
                                <li><Check size={16} /> SLA &amp; compliance requirements</li>
                                <li><Check size={16} /> Procurement &amp; onboarding support</li>
                                <li><Check size={16} /> Named account manager</li>
                            </ul>

                            <a
                                href={`mailto:${CONTACT_EMAIL}`}
                                className="group-pricing-cta"
                            >
                                Contact us
                                <ArrowRight size={16} />
                            </a>
                        </div>
                    </div>

                    <p className="group-pricing-note">
                        We&apos;ll give you a written proposal within 3
                        business days of our first call. Clear scope, clear
                        timeline, clear cost — no surprises.
                    </p>
                </div>
            </section>

            {/* ═══════════ WHY US ═══════════ */}
            <section className="group-section">
                <div className="group-section-inner">
                    <div className="group-eyebrow-row centered">
                        <span className="group-eyebrow-dot" />
                        <span className="group-eyebrow-text">Why Cylo Group</span>
                    </div>

                    <h2 className="group-section-title">
                        Built like a product team. Priced like a partner.
                    </h2>

                    <div className="group-features">
                        <div className="group-feature">
                            <div className="group-feature-icon">
                                <Code2 size={22} />
                            </div>
                            <h3>We ship our own product</h3>
                            <p>
                                Cylo Kitchen isn't a side project. It's live,
                                it has real users, and it's the reason we
                                know how to build yours properly.
                            </p>
                        </div>

                        <div className="group-feature">
                            <div className="group-feature-icon">
                                <Clock size={22} />
                            </div>
                            <h3>Weekly, not quarterly</h3>
                            <p>
                                You see working software every Friday. No
                                six-month big-bang releases. No "trust the
                                process."
                            </p>
                        </div>

                        <div className="group-feature">
                            <div className="group-feature-icon">
                                <ShieldCheck size={22} />
                            </div>
                            <h3>Fixed scope. Fixed price.</h3>
                            <p>
                                You approve the scope, the price is locked.
                                No surprise invoices, no scope creep games.
                            </p>
                        </div>

                        <div className="group-feature">
                            <div className="group-feature-icon">
                                <Layers size={22} />
                            </div>
                            <h3>Modern stack, no legacy debt</h3>
                            <p>
                                .NET, React, Postgres, cloud-native. We
                                don't inherit legacy problems — we build
                                systems that last.
                            </p>
                        </div>

                        <div className="group-feature">
                            <div className="group-feature-icon">
                                <BarChart3 size={22} />
                            </div>
                            <h3>Business outcomes, not ticket counts</h3>
                            <p>
                                We care about your revenue, your users, and
                                your team's sanity. Not how many story
                                points we closed.
                            </p>
                        </div>

                        <div className="group-feature">
                            <div className="group-feature-icon">
                                <Building2 size={22} />
                            </div>
                            <h3>Local, reachable, honest</h3>
                            <p>
                                You get a real person on WhatsApp, not an
                                offshore account manager. Same timezone.
                                Same country.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════ FAQ ═══════════ */}
            <section id="faq" className="group-section group-section-alt">
                <div className="group-section-inner">
                    <div className="group-eyebrow-row centered">
                        <span className="group-eyebrow-dot" />
                        <span className="group-eyebrow-text">FAQ</span>
                    </div>

                    <h2 className="group-section-title">
                        Questions we get a lot.
                    </h2>

                    <div className="group-faq">
                        <details className="group-faq-item">
                            <summary>What kind of projects do you take on?</summary>
                            <p>
                                Web applications, internal tools, admin
                                dashboards, MVPs, and rescue work on systems
                                that have stalled. If it's software, it's
                                probably in scope. If it's not, we'll tell
                                you on the first call.
                            </p>
                        </details>

                        <details className="group-faq-item">
                            <summary>What do projects typically cost?</summary>
                            <p>
                                Every project is scoped on its own. Most
                                fixed-scope builds we take on fall between
                                R100k and R400k depending on complexity and
                                timeline. Retainers typically start around
                                R30k/month. On our first call we'll give you
                                a rough range — no commitment.
                            </p>
                        </details>

                        <details className="group-faq-item">
                            <summary>How long does a typical project take?</summary>
                            <p>
                                Most fixed-scope projects run 4–12 weeks.
                                MVPs can be faster. Larger systems take
                                longer. The proposal you receive will have
                                a specific timeline, not a range.
                            </p>
                        </details>

                        <details className="group-faq-item">
                            <summary>Do you work with companies outside South Africa?</summary>
                            <p>
                                Yes. We've worked with clients in the UK,
                                US, and Europe. Everything runs
                                asynchronously, and we adapt to your
                                business hours when needed.
                            </p>
                        </details>

                        <details className="group-faq-item">
                            <summary>What tech stack do you use?</summary>
                            <p>
                                .NET / C# on the backend, React on the
                                frontend, SQL Server or Postgres for data,
                                and cloud hosting on Azure or AWS. We adapt
                                to your stack if you already have one.
                            </p>
                        </details>

                        <details className="group-faq-item">
                            <summary>Who owns the code?</summary>
                            <p>
                                You do. Full source code, all assets, all
                                documentation — handed over at the end of
                                every project. We don't hold clients
                                hostage with proprietary code.
                            </p>
                        </details>

                        <details className="group-faq-item">
                            <summary>Can you take over a project someone else started?</summary>
                            <p>
                                Yes, that's half of what we do. We'll
                                audit the code, write a report on what
                                needs fixing, and give you a plan before
                                you commit to anything.
                            </p>
                        </details>

                        <details className="group-faq-item">
                            <summary>What's your minimum engagement?</summary>
                            <p>
                                On a fixed project, we're usually a fit
                                from around R100k upward. On retainer,
                                from around R30k/month. Below those, a
                                freelancer will serve you better and
                                cheaper — and we'll tell you that on the
                                call.
                            </p>
                        </details>

                        <details className="group-faq-item">
                            <summary>How do we get started?</summary>
                            <p>
                                Message us on WhatsApp. We'll set up a
                                30-minute call within 48 hours. If it's a
                                fit, you'll have a written proposal within
                                3 business days.
                            </p>
                        </details>
                    </div>
                </div>
            </section>

            {/* ═══════════ FINAL CTA ═══════════ */}
            <section className="group-final">
                <div className="group-section-inner">
                    <h2 className="group-final-title">
                        Tell us what you're building.
                        <br />
                        <em>We'll tell you if we can help.</em>
                    </h2>
                    <p className="group-final-copy">
                        No pitch decks. No sales scripts. A real conversation
                        about what you need and whether we're the right team
                        for it.
                    </p>
                    <div className="group-final-ctas">
                        <a
                            href={WHATSAPP_LINK}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group-cta-primary"
                        >
                            <MessageCircle size={18} />
                            Message us on WhatsApp
                        </a>
                        <a
                            href={`mailto:${CONTACT_EMAIL}`}
                            className="group-cta-secondary"
                        >
                            Send an email
                        </a>
                    </div>
                </div>
            </section>

            {/* ═══════════ FOOTER ═══════════ */}
            <footer className="group-footer">
                <div className="group-footer-inner">
                    <div className="group-footer-brand">
                        <span className="group-logo">
                            Cylo<span>Group</span>
                        </span>
                        <p>Software studio. Johannesburg, South Africa.</p>
                    </div>
                    <div className="group-footer-links">
                        <a href="#services">Services</a>
                        <a href="#work">Work</a>
                        <a href="#pricing">Engagements</a>
                        <a href="#faq">FAQ</a>
                        <a
                            href="https://cylosocials.co.za/restaurants"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Cylo Kitchen
                        </a>
                    </div>
                </div>
                <div className="group-footer-bottom">
                    <p>
                        © {new Date().getFullYear()} Cylo Group Technologies.
                        All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default LandingForBusiness;