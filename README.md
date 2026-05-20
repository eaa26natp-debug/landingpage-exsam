# Oversigt over det jeg gøre.

Min landing page er for folk, som har brug for at have en hjemmeside, for noget simpel.

##### Forbedring
- Slideshow
- Søgefelt
- funktioner og specifikationer
- Billder af højtaler

## Opstarting.

#### Det første jeg gjorde efter Github og sæt min gamle landing page ind, var at lave struktur i mappefordeling.

Hvordan mappenstrukturen så ud.
![Som det så ud før.](/imges/skærmbillede2026-05-1307-43-32.png)

Hvordan mappestrukturen ser ud nu.
![Og sådan ser den ud nu.](/imges/skærmbillede2026-05-1414-02-40.png)

### Næsten var mange ting, som bare skulle tilføjes eller slettes

Så begyndte jeg at ændre få ting som farver og fjerne de overskyet ting.
Det næste blev at sætte Trustpilot ned til footeren og få det ud til siden med den rette størelse. Se hvad jeg kunne bruge og hvad efter min mening skulles ændre.

Oprette en JS mappe.

### Det næste ting jeg lavede
Så lavede jeg et søgefelt og skrev noget JS kode ind. Som det første JS kode, jeg lavede. Oprettede de 4 firkanter med billeder af højtaleren.

Så begyndte jeg at lave slideshowt, i HTML, CSS og JS.

#### Funktioner og specifikationer
Lavede jeg helt om jeg, lavede mit eget forbedre design. Hvor der er hvide kasser i stedet for at de bare står med skrift og et billede. Lavede jeg to forskellige størrelser af kasser. 3 hvor som man kan flippe og hvor beskrivelsen hvor bag på og 2 stor, hvor der står i punktform af en lidt beskrivelse.

### Det sidste jeg lavede
Er at rette i min kode, for at være sikker på at der ikke er nogle fejl.

#### JS beskrivelse
Er koden som bruge til søgning. Det gøre, at man kan skrive noget ind i søgefeltet. Det får hjemmesiden til at virke som en rigtig hjemmeside, hvopr man kan søge på.
```JS
function toggleSearch() {
  document.querySelector(".search-input").classList.toggle("active");
}
````

####  HTML kode

```HTML
<article class="indfrocard">
    <img class="whitespeaker" src="imges/img1/bco.png" alt="">
    <p class="text">Lavender Mist</p>
</article>
```
