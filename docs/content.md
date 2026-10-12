# Publishing the journal

The site is a record of real work. A note can be a few sentences; an essay can be longer. Both use MDX in `src/content/writing/`. Notes render in full in the journal and on the homepage; essays use a summary and a dedicated reading page. Both have stable permalinks and RSS entries.

## Add an entry

Create a descriptive filename ending in `.mdx`. Include `title`, `date` in `YYYY-MM-DD`, `description`, `category`, `kind` (`note` or `essay`), and `draft`. Write the actual entry below the frontmatter. Set `draft: true` while preparing the text. Missing draft flags also remain unpublished. Set `draft: false` to include an entry in the production build. Future-dated entries stay unpublished until a build on or after their date; this static site does not schedule builds by itself.

Keep dates honest, distinguish observations from conclusions, and use numbers only when they have a source. A short note does not need a benchmark, a theorem, a code example, or a long title. Do not publish examples merely to fill space.

Run `pnpm test` and `pnpm build` before submitting changes. The homepage, journal, article routes, and RSS share one publication filter, so drafts do not get public article pages.

## Career record

The timeline and credential records live in `src/data/career.ts`; the presentation lives in `src/pages/cv/index.astro`. Update the data rather than duplicating employment dates across pages. Keep full job history, education, and credential source data accurate; the public presentation may select the credentials requested by the owner. A retired certification is historical, not active. A projected eligibility milestone is not a credential already awarded.

## Editorial baseline, 12 October 2026

The two old essays, the topology animation, and the planned eBPF/decision-engine experiments were removed because they had no supporting project evidence. The replacement work overview follows the owner's documented independent practice. The three initial notes are new editorial text based on that practice, not retrospective posts or measured research results. No courses are included in the CV.

Employment dates and education come from the owner's October 2026 CV, checked against the live LinkedIn profile. The owner directly confirmed the English exchange in Chinle (1995–1996), one year of Computer Science at PUC-SP (1997), and the full Cisco certification record in this conversation. The Cisco promotion overlap in November–December 2021 is preserved as supplied rather than silently resolved. Undated credentials from the source CV are omitted by the owner’s request.

Lifetime Emeritus eligibility is projected for 19 September 2028 from the CCIE record start on 19 September 2008. Cisco requires twenty consecutive years of active or Emeritus status. This is an eligibility milestone, not a claim of current Emeritus status. The current active credentials expire on 4 May 2029. Source: [Cisco Emeritus policy](https://www.cisco.com/site/us/en/learn/training-certifications/certifications/expert/emeritus.html).

## Timeline interaction

The owner selected navigation by eras with progress while scrolling. `TimelineNavigator.astro` provides six native anchor links, a sticky position indicator, and a decorative progress line spanning the first through last timeline entries. Scrolling updates the current era without moving keyboard focus. Links work without JavaScript. The JavaScript is confined to the CV and throttles scroll work through requestAnimationFrame.

Motion preserves the existing monochrome layout and typography. Headings enter once with an 8px translation over 420ms; navigation feedback takes 160ms. Text is always visible. CSS centralizes durations and easing. Reduced-motion preferences disable the entrance and smooth scrolling. The navigator and animation are removed for print. Historical badge captions separate the artwork edition from credential dates; missing individual Specialist and Lifecycle marks remain text by the owner's decision.

## Credential layout follow-up, 12 October 2026

The owner selected CCNA, CCNP, CCSP, and CCIE for public display. Other credential records remain in the source data. Timeline milestones use their individual verified graphics at 44px, smaller typography, and right alignment. Education uses the same compact right-aligned milestone treatment; employment keeps its original layout. Explanatory notices were removed from the public CV; status fields, projected eligibility remain factual.

CCDP and ITIL achievement dates were not established by a bounded read-only search of the owner's 2013–2018 email archive: 26,377 indexed messages, ten candidate messages and five attachments inspected. The owner then requested both credentials be omitted. Their additional milestone list, images and unused image-credit block were removed from the site. No archive messages, personal filenames or attachments are copied into this public repository.

## CV presentation and response policy

The owner requested the full name only on the CV, removed the print/save button, and identified the 1995–1996 milestone as Senior Year at Chinle High School with “Go Wildcats!”. School and certification entries use the same compact, right-aligned presentation. Telefônica and the undated CCDP/ITIL entries are excluded by the owner's direction.

The CV opts into a robots noindex meta tag. Cloudflare Pages rules in `public/_headers` cover `/cv`, `/cv/` and `/cv/index.html` with `Cache-Control: no-store`, CDN-specific no-store directives and `X-Robots-Tag: noindex`. Other routes retain their existing behavior. No robots.txt disallow blocks crawlers from reading noindex. Sources: [Cloudflare Pages headers](https://developers.cloudflare.com/pages/configuration/headers/) and [CDN cache-control precedence](https://developers.cloudflare.com/cache/concepts/cdn-cache-control/). Confirm the deployed response headers as well as the generated markup before publication.
