---
layout: check.njk
order: 1
title: All functionality is operable with a keyboard
userImpact: This helps ensure users navigating via keyboard only or via a screen reader do not encounter any barriers to using a service
notes: Unlikely to find issue if using the design system. Common in other builds
sc:
  - 2.1.1 keyboard
understandingSc: https://www.w3.org/WAI/WCAG21/Understanding/keyboard.html
interaction: 
  - Keyboard
responsibilities:
  - Developer
  - Content
topic: 
  - Keyboard operables
filters:
  - None
priority:
  - Common issue
severity:
  - Blocker
testProcedure:
  - Manual
  - Some support from tools
  - Keyboard
timeToTest:
  - Medium
knowledgeToTest:
  - Medium
relevance:
  - Issue found
foundInAudits:
  - Campaigns
  - Signup vaccine studies
  - Site finder
---

## Design Notes
Some people use keyboards or key emulators such as sip-and-puff software, on-screen keyboards and speech input software to access content.

All functionality provided by the interactive elements on the page must be able to be operated with a keyboard or keyboard interface.

## Developer Notes

### Ensure all functionality is operable with a keyboard
The easiest way to ensure keyboard operability is to use native, semantic HTML elements for controls:

- Use `<button>` and `<a>` elements over generic elements such as `<div>` and `<span>`. Doing so means you get several accessibility benefits 'for free' — such as keyboard interactions supported by default.

#### More information
- [Favourite Accessibility Test: Tab Key](https://www.matuzo.at/blog/testing-with-tab/)
- [Keyboard-navigable JavaScript widgets](https://developer.mozilla.org/en-US/docs/Web/Accessibility/Keyboard-navigable_JavaScript_widgets)
- [Nutrition Cards: Accessibility Requirements for Components](https://davatron5000.github.io/a11y-nutrition-cards/)

## Testing Notes
### All functionality is operable with a keyboard
All functionality provided by the interactive elements on the page must be able to be operated with a keyboard or keyboard interface.

Check you can:
- use the Tab key to progress through all links and controls
- shift-tab to reverse
- enter to follow links
- space to select form controls (such as checkboxes)
- arrow keys for radio buttons or tabs.

#### Impact range
Medium-High

#### Test type
Manual (with some support from tools)**

#### Tool
- [ARC Toolkit](https://www.paciellogroup.com/toolkit/) (Show and Track Focus option)
- [Force focus outlines bookmarklet](https://adrianroselli.com/2015/01/css-bookmarklets-for-testing-and-fixing.html#outlines) 
— alternative tool to force visual focus indicator to assist testing

#### WCAG Reference
[Understanding Success Criterion 2.1.1: Keyboard](https://www.w3.org/WAI/WCAG21/Understanding/keyboard)
