---
layout: default
title: 4. Autostart ustawień
show_warning: false
---

[&laquo; Powrót do spisu treści]({{ site.baseurl }}/index.html){: .btn .btn-secondary .mb-4}

<h1 class="mb-4">4. Autostart ustawień (rc.local)</h1>

<p>Ustawienia mostka znikną po restarcie. Aby je zachować, wstrzyknij polecenia do systemowego pliku rozruchowego.</p>

<div class="console-block shadow-sm">
  <button class="btn btn-outline-light copy-btn" onclick="copyToClipboard(this)">Kopiuj</button>
  <pre><code>sed -i '/exit 0/i ip addr flush dev rndis0\nbrctl addif bridge0 rndis0\nip link set dev rndis0 up' /etc/rc.local</code></pre>
</div>

<div class="d-flex justify-content-between mt-5 border-top pt-4" markdown="1">
[&laquo; Wstecz]({{ site.baseurl }}/03-network.html){: .btn .btn-outline-secondary}
[Krok 5: Optymalizacja &raquo;]({{ site.baseurl }}/05-optimization.html){: .btn .btn-primary .btn-lg}
</div>