---
layout: default
title: 5. Opcjonalne optymalizacje
show_warning: false
---

<h1 class="mb-4">5. Opcjonalne: Optymalizacja i wyłączenie Wi-Fi</h1>

<p>Jeśli używasz routera wyłącznie po kablu USB, wyłączenie nadajnika Wi-Fi zmniejszy pobór prądu i obniży temperaturę urządzenia.</p>

<div class="terminal-window d-flex align-items-center justify-content-between shadow-sm">
  <div class="copy-target">
    <span class="terminal-prompt">root@M7000:~#</span>
    <pre class="terminal-command"><code id="cmd5-1">ip link set dev wlan0 down</code></pre>
  </div>
  <button class="btn btn-sm btn-outline-light copy-btn" data-clipboard-target="#cmd5-1">Kopiuj</button>
</div>

<p>Aby ponownie włączyć interfejs Wi-Fi i przywrócić standardowe działanie bezprzewodowe, użyj polecenia:</p>

<div class="terminal-window d-flex align-items-center justify-content-between shadow-sm">
  <div class="copy-target">
    <span class="terminal-prompt">root@M7000:~#</span>
    <pre class="terminal-command"><code id="cmd5-2">ip link set dev wlan0 up</code></pre>
  </div>
  <button class="btn btn-sm btn-outline-light copy-btn" data-clipboard-target="#cmd5-2">Kopiuj</button>
</div>

<div class="d-flex mt-5 border-top pt-4" markdown="1">
[&laquo; 4. Autostart]({{ site.baseurl }}/04-autostart.html){: .btn .btn-outline-secondary}
[6. Sterowanie Modemem &raquo;]({{ site.baseurl }}/06-modem.html){: .btn .btn-primary .ms-auto}
</div>