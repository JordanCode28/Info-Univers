// FAQ accordion
    function toggleFaq(item) {
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    }

    // Envoi réel du formulaire via Web3Forms
    const WEB3FORMS_ACCESS_KEY = '1a8afc79-47ac-4291-be1d-e209135a88a1';

    async function envoyerMessage() {
      const nom     = document.getElementById('nom').value.trim();
      const email   = document.getElementById('email').value.trim();
      const sujet   = document.getElementById('sujet').value;
      const message = document.getElementById('message').value.trim();

      if (!nom || !email || !sujet || !message) {
        alert('Veuillez remplir tous les champs obligatoires.');
        return;
      }

      const btn = document.querySelector('.btn-submit');
      const btnTexteOriginal = btn.innerHTML;
      btn.disabled = true;
      btn.innerHTML = '⏳ Envoi en cours...';

      try {
        const reponse = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            access_key: WEB3FORMS_ACCESS_KEY,
            name: nom,
            email: email,
            subject: `[Info Univers] ${sujet}`,
            message: message
          })
        });

        const resultat = await reponse.json();

        if (resultat.success) {
          document.getElementById('successMsg').classList.add('show');
          document.getElementById('nom').value     = '';
          document.getElementById('email').value   = '';
          document.getElementById('sujet').value   = '';
          document.getElementById('message').value = '';

          setTimeout(() => {
            document.getElementById('successMsg').classList.remove('show');
          }, 5000);
        } else {
          alert("Une erreur s'est produite lors de l'envoi. Réessaie dans un instant.");
        }
      } catch (erreur) {
        alert("Impossible d'envoyer le message. Vérifie ta connexion internet et réessaie.");
      } finally {
        btn.disabled = false;
        btn.innerHTML = btnTexteOriginal;
      }
    }

    // Expose les fonctions globalement pour les attributs onclick="" du HTML
    // (nécessaire car ce script est chargé en tant que module)
    window.toggleFaq = toggleFaq;
    window.envoyerMessage = envoyerMessage;