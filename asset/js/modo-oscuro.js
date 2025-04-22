function toggleTheme() {
    const isDark = document.body.classList.toggle('dark-mode');
    
    // Guardamos el estado en localStorage
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  
    // Cambiamos el ícono
    const icon = document.querySelector('.theme-toggle-btn i');
    if (isDark) {
      icon.classList.remove('fa-moon');
      icon.classList.add('fa-sun');
    } else {
      icon.classList.remove('fa-sun');
      icon.classList.add('fa-moon');
    }
  }
  
  // Ejecutar al cargar la página
  document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
  
    if (savedTheme === 'dark') {
      document.body.classList.add('dark-mode');
  
      // Asegurar que el ícono sea correcto
      const icon = document.querySelector('.theme-toggle-btn i');
      if (icon) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
      }
    }
  });
  