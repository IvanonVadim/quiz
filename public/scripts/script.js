
const formId = document.querySelector('#formId');

if (formId) {
  formId.addEventListener('submit', async (e) => {
    e.preventDefault();
    const { answer } = e.target;
    const {id}=e.target.dataset
     const res = await fetch('/themes', {
       method: 'POST',
       headers: {
         'Content-type': 'application/json',
       },
       body: JSON.stringify({
         answerQuestion: answer.value,
         id
       }),
     });
  
     const data = await res.json();

        document.querySelector('#errorQuestion').textContent = data.message
  });
}
