---
layout: default
title: 2. Aktywacja trybu RNDIS
show_warning: false
---

[&laquo; Powrót do spisu treści]({{ site.baseurl }}/index.html){: .btn .btn-secondary .mb-4}

<h1 class="mb-4">2. Aktywacja trybu RNDIS</h1>

<p>Połącz się z routerem za pomocą klienta Telnet. Zmień domyślny tryb pracy portu USB z <code>user</code> na <code>rndis</code> i zrestartuj urządzenie.</p>

<div class="console-block shadow-sm">
  <button class="btn btn-outline-light copy-btn" onclick="copyToClipboard(this)">Kopiuj</button>
  <pre><code>uci set usb_enum.enum.mode='rndis'
uci commit usb_enum
reboot</code></pre>
</div>

<p>Po restarcie podłącz router kablem do komputera z Windows 11. System powinien wykryć nowe urządzenie sieciowe.</p>

<div class="d-flex justify-content-between mt-5 border-top pt-4" markdown="1">
[&laquo; Wstecz]({{ site.baseurl }}/01-telnet.html){: .btn .btn-outline-secondary}
[Krok 3: Konfiguracja sieci &raquo;]({{ site.baseurl }}/03-network.html){: .btn .btn-primary .btn-lg}
</div>