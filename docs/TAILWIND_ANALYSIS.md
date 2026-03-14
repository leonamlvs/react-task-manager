# Tailwind CSS Analysis Report

## 1. COLORS ANALYSIS

### Color Values Used

| Color                     | Variants                                                                         | Frequency | Files                                        |
| ------------------------- | -------------------------------------------------------------------------------- | --------- | -------------------------------------------- |
| white/opacity             | white/5, white/10, white/20, white/30, white/40, white/60                        | **35+**   | Button, Card, Input, Layout, Tasks, TaskPage |
| text-white                | text-white                                                                       | 2         | Button, ThemeToggle                          |
| text-slate-600            | text-slate-600                                                                   | 1         | ThemeToggle                                  |
| text-rose-500             | text-rose-500, text-rose-500/10, text-rose-500/20                                | 4         | Button                                       |
| text-fuchsia-\*           | text-fuchsia-400, text-fuchsia-600                                               | 2         | Tasks                                        |
| text-indigo-\*            | text-indigo-400, text-indigo-500                                                 | 3         | Tasks, Input                                 |
| text-blue-400             | text-blue-400/50 (focus state)                                                   | 1         | Input                                        |
| bg-indigo-500             | bg-indigo-500                                                                    | 1         | Layout (glow effect)                         |
| bg-fuchsia-500            | bg-fuchsia-500                                                                   | 2         | Layout (glow effects)                        |
| bg-cyan-500               | bg-cyan-500                                                                      | 1         | Layout (glow effect)                         |
| **Custom Surface Colors** | surface-bg-{light/dark}, surface-glass-{light/dark}, surface-bright-{light/dark} | **15+**   | Card, Input, Button, Layout                  |
| **Custom Text Colors**    | text-primary-{light/dark}, text-secondary-{light/dark}, text-muted-{light/dark}  | **20+**   | Multiple components                          |
| **Custom Accent Colors**  | accent-blue, accent-purple, accent-indigo                                        | 3         | Layout, TaskPage                             |

---

## 2. GRADIENTS ANALYSIS

### Gradient Definitions

| Gradient                                                                   | Location                    | Usage |
| -------------------------------------------------------------------------- | --------------------------- | ----- |
| `bg-gradient-to-r from-purple-400 via-pink-500 to-red-500`                 | Button.jsx (primary button) | 1     |
| `bg-gradient-to-t from-white/30 to-transparent`                            | Button.jsx (before pseudo)  | 1     |
| `bg-gradient-to-r from-accent-indigo/40 dark:from-white/20 to-transparent` | TaskPage.jsx (divider)      | 1     |

**Total Unique Gradients: 3**

---

## 3. BORDER RADIUS ANALYSIS

| Border Radius    | Usage Count | Components                                                                                    |
| ---------------- | ----------- | --------------------------------------------------------------------------------------------- |
| **rounded-full** | 7           | Button primary/secondary/danger/ghost, Layout social buttons                                  |
| **rounded-3xl**  | 1           | Card (main container)                                                                         |
| **rounded-2xl**  | 10          | Input (inputs in TaskPage textarea, Input component standard), AddTask card, Tasks list items |
| **rounded-xl**   | 8           | Tasks checkbox area, editable fields, overflow text containers                                |

**Hierarchy Pattern:**

- `rounded-3xl` - Main cards (24px)
- `rounded-2xl` - Input fields (16px)
- `rounded-xl` - Interactive elements (12px)
- `rounded-full` - Button circular shapes

---

## 4. SHADOWS ANALYSIS

| Shadow             | Frequency | Used In                                   |
| ------------------ | --------- | ----------------------------------------- |
| **shadow-xl**      | 1         | Card.jsx (glass variant)                  |
| **shadow-md**      | 2         | Button (hover states - secondary, danger) |
| **shadow-inner**   | 2         | Input.jsx, TaskPage textarea              |
| **drop-shadow-md** | 1         | Button.jsx (primary button hover)         |
| **blur-[100px]**   | 1         | Layout (glow 1)                           |
| **blur-[120px]**   | 1         | Layout (glow 2)                           |
| **blur-[130px]**   | 1         | Layout (glow 3)                           |

