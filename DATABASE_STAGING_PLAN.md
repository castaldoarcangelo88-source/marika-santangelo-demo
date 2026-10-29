# Marika — appuntamenti con Supabase (bozza di staging)

Data: 2026-10-29. Sorgente: copia della PWA pubblicata su GitHub Pages dal branch `staging/demo`, commit documentale `d34f582796ebd4a5c91ad3bc1e3a5ed9d0f5da6c`. Questa cartella è separata dalla demo pubblica.

## Stato verificato

- La PWA pubblica usa solo file statici e WhatsApp; non registra, modifica o cancella appuntamenti.
- Nell'account Supabase collegato non esiste un progetto Marika. Sono presenti progetti di altre attività, che non vanno riutilizzati per i dati di Marika.
- È presente una sola organizzazione Supabase visibile: `DevShare SRL`. La scelta dell'organizzazione per il nuovo progetto deve essere confermata dal Titolare; eventuale costo va mostrato e approvato prima della creazione.
- Supabase CLI non è presente nel PATH. Le modifiche allo schema andranno create e verificate tramite strumenti Supabase su un progetto isolato; nessuna tabella è stata creata.

## Flusso proposto, da confermare

1. La cliente invia una richiesta con trattamento, data e ora futura. I dati di contatto da raccogliere devono essere scelti dal Titolare.
2. La richiesta viene registrata con stato in attesa. Non è una conferma né un blocco dello slot: mancano le durate dei servizi e l'orario di chiusura.
3. Un pannello riservato, protetto da Supabase Auth, permette al soggetto autorizzato di leggere, modificare e annullare le richieste. Va definito se anche la cliente potrà modificare o annullare tramite link personale.
4. Le tabelle esposte alla Data API avranno RLS attiva e privilegi minimi. Il sito pubblico non potrà leggere, modificare o cancellare gli appuntamenti di altre persone. Nessuna chiave `service_role` o segreta sarà pubblicata nella PWA.
5. Prima di collegare la PWA pubblica: test su inserimento, aggiornamento, annullamento, autorizzazioni RLS, doppie richieste e accesso non autorizzato; verifica di informativa privacy e periodo di conservazione dei dati.

## Decisioni ancora necessarie

- Organizzazione Supabase del progetto Marika e costo effettivo.
- Chi può modificare/annullare: soltanto Marika o anche la cliente tramite link personale.
- Dati di contatto minimi della cliente: nome e telefono, oppure anche email.
- Identità e metodo di accesso del gestore; nessuna credenziale va scritta nei file.
- Durata dei trattamenti, orario finale e regole sulle sovrapposizioni, per trasformare le richieste in veri slot prenotabili.

## Confine e rollback

La demo GitHub Pages e il branch `staging/demo` restano invariati. Nessun progetto Supabase o dato reale è stato creato o modificato. Per annullare questa preparazione locale, eliminare soltanto la cartella `staging/marika-supabase-bookings-2026-10-29/` dopo averne verificato il percorso assoluto; non c'è rollback remoto.

## Fonti tecniche verificate

- Changelog Supabase: dal 2026 le nuove tabelle `public` potrebbero non essere esposte automaticamente alla Data API; servono `GRANT` espliciti oltre alla RLS.
- Documentazione Supabase: RLS obbligatoria sulle tabelle in schema esposto; chiave pubblicabile nel frontend, mai chiave segreta o `service_role`.
