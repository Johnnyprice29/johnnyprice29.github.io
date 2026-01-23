/**
 * Portfolio Script
 * Consolidated translations, data, and rendering logic
 */

// ===== TRANSLATIONS =====
const translations = {
    it: {
        nav: { about: "Chi Sono", projects: "Progetti", experience: "Esperienza", education: "Istruzione", cv: "CV" },
        hero: {
            greeting: "Ciao! 👋",
            title: "Johnprice Osagie",
            subtitle: "Student AI · Cloud Engineer",
            description: "Studente magistrale in Ingegneria Informatica (AI) al Politecnico di Torino. Appassionato di infrastrutture cloud, automazione e machine learning. Attualmente lavoro come Cloud Consultant presso Reply Nimbus.",
            btnProjects: "Scopri Progetti",
            btnCV: "Scarica CV"
        },
        sectionTitles: { projects: "Progetti", experience: "Esperienza", education: "Istruzione", certs: "Certificazioni", skills: "Competenze" },
        projects: {
            card1: { desc: "Repository con esercizi e progetti del corso Advanced Web Applications 1 (2025).", link: "Visualizza →" },
            cardRL: {
                title: "Robot Learning Projects",
                desc: "Collezione completa di progetti ed esercizi per il corso di Robot Learning, inclusi Sim-to-Real extension, Q-Learning e Policy Gradients.",
                link: "Esplora →"
            },
            card2: { desc: "Script Python e Bash per automazione di infrastrutture cloud e gestione multi-tenant.", link: "In sviluppo →" },
            card3: { desc: "Strumenti per verificare consistenza dati tra vCenter, Morpheus e ServiceNow.", link: "In sviluppo →" },
            card4: { desc: "Libreria Node.js per convertire Markdown in PDF con supporto KaTeX e stili professionali.", link: "Visualizza →" }
        },
        experience: {
            role: "Cloud Consultant (Part-time)",
            period: "2023 - Presente",
            bullets: [
                "Automazione flussi di provisioning utenti usando script Python per interagire con API Morpheus Data, riducendo overhead manuale dell'80%",
                "Ingegnerizzazione pipeline di riconciliazione dati in Python per verificare consistenza tra vCenter, Morpheus CMP e ServiceNow ITSM",
                "Sviluppo strumenti di verifica connettività massiva basati su Bash usando netcat e ping per ambienti Windows/Linux",
                "Implementazione Secret Management (Cyphers) e auditing RBAC per piattaforme cloud multi-tenant",
                "Redazione documentazione tecnica completa per workflow automatizzati"
            ]
        },
        education: {
            bachelor: "Triennale in Ingegneria Gestionale",
            master: "Magistrale in Ingegneria Informatica (AI)",
            erasmusTitle: "Esperienza Internazionale - Erasmus",
            erasmusPeriod: "Feb 2024 - Giu 2024",
            examsTitle: "Esami Superati"
        },
        cv: { downloadTitle: "Profilo Professionale Completo", downloadDesc: "Scarica il mio CV aggiornato per una panoramica del mio percorso accademico, competenze tecniche ed esperienze professionali.", btnDownload: "Scarica PDF" },
        certs: {
            english: { title: "Cambridge English: First (FCE)", score: "Grado A - Livello C1 (Punteggio 181)", date: "Dic 2020" },
            french: { title: "Certificato di Lingua Francese", score: "Livello B2 / B2+", issuer: "Y SCHOOLS, Francia", date: "Giu 2024" }
        },
        skills: { lang: "Linguaggi di Programmazione", cloud: "Cloud & Infrastructure", ai: "AI & Machine Learning", web: "Sviluppo Web", tools: "Strumenti & Piattaforme", soft: "Soft Skills" },
        footer: { rights: "Tutti i diritti riservati." }
    },
    en: {
        nav: { about: "About Me", projects: "Projects", experience: "Experience", education: "Education", cv: "CV" },
        hero: {
            greeting: "Hello! 👋",
            title: "Johnprice Osagie",
            subtitle: "AI Student · Cloud Engineer",
            description: "Master's student in Computer Engineering (AI) at Polytechnic University of Turin. Passionate about cloud infrastructure, automation, and machine learning. Currently working as a Cloud Consultant at Reply Nimbus.",
            btnProjects: "View Projects",
            btnCV: "Download CV"
        },
        sectionTitles: { projects: "Projects", experience: "Experience", education: "Education", certs: "Certifications", skills: "Skills" },
        projects: {
            card1: { desc: "Repository with exercises and projects for the Advanced Web Applications 1 course (2025).", link: "View →" },
            cardRL: {
                title: "Robot Learning Projects",
                desc: "A comprehensive collection of projects and exercises for the Robot Learning course, including Sim-to-Real extension, Q-Learning, and Policy Gradients.",
                link: "Explore →"
            },
            card2: { desc: "Python and Bash scripts for cloud infrastructure automation and multi-tenant management.", link: "In development →" },
            card3: { desc: "Tools to verify data consistency between vCenter, Morpheus, and ServiceNow.", link: "In development →" },
            card4: { desc: "Node.js library to convert Markdown to PDF with KaTeX support and professional styling.", link: "View →" }
        },
        experience: {
            role: "Cloud Consultant (Part-time)",
            period: "2023 - Present",
            bullets: [
                "Automated user provisioning workflows using Python scripting to interact with Morpheus Data API, reducing manual overhead by 80%",
                "Engineered data reconciliation pipelines in Python to verify consistency between vCenter, Morpheus CMP, and ServiceNow ITSM",
                "Developed Bash-based bulk connectivity verification tools using netcat and ping for Windows/Linux environments",
                "Implemented Secret Management (Cyphers) and RBAC auditing for multi-tenant cloud platforms",
                "Authored comprehensive technical documentation for automated workflows"
            ]
        },
        education: {
            bachelor: "Bachelor in Management Engineering",
            master: "Master in Computer Engineering (AI)",
            erasmusTitle: "International Experience - Erasmus",
            erasmusPeriod: "Feb 2024 - Jun 2024",
            examsTitle: "Passed Exams"
        },
        cv: { downloadTitle: "Full Professional Profile", downloadDesc: "Download my latest CV for a detailed overview of my academic background, technical skills, and professional experiences.", btnDownload: "Download PDF" },
        certs: {
            english: { title: "Cambridge English: First (FCE)", score: "Grade A - Level C1 (Score 181)", date: "Dec 2020" },
            french: { title: "French Language Certificate", score: "Level B2 / B2+", issuer: "Y SCHOOLS, France", date: "Jun 2024" }
        },
        skills: { lang: "Programming Languages", cloud: "Cloud & Infrastructure", ai: "AI & Machine Learning", web: "Web Development", tools: "Tools & Platforms", soft: "Soft Skills" },
        footer: { rights: "All rights reserved." }
    },
    fr: {
        nav: { about: "À propos", projects: "Projets", experience: "Expérience", education: "Formation", cv: "CV" },
        hero: {
            greeting: "Bonjour! 👋",
            title: "Johnprice Osagie",
            subtitle: "Étudiant en IA · Ingénieur Cloud",
            description: "Étudiant en Master en Ingénierie Informatique (IA) à l'École Polytechnique de Turin. Passionné par l'infrastructure cloud, l'automatisation et le machine learning. Je travaille actuellement comme Consultant Cloud chez Reply Nimbus.",
            btnProjects: "Voir Projets",
            btnCV: "Télécharger CV"
        },
        sectionTitles: { projects: "Projets", experience: "Expérience", education: "Formation", certs: "Certifications", skills: "Compétences" },
        projects: {
            card1: { desc: "Dépôt avec exercices et projets du cours Advanced Web Applications 1 (2025).", link: "Voir →" },
            cardRL: {
                title: "Robot Learning Projects",
                desc: "Une collection complète de projets et d'exercices pour le cours Robot Learning, y compris l'extension Sim-to-Real, le Q-Learning et les Policy Gradients.",
                link: "Explorer →"
            },
            card2: { desc: "Scripts Python et Bash pour l'automatisation de l'infrastructure cloud.", link: "En développement →" },
            card3: { desc: "Outils pour vérifier la cohérence des données entre vCenter, Morpheus et ServiceNow.", link: "En développement →" },
            card4: { desc: "Bibliothèque Node.js pour convertir Markdown en PDF avec support KaTeX.", link: "Voir →" }
        },
        experience: {
            role: "Consultant Cloud (Temps partiel)",
            period: "2023 - Présent",
            bullets: [
                "Automatisation des flux de provisionnement utilisateurs via scripts Python avec l'API Morpheus Data, réduisant les tâches manuelles de 80%",
                "Conception de pipelines de réconciliation de données en Python pour vCenter, Morpheus CMP et ServiceNow ITSM",
                "Développement d'outils de vérification de connectivité en masse basés sur Bash pour Windows/Linux",
                "Mise en œuvre de la gestion des secrets (Cyphers) et de l'audit RBAC pour les plateformes cloud",
                "Rédaction de documentation technique complète"
            ]
        },
        education: {
            bachelor: "Licence en Ingénierie de Gestion",
            master: "Master en Ingénierie Informatique (IA)",
            erasmusTitle: "Expérience Internationale - Erasmus",
            erasmusPeriod: "Fév 2024 - Juin 2024",
            examsTitle: "Examens Réussis"
        },
        cv: { downloadTitle: "Profil Professionnel Complet", downloadDesc: "Téléchargez mon CV pour un aperçu de mon parcours académique, compétences techniques et expériences professionnelles.", btnDownload: "Télécharger PDF" },
        certs: {
            english: { title: "Cambridge English: First (FCE)", score: "Grade A - Niveau C1 (Score 181)", date: "Déc 2020" },
            french: { title: "Certificat de Langue Française", score: "Niveau B2 / B2+", issuer: "Y SCHOOLS, France", date: "Juin 2024" }
        },
        skills: { lang: "Langages de Programmation", cloud: "Cloud & Infrastructure", ai: "IA & Machine Learning", web: "Développement Web", tools: "Outils & Plateformes", soft: "Soft Skills" },
        footer: { rights: "Tous droits réservés." }
    }
};

