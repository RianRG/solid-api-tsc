# Solid API

A simple non functional API that contains SOLID concepts

## S: Single Dependency Principle
High-level modules should not depend on low-level modules. Both should depend on abstractions. This principle encourages loose coupling and modularity, making your code more maintainable and testable.

```
interface InvoicePersistence {
    save(invoice: Invoice): void;
}

class DatabasePersistence implements InvoicePersistence {
    save(invoice: Invoice): void {
        // Save to DB
    }
}

class FilePersistence implements InvoicePersistence {
    save(invoice: Invoice): void {
        // Save to file
    }
}
```

## O: Open-Closed Principle
Software entities should be open for extension, but closed for modification. This principle allows you to add new functionality without changing existing code, reducing the risk of introducing bugs.

```
interface Shape {
    area(): number;
}

class Rectangle implements Shape {
    area(): number {
        // Calculate area
    }
}

class Square implements Shape {
    area(): number {
        // Calculate area
    }
}
```

## L: Liskov Substitution Principle
Subtypes must be substitutable for their base types. This principle ensures that inheritance is used correctly and that your code behaves predictably.

```
interface CoffeeMachine {
    brewFilterCoffee(): Coffee;
}

class FilterCoffeeMachine implements CoffeeMachine {
    brewFilterCoffee(): Coffee {
        // Brew filter coffee
    }
}

class EspressoMachine implements CoffeeMachine {
    brewFilterCoffee(): Coffee {
        // Throw an exception or return a default coffee
    }
}
```

## I: Interface Segregation Principle
Clients should not be forced to depend on interfaces they do not use. This principle encourages smaller, more focused interfaces, reducing the coupling between modules.

```
interface Printer {
    print(): void;
}interface Scanner {
    scan(): void;
}

class MultiFunctionDevice implements Printer, Scanner {
    print(): void {
        // Print
    }

    scan(): void {
        // Scan
    }
}
```

## D: Dependency Inversion Principle
High-level modules should not depend on low-level modules. Both should depend on abstractions. This principle encourages loose coupling and modularity, making your code more maintainable and testable.

```
interface Printer {
    print(): void;
}interface Scanner {
    scan(): void;
}

class MultiFunctionDevice implements Printer, Scanner {
    print(): void {
        // Print
    }

    scan(): void {
        // Scan
    }
}
```


thank you
