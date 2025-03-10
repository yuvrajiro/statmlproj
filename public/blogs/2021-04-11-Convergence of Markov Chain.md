---
layout: single
classes: wide
title: "Convergence of Markov Chain"
tagline : "Why we seek Convergence"
header:
  overlay_image: /assets/images/chain.jpg
  og_image: /assets/images/github.png
  caption: "Photo credit: [**Unsplash**](https://unsplash.com)"
category: Statistics
tags:
  - Markov Chain
  - MCMC
comment: true
share: true
author_profile: true
author: yuvrajiro
---



## What is Markov Chain ?

Markov Chain is a Stochastic Model in which Future is dependent only on Present not on Past , What I mean to say that is 


$$
P(X^{t+1}|X^t,X^{t-1},...X^2,X^1) = P(X^{t+1}| X^t)
$$

#### Transition Probability Matrix

Let us denote 


$$
p_{ij} = P(X^{n+1} = i | X^n = j)
$$


Where $[Math Processing Error]p_{ij}$ denotes the probability of going from state “j” to state “i” in one step, similarly we can define $[Math Processing Error]p_{ij}^n$ as  the probability of going from state “j” to state “i” in n steps, we can create Transition Probability Matrix as 


$$
TPM = \begin{bmatrix}
p_{11} \ p_{12} \ p_{13} \ . \ .\ \\
p_{21} \ p_{22} \ p_{23} \ . \ .\ \\
\ . \ .\ . \ . \ .\ . \ . \ .\ .\ \\
\ . \ .\ . \ . \ .\ . \ . \ .\ .\ \\
\end{bmatrix}
$$


## Why Convergence of Markov Chain Important ?

### Revisit MCMC

However MCMC have vast usage in the field of Statistics, Mathematics and Computer Science, here we will discuss simple problem in Bayesian Computation , and asses why convergence of Markov Chain is Important

Let us assume that we want to estimate certain parameter $t(\theta)$ and the model is given such that $g(\theta)$ is prior density for $\theta$ and $f(y \| \theta)$ is likelihood of $y = {y_1,y_2 ......y_n}$ give the value of  $\theta$ then the posterior can be written as


$$
g(\theta | y ) \propto g(\theta)f(y|\theta)
$$


Which have to be normalized , then the posterior density will be given by

$$
g(\theta | y ) = \frac{g(\theta)f(y|\theta)}{\int g(\theta)f(y|\theta)d\theta}
$$

For the sake of simplicity let us assume $t(\theta) = \theta$ and let us assume $\hat{\theta}$ is an estimate,  then take Square Error Loss Function

$$
L(\theta , \hat{\theta}) = (\theta - \hat\theta)^2
$$


Then the Classical Risk will be given by $R_{\hat{\theta}}(\theta) = E_{\theta}(L(\theta,\hat{\theta}))$ and Bayes Risk is given by 


$$
r(\hat{\theta}) = \int R_{\hat{\theta}}(\theta)g(\theta)d\theta
$$


Now our target is to minimize bayes risk to get the bayes estimate


$$
\begin{align*}
r(\theta) &= \int R_{\hat{\theta}}(\theta)g(\theta)d\theta \\
&= \int E_{\theta}(L(\theta,\hat{\theta})) g(\theta)d\theta \\
&= \int \left( \int (\theta - \hat\theta)^2f(y|\theta)dy\right)g(\theta)d\theta \\
&= \int \left( \int (\theta - \hat\theta)^2f(y|\theta)g(\theta)dyd\theta\right) \\
&= \int \left( \int (\theta - \hat\theta)^2g(\theta|y)d\theta\right)f(y)dy \tag{1}

\end{align*}
$$


The equation $({1})$ can be minimized if the inner integral is minimized, when 


$$
\hat{\theta} = E(\theta |y)
$$


Now we may not always able to calculate mean of posterior density, that means 


$$
\hat\theta = \int\theta g(\theta|y)d\theta
$$


That is when we do not know the kernel density , and integral will be complex , then we use CLT to estimate $\theta$ that is we take random samples from the kernel $g(\theta \| y)$ i.e posterior kernel , and calculate the means of the samples , that can be mathematically seen as 


$$
X^1,X^2......X^n \ are \ samples \ from\ g(\theta|y) \ now \\

\frac{\sum X_i}{n} \to \hat\theta \ as \ n \to \infty
$$


## When does Markov Chain Converge ?

