# PROCESS: Contact Form Validation (Claude Web + Micro-Iteration)

## What I built
I added client-side validation to the Sable Strands/Healthy Strands contact form. The form now has proper labels, ARIA hooks, hidden error message spans that get filled by JavaScript, CSS styles for error/success states, and a success banner that replaces the form when everything is valid. It also moves focus to the first invalid field on submit, and focuses the success banner for keyboard/screen reader users.

## How micro-iteration felt
Working in small steps was slower than my normal “just build it” style, but it made debugging way easier. Each step was testable in 5–10 minutes (ex: click labels to confirm focus, inspect spans in DevTools, manually trigger CSS states, submit empty form). The only frustrating part was workflow confusion: Claude Web was pushing to a feature branch and I didn’t immediately realize why changes weren’t showing on `main` or on the live site until I merged the PR.

## What self-review caught (specific)
Self-review caught real accessibility and edge-case issues. For example, Claude pointed out that `role="alert"` + `aria-live="polite"` conflicts, so it used `role="alert"` alone. Later, it warned that persistent empty `role="alert"` spans can cause screen reader “blank announcements,” and suggested adding `aria-atomic="true"`, which we did. It also found bugs in the phone validation regex: the max length was too short and the pattern could pass strings with zero digits, so we updated it to require at least one digit and allow up to 20 characters.

## Patterns + what I noticed
Claude’s self-reviews consistently focused on accessibility (ARIA behavior, focus), edge cases, and validation rules. One thing I noticed myself was that features can look “invisible” until you test invalid inputs—so I had to actively trigger error states and success states to verify changes.

## Browser tool vs CLI + when I’d use this
Claude Web made iteration easy and readable, but the branch/PR workflow was less obvious than working locally in a CLI where I can see `git status` and branches instantly. I’d use micro-iteration + self-review for UI features where small bugs are easy to miss (forms, accessibility, validation). I’d skip it for tiny changes (copy edits, simple CSS tweaks) where a full review cycle would be overkill.