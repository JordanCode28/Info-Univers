
    // FAQ accordion
    function toggleFaq(item) {
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    }

    // Simulation envoi formulaire
    function envoyerMessage() {
      const nom     = document.getElementById('nom').value.trim();
      const email   = document.getElementById('email').value.trim();
      const sujet   = document.getElementById('sujet').value;
      const message = document.getElementById('message').value.trim();

      if (!nom || !email || !sujet || !message) {
        alert('Veuillez remplir tous les champs obligatoires.');
        return;
      }

      // Simulation d'envoi
      document.getElementById('successMsg').classList.add('show');
      document.getElementById('nom').value     = '';
      document.getElementById('email').value   = '';
      document.getElementById('sujet').value   = '';
      document.getElementById('message').value = '';

      setTimeout(() => {
        document.getElementById('successMsg').classList.remove('show');
      }, 5000);
    }
