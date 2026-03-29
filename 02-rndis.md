---
layout: default
title: 2. Aktywacja trybu RNDIS
show_warning: false
---

<h1 class="mb-4">2. Aktywacja trybu RNDIS</h1>

<p>Połącz się z routerem za pomocą klienta Telnet. Zmień domyślny tryb pracy portu USB z <code>user</code> na <code>rndis</code> i zrestartuj urządzenie.</p>

<div class="terminal-window d-flex align-items-center justify-content-between shadow-sm">
  <div class="copy-target">
    <span class="terminal-prompt">root@M7000:~#</span>
    <pre class="terminal-command"><code id="cmd2-1">uci set usb_enum.enum.mode='rndis'</code></pre>
  </div>
  <button class="btn btn-sm btn-outline-light copy-btn" data-clipboard-target="#cmd2-1">Kopiuj</button>
</div>

<div class="terminal-window d-flex align-items-center justify-content-between shadow-sm">
  <div class="copy-target">
    <span class="terminal-prompt">root@M7000:~#</span>
    <pre class="terminal-command"><code id="cmd2-2">uci commit usb_enum</code></pre>
  </div>
  <button class="btn btn-sm btn-outline-light copy-btn" data-clipboard-target="#cmd2-2">Kopiuj</button>
</div>

<div class="terminal-window d-flex align-items-center justify-content-between shadow-sm">
  <div class="copy-target">
    <span class="terminal-prompt">root@M7000:~#</span>
    <pre class="terminal-command"><code id="cmd2-3">reboot</code></pre>
  </div>
  <button class="btn btn-sm btn-outline-light copy-btn" data-clipboard-target="#cmd2-3">Kopiuj</button>
</div>

<p>Po restarcie podłącz router kablem do komputera z Windows 11. System powinien wykryć nowe urządzenie sieciowe.</p>

<div class="d-flex mt-5 border-top pt-4" markdown="1">
[&laquo; 1. Telnet]({{ site.baseurl }}/01-telnet.html){: .btn .btn-outline-secondary}
[3. Sieć i mostkowanie &raquo;]({{ site.baseurl }}/03-network.html){: .btn .btn-primary .ms-auto}
</div>