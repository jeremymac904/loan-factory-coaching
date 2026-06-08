# AI Advantage 501 — Apps and Automation Handout

One page. Connect 2 tools. Stop losing deals to mess.

---

## The Two Automation Rule

Start with 2. Not 10. The most common failure mode is building 10 automations, breaking all 10, and giving up.

Pick 2:

1. **Reactivation sequence.** Past client monthly touch, drafted by your Twin, sent by you with a real review step.
2. **Status update template.** Borrower status update, drafted by your Twin, sent by you every Friday.

## The Document Pattern

For every automation, document:

```
## Automation: [Name]

**Trigger:** What starts the message.
**Input:** What context you feed the Twin.
**Twin prompt:** The exact prompt you use.
**Output:** What the Twin produces.
**Review step:** What the LO checks before send.
**Send cadence:** Daily, weekly, monthly.
**Stop condition:** When the LO pauses or ends the sequence.
**Success metric:** What "good" looks like.
```

If you cannot fill in every field, the automation is not ready.

## The Reactivation Sequence (Example)

**Trigger:** Past client has not been touched in 60+ days.
**Input:** Past client name, close date, last touch, tenure bucket.
**Twin prompt:** "Draft a 50 word text from [Your Name] to [past client] who closed in [year]. Personal, plain English, no specific rates, ends with a question."
**Output:** A draft text.
**Review step:** LO reads, edits, adds one specific detail.
**Send cadence:** Weekly, Mondays at 9am.
**Stop condition:** Past client replies, opts out, or asks to be removed.
**Success metric:** 10% reply rate within 7 days.

## The Status Update Template (Example)

**Trigger:** Friday morning.
**Input:** Borrower name, current stage, next milestone, days to close.
**Twin prompt:** "Draft a 60 word loan status update from [LO] to [borrower]. Plain English, no jargon, ends with the next milestone date."
**Output:** A draft email.
**Review step:** LO reads, edits, sends from Gmail.
**Send cadence:** Weekly, Fridays.
**Stop condition:** Loan closes.
**Success metric:** Zero borrower confusion calls about status.

## The Assignment

1. Set up 1 reactivation sequence.
2. Set up 1 status update template.
3. Document each (the pattern above).
4. Mark this module complete.

## Compliance

- Every automation has a review step. No exceptions.
- Every automation has a stop condition.
- Past client outreach about specific rate or payment terms is a Reg Z advertisement and requires disclosures.

## Behavior Change

You have a live AI driven reactivation motion.