Now let us take $[Math Processing Error]g(\theta \| y) = \pi(\theta)$ it can be assumed because y is realized and $[Math Processing Error]g(\theta \| y)$ is only function of $[Math Processing Error]\theta$ , Now comes the MCMC , if we can create a chain whose stationary distribution is $[Math Processing Error]\pi(\theta)$, then we can assume that chain as a random samples which converges to $[Math Processing Error]\pi(\theta)$ and that is the reason we need Markov Chain to converge, before we move forward let us describe some definitions 

Let us denote $\pi$ as a probability measure on $(\mathcal{X},\mathcal{B})$ and $\Phi = \{X^0,X^1 ...\}$  are discrete time Markov Chain on $(\mathcal{X},\mathcal{B})$ , let us assume transition kernel P and k as transition density and can be illustrated as 


$$
P(x,A) = Pr(X^{i+1} \in A | X^i = x ) = \int_A k(x,y)dy
$$


that is $P(x,A)$ gives us the probability of one step transition probability from state x to any state in A, now the transition kernel assumes two linear operators 

1. $\lambda P $ where $\lambda$ is probability distribution  on $(\mathcal{X},\mathcal{B})$
2. Pf where f is non-negative measurable function on on $(\mathcal{X},\mathcal{B})$

where 

$$
\lambda P(A) = \int_{\mathcal{X}}\lambda(x)P(x,A)dx
$$

so if $X^i \sim \lambda$ then $\lambda P(A)$ is the marginal distribution of $X^{i+1}\in A$  and 

$$
Pf(x) = \int_{\mathcal{X}}P(x,dy)f(y) = E_p[f(X_{i+1})|X_i = x]
$$

and m-step transition probability is given by 

$$
P^m(x,A) = \int_A k^m(x,y)dy
$$

> Invariant Density - $\pi$

> $$
> \pi = \pi P \\
> \Rightarrow \pi(x) = \int_{\mathcal{X}}\pi(y)k(y,x)dy
> $$

Now there are several way to ensure $\pi$ is invariant (or stationary ) distribution one of the way is , to satisfy the  balance condition i.e

$$
\pi(x)k(x,y) = \pi(y)k(y,x)       \ \ \ \ \ \ \ \ \ \ \ for \ all \ x,y \in \mathcal{X}
$$

**Proof**

Suppose $\pi$ satisfy the balance condition then 

$$
\begin{align*}
\pi(x)k(x,y) = \pi(y)k(y,x)       \ \ \ \ \ \ \ \ \ \ \ for \ all \ x,y \in \mathcal{X} \\ \\
\int_{\mathcal{X}}\pi(y)k(y,x)dy = \int_{\mathcal{X}}\pi(x)k(x,y)dy = \pi(x)  \ \ \ \ \ \ \ \ \ \ \ \
\end{align*}
$$

However Balance condition is not necessary condition it is only sufficient that means Reversibility is not required for $\pi$ to be invariant, suppose $X^i \sim \pi$ and it preserve it distribution over any number of transition , then we say that the Markov chain is stationary and hence it converges to $\pi$ that is required for MCMC

Let us Define

**$\phi$-irreducible** A Markov Chain is for some measure $\phi$ on $\mathcal{X},\mathcal{B}$ if for all $x \in X$ and $A \in \mathcal{B}$ for which $\phi(A) > 0$ , there exist n for which $P^n(x,A)>0$

*A Chain is Aperiodic if Period is 1*

**Harris Recurrent** A $\phi$- irreducible Markov Chain is Harris Recurrent if a $\phi$ positive set A, the chain reaches set A with probability 1

**Harris Ergodic** A Markov Chain is said to be Harris ergodic if it is $\phi$ irreducible , aperiodic , Harris Recurrent and posses invariant distribution $\pi$ for some measure $\phi$ and $\pi$ 

**Total Variation Distance** The Total Variation distance between two measures $\mu(.) \ and \ v(.)$ is defined by 

$$
|| \mu(.) - v(.)|| = sup_{A \in \mathcal{B}}|\mu(A)-v(A)|
$$

#### What does Harris Ergodicity Guarantees ?

- Guaranteed to explore entire space without getting stuck
- Strong Consistency of Markov Chain Average
- Convergence of Markov Chain to stationary in total Variation Distance 

The following two theorems are very important for MCMC

**Ergodic Theorem**  A Markov chain $\Phi$ is Harris ergodic with Invariant Distribution $\pi$ and $E_{\pi} \| g(X) \| < \infty$ for some function $g : \mathcal{X} \to \Bbb{R}$ Then for any starting value $x \in \mathcal{X}$ , then

