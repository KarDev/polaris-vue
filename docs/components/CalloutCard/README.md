---
layout: doc
title: Callout card
category: Layout and structure
examples:
  - fileName: Default.vue
    frameHeight: 300
    title: Default
    description: Use to let merchants know about a feature or opportunity where there is a clear, single action they need to take to move to the next step.
  - fileName: CalloutCardWithSecondaryAction.vue
    frameHeight: 300
    title: With secondary action
    description: Use to let merchants know about a feature or opportunity where there are two distinct actions they can take on the information.
  - fileName: CalloutCardDismissable.vue
    frameHeight: 300
    title: Dismissable
    description: Make all callout cards dismissible so merchants can get rid of cards about features they’re not interested in.
  - fileName: WithIconableActions.vue
    frameHeight: 300
    title: With iconable actions
    description: Display the icons beside secondary and/or primary actions.
---

# {{ $frontmatter.title }}

<Lede>

{{ $frontmatter.description }}

</Lede>

<Examples>

<<< ./[examples]

</Examples>

## Props

<div style="font-size: 0.8125rem">

Some types of props are following the [Polaris Design Tokens](https://polaris.shopify.com/tokens).

</div>

<PropsTable />

## Slots

<SlotsTable />

## Events

<EventsTable />

<div style="font-size: 0.8125rem">

## Best practices

Callout cards should:

- Clearly articulate the benefit of the feature and what it does
- Provide merchants with a clear call to action
- Be targeted to merchants who will most benefit from the feature
- Be dismissable so merchants can get rid of cards about features they’re not interested in
- Use an illustration that helps to communicate the subject or merchant benefit

---

## Content guidelines

### Title

Callout card titles should follow the content guidelines for [headings and subheadings](https://polaris.shopify.com/content/actionable-language#headings-and-subheadings).

### Body content

Body content should be:

- Actionable: start sentences with imperative verbs when telling merchants what actions are available to them (especially something new). Don’t use permissive language like “you can”.

<DoDont>

#### Do

Get performance data for all your sales channels.

#### Don’t

Now you can get performance data for all your sales channels.

</DoDont>

- Structured for merchant success: always put the most critical information first
- Clear: use the verb “need” to help merchants understand when they’re required to do something

<DoDont>

#### Do

To buy a shipping label, you need to enter the total weight of your shipment, including packaging.

#### Don’t

To buy a shipping label, you must enter the total weight of your shipment, including packaging.

</DoDont>

### Call to action

Buttons should be:

Clear and predictable: merchants should be able to anticipate what will happen when they click a button. Never deceive merchants by mislabeling a button.

<DoDont>

#### Do

Buy shipping label

#### Don’t

Buy

</DoDont>

- Action-led: buttons should always lead with a strong verb that encourages action. To provide enough context to merchants use the \{verb\}+\{noun\} format on buttons except in the case of common actions like Save, Close, Cancel, or OK.

<DoDont>

#### Do

View shipping settings

#### Don’t

View your settings

</DoDont>

- Scannable: avoid unnecessary words and articles such as the, an, or a.

<DoDont>

#### Do

Add menu item

#### Don’t

Add a menu item

</DoDont>

---

## Related components

- To group similar concepts and tasks together, [use the card component](/components/Card)
- To create page-level layout, [use the layout component](/components/Layout)
- To explain a feature that merchants haven’t tried yet, [use the empty state component](/components/EmptyState)

---

## Accessibility

The required `title` prop gives the callout card a level 2 heading (`<h2>`). This helps with readability and provides structure to screen reader users.

Illustrations included in callout cards are implemented as decorative images with empty `alt` attributes (`alt=""` ) so that they’re skipped by screen readers.

Use [actionable language](https://polaris.shopify.com/content/actionable-language#navigation) to ensure that the purpose of the callout card is clear to all merchants, including those with issues related to reading and language.

</div>
