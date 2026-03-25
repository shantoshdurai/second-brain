---
title: Algorithmic Bias
tags: AIEthics, MachineLearning, Sociology, DataScience
---

# Algorithmic Bias

Training a robot to hire the best software engineers by only showing it resumes of men named John.

**Algorithmic Bias** occurs when an AI system behaves in a way that reflects implicit values or prejudices, systematically discriminating against specific groups or individuals. 

Because [[machine-learning|Machine Learning]] models learn entirely from historical data, any human prejudice, historical inequality, or unbalanced sampling in that data will be mathematically encoded and repeated by the AI. An AI does not know what "fairness" is; it just optimizes for the patterns it was fed.

## Common Pathways for Bias

1.  **Unrepresentative Training Data:** If a facial recognition system is trained on a dataset containing 80% light-skinned male faces, the model will inherently struggle to identify dark-skinned or female faces accurately.
2.  **Historical Bias:** Amazon once built an AI recruiting tool to filter resumes. Because the tech industry historically hired mostly men, the AI learned that "female" was a negative indicator and actively penalized resumes containing words like "women's chess club captain."
3.  **Proxy Variables:** Even if you remove explicit demographic data like "Race," an algorithm can still discriminate using a proxy variable; such as "Zip Code," which might heavily correlate with race due to historical segregation (redlining).

## FAQs

*1. Are algorithms less biased than humans?*
Often, yes. A human judge might give harsher sentences before lunch because they are hungry. Algorithms are perfectly consistent. The danger is that while human bias is decentralized and varied, algorithmic bias is *centralized* and deployed at massive scale. If an algorithm is racist, it applies that racism instantly to a million decisions.

*2. How do we fix it?*
Through **Algorithmic Auditing** (having third parties test the model for disparate impact) and by curating extremely balanced, representative datasets before training ever begins.

### Further Reading

*   **Underlying Tech:** *[[machine-learning|Machine Learning]]*
*   **Human Equivalent:** *[[cognitive-biases|Cognitive Biases]]*