$$
\bar{g}_n = \frac{1}{n}\sum_{i=0}^{n-1}g(X^i) \to E_{\pi}g(X) \ almost \ surely \ as \ n \ \to \infty
$$

and that is the main requirement that we use generally in MCMC

> Birkhoff, George D. “Proof of the Ergodic Theorem.” *Proceedings of the National Academy of Sciences of the United States of America*, vol. 17, no. 12, 1931, pp. 656–660. *JSTOR*, www.jstor.org/stable/86016. Accessed 9 Apr. 2021.

The other Theorem is as follows

*Suppose Markov chain $\Phi$ is Harris ergodic with invariant distribution of $\pi$ Then for any starting value $x \in \mathcal{X}$  . $\Phi$  will converge to $\pi$ in total variation distance , i.e

$$
||P^n(x,.) - \pi(.)|| \to 0  \ as \ n \to \infty
$$


*further $ \| \| P^n(x,.) - \pi(.)\| \| $ is monotonically non-increasing in n* 

## Rate of Convergence

The Ergodic Theorem tells us about convergence of Markov chain however it does not declare anything about the rate of convergence, we define a Markov Chain converging at geometric rate as **geometrically ergodic**, i.e there exist $M:\mathcal{X} \to \Bbb{R}$ and some constant $t \in (0,1)$ that satisfy 

$$
||P^n(x,.)-\pi|| \leq M(x)t^n  \ \ \ \ \ for \ any \ x \in \mathcal{X}
$$

If M is bounded , the Markov chain is uniformally ergodic

- As long as the starting value of x , such that M(x) is not large, geometric ergodicity guarantees quick convergence of Markov Chain
- Geometric Ergodicity holds for every irreducible and aperiodic Markov chain on finite space

### What is Needed for Geometric Ergodicity

#### Drift and Minorization  Condition

A Type 1 drift condition holds if there exist some non-negative function $V:\mathcal{X} \to \Bbb{R}_{\geq 0}$ and constant $0 < \gamma <1$ and $L < \infty$ 

$$
PV(x) \leq \gamma V(x) + L \ \ \ \ \ \ \ \ \ \ \ \ for \ any \ x \in \mathcal{X}
$$

Further we call V a drift function and a $\gamma$ a drift rate



A Minorization condition holds on set $C \in \mathcal{B}$ if there exist some positive integer $m ,\epsilon > 0$ and probability measure Q in $(\mathcal{X},\mathcal{B})$ for which 

$$
P^m(x,A) \geq \epsilon Q(A)
$$

we can also call this m step minorization condition, here C is called small, It imply the following condition

$$
k^m(x,y) \geq \epsilon q(A)
$$

 **Proposition**

Suppose Markov chain $\Phi$ is irreducible and periodic with invariant distribution $\pi$ , Then $\Phi$ is geometrically ergodic if the following two conditions are met:

1. Type I drift condition hold
2. There exists some constants $d > 2L(1-\gamma)$ for which one step minorization condition holds on set $C= \{x:V(x)\leq d\}$

This Proposition is a Corollary of Rosenthal(1995a)

*Let $\Phi$ be a a periodic and irreducible Markov chain with invariant distribution $\pi$*

Let us suppose the Condition 1&2 of Proposition holds and $X^0  = x_0$ be the starting  value and define

$$
\alpha = \frac{1+d}{1+2L+\gamma d} \ \ \ \ \ \ and \ \ \ \ \ \ \ U = 1+2(\gamma d+L)
$$

Then for any $r \in (0,1)$ 

$$
||P^n(x_0 ,.) - \pi(.)|| \leq (1-\epsilon)^{rn} +\left(\frac{U^r}{\alpha^{1-r}} \right)^n\left(1 + \frac{L}{1-\gamma} + V(x_0)\right)
$$

We can rearrange this to see that is satisfy geometric ergodicity condition

1. V(x) + 1 is proportion to M(x) hence starting point should minimize V(x)

**Type II Drift Condition** : If there exist some function W : $\mathcal{X} \to [1,\infty)$ finite at some x $\in \mathcal{X}$, some set $D \in \mathcal{B}$ , and constants $0 < \rho < 1$ and $b < \infty$ for which

$$
PW(x) \leq \rho W(x) + bI_D(x) \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ for \ all \ x \in \mathcal{X}
$$

 It is easy to show that *Type I Drift Condition $\Leftarrow\Rightarrow$ Type II Drift Condition* 

Finally we can say that 

