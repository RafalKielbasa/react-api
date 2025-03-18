# Zadanie Live Coding – Dashboard Użytkowników

## Cel

Stworzenie aplikacji webowej wykorzystującej API [JSONPlaceholder](https://jsonplaceholder.typicode.com/), która:

- Wyświetli dane użytkowników z endpointu `/users` w postaci estetycznych, responsywnych kafelków.
- Po kliknięciu w kafelek, otworzy panel boczny (sidebar), który pobierze i wyświetli element z endpointu `/posts` o numerze odpowiadającym `id` wybranego użytkownika.
- do stylowania używamy tailwind

---

## Wymagania funkcjonalne

1. **Pobieranie danych:**

   - Wykorzystaj axios do pobrania listy użytkowników z endpointu:
     `https://jsonplaceholder.typicode.com/users`
   - Po kliknięciu kafelka, pobierz pojedynczy post korzystając z endpointu:
     `https://jsonplaceholder.typicode.com/posts/<id>`
     - **Uwaga:** `<id>` to identyfikator użytkownika klikniętego kafelka.

2. **Interfejs użytkownika:**

   - **Widok główny:**
     Wyświetl dane użytkowników w formie kafelków (grid layout). Każdy kafelek powinien zawierać:
   - wszytskie informacje dostępne w API
   - **Panel boczny (Sidebar):**
     Po kliknięciu kafelka, otwórz panel boczny:
     - Panel powinien dynamicznie pobrać i wyświetlić dane z endpointu `/posts` o `id` odpowiadającym `id` użytkownika.
     - Zadbaj o możliwość zamknięcia panelu.

3. **Design i responsywność:**

   - Upewnij się, że widok kafelków jest responsywny (np. używając CSS Grid lub Flexbox).
   - Panel boczny powinien płynnie się otwierać/zamykać i nie zakłócać widoku głównego.

4. **Obsługa błędów:**

   - Zaimplementuj komunikaty o błędach w przypadku nieudanego pobrania danych (np. wyświetl komunikat "Błąd ładowania danych" w panelu bocznym lub nad kafelkami).

5. **Wskazówki techniczne:**
   - Podziel kod na komponenty (np. `UserTile`, `Sidebar`, `UserGrid`).
   - Komponenty umieszczamy w folderze components
   - Zarządzaj stanem aplikacji.
   - Zadbaj o czytelność i modularność kodu – pisz komentarze tam, gdzie to konieczne.

---

## Zadania Dodatkowe (opcjonalnie)

- **Animacje:**
  Dodaj lekkie animacje przy otwieraniu i zamykaniu panelu bocznego.
- **Filtrowanie/Szukajka:**
  Umożliw wyszukiwanie użytkowników wg nazwy lub miasta.
- **Testy jednostkowe:**
  Dodaj proste testy (np. z użyciem Jest) dla głównych komponentów.

---

## Podsumowanie

Twoje zadanie polega na stworzeniu przejrzystego i responsywnego dashboardu użytkowników, w którym:

- Kafelki prezentują dane z `/users`
- Kliknięcie kafelka wywołuje panel boczny, pobierający dane z `/posts` o identycznym `id` użytkownika

Pamiętaj, aby kodować krok po kroku, dzieląc problem na mniejsze części i upewniając się, że każdy fragment działa poprawnie. W razie pytań – śmiało pytaj, aby rozwiać wszelkie wątpliwości!

Powodzenia!
