// Translations Configuration
const translations = {
    it: {
        nav: {
            about: "Chi Sono",
            projects: "Progetti",
            experience: "Esperienza",
            education: "Istruzione",
            certs: "Certificazioni",
            cv: "CV"
        },
        hero: {
            greeting: "Ciao! 👋",
            title: "Johnprice Osagie",
            subtitle: "AI Student · Cloud Engineer",
            description: "Studente magistrale in Ingegneria Informatica (AI) al Politecnico di Torino. Appassionato di cloud infrastructure, automation e machine learning. Attualmente lavoro come Cloud Consultant presso Reply Nimbus.",
            btnProjects: "Scopri Progetti",
            btnCV: "Scarica CV"
        },
        sectionTitles: {
            projects: "Progetti",
            experience: "Esperienza",
            education: "Istruzione",
            certs: "Certificazioni",
            skills: "Competenze"
        },
        projects: {
            card1: {
                desc: "Repository con esercizi e progetti del corso Advanced Web Applications 1 (2025).",
                link: "Visualizza →"
            },
            card2: {
                desc: "Script Python e Bash per automazione di infrastrutture cloud e gestione multi-tenant.",
                link: "In sviluppo →"
            },
            card3: {
                desc: "Strumenti per verificare consistenza dati tra vCenter, Morpheus e ServiceNow.",
                link: "In sviluppo →"
            },
            card4: {
                desc: "Libreria Node.js per convertire Markdown in PDF con supporto KaTeX e stili professionali.",
                link: "Visualizza →"
            }
        },
        experience: {
            role: "Cloud Consultant (Part-time)",
            period: "2023 - Presente",
            bullets: [
                "Automazione flussi di provisioning utenti usando script Python per interagire con API Morpheus Data, riducendo overhead manuale dell'80% in ambienti multi-tenant",
                "Ingegnerizzazione pipeline di riconciliazione dati in Python per verificare consistenza tra infrastruttura vCenter, Morpheus CMP e ServiceNow ITSM, garantendo integrità dati al 99.9%",
                "Sviluppo strumenti di verifica connettività massiva basati su Bash usando netcat e ping per ambienti Windows/Linux, abilitando diagnostica rapida su 500+ endpoint",
                "Implementazione Secret Management (Cyphers) e auditing RBAC per piattaforme cloud multi-tenant, rafforzando la postura di sicurezza e compliance",
                "Redazione documentazione tecnica completa per workflow automatizzati, abilitando trasferimento conoscenza e riducendo tempo di onboarding del 40%"
            ]
        },
        education: {
            bachelor: "Triennale in Ingegneria Gestionale",
            master: "Magistrale in Ingegneria Informatica (AI)",
            erasmus: "Erasmus Exchange (Feb 2024 - Giu 2024)",
            examsTitle: "Esami & Corsi",
            average: "Media",
            finalGrade: "Voto finale"
        },
        skills: {
            lang: "Linguaggi di Programmazione",
            cloud: "Cloud & Infrastructure",
            ai: "AI & Machine Learning",
            web: "Web Development",
            tools: "Strumenti & Piattaforme",
            soft: "Soft Skills"
        },
        footer: {
            rights: "Tutti i diritti riservati."
        }
    },
    en: {
        nav: {
            about: "About Me",
            projects: "Projects",
            experience: "Experience",
            education: "Education",
            certs: "Certifications",
            cv: "CV"
        },
        hero: {
            greeting: "Hello! 👋",
            title: "Johnprice Osagie",
            subtitle: "AI Student · Cloud Engineer",
            description: "Master's student in Computer Engineering (AI) at Polytechnic University of Turin. Passionate about cloud infrastructure, automation, and machine learning. Currently working as a Cloud Consultant at Reply Nimbus.",
            btnProjects: "View Projects",
            btnCV: "Download CV"
        },
        sectionTitles: {
            projects: "Projects",
            experience: "Experience",
            education: "Education",
            certs: "Certifications",
            skills: "Skills"
        },
        projects: {
            card1: {
                desc: "Repository with exercises and projects for the Advanced Web Applications 1 course (2025).",
                link: "View →"
            },
            card2: {
                desc: "Python and Bash scripts for cloud infrastructure automation and multi-tenant management.",
                link: "In development →"
            },
            card3: {
                desc: "Tools to verify data consistency between vCenter, Morpheus, and ServiceNow.",
                link: "In development →"
            },
            card4: {
                desc: "Node.js library to convert Markdown to PDF with KaTeX support and professional styling.",
                link: "View →"
            }
        },
        experience: {
            role: "Cloud Consultant (Part-time)",
            period: "2023 - Present",
            bullets: [
                "Automated user provisioning workflows using Python scripting to interact with Morpheus Data API, reducing manual overhead by 80% across multi-tenant environments",
                "Engineered data reconciliation pipelines in Python to verify consistency between vCenter infrastructure, Morpheus CMP, and ServiceNow ITSM, ensuring 99.9% data integrity",
                "Developed Bash-based bulk connectivity verification tools using netcat and ping for Windows/Linux environments, enabling rapid infrastructure diagnostics across 500+ endpoints",
                "Implemented Secret Management (Cyphers) and RBAC auditing for multi-tenant cloud platforms, strengthening security posture and compliance",
                "Authored comprehensive technical documentation for automated workflows, enabling knowledge transfer and reducing onboarding time by 40%"
            ]
        },
        education: {
            bachelor: "Bachelor in Management Engineering",
            master: "Master in Computer Engineering (AI)",
            erasmus: "Erasmus Exchange (Feb 2024 - Jun 2024)",
            examsTitle: "Exams & Courses",
            average: "GPA",
            finalGrade: "Final Grade"
        },
        skills: {
            lang: "Programming Languages",
            cloud: "Cloud & Infrastructure",
            ai: "AI & Machine Learning",
            web: "Web Development",
            tools: "Tools & Platforms",
            soft: "Soft Skills"
        },
        footer: {
            rights: "All rights reserved."
        }
    },
    fr: {
        nav: {
            about: "À propos",
            projects: "Projets",
            experience: "Expérience",
            education: "Formation",
            certs: "Certifications",
            cv: "CV"
        },
        hero: {
            greeting: "Bonjour! 👋",
            title: "Johnprice Osagie",
            subtitle: "Étudiant en IA · Ingénieur Cloud",
            description: "Étudiant en Master en Ingénierie Informatique (IA) à l'École Polytechnique de Turin. Passionné par l'infrastructure cloud, l'automatisation et le machine learning. Je travaille actuellement comme Consultant Cloud chez Reply Nimbus.",
            btnProjects: "Voir Projets",
            btnCV: "Télécharger CV"
        },
        sectionTitles: {
            projects: "Projets",
            experience: "Expérience",
            education: "Formation",
            certs: "Certifications",
            skills: "Compétences"
        },
        projects: {
            card1: {
                desc: "Dépôt avec exercices et projets du cours Advanced Web Applications 1 (2025).",
                link: "Voir →"
            },
            card2: {
                desc: "Scripts Python et Bash pour l'automatisation de l'infrastructure cloud et la gestion multi-locataire.",
                link: "En développement →"
            },
            card3: {
                desc: "Outils pour vérifier la cohérence des données entre vCenter, Morpheus et ServiceNow.",
                link: "En développement →"
            },
            card4: {
                desc: "Bibliothèque Node.js pour convertir Markdown en PDF avec support KaTeX et style professionnel.",
                link: "Voir →"
            }
        },
        experience: {
            role: "Consultant Cloud (Temps partiel)",
            period: "2023 - Présent",
            bullets: [
                "Automatisation des flux de travail de provisionnement des utilisateurs à l'aide de scripts Python pour interagir avec l'API Morpheus Data, réduisant les tâches manuelles de 80% dans des environnements multi-locataires",
                "Conception de pipelines de réconciliation de données en Python pour vérifier la cohérence entre l'infrastructure vCenter, Morpheus CMP et ServiceNow ITSM, assurant une intégrité des données à 99,9%",
                "Développement d'outils de vérification de connectivité en masse basés sur Bash utilisant netcat et ping pour les environnements Windows/Linux, permettant des diagnostics rapides de l'infrastructure sur plus de 500 points finaux",
                "Mise en œuvre de la gestion des secrets (Cyphers) et de l'audit RBAC pour les plateformes cloud multi-locataires, renforçant la posture de sécurité et la conformité",
                "Rédaction d'une documentation technique complète pour les flux de travail automatisés, permettant le transfert de connaissances et réduisant le temps d'intégration de 40%"
            ]
        },
        education: {
            bachelor: "Licence en Ingénierie de Gestion",
            master: "Master en Ingénierie Informatique (IA)",
            erasmus: "Échange Erasmus (Fév 2024 - Juin 2024)",
            examsTitle: "Examens & Cours",
            average: "Moyenne",
            finalGrade: "Note finale"
        },
        skills: {
            lang: "Langages de Programmation",
            cloud: "Cloud & Infrastructure",
            ai: "IA & Machine Learning",
            web: "Développement Web",
            tools: "Outils & Plateformes",
            soft: "Soft Skills"
        },
        footer: {
            rights: "Tous droits réservés."
        }
    }
};

