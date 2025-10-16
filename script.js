function checkPassword(button, correctPassword) {
  const container = button.closest('.note');
  const input = container.querySelector('input[type="password"]');
  const content = container.querySelector('.homework-content');

  if (input.value === correctPassword) {
    content.classList.remove('hidden');
    container.querySelector('.password-area').classList.add('hidden');
  } else {
    alert('Incorrect password!');
  }
}
