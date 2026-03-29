---
layout: default
title: 4. Autostart ustawień
show_warning: false
---

[&laquo; Strona główna]({{ site.baseurl }}/index.html){: .btn .btn-secondary .mb-4}

<h1 class="mb-4">4. Autostart ustawień (rc.local)</h1>

<p>Ustawienia mostka znikną po restarcie. Aby je zachować, wstrzyknij polecenia do systemowego pliku rozruchowego.</p>

<div class="terminal-window d-flex align-items-center justify-content-between shadow-sm">
  <div class="copy-target">
    <span class="terminal-prompt">root@M7000:~#</span>
    <pre class="terminal-command"><code id="cmd4-1">sed -i '/exit 0/i ip addr flush dev rndis0\nbrctl addif bridge0 rndis0\nip link set dev rndis0 up' /etc/rc.local</code></pre>
  </div>
  <button class="btn btn-sm btn-outline-light copy-btn" data-clipboard-target="#cmd4-1">Kopiuj</button>
</div>

<div class="d-flex justify-content-between mt-5 border-top pt-4" markdown="1">
[&laquo; 3. Sieć]({{ site.baseurl }}/03-network.html){: .btn .btn-outline-secondary}
[5. Optymalizacje &raquo;]({{ site.baseurl }}/05-optimization.html){: .btn .btn-primary}
</div>