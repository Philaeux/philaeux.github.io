---
layout: post
title: Nouveau Blog
description: "Nouvelle plateforme de blogging."
author: Philaeux
category: blog
tags: programmation
finished: true
---

## De l'ancien en neuf

Cela aura pris un certain temps, mais le voici enfin, le nouveau blog.
 
L'objectif est le même que par le passé, c'est-à-dire proposer du contenu sur ce qui m'intéresse: l'informatique et plus particulièrement la programmation, la politique, l'écriture de poésie comme de nouvelles, les jeux vidéo, et bien d'autres.

D'un point de vue technique, j'ai eu beaucoup de problèmes avec Wordpress que j'utilisais pour l'ancien blog. J'ai donc décidé d'en faire un nouveau. Pour ceux que ça intéresse, en voici les détails techniques.

## Site statique, Jekyll et GitHub Pages

J'ai choisi de passer à un site statique pour ce blog afin d'éviter d'avoir à gérer la base de données ainsi que les sauvegardes de cette dernière. À la place, les données sont stockées sous forme de fichiers, pérennisés dans un dépôt git, lui même transformé en site avec la librairie Jekyll.

De plus, pas besoin de payer pour héberger l'intégralité du site. En effet, GitHub pages permet d'héberger un site lié à un dépôt git, mis à jour automatiquement après un push de données. Il ne reste plus qu'à setup le serveur DNS pour avoir le nom de domaine personnalisé pointant au bon endroit.

Pour moi, ce setup permet d'obtenir un blog respectable sans pour autant devoir déployer une usine à gaz.
