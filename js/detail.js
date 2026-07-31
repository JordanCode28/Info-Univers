const ecoles = [
  {
    id: 1,
    nom: "ECOLE241",
    logo: "./assets/icon/logo-ecole241.jpg",
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
    logo: "./assets/icon/logo-IAI.png",
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
    nom: "ESSIG-USIA",
    initiales: "",
    logo: "./assets/icon/logo-ESSIG.png",
    ville: "Libreville",
    quartier: "Ozangué",
    telephone: "066 97 57 47",
    whatsapp: "",
    email: "essigcours@gmail.com",
    adresse: "Libreville",
    domaines: [
      "Big Data",
      "Cybersécurité",
      "Intelligence artificielle",
      "Développement Logiciel (Génie Logiciel)",
      "Réseaux & Systèmes"
    ],
    description:
      "Le Groupe ESSIG-USIA est une grande institution d'enseignement supérieur privé au Gabon, réputée pour ses formations professionnelles axées sur l'entrepreneuriat et l'insertion sur le marché de l'emploi. L'école se distingue par sa vision résumée par sa direction : « Un étudiant, une micro-entreprise ».",

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
        nom: "Réseaux & Systèmes",
        detail: "Gestion des serveurs et infrastructures"
      }
    ]
  },

  {
    id: 4,
    nom: "CYBERSCHOOL",
    initiales: "",
    logo: "./assets/icon/logo-cyberschool.png",
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
    initiales: "",
    logo: "./assets/icon/logo-ESIITECH.png",
    ville: "Libreville",
    quartier: "Rue Nkong Akore",
    telephone: "+241 76 23 76 38",
    whatsapp: "",
    email: "contact@esiitech-gabon.com",
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
    initiales: "",
    logo: "./assets/icon/logo-IFIM.png",
    ville: "Libreville",
    quartier: "Ancien Waterman, Carrefour Nombakélé",
    telephone: "+241 66 25 53 11",
    whatsapp: "",
    email: "infos@ifimgabon.com",
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
    nom: "Institut Supérieur de Technologie (IST)",
    initiales: "",
    logo: "./assets/icon/logo-IST.png",
    ville: "Libreville",
    quartier: "Bikélé",
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
      "L'Institut Supérieur de Technologie (IST) propose des formations techniques dans les domaines de l'informatique, des réseaux, du développement et de la maintenance des systèmes.",

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
  },
  {
    id: 8,
    nom: "École Supérieure des Technologies Informatiques de Management (ESTIM)",
    initiales: "",
    logo: "./assets/icon/logo-ESTIM.webp",
    ville: "Libreville",
    quartier: "Libreville",
    telephone: "+241 07 47 93 33",
    whatsapp: "",
    email: "",
    adresse: "Libreville",
    domaines: [
      "Informatique",
      "Technologies numériques",
      "Management informatique"
    ],
    description:
      "ESTIM propose des formations en informatique et en management numérique, avec un accent sur l'innovation et l'application pratique.",
    formations: [
      {
        icon: "fa-code",
        nom: "Informatique",
        detail: "Base de l'informatique et des technologies numériques"
      },
      {
        icon: "fa-network-wired",
        nom: "Technologies numériques",
        detail: "Outils et méthodologies pour les services numériques"
      },
      {
        icon: "fa-briefcase",
        nom: "Management informatique",
        detail: "Gestion des projets IT et des équipes techniques"
      }
    ]
  },
  {
    id: 9,
    nom: "ITA (Institut des Techniques Avancées)",
    initiales: "",
    logo: "./assets/icon/logo-ITA.png",
    ville: "Libreville",
    quartier: "Avenue de Cointet",
    telephone: "+241 01 74 69 51",
    whatsapp: "",
    email: "",
    adresse: "Avenue de Cointet, Libreville",
    domaines: [
      "Développement informatique",
      "Réseaux",
      "Administration systèmes",
      "Maintenance"
    ],
    description:
      "ITA prépare aux métiers de l'informatique avancée avec des parcours en développement, réseaux et administration systèmes.",
    formations: [
      {
        icon: "fa-laptop-code",
        nom: "Développement informatique",
        detail: "Programmation et création d'applications"
      },
      {
        icon: "fa-network-wired",
        nom: "Réseaux",
        detail: "Conception et administration d'infrastructures réseau"
      },
      {
        icon: "fa-server",
        nom: "Administration systèmes",
        detail: "Gestion de serveurs et d'environnements IT"
      }
    ]
  },
  {
    id: 10,
    nom: "ISTIN Gabon",
    initiales: "ISTIN",
    ville: "Libreville",
    quartier: "Plaine Niger",
    telephone: "+241 60 47 47 07",
    whatsapp: "",
    email: "",
    adresse: "Plaine Niger, Libreville",
    domaines: [
      "Informatique",
      "Réseaux",
      "Maintenance informatique"
    ],
    description:
      "ISTIN Gabon offre des programmes axés sur l'informatique, les réseaux et la maintenance des systèmes pour répondre aux besoins locaux.",
    formations: [
      {
        icon: "fa-code",
        nom: "Informatique",
        detail: "Compétences de base et avancées en technologies IT"
      },
      {
        icon: "fa-network-wired",
        nom: "Réseaux",
        detail: "Installation et administration de réseaux" 
      },
      {
        icon: "fa-screwdriver-wrench",
        nom: "Maintenance informatique",
        detail: "Réparation et support des équipements"
      }
    ]
  },
  {
    id: 11,
    nom: "Université Numérique du Gabon (UNG)",
    logo: "./assets/icon/logo-UNG.png",
    initiales: "",
    ville: "Libreville",
    quartier: "Derrière la prison",
    telephone: "+241 60 17 94 88",
    whatsapp: "",
    email: "contact@ung.ga",
    adresse: "Derrière la prison , Libreville",
    domaines: [
      "Développement Web"
    ],
    description:
      "L'UNG du Gabon est une université publique d'enseignement à distance axée sur le numérique éducatif. Elle offre des formations qualifiantes et professionnalisantes, avec des diplômes reconnus par l'Etat",
    formations: [
      {
        icon: "fa-code",
        nom: "Développement Web",
        detail: "Création de sites et applications web modernes"
      },
    ]
  },
  {
    id: 12,
    nom: "ACTE",
    initiales: "ACTE",
    ville: "Libreville",
    quartier: "Bord de mer / Lycée Léon Mba",
    telephone: "+241 66 53 34 12",
    whatsapp: "",
    email: "",
    adresse: "Bord de mer / Lycée Léon Mba, Libreville",
    domaines: [
      "Développement informatique",
      "Formation numérique",
      "Bureautique"
    ],
    description:
      "ACTE propose des formations pratiques en informatique, bureautique et outils numériques pour des parcours professionnalisants.",
    formations: [
      {
        icon: "fa-laptop-code",
        nom: "Développement informatique",
        detail: "Introduction au développement logiciel"
      },
      {
        icon: "fa-file-word",
        nom: "Bureautique",
        detail: "Maîtrise des outils bureautiques essentiels"
      },
      {
        icon: "fa-chart-line",
        nom: "Formation numérique",
        detail: "Compétences digitales pour le monde professionnel"
      }
    ]
  },
  {
    id: 13,
    nom: "Integral Technologies S.A.",
    initiales: "ITS",
    ville: "Libreville",
    quartier: "Zone Industrielle d'Oloumi",
    telephone: "+241 65 66 26 19",
    whatsapp: "",
    email: "",
    adresse: "Zone Industrielle d'Oloumi, Libreville",
    domaines: [
      "Réseaux Cisco",
      "Microsoft",
      "Administration systèmes",
      "Sécurité informatique"
    ],
    description:
      "Integral Technologies S.A. forme aux technologies Cisco, Microsoft et à la sécurité des systèmes d'information.",
    formations: [
      {
        icon: "fa-network-wired",
        nom: "Réseaux Cisco",
        detail: "Certifications et administration réseau Cisco"
      },
      {
        icon: "fa-windows",
        nom: "Microsoft",
        detail: "Solutions Microsoft pour entreprises"
      },
      {
        icon: "fa-shield-halved",
        nom: "Sécurité informatique",
        detail: "Protection et audit des infrastructures IT"
      }
    ]
  },
  {
    id: 14,
    nom: "CFP Informatique et Gestion",
    initiales: "CFP",
    ville: "Libreville",
    quartier: "Après Major Transport",
    telephone: "+241 77 56 34 89",
    whatsapp: "",
    email: "",
    adresse: "Après Major Transport, Libreville",
    domaines: [
      "Informatique de gestion",
      "Maintenance informatique",
      "Bureautique"
    ],
    description:
      "CFP Informatique et Gestion propose des cursus orientés vers la gestion informatique, la maintenance et les outils bureautiques.",
    formations: [
      {
        icon: "fa-chart-line",
        nom: "Informatique de gestion",
        detail: "Systèmes d'information pour la gestion d'entreprise"
      },
      {
        icon: "fa-screwdriver-wrench",
        nom: "Maintenance informatique",
        detail: "Entretien et dépannage des équipements"
      },
      {
        icon: "fa-file-word",
        nom: "Bureautique",
        detail: "Maîtrise des principaux outils de productivité"
      }
    ]
  }
];

