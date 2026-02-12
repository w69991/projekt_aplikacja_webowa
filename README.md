# 🍲 Aplikacja Kucharska - Next.js & Supabase

Nowoczesna aplikacja webowa do przeglądania przepisów kulinarnych, zintegrowana z zewnętrznym API oraz systemem zarządzania ulubionymi pozycjami. Projekt zrealizowany w architekturze Serverless, zoptymalizowany pod kątem wydajności na krawędzi (Edge).

## 🚀 Live Demo
Aplikacja jest dostępna pod adresem: [https://projekt-aplikacja-webowa.pages.dev/](https://projekt-aplikacja-webowa.pages.dev/)

---

## 🛠️ Stos technologiczny

| Warstwa | Technologia |
| :--- | :--- |
| **Frontend** | Next.js 15 (App Router), TypeScript, Tailwind CSS |
| **Backend as a Service** | Supabase (PostgreSQL, Auth, RLS) |
| **Dane** | Zewnętrzne API Przepisów + Baza Supabase dla relacji |
| **Deployment** | Cloudflare Pages (Edge Runtime) |

---

## ✨ Kluczowe funkcjonalności

* **Autentykacja:** System rejestracji i logowania użytkowników (Supabase Auth).
* **Eksploracja:** Przeglądanie dynamicznej listy przepisów pobieranych w czasie rzeczywistym.
* **Ulubione:** Możliwość dodawania i usuwania przepisów z personalnej listy (z walidacją duplikatów).
* **Bezpieczeństwo:** Row Level Security (RLS) zapewniające izolację danych użytkowników.
* **Responsywność:** Interfejs w pełni dostosowany do urządzeń mobilnych i desktopowych.

---

## 💻 Instrukcja uruchomienia lokalnego

### 1. Wymagania wstępne
* Node.js (v18+)
* Konto w usłudze Supabase

### 2. Instalacja
```bash
# Sklonuj repozytorium
git clone [https://github.com/w69991/projekt_aplikacja_webowa](https://github.com/w69991/projekt_aplikacja_webowa)

# Wejdź do folderu
cd projekt_aplikacja_webowa

# Zainstaluj zależności (użyj flagi legacy-peer-deps w razie konfliktów)
npm install --legacy-peer-deps

#Uruchomienie
npm run dev

#Strona będzie pod adresem
http://localhost:3000