// ===== EXAM DATA =====
const examsData = [
    { level: "Magistrale", name: "Robot Learning", grade: "30/30" },
    // Triennale
    { level: "Triennale", name: "Lingua inglese I livello", grade: { it: "Superato", en: "Passed", fr: "Validé" } },
    { level: "Triennale", name: "Analisi matematica I", grade: "28/30" },
    { level: "Triennale", name: "Informatica", grade: "28/30" },
    { level: "Triennale", name: "Chimica", grade: "21/30" },
    { level: "Triennale", name: "Algebra lineare e geometria", grade: "21/30" },
    { level: "Triennale", name: "Fisica I", grade: "25/30" },
    { level: "Triennale", name: "Economia e organizzazione aziendale", grade: "27/30" },
    { level: "Triennale", name: "Basi di dati", grade: "21/30" },
    { level: "Triennale", name: "Statistica", grade: "23/30" },
    { level: "Triennale", name: "Analisi matematica II", grade: "21/30" },
    { level: "Triennale", name: "Neuroengineering and active aging", grade: "26/30" },
    { level: "Triennale", name: "Sistemi di produzione", grade: "27/30" },
    { level: "Triennale", name: "Sistemi elettrici industriali", grade: "29/30" },
    { level: "Triennale", name: "Ricerca operativa", grade: "18/30" },
    { level: "Triennale", name: "Tempi difficili - Guerra, Pace", grade: { it: "Superato", en: "Passed", fr: "Validé" } },
    { level: "Triennale", name: "Fisica II", grade: "26/30" },
    { level: "Triennale", name: "Sistemi telematici", grade: "18/30" },
    { level: "Triennale", name: "Elementi di diritto privato", grade: "20/30" },
    { level: "Triennale", name: "Programmazione a oggetti", grade: "30/30" },
    { level: "Triennale", name: "Introduzione alle Applicazioni Web", grade: "26/30" },
    { level: "Triennale", name: "Programmazione e gestione della produzione", grade: "29/30" },
    { level: "Triennale", name: "Progettazione di servizi web e reti", grade: "24/30" },
    { level: "Triennale", name: "Tecniche di programmazione", grade: "23/30" },
    { level: "Triennale", name: "Attività formative esterne", grade: { it: "Superato", en: "Passed", fr: "Validé" } },
    { level: "Triennale", name: "Prova finale", grade: { it: "Superato", en: "Passed", fr: "Validé" } },
    // Magistrale
    { level: "Magistrale", name: "Big data processing and analytics", grade: "26/30" },
    { level: "Magistrale", name: "Data Science e Tecnologie per le Basi di Dati", grade: "27/30" },
    { level: "Magistrale", name: "Applicazioni Web I", grade: "27/30" },
    { level: "Magistrale", name: "Tecnologie e servizi di rete", grade: "26/30" },
    { level: "Magistrale", name: "Ingegneria del software", grade: "30/30" },
    { level: "Magistrale", name: "Bioinformatics", grade: "29/30" },
    // Erasmus
    { level: "Erasmus", name: "Entrepreneurship", grade: { it: "Convalidato", en: "Validated", fr: "Validé" } },
    { level: "Erasmus", name: "Français semestre 2", grade: { it: "Convalidato", en: "Validated", fr: "Validé" } },
    { level: "Erasmus", name: "Customer Relationship Management (CRM)", grade: { it: "Convalidato", en: "Validated", fr: "Validé" } },
    { level: "Erasmus", name: "Brand Management", grade: { it: "Convalidato", en: "Validated", fr: "Validé" } },
    { level: "Erasmus", name: "Salesforce Management", grade: { it: "Convalidato", en: "Validated", fr: "Validé" } },
    { level: "Erasmus", name: "Web Design Nocode", grade: { it: "Convalidato", en: "Validated", fr: "Validé" } },
    { level: "Erasmus", name: "Contemporary history and emerging debates", grade: { it: "Convalidato", en: "Validated", fr: "Validé" } },
    { level: "Erasmus", name: "Global Human Resources Management", grade: { it: "Convalidato", en: "Validated", fr: "Validé" } },
    { level: "Erasmus", name: "Cultural studies - Africa in global context", grade: { it: "Convalidato", en: "Validated", fr: "Validé" } },
    { level: "Erasmus", name: "Regional institutions and African business", grade: { it: "Convalidato", en: "Validated", fr: "Validé" } }
];

