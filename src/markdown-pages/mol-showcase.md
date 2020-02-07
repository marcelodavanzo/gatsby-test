---
path: "/projects/mol-showcase"
date: "2019-05-04"
title: "MailOnline – Showcase"

client_name:
project_title:
byline:
cta_text:
cta_url:
bg_color:
read_time:
---

## About the project

The MailOnline Showcase site serves as a portfolio of what the Creative Team has historically produced so that potential new advertisers can have a better understanding of what they'd be buying into in terms of execution.

---

## What I did

I came up with the concept of laying things out in tiles containing appealing images of past campaigns, while giving the user complete control over what they see through a filtering system.

---

## Wireframing

It was safe to assume the website would start with only a few projects but would eventually grow to hold several of those tiles. The challenge was to make it visually interesting regardless of how many tiles were on screen. The "empty" slots are marked with placeholders for that reason, so the page never feels empty.

<figure class="outset">![Wireframing](http://www.marcelodavanzo.co.uk/wp-content/themes/davanzo/img/projects/mol-showcase/wiremock.jpg)</figure>

---

## UX

Since the user would be able to use several types of filters - channel, format, device, category - my main concern was in keeping navigation simple instead of overwhelming the user with options. Additionally, the OFF button provides a quick way to disable all active filters.

<figure class="outset hide">![Filters](http://www.marcelodavanzo.co.uk/wp-content/themes/davanzo/img/projects/mol-showcase/filters.jpg)</figure>

<figure class="outset"><video class="video videoFull" poster="http://www.marcelodavanzo.co.uk/wp-content/themes/davanzo/img/projects/mol-showcase/filters.jpg" autoplay="autoplay" loop="loop" muted=""><source src="https://zippy.gfycat.com/UnfinishedBossyGopher.webm" type="video/mp4"><source src="http://www.marcelodavanzo.co.uk/wp-content/themes/davanzo/img/projects/mol-showcase/filters.mp4" type="video/mp4">Your browser does not support the video tag.</video></figure>

---

## Design & UI

The concept here is that content itself is what makes the design instead of adding unnecessary elements. The tiles are comprised of the format name, client it was developed for, a short description and upon clicking, a live preview of said format is launched on a new tab.

The filters are basically a list of checkboxes, this way you can tick multiple ones in order to chain them together and expand your search.

<figure class="outset">![Design & UI](http://www.marcelodavanzo.co.uk/wp-content/themes/davanzo/img/projects/mol-showcase/insitu.jpg)</figure>

<figure class="full-width"><video class="video videoFull" autoplay="autoplay" loop="loop" muted=""><source src="http://marcelodavanzo.co.uk/wp-content/themes/davanzo/img/projects/mol-showcase/loader.mp4" type="video/mp4">Your browser does not support the video tag.</video>

<figcaption>This is the loader I created for when the page is loading. It is done with CSS keyframe animations and uses the colours of the different MailOnline channels.</figcaption>

</figure>

---

## Build

The back-end for this site is a simple JSON feed that can be easily updated by anyone on the design team. All they have to do is generate a thumbnail image and create new nodes in the JSON file.

<figure class="inset">![Code](http://www.marcelodavanzo.co.uk/wp-content/themes/davanzo/img/projects/mol-showcase/code.jpg)</figure>

---

## Mobile specific

Some of the formats we created are better experienced on real mobile devices instead of emulated through a desktop browser.

For this reason, I have also created a separate [mobile-only Showcase site](http://mailonlinecreative.co.uk/showcase/mobile/).

This is a neat little tool the sales team can use to show clients what the real experience would feel like before closing a sale. You can check it out [here](http://mailonlinecreative.co.uk/showcase/mobile/).

<figure class="inset"><video class="video videoFull" style="max-width: 360px;" poster="" autoplay="autoplay" loop="loop" muted=""><source src="http://www.marcelodavanzo.co.uk/wp-content/themes/davanzo/img/projects/mol-showcase/mobile.mp4" type="video/mp4">![Mobile](http://www.marcelodavanzo.co.uk/wp-content/themes/davanzo/img/projects/mol-showcase/mobile.png)</video></figure>
