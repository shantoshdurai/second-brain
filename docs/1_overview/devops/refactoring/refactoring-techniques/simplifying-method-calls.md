---
title: Simplifying Method Calls
tags: Refactoring, CleanCode, Techniques
---

# Simplifying Method Calls

These [[what-is-refactoring|refactoring]] techniques make method calls simpler and easier to understand. This, in turn, simplifies the interfaces for interaction between classes.

## 1. Rename Method

**Problem:** The name of a method doesn't explain what the method does.

```java
class Customer {
  public String getnm() {
    return name;
  }
}
```

**Solution:** Rename the method so that the name accurately describes what it does.

```java
class Customer {
  public String getName() {
    return name;
  }
}
```

## 2. Add Parameter / Remove Parameter

**Problem:** A method either lacks the data it needs to execute, or it receives data that it doesn't use.

```javascript
// A department is no longer needed to get contact details
function getContact(person, department) {
    return person.phone;
}
```

**Solution:** Add the necessary parameter, or carefully remove the unused parameter from the method signature and all of its caller sites.

```javascript
function getContact(person) {
    return person.phone;
}
```

## 3. Replace Parameter with Method Call

**Problem:** You invoke a method and pass the result as a parameter to another method, while that second method could just call the first method itself.

```javascript
let basePrice = quantity * itemPrice;
let finalPrice = discountedPrice(basePrice);
```

**Solution:** Remove the parameter and let the receiving method invoke the sender method itself, reducing coupling.

```javascript
let finalPrice = discountedPrice(); // The logic to calculate basePrice is now calculated inside
```

### Further Reading

*   *[Refactoring.guru: Simplifying Method Calls](https://refactoring.guru/refactoring/techniques/simplifying-method-calls)*
