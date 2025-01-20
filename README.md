# tudasfelmero

Ez a projekt egy egyszerű számológép alkalmazás, amely alapvető számtani műveleteket végez: összeadást, kivonást, szorzást és osztást. Azt is ellenőrzi, hogy ezeknek a műveleteknek az eredménye páros vagy páratlan.
## Project Structure

```
tudasfelmero
├── src
│   ├── main.js        # Entry point of the application
│   └── szamologep.js  # Contains arithmetic functions
├── package.json       # Project configuration and dependencies
└── README.md          # Project documentation
```

## Installáció

To install the necessary dependencies, run:

```
npm install
```

## Használat

A szükséges csomagok telepítéséhez futtassa a következőt:
```
node src/main.js
```

## Funkcik

### Aritmetikai műveletek

- **osszead(a, b)**: Visszaadja `a` és `b` összegét.
- **kivon(a, b)**: Visszaadja a `b` kivonásának eredményét `a`-ból.
- **szoroz(a, b)**: Visszaadja `a` és `b` szorzatát.
- **eloszt(a, b)**: Az `a` és `b` osztásának eredményét adja vissza.

### Páros vagy páratlan ellenőrzés

Az aritmetikai műveletek eredményeit az `is-even` könyvtár segítségével ellenőrizzük a páros vagy páratlan értékekre.
