
const ecoles = [
  {
    id: 1,
    nom: "ECOLE241",
    initiales: "241",
    logo: "./assets/icon/logo-ecole241.jpg",
    ville: "Libreville",
    quartier: "Boulevard Triomphal",
    telephone: "+241 62 13 07 07",
    domaines: [
      "Développement Web",
      "Développement Mobile",
      "Référent Digital",
      "UI/UX"
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
    domaines: [
      "Génie logiciel",
      "Réseaux",
      "Télécommunications",
      "Systèmes d'information"
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
    domaines: [
      "Big Data",
      "Cybersécurité",
      "Intelligence artificielle",
      "Développement Logiciel (Génie Logiciel)",
      "Réseaux & Systèmes"
    ]
  },
  {
    id: 4,
    nom: "CYBERSCHOOL",
    initiales: "CS",
    logo: "./assets/icon/logo-cyberschool.png",
    ville: "Libreville",
    quartier: "Nzeng-Ayong",
    telephone: "+241 07 41 86 71",
    domaines: [
      "Développement Web",
      "Cybersécurité",
      "Marketing Digital",
      "Infographie",
      "Bureautique"
    ]
  },
  {
    id: 5,
    nom: "ESIITECH Gabon",
    initiales: "ESI",
    logo: "./assets/icon/logo-ESIITECH.png",
    ville: "Libreville",
    quartier: "Rue Nkong Akore",
    telephone: "+241 76 23 76 38",
    domaines: [
      "Génie logiciel",
      "Cybersécurité",
      "Cloud",
      "Réseaux",
      "Développement Web"
    ]
  },
  {
    id: 6,
    nom: "Institut Facultaire d'Informatique et de Management (IFIM)",
    initiales: "IFIM",
    logo: "./assets/icon/logo-IFIM.png",
    ville: "Libreville",
    quartier: "Ancien Waterman, Carrefour Nombakélé",
    telephone: "+241 66 25 53 11",
    domaines: [
      "Informatique de gestion",
      "Développement",
      "Réseaux",
      "Management des SI"
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
    domaines: [
      "Informatique",
      "Développement",
      "Réseaux",
      "Maintenance"
    ]
  },
  {
    id: 8,
    nom: "École Supérieure des Technologies Informatiques de Management (ESTIM)",
    initiales: "ESTIM",
    logo: "./assets/icon/logo-ESTIM.webp",
    ville: "Libreville",
    quartier: "Libreville",
    telephone: "+241 07 47 93 33",
    domaines: [
      "Informatique",
      "Technologies numériques",
      "Management informatique"
    ]
  },
  {
    id: 9,
    nom: "ITA (Institut des Techniques Avancées)",
    initiales: "ITA",
    logo: "./assets/icon/logo-ITA.png",
    ville: "Libreville",
    quartier: "Avenue de Cointet",
    telephone: "+241 01 74 69 51",
    domaines: [
      "Développement informatique",
      "Réseaux",
      "Administration systèmes",
      "Maintenance"
    ]
  },
  {
    id: 10,
    nom: "ISTIN Gabon",
    initiales: "ISTIN",
    logo: "./assets/icon/logo-istin.png",
    ville: "Libreville",
    quartier: "Plaine Niger",
    telephone: "+241 60 47 47 07",
    domaines: [
      "Informatique",
      "Réseaux",
      "Maintenance informatique"
    ]
  },
  {
    id: 11,
    nom: "SAHELYS",
    initiales: "SAH",
    logo: "./assets/icon/logo-sahelys.png",
    ville: "Libreville",
    quartier: "Montagne Sainte",
    telephone: "+241 74 83 00 01",
    domaines: [
      "Développement Web",
      "Cybersécurité",
      "Réseaux",
      "Administration systèmes"
    ]
  },
  {
    id: 12,
    nom: "ACTE",
    initiales: "ACTE",
    logo: "./assets/icon/logo-acte.png",
    ville: "Libreville",
    quartier: "Bord de mer / Lycée Léon Mba",
    telephone: "+241 66 53 34 12",
    domaines: [
      "Développement informatique",
      "Formation numérique",
      "Bureautique"
    ]
  },
  {
    id: 13,
    nom: "Integral Technologies S.A.",
    initiales: "ITS",
    logo: "./assets/icon/logo-its.png",
    ville: "Libreville",
    quartier: "Zone Industrielle d'Oloumi",
    telephone: "+241 65 66 26 19",
    domaines: [
      "Réseaux Cisco",
      "Microsoft",
      "Administration systèmes",
      "Sécurité informatique"
    ]
  },
  {
    id: 14,
    nom: "CFP Informatique et Gestion",
    initiales: "CFP",
    logo: "./assets/icon/logo-cfp.png",
    ville: "Libreville",
    quartier: "Après Major Transport",
    telephone: "+241 77 56 34 89",
    domaines: [
      "Informatique de gestion",
      "Maintenance informatique",
      "Bureautique"
    ]
  }
];

    // Quartiers par ville
    const quartierParVille = {
      "Libreville":   ["Akanda", "Batterie 4", "PK8", "Nombakélé", "Louis", "Nzeng-Ayong", "Mindoubé", "Bikélé", "Charbonnages", "Ancien Waterman, Carrefour Nombakélé", "Rue Nkong Akore", "Plaine Niger", "Après Major Transport", "Avenue de Cointet", "Montagne Sainte", "Bord de mer / Lycée Léon Mba", "Zone Industrielle d'Oloumi", "Boulevard Triomphal"],
      "Port-Gentil":  ["Centre-ville", "Balise", "Sogara"],
      "Franceville":  ["Mvengué", "Léconi"],
      "Oyem":         ["Centre"]
    };

    // ── MISE À JOUR DES QUARTIERS --
    function updateQuartiers() {
      const ville = document.getElementById('villeFilter').value;
      const quartierSelect = document.getElementById('quartierFilter');
      quartierSelect.innerHTML = '<option value="">Tous les quartiers</option>';

      if (ville && quartierParVille[ville]) {
        quartierParVille[ville].forEach(q => {
          const opt = document.createElement('option');
          opt.value = q;
          opt.textContent = q;
          quartierSelect.appendChild(opt);
        });
      }
    }

    // ── CRÉER UNE CARTE --
    function creerCarte(ecole) {
      const tags = ecole.domaines.map(d => `<span class="tag">${d}</span>`).join('');
      const avatar = ecole.logo
        ? `<img src="${ecole.logo}" alt="Logo de ${ecole.nom}">`
        : ecole.initiales;
      return `
        <div class="ecole-card">
          <div class="ecole-card-header">
            <div class="ecole-avatar">${avatar}</div>
            <div class="ecole-card-header-info">
              <h3>${ecole.nom}</h3>
              <p><i class="fas fa-map-marker-alt"></i> ${ecole.ville}, ${ecole.quartier}</p>
            </div>
          </div>
          <div class="ecole-card-body">
            <div class="ecole-tags">${tags}</div>
            <div class="ecole-card-footer">
              <span class="ecole-location"><i class="fas fa-mobile-screen-button"></i> ${ecole.telephone}</span>
              <a href="detail.html?id=${ecole.id}" class="btn-voir">Voir la fiche</a>
            </div>
          </div>
        </div>
      `;
    }

    // ── FILTRER --
    function filtrer() {
      const search   = document.getElementById('searchInput').value.toLowerCase().trim();
      const ville    = document.getElementById('villeFilter').value;
      const quartier = document.getElementById('quartierFilter').value;
      const domaine  = document.getElementById('domaineFilter').value;

      const resultats = ecoles.filter(e => {
        const matchSearch  = !search  || e.nom.toLowerCase().includes(search);
        const matchVille   = !ville   || e.ville === ville;
        const matchQuartier= !quartier|| e.quartier === quartier;
        const matchDomaine = !domaine || e.domaines.includes(domaine);
        return matchSearch && matchVille && matchQuartier && matchDomaine;
      });

      afficherResultats(resultats);
    }

    // ── AFFICHER LES RÉSULTATS --
    function afficherResultats(resultats) {
      const grid     = document.getElementById('ecoleGrid');
      const noResult = document.getElementById('noResult');
      const count    = document.getElementById('countDisplay');

      count.textContent = resultats.length;

      if (resultats.length === 0) {
        grid.innerHTML = '';
        noResult.classList.add('show');
      } else {
        noResult.classList.remove('show');
        grid.innerHTML = resultats.map(creerCarte).join('');
      }
    }

    // ── RÉINITIALISER --
    function resetFiltres() {
      document.getElementById('searchInput').value  = '';
      document.getElementById('villeFilter').value  = '';
      document.getElementById('quartierFilter').value = '';
      document.getElementById('domaineFilter').value = '';
      updateQuartiers();
      afficherResultats(ecoles);
    }

    // Expose functions for inline handlers in module context
    window.filtrer = filtrer;
    window.updateQuartiers = updateQuartiers;
    window.resetFiltres = resetFiltres;

    // ── INIT : appliquer le domaine transmis depuis l'accueil --
    const domaineDepuisAccueil = new URLSearchParams(window.location.search).get('domaine');
    const domaineFilter = document.getElementById('domaineFilter');

    if (domaineDepuisAccueil && [...domaineFilter.options].some(option => option.value === domaineDepuisAccueil)) {
      domaineFilter.value = domaineDepuisAccueil;
      filtrer();
    } else {
      afficherResultats(ecoles);
    }
