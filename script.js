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
        sectionTitles: {
            projects: "Progetti",
            workProjects: "Progetti Professionali ed Enterprise",
            academicProjects: "Progetti Accademici e Personali",
            experience: "Esperienza",
            education: "Istruzione",
            certs: "Certificazioni",
            skills: "Competenze"
        },
        projects: {
            cardCMP: {
                title: "Enterprise CMP & Multi-Engine Automation",
                desc: "Ingegnerizzazione e automazione end-to-end del ciclo di vita per infrastrutture enterprise, Application Server e database multi-engine su AWS e piattaforma HPE Morpheus CMP.",
                link: "Case Study →"
            },
            card1: { desc: "Repository con esercizi e progetti del corso Advanced Web Applications 1 (2025).", link: "Visualizza →" },
            cardCS: {
                title: "Cybersecurity Master",
                desc: "Ecosistema interattivo di preparazione all'esame di Sicurezza dei Sistemi Informativi: quiz con 11 moduli, 161 flashcard (CyberFlash) e relazioni dei laboratori didattici.",
                link: "Apri →"
            },
            cardLLM: {
                title: "LLM for Software Engineering",
                desc: "Generazione collaborativa di test case tramite architetture multi-agente (Actor-Critic, Adversarial, Swarm) valutata su modelli Gemma e benchmark di code coverage.",
                link: "Codice GitHub →"
            },
            cardAML: {
                title: "Semantic Correspondence with Vision Transformers",
                desc: "Specializzazione del modello visual foundation DINOv2 per allineamenti precisi a livello di pixel (semantic correspondence) con tecniche PEFT (LoRA, BitFit) e Segment Anything (SAM).",
                link: "Codice GitHub →"
            },
            cardThesis: {
                badge: "🎓 Tesi Magistrale · IDSIA (USI-SUPSI) · In corso",
                title: "HRC Intelligent Design Assistant",
                desc: "Sviluppo di un assistente intelligente basato su LLM e simulazione 3D (Three.js/WebGL) per supportare la progettazione e validazione di celle industriali collaborative uomo-robot (HRC). Include architettura RAG su normative di sicurezza (ISO/TS 15066) ed ergonomia per self-planning e task allocation, e algoritmi per la validazione automatica di safety e tempi ciclo.",
                link: "In svolgimento →"
            },
            cardRL: {
                title: "Robot Learning Projects",
                desc: "Collezione completa di progetti ed esercizi per il corso di Robot Learning, inclusi Sim-to-Real extension, Q-Learning e Policy Gradients.",
                link: "Esplora →"
            },
            card3: {
                title: "Data Reconciliation Tools",
                desc: "Pipeline di riconciliazione dati in Python per verificare consistenza tra vCenter, Morpheus e ServiceNow ITSM, con tool Bash per verifica connettività di 500+ endpoint.",
                link: "In sviluppo →"
            },
            card4: { desc: "Libreria Node.js per convertire Markdown in PDF con supporto KaTeX e stili professionali.", link: "Visualizza →" },
            cardCDG: { desc: "CloudSketch AI: trasforma testo in diagrammi architetturali multi-cloud (AWS, Azure, GCP) usando Google Gemini. Include export draw.io e rendering SVG nativo.", link: "Lavori in corso (GitHub) →" },
            cardJSON: { desc: "Libreria Python avanzata per analizzare struttura, coerenza e qualità di JSON complessi. Integra collasso dinamico delle mappe (AI-Native) per ridurre l'uso di token negli LLM.", link: "Lavori in corso (GitHub) →" },
            cardDrone: { desc: "Progetto di Object Detection per l'agricoltura di precisione (es. raccolta frutta con droni), ottimizzato per inferenza su hardware edge e addestramento in cloud.", link: "Lavori in corso (GitHub) →" }
        },
        experience: {
            role: "Cloud Consultant (Part-time)",
            period: "2024 - Presente",
            bullets: [
                "Automazione flussi di provisioning utenti usando script Python per interagire con API Morpheus Data, riducendo overhead manuale dell'80%",
                "Ingegnerizzazione pipeline di riconciliazione dati in Python per verificare consistenza tra vCenter, Morpheus CMP e ServiceNow ITSM",
                "Sviluppo strumenti di verifica connettività massiva basati su Bash usando netcat e ping per ambienti Windows/Linux",
                "Implementazione Secret Management (Cyphers) e auditing RBAC per piattaforme cloud multi-tenant",
                "Sviluppo di task di automazione (Bash, PowerShell) e configurazioni Chef per il lifecycle management di Application Server e database multi-engine su HPE Morpheus CMP e AWS"
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
        sectionTitles: {
            projects: "Projects",
            workProjects: "Work-Related & Enterprise Projects",
            academicProjects: "Academic & Personal Projects",
            experience: "Experience",
            education: "Education",
            certs: "Certifications",
            skills: "Skills"
        },
        projects: {
            cardCMP: {
                title: "Enterprise CMP & Multi-Engine Automation",
                desc: "End-to-end lifecycle engineering and automation for enterprise infrastructure, Application Servers, and multi-engine databases on AWS and HPE Morpheus CMP.",
                link: "Case Study →"
            },
            card1: { desc: "Repository with exercises and projects for the Advanced Web Applications 1 course (2025).", link: "View →" },
            cardCS: {
                title: "Cybersecurity Master",
                desc: "Interactive exam preparation ecosystem for Information Systems Security: quiz with 11 modules, 161 flashcards (CyberFlash), and academic lab reports.",
                link: "Open →"
            },
            cardLLM: {
                title: "LLM for Software Engineering",
                desc: "Collaborative test case generation using multi-agent architectures (Actor-Critic, Adversarial, Swarm) evaluated on Gemma models and code coverage benchmarks.",
                link: "GitHub Source →"
            },
            cardAML: {
                title: "Semantic Correspondence with Vision Transformers",
                desc: "Specialization of the DINOv2 visual foundation model for robust and sub-pixel accurate semantic correspondence, using PEFT techniques (LoRA, BitFit) and Segment Anything (SAM).",
                link: "GitHub Source →"
            },
            cardThesis: {
                badge: "🎓 M.Sc. Thesis · IDSIA (USI-SUPSI) · In Progress",
                title: "HRC Intelligent Design Assistant",
                desc: "Development of an intelligent LLM-driven assistant and interactive 3D WebGL (Three.js) simulation for designing and validating human-robot collaborative (HRC) industrial cells. Integrates RAG over safety standards (ISO/TS 15066) and ergonomics for self-planning and task allocation, alongside automated safety, ergonomics, and cycle-time validation algorithms.",
                link: "In progress →"
            },
            cardRL: {
                title: "Robot Learning Projects",
                desc: "A comprehensive collection of projects and exercises for the Robot Learning course, including Sim-to-Real extension, Q-Learning, and Policy Gradients.",
                link: "Explore →"
            },
            card3: {
                title: "Data Reconciliation Tools",
                desc: "Python data reconciliation pipelines to verify consistency between vCenter, Morpheus, and ServiceNow ITSM, with Bash tools for connectivity checks across 500+ endpoints.",
                link: "In development →"
            },
            card4: { desc: "Node.js library to convert Markdown to PDF with KaTeX support and professional styling.", link: "View →" },
            cardCDG: { desc: "CloudSketch AI: translates natural language into interactive multi-cloud (AWS, Azure, GCP) architecture diagrams using Google Gemini, with draw.io export.", link: "Work in progress (GitHub) →" },
            cardJSON: { desc: "Advanced Python library to profile the structure and data quality of complex JSONs. Includes AI-native dynamic map collapse for massive LLM token reduction.", link: "Work in progress (GitHub) →" },
            cardDrone: { desc: "Object detection system for precision agriculture (e.g., drone fruit picking), optimized for high-speed edge inference and scalable cloud training.", link: "Work in progress (GitHub) →" }
        },
        experience: {
            role: "Cloud Consultant (Part-time)",
            period: "2024 - Present",
            bullets: [
                "Automated user provisioning workflows using Python scripting to interact with Morpheus Data API, reducing manual overhead by 80%",
                "Engineered data reconciliation pipelines in Python to verify consistency between vCenter, Morpheus CMP, and ServiceNow ITSM",
                "Developed Bash-based bulk connectivity verification tools using netcat and ping for Windows/Linux environments",
                "Implemented Secret Management (Cyphers) and RBAC auditing for multi-tenant cloud platforms",
                "Development of automation tasks (Bash, PowerShell) and Chef configurations for lifecycle management of Application Servers and multi-engine databases on HPE Morpheus CMP and AWS"
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
        sectionTitles: {
            projects: "Projets",
            workProjects: "Projets Professionnels & Entreprise",
            academicProjects: "Projets Académiques & Personnels",
            experience: "Expérience",
            education: "Formation",
            certs: "Certifications",
            skills: "Compétences"
        },
        projects: {
            cardCMP: {
                title: "Enterprise CMP & Multi-Engine Automation",
                desc: "Ingénierie et automatisation de bout en bout du cycle de vie des infrastructures d'entreprise, serveurs applicatifs et bases de données multi-moteurs sur AWS et HPE Morpheus CMP.",
                link: "Étude de Cas →"
            },
            card1: { desc: "Dépôt avec exercices et projets du cours Advanced Web Applications 1 (2025).", link: "Voir →" },
            cardCS: {
                title: "Cybersecurity Master",
                desc: "Ecosystème interactif de préparation à l'examen de Sécurité des Systèmes d'Information : quiz avec 11 modules, 161 flashcards (CyberFlash) et rapports de laboratoires académiques.",
                link: "Ouvrir →"
            },
            cardLLM: {
                title: "LLM for Software Engineering",
                desc: "Génération collaborative de cas de test via des architectures multi-agents (Actor-Critic, Adversarial, Swarm) évaluée sur des modèles Gemma et des benchmarks de couverture de code.",
                link: "Code GitHub →"
            },
            cardAML: {
                title: "Semantic Correspondence with Vision Transformers",
                desc: "Spécialisation du modèle visuel DINOv2 pour une correspondance sémantique robuste et précise au sous-pixel près, en utilisant les techniques PEFT (LoRA, BitFit) et Segment Anything (SAM).",
                link: "Code GitHub →"
            },
            cardThesis: {
                badge: "🎓 Thèse de Master · IDSIA (USI-SUPSI) · En cours",
                title: "HRC Intelligent Design Assistant",
                desc: "Développement d'un assistant intelligent basé sur LLM et simulation 3D WebGL (Three.js) pour la conception et validation de cellules industrielles collaboratives homme-robot (HRC). Comprend une architecture RAG sur les normes de sécurité (ISO/TS 15066) et d'ergonomie pour l'auto-planification, ainsi que des algorithmes de validation automatique de la sécurité et des temps de cycle.",
                link: "En cours →"
            },
            cardRL: {
                title: "Robot Learning Projects",
                desc: "Une collection complète de projets et d'exercices pour le cours Robot Learning, y compris l'extension Sim-to-Real, le Q-Learning et les Policy Gradients.",
                link: "Explorer →"
            },
            card3: {
                title: "Data Reconciliation Tools",
                desc: "Pipelines de réconciliation de données en Python pour vérifier la cohérence entre vCenter, Morpheus et ServiceNow ITSM, avec outils Bash pour tester la connectivité de 500+ endpoints.",
                link: "En développement →"
            },
            card4: { desc: "Bibliothèque Node.js pour convertir Markdown en PDF avec support KaTeX.", link: "Voir →" },
            cardCDG: { desc: "CloudSketch AI : transforme le texte en diagrammes d'architecture multi-cloud (AWS, Azure, GCP) avec Google Gemini et export draw.io.", link: "Travail en cours (GitHub) →" },
            cardJSON: { desc: "Bibliothèque Python avancée pour l'analyse de structure et la qualité des données JSON, avec réduction des tokens (AI-native) pour les LLM.", link: "Travail en cours (GitHub) →" },
            cardDrone: { desc: "Système de détection d'objets pour l'agriculture de précision par drone, optimisé pour l'inférence rapide sur matériel edge.", link: "Travail en cours (GitHub) →" }
        },
        experience: {
            role: "Consultant Cloud (Temps partiel)",
            period: "2024 - Présent",
            bullets: [
                "Automatisation des flux de provisionnement utilisateurs via scripts Python avec l'API Morpheus Data, réduisant les tâches manuelles de 80%",
                "Conception de pipelines de réconciliation de données en Python pour vCenter, Morpheus CMP et ServiceNow ITSM",
                "Développement d'outils de vérification de connectivité en masse basés sur Bash pour Windows/Linux",
                "Mise en œuvre de la gestion des secrets (Cyphers) et de l'audit RBAC pour les plateformes cloud",
                "Développement de tâches d'automatisation (Bash, PowerShell) et configurations Chef pour la gestion du cycle de vie des serveurs applicatifs et bases de données multi-moteurs sur HPE Morpheus CMP et AWS"
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
    { level: "Magistrale", name: { it: "Sicurezza dei Sistemi Informativi", en: "Information Systems Security", fr: "Sécurité des Systèmes d'Information" }, grade: "22/30" },
    { level: "Magistrale", name: "Big data processing and analytics", grade: "26/30" },
    { level: "Magistrale", name: "Data Science e Tecnologie per le Basi di Dati", grade: "27/30" },
    { level: "Magistrale", name: "Applicazioni Web I", grade: "27/30" },
    { level: "Magistrale", name: "Tecnologie e servizi di rete", grade: "26/30" },
    { level: "Magistrale", name: "Ingegneria del software", grade: "30/30" },
    { level: "Magistrale", name: "Bioinformatics", grade: "29/30" },
    { level: "Magistrale", name: "Large Language Models for Software Engineering (LLM4SE)", grade: "28/30" },
    { level: "Magistrale", name: "Advanced Machine Learning", grade: "26/30" },
    { level: "Magistrale", name: "Robot Learning", grade: "30/30" },
    { level: "Magistrale", name: { it: "Architetture dei sistemi di elaborazione", en: "Computer Architecture", fr: "Architecture des Systèmes Informatiques" }, grade: "22/30" },
    { level: "Magistrale", name: { it: "Programmazione di sistema", en: "System Programming", fr: "Programmation Système" }, grade: { it: "In corso", en: "In progress", fr: "En cours" } },
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

// ===== CS PROJECT DATA =====
const csProjectsData = [
    { name: "🎯 Cybersecurity Quiz", desc: "Interactive quiz with 11 thematic modules (Cryptography, Authentication, Protocols…) and error-tracking mode.", link: "https://johnnyprice29.github.io/cybersecurity/quiz_cybersecurity.html" },
    { name: "🃏 CyberFlash Flashcards", desc: "161 interactive flashcards on key topics: Sniffing, Spoofing, Hijacking, APT. Filterable by source.", link: "https://johnnyprice29.github.io/cybersecurity/flashcards_esami.html" },
    { name: "📄 Academic Lab Reports", desc: "Hub of cybersecurity lab reports (LaTeX + PDF): Operation Shady RAT, Web Authentication, and more.", link: "https://johnnyprice29.github.io/cybersecurity/academic_reports_it.html" }
];

// ===== CMP CASE STUDY DATA =====
const cmpModalData = {
    it: {
        title: "Enterprise CMP & Multi-Engine Automation",
        subtitle: "Ingegnerizzazione della piattaforma HPE Morpheus & Infrastruttura AWS per la governance e automazione del ciclo di vita enterprise",
        sections: [
            {
                badge: "Cloud & Orchestration",
                title: "Piattaforma & Governance Ibrida",
                desc: "Digitalizzazione ed ingegnerizzazione end-to-end della Cloud Management Platform (HPE Morpheus) su infrastruttura AWS. Sviluppo di task di automazione e workflow modulari in Bash e PowerShell integrati con Chef per la standardizzazione di ambienti enterprise Linux e Windows Server multi-tenant."
            },
            {
                badge: "Middleware & OS",
                title: "Application Server Lifecycle Management",
                desc: "Provisioning automatizzato e sicuro a partire da standard AMI AWS. Automazione delle procedure di manutenzione operativa (start, stop e restart controllato di NGINX, Apache HTTPD, HAProxy). Gestione dello storage a livello OS (partizionamento e formattazione volumi) e distribuzione pacchetti software via Chef cookbooks."
            },
            {
                badge: "Multi-Engine DB",
                title: "Database Operations & Lifecycle (Oracle, Exadata, MSSQL, PostgreSQL, MySQL, MongoDB)",
                desc: "Automazione completa del ciclo di vita dei database eterogenei: gestione della sicurezza (creazione/eliminazione utenti, lock/unlock e configurazione profili), controllo granulare degli accessi (ruoli, privilegi e grant DDL/DML), gestione operativa tablespace (Oracle/Exadata) e controllo di stato dei servizi DB senza riavvio delle macchine virtuali."
            },
            {
                badge: "Impact & Results",
                title: "Impatto Operativo & Risultati",
                desc: "Azzeramento delle attività operative manuali ripetitive, drastica riduzione del lead time di rilascio da diversi giorni a pochi minuti, eliminazione del margine di errore umano e piena conformità con le policy di sicurezza e governance enterprise."
            }
        ]
    },
    en: {
        title: "Enterprise CMP & Multi-Engine Automation",
        subtitle: "HPE Morpheus Platform Engineering & AWS Infrastructure for Enterprise Lifecycle Governance",
        sections: [
            {
                badge: "Cloud & Orchestration",
                title: "Hybrid Governance & CMP Platform",
                desc: "End-to-end engineering and automation of a Cloud Management Platform (HPE Morpheus) on AWS infrastructure. Development of modular automation tasks in Bash and PowerShell integrated with Chef to standardize multi-tenant Linux and Windows Server environments."
            },
            {
                badge: "Middleware & OS",
                title: "Application Server Lifecycle Management",
                desc: "Automated and secure provisioning from standard AWS AMIs. Automation of scheduled maintenance procedures (controlled start, stop, restart for NGINX, Apache HTTPD, HAProxy). OS-level volume formatting and software package configuration via Chef cookbooks."
            },
            {
                badge: "Multi-Engine DB",
                title: "Database Operations & Lifecycle (Oracle, Exadata, MSSQL, PostgreSQL, MySQL, MongoDB)",
                desc: "Complete lifecycle automation for heterogeneous databases: identity & access governance (user creation/deletion, lock/unlock, user profiles), fine-grained privileges/grants, tablespace management on Oracle/Exadata, and database service runtime controls without VM restarts."
            },
            {
                badge: "Impact & Results",
                title: "Operational Impact & Deliverables",
                desc: "Elimination of repetitive manual operations, drastic reduction in provisioning lead times from days to minutes, removal of human error risks, and enforcement of rigorous enterprise security and compliance standards."
            }
        ]
    },
    fr: {
        title: "Enterprise CMP & Multi-Engine Automation",
        subtitle: "Ingénierie de la plateforme HPE Morpheus & Infrastructure AWS pour la gouvernance d'entreprise",
        sections: [
            {
                badge: "Cloud & Orchestration",
                title: "Plateforme CMP & Gouvernance Hybride",
                desc: "Ingénierie et automatisation de bout en bout d'une plateforme de gestion cloud (HPE Morpheus) sur infrastructure AWS. Conception de tâches modulaires en Bash et PowerShell avec Chef pour standardiser les environnements Linux et Windows Server multi-tenant."
            },
            {
                badge: "Middleware & OS",
                title: "Gestion du cycle de vie des serveurs applicatifs",
                desc: "Provisionnement automatisé à partir d'AMI AWS standardisées. Automatisation de la maintenance opérationnelle (démarrage, arrêt et redémarrage contrôlés de NGINX, HTTPD, HAProxy). Gestion du stockage au niveau OS et déploiement de packages via des cookbooks Chef."
            },
            {
                badge: "Multi-Engine DB",
                title: "Opérations & Cycle de vie des bases de données (Oracle, Exadata, MSSQL, PostgreSQL, MySQL, MongoDB)",
                desc: "Automatisation complète du cycle de vie de bases de données hétérogènes : gestion des identités et des accès (création/suppression, verrouillage, profils), contrôle granulaire des privilèges (rôles, grants), gestion des tablespaces Oracle/Exadata et contrôle des services DB sans arrêt des VM."
            },
            {
                badge: "Impact & Results",
                title: "Impact opérationnel & Résultats",
                desc: "Élimination des interventions manuelles répétitives, réduction radicale des délais de livraison de plusieurs jours à quelques minutes, suppression des erreurs humaines et garantie de conformité stricte aux normes de sécurité d'entreprise."
            }
        ]
    }
};

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
        const nameStr = typeof exam.name === 'object' ? exam.name[lang] : exam.name;
        const li = document.createElement('li');
        li.innerHTML = `<span>${nameStr}</span><span class="grade">${gradeStr}</span>`;
        if (lists[exam.level]) lists[exam.level].appendChild(li);
    });
}

// ===== SET LANGUAGE =====
let currentLang = 'en';

function setLanguage(lang) {
    currentLang = lang;
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
    setText('[data-i18n="section.workProjects"]', t.sectionTitles.workProjects);
    setText('[data-i18n="section.academicProjects"]', t.sectionTitles.academicProjects);
    setText('[data-i18n="section.experience"]', t.sectionTitles.experience);
    setText('[data-i18n="section.education"]', t.sectionTitles.education);
    setText('[data-i18n="section.certs"]', t.sectionTitles.certs);
    setText('[data-i18n="section.skills"]', t.sectionTitles.skills);

    // Projects
    setText('[data-i18n="project.cardCMP.title"]', t.projects.cardCMP.title);
    setText('[data-i18n="project.cardCMP.desc"]', t.projects.cardCMP.desc);
    setText('[data-i18n="project.cardCMP.link"]', t.projects.cardCMP.link);
    setText('[data-i18n="project.cardRL.title"]', t.projects.cardRL.title);
    setText('[data-i18n="project.cardRL.desc"]', t.projects.cardRL.desc);
    setText('[data-i18n="project.cardRL.link"]', t.projects.cardRL.link);
    setText('[data-i18n="project.cardCS.title"]', t.projects.cardCS.title);
    setText('[data-i18n="project.cardCS.desc"]', t.projects.cardCS.desc);
    setText('[data-i18n="project.cardCS.link"]', t.projects.cardCS.link);
    setText('[data-i18n="project.cardLLM.title"]', t.projects.cardLLM.title);
    setText('[data-i18n="project.cardLLM.desc"]', t.projects.cardLLM.desc);
    setText('[data-i18n="project.cardLLM.link"]', t.projects.cardLLM.link);
    setText('[data-i18n="project.cardAML.title"]', t.projects.cardAML.title);
    setText('[data-i18n="project.cardAML.desc"]', t.projects.cardAML.desc);
    setText('[data-i18n="project.cardAML.link"]', t.projects.cardAML.link);
    if (t.projects.cardThesis) {
        setText('[data-i18n="project.cardThesis.badge"]', t.projects.cardThesis.badge);
        setText('[data-i18n="project.cardThesis.title"]', t.projects.cardThesis.title);
        setText('[data-i18n="project.cardThesis.desc"]', t.projects.cardThesis.desc);
        setText('[data-i18n="project.cardThesis.link"]', t.projects.cardThesis.link);
    }
    setText('[data-i18n="project.card1.desc"]', t.projects.card1.desc);
    setText('[data-i18n="project.card1.link"]', t.projects.card1.link);
    setText('[data-i18n="project.card3.title"]', t.projects.card3.title);
    setText('[data-i18n="project.card3.desc"]', t.projects.card3.desc);
    setText('[data-i18n="project.card3.link"]', t.projects.card3.link);
    setText('[data-i18n="project.card4.desc"]', t.projects.card4.desc);
    setText('[data-i18n="project.card4.link"]', t.projects.card4.link);
    if (t.projects.cardCDG) {
        setText('[data-i18n="project.cardCDG.desc"]', t.projects.cardCDG.desc);
        setText('[data-i18n="project.cardCDG.link"]', t.projects.cardCDG.link);
    }
    if (t.projects.cardJSON) {
        setText('[data-i18n="project.cardJSON.desc"]', t.projects.cardJSON.desc);
        setText('[data-i18n="project.cardJSON.link"]', t.projects.cardJSON.link);
    }
    if (t.projects.cardDrone) {
        setText('[data-i18n="project.cardDrone.desc"]', t.projects.cardDrone.desc);
        setText('[data-i18n="project.cardDrone.link"]', t.projects.cardDrone.link);
    }

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

    // Update active CMP modal if open
    const cmpModal = document.getElementById('cmp-modal');
    if (cmpModal && cmpModal.classList.contains('active')) {
        renderCMPModal(lang);
    }
}

// ===== MODAL LOGIC =====
function renderCMPModal(lang) {
    const data = cmpModalData[lang] || cmpModalData['en'];
    const titleEl = document.getElementById('cmp-modal-title');
    const subtitleEl = document.getElementById('cmp-modal-subtitle');
    const grid = document.getElementById('cmp-modal-grid');
    if (!titleEl || !subtitleEl || !grid) return;

    titleEl.textContent = data.title;
    subtitleEl.textContent = data.subtitle;
    grid.innerHTML = '';

    data.sections.forEach(sec => {
        const card = document.createElement('div');
        card.className = 'case-study-card';
        card.innerHTML = `
            <span class="case-study-card-badge">${sec.badge}</span>
            <h4>${sec.title}</h4>
            <p>${sec.desc}</p>
        `;
        grid.appendChild(card);
    });
}

function openCMPModal() {
    const modal = document.getElementById('cmp-modal');
    const body = document.body;
    if (!modal) return;
    renderCMPModal(currentLang);
    modal.classList.add('active');
    body.style.overflow = 'hidden';
}

function closeCMPModal() {
    const modal = document.getElementById('cmp-modal');
    const body = document.body;
    if (modal) modal.classList.remove('active');
    body.style.overflow = 'auto';
}

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

function openCSModal() {
    const modal = document.getElementById('cs-modal');
    const body = document.body;
    const grid = document.getElementById('cs-modal-grid');
    if (!modal || !grid) return;
    grid.innerHTML = '';
    csProjectsData.forEach(p => {
        const card = document.createElement('div');
        card.className = 'mini-project-card';
        card.innerHTML = `
            <h4>${p.name}</h4>
            <p>${p.desc}</p>
            <a href="${p.link}" target="_blank" class="project-link">Open →</a>
        `;
        grid.appendChild(card);
    });
    modal.classList.add('active');
    body.style.overflow = 'hidden';
}

function closeCSModal() {
    const modal = document.getElementById('cs-modal');
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

    // Cybersecurity Explore Button
    const csExploreBtn = document.querySelector('[data-cs-explore]');
    if (csExploreBtn) {
        csExploreBtn.addEventListener('click', (e) => {
            e.preventDefault();
            openCSModal();
        });
    }

    const csModal = document.getElementById('cs-modal');
    if (csModal) {
        csModal.addEventListener('click', (e) => {
            if (e.target === csModal) closeCSModal();
        });
    }
    const closeCSBtn = document.querySelector('.close-modal-cs');
    if (closeCSBtn) closeCSBtn.addEventListener('click', closeCSModal);

    // CMP Case Study Explore Button
    const cmpExploreBtn = document.querySelector('[data-cmp-explore]');
    if (cmpExploreBtn) {
        cmpExploreBtn.addEventListener('click', (e) => {
            e.preventDefault();
            openCMPModal();
        });
    }

    const cmpModal = document.getElementById('cmp-modal');
    if (cmpModal) {
        cmpModal.addEventListener('click', (e) => {
            if (e.target === cmpModal) closeCMPModal();
        });
    }
    const closeCMPBtn = document.querySelector('.close-modal-cmp');
    if (closeCMPBtn) closeCMPBtn.addEventListener('click', closeCMPModal);

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
            const href = this.getAttribute('href');
            if (href && href.length > 1) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
});