// ===== ROBOT LEARNING SUB-PROJECTS =====
const rlProjectsData = [
    { name: "Project Extension (Main)", desc: "Deep Reinforcement Learning extension using PPO and ADR for Sim-to-Real transfer.", link: "https://github.com/Johnnyprice29/project-extension" },
    { name: "RL Fundamentals", desc: "Foundational Reinforcement Learning exercises and environment implementations.", link: "https://github.com/Johnnyprice29/exercise1-rl-fundamentals" },
    { name: "Q-Learning", desc: "Implementation of Q-Learning algorithms for discrete state-space environments.", link: "https://github.com/Johnnyprice29/exercise2-qlearning" },
    { name: "Policy Gradients", desc: "Advanced Policy Gradient methods and neural network policy optimization.", link: "https://github.com/Johnnyprice29/exercise3-policygradient" },
    { name: "Sim-to-Real", desc: "Evaluation of domain randomization and system identification for robotic simulators.", link: "https://github.com/Johnnyprice29/exercise4-sim2real" }
];

// ===== RENDER EXAMS =====
function renderExams(lang) {
    const lists = {
        Triennale: document.getElementById('exams-triennale-list'),
        Magistrale: document.getElementById('exams-magistrale-list'),
        Erasmus: document.getElementById('exams-erasmus-list')
    };

    Object.values(lists).forEach(list => { if (list) list.innerHTML = ''; });

    examsData.forEach(exam => {
        const gradeStr = typeof exam.grade === 'object' ? exam.grade[lang] : exam.grade;
        const li = document.createElement('li');
        li.innerHTML = `<span>${exam.name}</span><span class="grade">${gradeStr}</span>`;
        if (lists[exam.level]) lists[exam.level].appendChild(li);
    });
}

