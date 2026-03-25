---
title: Organizing Data
tags: Refactoring, CleanCode, Techniques
---

# Organizing Data

These [[what-is-refactoring|refactoring]] techniques help with data handling, replacing primitives with rich class functionality. Another important result is untangling of class associations, which makes classes more portable and reusable.

## 1. Replace Magic Number with Symbolic Constant

**Problem:** Your code uses a number that has a certain meaning to it.

```javascript
function potentialEnergy(mass, height) {
  // 9.81 is a magic number
  return mass * height * 9.81;
}
```

**Solution:** Replace this number with a constant that has a human-readable name explaining the meaning of the number.

```javascript
const GRAVITATIONAL_CONSTANT = 9.81;

function potentialEnergy(mass, height) {
  return mass * height * GRAVITATIONAL_CONSTANT;
}
```

## 2. Encapsulate Field

**Problem:** You have a public field. Public fields are a bad idea because you can't assert any control over how they are accessed or updated by other parts of the application.

```java
class Person {
  public String name;
}
```

**Solution:** Make the field private and create accessors (getters/setters) for it.

```java
class Person {
  private String name;

  public String getName() {
    return name;
  }

  public void setName(String arg) {
    name = arg;
  }
}
```

### Further Reading

*   *[Refactoring.guru: Organizing Data](https://refactoring.guru/refactoring/techniques/organizing-data)*
