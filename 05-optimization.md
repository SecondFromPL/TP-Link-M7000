---
layout: default
title: 5. Opcjonalne optymalizacje
show_warning: false
---

[&laquo; Powrót do spisu treści]({{ site.baseurl }}/index.html){: .btn .btn-secondary .mb-4}

<h1 class="mb-4">5. Opcjonalne: Optymalizacja i wyłączenie Wi-Fi</h1>

<p>Jeśli używasz routera wyłącznie po kablu USB, wyłączenie nadajnika Wi-Fi zmniejszy pobór prądu i obniży temperaturę urządzenia.</p>

<div class="console-block shadow-sm">
  <button class="btn btn-outline-light copy-btn" onclick="copyToClipboard(this)">Kopiuj</button>
  <pre><code>ip link set dev wlan0 down</code></pre>
</div>

<p>Aby ponownie włączyć interfejs Wi-Fi i przywrócić standardowe działanie bezprzewodowe, użyj polecenia:</p>

<div class="console-block shadow-sm">
  <button class="btn btn-outline-light copy-btn" onclick="copyToClipboard(this)">Kopiuj</button>
  <pre><code>ip link set dev wlan0 up</code></pre>
</div>

<div class="d-flex justify-content-start mt-5 border-top pt-4" markdown="1">
[&laquo; Wstecz]({{ site.baseurl }}/04-autostart.html){: .btn .btn-outline-secondary}
</div>