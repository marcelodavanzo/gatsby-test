---
path: "/projects/mol-ad-specs"
date: "2019-05-04"
title: "MailOnline Ad Specs"

client_name:
project_title:
byline:
cta_text:
cta_url:
bg_color:
read_time:
---

## About this project

This project kicked off my role as I joined Adstream in April 2016, at a time when the company was experiencing significant growth and a chain of many important events such as the acquisition of Dubsat, massive growth in Brazil due to a partnership with Globo, their expansion in the US market, big businesses won from both P&G and Disney/ABC, amongst other stuff.

As part of a big push to modernise the entire Adstream Platform, some preliminary ideas had already been concepted for the Library which served as my starting point.

---

## My role

I worked as part of the Product & Development team alongside the Senior Interaction Designer, a Product Manager, 4 Developers / Engineers and the Analytics team. I worked on all UX, UI, visual and interaction design pieces from the ideas/concepts to final implementation of all individual stories.

---

## What is Adstream

The [Adstream Platform](http://www.adstream.com/platform/) is the world’s leading cloud-based advertising workflow and collaboration software (SaaS) tool used by brands, agencies, studios and broadcasters worldwide to manage and deliver global creative content in both traditional and new media formats, connecting content to over 40,000 global destinations in over 116 countries. Everything on the Adstream Platform is searchable and reportable.

<figure class="outset">

<div class="videoWrapper-169"><iframe class="video videoFull youtube" src="https://www.youtube.com/embed/PeDl_7P2Y-A" frameborder="0" allowfullscreen=""></iframe></div>

</figure>

---

## What is the Adstream Library

The [Adstream Library](http://www.adstream.com/platform/library) is one of the main modules of the Adstream platform and it allows users to keep all their finalised assets in a central repository. It is Adstream’s Digital Asset Management (DAM) solution, used by hundreds of clients around the world to store, manage, track, and deliver marketing and advertising content.

It allows users to tag each and every asset with fully customisable metadata regardless of media type, making their libraries fully searchable and accessible from anywhere, at any time. It offers full reporting capabilities and provides visibility on how many times each asset has been shared, viewed, downloaded, by whom amongst other data points.

It is also fully integrated with our advertising Delivery workflow, making it very easy to digitally deliver final assets to broadcasters anywhere.

---

## The problem

The previous version of Library (v5), was developed in 2012 on CHT, a custom framework developed by an internal engineer. This framework was great at the time, as it was tailor made for the very specific needs of the business. However, as time went on, it became harder and harder to implement new features or even revisit existing ones because so much of our platform relied on legacy code that was no longer being maintained. On top of this, very few of our engineers had the necessary knowledge of this framework to make any signifcant contributions to the code base.

Our chief architect pushed the idea to modernise the entire code base as a way to make Adstream flexible and scalable and the Library was chosen as the first module to be redeveloped due to its relative simplicity in comparison to other core areas such as Delivery and Projects.

---

## Objective

Besides simply modernising the Library and aligning its visual design to the [Wayfinder design system](adstream-ui-library.html) we had been developing, this was also a great opportunity to reevaluate some of the core functionality and add support to more modern workflows that had been neglected due to platform limitations, ie. Video on demand (VoD) and digital publishing that became more common in recent years.

<figure class="full">![](//www.marcelodavanzo.co.uk/wp-content/themes/davanzo/img/projects/ap-library/old_ui.png)

<figcaption>This is what v5 looked like.</figcaption>

</figure>

## Research

### Analytics

We started out by working with our Analytics team and pulling reports on various areas of the Library v5 to learn more about how users had been working up until that point.

> <q>Your old site is the best prototype of your new site.</q>
>
> <footer><cite title="Author">Hoa Lorangers</cite>,  
> Director at Nielsen Norman Group</footer>

We found one of the most helpful indicators of usability was to look at a breakdown of all possible actions a user could take in the Library — things like uploading an asset, sharing it, previewing it, downloading it, etc. — and made our initial assumptions on what’s working vs what’s not, which actions should have more prominence and set our priorities based on those figures.

Certain features were hardly ever used. 'Add to a work request' for example had approximately 3-4 uses each month. Alongside product managers, this was essentially how we decided which features would be a priority for an MVP and which ones would be pushed back or removed entirely.

<figure class="outset">![](//www.marcelodavanzo.co.uk/wp-content/themes/davanzo/img/projects/ap-library/analytics.png)

<figcaption>One of our usage reports.</figcaption>

</figure>

---

### Competitive analysis

I looked at other similar tools to try and pick out interesting patterns and get a sense of how similar tasks could be completed with slightly different approaches. I also wanted to see whether there was a gap in feature set when comparing our Library to other tools.

My analysis comprised simple aspects such as:

- Selecting a file and how that affects the actions that are exposed to the user.
- How additional details such as activity / history logs are presented.
- How files can grouped, tagged and therefore searched, sorted and filtered.
- Opening vs previewing a file.
- Hierarchical structure — folders and subfolders vs groups or collections.

To more complex interactions such as:

- How the file browser aspect of each platform functions and behaves. There is a huge divide between it feeling like you are in an internet browser vs feeling like the platform is a native file browser like the Mac Finder or Windows Explorer. The latter approach is the current trend as it’s a lot more intuitive and usable overall, hence it was favoured for this project. It offers things like context menus, off-canvas elements, actions that are exposed based on your selection, drawing a shape to select files and using keyboard hotkeys to select multiple ones, single / double / right click functionality, to mention just a few.

Long story short, most of my inspiration for this project came from the products below. Even though the only direct competitor in this list is Bynder, the others provided me with ideas on how to approach certain features such as displaying assets in lists vs tiles, selecting, sorting, previewing different types of media, etc.

- Dropbox
- Dropbox Paper
- Google Drive
- OneDrive
- Outlook
- InVision
- Bynder
- Getty Images

<figure class="full">![](//www.marcelodavanzo.co.uk/wp-content/themes/davanzo/img/projects/ap-library/inspiration.png)

<figcaption>Quite a lineup. Props to them for being such amazing digital products!</figcaption>

</figure>

---

## IA & sketching

It was paramount that the architecture, structure and language of the new Library matched the priorities of our users.

We started those explorations with simple sketches and wireframes as these were the quickest way to test new concepts and get them to a stage where layout, messaging and the flow could be assessed. This happened over many sessions with the team.

Here we were aiming at structuring content, reviewing navigation patterns, testing layouts and screenflows in a way that made sense while not straying too far from what made the Library such a powerful tool.

> <q>You can use an eraser on the drafting table or a sledge hammer on the construction site.</q>
>
> <footer><cite title="Author">Frank Lloyd Wright</cite></footer>

<figure class="outset">![](//www.marcelodavanzo.co.uk/wp-content/themes/davanzo/img/projects/ap-library/sketches.jpg)

<figcaption>I love how sketches and wireframes abstract details away and force you to focus on what really matters.</figcaption>

</figure>

---

## Prototyping & user testing

Once we were happy with our results — and after a few internal usability and feedback sessions with members of other teams — it was time to do our homework so we could properly test things out and hear directly from our users — which is the most exciting part!

This being enterprise software we had to keep in mind most of our users don’t actively choose to use our systems, their organisation often chooses it for them.

Because of this, it can be difficult to get a hold of users for testing, but once you get access to them, they will often have a lot to say about your product and most the time are quite happy to provide feedback on things that could potentially make their lives easier.

For this particular case, we approached a few agencies and asked for a few contacts that would be willing to participate in our tests. We explained they would be sent a link with a script to try out the new Library.

All we had to do was prepare a script and a [prototype](http://y2ntb8.axshare.com/#g=1&p=assets) they could play with. Long story short, we snuck some analytics scripts into our prototype and measured them on completion times, dwell times and total task completion. We tested things like uploading an asset, tagging, sharing, searching and sorting which cover 90% of what users typically do in the Library.

**Adstream Library – Prototype**  
[Preview it here.](http://y2ntb8.axshare.com/)  
Made with: Axure

<figure class="outset">![](//www.marcelodavanzo.co.uk/wp-content/themes/davanzo/img/projects/ap-library/prototype.png)

<figcaption>This is what our prototype looked like.</figcaption>

</figure>

---

## Results

We found that most users were able to complete the tasks quite easily and were mostly happy with the new version of the Library.

The only pain point raised was creating and managing collections, which essentially work as ‘smart folders’ or ‘rules’ in Outlook. You set a few rules based on metadata and every time something is added to your Library that matches those rules, that new asset automatically becomes part of the Collection(s) it matches.

We learned that users needed a clear visual distinction between what is a ‘loose’ asset and a collection. This led us to effectively split both into their own areas, which is reflected on the visual designs you see below.

---

## Visual design

We now had everything we needed to start refining the visual design and making sure this wasn't just a UI refresh but a chance to improve upon the overall experience for our users.

<figure class="full">![](//www.marcelodavanzo.co.uk/wp-content/themes/davanzo/img/projects/ap-library/final_visual.jpg)

<figcaption>All asset (grid and table) views, collections view and asset preview (document, video, image, audio).</figcaption>

</figure>

At this stage I also produced some prototypes to save us a few headaches and have a chance to test and refine things like layout and interactions before the developers started writing code. Here are some of them:

**Adstream Library**  
[Preview it here.](http://s.codepen.io/marcelodavanzo/debug/275f728977902a25a4a2823bda62ce59)  
Made with: Angular Material framework — HTML, CSS & JS

**Adstream Library – Collection view tree navigation**  
[Preview it here.](http://s.codepen.io/marcelodavanzo/debug/MpQNrL)  
Made with: Angular Material framework — HTML, CSS & JS

**Adstream Library – Collection view masonry layout**  
[Preview it here.](http://s.codepen.io/marcelodavanzo/debug/18eca4dd9ae68988836af4e87609ad92)  
Made with: Angular Material framework — HTML, CSS & JS

**Adstream Library – Collection tiles proof of concept**  
[Preview it here.](http://s.codepen.io/marcelodavanzo/debug/ryKVXx)  
Made with: HTML, CSS & JS

**Adstream Library – Tile view**  
[Preview it here.](http://s.codepen.io/marcelodavanzo/debug/1bb1f2e981c2949702260ff7f4bf86b3)  
Made with: Angular Material framework — HTML, CSS & JS

**Adstream Library – List view**  
[Preview it here.](http://s.codepen.io/marcelodavanzo/debug/1042004da1819ee1edf3640a1a844cdf)  
Made with: Angular Material framework — HTML, CSS & JS

**Adstream Library – Audio player**  
[Preview it here.](http://s.codepen.io/marcelodavanzo/debug/e8ab9d26424ca706b595a00798a993de)  
Made with: Angular Material framework — HTML, CSS & JS

---

We also reviewed and documented some smaller stories such as the frame grabber (pretty self-explanatory, only avilable on video files) and devised systems for things like comments and activity feeds in a way that made them more contextual.

<figure class="full">![](//www.marcelodavanzo.co.uk/wp-content/themes/davanzo/img/projects/ap-library/frame_grabber.png)

<figcaption>Screen flows done for the frame grabber tool that is avilable on video files.</figcaption>

</figure>

<figure class="full">![](//www.marcelodavanzo.co.uk/wp-content/themes/davanzo/img/projects/ap-library/activity.png)

<figcaption>The spec document for our activity feeds.</figcaption>

</figure>

---

## Specs & production

We then documented every story in this epic to allow the devs to start bringing the Library to life. We used Zeplin for specs which saved us a lot of time and did weekly catch ups to make sure we were all on the same page and could spot inconsistencies early enough to fix them.

<figure class="outset">![](//www.marcelodavanzo.co.uk/wp-content/themes/davanzo/img/projects/ap-library/zeplin.png)

<figcaption>All different views and layouts have been documented and described in Zeplin where we keep all our official design documentation.</figcaption>

</figure>

---

## Shipping

We are currently rolling out the new version of the Library to a few selected groups of users and are monitoring adoption and usage to iron things out as a beta test before a full roll out to all users.

<figure class="full">![](//www.marcelodavanzo.co.uk/wp-content/themes/davanzo/img/projects/ap-library/trial_system.png)

<figcaption>The system we used to roll out the trials. Users are asked to try the new Library and later asked to provide feedback via a quick survey.</figcaption>

</figure>

---

## Conclusion

The new version of the Adstream Library highlights and surfaces its real strengths — a powerful industry-leading digital asset management tool, backed by an amazing new user interface that speaks to our users and responds to their most specific needs.

In our tests, we found that not only were users able to understand the new ways to complete tasks they were used to doing a certain way in the past, they were also able to take it up a notch and create their own new, modern workflows based on the Library’s new — and more solid — foundations.
