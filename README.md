# 🚀 Playwright Practice: The Internet Herokuapp

![Playwright](https://img.shields.io/badge/Playwright-45ba4b?style=for-the-badge&logo=Playwright&logoColor=white)
![Status](https://img.shields.io/badge/Status-Learning_In_Progress-yellow?style=for-the-badge)

This repository serves as a **Learning Log** and technical documentation of my journey mastering Test Automation. The target application is [The Internet](https://the-internet.herokuapp.com/), a collection of difficult web elements commonly used to interview QA Engineers.

I am solving these challenges one by one using **Playwright (TypeScript)**.

---

## 📋 Challenge Progress
Based on the official list of examples from `the-internet.herokuapp.com`.

---

### ✅ Completed Challenges

#### **UI Interaction Mastery**

* [x] **Checkboxes & Dropdowns** (Implemented smart logic for state verification)
* [x] **Hovers** (Simulated mouse precision to reveal hidden elements)
* [x] **Key Presses** (Utilized `page.keyboard` for stable global event simulation)
* [x] **Infinite Scroll** (Implemented state-based polling for dynamic content)
* [x] **Shadow DOM & Frames** (Piercing deep through nested elements)
* [x] **Dynamic Loading** (Explicit waits & auto-retrying assertions)
* [x] **Drag and Drop** (Simulated complex mouse drag actions)
* [x] **Multiple Windows** (Handling tabs/pages using `Promise.all`)

#### **API Testing (Backend Validation)**

* [x] **CRUD Operations** (Handled GET, POST, and DELETE requests)
* [x] **Update Strategy** (Deep dive into **PUT vs PATCH** differences)
* [x] **Schema Validation** (Verifying data types: `string`, `number`, `boolean`)
* [x] **Array & List Validation** (Validating length and structure of collection data)
* [x] **CI/CD Integration** (Running tests automatically via GitHub Actions)

---

### 📝 Backlog (To-Do)

*Materi yang akan dipelajari untuk memperluas cakupan otomasi:*

* [ ] **Network Interception** (Mocking API responses & testing broken images)
* [ ] **Visual Regression** (Screenshot-based testing for UI consistency)
* [ ] **Authentication State** (Reusing login sessions to speed up tests)

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
