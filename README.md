
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```


Requirement Analysis

User 

-Survey taken initially after login to capture information for any allergies
- Dashboard
- User i/p : (i) Selected meal, (ii) Selected Snack, (iii) Selected Drink
- Reward:  with CO2 emission result weekly basis ( Chart )
- Display banners with awareness for reducing CO2 emission ( for meals )
- Display banners with regard to  sustainability ( for snack and drinks )

Org./Food Caterer

Food Caterers : Aramark, Consortium, Feli Gastro

- Gets the count of daily orders been placed/served w.r.t meals
- Calculated CO2 emission value in categories ( vegetables, meat, etc. )
- Reports generated monthly basis with detail analysis of CO2 emission results
- Analysis report for future predictions and measures that can be taken to lower the CO2 emission
- Tracking of food waste, donated food, carbon emission generated.
- Option to view the carbon emission chart for every ingredient

Goal

- Make user aware of the CO2 emission present in their daily lunch/food
- Engaging for user to be mindful of their food consumption
- Generating reports for Org./Food Caterer to make informed decision for lowering the CO2 emission
- Inclusive, responsive design focused

Example of CO2 emission breakdown:

**Vegan Chickpea Stir-fry**

### **Ingredients (for 2 servings):**

1. 200g Chickpeas (canned or cooked from dry) – 100g per serving
2. 100g Bell Peppers (fresh) – 50g per serving
3. 100g Broccoli (fresh) – 50g per serving
4. 2 tbsp Olive Oil (30ml total)
5. 50g Onions (fresh) – 25g per serving

### **CO₂ Emissions (per ingredient, as % of total meal):**

1. **Chickpeas (200g)**
    - CO₂ emission: ~0.9 kg CO₂e per kg
    - Total: **0.18 kg CO₂e**
    - **40% of total emissions**
2. **Bell Peppers (100g)**
    - CO₂ emission: ~3.0 kg CO₂e per kg
    - Total: **0.30 kg CO₂e**
    - **33% of total emissions**
3. **Broccoli (100g)**
    - CO₂ emission: ~0.5 kg CO₂e per kg
    - Total: **0.05 kg CO₂e**
    - **5% of total emissions**
4. **Olive Oil (30ml)**
    - CO₂ emission: ~6.0 kg CO₂e per liter
    - Total: **0.18 kg CO₂e**
    - **20% of total emissions**
5. **Onion (50g)**
    - CO₂ emission: ~0.5 kg CO₂e per kg
    - Total: **0.025 kg CO₂e**
    - **2% of total emissions**


### **Total Emissions for the Meal**:

**0.735 kg CO₂e** per serving - Useful info for User 

### **CO₂ Emission Breakdown:**

- **Chickpeas:** 40%
- **Bell Peppers:** 33%
- **Olive Oil:** 20%
- **Broccoli:** 5%
- **Onion:** 2%

In this dish, the largest contributors to emissions are the **chickpeas** and **bell peppers**, while ingredients like **broccoli** and **onion** contribute much less. - Useful info for Org./Food Caterer

Useful Information

- Wasting food increases its carbon footprint by as much as **20-30%** due to the extra methane produced in landfills.
- **CO₂ Emissions from Waste:**

In addition to the **0.735 kg CO₂e** per serving already produced in making the meal, an extra **0.15    to 0.35 kg CO₂e** per kg of food is typically added from the methane produced during decomposition in landfills.

