
    // ── DONNÉES DES ÉCOLES ──────────────────────────────
    const ecoles = [
      {
        id: 1,
        nom: "Institut Numérique de Libreville",
        initiales: "IN",
        ville: "Libreville",
        quartier: "Akanda",
        telephone: "074 123 456",
        domaines: ["Développement Web", "Cybersécurité", "Web Design"]
      },
      {
        id: 2,
        nom: "Gabon Digital Academy",
        initiales: "GD",
        ville: "Libreville",
        quartier: "Batterie 4",
        telephone: "077 234 567",
        domaines: ["Web Design", "Infographie", "Développement Mobile"]
      },
      {
        id: 3,
        nom: "Tech Gabon Formation",
        initiales: "TG",
        ville: "Libreville",
        quartier: "PK8",
        telephone: "066 345 678",
        domaines: ["Développement Web", "Bureautique"]
      },
      {
        id: 4,
        nom: "CyberForm Port-Gentil",
        initiales: "CF",
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
      }
    ];

    // Quartiers par ville
    const quartierParVille = {
      "Libreville":   ["Akanda", "Batterie 4", "PK8", "Nombakélé", "Louis", "Nzeng-Ayong"],
      "Port-Gentil":  ["Centre-ville", "Balise", "Sogara"],
      "Franceville":  ["Mvengué", "Léconi"],
      "Oyem":         ["Centre"]
    };

    // ── MISE À JOUR DES QUARTIERS ───────────────────────
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

    // ── CRÉER UNE CARTE ─────────────────────────────────
    function creerCarte(ecole) {
      const tags = ecole.domaines.map(d => `<span class="tag">${d}</span>`).join('');
      return `
        <div class="ecole-card">
          <div class="ecole-card-header">
            <div class="ecole-avatar">${ecole.initiales}</div>
            <div class="ecole-card-header-info">
              <h3>${ecole.nom}</h3>
              <p>📍 ${ecole.ville}, ${ecole.quartier}</p>
            </div>
          </div>
          <div class="ecole-card-body">
            <div class="ecole-tags">${tags}</div>
            <div class="ecole-card-footer">
              <span class="ecole-location">📞 ${ecole.telephone}</span>
              <a href="detail.html" class="btn-voir">Voir la fiche</a>
            </div>
          </div>
        </div>
      `;
    }

    // ── FILTRER ─────────────────────────────────────────
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

    // ── AFFICHER LES RÉSULTATS ──────────────────────────
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

    // ── RÉINITIALISER ───────────────────────────────────
    function resetFiltres() {
      document.getElementById('searchInput').value  = '';
      document.getElementById('villeFilter').value  = '';
      document.getElementById('quartierFilter').value = '';
      document.getElementById('domaineFilter').value = '';
      updateQuartiers();
      afficherResultats(ecoles);
    }

    // ── INIT ────────────────────────────────────────────
    afficherResultats(ecoles);