// ===== SET LANGUAGE =====
function setLanguage(lang) {
    const t = translations[lang];
    if (!t) return;

    // Helper to update text
    const setText = (selector, text) => {
        document.querySelectorAll(selector).forEach(el => el.textContent = text);
    };

    // Nav
    setText('[data-i18n="nav.about"]', t.nav.about);
    setText('[data-i18n="nav.projects"]', t.nav.projects);
    setText('[data-i18n="nav.experience"]', t.nav.experience);
    setText('[data-i18n="nav.education"]', t.nav.education);
    setText('[data-i18n="nav.cv"]', t.nav.cv);

    // Hero
    setText('[data-i18n="hero.greeting"]', t.hero.greeting);
    setText('[data-i18n="hero.title"]', t.hero.title);
    setText('[data-i18n="hero.subtitle"]', t.hero.subtitle);
    setText('[data-i18n="hero.description"]', t.hero.description);
    setText('[data-i18n="hero.btnProjects"]', t.hero.btnProjects);
    setText('[data-i18n="hero.btnCV"]', t.hero.btnCV);

    // Section Titles
    setText('[data-i18n="section.projects"]', t.sectionTitles.projects);
    setText('[data-i18n="section.experience"]', t.sectionTitles.experience);
    setText('[data-i18n="section.education"]', t.sectionTitles.education);
    setText('[data-i18n="section.certs"]', t.sectionTitles.certs);
    setText('[data-i18n="section.skills"]', t.sectionTitles.skills);

    // Projects
    setText('[data-i18n="project.cardRL.title"]', t.projects.cardRL.title);
    setText('[data-i18n="project.cardRL.desc"]', t.projects.cardRL.desc);
    setText('[data-i18n="project.cardRL.link"]', t.projects.cardRL.link);
    setText('[data-i18n="project.card1.desc"]', t.projects.card1.desc);
    setText('[data-i18n="project.card1.link"]', t.projects.card1.link);
    setText('[data-i18n="project.card2.desc"]', t.projects.card2.desc);
    setText('[data-i18n="project.card2.link"]', t.projects.card2.link);
    setText('[data-i18n="project.card3.desc"]', t.projects.card3.desc);
    setText('[data-i18n="project.card3.link"]', t.projects.card3.link);
    setText('[data-i18n="project.card4.desc"]', t.projects.card4.desc);
    setText('[data-i18n="project.card4.link"]', t.projects.card4.link);

    // Experience
    setText('[data-i18n="exp.role"]', t.experience.role);
    setText('[data-i18n="exp.period"]', t.experience.period);
    const bullets = document.querySelector('.experience-bullets');
    if (bullets) {
        bullets.innerHTML = '';
        t.experience.bullets.forEach(b => {
            const li = document.createElement('li');
            li.textContent = b;
            bullets.appendChild(li);
        });
    }

    // Education
    setText('[data-i18n="edu.master"]', t.education.master);
    setText('[data-i18n="edu.bachelor"]', t.education.bachelor);
    setText('[data-i18n="edu.erasmusTitle"]', t.education.erasmusTitle);
    setText('[data-i18n="edu.erasmusPeriod"]', t.education.erasmusPeriod);
    setText('[data-i18n="edu.examsTitle"]', t.education.examsTitle);

    // CV
    setText('[data-i18n="cv.downloadTitle"]', t.cv.downloadTitle);
    setText('[data-i18n="cv.downloadDesc"]', t.cv.downloadDesc);
    setText('[data-i18n="cv.btnDownload"]', t.cv.btnDownload);

    // Certs
    setText('[data-i18n="certs.english.title"]', t.certs.english.title);
    setText('[data-i18n="certs.english.score"]', t.certs.english.score);
    setText('[data-i18n="certs.english.date"]', t.certs.english.date);
    setText('[data-i18n="certs.french.title"]', t.certs.french.title);
    setText('[data-i18n="certs.french.score"]', t.certs.french.score);
    setText('[data-i18n="certs.french.issuer"]', t.certs.french.issuer);
    setText('[data-i18n="certs.french.date"]', t.certs.french.date);

    // Skills
    setText('[data-i18n="skills.lang"]', t.skills.lang);
    setText('[data-i18n="skills.cloud"]', t.skills.cloud);
    setText('[data-i18n="skills.ai"]', t.skills.ai);
    setText('[data-i18n="skills.web"]', t.skills.web);
    setText('[data-i18n="skills.tools"]', t.skills.tools);
    setText('[data-i18n="skills.soft"]', t.skills.soft);

    // Footer
    setText('[data-i18n="footer.rights"]', `© 2025 Johnprice Osagie. ${t.footer.rights}`);

    // Update button states
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    // Render exams
    renderExams(lang);

    // Update CV download links based on language
    const cvSuffix = lang; // en, it, or fr
    const cvUrl = `documents/cv_johnprice_osagie_${cvSuffix}.pdf`;
    const cvLinkHero = document.getElementById('cv-link-hero');
    const cvLinkSection = document.getElementById('cv-link-section');
    if (cvLinkHero) cvLinkHero.href = cvUrl;
    if (cvLinkSection) cvLinkSection.href = cvUrl;

    // Update Modal Titles
    const modalTitle = document.querySelector('.modal-title');
    if (modalTitle) modalTitle.textContent = t.projects.cardRL.title;
}

