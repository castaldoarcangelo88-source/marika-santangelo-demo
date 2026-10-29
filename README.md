# Marika Santangelo — PWA catalogo in staging

Bozza isolata creata il 2026-10-28. Repository pubblico della demo: `castaldoarcangelo88-source/marika-santangelo-demo`, branch sorgente `staging/demo`. La pubblicazione GitHub Pages va verificata separatamente; nessun backend o database è collegato. Per la prova locale, aprire con un server HTTP (per esempio `python -m http.server 8765` dalla cartella); `file://` non abilita il service worker.

Il 2026-10-29 la grafica è stata compattata su mobile e desktop: sezioni più ravvicinate, schede più basse e calendario meno dispersivo. Il foglio di stile è richiamato come `style.css?v=5` per evitare che l'anteprima mostri la vecchia versione in cache.

## Fonte e contenuto

- Logo: immagine `640224.jpg` fornita dal Titolare, copiata in `assets/marika-logo.jpg`.
- Identità visiva: lo stesso logo originale appare nella pagina, nell'intestazione e come favicon. Le icone PWA 192/512 sono riduzioni proporzionali del logo completo su sfondo bianco, senza ritagli né monogrammi.
- Servizi/prezzi: schermata WhatsApp `640222.jpg` fornita dal Titolare, poi elenco definitivo trascritto dal Titolare il 2026-10-29. I nove servizi e prezzi della PWA coincidono con l'elenco; nessun prezzo è stato modificato. La schermata non è pubblicata nella PWA e il nominativo del contatto non è riportato.
- Conferme del Titolare: trattamenti presso casa/studio privato, **non** a domicilio; richieste dal lunedì al sabato dalle 15:00, domenica esclusa.
- Il calendario consente di scegliere trattamento, giorno e orario preferito e prepara un messaggio WhatsApp. Si tratta di una **richiesta**, non di una prenotazione confermata o di uno slot bloccato.
- Il numero WhatsApp di Marika non è ancora noto: il cliente deve scegliere manualmente il contatto su WhatsApp. Il collegamento diretto a Marika resta da configurare. Le durate, l'indirizzo e la zona non sono stati confermati. Non vengono effettuati ritocchi alle extension: il trattamento viene eseguito nuovamente da capo. Nessun pagamento o database è collegato.

## Verifiche prima di un rilascio

Far approvare direttamente da Marika il logo, il listino trascritto dal Titolare, i testi, i giorni/orari e la dicitura “trattamenti presso casa”. Ottenere il numero WhatsApp e configurare il collegamento diretto prima di proporre questa funzione ai clienti. Verificare eventuali diritti sul logo e informativa privacy prima del rilascio. Eseguire controllo browser desktop/mobile, installazione e cache offline, accessibilità essenziale e assenza di riferimenti ad altri clienti.

## Rollback

Per lo staging locale, conservare questa cartella e registrare ogni modifica in `SESSION_LOG.md`. Il branch `main` del repository contiene il README iniziale e costituisce la base intatta; la demo vive su `staging/demo`. Prima di aggiornare il link pubblico, annotare il commit corrente e ripristinarlo tramite un commit di revert sul branch `staging/demo` se necessario. GitHub Pages va disattivato dalle impostazioni del repository per ritirare la demo pubblica.
