const ecoles = [
  {
    id: 1,
    nom: "ECOLE241",
    initiales: "241",
    ville: "Libreville",
    quartier: "Boulevard Triomphal",
    telephone: "+241 62 13 07 07",
    whatsapp: "+241 62 13 07 07",
    email: "contact@ecole241.org",
    adresse: "Boulevard Triomphal, Libreville",
    domaines: [
      "Développement Web",
      "Développement Mobile",
      "Référent Digital",
      "UI/UX Design"
    ],
    description:
      "ECOLE241 est une école gabonaise spécialisée dans les métiers du numérique. Elle forme les apprenants à travers une pédagogie orientée vers la pratique, les projets concrets et l'insertion professionnelle.",

    formations: [
      {
        icon: "fa-code",
        nom: "Développement Web",
        detail: "HTML, CSS, JavaScript, PHP, Laravel, bases de données"
      },
      {
        icon: "fa-mobile-screen",
        nom: "Développement Mobile",
        detail: "Conception et développement d'applications mobiles"
      },
      {
        icon: "fa-user-tie",
        nom: "Référent Digital",
        detail: "Gestion de projets numériques et transformation digitale"
      },
      {
        icon: "fa-palette",
        nom: "UI/UX Design",
        detail: "Conception d'interfaces et expérience utilisateur"
      }
    ]
  },

  {
    id: 2,
    nom: "Institut Africain d'Informatique (IAI)",
    initiales: "IAI",
    ville: "Libreville",
    quartier: "Charbonnages",
    telephone: "+241 60 44 68 56",
    whatsapp: "",
    email: "",
    adresse: "Quartier Charbonnages, Libreville",
    domaines: [
      "Génie logiciel",
      "Réseaux",
      "Télécommunications",
      "Systèmes d'information"
    ],
    description:
      "L'Institut Africain d'Informatique (IAI) est l'un des établissements de référence en Afrique centrale dans la formation des ingénieurs et spécialistes des technologies de l'information.",

    formations: [
      {
        icon: "fa-laptop-code",
        nom: "Génie logiciel",
        detail: "Analyse, conception et développement de logiciels"
      },
      {
        icon: "fa-network-wired",
        nom: "Réseaux",
        detail: "Administration des réseaux et infrastructures"
      },
      {
        icon: "fa-tower-cell",
        nom: "Télécommunications",
        detail: "Technologies de communication et réseaux"
      },
      {
        icon: "fa-database",
        nom: "Systèmes d'information",
        detail: "Conception et gestion des systèmes d'information"
      }
    ]
  },

  {
    id: 3,
    nom: "ESGIS Gabon",
    initiales: "ESGIS",
    ville: "Libreville",
    quartier: "Libreville",
    telephone: "+241 65 45 45 24",
    whatsapp: "",
    email: "",
    adresse: "Libreville",
    domaines: [
      "Génie logiciel",
      "Cybersécurité",
      "Intelligence artificielle",
      "Data Science",
      "Administration systèmes"
    ],
    description:
      "ESGIS Gabon est une école supérieure proposant plusieurs formations dans les technologies numériques, le génie logiciel et les systèmes d'information.",

    formations: [
      {
        icon: "fa-code",
        nom: "Génie logiciel",
        detail: "Développement d'applications et architecture logicielle"
      },
      {
        icon: "fa-shield-halved",
        nom: "Cybersécurité",
        detail: "Protection des systèmes et sécurité informatique"
      },
      {
        icon: "fa-brain",
        nom: "Intelligence artificielle",
        detail: "Machine Learning et Intelligence Artificielle"
      },
      {
        icon: "fa-chart-line",
        nom: "Data Science",
        detail: "Analyse et traitement des données"
      },
      {
        icon: "fa-server",
        nom: "Administration systèmes",
        detail: "Gestion des serveurs et infrastructures"
      }
    ]
  },

  {
    id: 4,
    nom: "CYBERSCHOOL",
    initiales: "CS",
    ville: "Libreville",
    quartier: "Nzeng-Ayong",
    telephone: "+241 07 41 86 71",
    whatsapp: "+241 07 41 86 71",
    email: "",
    adresse: "Échangeur de Nzeng-Ayong, Libreville",
    domaines: [
      "Développement Web",
      "Cybersécurité",
      "Infographie",
      "Marketing Digital",
      "Bureautique"
    ],
    description:
      "CYBERSCHOOL est un centre de formation orienté vers les compétences numériques et l'employabilité. Il propose des formations techniques ainsi que des modules dédiés au marketing digital et à la bureautique.",

    formations: [
      {
        icon: "fa-code",
        nom: "Développement Web",
        detail: "Création de sites web et applications"
      },
      {
        icon: "fa-shield-halved",
        nom: "Cybersécurité",
        detail: "Initiation à la sécurité informatique"
      },
      {
        icon: "fa-image",
        nom: "Infographie",
        detail: "Adobe Photoshop, Illustrator et création graphique"
      },
      {
        icon: "fa-bullhorn",
        nom: "Marketing Digital",
        detail: "Communication et stratégies digitales"
      },
      {
        icon: "fa-file-word",
        nom: "Bureautique",
        detail: "Word, Excel, PowerPoint"
      }
    ]
  },

  {
    id: 5,
    nom: "ESIITECH Gabon",
    initiales: "ESI",
    ville: "Libreville",
    quartier: "Rue Nkong Akore",
    telephone: "+241 76 23 76 38",
    whatsapp: "",
    email: "",
    adresse: "Rue Nkong Akore, Libreville",
    domaines: [
      "Génie logiciel",
      "Cybersécurité",
      "Cloud Computing",
      "Réseaux",
      "Développement Web"
    ],
    description:
      "ESIITECH Gabon forme des spécialistes dans plusieurs domaines des technologies de l'information, notamment le développement logiciel, le cloud et la cybersécurité.",

    formations: [
      {
        icon: "fa-code",
        nom: "Génie logiciel",
        detail: "Développement d'applications modernes"
      },
      {
        icon: "fa-cloud",
        nom: "Cloud Computing",
        detail: "Services cloud et virtualisation"
      },
      {
        icon: "fa-shield-halved",
        nom: "Cybersécurité",
        detail: "Sécurité des systèmes d'information"
      },
      {
        icon: "fa-network-wired",
        nom: "Réseaux",
        detail: "Administration des infrastructures réseau"
      },
      {
        icon: "fa-laptop-code",
        nom: "Développement Web",
        detail: "Développement Front-end et Back-end"
      }
    ]
  },

  {
    id: 6,
    nom: "Institut Facultaire d'Informatique et de Management (IFIM)",
    initiales: "IFIM",
    ville: "Libreville",
    quartier: "Ancien Waterman, Carrefour Nombakélé",
    telephone: "+241 66 25 53 11",
    whatsapp: "",
    email: "",
    adresse: "Ancien Waterman, Carrefour Nombakélé, Libreville",
    domaines: [
      "Informatique de gestion",
      "Développement",
      "Réseaux",
      "Management des SI"
    ],
    description:
      "L'IFIM associe les compétences informatiques aux disciplines du management afin de former des professionnels capables de gérer les systèmes d'information des entreprises.",

    formations: [
      {
        icon: "fa-chart-line",
        nom: "Informatique de gestion",
        detail: "Gestion des applications et bases de données"
      },
      {
        icon: "fa-code",
        nom: "Développement",
        detail: "Programmation et développement logiciel"
      },
      {
        icon: "fa-network-wired",
        nom: "Réseaux",
        detail: "Administration réseau"
      },
      {
        icon: "fa-briefcase",
        nom: "Management des SI",
        detail: "Pilotage des systèmes d'information"
      }
    ]
  },

  {
    id: 7,
    nom: "Higher Institute of Technology (HIT)",
    initiales: "HIT",
    ville: "Libreville",
    quartier: "Libreville",
    telephone: "+241 01 76 41 47",
    whatsapp: "",
    email: "",
    adresse: "Libreville",
    domaines: [
      "Informatique",
      "Développement",
      "Réseaux",
      "Maintenance"
    ],
    description:
      "Le Higher Institute of Technology (HIT) propose des formations techniques dans les domaines de l'informatique, des réseaux, du développement et de la maintenance des systèmes.",

    formations: [
      {
        icon: "fa-computer",
        nom: "Informatique",
        detail: "Fondamentaux de l'informatique"
      },
      {
        icon: "fa-code",
        nom: "Développement",
        detail: "Développement d'applications et programmation"
      },
      {
        icon: "fa-network-wired",
        nom: "Réseaux",
        detail: "Administration et maintenance des réseaux"
      },
      {
        icon: "fa-screwdriver-wrench",
        nom: "Maintenance",
        detail: "Maintenance des équipements informatiques"
      }
    ]
  }
];

  // Lire l'id dans l'URL
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get('id'));
  const ecole = ecoles.find(e => e.id === id);

 if (!ecole) {
    document.querySelector('.ecole-hero').style.display = 'none';
    document.querySelector('.btn-retour-wrapper').style.display = 'none';
    document.querySelector('.main-content').innerHTML = `
      <div style="grid-column:1/-1;text-align:center;padding:5rem 2rem;font-family:'Poppins',sans-serif;">
        <div style="font-size:3rem;color:#F5820D;margin-bottom:1rem;">
          <i class="fa-solid fa-circle-question"></i>
        </div>
        <h2 style="color:#1A3C6E;margin-bottom:0.75rem;">Aucune école sélectionnée</h2>
        <p style="color:#555;margin-bottom:2rem;">Choisis un établissement depuis l'annuaire pour voir sa fiche détaillée.</p>
        <a href="./annuaire.html" style="display:inline-block;background:#1A3C6E;color:#fff;padding:0.85rem 2rem;border-radius:8px;text-decoration:none;font-weight:600;">← Voir l'annuaire</a>
      </div>
    `;
} else {
    // Breadcrumb
    document.querySelector('.breadcrumb').innerHTML = `
      <a href="index.html">Accueil</a>
      <span>›</span>
      <a href="annuaire.html">Annuaire</a>
      <span>›</span>
      <span>${ecole.nom}</span>
    `;

    // Hero
    document.querySelector('.ecole-avatar-lg').textContent = ecole.initiales;
    document.querySelector('.ecole-hero-info h1').textContent = ecole.nom;
    document.querySelector('.ecole-hero-meta').innerHTML = `
      <span><i class="fa-solid fa-location-dot titre-icon"></i> ${ecole.ville}, ${ecole.quartier}</span>
      <span><i class="fa-solid fa-mobile-screen-button"></i> ${ecole.telephone}</span>
      <span><i class="fa-solid fa-clock"></i>Ouvert aujourd'hui</span>
    `;
    document.querySelector('.ecole-tags').innerHTML =
      ecole.domaines.map(d => `<span class="tag">${d}</span>`).join('');

    // Présentation
    document.querySelector('.content-card p').textContent = ecole.description;

    // Formations
    document.querySelector('.formations-list').innerHTML = ecole.formations.map(f => `
      <div class="formation-item">
        <div class="formation-icon"><i class="fas ${f.icon}"></i></div>
        <div class="formation-info">
          <h4>${f.nom}</h4>
          <span>${f.detail}</span>
        </div>
      </div>
    `).join('');

    // Sidebar contact
    document.querySelector('.contact-list').innerHTML = `
      <div class="contact-item">
        <div class="c-icon"><i class="fa-solid fa-location-dot"></i></div>
        <div class="c-info"><label>Adresse</label><p>${ecole.adresse}</p></div>
      </div>
      <div class="contact-item">
        <div class="c-icon"><i class="fa-solid fa-city"></i></div>
        <div class="c-info"><label>Ville / Quartier</label><p>${ecole.ville} — ${ecole.quartier}</p></div>
      </div>
      <div class="contact-item">
        <div class="c-icon"><i class="fa-solid fa-mobile-screen-button"></i></div>
        <div class="c-info"><label>Téléphone</label><a href="tel:${ecole.telephone}">${ecole.telephone}</a></div>
      </div>
      ${ecole.whatsapp ? `<div class="contact-item">
        <div class="c-icon"><i class="fa-solid fa-phone titre-icon"></i></div>
        <div class="c-info"><label>WhatsApp</label><a href="#">${ecole.whatsapp}</a></div>
      </div>` : ''}
      ${ecole.email ? `<div class="contact-item">
        <i class="fa-regular fa-envelope"></i>
        <div class="c-info"><label>Email</label><a href="mailto:${ecole.email}">${ecole.email}</a></div>
      </div>` : ''}
    `;

    // Écoles similaires — même domaine, école différente
const similaires = ecoles
  .filter(e => e.id !== ecole.id && e.domaines.some(d => ecole.domaines.includes(d)))
  .slice(0, 3);

document.querySelector('.similar-list').innerHTML = similaires.map(s => `
  <a href="detail.html?id=${s.id}" class="similar-item">
    <div class="similar-avatar">${s.initiales}</div>
    <div class="similar-info">
      <h4>${s.nom}</h4>
      <span>${s.ville} · ${s.quartier}</span>
    </div>
  </a>
`).join('');
  }
