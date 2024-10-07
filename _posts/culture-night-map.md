---
types:
  - project
  - post
title: "Culture Night Map"
subtitle: "A map for culture night, to help plan your night."
authors:
  - name: "Eoin O'Brien"
date: "2024-10-07T22:34:00Z"
links:
  codeUrl: https://github.com/eoinobrien/culture-night
  projectUrl: http://culturenight.eoin.co/
categories:
  - Software
tags:
  - Culture Night
  - Leaflet
  - Next.js
  - PWA
---

[Culture Night](https://culturenight.ie/) is an annual night in Ireland offering free access to cultural activities, performances, and venues across the country to celebrate Irish arts and heritage.

This year there was 1555 events all around the country. However, the website does a terrible job at event discovery. 

# Sub-par event discovery
Discovery of events is a pain, one example is the Start Times filter only returns events that start at the exact time you selected, so if you select 18:30 you will ony see the one event that started at that time, instead of the large number of events that run all night long but start at 18:00. So if you plan to start you night later in the evening you can't figure out which events are available without having to navigate through all the events.

Another issue is the locations filter contains all the locations where an event is occurring, but also wider locations, but also locations with no events. To add to the confusion in Dublin City Center there are 7 event quarters whose boundaries are unclear.

![Culture Night's website's events filter listing the option to filter by location, genre, accessibility, event type, start times, age and facilities. There is also a search box.](/assets/blog/culture-night-events-filters.png)

# The solution
I was reminded of Culture Night two days before it occurred this year and when I started to plan my night I ran into all of the issues above. So instead of coming up with a plan I decided to come up with [a solution](https://culturenight.eoin.co/). Luckily it was Hackathon week in Microsoft so I could focus on this without any detriment to my day job.

The biggest issue is that there is no map available of the events. If one was able to zoom into the area you are planning to attend you could easily see what was happening nearby, this could lead to more spontaneity and variety in the events one attends.

## Scraping the site
Firstly, I needed to scrape the Culture Night website. To do this I created a [Playwright](https://playwright.dev/) script that would scrape the events from the search pages, navigate to the next page of the search results, and repeat that until 66 results pages were scraped. This provided me the title of the event and the start and finish time but to get more details information including the address I needed to open each event page in turn.

In each event page I scraped everything I could, including the full address, the description along with anything else of note.

At this point I had a json file of all the event details, but for a map to be useful I needed a latitude and longitude so I could place a pin on the map.

To get a lat/lng for each event I took the full address and passed it into a Geocoding API that returns the co-ordinates. I stored this data alongside the events in the json. One issue I faced was that some of the events had poor address data so I had to manually find the co-ordinates, but this was only about 10 or so events so it wasn't an issue.

If I was able to control the applications for Culture Night/The Arts Council, I would have better supports in place to ensure the data provided is of higher quality.

## Making a map
I've been using [Next.js](https://nextjs.org/) for a number of projects recently, although it appears to be rarely the right choice for what I am trying to do, but I was on a tight schedule so I plowed on.

I used [React Leaflet](https://react-leaflet.js.org/) (which uses [Leaflet](https://leafletjs.com/)) to display my map.

I imported all my events, and placed all 1555 markers on the map at once. Thankfully, [react-leaflet-cluster](https://github.com/akursat/react-leaflet-cluster) was able to handle them all perfectly and grouped them when a number of events were nearby.

## Filtering culture
Next I added some quick filters. The most important one was to be able to filter based on time. I wanted the user to be able to put in the start and end time of their plans and my map would return all the events that are happening at any part of that window.

# Future versions
At about 4pm on the Friday of Culture Night, I had everything in a state that I was happy to share, but there a number of things I would like to improve for the future version.

Firstly, I'd love to have improved filters, the approach at the moment is rudimentary and uses the simple JavaScript filter, but I'd like to include a powerful free form search box. I'd also like to list all the events in a side panel that allows for scrolling of all the events, kinda like on Airbnb with their accommodation. I'd move away from the Open Street Map tile server, to something that provided an SLA, and perhaps provided a dark them to fit with theme, but for now OSM is free which is hard to beat on a cost basis. Finally, my strings are lacking. I know what "Start Time" filters, but I'd like to provide more details so that people can make the most of the site.

Feel free to take a look at [the app](https://culturenight.eoin.co/) and let me know what you think.

# True culture

My Culture Night recommendation is [Black Church Print Studio](https://www.blackchurchprint.ie/), it's a fantastic tour of 4 stories of all different kinds of print making. I have done the tour numerous times and I always enjoy it. 

And in the end of all this effort what did I do for Culture Night this year? I went to one venue, the Revenue Museum, and then I went to the pub with some friends. It was the perfect Culture Night.

*If you have contacts in the Arts Council I'd love to talk to them about my thoughts on improvements they could make to their site.*