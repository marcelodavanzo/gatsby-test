---
path: "/projects/adstream-indesign-plugin"
date: "2019-05-04"
title: "Adstream InDesign Plugin"

client_name:
project_title:
byline:
cta_text:
cta_url:
bg_color:
read_time:
---

## What I did

I worked closely with the senior interaction designer, the product manager for Library, members of the Print Support team and a team of developers, on everything ranging from interpreting high level requirements, producing flows, scenarios, sketches, wireframes, user tests, visual designs, prototypes, interactions and micro-interactions and all sorts of UI/UX explorations, through to creating development specifications.

* * *

## Key accomplishment 🏅

Offering a solution that integrates the Adstream Library with Adobe InDesign is a strategic move that essentially <mark>solidifies Adstream’s presence as a strong player in print-based workflows</mark> by giving current users less of a reason to leave to a competitor, <mark>while increasing brand value and potentially attracting new print business</mark>, leading to larger market share.

<figure class="full">![](http://www.marcelodavanzo.co.uk/wp-content/themes/davanzo/img/projects/ap-indesign/hero.png)</figure>

## Objective

One of the key aspects of the Adstream Platform are the capabilities it offers to [print-specific workflows](http://www.adstream.com/media-types/print-publishing/). Many studios, agencies, production and post-production studios use the platform to keep track of their projects, assets and collections as it allows for easy tagging, sorting, searching, annotating, sharing and version control.

A big part of the typical print workflow involves using Adobe InDesign to create a multitude of formats, and given this scenario, the Product team at Adstream were tasked with creating a solution that bridged the gap between InDesign’s powerful desktop publishing capabilities and the Adstream Platform, creating a seamless experience.

* * *

## What is Adstream

The [Adstream Platform](http://www.adstream.com/platform/) is the world’s leading cloud-based advertising workflow and collaboration software (SaaS) tool used by brands, agencies, studios and broadcasters worldwide to manage and deliver global creative content in both traditional and new media formats, connecting content to over 40,000 global destinations in over 116 countries. Everything on the Adstream Platform is searchable and reportable.

<figure class="outset">

<div class="videoWrapper-169"><iframe class="video videoFull youtube" src="https://www.youtube.com/embed/PeDl_7P2Y-A" frameborder="0" allowfullscreen=""></iframe></div>

</figure>

* * *

## What is the Adstream Library

The [Adstream Library](http://www.adstream.com/platform/library) is one of the main modules of the Adstream platform and it allows users to keep all their finalised assets in a central repository. It is Adstream’s Digital Asset Management (DAM) solution, used by hundreds of clients around the world to store, manage, track, and deliver marketing and advertising content.

It allows users to tag each and every asset with fully customisable metadata regardless of media type, making their libraries fully searchable and accessible from anywhere, at any time. It offers full reporting capabilities and provides visibility on how many times each asset has been shared, viewed, downloaded, by whom amongst other data points.

It is also fully integrated with our advertising Delivery workflow, making it very easy to digitally deliver final assets to broadcasters anywhere.

* * *

## Brief

### Scope

Develop a Mac-only InDesign plugin that integrates with the Adstream Library and allows users to:

*   Place assets located in their Library into InDesign as linked assets.
*   Save local InDesign links to their Library, thus making them remote links.
*   Check links for missing or modified statuses and allow users to fix them accordingly.

### Problem to solve

Users can currently keep track of their project, assets, libraries and collections within the Adstream Platform and take advantage of its version control feature to ensure they’re always working with their latest approved assets.

However, they currently have to download said assets and work with them locally. It would make their lives a lot easier if they could link directly to their own assets in the Platform, as well as being able to relink files that have been modified with a more recent version.

### Constraints

The plugin should ideally be built as a native plugin that lives within Adobe InDesign. However, due to time constraints and technical limitations it will initially be developed as a standalone Mac application.

We have also suggested it be made as a MacOS menu bar plugin for future releases and provided specs for such.

* * *

## Research

### Competitive analysis

I looked at similar plugins being offered by other digital asset management (DAM) platforms such as [Bynder](https://support.getbynder.com/hc/en-us/articles/207215415-How-do-I-select-Bynder-assets-in-Adobe-InDesign-), [WebDAM](https://www.siliconpublishing.com/products/products_connector_webdam.html), and [Widen](http://www.widen.com/adobe-creative-cloud-connector) to see different possible approaches and take note of how they handled a similar process:

*   Whether they were standalone apps, web views within InDesign, drag and drops directly from the browser or true InDesign add-ons
*   What the process to save, place and update was like
*   How natural the integration looked and felt in terms of visual consistency

Although these plugins felt a little cumbersome to use and a little out place in terms of visuals, we knew we had some pretty strong competition in terms of functionality.

> <q>“Does it better” will always beat “did it first.”</q>
> 
> <footer><cite title="Author">Aaron Levie</cite>,  
> CEO at Box</footer>

### Journey mapping

We developed a few scenarios / storyboards to cover the main use cases and determine what the ideal user journey would be like. We locked it all down into 3 main paths: 'placing from', 'saving to' and 'updating linked media'.

<figure class="outset">

<div class="flex-it flex-align-item-start">![](http://www.marcelodavanzo.co.uk/wp-content/themes/davanzo/img/projects/ap-indesign/map-place.jpg)  
![](http://www.marcelodavanzo.co.uk/wp-content/themes/davanzo/img/projects/ap-indesign/map-links.jpg)  
![](http://www.marcelodavanzo.co.uk/wp-content/themes/davanzo/img/projects/ap-indesign/map-saveto.jpg)</div>

<figcaption>Some of the journey maps we created.</figcaption>

</figure>

* * *

## Sketching

I sketched out some of what I figured would be the most important steps before moving on to more refined versions of the UI and micro-interactions.

<figure class="inset">![](http://www.marcelodavanzo.co.uk/wp-content/themes/davanzo/img/projects/ap-indesign/sketches.jpg)</figure>

* * *

## Visual design

The visual design was practically dictated by our UI Pattern Library and this being an InDesign plugin, it made sense to make use of our dark UI which is more in line with the Adobe suite of products and most likely what users would expect.

It also ties up nicely with our goal to make this experience feel as integrated with what Adobe InDesign users are accustomed to as possible.

<figure class="full">![](http://www.marcelodavanzo.co.uk/wp-content/themes/davanzo/img/projects/ap-indesign/symbols.png)

<figcaption>This is how my Sketch symbols ended up being at the end of the project.</figcaption>

</figure>

> <q>Design is not art. It is about crafting solutions to real issues.</q>
> 
> <footer><cite title="Author">Mark Boulton</cite></footer>

<figure class="outset">![](http://www.marcelodavanzo.co.uk/wp-content/themes/davanzo/img/projects/ap-indesign/session.jpg)

<figcaption>Picture taken at one of our mapping sessions.</figcaption>

</figure>

Essentially, after mapping out all the required screens and modules to allow users to complete their journeys, I was able to start putting together the visual designs and testing them out as prototypes with our internal Print Support team who have been in the industry for several years and have extensive knowledge of our users and their workflows, many of them coming from print studios themselves.

<figure class="full">![](http://www.marcelodavanzo.co.uk/wp-content/themes/davanzo/img/projects/ap-indesign/visualdesign.png)</figure>

* * *

## Prototype

I created a simple click-through prototype in Adobe XD to test out the user journey with a few internal stakeholders from the print support team and collect their feedback and thoughts.

Journey test — Placing workflow  
[http://adobe.ly/1WiEhCj](http://adobe.ly/1WiEhCj)  
Made with: Adobe XD

* * *

## Documentation

The development of this plugin was handled by a branch of our development team based in Australia, so we had to minimise time spent reworking and provided pretty detailed specs. We chose to use Zeplin to make this process easier.

<figure class="outset">![](http://www.marcelodavanzo.co.uk/wp-content/themes/davanzo/img/projects/ap-indesign/zeplin.png)</figure>

* * *

## Conclusion

The plugin was released in November 2016 and we have been monitoring usage, analysing tracking data and customer support reports to see whether our implementation satisfies the needs of our users.

The response has been positive so far and I attribute that to the fact we kept things as simple as possible, focusing only on the core functionality such plugin requires, without any added fluff.

We aim to keep an eye on those stats and continually iterate and improve on our solution as needed.