// Exam Data
const examsData = [
    // Triennale
    { level: "Triennale", name: "Lingua inglese I livello", grade: "superato", uni: "polito" },
    { level: "Triennale", name: "Analisi matematica I", grade: "28/30", uni: "polito" },
    { level: "Triennale", name: "Informatica", grade: "28/30", uni: "polito" },
    { level: "Triennale", name: "Chimica", grade: "21/30", uni: "polito" },
    { level: "Triennale", name: "Algebra lineare e geometria", grade: "21/30", uni: "polito" },
    { level: "Triennale", name: "Fisica I", grade: "25/30", uni: "polito" },
    { level: "Triennale", name: "Economia e organizzazione aziendale", grade: "27/30", uni: "polito" },
    { level: "Triennale", name: "Basi di dati", grade: "21/30", uni: "polito" },
    { level: "Triennale", name: "Statistica", grade: "23/30", uni: "polito" },
    { level: "Triennale", name: "Analisi matematica II", grade: "21/30", uni: "polito" },
    { level: "Triennale", name: "Neuroengineering and active aging (Grandi Sfide - Salute)", grade: "26/30", uni: "polito" },
    { level: "Triennale", name: "Sistemi di produzione", grade: "27/30", uni: "polito" },
    { level: "Triennale", name: "Sistemi elettrici industriali", grade: "29/30", uni: "polito" },
    { level: "Triennale", name: "Ricerca operativa", grade: "18/30", uni: "polito" },
    { level: "Triennale", name: "Tempi difficili - Guerra, Pace", grade: "superato", uni: "polito" },
    { level: "Triennale", name: "Fisica II", grade: "26/30", uni: "polito" },
    { level: "Triennale", name: "Sistemi telematici", grade: "18/30", uni: "polito" },
    { level: "Triennale", name: "Elementi di diritto privato", grade: "20/30", uni: "polito" },
    { level: "Triennale", name: "Programmazione a oggetti", grade: "30/30", uni: "polito" },
    { level: "Triennale", name: "Introduzione alle Applicazioni Web", grade: "26/30", uni: "polito" },
    { level: "Triennale", name: "Programmazione e gestione della produzione", grade: "29/30", uni: "polito" },
    { level: "Triennale", name: "Progettazione di servizi web e reti di calcolatori", grade: "24/30", uni: "polito" },
    { level: "Triennale", name: "Tecniche di programmazione", grade: "23/30", uni: "polito" },
    { level: "Triennale", name: "Attività formative esterne all'Ateneo", grade: "superato", uni: "polito" },
    { level: "Triennale", name: "Prova finale", grade: "superato", uni: "polito" },

    // Magistrale (PoliTo)
    { level: "Magistrale", name: "Big data processing and analytics", grade: "26/30", uni: "polito" },
    { level: "Magistrale", name: "Data Science e Tecnologie per le Basi di Dati", grade: "27/30", uni: "polito" },
    { level: "Magistrale", name: "Applicazioni Web I", grade: "27/30", uni: "polito" },
    { level: "Magistrale", name: "Tecnologie e servizi di rete", grade: "26/30", uni: "polito" },
    { level: "Magistrale", name: "Ingegneria del software", grade: "30/30", uni: "polito" },
    { level: "Magistrale", name: "Bioinformatics", grade: "29/30", uni: "polito" },

    // Magistrale (Y SCHOOLS - Erasmus)
    { level: "Magistrale", name: "Entrepreneurship", grade: "Validated", uni: "yschools" },
    { level: "Magistrale", name: "Français semestre 2", grade: "Validated", uni: "yschools" },
    { level: "Magistrale", name: "Customer Relationship Management (CRM)", grade: "Validated", uni: "yschools" },
    { level: "Magistrale", name: "Brand Management", grade: "Validated", uni: "yschools" },
    { level: "Magistrale", name: "Salesforce Management", grade: "Validated", uni: "yschools" },
    { level: "Magistrale", name: "Web Design Nocode", grade: "Validated", uni: "yschools" },
    { level: "Magistrale", name: "Contemporary history and emerging debates", grade: "Validated", uni: "yschools" },
    { level: "Magistrale", name: "Global Human Resources Management", grade: "Validated", uni: "yschools" },
    { level: "Magistrale", name: "Cultural studies - Africa in global context", grade: "Validated", uni: "yschools" },
    { level: "Magistrale", name: "Regional institutions and African business environment", grade: "Validated", uni: "yschools" }
];

