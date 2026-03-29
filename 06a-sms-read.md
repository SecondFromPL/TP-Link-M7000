---
layout: default
title: 6a. Odczyt SMS
show_warning: false
---

<h1 class="mb-4">Odczyt wiadomości SMS</h1>

<p>Uruchom ciągły nasłuch portu modemu w tle:</p>

<div class="terminal-window d-flex align-items-center justify-content-between shadow-sm">
  <div class="copy-target">
    <span class="terminal-prompt">root@M7000:~#</span>
    <pre class="terminal-command"><code id="cmd6a-1">cat /dev/ttyUSB1 &</code></pre>
  </div>
  <button class="btn btn-sm btn-outline-light copy-btn" data-clipboard-target="#cmd6a-1">Kopiuj</button>
</div>

<p>Przełącz modem w czytelny tryb tekstowy (Text Mode):</p>

<div class="terminal-window d-flex align-items-center justify-content-between shadow-sm">
  <div class="copy-target">
    <span class="terminal-prompt">root@M7000:~#</span>
    <pre class="terminal-command"><code id="cmd6a-2">echo -e "AT+CMGF=1\r" > /dev/ttyUSB1</code></pre>
  </div>
  <button class="btn btn-sm btn-outline-light copy-btn" data-clipboard-target="#cmd6a-2">Kopiuj</button>
</div>

<p>Wypisz wszystkie odebrane wiadomości SMS do konsoli:</p>

<div class="terminal-window d-flex align-items-center justify-content-between shadow-sm">
  <div class="copy-target">
    <span class="terminal-prompt">root@M7000:~#</span>
    <pre class="terminal-command"><code id="cmd6a-3">echo -e "AT+CMGL=\"ALL\"\r" > /dev/ttyUSB1</code></pre>
  </div>
  <button class="btn btn-sm btn-outline-light copy-btn" data-clipboard-target="#cmd6a-3">Kopiuj</button>
</div>

<div class="d-flex mt-5 border-top pt-4" markdown="1">
[&laquo; 6. Sterowanie Modemem]({{ site.baseurl }}/06-modem.html){: .btn .btn-outline-secondary}
[6b. Wysyłanie SMS &raquo;]({{ site.baseurl }}/06b-sms-send.html){: .btn .btn-primary .ms-auto}
</div>