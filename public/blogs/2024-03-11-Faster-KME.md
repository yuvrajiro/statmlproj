---
layout: left_auth_wide
classes: wide
title:  "fastkme : Faster Kaplan-Meier Estimator using JIT"
toc_sticky: true
tags: 
  - Survival Estimator
  - Machine Learning
category: statistics
share: true
comments: true
author_profile: true
author: yuvrajiro
---

The nonaprametric survival models like Nearest Neighbour, Kernel Survival, COBRA Survival or adaptive nearest neighbour
require fitting kaplan meier estimator, while tuning these models the kaplan meier estimator is calculated thousands of
time, this motivates us to create kaplan meier estimator which is faster than the existing one provided by the
scikit-survival library.

Numba one of the most popular library for speeding up the python code, it is a just-in-time compiler that translates a
subset of Python and NumPy code into fast machine code. It is a very powerful tool for speeding up the python code. We
have used numba to speed up the kaplan meier estimator.

Along with the faster kaplan meier estimator, for the kernelized models we need to calculate the weighted kaplan meier 
estimator, to solve this, using Numba we have creaated faster kaplan meier estimator and weighted kaplan meier estimator.
The repository is available at [fastkme](https://github.com/yuvrajiro/fastkme)

Here is how we can use, first of all we need to install libraries

```python
%%capture
!pip install git+https://github.com/yuvrajiro/fastkme
!pip install scikit-survival
```

Now let us import the kaplan meier estimator from both the packages

```python
# Importing Libraries
from fastkme.kme import kaplan_meier_estimator as proposed_kme
from sksurv.nonparametric import kaplan_meier_estimator as scikit_kme
import numpy as np
```

Let us see whether the proposed kaplan meier estimator is accurate, for this we will compare the proposed kaplan meier
with the tried and tested scikit-survival kaplan meier estimator.

```python
i = 0
while True:
    np.random.seed(i)
    time = np.random.randint(0,5000,100)
    event = np.random.randint(0,2,100).astype(bool)

    unique_time , surv = scikit_kme(event, time)
    unique_time2 , surv2 = proposed_kme(event, time)

    assert np.allclose(unique_time , unique_time2) , f"The unique time is not same {unique_time}, {unique_time2}"
    assert np.allclose(surv , surv2) , f"The survival probability is not same {surv}, {surv2}"

    if i > 99:
      print(f"The proposed and scikit survival kaplan mier estimator is same")
      break
    i += 1
```

    The proposed and scikit survival kaplan mier estimator is same

Now let us see the speed-up, first we will see the speed of the scikit-survival model

```python
%%timeit
scikit_kme(event, time)
```

    351 µs ± 15.7 µs per loop (mean ± std. dev. of 7 runs, 1000 loops each)

Now the proposed

```python
%%timeit
proposed_kme(event, time)
```

    9.11 µs ± 2.15 µs per loop (mean ± std. dev. of 7 runs, 100000 loops each)

The wighted one can be computed as follows

```python
from fastkme.kme import kaplan_meier_estimator_w as weighted_kme

weight = np.random.rand(100)
weighted_kme(event,time,weight)
```

Thanks for reading, If you work on the intesection of ML and survival analysis,I would like to connect.









