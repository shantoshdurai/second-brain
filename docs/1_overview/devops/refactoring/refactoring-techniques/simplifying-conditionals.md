---
title: Simplifying Conditional Expressions
tags: Refactoring, CleanCode, Techniques
---

# Simplifying Conditional Expressions

Conditionals tend to get more and more complicated in their logic over time, and there are yet more techniques to combat this as well.

## 1. Decompose Conditional

**Problem:** You have a complex conditional (`if-then`/`else` or `switch`).

```javascript
if (date.before(SUMMER_START) || date.after(SUMMER_END)) {
  charge = quantity * winterRate + winterServiceCharge;
} else {
  charge = quantity * summerRate;
}
```

**Solution:** Decompose the complicated parts of the conditional into separate methods. The condition, `then`, and `else` should be extracted.

```javascript
if (isNotSummer(date)) {
  charge = winterCharge(quantity);
} else {
  charge = summerCharge(quantity);
}
```

## 2. Replace Nested Conditional with Guard Clauses

**Problem:** You have a group of nested conditionals that make it hard to determine the normal flow of code execution.

```java
public double getPayAmount() {
  double result;
  if (isDead) {
    result = deadAmount();
  } else {
    if (isSeparated) {
      result = separatedAmount();
    } else {
      if (isRetired) {
        result = retiredAmount();
      } else {
        result = normalPayAmount();
      }
    }
  }
  return result;
}
```

**Solution:** Isolate all special checks and edge cases into independent "Guard Clauses" and place them before the main checks. A guard clause says "If this edge case is true, bail out and return right away."

```java
public double getPayAmount() {
  if (isDead) {
    return deadAmount();
  }
  if (isSeparated) {
    return separatedAmount();
  }
  if (isRetired) {
    return retiredAmount();
  }
  
  // Normal flow is much clearer now
  return normalPayAmount();
}
```

### Further Reading

*   *[Refactoring.guru: Simplifying Conditional Expressions](https://refactoring.guru/refactoring/techniques/simplifying-conditional-expressions)*