**Shadow Pattern:** Light shadows used for hover states; inner shadows for input depth

---

## 5. SPACING PATTERNS ANALYSIS

### Gap Spacing

| Gap   | Count | Context                                       |
| ----- | ----- | --------------------------------------------- |
| gap-2 | 2     | Social buttons, span children                 |
| gap-3 | 4     | Tasks list, button grid, header buttons, span |
| gap-4 | 2     | AddTask form flex column                      |
| gap-5 | 1     | AddTask form (sm breakpoint)                  |
| gap-6 | 1     | Main content container (lg breakpoint)        |

### Padding Patterns

| Padding | Count | Context                                               |
| ------- | ----- | ----------------------------------------------------- |
| p-2     | 4     | Editable field hover areas, interactive containers    |
| p-4     | 2     | Tasks list container padding                          |
| p-5     | 1     | Card base padding                                     |
| p-6     | 1     | Card base padding (sm up)                             |
| p-8     | 1     | Card base padding (lg up)                             |
| px-0    | 5     | Icon-only buttons (ThemeToggle, LanguageToggle, etc.) |
| px-3    | 1     | Inline editing input                                  |
| px-4    | 3     | Input fields (main Input component, textarea)         |
| px-6    | 1     | Button primary variant                                |
| py-2    | 1     | TaskPage header                                       |
| py-3    | 1     | TaskPage textarea                                     |
| py-4    | 1     | Empty tasks message                                   |

### Margin Patterns

| Margin | Count | Context                                      |
| ------ | ----- | -------------------------------------------- |
| mb-4   | 1     | TaskPage header spacing                      |
| mb-8   | 1     | Layout header buttons spacing                |
| -m-2   | 3     | Negative offset for expanded clickable areas |

### Responsive Spacing

| Responsive Class | Pattern | Usage                              |
| ---------------- | ------- | ---------------------------------- |
| **sm:gap-4**     | 2       | Header buttons, Tasks list         |
| **sm:gap-5**     | 1       | AddTask form                       |
| **sm:p-6**       | 1       | Card padding                       |
| **lg:p-8**       | 1       | Card padding                       |
| **space-y-3**    | 1       | Main content (sm)                  |
| **space-y-4**    | 1       | Main content (between items)       |
| **space-y-6**    | 2       | Main content (lg), TaskPage fields |

---

## 6. MOST REPEATED CLASS COMBINATIONS

### High-Frequency Patterns (Appears 3+ Times)

| Pattern                                                                                      | Count | Purpose                | Components                                   |
| -------------------------------------------------------------------------------------------- | ----- | ---------------------- | -------------------------------------------- |
| **`flex items-center justify-center`**                                                       | 7     | Centering content      | Buttons, icon containers, headers            |
| **`transition-all duration-300`**                                                            | 8     | Smooth transitions     | Buttons, cards, interactive elements         |
| **`text-text-{primary/secondary/muted-light dark:text-text-{primary/secondary/muted-dark}`** | 20+   | Text color theming     | Throughout (most components)                 |
| **`border border-white/{10/40} dark:border-white/{10/40}`**                                  | 5     | Border styling         | Card, Input, Tasks items                     |
| **`bg-surface-glass-light dark:bg-surface-glass-dark`**                                      | 3     | Glass effect           | Button secondary/ghost, Input, Card          |
| **`rounded-2xl` + interactive context**                                                      | 10    | Input/field shapes     | Input, InputEdit, Tasks, TaskPage            |
| **`flex h-11 w-11 items-center justify-center`**                                             | 3     | Icon button standard   | Checkbox buttons, action buttons             |
| **`rounded-full` + button context**                                                          | 7     | Button shape           | All button variants                          |
| **`outline-none active:scale-95`**                                                           | 4     | Button interaction     | Button variants (primary, secondary, danger) |
| **`hover:bg-white/10 dark:hover:bg-white/10`**                                               | 5     | Hover state background | Interactive elements                         |
| **`rounded-xl p-2 -m-2 hover:bg-white/10`**                                                  | 3     | Editable field toggle  | Task titles, descriptions                    |
| **`placeholder-text-muted-light dark:placeholder-text-muted-dark`**                          | 2     | Input placeholders     | Input, TaskPage textarea                     |
| **`border border-white/20 shadow-inner`**                                                    | 2     | Input styling          | TaskPage textarea                            |
| **`flex gap-3` + responsive**                                                                | 3     | Layout spacing         | Header buttons, task actions                 |
| **`flex flex-col gap-4`**                                                                    | 2     | Form layout            | AddTask                                      |

