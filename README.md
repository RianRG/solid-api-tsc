# Solid API

A simple non functional API that contains SOLID concepts

## S: Single Responsability Principle
One class should have only one reason to change, and prepairing itself for a single responsability

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
Each subclass or derivated class should be passive for substitution by your base class or dad class.

```
class BasicAccount{
    yield(){
        return this.salary*0.15
    }
}

class SalaryAcount extends BasicAccount{
    yield(){
        throw new Error('Not authorizd')
    }
}
```
On this case, both functions return different results. So if a user uses SalaryAccount expecting the same result of BasicAccount, it will return a completely different result, breaking up the communication between classes. It violates LISKVOV principle.

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
Look, if one interface has two methods, we will be able to use 2 functions against our will, but with 2 differents one, now we can choose.

## D: Dependency Inversion Principle
High-level modules should not depend on low-level modules. Both should depend on abstractions. This principle encourages loose coupling and modularity, making your code more maintainable and testable.

```
class DatabaseService

class CreateUserController{
   constructor(private repository: DatabaseService){}
}

Instead of communicating with database on CreateUserController, we create a service for this, our controller cannot depend on which type of database we're using.
```


thank you