function renderLogoAvatar(avatarElem, ecole) {
  if (!avatarElem) return;

  avatarElem.innerHTML = '';

  if (ecole.logo) {
    const image = document.createElement('img');
    image.src = ecole.logo;
    image.alt = `${ecole.nom} logo`;
    image.className = 'ecole-logo';
    avatarElem.appendChild(image);
  } else {
    avatarElem.textContent = ecole.initiales || '';
  }
}

function renderDetailPage() {
  const params = new URLSearchParams(window.location.search);
  const id = params.has('id') ? parseInt(params.get('id'), 10) : null;
  const ecole = ecoles.find(e => e.id === id);

  console.log('detail.js:', { id, ecole: ecole?.nom });

  if (!ecole) {
    const hero = document.querySelector('.ecole-hero');
    const retour = document.querySelector('.btn-retour-wrapper');
    const mainContent = document.querySelector('.main-content');

    if (hero) hero.style.display = 'none';
    if (retour) retour.style.display = 'none';
    if (mainContent) {
      mainContent.innerHTML = `
        <div style="grid-column:1/-1;text-align:center;padding:5rem 2rem;font-family:'Poppins',sans-serif;">
          <div style="font-size:3rem;color:#F5820D;margin-bottom:1rem;">
            <i class="fa-solid fa-circle-question"></i>
          </div>
          <h2 style="color:#1A3C6E;margin-bottom:0.75rem;">Aucune école sélectionnée</h2>
          <p style="color:#555;margin-bottom:2rem;">Choisis un établissement depuis l'annuaire pour voir sa fiche détaillée.</p>
          <a href="./annuaire.html" style="display:inline-block;background:#1A3C6E;color:#fff;padding:0.85rem 2rem;border-radius:8px;text-decoration:none;font-weight:600;">← Voir l'annuaire</a>
        </div>
      `;
    }
    return;
  }

  document.querySelector('.breadcrumb').innerHTML = `
    <a href="index.html">Accueil</a>
    <span>›</span>
    <a href="annuaire.html">Annuaire</a>
    <span>›</span>
    <span>${ecole.nom}</span>
  `;

  renderLogoAvatar(document.querySelector('.ecole-avatar-lg'), ecole);
  document.querySelector('.ecole-hero-info h1').textContent = ecole.nom;
  document.querySelector('.ecole-hero-meta').innerHTML = `
    <span><i class="fa-solid fa-location-dot titre-icon"></i> ${ecole.ville}, ${ecole.quartier}</span>
    <span><i class="fa-solid fa-mobile-screen-button"></i> ${ecole.telephone}</span>
    <span><i class="fa-solid fa-clock"></i>Ouvert aujourd'hui</span>
  `;
  document.querySelector('.ecole-tags').innerHTML = ecole.domaines.map(d => `<span class="tag">${d}</span>`).join('');

  const contentParagraphs = document.querySelectorAll('.content-card p');
  if (contentParagraphs.length > 0) {
    contentParagraphs[0].textContent = ecole.description;
    for (let i = 1; i < contentParagraphs.length; i++) {
      contentParagraphs[i].remove();
    }
  }

  document.querySelector('.formations-list').innerHTML = ecole.formations.map(f => `
    <div class="formation-item">
      <div class="formation-icon"><i class="fas ${f.icon}"></i></div>
      <div class="formation-info">
        <h4>${f.nom}</h4>
        <span>${f.detail}</span>
      </div>
    </div>
  `).join('');

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
      <div class="c-icon"><i class="fa-regular fa-envelope"></i></div>
      <div class="c-info"><label>Email</label><a href="mailto:${ecole.email}">${ecole.email}</a></div>
    </div>` : ''}
  `;

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

renderDetailPage();
