# tudasfelmero

This project is a simple calculator application that performs basic arithmetic operations: addition, subtraction, multiplication, and division. It also checks whether the results of these operations are even or odd.

## Project Structure

```
tudasfelmero
├── src
│   ├── main.js        # Entry point of the application
│   └── szamologep.js  # Contains arithmetic functions
├── package.json       # Project configuration and dependencies
└── README.md          # Project documentation
```

## Installation

To install the necessary dependencies, run:

```
npm install
```

## Usage

To run the application, use the following command:

```
node src/main.js
```

## Functions

### Arithmetic Operations

- **osszead(a, b)**: Returns the sum of `a` and `b`.
- **kivon(a, b)**: Returns the result of subtracting `b` from `a`.
- **szoroz(a, b)**: Returns the product of `a` and `b`.
- **eloszt(a, b)**: Returns the result of dividing `a` by `b`.

### Even or Odd Check

The results of the arithmetic operations are checked for evenness or oddness using the `is-even` library.