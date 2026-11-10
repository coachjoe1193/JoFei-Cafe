# JoFei Cafe — Product Requirements Document

Version: 0.2 · 10 November 2026 · Status: Draft for review

Owner-confirmed visit details: **7 SCI Street, Joyful State**. Opening hours: **every day, 10am–8pm**. These replace the location and hours assumptions below; remaining menu and operating proposals still require review.

## 1. Product vision

JoFei Cafe is a welcoming neighbourhood café in Singapore where students and young people can unwind after school, meet friends, and enjoy affordable drinks and snacks. It should feel easy to visit regularly: casual, comfortable, and close to everyday neighbourhood life.

The launch product combines the café experience with a simple mobile-friendly website that helps someone answer: “What can I get, how much is it, and how do I get there?”

## 2. Assumptions and scope

- Initial audience: secondary-school, junior-college, polytechnic, and ITE students, approximately ages 13–22. This is a proposed audience, subject to owner confirmation.
- Launch starts with one physical outlet in Singapore. Location and opening hours are undecided.
- The main visit occasion is after school, especially weekday afternoons; weekends are a secondary occasion.
- The website supports discovery and walk-in visits. Ordering and payment happen at the café at launch.
- Prices, menu items, operating policies, and targets below are proposals, not confirmed business facts.

## 3. Problem to solve

Students need an approachable place near home or school to spend time together without feeling pressured to buy an expensive meal. Before visiting, they need clear prices, a menu, opening hours, directions, and a realistic sense of the space.

The café needs a clear identity and a manageable service model that encourages repeat visits while keeping queues, seating, and operating costs under control.

## 4. Goals and success measures

| Goal | Proposed measure | Initial target or decision |
|---|---|---|
| Make the café easy to discover | Website usability task: find price, hours, and directions | At least 4 of 5 test users complete each task without help |
| Keep an everyday visit affordable | Entry-level drink and drink-plus-snack options | Test drinks around S$3–6 and sets around S$6–9 against actual costs |
| Serve the after-school rush reliably | Time from payment to receiving a standard order | Aim for 90% within 10 minutes; validate with a service trial |
| Encourage repeat visits | Anonymous visit survey or optional stamp-card use | Establish a baseline during the first four weeks |
| Support viable operations | Average spend, ingredient costs, waste, and seat use | Owner sets targets before launch using rent, staffing, and capacity |

These are planning targets. They are not revenue forecasts or evidence of market demand.

## 5. Primary users and needs

| User | Situation | Core need |
|---|---|---|
| After-school friend group | Two to four friends deciding where to hang out | Affordable sets, a friendly atmosphere, and clear directions |
| Student with a short break | Wants a quick drink or snack before heading home | Easy menu choices and predictable service |
| Solo student | Wants a quiet seat for reading or light homework | Clear seating expectations and a comfortable environment |
| Parent or guardian | Wants to understand the venue | Visible location, hours, contact information, and café policies |
| Café staff | Handles a concentrated afternoon rush | A compact menu, consistent prices, and straightforward service rules |

## 6. Positioning and experience

**Promise:** Your neighbourhood spot to recharge after school.

- Friendly and relaxed, with a youthful identity that also welcomes neighbours and families.
- A small, consistent menu with a few memorable favourites.
- Clear prices in Singapore dollars and transparent promotion conditions.
- Comfortable seating for conversation, with light homework welcome where capacity permits.
- Clear, respectful guidance on noise, shared seating, and busy-period table use.
- Non-coffee and caffeine-free options so coffee is not the only reason to visit.

Suggested tone: warm, simple, and conversational. Avoid language that makes the café feel exclusive or expensive.

## 7. Core customer journey

1. A student hears about JoFei Cafe from a friend, a nearby sign, or a social post.
2. They open the website on their phone and see what the café offers.
3. They check menu prices, an after-school set, opening hours, and directions.
4. They walk in, review the menu, and order at the counter.
5. Staff confirm the order, price, and any ingredient questions before payment.
6. The student collects the order and sits with friends or takes it away.
7. A positive experience and a simple optional stamp card encourage another visit.

If the café is full, staff explain the likely wait and offer takeaway. The website must not promise live seat availability.

## 8. MVP requirements

### 8.1 Café offering and operations

| ID | Requirement | Acceptance criteria |
|---|---|---|
| C1 | Compact drinks and snacks menu | Owner approves a manageable menu with prices, serving sizes, ingredient references, and preparation steps before launch |
| C2 | Affordable after-school set | At least one proposed drink-and-snack combination is costed and approved; availability and promotion terms are clear |
| C3 | Inclusive drink choices | Menu contains non-coffee and caffeine-free choices; any caffeine or ingredient claims are verified |
| C4 | Ingredient and allergen questions | Staff have an up-to-date ingredient reference and a process for checking questions; unverified allergen-free claims are never made |
| C5 | Straightforward counter ordering | Customers can see the menu and total before paying; staff can explain collection and estimated waiting time |
| C6 | Seating expectations | Owner defines capacity, homework policy, and any busy-period time limits; customers can see relevant policies before ordering |
| C7 | Maintain menu accuracy | A named staff member owns changes to prices, availability, promotions, and opening hours across the menu and website |

