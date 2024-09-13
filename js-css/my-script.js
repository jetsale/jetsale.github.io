(function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "o2ogkm4170");

function openImage(imgElement) {
    const modal = new bootstrap.Modal(document.getElementById('imageModal'));
    document.getElementById('fullSizeImage').src = imgElement.src;
    modal.show();
  }

  document.addEventListener('DOMContentLoaded', function () {
    const startYear = 2022; // Рік, коли ваша компанія була заснована або коли почалося право авторства
    const currentYear = new Date().getFullYear(); // Отримуємо поточний рік
    document.getElementById('start-year').textContent = startYear;
    document.getElementById('end-year').textContent = currentYear;
}); 

function addOrderText (text) {
  var textarea = document.getElementById("description");
  textarea.value += text;
  const formElement = document.getElementById('order');
  formElement.scrollIntoView({ behavior: 'smooth' });
}

  // alert('test');
  
/* test text <h1> test html </h1> <script>alert('test js');</script>   */

// Функція для отримання параметрів з URL
function getQueryParams() {
  const params = new URLSearchParams(window.location.search);
  const status = params.get('status');
  const message = params.get('message');
  return { status, message };
}

// Функція для декодування Base64 повідомлення
function decodeMessage(encodedMessage) {
  try {
      return atob(encodedMessage); // Декодування Base64
  } catch (e) {
      return 'Invalid message format';
  }
}

// Перевірка GET-параметрів і відображення повідомлення
function showAlert() {
  const { status, message } = getQueryParams();
  const alertContainer = document.getElementById('alert-container');
  
  if (status && message) {
      let alertClass = '';
      let alertMessage = decodeMessage(message);

      // Встановлення класу Bootstrap для alert
      if (status === '200') {
          alertClass = 'alert alert-success';
      } else if (status === '400') {
          alertClass = 'alert alert-danger';
      }

      // Додавання повідомлення в HTML
      if (alertClass) {
          alertContainer.innerHTML = `
              <div class="${alertClass}" role="alert">
                  ${alertMessage}
              </div>
          `;
      }

      // Прокрутка до форми після додавання alert
      const formElement = document.getElementById('order');
      formElement.scrollIntoView({ behavior: 'smooth' });
  }
}

// Виклик функції після завантаження сторінки
window.onload = showAlert;
