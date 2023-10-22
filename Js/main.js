const login = document.getElementById('login');

toggleToRegister.addEventListener('click', () => {
    toggleForms(
      document.getElementById('registerForm'),
      document.getElementById('loginForm')
    );
  });

  toggleToLogin.addEventListener('click', () => {
    toggleForms(
      document.getElementById('loginForm'),
      document.getElementById('registerForm')
    );
  });