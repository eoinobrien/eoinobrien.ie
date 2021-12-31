---
layout: post
title: "Historical data set of Luas Real Time Information"
date: 2021-12-30 23:00:00
categories: Transport
tags: [Luas, Data Science]
image:
    path: assets/images/luas-tallaght-NBsJsj8JFpM.jpg
    alt: The rear of Luas that is traveling to Tallaght
    caption: Photo by <a href="https://unsplash.com/@louishansel?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Louis Hansel</a> on <a href="/s/photos/tram-dublin?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a>
---

I have a dataset of real time information for the Luas since January 19th, 2020. Uncompressed it's about 10GB in size, but you can download a [~500MB zip of it from OneDrive](https://1drv.ms/u/s!Ao1lhPpLA9U7grp3-7uvVIv07BLmyQ?e=103HsN).

# File Content

| Column Contents | Notes                                              |
| --------------- | -------------------------------------------------- |
| DateTime        | The datetime of the request.                       |
| Line            | Can be Green or Red                                |
| Origin          | The origin station of the request.                 |
| Direction       | Can be Inbound or Outbound                         |
| Destination     | The destination of the tram                        |
| Due in          | Placeholder string that keeps things readable      |
| Minutes         | The forecast number of minutes until the tram arrives at Origin. If the API returns DUE, this will return 0 |
| Status Message  | The status message returned with the API response. |

Actual content from the TSV:
```tsv
01/19/2020 22:50:02	Red	TPT	Outbound to	TAL	Due in	9	Red Line services operating normally
01/19/2020 22:50:02	Red	TPT	Outbound to	SAG	Due in	14	Red Line services operating normally
01/19/2020 22:49:59	Red	SDK	Inbound to	TPT	Due in	11	Red Line services operating normally
01/19/2020 22:49:59	Red	SDK	Inbound to	TPT	Due in	16	Red Line services operating normally
01/19/2020 22:49:59	Red	SDK	Outbound to	TAL	Due in	10	Red Line services operating normally
01/19/2020 22:49:59	Red	SDK	Outbound to	SAG	Due in	15	Red Line services operating normally
01/19/2020 22:50:02	Red	MYS	Inbound to	TPT	Due in	9	Red Line services operating normally
01/19/2020 22:50:02	Red	MYS	Inbound to	TPT	Due in	15	Red Line services operating normally
01/19/2020 22:50:02	Red	MYS	Outbound to	TAL	Due in	0	Red Line services operating normally
01/19/2020 22:50:02	Red	MYS	Outbound to	TAL	Due in	12	Red Line services operating normally
```

# Why? 
I do not know. I was working on a [dotnet Luas API](https://github.com/eoinobrien/luas-api-dotnet) at the time at this was something easy to do. I figured, by the time I got to it I might have a use case for it, maybe some sort of forecast planning. 

# How does it work?
On my server I run a cron job every two minutes, that runs a simple application that hits every stations endpoint, and appends the results to a never ending TSV. Every so often I manually download that TSV to store it locally.

# Do you have the code?
Unfortunately, I seem to have misplace the code. I do have the compiled dotnet code on the server, but I have not got the source code.

# Do you have a license for this data?
While I haven't attached a license to this code, you are more than welcome to use this data as you see fit.  
If you do use it, I would love to know what you do with it (let me know on [Twitter](https://twitter.com/iameoinobrien)).  
If you need a more proper license please let me know and I can research it a bit more.