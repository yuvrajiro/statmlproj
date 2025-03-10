---
layout: left_toc_wide
classes: wide
title:  "Introduction To Non-Informative Priors"
date:   2020-06-01 18:54:23 +0530
toc: true
toc_sticky: true
tags: 
  - bayesians 
  - non-informative priors
category: statistics
share: true
comments: true
toc_rm: true
---



> Prior density is denoted by $g(.)$ in this article

# Introduction

Non-Informative Priors are the priors which we assume when we do not have any belief about the parameter let say $ \theta $ . This leads noninformative priors to not favor any value of $ \theta $ , which gives equal weights to every value that belongs to $\Theta$. for example let us we have three hypothesis , so the prior which attach weight of $ \frac{1}{3}$ to each of the hypothesis is noninformative prior.
<!--more-->
> **Note : most of the noninformative priors are improper.**

## An Example

Now let us assume a simple example let us assume our parameter space $\Theta$ is a finite set containing n elements such as

$$
{\theta_1,\theta_2,\theta_3,\theta_4....\theta_n} \ \in \ \Theta
$$

Now the obvious weight given to each $\theta_i$ when we have  not any prior beliefs is $\frac{1}{n}$ that gives us prior is proportional to a constant because $\frac{1}{n}$ is a constant let us say $\frac{1}{n}$=c hence we can say 

$$
g(\theta) = c
$$

Now let us assume a transformation $\eta=e^{\theta} $ , that is $\theta = log(\eta)$ . If $ g(\theta)$ is the density of $\theta$ then we can write density of $\eta$  as 

$$
g^*(\eta)=g(\theta)\frac{d\theta}{d\eta} \\
g^*(\eta)=g(log \ \eta)\frac{d \ log \ \eta }{d\eta} \\
g^*(\eta)=\frac{g(log \ \eta)}{\eta} \\
g^*(\eta) \propto \frac{1}{\eta}
$$


Thus if we choose prior for $\theta$ as constant , then we have to assume prior for $\eta$ as proportional to $\eta^{-1}$  to arrive at the same answer in both cases either we take $\theta $ or $\eta$ . Thus we cannot maintain consistency and assume both prior proportional to constant . This leads to the search of such noninformative priors which are invariant under transformations.

## Noninformative Priors for Location Parameter

> A Parameter is said to be location parameter if the density $f(x ; \theta)$ can be written as a function of $(x - \theta)$

Let X is a random variable with location parameter $\theta$  then density can be written as $h(x- \theta)$. Just assume instead of observing X we observed **Y = X+c** and let us take **$\eta=\theta+c$** then can  see that the density of Y is given by $h(y - \eta)$. Now $(X,\theta) \ and  (Y,\eta)$ have same parameter and sample space which gives us the idea that they must have same noninformative prior

Let $g$ and $g^*$  are noninformative priors for  $(X,\theta) \ and  (Y,\eta)$ respectively. So according to our argument both will have same noninformative priors , let us assume **a subset of real line A**

$$
P^g(\theta \ \in \  A ) = P^{g^*}(\eta \ \in \  A )
$$

Now we have assumed **$\eta=\theta+c$** so 

$$
P^{g^*}(\eta \ \in \  A )=P^{g}(\theta +c \ \ \in \  A )=P^{g}(\theta \ \in \  A-c )
$$

which leads us to 

$$
P^{g}(\theta \ \in \  A)=P^{g^*}(\theta \ \in \  A-c ) \tag{*}\\
\int_Ag(\theta)d\theta=\int_{A-c}g(\theta)d\theta=\int_Ag(\theta-c)d\theta
$$

It holds for any set A of real line , and any c on real line so it lead us to 

$$
g(\theta)=g(\theta-c)
$$

Now if we take $\theta=c$ we get $g(c)=g(0)$ ,and we know it is true for all c , it leads us to the conclusion that the prior in the case of location parameter is constant functions , for simplicity most of the statistician assume it equal to 1 , $g(.) = 1$ 

## Noninformative Priors for Scale Parameter

> A Parameter is said to be location parameter if the density $f(x ; \theta)$ can be written as a  $\frac{1}{\theta}h(\frac{x}{\theta})$ where $\theta>0$



For example in normal distribution we $N(\mu,\sigma^2)$ , $\sigma$  is a scale parameter . 

To get noninformative prior for Scale Parameter $\theta$ of a random variable X , instead of observing X we observe $Y = cX$ for any $c > 0 $ , let us define $\eta = c\sigma$ , so then the density of $Y $ is given by $\frac{1}{\eta}f(\frac{1}{\eta})$ .

Now similar to previous part here $(X,\theta)$ and $(Y,\eta)$ have same sample and parameter space , so both will have same noninformative priors. Let $g$ and $g^*$  are noninformative priors for  $(X,\theta) \ and  (Y,\eta)$ respectively. So according to our argument both will have same noninformative priors 


$$
P^g(\theta \in A)= P^{g^*}(\theta \in A)
$$


Here A is a subset of Positive real line, i.e $A \subset R^+$ , now putting $\eta = c\sigma$


$$
P^{g^*}(\eta \in A) = P^g(\theta \in \frac{A}{c}) \\

P^g(\theta \in A) = P^g(\theta \in \frac{A}{c}) \\

\int_Ag(\theta)d\theta=\int_{\frac{A}{c}}g(\theta)d\theta=\int_A\frac{1}{c}g(\frac{\theta}{c})d\theta
$$


so


$$
g(\theta)=\frac{1}{c}g(\frac{\theta}{c})
$$


Now taking $\theta=c$ , we get 


$$
g(c)=\frac{1}{c}g(1)
$$


Now this equation is true for any value $c>0$ so , for convenience taking $g(c)=1$ , it gives us noninformative prior $g(\theta)= \frac{1}{\theta}$ 

> Note : It is an improper prior , $\int_0^{\infty}\frac{1}{\theta}d\theta = \infty $





## Flaw and introduction of relatively location invariant prior

Now we know noninformative prior for both Scale and Location parameter, but there is flaw . The prior we get for location and scale parameter in previous part are improper priors . If two random variables have identical form , then they have same non informative priors . but the problem here is due to improper priors  ,  noninformative priors are not  unique. lets say we have an improper prior **g** then if we multiply **g** by any constant **k** then the resultant **gk** will give same bayesian decisions as **g**.

Now in previous parts we have assumed two priors $g$ and $g^* $ , but we do not need that , we can get $g^*$ by just multiplying $g$ by a constant and vice-versa.

 Now equation $(*)$ can be written as 


$$
P^g(A)=l(k)P^{g}(A-c)
$$


Where $l(k)$ is some positive function ,


$$
\int_Ag(\theta)d\theta=l(k)\int_{A-c}g(\theta)d\theta=l(k)\int_Ag(\theta-c)d\theta
$$
 

It holds for all A , so  $g(\theta)=l(k)g(\theta-c)$ , and taking $\theta=c$ give us $l(k)=\frac{g(c)}{g(0)}$ , putting this value back will give us


$$
g(\theta-c)=\frac{g(0)g(\theta)}{g(c)} \tag{**}
$$
Now there is a lot of prior other than $g(\theta)=c$ , which satisfy equation (** ) , so any prior of this form will be know as *relatively location invariant*

