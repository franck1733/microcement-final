const steps = document.querySelectorAll('.step');
const speechText = document.getElementById('speechText');
let currentStep = 0;

const messages = [
  "Who are you?",
  "What type of project are you working on?",
  "Approximately how many square meters?",
  "Which space are you renovating?",
  "What’s the current surface like?",
  "Let’s stay in touch!"
];

function showStep(index) {
  steps.forEach((step, i) => step.classList.toggle('active', i === index));
  document.getElementById('prevBtn').disabled = index === 0;
  document.getElementById('nextBtn').textContent = index === steps.length - 1 ? 'Submit' : 'Next';
  speechText.textContent = messages[index];
}

document.getElementById('nextBtn').addEventListener('click', () => {
  if (currentStep < steps.length - 1) {
    currentStep++;
    showStep(currentStep);
  } else {
    document.getElementById('questionnaireForm').submit();
  }
});

document.getElementById('prevBtn').addEventListener('click', () => {
  if (currentStep > 0) {
    currentStep--;
    showStep(currentStep);
  }
});

showStep(currentStep);

document.querySelectorAll('.option').forEach(el => {
  el.addEventListener('click', () => {
    el.classList.toggle('selected');
  });
});
