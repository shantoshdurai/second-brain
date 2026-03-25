---
title: Dealing with Generalization
tags: Refactoring, CleanCode, Techniques
---

# Dealing with Generalization

Abstraction has its own group of [[what-is-refactoring|refactoring]] techniques, primarily associated with moving functionality along the class inheritance hierarchy, creating new classes and interfaces, and replacing inheritance with delegation (or vice versa).

## 1. Pull Up Field / Pull Up Method

**Problem:** Two separate subclasses have the exact same field or method.

```java
class Employee {
  // Parent class
}

class Salesman extends Employee {
  private String name;
}

class Engineer extends Employee {
  private String name;
}
```

**Solution:** Remove the field/method from the subclasses and move it to the shared superclass.

```java
class Employee {
  protected String name;
}

class Salesman extends Employee {
  // Uses parent's name
}

class Engineer extends Employee {
  // Uses parent's name
}
```

## 2. Push Down Field / Push Down Method

**Problem:** A method or field exists in a superclass, but is only actually used by one specific subclass.

```java
class Employee {
  public double getQuota() { /*...*/ }
}

class Engineer extends Employee {
  // Engineers do not have sales quotas
}

class Salesman extends Employee {
  // Uses getQuota()
}
```

**Solution:** Move the field/method down from the parent class explicitly into the subclass that uses it.

```java
class Employee {
  // Removed getQuota()
}

class Engineer extends Employee { }

class Salesman extends Employee {
  public double getQuota() { /*...*/ }
}
```

### Further Reading

*   *[Refactoring.guru: Dealing with Generalization](https://refactoring.guru/refactoring/techniques/dealing-with-generalization)*