// ===== MODAL LOGIC =====
function openRLModal() {
    const modal = document.getElementById('rl-modal');
    const body = document.body;
    const grid = document.getElementById('rl-modal-grid');

    if (!modal || !grid) return;

    grid.innerHTML = '';
    rlProjectsData.forEach(p => {
        const card = document.createElement('div');
        card.className = 'mini-project-card';
        card.innerHTML = `
            <h4>${p.name}</h4>
            <p>${p.desc}</p>
            <a href="${p.link}" target="_blank" class="project-link">Repo →</a>
        `;
        grid.appendChild(card);
    });

    modal.classList.add('active');
    body.style.overflow = 'hidden';
}

function closeRLModal() {
    const modal = document.getElementById('rl-modal');
    const body = document.body;
    if (modal) modal.classList.remove('active');
    body.style.overflow = 'auto';
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
    // Language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
    });

    // Modal close events
    const closeBtn = document.querySelector('.close-modal');
    if (closeBtn) closeBtn.addEventListener('click', closeRLModal);

    const modalOverlay = document.getElementById('rl-modal');
    if (modalOverlay) {
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) closeRLModal();
        });
    }

    // Robot Learning Explore Button
    const exploreBtn = document.querySelector('[data-rl-explore]');
    if (exploreBtn) {
        exploreBtn.addEventListener('click', (e) => {
            e.preventDefault();
            openRLModal();
        });
    }

    // Default language
    setLanguage('en');

    // Scroll animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.project-card, .experience-item, .education-degree, .skill-category, .cert-card, .cv-card').forEach(el => {
        el.classList.add('fade-in-section');
        observer.observe(el);
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });
});
