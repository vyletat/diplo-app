# Aplikace k diplomové práci - klirnt/frontend

## Technologie

Angular - https://angular.io

## Prerekvizity

Node.js: Angular je postaven na platformě Node.js, takže první prerekvizitou je mít Node.js nainstalovaný na svém počítači. Můžete si ho stáhnout z oficiálního webu Node.js (https://nodejs.org/).

Aplikace se spustí samostatně, ale ke správné funkcionalitě potřebuje mít spuštěný i server.

## Spuštění na lokálním zařízení

Spusťte `npm install` pro nainstalování závislostí aplikace.

Spusťte `ng serve` pro dev server. Přejděte na adresu `http://localhost:4200/`. Aplikace se automaticky znovu načte, pokud změníte některý ze zdrojových souborů.

Dokumentace se vygeneruje a spustí příkazem `compodoc -p tsconfig.doc.json -s`.

## Nasazení

Spusťte `ng build` pro sestavení projektu. Artefakty sestavení budou uloženy v adresáři `dist/`.

Aplikace také obsahuje Docker soubor pro nasazení v Dockeru.


Copyright (c) 2020 Tomáš Vyleta, MIT Licence
