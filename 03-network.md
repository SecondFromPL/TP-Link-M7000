---
layout: default
title: 3. Konfiguracja sieci i mostkowania
show_warning: false
---

[&laquo; Powrót do spisu treści]({{ site.baseurl }}/index.html){: .btn .btn-secondary .mb-4}

<h1 class="mb-4">3. Konfiguracja sieci i mostkowania</h1>

<p>Interfejs RNDIS został uruchomiony, ale wymaga przypisania do sieci lokalnej (LAN), aby Windows 11 otrzymał adres IP. Wykonaj poniższe polecenia w Telnecie:</p>

<div class="console-block shadow-sm">
  <button class="btn btn-outline-light copy-btn" onclick="copyToClipboard(this)">Kopiuj</button>
  <pre><code>ip addr flush dev rndis0
brctl addif bridge0 rndis0
ip link set dev rndis0 up
/etc/init.d/dnsmasq restart</code></pre>
</div>

<p>Następnie w systemie Windows 11 wyłącz i włącz wirtualną kartę sieciową w ustawieniach połączeń sieciowych, aby odświeżyć zapytanie DHCP.</p>

<div class="d-flex justify-content-between mt-5 border-top pt-4" markdown="1">
[&laquo; Wstecz]({{ site.baseurl }}/02-rndis.html){: .btn .btn-outline-secondary}
[Krok 4: Autostart ustawień &raquo;]({{ site.baseurl }}/04-autostart.html){: .btn .btn-primary .btn-lg}
</div>