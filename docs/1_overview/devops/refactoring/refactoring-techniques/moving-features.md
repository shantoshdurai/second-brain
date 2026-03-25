---
title: Moving Features between Objects
tags: Refactoring, CleanCode, Techniques
---

# Moving Features between Objects

Even if you have distributed functionality among different classes in a less-than-perfect way, there is still hope. These [[what-is-refactoring|refactoring]] techniques show how to safely move functionality between classes, create new classes, and hide implementation details from public access.

## 1. Move Method

**Problem:** A method is used more in another class than in its own class.

```java
// The Account class calculates overdraft charges based on an AccountType.
class Account {
  private AccountType type;
  private int daysOverdrawn;
  
  // This method relies more on AccountType than Account itself
  double overdraftCharge() {
    if (type.isPremium()) {
      double result = 10;
      if (daysOverdrawn > 7) {
        result += (daysOverdrawn - 7) * 0.85;
      }
      return result;
    } else {
      return daysOverdrawn * 1.75;
    }
  }
}
```

**Solution:** Create a new method in the class that uses the method the most, then move code from the old method to there. Turn the code of the original method into a reference to the new method in the other class or else remove it entirely.

```java
class AccountType {
  // Method is moved here
  double overdraftCharge(int daysOverdrawn) {
    if (isPremium()) {
      double result = 10;
      if (daysOverdrawn > 7) {
        result += (daysOverdrawn - 7) * 0.85;
      }
      return result;
    } else {
      return daysOverdrawn * 1.75;
    }
  }
}

class Account {
  private AccountType type;
  private int daysOverdrawn;
  
  double overdraftCharge() {
    return type.overdraftCharge(daysOverdrawn);
  }
}
```

## 2. Extract Class

**Problem:** When one class does the work of two, awkwardness results.

```java
class Person {
  private String name;
  private String officeAreaCode;
  private String officeNumber;

  public String getTelephoneNumber() {
    return ("(" + officeAreaCode + ") " + officeNumber);
  }
}
```

**Solution:** Instead, create a new class and place the fields and methods responsible for the relevant functionality in it.

```java
class TelephoneNumber {
  private String areaCode;
  private String number;

  public String getTelephoneNumber() {
    return ("(" + areaCode + ") " + number);
  }
}

class Person {
  private String name;
  private TelephoneNumber officeTelephone = new TelephoneNumber();

  public String getTelephoneNumber() {
    return officeTelephone.getTelephoneNumber();
  }
}
```

### Further Reading

*   *[Refactoring.guru: Moving Features](https://refactoring.guru/refactoring/techniques/moving-features)*
