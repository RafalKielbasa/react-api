# Zadanie Live Coding – Dashboard Użytkowników

## Cel

Stworzenie aplikacji webowej wykorzystującej API [JSONPlaceholder](https://jsonplaceholder.typicode.com/), która:

- Wyświetli dane użytkowników z endpointu `/users` w postaci estetycznych, responsywnych kafelków.
- Po kliknięciu w kafelek, otworzy panel boczny (sidebar), który pobierze i wyświetli element z endpointu `/posts` o numerze odpowiadającym `id` wybranego użytkownika.
- do stylowania używamy tailwind

---

## Wymagania funkcjonalne

1. **Pobieranie danych:**

   - Po kliknięciu kafelka, pobierz pojedynczy post korzystając z endpointu:
     `https://jsonplaceholder.typicode.com/user/<id>`
     - **Uwaga:** `<id>` to identyfikator użytkownika klikniętego kafelka.
   - Akcja ta powinna zostać wykonana na zdarzeniu onClick

2. **Interfejs użytkownika:**
   - **Panel boczny (Sidebar):**
     Po kliknięciu kafelka, otwórz panel boczny:
     - Panel powinien dynamicznie pobrać i wyświetlić dane z endpointu `/user/<id>` o `id` odpowiadającym `id` użytkownika.
     - Zadbaj o możliwość zamknięcia panelu.
     - Wyświetlamy wszystkie informacje dostępne w obiekcie. 
---

## Zadania Dodatkowe (opcjonalnie)

- **Animacje:**
  Dodaj lekkie animacje przy otwieraniu i zamykaniu panelu bocznego.
- **Filtrowanie/Szukajka:**
  Umożliw wyszukiwanie użytkowników wg nazwy lub miasta.


---

## Podsumowanie

Twoje zadanie polega na stworzeniu przejrzystego i responsywnego dashboardu użytkowników, w którym:

- Kafelki prezentują dane z `/users`
- Kliknięcie kafelka wywołuje panel boczny, pobierający dane z `/posts` o identycznym `id` użytkownika

Pamiętaj, aby kodować krok po kroku, dzieląc problem na mniejsze części i upewniając się, że każdy fragment działa poprawnie. W razie pytań – śmiało pytaj, aby rozwiać wszelkie wątpliwości!

Powodzenia!
