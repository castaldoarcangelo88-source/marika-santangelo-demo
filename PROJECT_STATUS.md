# Stato PWA Marika Santangelo

Data: 2026-10-29. Ambiente: staging locale e demo pubblica GitHub Pages dal branch `staging/demo` di `castaldoarcangelo88-source/marika-santangelo-demo`, senza backend. URL: `https://castaldoarcangelo88-source.github.io/marika-santangelo-demo/`.

## Pronto

- PWA statica installabile con manifest, icone 192/512, service worker e consultazione offline.
- Calendario di richiesta appuntamento: lunedì-sabato, giorni futuri, orario dalle 15:00, scelta del trattamento e messaggio WhatsApp precompilato. Nessuna conferma o blocco automatico della disponibilità.
- Catalogo responsive di 9 voci dai materiali forniti: 3 extension, 3 laminazioni, 3 epilazioni viso.
- Il 2026-10-29 il Titolare ha trascritto l'elenco definitivo: tutte le nove voci e i relativi prezzi erano già corretti nella PWA. Confermato che i ritocchi non sono previsti e il trattamento viene rifatto da capo; testo esplicitato nella pagina.
- Revisione grafica del 2026-10-29: spazi, copertina, schede servizi, calendario e sezione informazioni resi più compatti e coerenti su mobile e desktop. CSS versionato per evitare la vecchia cache.
- Logo ricevuto dal Titolare e informazioni confermate: trattamenti presso casa, non a domicilio; richieste dal lunedì al sabato dalle 15:00.
- Logo originale identico nell'hero, nell'intestazione e nella favicon; icone installabili ricavate ridimensionando proporzionalmente lo stesso file. Rimosso il monogramma `MS`.
- Pagina marcata `noindex` e `Anteprima prenotazioni · Staging`.

## Verificato

- Browser desktop e viewport mobile 390×844: layout leggibile, menu servizi funzionante, logo caricato.
- Server locale: HTML, CSS, logo, JS, manifest, service worker e icone hanno risposto HTTP 200.
- Senza server locale, un reload ha mostrato ancora il catalogo dalla cache del service worker.
- JS `app.js` e `sw.js` sintatticamente validi; manifest JSON valido.
- GitHub Pages: workflow `pages-build-deployment` completato con successo il 2026-10-29; URL pubblico aperto nel browser, logo caricato, nove servizi e calendario presenti. Primo commit della PWA: `4d8b6f8af065c38add4273ecf7d93ca8d11bc664`.
- Calendario verificato nel browser: giorni passati e domeniche disabilitati; modulo e collegamento a WhatsApp presenti. Numero destinatario ancora mancante.

## Da confermare prima di pubblicare

- Conferma diretta di Marika su testi, logo e listino comunicato dal Titolare, prima di pubblicare.
- Durate, giorni, indirizzo e informazioni commerciali definitive.
- Eventuale dominio personalizzato resta da decidere; la demo è già raggiungibile sul dominio GitHub Pages.
- Numero WhatsApp di Marika: finché manca, l'utente deve selezionare manualmente il contatto e la consegna della richiesta a Marika non è garantita.
- Se in futuro saranno aggiunti contatti o prenotazioni, definire privacy e flusso dati separatamente.

## Continuità e rollback

Cartella autonoma in `staging/marika-santangelo-pwa-2026-10-28/`. Repository GitHub pubblico dedicato creato il 2026-10-29; il branch `main` conserva il README iniziale, mentre `staging/demo` ospita la demo. Questa cartella locale non è un clone Git: confrontare i file e il commit remoto prima di proseguire da un altro PC. Per ritirare la demo pubblica, nelle impostazioni Pages selezionare `None` e salvare; per annullare un aggiornamento del branch, creare un revert del commit interessato, senza force push. Comandi e URL sono in `README.md`.
