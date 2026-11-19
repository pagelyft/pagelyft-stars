---
title: Interface design
description: The colors, type, spacing and icons Nod's interface uses, the rules that keep it simple, and how to check a UI change.
sidebar:
  order: 7
---

This page lists the design rules for Nod's web and desktop interface, and how to check a UI change before you open a pull request.

This build of Nod follows the PageLyft brand: indigo-tinted surfaces, rose primary actions, Barlow Condensed titles and clear text. The dark theme sits on PageLyft's indigo ground. Nod keeps its own symbol.

## Keep it simple

Chat is the main work area. Tasks, schedules, apps, channels and the Vault support it. Keep navigation and results clear, and keep decoration out of active work.

| Do                                                      | Don't                                                   |
| ------------------------------------------------------- | ------------------------------------------------------- |
| Let the content speak for itself                        | Add eyebrow labels above titles                         |
| Use a title only when it adds something                 | Write titles that restate what the screen already shows |
| Keep text short, with little text per screen            | Explain a control that's already clear                  |
| Show a state with an icon or text, plus its color       | Let color alone carry a state or a safety decision      |
| Keep statuses, tabs and navigation items clear controls | Style controls as marketing capsules                    |

## Color

The palette lives in [`src/web/theme.css`](https://github.com/n8n-io/nod/blob/main/src/web/theme.css). Page styles use its variables. Don't add page-specific colors.

| Role                 | Variable                 | Light                 | Dark                  |
| -------------------- | ------------------------ | --------------------- | --------------------- |
| Canvas               | `--background`           | `--white` (#fbfcfe)   | `--black` (#14162e)   |
| Sidebar              | `--sidebar`              | `--gray-15` (#f4f6fb) | #181b37               |
| Raised surface       | `--surface`              | `--gray-0` (#fff)     | `--gray-90` (#1c1f3d) |
| Inset surface        | `--surface-inset`        | `--gray-20` (#e6eaf3) | `--gray-85` (#282c52) |
| Main text            | `--foreground`           | `--ink` (#20263d)     | `--mist` (#ecedfb)    |
| Secondary text       | `--text-secondary`       | `--gray-80` (#3d4567) | `--gray-30` (#d0d6e6) |
| Muted text           | `--muted-foreground`     | `--gray-70` (#5b6485) | `--gray-40` (#b7bed4) |
| Primary action       | `--primary`              | `--pink-60` (#e60046) | `--pink-60`           |
| Text on primary      | `--primary-foreground`   | `--gray-0`            | `--gray-0`            |
| Selected surface     | `--accent-soft`          | `--pink-10` (#ffe4e6) | `--pink-90` (#4c1136) |
| Link and focus       | `--link`, `--ring`       | `--pink-70` (#be123c) | `--pink-50` (#fb7185) |
| Sent message         | `--chat-sent`            | `--pink-20` (#fecdd3) | `--pink-90`           |
| Text on sent message | `--chat-sent-foreground` | `--ink`               | `--mist`              |

Use white text on the primary rose, `--pink-60`. PageLyft's brightest rose, `--brand-pink` (#ff004f), doesn't give white text enough contrast, so keep it for marks without text: the dot in the Nod symbol, status dots and chart fills. Light-theme links and keyboard focus use the deeper `--pink-70`, and dark-theme links use the lighter `--pink-50`. Hovered navigation uses the neutral `--hover` surface, not a rose tint.

| Element                                         | Minimum contrast |
| ----------------------------------------------- | ---------------- |
| Body text                                       | 7:1              |
| Small text, placeholders, links and status text | 4.5:1            |
| Essential control boundaries and focus          | 3:1              |
| Dividers                                        | Can be softer    |

Success (`--success`), warning (`--warning`), error (`--error`) and information (`--info`) are product states, each with a `-soft` background. Always pair them with an icon or text.

Native charts use the rose and indigo-neutral palette through `--chart-1` to `--chart-12`. Use `--chart-line-1` to `--chart-line-3` for lines and bar outlines so marks stay readable on light and dark surfaces. Keep category names, values and line styles available; color alone must not identify a series. Maps, diagrams and other native visuals use the same rose selection and neutral surface tokens as the rest of the interface. Reserve success, warning, error and information colors for actual states, not chart categories.

## Type

The interface uses Geist, and code uses Geist Mono. Titles of 20 px and up use Barlow Condensed in semibold, PageLyft's heading face, through `--font-display`. The title rule at the end of `src/web/theme.css` lists them; add a new title there. Smaller headings, the Nod wordmark, figures and anything the owner or the model wrote stay in Geist. All three fonts use the SIL Open Font License and are served locally from `public/fonts`. Use regular weight for body text and medium for headings in Geist.

| Use                         | Size                   | Line height            |
| --------------------------- | ---------------------- | ---------------------- |
| Page title                  | 32 px; 28 px on phones | 36 px; 32 px on phones |
| Sign-in story title         | 40 px                  | 42 px                  |
| Message and long text       | 16 px                  | 1.6                    |
| Control and supporting text | 14 px                  | At least 18 px         |
| Small graphic detail        | 10 px                  | At least 14 px         |

Turn on standard ligatures, balance short headings, and let paragraphs wrap naturally. Keep code, passwords, URLs and user content in their original case. Don't apply the brand's uppercase capsule style to technical data.

## Spacing and shape

| Rule           | Value                                                                                               |
| -------------- | --------------------------------------------------------------------------------------------------- |
| Layout spacing | 8 px steps; 4 px and 12 px for small controls and details                                           |
| Corners        | 8 px for controls, 12 px for content, 16 px for dialogs; fully round for dots, avatars and switches |
| Content width  | Pages up to 1184 px, chat up to 880 px                                                              |
| Phone inset    | 16 px                                                                                               |
| Depth          | Borders and space for lists; shadows for menus, dialogs and the composer                            |

Page padding changes with the available width. Pages share one title size, and actions align with the page heading.

Leave 8 px before a file preview that follows reply text or an action card in the same message.

## Icons and brand details

| Item               | Rule                                                                                                                                                                                                     |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Icon set           | [Lucide](https://lucide.dev/icons/) through `src/web/components/icons.tsx`; add a new icon there, not in a page                                                                                          |
| Icon sizes         | 16 px by default, 14 px in tight controls, 20 px in larger buttons, 28 px for sidebar navigation; page titles have no icon                                                                               |
| Icon style         | Outline with a 2 px stroke; a heavier 2.5 px stroke for the selected navigation item; play and stop controls fill their shape; neutral color, rose for selected navigation, state colors on status icons |
| Connected services | Logos keep their official colors                                                                                                                                                                         |
| Dot grid           | 24 px, only on the sign-in story and the empty conversation. Never in messages, tables, forms, app lists or Settings.                                                                                    |

Don't show a construction grid. Keep the existing reduced-motion behaviour. The brand guide doesn't define motion for product interfaces yet.

The sidebar is 96 px wide when collapsed and 224 px when expanded. Keep its 44 px Nod mark and navigation icons the same size and position through the width transition. Chat message actions and composer controls share 32 px targets and 4 px gaps.

The sidebar toggle sits at the middle of its divider. Its rounded panel outline has a wider sidebar pane when open and a narrow inset when closed. Keep a 44 × 44 px target around the 32 × 32 px circular face. Reveal it near the edge after 120 ms, wait 300 ms before hiding it, and keep it visible through the sidebar transition. Keyboard focus and touch keep it available; reduced motion removes the animation and delays.

## Tooltips and shortcuts

Use `Button`'s `title` and `shortcut` props for action hints. Wrap other controls in `Tooltip` to share the same surface, spacing, and keyboard hint style.

Show hints after 100 ms of pointer hover or immediately on keyboard focus. Only show shortcuts that work on the current platform. Keep essential instructions visible without hovering.

Use `isPrimaryModifier` for Command on macOS and Control on Windows and Linux. Generate hints with `shortcutLabel` and accept only the modifiers the action supports.

## Shared tabs and action menus

Use `Tabs` for switching between related panels. Apps and workbook sheets use pills; Settings and diagnostics use the underline variant. The component owns selection, focus and arrow-key navigation. Pages own the content and can refuse a tab change while an edit needs saving. Keep page-specific tab styles to layout and spacing.

Use `ActionMenu` for a button that opens a list of actions or choices. It shares menu spacing, selection, disabled states, keyboard navigation, dismissal and focus return. Message and microphone menus reuse its surface, items and navigation while keeping their own context-click, recording and permission behavior.

Keep searchable selection in `SearchPicker`. Form popovers, editor tools, emoji pickers and native system menus retain their own interaction rules.

<details>
<summary>Rules for each surface</summary>

| Surface                   | Rule                                                                                                               |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| Shell                     | Neutral sidebar, rose selection, quiet utility controls                                                            |
| Chat                      | Neutral received bubbles, rose sent bubbles, readable tables and files                                             |
| Composer                  | Clear boundary, visible focus, one primary send action                                                             |
| Scheduled work            | Shared title, row spacing and action height; each schedule contains its details and run history                    |
| Apps and channels         | Neutral cards, visible connection state, consistent controls                                                       |
| Vault                     | Clear selection, fields and error states; secure forms preserved; one summary line and the ways to add while empty |
| Usage                     | One summary line, one cost card, a quiet statement list                                                            |
| Sign-in                   | Plain capability text, rose sign-in action, one inset story panel                                                  |
| Onboarding                | Clear connection steps, no decorative grid behind fields                                                           |
| Credentials and approvals | Clear action hierarchy; origin and expiry preserved                                                                |
| File previews             | One panel beside the chat; quiet header actions; local scrolling                                                   |
| Native desktop setup      | Same palette and type scale as the web app                                                                         |

</details>

## Check your change in the running app

The test suite doesn't cover how the interface looks. Run Nod with synthetic data and look at the change yourself.

```mermaid
flowchart TD
  change([Your UI change]):::accent --> data[Load synthetic data]
  data --> sizes[Light and dark,<br/>desktop and phone]
  sizes --> states[Menus, focus, errors,<br/>empty and full]
  states --> checks[Run the checks]
  checks --> report[Report UI and live<br/>checks separately]:::go
```

- Check light and dark themes at desktop and phone sizes.
- Open menus and dialogs. Check selected tabs, keyboard focus, disabled controls, long text, tables and errors.
- Check empty and populated states.
- Confirm the fonts load, text contrast holds and the page doesn't scroll sideways.
- Run `pnpm run check`, `pnpm run test:integration` and `pnpm run build`. Add screenshots with synthetic data to your pull request.

## Related resources

- [Contribute to Nod](/contribute/)
- [Checks and tests](/contribute/checks-and-tests/)
- [Pull requests](/contribute/pull-requests/)
- [Write docs](/contribute/write-docs/)
