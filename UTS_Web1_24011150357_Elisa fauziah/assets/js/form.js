'use strict';

// Validasi dasar sebelum submit
// - Nama tidak boleh kosong
// - Email harus mengandung @
// - NIM harus angka min 8 digit

(function() {
  const form = document.getElementById('bukuTamuForm');
  if (!form) return;

  form.addEventListener('submit', function(e) {
    const nama = document.getElementById('nama');
    const nim = document.getElementById('nim');
    const email = document.getElementById('email');

    const errors = [];

    // Nama
    if (!nama.value.trim()) {
      errors.push('Nama tidak boleh kosong');
    }

    // Email sederhana
    if (!email.value.includes('@')) {
      errors.push('Email harus mengandung @');
    }

    // NIM: hanya angka dan minimal 8 digit
    const nimVal = String(nim.value || '').trim();
    if (!/^\d{8,}$/.test(nimVal)) {
      errors.push('NIM harus berupa angka dengan minimal 8 digit');
    }

    if (errors.length > 0) {
      e.preventDefault();
      alert(errors.join('\n'));
      return false;
    }

    // Lewatkan validasi HTML5 juga
    if (!form.checkValidity()) {
      e.preventDefault();
      form.reportValidity();
      return false;
    }

    return true;
  });
})();