### Color + Positioning Patterns

| Pattern                                                       | Count | Context              |
| ------------------------------------------------------------- | ----- | -------------------- |
| **`text-text-primary-light dark:text-text-primary-dark`**     | 3     | Main text (headings) |
| **`text-text-secondary-light dark:text-text-secondary-dark`** | 5     | Secondary/body text  |
| **`text-text-muted-light dark:text-text-muted-dark`**         | 4     | Muted/disabled text  |
| **`from-white/20 to-transparent` + gradient**                 | 2     | Gradient accents     |

### Button-Specific Patterns

| Button Variant | Class Pattern                                            | Repetition |
| -------------- | -------------------------------------------------------- | ---------- |
| **Primary**    | gradient outline-none + before pseudo, h-11 rounded-full | 1          |
| **Secondary**  | glass effect backdrop-blur border outline-none           | 1          |
| **Danger**     | rose-500 tinted bg/border outline-none                   | 1          |
| **Ghost**      | glass effect minimal border outline-none                 | 1          |

---

## 7. FREQUENCY TABLE SUMMARY

### Most Used Individual Classes

| Class               | Frequency | Category           |
| ------------------- | --------- | ------------------ |
| flex                | **30+**   | Layout             |
| dark: prefix        | **50+**   | Dark mode variants |
| transition-all      | **8**     | Animation          |
| duration-300        | **8**     | Animation          |
| items-center        | **15**    | Layout             |
| justify-center      | **10**    | Layout             |
| rounded-2xl         | **10**    | Border Radius      |
| w-full              | **8**     | Sizing             |
| h-11                | **6**     | Sizing             |
| outline-none        | **4**     | Focus states       |
| bg-white/ (opacity) | **35+**   | Colors             |
| border              | **8**     | Borders            |
| white/10            | **8**     | Color opacity      |
| white/40            | **4**     | Color opacity      |
| text-white          | **2**     | Colors             |
| hover: prefix       | **20+**   | Interactive states |
| focus: prefix       | **2**     | Focus states       |
| active:scale-95     | **4**     | Active states      |
| gap-3               | **4**     | Spacing            |
| p-2                 | **4**     | Padding            |
| rounded-full        | **7**     | Border Radius      |

---

## 8. DESIGN SYSTEM OBSERVATIONS

### Typography Hierarchy

- **Headings**: text-text-primary-light/dark (primary color)
- **Body text**: text-text-secondary-light/dark (secondary color)
- **Muted text**: text-text-muted-light/dark (reduced opacity)
- **Sizes**: text-xs, text-sm, text-2xl, text-3xl

### Color Strategy

- **Surface colors**: Custom CSS variables for glass/bright backgrounds
- **Text colors**: Always paired light/dark mode
- **Accent colors**: Limited palette (indigo, fuchsia, rose, cyan, purple, pink, red)
- **Opacity patterns**: Heavy use of white/opacity for layering effect

### Shadow & Depth

- Primary emphasis: `shadow-xl` (cards)
- Interactive feedback: `shadow-md` (hover states)
- Input depth: `shadow-inner`
- Atmospheric: `blur-[100-130px]` (background glows)

### Interaction Patterns

- **Transitions**: Standardized to `transition-all duration-300`
- **Scale feedback**: `active:scale-95` (press effect)
- **Opacity changes**: `hover:opacity-100` (faded to full)
- **Background shifts**: `hover:bg-white/10` (subtle highlight)

### Responsive Design

- **Mobile-first**: Base padding p-4 to p-8
- **Breakpoint usage**: sm:, lg: extensively used
- **Gap scaling**: gap-3 → sm:gap-4, gap-4 → sm:gap-5
- **Typography scaling**: text-2xl → sm:text-3xl
- **Max-width constraints**: max-w-[500px] for content centering