Candidate menu categories for validation: iced chocolate, fruit drinks, tea, coffee, toast, and small baked snacks. Final recipes and suppliers remain open.

### 8.2 Launch website

| ID | Priority | Requirement | Acceptance criteria |
|---|---|---|---|
| W1 | Must | Clear café introduction | First screen identifies JoFei Cafe, its neighbourhood café concept, and a prominent “View menu” action |
| W2 | Must | Readable menu | Food and drinks display names, short descriptions, and approved prices in SGD; essential information is text, not only an image |
| W3 | Must | Visit information | Approved address, opening hours, map link, and nearest transport guidance appear together; no invented details appear on the public site |
| W4 | Must | After-school offer | If an offer is active, show price, included items, valid days/times, end date where applicable, and exclusions; hide expired offers |
| W5 | Must | Contact route | Show an owner-approved contact method; visitors can use it without creating an account |
| W6 | Must | Mobile usability and accessibility | No horizontal scrolling at 360px width; controls work by keyboard; images have useful alternative text; text has readable contrast |
| W7 | Must | Honest imagery and content | Use approved café/menu photos when available; concept images are clearly identified; no invented reviews or certifications |
| W8 | Must | Reliable links and loading | Menu and visit information load on a typical mobile connection; all navigation, map, and contact links pass manual checks |
| W9 | Should | Social presence | Link to verified official social accounts once supplied |
| W10 | Could | Simple stamp-card explanation | Explain an approved physical loyalty scheme without requiring an online profile |

Suggested website structure: Home → Menu → After-school offer → Visit us → Contact. A single scrolling page is sufficient for the MVP.

### 8.3 Content, data, and access

- Public visitors do not need accounts, passwords, or authentication.
- Do not collect student identity numbers, school details, birth dates, or payment information on the launch website.
- Use external map and contact links where practical instead of building a customer database.
- If analytics are used, prefer aggregate measures and avoid identifying individual students.
- Any future contact form, online loyalty scheme, or ordering system needs a separate review of data collection, retention, access, and user notices before launch.
- Keep deployment credentials and any service tokens out of public source code and browser-delivered assets. Editing access is restricted to authorised maintainers.

## 9. Out of scope for launch

- Online checkout, delivery, and pickup ordering.
- Customer accounts, student verification, and personalised profiles.
- A native mobile app.
- Live seating availability, table reservations, and a booking engine.
- Digital loyalty balances, marketing automation, or personalised offers.
- Multi-outlet management and a custom point-of-sale system.

## 10. Launch readiness

Launch requires the owner to approve:

- Café address, opening hours, contact channel, and official social links.
- Final menu, prices, recipes, ingredient references, and promotion conditions.
- Seating capacity, staffing, collection process, and busy-period policies.
- Brand name treatment, logo, photography, and website copy.
- Applicable operating, food-service, premises, and privacy requirements, verified through the appropriate official guidance before opening. This PRD does not establish regulatory readiness.

Website acceptance checks:

1. Five representative users try finding a snack price, opening hours, and directions on mobile.
2. Owner verifies every menu item, price, address, hour, offer, and contact detail.
3. Maintainer checks small-screen layout, keyboard navigation, image descriptions, and all external links.
4. A walkthrough confirms that the website makes no unsupported claims about seating, ingredients, certifications, or ordering.
5. Staff run a small service trial to identify queue, preparation, and seating bottlenecks.

## 11. Risks and responses

| Risk | Response |
|---|---|
| Students find prices too high | Test a small menu and entry-level set with target customers; confirm margins before committing |
| Long visits reduce available seating | Define and communicate a fair busy-period policy; monitor seat use before changing it |
| Afternoon demand overwhelms staff | Limit menu complexity and rehearse preparation and collection flow |
| Website content becomes outdated | Assign one owner and require same-day updates when prices, hours, or offers change |
| Concept attracts interest but few visits | Track aggregate direction/contact clicks and ask walk-in customers how they heard about the café |
| Youth-oriented marketing feels unwelcoming to neighbours | Keep the space and messaging open to families and the wider neighbourhood |

## 12. Delivery sequence

1. **Validate the concept:** confirm location, audience, budget, menu, and capacity; speak with a small group of potential customers.
2. **Prepare the brand and content:** approve identity, menu copy, photos, hours, and visiting information.
3. **Build the website:** implement the mobile page and complete the acceptance checks.
4. **Soft launch:** trial service and collect simple feedback about price, menu, comfort, and wait time.
5. **Review after four weeks:** assess demand, repeat visits, costs, and operational issues before adding features.

Dates and effort estimates should be set once outlet readiness and approved content are known.

## 13. Open decisions

1. Which Singapore neighbourhood and outlet location will JoFei Cafe serve?
2. Is the primary audience secondary-school students, tertiary students, or a mix?
3. What are the launch budget, seating capacity, and desired opening hours?
4. Which signature drink or snack should people remember JoFei Cafe for?
5. What price range is viable after ingredient, staffing, and premises costs?
6. Will homework, Wi-Fi, and charging be offered, and under what seating policy?
7. What brand assets and owner-approved contact channels already exist?

