---
type: post
title: "Another Luas App"
authors:
  - name: "Eoin O'Brien"
subtitle: "The perfect Luas app"
date: "2024-07-02T20:00:00Z"
categories:
  - Software
tags:
  - Luas
  - React
  - PWA
---

# TL;DR

I created a Luas App that does all the things I wanted it to do. You can find it on [https://anotherluasapp.com/](https://anotherluasapp.com/)

---

_I started writing this a while ago, but I am only getting around to publishing it now. I use [Transit App](https://transitapp.com/) for my transit forecasting needs._

In March 2020, at the start of Lockdown 1.0 I wanted to take a look at React. So in the effort to find something interesting to do I dipped into my never ending well of Transport in Dublin and decided to create a app that would provide all the features I felt was missing from other applications.

# The before times

Previously, my default Luas app was [Luas at a Glance](https://play.google.com/store/apps/details?id=org.thecosmicfrog.luasataglance&hl=en&gl=US) by [Aaron Hastings](https://twitter.com/thecosmicfrog?lang=en). It's a fast, simple application that I learned when writing this post is [open source](https://github.com/thecosmicfrog/LuasataGlance).

The main issue I missed from Luas at a Glance was the lack of operating hours. When I was out and planning to get the last Luas home I would use the Luas website to remind myself what time I would need to leave at.

# What I wanted

So that was the first thing I wanted, operating hours.

It's got some nice features that I'm proud of:  
🕦 First and last tram information  
⚡ Super speedy  
⭐ Favourite stations  
🔄️ Automatic forecast refresh  
🚲 Station facilities  
⛔ No ads  
🇮🇪 Ar fáil i nGaeilge

Introducing [Another Luas App](https://anotherluasapp.com/).

# How it works

The app is a [React app (available on GitHub)](https://github.com/eoinobrien/luas-app) hosted on Azure, and calls an [Azure Function (also available on GitHub)](https://github.com/eoinobrien/luas-api-dotnet) to get the upcoming forecast. This Azure function calls the [publicly available Luas forecast API](https://data.gov.ie/dataset/luas-forecasting-api), translates that response from XML to JSON, and enriches the data with station facilities and operation hours.

Give it a go and let me know what you think.
