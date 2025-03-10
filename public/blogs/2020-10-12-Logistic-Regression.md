---
layout: left_auth_wide
classes: wide
title:  "Introduction to Logistic Regression"
toc_sticky: true
tags: 
  - Regression
  - Logistic
category: statistics
share: true
comments: true
author_profile: true
author: yuvrajiro
---

Usually in Linear Regression we consider $X$ as a explanatory variable whose columns are $X_1 , X_2 .....X_{p}$ are the variables which we use predict are the  independent variable $y$ , we measure these values on a continuous scale,When the dependent variable y  is dichotomous such as, Male or Female , Pass or Fail , Malignant or Benign. 

When we have dependent variable y is a qualitative, we can indicate it by indicator variable such as 


$$
y = 0\ \ \ if\ female \\ 
y = 1 \ \ \ if \ male
$$


So 


$$
y_i = \beta_0 + \beta_1x_{i1}+ \beta_2x_{i2}+.....+ \beta_px_{ip} + \epsilon_i \ \ \ \ \ \ i = 1,2,3,........,n
$$


or in the matrix form we can write 


$$
Y = \begin{bmatrix}
y_1 \\
y_2 \\
y_3 \\
. \\
. \\
y_n \\

\end{bmatrix}  \ \ X =  \begin{bmatrix}
1 & x_{1,1} & x_{1,2} & x_{1,3} & . &. & x_{1,p}\\ 
1 & x_{2,1} & x_{2,2} & x_{2,3} & . &. & x_{2,p}\\
. & . &  . & . & . & . & x_{3,p} \\
. & . &  . & . & . & . & .\\
.  & . &  . & . & . & . & .\\
1 & x_{n,1} & x_{n,2} & x_{n,3} & . & . & x_{n,p}\\ 

\end{bmatrix} 
\ \ 
 \beta  = \begin{bmatrix}
\beta{0} \\
\beta{2} \\
\beta{3} \\
. \\
. \\
\beta_p \\


\end{bmatrix} 

\epsilon  = \begin{bmatrix}
\epsilon{1} \\
\epsilon{2} \\
\epsilon{3} \\
. \\
. \\
. \\
\epsilon_n \\ 

\end{bmatrix}
$$

that is  


$$
  Y = X\beta + \epsilon
$$


Remember first column of independent variable matrix X is $\underline{1}$ , for the constant $\beta_0$

Our dependent variable y , that we have to predict is indicator suppose it takes two values , assume y follows a bernoulli distribution 


$$
y_i = 1  \ with \ P(y_i = 1 ) = \pi_i \\
y_i = 0  \ with \ P(y_i = 0 ) = 1-\pi_i
$$


Assuming $E(\epsilon_i) = 0$,


$$
E(y_i) = 1 \cdot \pi_i + 0 \cdot(1 - \pi_i) = \pi_i \\
E(y_i) = X\beta = \pi
$$


where 


$$
\pi  = \begin{bmatrix}
\pi_{1} & \pi_{2}  & \pi_{3}& . & . \pi_{n}\\
\end{bmatrix}^{T}
$$


Now we know in Linear Regression $\epsilon$ is supposed to follow normal distribution , whereas here we cannot suppose $\epsilon$ to follow normal distribution, because here it take only two discrete values

so we have $E(y_i) =\pi_{i} = \beta_0 + \beta_1x_{i1}+ \beta_2x_{i2}+.....+ \beta_px_{ip}$ where $E(y_i) \in [0,1]$ that put bound on the expected value of y

In logistic regression we use **Standard logistic function** , some people call it a **Sigmoid function**. It can be given by 


$$
E(y_i) = \pi_i = \frac{1}{1+e^{-(\beta_0 + \beta_1x_{i1}+ \beta_2x_{i2}+.....+ \beta_px_{ip})}} \tag{1}
$$


Our main work in logistic regression our main aim is to predict $\pi$ , the bernoulli parameter for $Y$ , and generally we took decision by $\pi_i$ greater than 0.5 or less than 0.5

#### Link Function
Usually every model have a link function which relates the linear predictor $ \eta_i $ to the mean response $ \mu_i $. First of all we have to understand what is linear predictor, it is a **systematic component**  where  $ \eta_i = E(y \vert x_i) $ ,So if $g( . )$ is a link function then 


$$ g(\mu_i ) = \eta_i \ \ or \mu_i =g^{-1}(\eta_i) $$

In the Linear regression this link is a identity link , whereas in the logistic regression $ \mu_i = E(y_i) =\pi_{i} $ so the relation between $\pi_i$ and $\eta_i = E(y \vert x_i) = \beta_0 + \beta_1x_{i1}+ \beta_2x_{i2}+.....+ \beta_px_{ip} $ is a logistic regression so 

$$

g(X\beta) = \pi

$$


We have similar equation $\eqref{1}$  we can use that to get link function

$$
\pi  = \frac{exp(X\beta)}{1+exp(X\beta)} \\
X\beta=\eta = ln(\frac{\pi}{1-\pi}) 
$$

where $\frac{\pi}{1-\pi}$ is odds and its log is known as ***log*-odds** ,this transformation is logit transformation.



It is very hard to estimate $\beta$  theoretically , so we choose gradient-descent algorithm for calculation of the parameter   