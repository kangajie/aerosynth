 // JavaScript untuk menampilkan menu hamburger
const hamburger = document.getElementById('hamburger-icon'); 
const navbar = document.getElementById('navbar'); 

hamburger.addEventListener('click', () => {
  navbar.classList.toggle('active'); 
});


 // Schedule Filter
 document.querySelectorAll('.schedule-filter .btn').forEach(button => {
  button.addEventListener('click', function() {
      // Remove active class from all buttons
      document.querySelectorAll('.schedule-filter .btn').forEach(btn => {
          btn.classList.remove('active');
      });
      
      // Add active class to clicked button
      this.classList.add('active');
      
      const filter = this.getAttribute('data-filter');
      const rows = document.querySelectorAll('#scheduleTable tr');
      
      rows.forEach(row => {
          if (filter === 'all' || row.getAttribute('data-day') === filter) {
              row.style.display = '';
          } else {
              row.style.display = 'none';
          }
      });
  });
});
// Filter functionality for both desktop and mobile views
function filterSchedule(day) {
  // Desktop view filtering
  const desktopRows = document.querySelectorAll('#scheduleTableDesktop tr[data-day]');
  desktopRows.forEach(row => {
      if (day === 'all' || row.getAttribute('data-day') === day) {
          row.style.display = '';
      } else {
          row.style.display = 'none';
      }
  });

  // Mobile view filtering
  const mobileCards = document.querySelectorAll('#scheduleCardsMobile [data-day]');
  mobileCards.forEach(card => {
      if (day === 'all' || card.getAttribute('data-day') === day) {
          card.style.display = '';
      } else {
          card.style.display = 'none';
      }
  });
}

// Desktop buttons event listeners
document.querySelectorAll('.btn-group .btn').forEach(button => {
  button.addEventListener('click', function() {
      document.querySelectorAll('.btn-group .btn').forEach(btn => {
          btn.classList.remove('active');
      });
      this.classList.add('active');
      filterSchedule(this.getAttribute('data-filter'));
  });
});

// Mobile select event listener
document.getElementById('dayFilter').addEventListener('change', function() {
  filterSchedule(this.value);
});

document.addEventListener('DOMContentLoaded', function() {
  const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('visible');
          }
      });
  }, observerOptions);

  document.querySelectorAll('.animate-on-scroll').forEach((element) => {
      observer.observe(element);
  });
});

//struktur kelas
document.addEventListener('DOMContentLoaded', () => {
    // Animate positions on load
    const positions = document.querySelectorAll('.position');
    positions.forEach(position => {
        const delay = position.getAttribute('data-delay');
        setTimeout(() => {
            position.style.animation = `scaleIn 0.5s ease forwards`;
        }, delay);
    });

    // Add click interaction
    positions.forEach(position => {
        position.addEventListener('click', () => {
            positions.forEach(p => p.classList.remove('active'));
            position.classList.add('active');
        });
    });
});



// Menangani pengiriman form
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Menghentikan refresh halaman saat submit

    // Mengambil data dari form
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Validasi form
    if (name && email && message) {
            // Mengirim data ke email
            const mailtoLink = `mailto:byalak.2@gmail.com?subject=Contact Form Submission&body=Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;
            window.location.href = mailtoLink;

            // Menampilkan pesan sukses
            document.getElementById('response-message').innerText = 'Pesan Anda telah terkirim! Terima kasih atas tanggapan Anda.';
            document.getElementById('response-message').style.color = 'green';

            // Reset form setelah pengiriman
            document.getElementById('contact-form').reset();
    } else {
            // Menampilkan pesan kesalahan
            document.getElementById('response-message').innerText = 'Harap lengkapi semua kolom!';
            document.getElementById('response-message').style.color = 'red';
    }
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

// Animation on Scroll
const observerOptions = {
  threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
          entry.target.classList.add('visible');
      }
  });
}, observerOptions);

document.querySelectorAll('.animate-on-scroll').forEach((element) => {
  observer.observe(element);
});