**Suppose Markov Chain $\Phi$ is aperiodic and $\phi-$irreducible with invariant distribution $\pi$. Then $\Phi$ is geometrically ergodic if there exist some small set D, the drift function $W: \mathcal{X} \to [1,\infty)$ and some constants $0 < \rho < 1$ and $b < \infty$ for which a type II drift conditions hold**



Now Let me reinstate the earlier theorem

*Suppose Markov chain $\Phi$ is Harris ergodic with invariant distribution of $\pi$ Then for any starting value $x \in \mathcal{X}$  . $\Phi$  will converge to $\pi$ in total variation distance , i.e*

$$
||P^n(x,.) - \pi(.)|| \to 0  \ as \ n \to \infty
$$


*further $ \| \| P^n(x,.) - \pi(.)\| \| $ is monotonically non-increasing in n* 

**Jain and Jamison (1967) have shown that for every $\phi-irreducible$ Markov chain on $(\mathcal{X},\mathcal{B})$ . Then there exists some small set $C \in \mathcal{B}$ for which $\phi(C) > 0$.Furthermore , the corresponding minorization measure Q(.) can be defined so that  Q(C) > 0**

the Jain and Jamison allow us to assume $C \in \mathcal{B}$  such that 

$$
P(x , A)  \geq \epsilon Q(A) \ \ \ \ \ for \ all \ x \in C
$$

That is one step minorization condition , Now we can write

$$
P(x,A) = \epsilon Q(A) + (1-\epsilon)R(x,A) \ \ \ \ \ \ \ for \ all \ x \in C \ and \ A \in \mathcal{B}
$$

Here $R(x,.)$ is probability measure for $(\mathcal{X},\mathcal{B})$ , then this allow us to construct two separate chain which couple with probability 1

$$
\Phi(X) = \{X^0,X^1 ...........\} \\
\Phi(Y) = \{Y^0,Y^1 ............\}
$$

Now $(X^{n},Y^n) \to (X^{n+1},Y^{n+1})$ with the following algorithm

1. While $X^n \neq Y^n$
   1. If $(X^n,Y^n) \not\in C \times C$
      1. Draw $X^{n+1} \sim P(X^n,.)$ and$Y^{n+1} \sim P(Y^n,.)$ independently
   2. If $(X^n,Y^n) \in C \times C$
      1. Draw $\delta_n \sim Bern(\epsilon)$
      2. If $\delta_{n} = 0$ , Draw $X^{n+1} \sim R(X^n,.)$ and$Y^{n+1} \sim R(Y^n,.)$ independently
      3. otherwise , draw $X^{n+1} = Y^{n+1} \sim P(x,.)$
2. Once $X^n = x = Y^n $,draw $X^{n+1} = Y^{n+1} \sim P(x,.)$

Now define coupling time T such that T denotes n for which first time $(X^{n-1},Y^{n-1}) \in C \times C$  and $\delta_{n-1}=1$ , once the chain couples it will remain equal 

Now let us assume 

$$
X^0 = x \ and  \ Y^0 \sim \pi
$$

And $Pr_x$  denotes the probability with respect to starting point x, then $\Phi(y)$ is stationary 

$$
\begin{align*}
|P^n(x,A) - \pi(A)| &= |Pr_x(X^n \in A) - Pr_x(Y^n \in A)| \\
&= |Pr_x(X^n \in A,X^n = Y^n) +Pr_x(X^n \in A,X^n \neq Y^n)- Pr_x(Y^n \in A,X^n \neq Y^n)- Pr_x(Y^n \in A,X^n = Y^n)| \\
&= |Pr_x(X^n \in A,X^n \neq Y^n)- Pr_x(Y^n \in A,X^n \neq Y^n)| \\
&\leq max\{Pr_x(X^n \in A,X^n \neq Y^n)- Pr_x(Y^n \in A,X^n \neq Y^n)\} \\
&\leq Pr_x(X^n \neq Y^n) \\
&= Pr_x(T > n)
\end{align*}
$$

Thus 

$$
||P^n(x,.) - \pi(.)|| \leq Pr_x(T>n)
$$

Now Let us Suppose Minorization condition hold over entire space i.e $C = \mathcal{X}$ in this case every couple generated belongs to $C \times C$ for all n then 

$$
T \sim Geo(\epsilon) \\
P(T>n) = (1-\epsilon)^n
$$

so

$$
||P^n(x,.) - \pi(.)|| \leq (1-\epsilon)^n
$$

