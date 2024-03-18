document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('.delete-button').forEach(function(button) {
      button.addEventListener('click', function(event) {
        if (!confirm(this.getAttribute('data-confirm'))) {
          event.preventDefault();
        }
      });
    });
  });
  