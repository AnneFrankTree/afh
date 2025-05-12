const flipBtn = document.getElementById('flipBtn');
const sendBtn = document.getElementById('sendBtn');
const leafCard = document.getElementById('leafCard');

flipBtn.addEventListener('click', () => {
  leafCard.classList.toggle('flipped');
});

sendBtn.addEventListener('click', () => {
  const message = document.querySelector('.leaf-message').value.trim();
  const name = document.querySelector('.leaf-signature').value.trim();

  if (!message || !name) {
    alert('Please complete both message and name.');
    return;
  }

  // Optional: Add send animation later
  alert('Your leaf has been sent to Anne’s tree.');
});
