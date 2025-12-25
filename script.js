/**
 * DATA CONSOLIDATION
 * All translations and data merged into one file for robustness.
 */

const translations = {
    it: {
        nav: {
            about: "Chi Sono",
            projects: "Progetti",
            experience: "Esperienza",
            education: "Istruzione",
            certs: "Certificazioni",
            cv: "CV & Download"
        },
        hero: {
            greeting: "Ciao! 👋",
            title: "Johnprice Osagie",
            subtitle: "Student AI · Cloud Engineer",
            description: "Studente magistrale in Ingegneria Informatica (AI) al Politecnico di Torino. Appassionato di infrastrutture cloud, automazione e machine learning. Attualmente lavoro come Cloud Consultant presso Reply Nimbus.",
            btnProjects: "Scopri Progetti"
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
            erasmusTitle: "Esperienza Internazionale - Erasmus",
            erasmusPeriod: "Troyes, Francia (Feb 2024 - Giu 2024)",
            examsTitle: "Esami & Corsi"
        },
        cv: {
            downloadTitle: "Profilo Professionale Completo",
            downloadDesc: "Scarica il mio CV aggiornato per una visione dettagliata del mio percorso accademico, competenze tecniche ed esperienze professionali.",
            btnDownload: "Scarica PDF"
        },
        certs: {
            english: {
                title: "Cambridge English: First (FCE)",
                score: "Grado A - Livello C1 (Punteggio 181)",
                date: "Dic 2020"
            },
            french: {
                title: "Certificato di Lingua Francese",
                score: "Livello B2 / B2+",
                issuer: "Y SCHOOLS, Francia",
                date: "Giu 2024"
            }
        },
        skills: {
            lang: "Linguaggi di Programmazione",
            cloud: "Cloud & Infrastructure",
            ai: "AI & Machine Learning",
            web: "Sviluppo Web",
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
            cv: "CV & Download"
        },
        hero: {
            greeting: "Hello! 👋",
            title: "Johnprice Osagie",
            subtitle: "AI Student · Cloud Engineer",
            description: "Master's student in Computer Engineering (AI) at Polytechnic University of Turin. Passionate about cloud infrastructure, automation, and machine learning. Currently working as a Cloud Consultant at Reply Nimbus.",
            btnProjects: "View Projects"
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
            erasmusTitle: "International Experience - Erasmus",
            erasmusPeriod: "Troyes, France (Feb 2024 - Jun 2024)",
            examsTitle: "Exams & Courses"
        },
        cv: {
            downloadTitle: "Full Professional Profile",
            downloadDesc: "Download my latest CV for a detailed overview of my academic background, technical skills, and professional experiences.",
            btnDownload: "Download PDF"
        },
        certs: {
            english: {
                title: "Cambridge English: First (FCE)",
                score: "Grade A - Level C1 (Score 181)",
                date: "Dec 2020"
            },
            french: {
                title: "French Language Certificate",
                score: "Level B2 / B2+",
                issuer: "Y SCHOOLS, France",
                date: "Jun 2024"
            }
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
            cv: "CV & Téléchargement"
        },
        hero: {
            greeting: "Bonjour! 👋",
            title: "Johnprice Osagie",
            subtitle: "Étudiant en IA · Ingénieur Cloud",
            description: "Étudiant en Master en Ingénierie Informatique (IA) à l'École Polytechnique de Turin. Passionné par l'infrastructure cloud, l'automatisation et le machine learning. Je travaille actuellement comme Consultant Cloud chez Reply Nimbus.",
            btnProjects: "Voir Projets"
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
                "Conception de pipelines de réconciliation de données en Python pour vérifier la cohérence tra l'infrastructure vCenter, Morpheus CMP et ServiceNow ITSM, assurant une intégrité des données à 99,9%",
                "Développement d'outils de vérification de connectività en masse basés sur Bash utilizzando netcat e ping per gli ambienti Windows/Linux, permettendo dei diagnostici rapidi dell'infrastruttura su più di 500 punti finali",
                "Mise en œuvre de la gestion des secrets (Cyphers) et de l'audit RBAC pour les plateformes cloud multi-locataires, renforçant la posture de sécurité et la conformité",
                "Rédaction d'une documentation technique complète pour les flux de travail automatisés, permettant le transfert de connaissances et réduisant le temps d'intégration de 40%"
            ]
        },
        education: {
            bachelor: "Licence en Ingénierie de Gestion",
            master: "Master en Ingénierie Informatique (IA)",
            erasmusTitle: "Expérience Internationale - Erasmus",
            erasmusPeriod: "Troyes, France (Fév 2024 - Juin 2024)",
            examsTitle: "Examens & Cours"
        },
        cv: {
            downloadTitle: "Profil Professionnel Complet",
            downloadDesc: "Téléchargez mon dernier CV pour un aperçu détaillé de mon parcours académique, de mes compétences techniques et de mes expériences professionnelles.",
            btnDownload: "Télécharger PDF"
        },
        certs: {
            english: {
                title: "Cambridge English: First (FCE)",
                score: "Grade A - Niveau C1 (Score 181)",
                date: "Déc 2020"
            },
            french: {
                title: "Certificat de Langue Française",
                score: "Niveau B2 / B2+",
                issuer: "Y SCHOOLS, France",
                date: "Juin 2024"
            }
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

const examsData = [
    // Triennale (PoliTo)
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
    { level: "Triennale", name: "Neuroengineering and active aging (Grandi Sfide)", grade: "26/30" },
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
    { level: "Triennale", name: "Progettazione di servizi web e reti di calcolatori", grade: "24/30" },
    { level: "Triennale", name: "Tecniche di programmazione", grade: "23/30" },
    { level: "Triennale", name: "Attività formative esterne all'Ateneo", grade: { it: "Superato", en: "Passed", fr: "Validé" } },
    { level: "Triennale", name: "Prova finale", grade: { it: "Superato", en: "Passed", fr: "Validé" } },

    // Magistrale (PoliTo)
    { level: "Magistrale", name: "Big data processing and analytics", grade: "26/30" },
    { level: "Magistrale", name: "Data Science e Tecnologie per le Basi di Dati", grade: "27/30" },
    { level: "Magistrale", name: "Applicazioni Web I", grade: "27/30" },
    { level: "Magistrale", name: "Tecnologie e servizi di rete", grade: "26/30" },
    { level: "Magistrale", name: "Ingegneria del software", grade: "30/30" },
    { level: "Magistrale", name: "Bioinformatics", grade: "29/30" },

    // Erasmus (Y SCHOOLS)
    { level: "Erasmus", name: "Entrepreneurship", grade: { it: "Convalidato", en: "Validated", fr: "Validé" } },
    { level: "Erasmus", name: "Français semestre 2", grade: { it: "Convalidato", en: "Validated", fr: "Validé" } },
    { level: "Erasmus", name: "Customer Relationship Management (CRM)", grade: { it: "Convalidato", en: "Validated", fr: "Validé" } },
    { level: "Erasmus", name: "Brand Management", grade: { it: "Convalidato", en: "Validated", fr: "Validé" } },
    { level: "Erasmus", name: "Salesforce Management", grade: { it: "Convalidato", en: "Validated", fr: "Validé" } },
    { level: "Erasmus", name: "Web Design Nocode", grade: { it: "Convalidato", en: "Validated", fr: "Validé" } },
    { level: "Erasmus", name: "Contemporary history and emerging debates", grade: { it: "Convalidato", en: "Validated", fr: "Validé" } },
    { level: "Erasmus", name: "Global Human Resources Management", grade: { it: "Convalidato", en: "Validated", fr: "Validé" } },
    { level: "Erasmus", name: "Cultural studies - Africa in global context", grade: { it: "Convalidato", en: "Validated", fr: "Validé" } },
    { level: "Erasmus", name: "Regional institutions and African business environment", grade: { it: "Convalidato", en: "Validated", fr: "Validé" } }
];

function renderExams(lang) {
    const listTriennale = document.getElementById('exams-triennale-list');
    const listMagistrale = document.getElementById('exams-magistrale-list');
    const listErasmus = document.getElementById('exams-erasmus-list');

    if (listTriennale) listTriennale.innerHTML = '';
    if (listMagistrale) listMagistrale.innerHTML = '';
    if (listErasmus) listErasmus.innerHTML = '';

    examsData.forEach(exam => {
        const gradeStr = (typeof exam.grade === 'object') ? exam.grade[lang] : exam.grade;
        const li = document.createElement('li');
        li.innerHTML = `<span>${exam.name}</span><span class="grade">${gradeStr}</span>`;

        if (exam.level === "Triennale" && listTriennale) listTriennale.appendChild(li);
        else if (exam.level === "Magistrale" && listMagistrale) listMagistrale.appendChild(li);
        else if (exam.level === "Erasmus" && listErasmus) listErasmus.appendChild(li);
    });
}

function setLanguage(lang) {
    const t = translations[lang];
    if (!t) return;

    // Nav
    document.querySelectorAll('[data-i18n="nav.about"]').forEach(el => el.textContent = t.nav.about);
    document.querySelectorAll('[data-i18n="nav.projects"]').forEach(el => el.textContent = t.nav.projects);
    document.querySelectorAll('[data-i18n="nav.experience"]').forEach(el => el.textContent = t.nav.experience);
    document.querySelectorAll('[data-i18n="nav.education"]').forEach(el => el.textContent = t.nav.education);
    document.querySelectorAll('[data-i18n="nav.cv"]').forEach(el => el.textContent = t.nav.cv);

    // Hero
    document.querySelectorAll('[data-i18n="hero.greeting"]').forEach(el => el.textContent = t.hero.greeting);
    document.querySelectorAll('[data-i18n="hero.title"]').forEach(el => el.textContent = t.hero.title);
    document.querySelectorAll('[data-i18n="hero.subtitle"]').forEach(el => el.textContent = t.hero.subtitle);
    document.querySelectorAll('[data-i18n="hero.description"]').forEach(el => el.textContent = t.hero.description);
    document.querySelectorAll('[data-i18n="hero.btnProjects"]').forEach(el => el.textContent = t.hero.btnProjects);

    // Section Titles
    document.querySelectorAll('[data-i18n="section.projects"]').forEach(el => el.textContent = t.sectionTitles.projects);
    document.querySelectorAll('[data-i18n="section.experience"]').forEach(el => el.textContent = t.sectionTitles.experience);
    document.querySelectorAll('[data-i18n="section.education"]').forEach(el => el.textContent = t.sectionTitles.education);
    document.querySelectorAll('[data-i18n="section.certs"]').forEach(el => el.textContent = t.sectionTitles.certs);
    document.querySelectorAll('[data-i18n="section.skills"]').forEach(el => el.textContent = t.sectionTitles.skills);

    // Projects
    document.querySelectorAll('[data-i18n="project.card1.desc"]').forEach(el => el.textContent = t.projects.card1.desc);
    document.querySelectorAll('[data-i18n="project.card1.link"]').forEach(el => el.textContent = t.projects.card1.link);
    document.querySelectorAll('[data-i18n="project.card2.desc"]').forEach(el => el.textContent = t.projects.card2.desc);
    document.querySelectorAll('[data-i18n="project.card2.link"]').forEach(el => el.textContent = t.projects.card2.link);
    document.querySelectorAll('[data-i18n="project.card3.desc"]').forEach(el => el.textContent = t.projects.card3.desc);
    document.querySelectorAll('[data-i18n="project.card3.link"]').forEach(el => el.textContent = t.projects.card3.link);
    document.querySelectorAll('[data-i18n="project.card4.desc"]').forEach(el => el.textContent = t.projects.card4.desc);
    document.querySelectorAll('[data-i18n="project.card4.link"]').forEach(el => el.textContent = t.projects.card4.link);

    // Experience
    document.querySelectorAll('[data-i18n="exp.role"]').forEach(el => el.textContent = t.experience.role);
    document.querySelectorAll('[data-i18n="exp.period"]').forEach(el => el.textContent = t.experience.period);
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
    document.querySelectorAll('[data-i18n="edu.master"]').forEach(el => el.textContent = t.education.master);
    document.querySelectorAll('[data-i18n="edu.bachelor"]').forEach(el => el.textContent = t.education.bachelor);
    document.querySelectorAll('[data-i18n="edu.erasmusTitle"]').forEach(el => el.textContent = t.education.erasmusTitle);
    document.querySelectorAll('[data-i18n="edu.erasmusPeriod"]').forEach(el => el.textContent = t.education.erasmusPeriod);
    document.querySelectorAll('[data-i18n="edu.examsTitle"]').forEach(el => el.textContent = t.education.examsTitle);

    // CV Section
    document.querySelectorAll('[data-i18n="cv.downloadTitle"]').forEach(el => el.textContent = t.cv.downloadTitle);
    document.querySelectorAll('[data-i18n="cv.downloadDesc"]').forEach(el => el.textContent = t.cv.downloadDesc);
    document.querySelectorAll('[data-i18n="cv.btnDownload"]').forEach(el => el.textContent = t.cv.btnDownload);

    // Certs
    document.querySelectorAll('[data-i18n="certs.english.title"]').forEach(el => el.textContent = t.certs.english.title);
    document.querySelectorAll('[data-i18n="certs.english.score"]').forEach(el => el.textContent = t.certs.english.score);
    document.querySelectorAll('[data-i18n="certs.english.date"]').forEach(el => el.textContent = t.certs.english.date);
    document.querySelectorAll('[data-i18n="certs.french.title"]').forEach(el => el.textContent = t.certs.french.title);
    document.querySelectorAll('[data-i18n="certs.french.score"]').forEach(el => el.textContent = t.certs.french.score);
    document.querySelectorAll('[data-i18n="certs.french.issuer"]').forEach(el => el.textContent = t.certs.french.issuer);
    document.querySelectorAll('[data-i18n="certs.french.date"]').forEach(el => el.textContent = t.certs.french.date);

    // Skills
    document.querySelectorAll('[data-i18n="skills.lang"]').forEach(el => el.textContent = t.skills.lang);
    document.querySelectorAll('[data-i18n="skills.cloud"]').forEach(el => el.textContent = t.skills.cloud);
    document.querySelectorAll('[data-i18n="skills.ai"]').forEach(el => el.textContent = t.skills.ai);
    document.querySelectorAll('[data-i18n="skills.web"]').forEach(el => el.textContent = t.skills.web);
    document.querySelectorAll('[data-i18n="skills.tools"]').forEach(el => el.textContent = t.skills.tools);
    document.querySelectorAll('[data-i18n="skills.soft"]').forEach(el => el.textContent = t.skills.soft);

    // Footer
    document.querySelectorAll('[data-i18n="footer.rights"]').forEach(el => el.textContent = `© 2025 Johnprice Osagie. ${t.footer.rights}`);

    // Update active button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    // Render exams for new language
    renderExams(lang);
}

document.addEventListener('DOMContentLoaded', () => {
    // Language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
    });

    // Initial render (English)
    setLanguage('en');

    // Scroll Animations
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
});
