"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./case-study.module.css";
import { ArrowLeft, ExternalLink, Users, AlertTriangle, CheckCircle, TrendingUp } from "lucide-react";

export default function CaseStudy() {
  return (
    <div className={styles.page}>
      {/* Back Nav */}
      <div className={styles.backNav}>
        <Link href="/" className={styles.backLink}>
          <ArrowLeft size={16} />
          Back to Portfolio
        </Link>
      </div>

      {/* Hero Header */}
      <header className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroMeta}>
            <span className={styles.tag}>UX Design</span>
            <span className={styles.tag}>Group Project</span>
            <span className={styles.tag}>Spring 2026</span>
          </div>
          <h1 className={styles.heroTitle}>EECS Department Website Redesign</h1>
          <p className={styles.heroSubtitle}>
            A user-centered redesign of UC Berkeley&apos;s Electrical Engineering &amp; Computer Sciences department
            website — from fragmented navigation to a mobile-first, accessible platform.
          </p>
          <div className={styles.heroStats}>
            <div className={styles.stat}>
              <span className={styles.statNum}>3</span>
              <span className={styles.statLabel}>User Testers</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNum}>100%</span>
              <span className={styles.statLabel}>Task Completion Rate</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNum}>3</span>
              <span className={styles.statLabel}>Critical Issues Fixed</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNum}>Group 15</span>
              <span className={styles.statLabel}>Team</span>
            </div>
          </div>
        </div>
      </header>

      <div className={styles.content}>

        {/* ── SECTION 1: PROBLEM ── */}
        <section className={styles.section} id="problem">
          <div className={styles.sectionLabel}>01 — Problem</div>
          <h2 className={styles.sectionTitle}>What Was Broken</h2>
          <p className={styles.body}>
            University department websites are critical infrastructure for students, faculty, and alumni — yet they
            are frequently among the most poorly designed digital experiences in higher education. The EECS department
            site suffered from three core problems that directly degraded the user experience.
          </p>

          <div className={styles.problemGrid}>
            <div className={styles.problemCard}>
              <AlertTriangle size={24} className={styles.problemIcon} />
              <h3>Fragmented Navigation</h3>
              <p>
                Critical actions like RSVP-ing to department events were hidden on the home page with no secondary
                path through the navigation. Users who logically searched under &quot;Academics&quot; found nothing,
                leading to confusion and multiple mis-clicks.
              </p>
            </div>
            <div className={styles.problemCard}>
              <AlertTriangle size={24} className={styles.problemIcon} />
              <h3>Missing Interactive Components</h3>
              <p>
                The initial prototype was shipped with a critical oversight: the RSVP form had no submit button.
                This completely blocked the primary user task of event registration, discovered only through
                formal user testing.
              </p>
            </div>
            <div className={styles.problemCard}>
              <AlertTriangle size={24} className={styles.problemIcon} />
              <h3>Sparse Visual Hierarchy</h3>
              <p>
                The home page lacked a focal point. With no hero image, no clear CTA hierarchy, and no visual
                anchoring, users described the page as &quot;empty&quot; — failing to guide attention to the
                site&apos;s most important functions.
              </p>
            </div>
          </div>

          <div className={styles.problemStatement}>
            <p className={styles.pullQuote}>
              &ldquo;University students miss events and alumni abandon donation flows because the site&apos;s
              navigation doesn&apos;t match real user mental models — and critical form elements are outright missing.&rdquo;
            </p>
          </div>
        </section>

        {/* ── SECTION 2: PROCESS ── */}
        <section className={styles.section} id="process">
          <div className={styles.sectionLabel}>02 — Process</div>
          <h2 className={styles.sectionTitle}>Design Journey</h2>

          {/* Before / After comparison */}
          <h3 className={styles.subTitle}>Before: The Original Prototype</h3>
          <p className={styles.body}>
            Our team began by auditing the existing EECS website structure and translating it into a low-fidelity
            prototype. The initial design captured the core navigation and page hierarchy, but lacked visual depth,
            clear affordances, and a compelling user flow for key tasks like donating or event registration.
          </p>

          <div className={styles.imageContainer}>
            <Image
              src="/case-study/eecs-prototype-wireframe.png"
              alt="Low-fidelity prototype of the original EECS website — sparse layout, minimal visual hierarchy"
              width={1200}
              height={750}
              className={styles.screenshot}
            />
            <p className={styles.caption}>
              Lo-fi prototype — sparse home page with minimal visual hierarchy and no clear focal point.
            </p>
          </div>

          {/* Process timeline */}
          <h3 className={styles.subTitle}>Design Iterations</h3>
          <div className={styles.timeline}>
            <div className={styles.timelineItem}>
              <div className={styles.timelineDot} />
              <div className={styles.timelineContent}>
                <h4>Phase 1 — Critique &amp; Analysis</h4>
                <p>Conducted a heuristic evaluation of the existing EECS website against Nielsen&apos;s 10 usability
                heuristics. Key gaps: lack of recognition over recall in navigation, no error recovery for form
                submissions, and poor match between system and the real world (navigation labels didn&apos;t align
                with user expectations).</p>
              </div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timelineDot} />
              <div className={styles.timelineContent}>
                <h4>Phase 2 — Low-Fidelity Prototype</h4>
                <p>Built the first interactive prototype with Figma, establishing the Berkeley Navy &amp; Gold color
                palette, typography system (Playfair Display + Inter), and core page layout. Prioritized the
                Donation Flow and RSVP Flow as the two primary user journeys to design and test.</p>
              </div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timelineDot} />
              <div className={styles.timelineContent}>
                <h4>Phase 3 — User Testing</h4>
                <p>Recruited 3 participants (Jason, Rico, and Nat) to test 3 core tasks: reaching the search results
                page, RSVPing to an event, and toggling dark mode. Observed sessions and recorded all mis-clicks,
                hesitations, and verbal feedback.</p>
              </div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timelineDot} />
              <div className={styles.timelineContent}>
                <h4>Phase 4 — Iteration &amp; Final Build</h4>
                <p>Applied all testing findings to the final HTML/CSS/JS build. Added the missing Submit button,
                restructured the hero section with a background image and clear CTAs, and implemented dark mode
                as a first-class feature accessible from the main navigation.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── SECTION 3: TESTING ── */}
        <section className={styles.section} id="testing">
          <div className={styles.sectionLabel}>03 — Testing &amp; Feedback</div>
          <h2 className={styles.sectionTitle}>What Users Taught Us</h2>

          <p className={styles.body}>
            We conducted moderated usability testing with 3 participants — Jason (23), Rico (24), and Nat (23) —
            all with prior experience using university and news websites. Each completed 3 tasks without guidance.
          </p>

          <div className={styles.taskGrid}>
            <div className={styles.taskCard}>
              <div className={styles.taskHeader}>Task 1: Search Results Page</div>
              <div className={styles.taskResult + " " + styles.pass}>✓ All 3 completed — no issues</div>
              <p>All participants located the search bar immediately. P1 (Jason) noted the page felt visually
              sparse and suggested adding a styled hero element to draw focus to the search bar.</p>
              <div className={styles.changeTag}>→ Added full-bleed hero section with background imagery</div>
            </div>
            <div className={styles.taskCard}>
              <div className={styles.taskHeader}>Task 2: RSVP to an Event</div>
              <div className={styles.taskResult + " " + styles.warn}>⚠ 1 participant: 6 mis-clicks</div>
              <p>P1 (Jason) navigated to the Academics tab first, expecting RSVP to be there. P3 (Nat) discovered
              the RSVP form was missing a submit button — a critical blocking issue our team had overlooked.</p>
              <div className={styles.changeTag}>→ Added Submit button; added Events link under Academics nav</div>
            </div>
            <div className={styles.taskCard}>
              <div className={styles.taskHeader}>Task 3: Toggle Dark Mode</div>
              <div className={styles.taskResult + " " + styles.pass}>✓ All 3 completed immediately</div>
              <p>All participants found the dark mode toggle instantly, calling it &quot;very clear&quot; and
              &quot;obvious.&quot; P1 (Jason) asked for more expanded pages in the prototype for more complete
              task paths.</p>
              <div className={styles.changeTag}>→ Retained visible toggle; expanded page coverage</div>
            </div>
          </div>

          <h3 className={styles.subTitle}>Key Findings</h3>
          <div className={styles.findingsGrid}>
            <div className={styles.finding}>
              <CheckCircle size={20} className={styles.findingIcon} />
              <div>
                <strong>Navigation Mental Model Mismatch</strong>
                <p>Jason naturally expected RSVP functionality under &quot;Academics&quot; — not the home page.
                This revealed that user mental models often differ from designer assumptions. Fix: added an
                Events entry point in the Academics dropdown.</p>
              </div>
            </div>
            <div className={styles.finding}>
              <CheckCircle size={20} className={styles.findingIcon} />
              <div>
                <strong>The Missing Submit Button</strong>
                <p>Nat discovered the RSVP form had no submit button — a complete task blocker. This catch
                validated the importance of user testing: our team had missed this critical omission entirely
                during self-review. Fix: added labeled Submit button with confirmation state.</p>
              </div>
            </div>
            <div className={styles.finding}>
              <CheckCircle size={20} className={styles.findingIcon} />
              <div>
                <strong>Empty-Page Syndrome</strong>
                <p>Jason described the search/home page as &quot;visually empty&quot; — no focal point guided
                the eye. Fix: restructured the hero section with a full-bleed photography background, large
                headline, and prominent CTAs for &quot;Explore Programs&quot; and &quot;RSVP to an Event.&quot;</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── SECTION 4: FINAL PRODUCT ── */}
        <section className={styles.section} id="final">
          <div className={styles.sectionLabel}>04 — Final Product</div>
          <h2 className={styles.sectionTitle}>The Finished Result</h2>

          <p className={styles.body}>
            The final EECS website is a fully responsive, mobile-first web application built with semantic HTML5,
            custom CSS variables, and vanilla JavaScript. Every issue identified in testing was addressed, and the
            design reflects a professional, Berkeley-branded aesthetic that matches the caliber of the department.
          </p>

          {/* Final Screenshots */}
          <h3 className={styles.subTitle}>Home Page — After Redesign</h3>
          <div className={styles.imageContainer}>
            <Image
              src="/case-study/eecs-final-home.png"
              alt="Final EECS homepage — full-bleed hero, Berkeley Navy navigation, upcoming events with thumbnails"
              width={1200}
              height={1600}
              className={styles.screenshot}
            />
            <p className={styles.caption}>
              Final home page — full-bleed hero with a strong CTA hierarchy, upcoming events with event images,
              and a Latest News section with article thumbnails. Berkeley Navy &amp; Gold color system throughout.
            </p>
          </div>

          <div className={styles.twoUp}>
            <div className={styles.imageContainer}>
              <Image
                src="/case-study/eecs-final-donate.png"
                alt="Donation page — glassmorphism form card with preset amounts and real-time validation"
                width={900}
                height={600}
                className={styles.screenshot}
              />
              <p className={styles.caption}>
                Donation flow — preset amount buttons, custom input, and a clean multi-step form with real-time
                field validation.
              </p>
            </div>
            <div className={styles.imageContainer}>
              <Image
                src="/case-study/eecs-final-rsvp.png"
                alt="RSVP form page — fixed with Submit button, separate form fields, and clear event context"
                width={900}
                height={600}
                className={styles.screenshot}
              />
              <p className={styles.caption}>
                RSVP form — fixed with a clearly labeled Submit button, separated form fields, and event context
                at the top so users always know what they&apos;re signing up for.
              </p>
            </div>
          </div>

          <h3 className={styles.subTitle}>Before vs. After</h3>
          <div className={styles.comparisonTable}>
            <div className={styles.comparisonHeader}>
              <span>Issue Identified in Testing</span>
              <span>Change Made</span>
            </div>
            <div className={styles.comparisonRow}>
              <span>Home page felt visually empty, no focal point</span>
              <span className={styles.fix}>Added full-bleed hero with photography, headline, and dual CTAs</span>
            </div>
            <div className={styles.comparisonRow}>
              <span>RSVP only accessible from home page</span>
              <span className={styles.fix}>Added Events entry in Academics dropdown navigation</span>
            </div>
            <div className={styles.comparisonRow}>
              <span>RSVP form missing a Submit button</span>
              <span className={styles.fix}>Added &quot;SUBMIT RSVP →&quot; button with confirmation state</span>
            </div>
            <div className={styles.comparisonRow}>
              <span>Combined first/last name field</span>
              <span className={styles.fix}>Separated into distinct First Name and Last Name inputs</span>
            </div>
            <div className={styles.comparisonRow}>
              <span>No dark mode toggle in desktop view</span>
              <span className={styles.fix}>Dark Mode toggle prominently placed in utility navigation bar</span>
            </div>
          </div>

          {/* Outcomes */}
          <div className={styles.outcomesGrid}>
            <div className={styles.outcomeCard}>
              <TrendingUp size={28} className={styles.outcomeIcon} />
              <h4>100% Task Completion</h4>
              <p>All 3 critical tasks were completed by all participants in the final build — up from a blocked
              state where Task 2 was impossible to complete due to the missing button.</p>
            </div>
            <div className={styles.outcomeCard}>
              <Users size={28} className={styles.outcomeIcon} />
              <h4>User-Validated Navigation</h4>
              <p>The revised Academics dropdown with an Events link directly addressed Jason&apos;s navigation
              mental model — ensuring users can reach key tasks from multiple entry points.</p>
            </div>
            <div className={styles.outcomeCard}>
              <CheckCircle size={28} className={styles.outcomeIcon} />
              <h4>Accessible &amp; Responsive</h4>
              <p>Mobile-first layout with dark mode support, responsive hamburger nav, and semantic HTML
              ensures accessibility across devices and user preferences.</p>
            </div>
          </div>

          <div className={styles.liveLink}>
            <p>View the final product:</p>
            <a
              href="https://phinton64.github.io/EECS-Website---Group-15-Project/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.liveLinkBtn}
            >
              <ExternalLink size={16} />
              Live EECS Website →
            </a>
          </div>
        </section>

        {/* ── REFLECTION ── */}
        <section className={styles.section} id="reflection">
          <div className={styles.sectionLabel}>05 — Reflection</div>
          <h2 className={styles.sectionTitle}>What I Learned</h2>
          <p className={styles.body}>
            This project reinforced that assumptions are the enemy of good design. Our team — all engineers —
            missed a missing submit button entirely during self-review. A single round of user testing caught it
            immediately. That experience fundamentally shifted how I think about testing: it&apos;s not optional
            polish, it&apos;s how you actually see your own product.
          </p>
          <p className={styles.body}>
            The navigation mental model issue was equally instructive. We placed RSVP functionality exactly
            where &quot;made sense&quot; to us — but Jason&apos;s first instinct was the Academics tab, not the
            home page. Design should accommodate how users think, not how designers think.
          </p>
          <p className={styles.body}>
            Going forward, I would introduce a navigation card sort exercise earlier in the process to validate
            information architecture before building any prototype — and run at least one round of testing
            before any stakeholder review.
          </p>
        </section>

      </div>
    </div>
  );
}
