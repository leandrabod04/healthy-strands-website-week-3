# Contact Form Validation Feature

## Overview
**Feature:** Contact form validation with success state
**Scope:** Client-side only (no backend email submission)

This feature adds accessible, client-side validation to the contact form, including inline error messages, ARIA support, and a success confirmation state.

---

## Implementation Plan

### Step 1 — Enhance HTML Structure
Add `<label>` elements and ARIA attributes to improve accessibility and screen reader support.

### Step 2 — Add Hidden Error Message Elements
Insert hidden `<span>` elements beneath each input field to display validation errors dynamically.

### Step 3 — Style Error and Success States
Create CSS rules for:
- Input error styling
- Error message visibility
- Success banner appearance

### Step 4 — Add Success Banner to HTML
Insert a hidden success `<div>` that will display after successful form submission.

### Step 5 — Write Validation Functions (script.js)
Implement field-level validation functions:
- Name (required)
- Email (required + format check)
- Phone (optional with format validation)
- Message (required)

### Step 6 — Wire Up Submit Handler
Connect validation logic to the form’s submit event:
- Prevent submission if invalid
- Focus first invalid field
- Show success state if valid

### Step 7 — Improve Accessibility & Focus Management
Enhance keyboard and screen reader experience:
- Manage focus on error
- Ensure ARIA announcements behave correctly
- Clear errors dynamically when corrected

---