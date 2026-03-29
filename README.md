# TP-Link M7000 USB Tethering

Projekt ten zawiera dokumentację krok po kroku, opisującą proces odblokowania funkcji udostępniania internetu (tethering) po kablu USB w routerze mobilnym TP-Link M7000 (sprzętowa wersja EU v2.0).

Domyślnie ten model używa portu USB wyłącznie do ładowania baterii. Ta instrukcja pozwala na wykorzystanie go jako przewodowej karty sieciowej RNDIS.

## 📖 Pełna dokumentacja

Szczegółowa instrukcja z poleceniami i opisem konfiguracji jest dostępna na stronie:
👉 **[https://secondfrompl.github.io/TP-Link-M7000/]** 👈


## Zawartość poradnika

1. Uzyskanie dostępu do powłoki Telnet (Root).
2. Zmiana trybu pracy portu USB (`uci` / RNDIS).
3. Konfiguracja interfejsów sieciowych i przypisanie do mostka.
4. Skrypt autostartu (utrwalenie konfiguracji po restarcie).
5. Opcjonalna optymalizacja (wyłączenie radia Wi-Fi).

---
**Uwaga:** Modyfikacja oprogramowania odbywa się na własne ryzyko i może skutkować utratą gwarancji.