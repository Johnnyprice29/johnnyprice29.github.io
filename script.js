// Helper to Render Exams (Accessing global window.examsData)
function renderExams(lang = 'en') {
    const magistraleContainer = document.querySelector('#exams-magistrale-list');
    const triennaleContainer = document.querySelector('#exams-triennale-list');
    const erasmusContainer = document.querySelector('#exams-erasmus-list');

    // Debug check
    if (!window.examsData) {
        console.error("Exams Data not found!");
        return;
    }

    if (magistraleContainer) magistraleContainer.innerHTML = '';
    if (triennaleContainer) triennaleContainer.innerHTML = '';
    if (erasmusContainer) erasmusContainer.innerHTML = '';

    window.examsData.forEach(exam => {
        const li = document.createElement('li');

        let gradeText = exam.grade;
        if (typeof exam.grade === 'object') {
            gradeText = exam.grade[lang] || exam.grade['en'];
        }

        li.innerHTML = `<span>${exam.name}</span> <span class="grade">${gradeText}</span>`;

        if (exam.level === 'Magistrale' && magistraleContainer) {
            magistraleContainer.appendChild(li);
        } else if (exam.level === 'Triennale' && triennaleContainer) {
            triennaleContainer.appendChild(li);
        } else if (exam.level === 'Erasmus' && erasmusContainer) {
            erasmusContainer.appendChild(li);
        }
    });
}

// Language Switching Logic
let currentLang = 'en';

function setLanguage(lang) {
    currentLang = lang;

    // Access global translations
    const t = window.translations ? window.translations[lang] : null;
    if (!t) {
        console.error("Translations not found or language invalid:", lang);
        return;
    }

    // Re-render exams
    renderExams(lang);

    // Navigation
    document.querySelector('[data-i18n="nav.about"]').textContent = t.nav.about;
    document.querySelector('[data-i18n="nav.projects"]').textContent = t.nav.projects;
    document.querySelector('[data-i18n="nav.experience"]').textContent = t.nav.experience;
    document.querySelector('[data-i18n="nav.education"]').textContent = t.nav.education;
    document.querySelector('[data-i18n="nav.certs"]').textContent = t.nav.certs;
    if (t.nav.cv) {
        const cvEl = document.querySelector('[data-i18n="nav.cv"]');
        if (cvEl) cvEl.textContent = t.nav.cv;
    }

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
    // Projects Title
    const projTitle = document.querySelector('[data-i18n="section.projects"]');
    if (projTitle) projTitle.textContent = t.sectionTitles.projects;

    // Experience Title
    const expTitle = document.querySelector('[data-i18n="section.experience"]');
    if (expTitle) expTitle.textContent = t.sectionTitles.experience;

    // Education, Certs, Skills Titles
    document.querySelectorAll('[data-i18n="section.education"]').forEach(el => el.textContent = t.sectionTitles.education);
    document.querySelectorAll('[data-i18n="section.certs"]').forEach(el => el.textContent = t.sectionTitles.certs);
    document.querySelectorAll('[data-i18n="section.skills"]').forEach(el => el.textContent = t.sectionTitles.skills);

    // Projects Content
    document.querySelector('[data-i18n="project.card1.desc"]').textContent = t.projects.card1.desc;
    document.querySelector('[data-i18n="project.card1.link"]').textContent = t.projects.card1.link;
    document.querySelector('[data-i18n="project.card2.desc"]').textContent = t.projects.card2.desc;
    document.querySelector('[data-i18n="project.card2.link"]').textContent = t.projects.card2.link;
    document.querySelector('[data-i18n="project.card3.desc"]').textContent = t.projects.card3.desc;
    document.querySelector('[data-i18n="project.card3.link"]').textContent = t.projects.card3.link;
    document.querySelector('[data-i18n="project.card4.desc"]').textContent = t.projects.card4.desc;
    document.querySelector('[data-i18n="project.card4.link"]').textContent = t.projects.card4.link;

    // Experience Content
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

    // Education Content
    document.querySelector('[data-i18n="edu.master"]').textContent = t.education.master;
    document.querySelector('[data-i18n="edu.bachelor"]').textContent = t.education.bachelor;

    const eduErasmusTitle = document.querySelector('[data-i18n="edu.erasmusTitle"]');
    if (eduErasmusTitle) eduErasmusTitle.textContent = t.education.erasmusTitle;

    const eduErasmusPeriod = document.querySelector('[data-i18n="edu.erasmusPeriod"]');
    if (eduErasmusPeriod) eduErasmusPeriod.textContent = t.education.erasmusPeriod;

    document.querySelectorAll('.exam-group h4').forEach(h4 => h4.textContent = t.education.examsTitle);

    // Certifications
    document.querySelector('[data-i18n="certs.english.title"]').textContent = t.certs.english.title;
    document.querySelector('[data-i18n="certs.english.score"]').textContent = t.certs.english.score;
    document.querySelector('[data-i18n="certs.english.date"]').textContent = t.certs.english.date;

    document.querySelector('[data-i18n="certs.french.title"]').textContent = t.certs.french.title;
    document.querySelector('[data-i18n="certs.french.score"]').textContent = t.certs.french.score;
    document.querySelector('[data-i18n="certs.french.issuer"]').textContent = t.certs.french.issuer;
    document.querySelector('[data-i18n="certs.french.date"]').textContent = t.certs.french.date;


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

document.addEventListener('DOMContentLoaded', () => {
    // Check for existing Lang Switcher or inject
    const navbar = document.querySelector('.navbar .container');
    if (navbar && !navbar.querySelector('.lang-switcher')) {
        const langContainer = document.createElement('div');
        langContainer.className = 'lang-switcher';
        langContainer.innerHTML = `
            <button class="lang-btn" data-lang="en">EN</button>
            <button class="lang-btn" data-lang="it">IT</button>
            <button class="lang-btn" data-lang="fr">FR</button>
        `;
        navbar.appendChild(langContainer);
    }

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
    });

    // Default Load
    setLanguage('en');

    // Animations
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

    // Smooth scroll
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
