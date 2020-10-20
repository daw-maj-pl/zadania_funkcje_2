// Exercise 4.
document.querySelector('.input-text').addEventListener('input', e => {
  function giveMeSomething(text) {
    if (!text) {
      return null;
    }

    return `something ${text}`;
  } 

  document.querySelector('.log-full-text').textContent =  giveMeSomething(e.target.value);
});

// Exercise 5.
document.querySelector('.form-matches').addEventListener('submit', e => {

  // Metoda preventDefault() zapobiega m.in. automatycznemu odświeżaniu po zatwierdzeniu wpisanych danych.
  // Bez preventDefault() nastąpiłoby od razu odświeżenie i nie zdążylibyśmy zabaczyć wyników.
  e.preventDefault();
  const arr = [];

  function footballPoints(win, draw, loss) {
    return win * 3 + draw + loss * 0;
  }

  // Mamy 4 elementy input, dlatego poniższa pętla wykona się właśnie tyle razy.
  for (let i = 0; i < e.target.length; i++) {

    // Instrukcja warunkowa sprawdza, czy atrybut type elementu input ma wartość różną od number.
    // Interesują nas tylko trzy pierwsze elementy input z atrybutami type="number". Czwarty, którego nie chcemy uwzględnić, ma atrybut type="submit".
    // Jeżeli warunek zostanie spełniony, to instrukcja continue spowoduje przerwanie bieżącej iteracji pętli i przejście do następnej, a tym samym kod w bieżącej iteracji, następujący po instrukcji continue, nie zostanie wykonany.
    if (e.target[i].type !== 'number') continue

    // Zainicjowana wcześniej tablica zostanie wypełniona w odpowiedniej kolejności wartościami wpisanymi w elementy input i przekonwertowanymi (za pomocą funkcjiperseInt()) z typu string na typ number.
    arr.push(parseInt(e.target[i].value));
  }

  const allPoints = footballPoints(...arr);

  // Poniższa instrukcja warunkowa sprawdza, czy wypełniliśmy wszystkie pola.
  // Dodatkowy warunek allPoints !== 0 zapobiega wyświetlaniu się 'Wypełnij wszystkie pola' w przypadku gdybyśmy wpisali w każde pole wartość zero.
  if (!allPoints && allPoints !== 0) {
    document.querySelector('.log-points').textContent = 'Wypełnij wszystkie pola';
  } else {
    document.querySelector('.log-points').textContent = allPoints;
  }
});

// Exercise 6.
document.querySelector('.form-animals').addEventListener('submit', e => {
  e.preventDefault();
  const arr = [];
  
  function animalLegs(chicken, cow, pig) {
    return chicken * 2 + cow * 4 + pig * 4;
  }

  for (let i = 0; i < e.target.length; i++) {
    if (e.target[i].type !== 'number') continue
    arr.push(parseInt(e.target[i].value));
  }

  const allLegs = animalLegs(...arr);

  if (!allLegs && allLegs !== 0) {
    document.querySelector('.log-legs').textContent = 'Wypełnij wszystkie pola';
  } else {
    document.querySelector('.log-legs').textContent = allLegs;
  }  
});