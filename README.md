# 🚀 Playwright Practice: The Internet Herokuapp

![Playwright](https://img.shields.io/badge/Playwright-45ba4b?style=for-the-badge&logo=Playwright&logoColor=white)
![Status](https://img.shields.io/badge/Status-Learning_In_Progress-yellow?style=for-the-badge)

This repository serves as a **Learning Log** and technical documentation of my journey mastering Test Automation. The target application is [The Internet](https://the-internet.herokuapp.com/), a collection of difficult web elements commonly used to interview QA Engineers.

I am solving these challenges one by one using **Playwright (TypeScript)**.

---

## 📋 Challenge Progress
Based on the official list of examples from `the-internet.herokuapp.com`.

## 📋 Challenge Progress
Progress tracking of automated scenarios from `the-internet.herokuapp.com`.

### ✅ Completed UI Test
- [x] **Add/Remove Elements** (Handled dynamic list & counting)
- [x] **Form Authentication** (Standard login flow & flash message validation)
- [x] **Drag and Drop** (Simulated mouse drag actions)
- [x] **Shadow DOM** (Utilized Playwright's shadow-piercing selectors)
- [x] **JavaScript Alerts** (Handled Dialog listeners for Confirm/Dismiss)
- [x] **File Upload** (Interacted with system file inputs)
- [x] **Dynamic Loading** (Handled explicit waits & auto-retrying assertions)
- [x] **Multiple Windows** (Handling new tabs/pages using `Promise.all`)
- [x] **Dynamic Controls** (State verification: `toBeEditable` & `toBeVisible`)
- [x] **Sortable Data Tables** (Complex row filtering & data validation)
- [x] **Infinite Scroll** (Implemented **State-Based Polling** to handle flaky dynamic content)
- [x] **API Testing** (Status codes & POST/GET.DELETE validation)

### 📝 Backlog (To Do)
_Common challenges I plan to automate next to broaden my automation coverage:_

- [ ] **Checkboxes** (Verifying state and toggling multiple inputs)
- [ ] **Dropdown** (Handling static and dynamic select options)
- [ ] **Frames** (Nested frames & iFrame context switching)
- [ ] **Hovers** (Simulating mouse hover to reveal hidden elements)
- [ ] **Key Presses** (Simulating keyboard shortcuts and specific key events)
- [ ] **Horizontal Slider** (Precise mouse movements for UI sliders)
- [ ] **Broken Images** (Validating image response status via Network Interception)
- [ ] **API Testing** (Direct server-side validation using Playwright's `request` context)
- [ ] **Visual Comparison** (Implementing screenshot-based regression testing)

---

## 🛠️ Technical Highlights

| Challenge | Solution Strategy |
| :--- | :--- |
| **Shadow DOM** | Leveraged Playwright's native ability to pierce Shadow Roots without custom JS. |
| **Infinite Scroll** | Implemented `expect.poll` with custom intervals to ensure content is loaded before assertion. |
| **Multiple Windows** | Used `waitForEvent('popup')` to manage browser contexts and switch between tabs safely. |
| **Data Tables** | Used `.filter()` on rows to uniquely identify data even when table sorting changes. |

---

## 🏃‍♂️ How to Run

1. **Install Dependencies**
```bash
npm install
```

2. **Run Tests**
```bash
npx playwright test
```

3. **View Report**
```bash
npx playwright show-report
```

---

### Author

**Haruna Elfathin**
<br>
*Documenting my QA Automation journey.*
