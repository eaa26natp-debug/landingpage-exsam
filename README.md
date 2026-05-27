# Oversigt over det jeg gøre.

Min landing page er for folk, som har brug for at have en hjemmeside, for noget simpel.

##### Forbedring
- Slideshow
- Søgefelt
- funktioner og specifikationer
- Billder af højtaler

## Opstarting.

#### Det første jeg gjorde efter Github og sæt min gamle landing page ind, var at lave struktur i mappefordeling.
Jeg valgte den her mappestruktur, fordi det er den jeg har lært om, når der er mange filer.

Mappestrukturen var meget rodet og med så mange css-mapper framme kunne det blive lidt forvirret.

Hvordan mappenstrukturen så ud.
![Som det så ud før.](/imges/gamle-mappe.png)

Mere struktur og mindre rodet at se på.

Hvordan mappestrukturen ser ud nu.
![Og sådan ser den ud nu.](/imges/nye-mappe.png)

Det gør det nemmere, at se hvad der er hvad, når man laver en CSS mappe og en JS mappe. Billeder har også deres mappe, som hedder imges, hvor man kan finde alle billeder som bliver brugt og nogle flere.

### Næsten var mange ting, som bare skulle tilføjes eller slettes

Så begyndte jeg at ændre få ting som farver og fjerne de overskyet ting.
Det næste blev at sætte Trustpilot ned til footeren og få det ud til siden med den rette størelse. Se hvad jeg kunne bruge og hvad efter min mening skulles ændre.

Jeg fik også lavet nye billeder som jeg valgte at bruge i stedet for nogle af de gamle.

Oprette en JS mappe.

Rette noget af det gamle, som jeg gerne ville have. Jeg flyttede trustpilot ned i bunden.

### Det næste ting jeg lavede
Så lavede jeg et søgefelt, som det første JS kode, jeg lavede. Oprettede de 4 firkanter med billeder af højtaleren.

Så begyndte jeg at lave slideshowt, i HTML, CSS og JS.


#### Funktioner og specifikationer
Lavede jeg helt om jeg, lavede mit eget forbedre design. Hvor der er hvide kasser i stedet for at de bare står med skrift og et billede. Lavede jeg to forskellige størrelser af kasser. 3 hvor som man kan flippe og hvor beskrivelsen hvor bag på og 2 stor, hvor der står i punktform af en lidt beskrivelse.

### Det sidste jeg lavede
Er at rette i min kode, for at være sikker på at der ikke er nogle fejl. Ændre så mange div tegn. Fjerne de som ikke bliver brugt. Skrive README færdig.

#### JS beskrivelse
Er koden som bruge til søgning. Det gøre, at man kan skrive noget ind i søgefeltet. Det får hjemmesiden til at virke som en rigtig hjemmeside, hvopr man kan søge på.
```JS
function toggleSearch() {
  document.querySelector(".search-input").classList.toggle("active");
}
````

####  HTML kode
Er koden til containerne med billeder af højttaleren.
```HTML
<article class="indfrocard">
    <img class="whitespeaker" src="imges/img1/bco.png" alt="">
    <p class="text">Lavender Mist</p>
</article>
```

### Validering af HTML
Jeg har validet index og så jeg har advarsler, som jeg gerne må have, men ingen fejl.
![Validering af HTML.](/imges/validering-af-htmlpng)

### Validering af CSS
Da jeg har 5 css filer, har jeg validede jeg dem alle. Jeg har ikke nogle fejl, hvilket er godt.

Specs, hvor jeg har funktioner og specifikationer, gif.
![Validering af CSS.](/imges/validering-af-css1.png)

Forsiden, billedene af højtaleren og menu-bar.
![Validering af CSS.](/imges/validering-af-css2.png)

Shildeshow og trustpilot
![Validering af CSS.](/imges/validering-af-css3.png)

Boxene.
![Validering af CSS.](/imges/validering-af-css4.png)

Flip card.
![Validering af CSS.](/imges/valiafcss.png)