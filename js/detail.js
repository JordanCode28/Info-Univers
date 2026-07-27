
  // Données de toutes les écoles
  const ecoles = [
    {
      id: 1,
      nom: "Institut Numérique de Libreville",
      initiales: "IN",
      ville: "Libreville",
      quartier: "Akanda",
      telephone: "+241 74 123 456",
      whatsapp: "+241 07X XXX XXX",
      email: "contact@inl.ga",
      adresse: "Rue des Cocotiers, Akanda",
      domaines: ["Développement Web", "Cybersécurité", "Web Design"],
      description: "L'Institut Numérique de Libreville est un centre de formation spécialisé dans les métiers du numérique, situé dans le quartier d'Akanda à Libreville.",
      formations: [
        { icon: "fa-code", nom: "Développement Web", detail: "HTML, CSS, JavaScript, PHP · Durée : 6 mois" },
        { icon: "fa-shield-halved", nom: "Cybersécurité", detail: "Sécurité réseau, ethical hacking · Durée : 4 mois" },
        { icon: "fa-pen-nib", nom: "Web Design", detail: "Figma, UI/UX, Photoshop · Durée : 3 mois" }
      ]
    },
    {
      id: 2,
      nom: "Gabon Digital Academy",
      initiales: "GD",
      ville: "Libreville",
      quartier: "Batterie 4",
      telephone: "+241 74510336",
      whatsapp: "+241 07X XXX XXX",
      email: "libreville@unesco.org",
      adresse: "Avenue de la Liberté, Batterie 4",
      domaines: ["Web Design", "Infographie", "Développement Mobile"],
      description: "Gabon Digital Academy est un centre moderne dédié aux formations créatives et au développement mobile, au cœur de Libreville.",
      formations: [
        { icon: "fa-pen-nib", nom: "Web Design", detail: "Figma, UI/UX, Photoshop · Durée : 3 mois" },
        { icon: "fa-image", nom: "Infographie", detail: "Illustrator, InDesign · Durée : 3 mois" },
        { icon: "fa-mobile-screen", nom: "Développement Mobile", detail: "React Native, Flutter · Durée : 6 mois" }
      ]
    },
    {
      id: 3,
      nom: "Tech Gabon Formation",
      initiales: "TG",
      ville: "Libreville",
      quartier: "PK8",
      telephone: "+241 66 345 678",
      whatsapp: "+241 07X XXX XXX",
      email: "contact@techgabon.ga",
      adresse: "Boulevard du PK8",
      domaines: ["Développement Web", "Bureautique"],
      description: "Tech Gabon Formation propose des formations accessibles en développement web et bureautique pour tous les niveaux.",
      formations: [
        { icon: "fa-code", nom: "Développement Web", detail: "HTML, CSS, JavaScript · Durée : 4 mois" },
        { icon: "fa-file-word", nom: "Bureautique", detail: "Word, Excel, PowerPoint · Durée : 1 mois" }
      ]
    },
    {
      id: 4,
      nom: "CyberForm Port-Gentil",
      initiales: "CF",
      ville: "Port-Gentil",
      quartier: "Centre-ville",
      telephone: "+241 62 456 789",
      whatsapp: "+241 07X XXX XXX",
      email: "contact@cyberform.ga",
      adresse: "Rue du Commerce, Centre-ville",
      domaines: ["Cybersécurité", "Bureautique", "Développement Web"],
      description: "CyberForm est le centre de référence en cybersécurité à Port-Gentil, formant les futurs experts en sécurité informatique du Gabon.",
      formations: [
        { icon: "fa-shield-halved", nom: "Cybersécurité", detail: "Sécurité réseau, ethical hacking · Durée : 4 mois" },
        { icon: "fa-file-word", nom: "Bureautique", detail: "Word, Excel, PowerPoint · Durée : 1 mois" },
        { icon: "fa-code", nom: "Développement Web", detail: "HTML, CSS, JavaScript · Durée : 4 mois" }
      ]
    },
    {
      id: 5,
      nom: "École du Numérique PG",
      initiales: "EN",
      ville: "Port-Gentil",
      quartier: "Balise",
      telephone: "+241 65 567 890",
      whatsapp: "+241 07X XXX XXX",
      email: "contact@ecolenumerique.ga",
      adresse: "Quartier Balise, Port-Gentil",
      domaines: ["Infographie", "Web Design"],
      description: "L'École du Numérique PG est spécialisée dans les formations créatives, idéale pour ceux qui veulent travailler dans le design.",
      formations: [
        { icon: "fa-image", nom: "Infographie", detail: "Illustrator, InDesign · Durée : 3 mois" },
        { icon: "fa-pen-nib", nom: "Web Design", detail: "Figma, UI/UX · Durée : 3 mois" }
      ]
    },
    {
      id: 6,
      nom: "Centre Informatique Franceville",
      initiales: "CI",
      ville: "Franceville",
      quartier: "Mvengué",
      telephone: "+241 74 678 901",
      whatsapp: "+241 07X XXX XXX",
      email: "contact@cifranceville.ga",
      adresse: "Avenue Mvengué, Franceville",
      domaines: ["Bureautique", "Développement Web", "Infographie"],
      description: "Le Centre Informatique de Franceville est l'établissement de référence dans la région du Haut-Ogooué pour les formations numériques.",
      formations: [
        { icon: "fa-file-word", nom: "Bureautique", detail: "Word, Excel, PowerPoint · Durée : 1 mois" },
        { icon: "fa-code", nom: "Développement Web", detail: "HTML, CSS, JavaScript · Durée : 4 mois" },
        { icon: "fa-image", nom: "Infographie", detail: "Photoshop, Illustrator · Durée : 3 mois" }
      ]
    },
    {
      id: 7,
      nom: "Digital Hub Libreville",
      initiales: "DH",
      ville: "Libreville",
      quartier: "Nombakélé",
      telephone: "+241 77 789 012",
      whatsapp: "+241 07X XXX XXX",
      email: "contact@digitalhub.ga",
      adresse: "Rue Nombakélé, Libreville",
      domaines: ["Développement Web", "Développement Mobile", "Cybersécurité"],
      description: "Digital Hub Libreville est un espace moderne dédié aux formations tech avancées, avec un accent sur le développement et la sécurité.",
      formations: [
        { icon: "fa-code", nom: "Développement Web", detail: "HTML, CSS, JS, React · Durée : 6 mois" },
        { icon: "fa-mobile-screen", nom: "Développement Mobile", detail: "Flutter, React Native · Durée : 5 mois" },
        { icon: "fa-shield-halved", nom: "Cybersécurité", detail: "Ethical hacking, réseau · Durée : 4 mois" }
      ]
    },
    {
      id: 8,
      nom: "Pro Informatique Oyem",
      initiales: "PI",
      ville: "Oyem",
      quartier: "Centre",
      telephone: "+241 66 890 123",
      whatsapp: "+241 07X XXX XXX",
      email: "contact@proinformatique.ga",
      adresse: "Centre-ville, Oyem",
      domaines: ["Bureautique", "Web Design"],
      description: "Pro Informatique Oyem est le premier centre de formation numérique de la ville d'Oyem, accessible à tous.",
      formations: [
        { icon: "fa-file-word", nom: "Bureautique", detail: "Word, Excel, PowerPoint · Durée : 1 mois" },
        { icon: "fa-pen-nib", nom: "Web Design", detail: "Figma, Canva · Durée : 2 mois" }
      ]
    },
    {
      id: 9,
      nom: "FormaTech Libreville",
      initiales: "FT",
      ville: "Libreville",
      quartier: "Louis",
      telephone: "+241 74 901 234",
      whatsapp: "+241 07X XXX XXX",
      email: "contact@formatech.ga",
      adresse: "Quartier Louis, Libreville",
      domaines: ["Développement Web", "Infographie", "Web Design"],
      description: "FormaTech Libreville combine créativité et technique pour former des profils polyvalents dans le numérique.",
      formations: [
        { icon: "fa-code", nom: "Développement Web", detail: "HTML, CSS, JavaScript · Durée : 4 mois" },
        { icon: "fa-image", nom: "Infographie", detail: "Photoshop, Illustrator · Durée : 3 mois" },
        { icon: "fa-pen-nib", nom: "Web Design", detail: "Figma, UI/UX · Durée : 3 mois" }
      ]
    },
    {
      id: 10,
      nom: "Academy Cyber Gabon",
      initiales: "AC",
      ville: "Libreville",
      quartier: "Nzeng-Ayong",
      telephone: "+241 77 012 345",
      whatsapp: "+241 07X XXX XXX",
      email: "contact@academycyber.ga",
      adresse: "Nzeng-Ayong, Libreville",
      domaines: ["Cybersécurité", "Développement Web"],
      description: "Academy Cyber Gabon est spécialisée dans la cybersécurité et forme les futurs experts en protection des systèmes informatiques.",
      formations: [
        { icon: "fa-shield-halved", nom: "Cybersécurité", detail: "Ethical hacking, CTF · Durée : 5 mois" },
        { icon: "fa-code", nom: "Développement Web", detail: "HTML, CSS, JavaScript · Durée : 4 mois" }
      ]
    },
    {
      id: 11,
      nom: "Mobile Dev Center",
      initiales: "MD",
      ville: "Port-Gentil",
      quartier: "Sogara",
      telephone: "+241 62 123 456",
      whatsapp: "+241 07X XXX XXX",
      email: "contact@mobiledev.ga",
      adresse: "Quartier Sogara, Port-Gentil",
      domaines: ["Développement Mobile", "Développement Web"],
      description: "Mobile Dev Center est le spécialiste du développement mobile à Port-Gentil, formant les créateurs d'applications de demain.",
      formations: [
        { icon: "fa-mobile-screen", nom: "Développement Mobile", detail: "Flutter, React Native · Durée : 6 mois" },
        { icon: "fa-code", nom: "Développement Web", detail: "HTML, CSS, JavaScript · Durée : 4 mois" }
      ]
    },
    {
      id: 12,
      nom: "Infographie Pro Franceville",
      initiales: "IP",
      ville: "Franceville",
      quartier: "Léconi",
      telephone: "+241 65 234 567",
      whatsapp: "+241 07X XXX XXX",
      email: "contact@infographiepro.ga",
      adresse: "Quartier Léconi, Franceville",
      domaines: ["Infographie", "Web Design", "Bureautique"],
      description: "Infographie Pro Franceville est le centre créatif de Franceville, spécialisé dans le design graphique et la communication visuelle.",
      formations: [
        { icon: "fa-image", nom: "Infographie", detail: "Photoshop, Illustrator, InDesign · Durée : 4 mois" },
        { icon: "fa-pen-nib", nom: "Web Design", detail: "Figma, UI/UX · Durée : 3 mois" },
        { icon: "fa-file-word", nom: "Bureautique", detail: "Word, Excel, PowerPoint · Durée : 1 mois" }
      ]
    },
    {
      id: 13, nom: "Institut Africain d'Informatique (IAI)", initiales: "IAI", ville: "Libreville", quartier: "Charbonnages", telephone: "+241 60 44 68 56", whatsapp: "", email: "", adresse: "Quartier Charbonnages, Libreville",
      domaines: ["Génie logiciel", "Réseaux et télécommunications", "Systèmes d'information", "Développement informatique"],
      description: "L'Institut Africain d'Informatique (IAI) propose des formations informatiques à Libreville.",
      formations: [{ icon: "fa-code", nom: "Génie logiciel", detail: "Formation proposée par l'établissement" }, { icon: "fa-network-wired", nom: "Réseaux et télécommunications", detail: "Formation proposée par l'établissement" }, { icon: "fa-database", nom: "Systèmes d'information", detail: "Formation proposée par l'établissement" }, { icon: "fa-laptop-code", nom: "Développement informatique", detail: "Formation proposée par l'établissement" }]
    },
    {
      id: 14, nom: "Institut Facultaire d'Informatique et de Management (IFIM)", initiales: "IFIM", ville: "Libreville", quartier: "Ancien Waterman, Carrefour Nombakélé", telephone: "+241 66 25 53 11", whatsapp: "", email: "", adresse: "Ancien Waterman, Carrefour Nombakélé, Libreville",
      domaines: ["Informatique de gestion", "Développement", "Réseaux", "Management des SI"],
      description: "L'IFIM propose des formations en informatique et en management des systèmes d'information.",
      formations: [{ icon: "fa-chart-line", nom: "Informatique de gestion", detail: "Formation proposée par l'établissement" }, { icon: "fa-code", nom: "Développement", detail: "Formation proposée par l'établissement" }, { icon: "fa-network-wired", nom: "Réseaux", detail: "Formation proposée par l'établissement" }, { icon: "fa-briefcase", nom: "Management des SI", detail: "Formation proposée par l'établissement" }]
    },
    {
      id: 15, nom: "École Supérieure des Technologies Informatiques de Management (ESTIM)", initiales: "ESTIM", ville: "Libreville", quartier: "Libreville", telephone: "+241 07 47 93 33", whatsapp: "", email: "", adresse: "Libreville",
      domaines: ["Informatique", "Technologies numériques", "Management informatique"],
      description: "L'ESTIM propose des formations en informatique, technologies numériques et management informatique.",
      formations: [{ icon: "fa-computer", nom: "Informatique", detail: "Formation proposée par l'établissement" }, { icon: "fa-microchip", nom: "Technologies numériques", detail: "Formation proposée par l'établissement" }, { icon: "fa-briefcase", nom: "Management informatique", detail: "Formation proposée par l'établissement" }]
    },
    {
      id: 16, nom: "ESGIS Gabon", initiales: "ESGIS", ville: "Libreville", quartier: "Libreville", telephone: "+241 65 45 45 24", whatsapp: "", email: "", adresse: "Libreville",
      domaines: ["Génie logiciel", "Réseaux", "Cybersécurité", "Intelligence artificielle", "Data", "Administration systèmes"],
      description: "ESGIS Gabon propose plusieurs filières liées aux technologies numériques et aux systèmes d'information.",
      formations: [{ icon: "fa-code", nom: "Génie logiciel", detail: "Formation proposée par l'établissement" }, { icon: "fa-network-wired", nom: "Réseaux", detail: "Formation proposée par l'établissement" }, { icon: "fa-shield-halved", nom: "Cybersécurité", detail: "Formation proposée par l'établissement" }, { icon: "fa-brain", nom: "Intelligence artificielle", detail: "Formation proposée par l'établissement" }, { icon: "fa-database", nom: "Data", detail: "Formation proposée par l'établissement" }, { icon: "fa-server", nom: "Administration systèmes", detail: "Formation proposée par l'établissement" }]
    },
    {
      id: 17, nom: "Higher Institute of Technology (HIT)", initiales: "HIT", ville: "Libreville", quartier: "Libreville", telephone: "+241 01 76 41 47", whatsapp: "", email: "", adresse: "Libreville",
      domaines: ["Informatique", "Réseaux", "Maintenance", "Développement"],
      description: "Le Higher Institute of Technology propose des formations en informatique et technologies associées.",
      formations: [{ icon: "fa-computer", nom: "Informatique", detail: "Formation proposée par l'établissement" }, { icon: "fa-network-wired", nom: "Réseaux", detail: "Formation proposée par l'établissement" }, { icon: "fa-screwdriver-wrench", nom: "Maintenance", detail: "Formation proposée par l'établissement" }, { icon: "fa-code", nom: "Développement", detail: "Formation proposée par l'établissement" }]
    },
    {
      id: 18, nom: "ESIITECH Gabon", initiales: "ESI", ville: "Libreville", quartier: "Rue Nkong Akore", telephone: "+241 76 23 76 38", whatsapp: "", email: "", adresse: "Rue Nkong Akore, Libreville",
      domaines: ["Génie logiciel", "Cybersécurité", "Réseaux", "Cloud", "Développement Web"],
      description: "ESIITECH Gabon propose des formations spécialisées dans les métiers du numérique.",
      formations: [{ icon: "fa-code", nom: "Génie logiciel", detail: "Formation proposée par l'établissement" }, { icon: "fa-shield-halved", nom: "Cybersécurité", detail: "Formation proposée par l'établissement" }, { icon: "fa-network-wired", nom: "Réseaux", detail: "Formation proposée par l'établissement" }, { icon: "fa-cloud", nom: "Cloud", detail: "Formation proposée par l'établissement" }, { icon: "fa-laptop-code", nom: "Développement Web", detail: "Formation proposée par l'établissement" }]
    },
    {
      id: 19, nom: "ISTIN Gabon", initiales: "ISTIN", ville: "Libreville", quartier: "Plaine Niger", telephone: "+241 60 47 47 07", whatsapp: "", email: "", adresse: "Plaine Niger, Libreville",
      domaines: ["Informatique", "Réseaux", "Maintenance informatique"],
      description: "ISTIN Gabon propose des formations en informatique, réseaux et maintenance informatique.",
      formations: [{ icon: "fa-computer", nom: "Informatique", detail: "Formation proposée par l'établissement" }, { icon: "fa-network-wired", nom: "Réseaux", detail: "Formation proposée par l'établissement" }, { icon: "fa-screwdriver-wrench", nom: "Maintenance informatique", detail: "Formation proposée par l'établissement" }]
    },
    {
      id: 20, nom: "CFP Informatique et Gestion", initiales: "CFP", ville: "Libreville", quartier: "Après Major Transport", telephone: "+241 77 56 34 89", whatsapp: "", email: "", adresse: "Après Major Transport, Libreville",
      domaines: ["Informatique de gestion", "Bureautique", "Maintenance informatique"],
      description: "Le CFP Informatique et Gestion propose des formations en gestion, bureautique et maintenance informatique.",
      formations: [{ icon: "fa-chart-line", nom: "Informatique de gestion", detail: "Formation proposée par l'établissement" }, { icon: "fa-file-word", nom: "Bureautique", detail: "Formation proposée par l'établissement" }, { icon: "fa-screwdriver-wrench", nom: "Maintenance informatique", detail: "Formation proposée par l'établissement" }]
    },
    {
      id: 21, nom: "ITA (Institut des Techniques Avancées)", initiales: "ITA", ville: "Libreville", quartier: "Avenue de Cointet", telephone: "+241 01 74 69 51 / +241 62 78 66 00", whatsapp: "", email: "", adresse: "Avenue de Cointet, Libreville",
      domaines: ["Développement informatique", "Réseaux", "Administration systèmes", "Maintenance"],
      description: "L'ITA propose des formations techniques en développement, réseaux et administration systèmes.",
      formations: [{ icon: "fa-laptop-code", nom: "Développement informatique", detail: "Formation proposée par l'établissement" }, { icon: "fa-network-wired", nom: "Réseaux", detail: "Formation proposée par l'établissement" }, { icon: "fa-server", nom: "Administration systèmes", detail: "Formation proposée par l'établissement" }, { icon: "fa-screwdriver-wrench", nom: "Maintenance", detail: "Formation proposée par l'établissement" }]
    },
    {
      id: 22, nom: "SAHELYS", initiales: "SAH", ville: "Libreville", quartier: "Montagne Sainte", telephone: "+241 01 77 85 68 / +241 74 83 00 01", whatsapp: "", email: "", adresse: "Montagne Sainte, Libreville",
      domaines: ["Développement Web", "Réseaux", "Cybersécurité", "Administration systèmes", "Solutions Microsoft"],
      description: "SAHELYS propose des formations en développement, réseaux, cybersécurité et solutions Microsoft.",
      formations: [{ icon: "fa-laptop-code", nom: "Développement Web", detail: "Formation proposée par l'établissement" }, { icon: "fa-network-wired", nom: "Réseaux", detail: "Formation proposée par l'établissement" }, { icon: "fa-shield-halved", nom: "Cybersécurité", detail: "Formation proposée par l'établissement" }, { icon: "fa-server", nom: "Administration systèmes", detail: "Formation proposée par l'établissement" }, { icon: "fa-windows", nom: "Solutions Microsoft", detail: "Formation proposée par l'établissement" }]
    },
    {
      id: 23, nom: "ACTE", initiales: "ACTE", ville: "Libreville", quartier: "Bord de mer / Lycée Léon Mba", telephone: "+241 66 53 34 12", whatsapp: "", email: "", adresse: "Bord de mer / Lycée Léon Mba, Libreville",
      domaines: ["Développement informatique", "Bureautique", "Formation numérique"],
      description: "ACTE propose des formations en développement informatique, bureautique et numérique.",
      formations: [{ icon: "fa-laptop-code", nom: "Développement informatique", detail: "Formation proposée par l'établissement" }, { icon: "fa-file-word", nom: "Bureautique", detail: "Formation proposée par l'établissement" }, { icon: "fa-graduation-cap", nom: "Formation numérique", detail: "Formation proposée par l'établissement" }]
    },
    {
      id: 24, nom: "Integral Technologies S.A.", initiales: "ITS", ville: "Libreville", quartier: "Zone Industrielle d'Oloumi", telephone: "+241 01 76 17 56 / +241 65 66 26 19", whatsapp: "", email: "", adresse: "Zone Industrielle d'Oloumi, Libreville",
      domaines: ["Réseaux Cisco", "Microsoft", "Administration systèmes", "Sécurité informatique"],
      description: "Integral Technologies S.A. propose des formations en réseaux, systèmes et sécurité informatique.",
      formations: [{ icon: "fa-network-wired", nom: "Réseaux Cisco", detail: "Formation proposée par l'établissement" }, { icon: "fa-windows", nom: "Microsoft", detail: "Formation proposée par l'établissement" }, { icon: "fa-server", nom: "Administration systèmes", detail: "Formation proposée par l'établissement" }, { icon: "fa-shield-halved", nom: "Sécurité informatique", detail: "Formation proposée par l'établissement" }]
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
