const btn = document.getElementById('btn');

const text = document.getElementById('test');

btn.addEventListener('click', () => {
  text.textContent = 'ボタンをクリックしました';
});
