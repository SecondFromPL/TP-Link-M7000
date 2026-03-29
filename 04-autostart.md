---
layout: default
title: 4. Autostart ustawień (Skrypt)
show_warning: false
---

<h1 class="mb-4">4. Autostart ustawień (Własny skrypt)</h1>

<p>Zamiast wstrzykiwać bezpośrednio komendy do pliku systemowego, stworzymy dedykowany skrypt przechowujący nasze ustawienia perystentne, a następnie podepniemy go do <code>rc.local</code>.</p>

<p>Utwórz skrypt konfiguracyjny z komendami:</p>

<div class="terminal-window d-flex align-items-center justify-content-between shadow-sm">
  <div class="copy-target">
    <span class="terminal-prompt">root@M7000:~#</span>
    <pre class="terminal-command"><code id="cmd4-1">echo -e "#!/bin/sh\nip addr flush dev rndis0\nbrctl addif bridge0 rndis0\nip link set dev rndis0 up\n/etc/init.d/dnsmasq restart" > /etc/m7000_custom.sh</code></pre>
  </div>
  <button class="btn btn-sm btn-outline-light copy-btn" data-clipboard-target="#cmd4-1">Kopiuj</button>
</div>

<p>Nadaj mu prawa do wykonywania:</p>

<div class="terminal-window d-flex align-items-center justify-content-between shadow-sm">
  <div class="copy-target">
    <span class="terminal-prompt">root@M7000:~#</span>
    <pre class="terminal-command"><code id="cmd4-2">chmod +x /etc/m7000_custom.sh</code></pre>
  </div>
  <button class="btn btn-sm btn-outline-light copy-btn" data-clipboard-target="#cmd4-2">Kopiuj</button>
</div>

<p>Dodaj wywołanie do autostartu:</p>

<div class="terminal-window d-flex align-items-center justify-content-between shadow-sm">
  <div class="copy-target">
    <span class="terminal-prompt">root@M7000:~#</span>
    <pre class="terminal-command"><code id="cmd4-3">sed -i '/exit 0/i /etc/m7000_custom.sh' /etc/rc.local</code></pre>
  </div>
  <button class="btn btn-sm btn-outline-light copy-btn" data-clipboard-target="#cmd4-3">Kopiuj</button>
</div>

<div class="d-flex mt-5 border-top pt-4" markdown="1">
[&laquo; 3. Sieć]({{ site.baseurl }}/03-network.html){: .btn .btn-outline-secondary}
[5. Optymalizacje &raquo;]({{ site.baseurl }}/05-optimization.html){: .btn .btn-primary .ms-auto}
</div>