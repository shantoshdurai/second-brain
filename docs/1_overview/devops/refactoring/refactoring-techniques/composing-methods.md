---
title: Composing Methods
tags: Refactoring, CleanCode, Techniques
---

# Composing Methods

Much of [[what-is-refactoring|refactoring]] is devoted to correctly composing methods (functions). In most cases, excessively long methods are the root of all evil. The vagaries of code inside these massive functions conceal the execution logic and make the method extremely hard to understand and change.

The techniques in this group streamline methods, remove code duplication, and pave the way for future improvements.

## 1. Extract Method

**Problem:** You have a code fragment that can be grouped together.

```javascript
function printOwing() {
  printBanner();

  // Print details
  console.log("name: " + name);
  console.log("amount: " + getOutstanding());
}
```

**Solution:** Move this code to a separate new method (or function) and replace the old code with a call to the method.

```javascript
function printOwing() {
  printBanner();
  printDetails(getOutstanding());
}

function printDetails(outstanding) {
  console.log("name: " + name);
  console.log("amount: " + outstanding);
}
```

## 2. Inline Method

**Problem:** When a method body is more obvious than the method itself, use this technique.

```javascript
class PizzaDelivery {
  getRating() {
    return this.moreThanFiveLateDeliveries() ? 2 : 1;
  }

  moreThanFiveLateDeliveries() {
    return this.numberOfLateDeliveries > 5;
  }
}
```

**Solution:** Replace calls to the method with the method's content and delete the method itself.

```javascript
class PizzaDelivery {
  getRating() {
    return this.numberOfLateDeliveries > 5 ? 2 : 1;
  }
}
```

## 3. Extract Variable

**Problem:** You have an expression that is hard to understand.

```javascript
function renderBanner() {
  if ((platform.toUpperCase().indexOf("MAC") > -1) &&
       (browser.toUpperCase().indexOf("IE") > -1) &&
        wasInitialized() && resize > 0 )
  {
    // do something
  }
}
```

**Solution:** Place the result of the expression or its parts in separate variables that are self-explanatory.

```javascript
function renderBanner() {
  const isMacOs = platform.toUpperCase().indexOf("MAC") > -1;
  const isIE = browser.toUpperCase().indexOf("IE") > -1;
  const wasResized = resize > 0;

  if (isMacOs && isIE && wasInitialized() && wasResized) {
    // do something
  }
}
```

### Further Reading

*   *[Refactoring.guru: Composing Methods](https://refactoring.guru/refactoring/techniques/composing-methods)*
