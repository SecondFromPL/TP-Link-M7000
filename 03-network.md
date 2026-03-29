---
layout: default
title: 3. Konfiguracja sieci i mostkowania
show_warning: false
---

[&laquo; Strona główna]({{ site.baseurl }}/index.html){: .btn .btn-secondary .mb-4}

<h1 class="mb-4">3. Konfiguracja sieci i mostkowania</h1>

<p>Interfejs RNDIS został uruchomiony, ale wymaga przypisania do sieci lokalnej (LAN), aby Windows 11 otrzymał adres IP. Wykonaj poniższe polecenia w Telnecie:</p>

<div class="terminal-window d-flex align-items-center justify-content-between shadow-sm">
  <div class="copy-target">
    <span class="terminal-prompt">root@M7000:~#</span>
    <pre class="terminal-command"><code id="cmd3-1">ip addr flush dev rndis0</code></pre>
  </div>
  <button class="btn btn-sm btn-outline-light copy-btn" data-clipboard-target="#cmd3-1">Kopiuj</button>
</div>

<div class="terminal-window d-flex align-items-center justify-content-between shadow-sm">
  <div class="copy-target">
    <span class="terminal-prompt">root@M7000:~#</span>
    <pre class="terminal-command"><code id="cmd3-2">brctl addif bridge0 rndis0</code></pre>
  </div>
  <button class="btn btn-sm btn-outline-light copy-btn" data-clipboard-target="#cmd3-2">Kopiuj</button>
</div>

<div class="terminal-window d-flex align-items-center justify-content-between shadow-sm">
  <div class="copy-target">
    <span class="terminal-prompt">root@M7000:~#</span>
    <pre class="terminal-command"><code id="cmd3-3">ip link set dev rndis0 up</code></pre>
  </div>
  <button class="btn btn-sm btn-outline-light copy-btn" data-clipboard-target="#cmd3-3">Kopiuj</button>
</div>

<div class="terminal-window d-flex align-items-center justify-content-between shadow-sm">
  <div class="copy-target">
    <span class="terminal-prompt">root@M7000:~#</span>
    <pre class="terminal-command"><code id="cmd3-4">/etc/init.d/dnsmasq restart</code></pre>
  </div>
  <button class="btn btn-sm btn-outline-light copy-btn" data-clipboard-target="#cmd3-4">Kopiuj</button>
</div>

<p>Następnie w systemie Windows 11 wyłącz i włącz wirtualną kartę sieciową w ustawieniach połączeń sieciowych, aby odświeżyć zapytanie DHCP.</p>

<div class="d-flex justify-content-between mt-5 border-top pt-4" markdown="1">
[&laquo; 2. Aktywacja RNDIS]({{ site.baseurl }}/02-rndis.html){: .btn .btn-outline-secondary}
[4. Autostart &raquo;]({{ site.baseurl }}/04-autostart.html){: .btn .btn-primary}
</div>