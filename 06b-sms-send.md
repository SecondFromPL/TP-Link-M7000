---
layout: default
title: 6b. Wysyłanie SMS
show_warning: false
---

<h1 class="mb-4">Wysyłanie wiadomości SMS</h1>

<p>Upewnij się, że tryb tekstowy jest włączony:</p>

<div class="terminal-window d-flex align-items-center justify-content-between shadow-sm">
  <div class="copy-target">
    <span class="terminal-prompt">root@M7000:~#</span>
    <pre class="terminal-command"><code id="cmd6b-1">echo -e "AT+CMGF=1\r" > /dev/ttyUSB1</code></pre>
  </div>
  <button class="btn btn-sm btn-outline-light copy-btn" data-clipboard-target="#cmd6b-1">Kopiuj</button>
</div>

<p>Inicjacja wysyłania (podmień numer na docelowy):</p>

<div class="terminal-window d-flex align-items-center justify-content-between shadow-sm">
  <div class="copy-target">
    <span class="terminal-prompt">root@M7000:~#</span>
    <pre class="terminal-command"><code id="cmd6b-2">echo -e "AT+CMGS=\"+48123456789\"\r" > /dev/ttyUSB1</code></pre>
  </div>
  <button class="btn btn-sm btn-outline-light copy-btn" data-clipboard-target="#cmd6b-2">Kopiuj</button>
</div>

<p>Wysłanie treści wiadomości i zatwierdzenie (znak HEX \x1A to kombinacja CTRL+Z kończąca SMS w modemie):</p>

<div class="terminal-window d-flex align-items-center justify-content-between shadow-sm">
  <div class="copy-target">
    <span class="terminal-prompt">root@M7000:~#</span>
    <pre class="terminal-command"><code id="cmd6b-3">echo -e "Tresc wiadomosci\x1A" > /dev/ttyUSB1</code></pre>
  </div>
  <button class="btn btn-sm btn-outline-light copy-btn" data-clipboard-target="#cmd6b-3">Kopiuj</button>
</div>

<div class="d-flex mt-5 border-top pt-4" markdown="1">
[&laquo; 6a. Odczyt SMS]({{ site.baseurl }}/06a-sms-read.html){: .btn .btn-outline-secondary}
[6c. Komendy AT &raquo;]({{ site.baseurl }}/06c-at-commands.html){: .btn .btn-primary .ms-auto}
</div>