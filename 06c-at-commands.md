---
layout: default
title: 6c. Przydatne komendy AT
show_warning: false
---

<h1 class="mb-4">Przydatne komendy AT</h1>

<p>Wysyłaj poniższe zapytania za pomocą konstrukcji <code>echo -e "KOMENDA\r" > /dev/ttyUSB1</code> (po wcześniejszym zrobieniu nasłuchu przez <code>cat /dev/ttyUSB1 &</code>).</p>

<div class="terminal-window d-flex align-items-center justify-content-between shadow-sm">
  <div class="copy-target">
    <span class="terminal-prompt">root@M7000:~#</span>
    <pre class="terminal-command"><code id="cmd6c-1">echo -e "AT+CSQ\r" > /dev/ttyUSB1</code></pre>
  </div>
  <button class="btn btn-sm btn-outline-light copy-btn" data-clipboard-target="#cmd6c-1">Kopiuj</button>
</div>

<div class="terminal-window d-flex align-items-center justify-content-between shadow-sm">
  <div class="copy-target">
    <span class="terminal-prompt">root@M7000:~#</span>
    <pre class="terminal-command"><code id="cmd6c-2">echo -e "AT+CIMI\r" > /dev/ttyUSB1</code></pre>
  </div>
  <button class="btn btn-sm btn-outline-light copy-btn" data-clipboard-target="#cmd6c-2">Kopiuj</button>
</div>

<div class="terminal-window d-flex align-items-center justify-content-between shadow-sm">
  <div class="copy-target">
    <span class="terminal-prompt">root@M7000:~#</span>
    <pre class="terminal-command"><code id="cmd6c-3">echo -e "AT+CGMI\r" > /dev/ttyUSB1</code></pre>
  </div>
  <button class="btn btn-sm btn-outline-light copy-btn" data-clipboard-target="#cmd6c-3">Kopiuj</button>
</div>

<div class="d-flex mt-5 border-top pt-4" markdown="1">
[&laquo; 6b. Wysyłanie SMS]({{ site.baseurl }}/06b-sms-send.html){: .btn .btn-outline-secondary}
</div>