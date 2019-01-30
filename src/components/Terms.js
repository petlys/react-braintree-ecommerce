import React from 'react'
import styled from 'styled-components'
import { Helmet } from 'react-helmet'

const Header = styled.h1`
  display: flex;
  align-items: center;
  :first-child {
    margin-top: 0;
  }
`

type Props = {}

export const Terms = (props: Props) => (
  <div>
    <Helmet>
      <title>Adaptere.no - Kjøpsbetingelser</title>
      <meta name="description" content="Kjøpsbetingelser" />
      <link rel="canonical" href="https://adaptere.no/betingelser" />
      <meta property="og:title" content="Adaptere.no - Kjøpsbetingelser" />
      <meta property="og:description" content="Kjøpsbetingelser" />
      <meta property="og:image" content="https://adaptere.no/thumbnail.png" />
      <meta property="og:url" content="https://adaptere.no/betingelser" />
    </Helmet>

    <Header>Våre betingelser</Header>

    <ol>
      <li>
        <a href="#salgsbetingelser">Salgsbetingelser</a>
      </li>
      <li>
        <a href="#betalingSikkerhetPersonvern">Betaling, sikkerhet og personvern.</a>
      </li>
    </ol>

    <h3>
      <a id="salgsbetingelser">Salgsbetingelser</a>
    </h3>
    <p>
      Salgsbetingelsene gjelder for salg av alle varer, produkter og tjenester fra vår butikk til forbrukeren. Vilkårene
      utgjør sammen med din bestilling et samlet avtalegrunnlag for kjøpet. Dette bekreftes med en ordrebekreftelse.
    </p>

    <p>For å kunne handle i vår butikk må du ha fylt 18 år. Vi leverer kun til fastlands Norge.</p>
    <p>Dersom du er usikker på lovverk er forbrukerkjøp regulert i:</p>

    <ul>
      <li>
        <a href="http://www.lovdata.no/ltavd1/filer/nl-20020621-034.html">Forbrukerkjøpsloven</a>
      </li>
      <li>
        <a href="http://www.lovdata.no/all/nl-20001221-105.html">Angrerettloven</a>
      </li>
      <li>
        <a href="http://www.lovdata.no/all/nl-19720616-047.html">Markedsføringsloven</a>
      </li>
      <li>
        <a href="http://www.lovdata.no/all/nl-20000414-031.html">Personopplysningsloven</a>
      </li>
      <li>
        <a href="http://www.lovdata.no/all/nl-20030523-035.html">e-handelsloven</a>
      </li>
      <li>
        <a href="http://www.lovdata.no/all/nl-19850621-082.html">Kredittkjøpsloven</a>
      </li>
    </ul>

    <p>Følg lenkene til disse lovene hvis du vil ha mer informasjon om dine rettigheter og plikter ved kjøp.</p>

    <h4>a. Parter</h4>

    <p>Selger:</p>
    <p>
      Informasjon om selger og kontaktinformasjon vil du finne i butikken, samt eventuelle "Om oss" sider, kvitteringer
      og ordrebekreftelser og blir i det følgende benevnt "oss" eller "vi".
    </p>

    <p>Kjøper:</p>
    <p>
      Den person som er oppgitt som kjøper med personalia i bestillingen, og blir i det følgende benevnt "du", "deg",
      "din" eller "ditt".
    </p>

    <h4>b. Gjennomføring av kjøp i Nettbutikken</h4>

    <p>
      For at du skal føle deg trygg på hvordan man bestiller/handler i vår nettbutikk, har vi beskrevet kjøpsprosessen,
      som består av følgende punkter (rekkefølge kan avvike avhengig av salgskanal):
    </p>

    <ul>
      <li>Produktliste</li>
      <li>Valg av produkt(er)</li>
      <li>Handlekurven</li>
      <li>Bekreftelse av bestillingen</li>
      <li>Oppgjørsform og kontroll</li>
      <li>Utsendt ordrebekreftelse</li>
    </ul>

    <h4>c. Bestillings- og avtaleprosess</h4>

    <p>
      Din bestilling er bindende når bestillingen er registrert hos oss på vår server via bestillingsløpet. Vi er
      forpliktet og bundet til din bestilling så fremt den ikke avviker fra våre tilbud, priser, markedsføring eller
      annen måte uhensiktsmessig benyttes. Du har rett til å fratre dine forpliktelser i henhold til lov om angrerett.
      Ved mottak av din bestilling vil vi bekrefte ordre automatisk. Vi ber deg lese igjennom ordrebekreftelsen nøye for
      å forsikre deg om at den er i henhold til din bestilling. Du vil få en kvittering ved forsendelse av varer
      automatisk eller vedlagt i pakken avhengig av oppgjørsform.
    </p>

    <h4>d. Opplysninger gitt i nettbutikken</h4>

    <p>
      Det vil alltid være et mål at alle opplysninger gitt av oss er korrekte og at all informasjon er i henhold til de
      faktiske forhold. Vi må imidlertid ta forbehold om skrivefeil, trykkfeil eller feilaktig prising. Dette kan i
      ytterste konsekvens resultere i at vi ikke kan levere i henhold til informasjonen gitt i nettbutikk eller
      markedsføring. Du vil få muligheten til å akseptere eventuelle nye oppdaterte tilbud med de endringer vi angir i
      forhold til din bestilling, eller kansellere bestillingen.
    </p>

    <h4>e. Priser</h4>

    <p>
      Alle priser er inkludert merverdiavgift og eventuelt miljøgebyr. Totalkostnaden for kjøpet vil fremkomme før
      bestilling og inkludere alle utgifter forbundet med kjøpet som utgifter til porto, frakt, emballasje m.m
    </p>

    <h4>f. Betaling</h4>

    <p>
      Kjøpesummen kan etter ditt eget valg gjøres opp gjennom tilgjengelige oppgjørsformer. Ved bruk av kort vil
      kjøpesummen bli reservert på kortet ved bestilling. Ved kansellering vil beløpet vi har reservert fjernes. Vær
      oppmerksom på at hverken reservasjon eller tilbaketrekking av reservasjon vil fremkomme på din kontoutskrift. Hvis
      reservasjon ikke kan foretas, forbeholder vi oss retten til å kansellere bestillingen.
    </p>

    <h4>g. Levering og forsinkelse</h4>

    <p>
      Levering av produktene skjer på den måte som er beskrevet i vilkår for forsendelse og retur. Vi har risikoen for
      produktene inntil de overtas av deg, det vil si når du har fått produktene i din besittelse. Avhengig av
      produktenes art og forsinkelsens lengde kan du etter omstendighetene kreve levering, kreve erstatning eller heve
      avtalen.
    </p>

    <h4>h. Undersøkelse av produktene</h4>

    <p>
      Etter at du har mottatt produktene, bør du så snart som mulig undersøke om leveransen er i samsvar med
      ordrebekreftelsen, om produktene er blitt skadet under transporten, eller om produktene ellers har feil eller
      mangler.
    </p>

    <h4>i. Dine rettigheter ved feil og mangler (Reklamasjon)</h4>

    <p>
      Dersom produktene har feil eller mangler kan du etter omstendighetene kreve retting av feilen, omlevering,
      prisavslag, erstatning eller at kjøpet heves. Feilen må foreligge når du får produktene i din besittelse. Melding
      om feil og mangler ved produktene kan overbringes oss skriftlig. Dette må skje innen rimelig tid etter at du
      oppdaget feilen eller mangelen. Du har likevel alltid minst to måneders reklamasjonsfrist etter
      forbrukerkjøpsloven. Retten til å reklamere gjelder i to år etter at du overtok produktet, eller fem år dersom
      produktet er ment å vare vesentlig mer enn to år. Retten til reklamasjon kommer i tillegg til angreretten etter
      pkt. k.
    </p>

    <h4>j. Garanti</h4>

    <p>
      Våre garantier innebærer ingen begrensninger i reklamasjonsfristen for varer etter forbrukerkjøpsloven.
      Reklamasjonsfristen er to år etter at du overtok varen, eller fem år dersom varen er ment å vare vesentlig mer enn
      to år. Se for øvrig pkt. 9.
    </p>

    <h4>k. Angrerett</h4>

    <p>
      Angrerettloven gir deg rett til å angre ditt kjøp. Angreretten gjelder for varer og for enkelte tjenester.
      Angreretten forutsetter at du senest innen 14 dager etter at du mottar leveransen gir oss melding om dette
      (angrefrist). Last ned angrerettskjema{' '}
      <a href="http://www.signform.no/dss/statlige-blanketter?task=form.downloadFile&id=6174">her</a>. Dersom du ikke
      har mottatt angrerettskjema enten i ordrebekreftelsen eller ved levering av produktene, utvides denne fristen til
      tre måneder. For at angreretten skal kunne gjøres gjeldende, må produktet være levert oss i tilnærmet samme mengde
      og stand som du mottok den. Alle produkter skal leveres tilbake til oss innen rimelig tid. Tilbakebetaling skal
      finne sted innen fjorten dager etter at vi mottar produktet fra deg eller henteseddel eller produktet er stilt til
      rådighet for oss. Eventuell returforsendelse må betales av deg. Produktet sendes tilbake til oss, om mulig i
      originalemballasje, sammen med angrerettskjema og kopi av ordrebekreftelse eller faktura. Nærmere opplysninger om
      hvordan du benytter deg av angreretten, fremgår av angrerettskjemaet. Angreretten gjelder ikke for CD-plater,
      DVD-plater, VHS-kassetter eller datamaskinprogrammer når forseglingen på produktet er brutt. Ved kjøp av produkter
      i elektronisk format (lyd- eller bildeopptak, datamaskinprogram, Word filer, PDF- filer ol.) faller retten til å
      angre bestillingen bort idet du har mottatt den elektroniske forsendelsen med filen på din server.
    </p>

    <h4>l. Salgspant</h4>

    <p>
      Vi har salgspant i de leverte produkter inntil kjøpesummen inkludert renter og omkostninger er betalt i sin
      helhet.
    </p>

    <h4>m. Tvister</h4>

    <p>
      Partene skal forsøke å løse eventuelle tvister i minnelighet. Dersom dette ikke lykkes, kan du bringe saken inn
      for Forbrukerrådet. Alle tvister skal løses etter norsk rett. Bringes saken inn for domstolene, skal den avgjøres
      i ditt (kjøperens) verneting, det vil normalt si i nærheten av der du bor.
    </p>

    <h4>n. Salgsforbehold</h4>

    <p>
      Vi tar forbehold om prisendringer, samt trykkfeil og endringer i tekst, bilder og linker på våre nettsider eller
      markedsføring.
    </p>

    <h3>
      <a id="betalingSikkerhetPersonvern">2. Betaling, sikkerhet og personvern</a>
    </h3>

    <p>Her finner du viktig informasjon om betaling og personvern.</p>

    <h4>a. Betaling</h4>

    <p>
      Som betalingsformidler benyttes PayPal, som leverer en trygg, sikker og stabil betalingsløsning. PayPal benytter
      bransjeledende sikkerhetsteknologi, og betalingssidene er kryptert og sikret, slik at ingen kan se din
      kortinformasjon, heller ikke vi. Les mer om PayPal og sikkerhet
      <a href="https://www.paypal.com/cgi-bin/webscr?cmd=xpt/Help/general/TopQuestion6-outside">her</a>.
    </p>

    <h4>b. Personvern og sikkerhet</h4>

    <p>
      Du må oppgi nødvendig personalia som kunde for å handle hos oss. Dette slik at vi skal ha tilstrekkelig
      informasjon til å gjennomføre oppgjør og forsendelse av varer. Din personlige betalingsinformasjon lagres ikke
      (håndteres valgfritt gjennom PayPal). Din bestilling, herunder leveringsinfo lagres i relasjon til utsendelse av
      vare(er), og eventuell nødvendig kundeoppfølging.
    </p>

    <h4>c. Annen informasjon</h4>

    <p>I tillegg til den informasjonen du legger inn hvis du legger inn en bestilling hos oss, vil vi kunne se:</p>
    <ul>
      <li>Hvilke av våre nettsider du har besøkt og når</li>
      <li>Hvilken nettleser du bruker</li>
      <li>Hvilken IP-adresse du har</li>
      <li>Hvilket geografisk område du kommer fra</li>
    </ul>

    <p>
      Opplysningene anvendes kun internt i forbindelse med eventuell statistikk, løsningsforbedring og teknisk drift av
      løsningen.
    </p>
  </div>
)

export default Terms