so when C = $\mathcal{X}$ , $ \| \|P^n(x,.) - \pi(.) \| \| \to 0  \ as \ n \to \infty$

and When $C \neq \mathcal{X}$  , the distribution of $P(X>t)$ is complicated and beyond the scope of this presentation 



#### Deterministic Update Gibbs Sampler (DUGS)

Let us assume our Target Distribution is $\pi(\theta)$ such that $\theta = (\theta_1,\theta_2....\theta_d)$ 

**Notation : $\theta_{-i}$ is vector of parameter except $\theta_i$**

**Initialization :** $\theta^0 = (\theta_1^0,\theta_2^0......\theta_d^0)$

**Iteration:** For $i \geq 1$ 

- Sample $\theta_1^i \sim \pi(\theta_1^i \| \theta^2_{-1})$	
- Sample $\theta_2^i \sim \pi(\theta_2 \| \theta_1^i , \theta^{i-1}_{-(1,2)})$	
- ...  .. .................................
- ... ... .................................
- Sample $\theta_1^i \sim \pi(\theta_d \| \theta^{i}_{-d})$

The Transition Kernel for two parameter will be given by

$$
k((\theta_1,\theta_2),(\tilde{\theta}_1,\tilde{\theta}_2)) = \pi(\tilde\theta_1|\theta_2)\cdot \pi(\tilde\theta_2|\tilde\theta_1)
$$

Let us check the stationarity for two parameter

$$
\begin{align*}
\int\int \pi(\theta_1,\theta_2)k((\theta_1,\theta_2),(\tilde{\theta}_1,\tilde{\theta}_2))d\theta_1d\theta_2 &= \int\int \pi(\theta_1,\theta_2)\pi(\tilde\theta_1|\theta_2)\cdot \pi(\tilde\theta_2|\tilde\theta_1)d\theta_1d\theta_2 \\
&= \int \pi(\theta_2)\pi(\tilde\theta_1|\theta_2)\cdot \pi(\tilde\theta_2|\tilde\theta_1)d\theta_2 \\
&= \int \pi(\tilde\theta_1,\theta_2)\cdot \pi(\tilde\theta_2|\tilde\theta_1)d\theta_2 \\
&= \pi(\tilde\theta_1)\cdot \pi(\tilde\theta_2|\tilde\theta_1) \\
&= \pi(\tilde\theta_2,\tilde\theta_1) \\
\end{align*}
$$

However this does not suffices for for the convergence, **Aperiodicity needed for surety that the samples are not repeating hence leads to exploring whole space and Irreducibility confirms that it will not stuck** If we are to prove the balance condition the we are assured that it will converge, Let $\Phi_i=\{\theta_i^0,\theta_i^1........\}$ and let $k_1(\tilde\theta_1,\theta_1)$ be the transition density in $\Phi_i$ , then

$$
\begin{align*}
\pi({\theta_1}) k_1(\tilde\theta_1,\theta_1) &= \pi({\theta_1})\int \pi(\tilde\theta_1|\theta_2)\cdot \pi(\tilde\theta_2|\tilde\theta_1)d\theta_2 \\
&=\pi({\theta_1}) \int \frac{\pi(\tilde\theta_1,\theta_2)}{\pi(\theta_2)}\cdot \frac{\pi(\tilde\theta_2,\tilde\theta_1)}{\pi(\tilde\theta_1)} d\theta_2\\
&=\pi({\tilde\theta_1}) \int \frac{\pi(\tilde\theta_1,\theta_2)}{\pi(\theta_2)}\cdot \frac{\pi(\tilde\theta_2,\tilde\theta_1)}{\pi(\theta_1)} d\theta_2\\
&=\pi({\tilde\theta_1}) \int {\pi(\tilde\theta_1|\theta_2)}\cdot {\pi(\tilde\theta_2|\theta_1)}d\theta_2\\
&= \pi({\tilde\theta_1}) k_1(\theta_1,\tilde\theta_1)

\end{align*}
$$


#### Example

Let us suppose 

$$
Y_1 , Y_2 ..... Ym \sim^{iid} N(\mu, \theta)
$$

where $m \geq 5$ , Let us assume the joint prior density as 

$$
g(\mu,\theta) \propto \frac{1}{\sqrt{\theta}}
$$

Let y = $(y_1,y_1 ......y_m)$ as a sample data with mean $\bar y$ and variance $s^2 = \sum(y_i - \bar y)^2$ the the posterior will be given by