// Helper to Render Exams
function renderExams() {
    const magistraleContainer = document.querySelector('#exams-magistrale-list');
    const triennaleContainer = document.querySelector('#exams-triennale-list');

    if (magistraleContainer) magistraleContainer.innerHTML = '';
    if (triennaleContainer) triennaleContainer.innerHTML = '';

    examsData.forEach(exam => {
        const li = document.createElement('li');

        let uniTag = '';
        if (exam.uni === 'yschools') {
            uniTag = '<span class="uni-badge yschools">Y SCHOOLS</span>';
        }

        li.innerHTML = `<span>${exam.name} ${uniTag}</span> <span class="grade">${exam.grade}</span>`;

        if (exam.level === 'Magistrale' && magistraleContainer) {
            magistraleContainer.appendChild(li);
        } else if (exam.level === 'Triennale' && triennaleContainer) {
            triennaleContainer.appendChild(li);
        }
    });
}

// Language Switching Logic
let currentLang = 'en'; // Default

function setLanguage(lang) {
    currentLang = lang;
    const t = translations[lang];

    // Navigation
    document.querySelector('[data-i18n="nav.about"]').textContent = t.nav.about;
    document.querySelector('[data-i18n="nav.projects"]').textContent = t.nav.projects;
    document.querySelector('[data-i18n="nav.experience"]').textContent = t.nav.experience;
    document.querySelector('[data-i18n="nav.education"]').textContent = t.nav.education;
    document.querySelector('[data-i18n="nav.certs"]').textContent = t.nav.certs;
    if (t.nav.cv) document.querySelector('[data-i18n="nav.cv"]').textContent = t.nav.cv; // Button might replace link

    // Hero
    document.querySelector('[data-i18n="hero.greeting"]').textContent = t.hero.greeting;
    document.querySelector('[data-i18n="hero.title"]').textContent = t.hero.title;
    document.querySelector('[data-i18n="hero.subtitle"]').textContent = t.hero.subtitle;
    document.querySelector('[data-i18n="hero.description"]').textContent = t.hero.description;

    // Updates buttons inside hero
    const btnProjects = document.querySelector('[data-i18n="hero.btnProjects"]');
    if (btnProjects) btnProjects.textContent = t.hero.btnProjects;

    const btnCV = document.querySelector('[data-i18n="hero.btnCV"]');
    if (btnCV) btnCV.textContent = t.hero.btnCV;

    // Section Titles
    document.querySelectorAll('[data-i18n="section.projects"]').forEach(el => el.textContent = t.sectionTitles.projects);
    document.querySelectorAll('[data-i18n="section.experience"]').forEach(el => el.textContent = t.sectionTitles.experience);
    document.querySelectorAll('[data-i18n="section.education"]').forEach(el => el.textContent = t.sectionTitles.education);
    document.querySelectorAll('[data-i18n="section.certs"]').forEach(el => el.textContent = t.sectionTitles.certs);
    document.querySelectorAll('[data-i18n="section.skills"]').forEach(el => el.textContent = t.sectionTitles.skills);

    // Projects
    document.querySelector('[data-i18n="project.card1.desc"]').textContent = t.projects.card1.desc;
    document.querySelector('[data-i18n="project.card1.link"]').textContent = t.projects.card1.link;
    document.querySelector('[data-i18n="project.card2.desc"]').textContent = t.projects.card2.desc;
    document.querySelector('[data-i18n="project.card2.link"]').textContent = t.projects.card2.link;
    document.querySelector('[data-i18n="project.card3.desc"]').textContent = t.projects.card3.desc;
    document.querySelector('[data-i18n="project.card3.link"]').textContent = t.projects.card3.link;
    document.querySelector('[data-i18n="project.card4.desc"]').textContent = t.projects.card4.desc;
    document.querySelector('[data-i18n="project.card4.link"]').textContent = t.projects.card4.link;

    // Experience
    document.querySelector('[data-i18n="exp.role"]').textContent = t.experience.role;
    document.querySelector('[data-i18n="exp.period"]').textContent = t.experience.period;

    const bulletList = document.querySelector('.experience-bullets');
    if (bulletList) {
        bulletList.innerHTML = '';
        t.experience.bullets.forEach(bullet => {
            const li = document.createElement('li');
            li.textContent = bullet;
            bulletList.appendChild(li);
        });
    }

    // Education
    document.querySelector('[data-i18n="edu.master"]').textContent = t.education.master;
    document.querySelector('[data-i18n="edu.bachelor"]').textContent = t.education.bachelor;

    const eduErasmus = document.querySelector('[data-i18n="edu.erasmus"]');
    if (eduErasmus) eduErasmus.textContent = t.education.erasmus;

    // Update headers inside exam groups
    document.querySelectorAll('.exam-group h4').forEach(h4 => h4.textContent = t.education.examsTitle);

    // Skills titles
    const skillTitles = document.querySelectorAll('.skill-category h3');
    if (skillTitles.length >= 6) {
        skillTitles[0].textContent = t.skills.lang;
        skillTitles[1].textContent = t.skills.cloud;
        skillTitles[2].textContent = t.skills.ai;
        skillTitles[3].textContent = t.skills.web;
        skillTitles[4].textContent = t.skills.tools;
        skillTitles[5].textContent = t.skills.soft;
    }

    // Footer
    document.querySelector('[data-i18n="footer.rights"]').textContent = `© 2025 Johnprice Osagie. ${t.footer.rights}`;

    // Update active button state
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });
}

// Initialization and Render logic remains same...
document.addEventListener('DOMContentLoaded', () => {
    renderExams();

    const langContainer = document.createElement('div');
    langContainer.className = 'lang-switcher';
    langContainer.innerHTML = `
        <button class="lang-btn" data-lang="en">EN</button>
        <button class="lang-btn" data-lang="it">IT</button>
        <button class="lang-btn" data-lang="fr">FR</button>
    `;

    const navbar = document.querySelector('.navbar .container');
    // Check if it already has one (hardcoded in HTML now)
    if (navbar && !navbar.querySelector('.lang-switcher')) {
        navbar.appendChild(langContainer);
    } else {
        // If hardcoded, we attach listeners to existing buttons
    }

    // Event Listeners for Lang Buttons (covers both injected and hardcoded)
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
    });

    setLanguage('en');

    // Animations...
    const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.project-card, .experience-item, .education-degree, .skill-category, .cert-card').forEach(el => {
        el.classList.add('fade-in-section');
        observer.observe(el);
    });

    // Smooth scroll...
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
});
