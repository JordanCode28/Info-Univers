
    // ── DONNÉES DES ÉCOLES --
    const ecoles = [
      {
        id: 1,
        nom: "ECOLE241",
        initiales: "",
        logo: "./assets/icon/logo-ecole241.jpg",
        ville: "Libreville",
        quartier: "Boulevard",
        telephone: "+241 62 13 07 07",
        domaines: ["Développement Web", "Référent Digital", "UI/UX"]
      },
      {
        id: 2,
        nom: "Institut Africain d'informatique(IAI)",
        initiales: "",
        logo: "./assets/icon/logo-IAI.png",
        ville: "Libreville",
        quartier: "Mindoubé",
        telephone: "+241 77 70 55 00",
        domaines: ["Ingénieurie informatique", "Cybersécurité", "DevOps"]
      },
      {
        id: 3,
        nom: "Institut Supérieur de Technologie (IST)",
        initiales: "",
        logo: "./assets/icon/logo-IST.png",
        ville: "Libreville",
        quartier: "Bikélé",
        telephone: "+241 07 83 74 78",
        domaines: ["Informatique", "Réseaux", "Télécoms"]
      },
      {
        id: 4,
        nom: "CyberForm Port-Gentil",
        initiales: "",
        logo: "./assets/icon/.png",
        ville: "Port-Gentil",
        quartier: "Centre-ville",
        telephone: "062 456 789",
        domaines: ["Cybersécurité", "Bureautique", "Développement Web"]
      },
      {
        id: 5,
        nom: "École du Numérique PG",
        initiales: "EN",
        ville: "Port-Gentil",
        quartier: "Balise",
        telephone: "065 567 890",
        domaines: ["Infographie", "Web Design"]
      },
      {
        id: 6,
        nom: "Centre Informatique Franceville",
        initiales: "CI",
        ville: "Franceville",
        quartier: "Mvengué",
        telephone: "074 678 901",
        domaines: ["Bureautique", "Développement Web", "Infographie"]
      },
      {
        id: 7,
        nom: "Digital Hub Libreville",
        initiales: "DH",
        ville: "Libreville",
        quartier: "Nombakélé",
        telephone: "077 789 012",
        domaines: ["Développement Web", "Développement Mobile", "Cybersécurité"]
      },
      {
        id: 8,
        nom: "Pro Informatique Oyem",
        initiales: "PI",
        ville: "Oyem",
        quartier: "Centre",
        telephone: "066 890 123",
        domaines: ["Bureautique", "Web Design"]
      },
      {
        id: 9,
        nom: "FormaTech Libreville",
        initiales: "FT",
        ville: "Libreville",
        quartier: "Louis",
        telephone: "074 901 234",
        domaines: ["Développement Web", "Infographie", "Web Design"]
      },
      {
        id: 10,
        nom: "Academy Cyber Gabon",
        initiales: "AC",
        ville: "Libreville",
        quartier: "Nzeng-Ayong",
        telephone: "077 012 345",
        domaines: ["Cybersécurité", "Développement Web"]
      },
      {
        id: 11,
        nom: "Mobile Dev Center",
        initiales: "MD",
        ville: "Port-Gentil",
        quartier: "Sogara",
        telephone: "062 123 456",
        domaines: ["Développement Mobile", "Développement Web"]
      },
      {
        id: 12,
        nom: "Infographie Pro Franceville",
        initiales: "IP",
        ville: "Franceville",
        quartier: "Léconi",
        telephone: "065 234 567",
        domaines: ["Infographie", "Web Design", "Bureautique"]
      },
      {
        id: 13,
        nom: "Institut Africain d'Informatique (IAI)",
        initiales: "IAI",
        logo: "",
        ville: "Libreville",
        quartier: "Charbonnages",
        telephone: "+241 60 44 68 56",
        domaines: ["Génie logiciel", "Réseaux et télécommunications", "Systèmes d'information", "Développement informatique"]
      },
      {
        id: 14,
        nom: "Institut Facultaire d'Informatique et de Management (IFIM)",
        initiales: "IFIM",
        logo: "",
        ville: "Libreville",
        quartier: "Ancien Waterman, Carrefour Nombakélé",
        telephone: "+241 66 25 53 11",
        domaines: ["Informatique de gestion", "Développement", "Réseaux", "Management des SI"]
      },
      {
        id: 15,
        nom: "École Supérieure des Technologies Informatiques de Management (ESTIM)",
        initiales: "ESTIM",
        logo: "",
        ville: "Libreville",
        quartier: "Libreville",
        telephone: "+241 07 47 93 33",
        domaines: ["Informatique", "Technologies numériques", "Management informatique"]
      },
      {
        id: 16,
        nom: "ESGIS Gabon",
        initiales: "ESGIS",
        logo: "",
        ville: "Libreville",
        quartier: "Libreville",
        telephone: "+241 65 45 45 24",
        domaines: ["Génie logiciel", "Réseaux", "Cybersécurité", "Intelligence artificielle", "Data", "Administration systèmes"]
      },
      {
        id: 17,
        nom: "Higher Institute of Technology (HIT)",
        initiales: "HIT",
        logo: "",
        ville: "Libreville",
        quartier: "Libreville",
        telephone: "+241 01 76 41 47",
        domaines: ["Informatique", "Réseaux", "Maintenance", "Développement"]
      },
      {
        id: 18,
        nom: "ESIITECH Gabon",
        initiales: "ESI",
        logo: "",
        ville: "Libreville",
        quartier: "Rue Nkong Akore",
        telephone: "+241 76 23 76 38",
        domaines: ["Génie logiciel", "Cybersécurité", "Réseaux", "Cloud", "Développement Web"]
      },
      {
        id: 19,
        nom: "ISTIN Gabon",
        initiales: "ISTIN",
        logo: "",
        ville: "Libreville",
        quartier: "Plaine Niger",
        telephone: "+241 60 47 47 07",
        domaines: ["Informatique", "Réseaux", "Maintenance informatique"]
      },
      {
        id: 20,
        nom: "CFP Informatique et Gestion",
        initiales: "CFP",
        logo: "",
        ville: "Libreville",
        quartier: "Après Major Transport",
        telephone: "+241 77 56 34 89",
        domaines: ["Informatique de gestion", "Bureautique", "Maintenance informatique"]
      },
      {
        id: 21,
        nom: "ITA (Institut des Techniques Avancées)",
        initiales: "ITA",
        logo: "",
        ville: "Libreville",
        quartier: "Avenue de Cointet",
        telephone: "+241 01 74 69 51 / +241 62 78 66 00",
        domaines: ["Développement informatique", "Réseaux", "Administration systèmes", "Maintenance"]
      },
      {
        id: 22,
        nom: "SAHELYS",
        initiales: "SAH",
        logo: "",
        ville: "Libreville",
        quartier: "Montagne Sainte",
        telephone: "+241 01 77 85 68 / +241 74 83 00 01",
        domaines: ["Développement Web", "Réseaux", "Cybersécurité", "Administration systèmes", "Solutions Microsoft"]
      },
      {
        id: 23,
        nom: "ACTE",
        initiales: "ACTE",
        logo: "",
        ville: "Libreville",
        quartier: "Bord de mer / Lycée Léon Mba",
        telephone: "+241 66 53 34 12",
        domaines: ["Développement informatique", "Bureautique", "Formation numérique"]
      },
      {
        id: 24,
        nom: "Integral Technologies S.A.",
        initiales: "ITS",
        logo: "",
        ville: "Libreville",
        quartier: "Zone Industrielle d'Oloumi",
        telephone: "+241 01 76 17 56 / +241 65 66 26 19",
        domaines: ["Réseaux Cisco", "Microsoft", "Administration systèmes", "Sécurité informatique"]
      }
    ];

    // Quartiers par ville
    const quartierParVille = {
      "Libreville":   ["Akanda", "Batterie 4", "PK8", "Nombakélé", "Louis", "Nzeng-Ayong", "Mindoubé", "Bikélé", "Charbonnages", "Ancien Waterman, Carrefour Nombakélé", "Rue Nkong Akore", "Plaine Niger", "Après Major Transport", "Avenue de Cointet", "Montagne Sainte", "Bord de mer / Lycée Léon Mba", "Zone Industrielle d'Oloumi"],
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

    // ── INIT : appliquer le domaine transmis depuis l'accueil --
    const domaineDepuisAccueil = new URLSearchParams(window.location.search).get('domaine');
    const domaineFilter = document.getElementById('domaineFilter');

    if (domaineDepuisAccueil && [...domaineFilter.options].some(option => option.value === domaineDepuisAccueil)) {
      domaineFilter.value = domaineDepuisAccueil;
      filtrer();
    } else {
      afficherResultats(ecoles);
    }
