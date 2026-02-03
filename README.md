# 🚀 Playwright Practice: The Internet Herokuapp

![Playwright](https://img.shields.io/badge/Playwright-45ba4b?style=for-the-badge&logo=Playwright&logoColor=white)
![Status](https://img.shields.io/badge/Status-Learning_In_Progress-yellow?style=for-the-badge)

This repository serves as a **Learning Log** and technical documentation of my journey mastering Test Automation. The target application is [The Internet](https://the-internet.herokuapp.com/), a collection of difficult web elements commonly used to interview QA Engineers.

I am solving these challenges one by one using **Playwright (TypeScript)**.

---

## 📋 Challenge Progress
Based on the official list of examples from `the-internet.herokuapp.com`.

### ✅ Completed (Solved)
- [x] **Basic Auth** (Handled native browser popup)
- [x] **Drag and Drop** (Simulated mouse drag actions)
- [x] **Dynamic Loading** (Handled explicit waits & auto-retrying assertions)

### 📝 Backlog (To Do)
_Common challenges I plan to automate next:_

- [ ] **Add/Remove Elements** (DOM manipulation handling)
- [ ] **Checkboxes** (State verification)
- [ ] **Dropdown** (Select option handling)
- [ ] **Form Authentication** (Standard login flow)
- [ ] **Frames** (Nested frames & iFrame context switching)
- [ ] **Hovers** (Mouse hover actions)
- [ ] **JavaScript Alerts** (Handling Confirm/Prompt dialogs)
- [ ] **Key Presses** (Keyboard simulation)
- [ ] **Multiple Windows** (Handling new tabs/pages)
- [ ] **File Upload** (Input file interaction)

---

## 🛠️ Tech Highlights

| Challenge | Solution Strategy |
| :--- | :--- |
| **Basic Auth** | Used URL injection (`https://user:pass@url...`) to bypass the native OS-level dialog. |
| **Drag & Drop** | Implemented `page.dragAndDrop()` which is more stable than manual mouse events. |
| **Dynamic Loading** | Avoided `setTimeout`. Utilized Playwright's `expect` auto-retry to wait for element visibility. |

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