$$
g(\mu , \theta | y) \propto \theta^{-\frac{m+1}{2}}exp \bigg( -\frac{1}{2\theta} \sum_{j=1}^m (y_j - \mu)^2\bigg)
$$


and 

$$
\theta | \mu,y \sim IG\left(\frac{m-1}{2}, \frac{s^2+m(\mu -\bar{y})^2}{2}\right) \\
\mu | \theta ,y \sim N(\bar y,\frac{\theta}{m})
$$


We know Inverse Gamma have kernel $x^{-(a+1)}e^{-bx}$ with parameter (a,b)

Let us use DUGS Sampler in the following update scheme 

$$
(\theta^{'},\mu{'}) \to (\theta^{},\mu{'}) \to (\theta^{},\mu{})
$$


so the kernel density will be given by

$$
k((\mu^{'},\theta^{'}),(\mu,\theta)) = \pi(\theta|\mu^{'},y)\pi(\mu|\theta,y)
$$

**Type 1 Drift Condition**

Let us define $V(\mu , \theta) = (\mu - \bar{y})^2$ 

$$
E[V(\mu,\theta)|\mu^{'},\theta^{'}]  = E[V(\mu,\theta)|\mu^{'}]  =E[E[V(\mu,\theta)|\theta]|\mu^{'}]
$$

where 

$$
E[V(\mu,\theta)|\theta] = E[(\mu-\bar{y})^2|\theta] = Var[\mu|\theta] = \frac{\theta}{m}
$$

Then

$$
E[V(\mu,\theta)|\mu^{'},\theta^{'}] = E\left[\frac\theta m | \mu^{'}\right] \\
\Rightarrow \frac{1}{m} \frac{s^2+m(\mu^{'}-\bar{y})^2}{m-3} \\
\Rightarrow \frac{(\mu^{'}-\bar{y})^2}{m-3} \frac{s^2}{m(m-3)} \\
\Rightarrow \frac{1}{m-3}V(\mu^{'},\theta{'}) + \frac{s^2}{m(m-3)}
$$

now  $m \geq 5$ guarantees that $\frac{1}{m-3} < 1$ hence

$$
PV(\mu^{'},\theta^{'}) =E[V(\mu,\theta)|\mu^{'},\theta^{'}] \leq \frac{1}{m-3}V(\mu^{'},\theta{'}) + \frac{s^2}{m(m-3)}
$$

So its satisfy drift condition with $\gamma \in (1/(m-3),1) $ and $L^2 =s^2/(m(m-3))$

**Minorization Condition**

Let us assume  $C = \{(\mu,\theta) : V(\mu,\theta) \leq d \}$ for $d \geq 2L/(1-\gamma)$ if there exist density q and $\epsilon > 0$ for which

$$
k((\mu^{'},\theta^{'}),(\mu, \theta)) \geq \epsilon q(\mu,\theta)\ for \ all \ (\mu^{'},\theta^{'}) \in C \ and \ (\mu, \theta)  \in \Bbb{R} \times \Bbb{R}_+
$$


$$
k((\mu^{'},\theta^{'}),(\mu, \theta)) = \pi(\mu|\theta,y)\pi(\theta | \mu^{'},y) \geq \pi(\mu|\theta,y) \inf_{(\mu{'},\theta^{'}) \in C} \pi(\theta | \mu^{'},y)
$$


Let us assume $IG(a,b ; x)$ denote the density at $ x>0$ 

$$
g(\theta) =\inf_{(\mu{'},\theta^{'}) \in C} \pi(\theta | \mu^{'},y) \\
\Rightarrow IG\left(\frac{m-1}{2},\frac{s^2}{2}+\frac{m}{2}(\mu^{'}-\bar{y})^2;\theta\right) \\
\Rightarrow 
\left\{ 
\begin{array}{c}
IG(\frac{m-1}{2},\frac{s^2}{2}+\frac{md}{2} ; \theta ) \ \ if  \ \theta < \theta^* \\IG(\frac{m-1}{2},\frac{s^2}{2} ; \theta ) \ \ if  \ \theta \geq \theta^*\\ 
 

\end{array}
\right. 
$$

where $\theta^{*} = md[(m-1)log(1+md/s^2)]^{-1}$



$$
k((\mu^{'},\theta^{'}),(\mu, \theta)) \geq \pi(\mu | \theta,y)g(\theta) = \epsilon q(\mu,\theta)
$$

Where $q(\mu , \theta) = \epsilon^{-1}\pi(\mu \| \theta,y)g(\theta)$  

Hence the Minorization conditions hold

