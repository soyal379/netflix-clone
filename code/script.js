const langSelect = document.querySelector('#selc-1');
    if (langSelect) {
        langSelect.addEventListener('change', function() {
            console.log('Language changed to:', this.value);
        });
    }