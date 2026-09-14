# Dataset Audit & Inventory: SupplyPulse AI

> **Document Status:** Updated Post-Phase 4 Implementation  
> **Primary Active Dataset:** USAID SCMS Delivery History Dataset (`SCMS_Delivery_History_Dataset.csv`)

---

## 🟢 1. PRIMARY ACTIVE DATASET (100% Used in Production)

### **USAID SCMS Delivery History Dataset**
- **Source Link (Kaggle):** [USAID Supply Chain Shipment Pricing Data on Kaggle](https://www.kaggle.com/datasets/dileep070/supply-chain-analysis)
- **Official Agency Source:** [USAID Global Health Supply Chain Program (GHSC-PSM)](https://www.ghsupplychain.org/)
- **File Location:** [`ml/datasets/SCMS_Delivery_History_Dataset.csv`](file:///c:/Coding/Hackathons/Devpost_AI%20Builders/ml/datasets/SCMS_Delivery_History_Dataset.csv)
- **Processed Benchmark File:** [`backend/data/scms_benchmark.csv`](file:///c:/Coding/Hackathons/Devpost_AI%20Builders/backend/data/scms_benchmark.csv)
- **Database Table:** Supabase `devpost_name_ai_builders.scms_benchmark` & `prediction_logs`
- **Volume:** **10,000+ real-world international shipment records** across Africa, Asia, and the Americas.


#### Why This Dataset Was Selected:
1. **Real Commercial Features:** Contains authentic commercial supply chain fields including `Country`, `Managed By`, `Fulfill Via`, `Vendor INCO Term` (`EXW`, `FCA`, `DDU`, `CIP`), `Shipment Mode` (`Air`, `Ocean`, `Truck`, `Air Charter`), `Product Group`, `Sub Classification`, `Vendor`, `Weight (Kilograms)`, `Freight Cost (USD)`, `Line Item Value`, `Line Item Quantity`, and `Pack Price`.
2. **Engineered Features:** Used to construct `planned_lead_time`, `freight_per_kg`, `value_per_unit`, `sched_month`, and `sched_dayofweek`.
3. **Model Artifacts Trained:**
   - `model_delay.json` (XGBoost Regressor — MAE: 3.57 days)
   - `model_risk.json` (XGBoost Classifier — Accuracy: 91.6%, Sensitivity: 72.5%, Threshold: 0.51)
   - `explainer.pkl` (TreeSHAP Explainer)
   - `label_encoders.pkl` (8 LabelEncoders)
4. **Dev Mode Benchmark:** Powers the Dev Mode Benchmark Inspector (`/api/dev/records`) allowing side-by-side comparison of 2,908 historical consignments against ML predictions.

---

## 🟡 2. SECONDARY / MACRO DATASETS (Evaluated & Kept as Reference)

### **`export.csv` — Weekly Freight Indicators (data.gov)**
- **File Location:** [`ml/datasets/export.csv`](file:///c:/Coding/Hackathons/Devpost_AI%20Builders/ml/datasets/export.csv) (33.6 KB, 442 rows)
- **Source:** U.S. Bureau of Transportation Statistics / data.gov

#### ❓ Why Isn't `export.csv` Used for Primary ML Model Training?
* **Macro Weekly Trends vs. Consignment-Level Attributes:** `export.csv` contains high-level **macro weekly freight index percentages** (e.g., *"Freight Rail Intermodal: -7% change from baseline"* for week 1 of 2020).
* **Lacks Consignment-Level Features:** This file **does NOT** contain origin/destination country, vendor names, Incoterms, cargo weight, line item value, or individual shipment lead times.
* **ML Model Limitation:** XGBoost cannot predict a delay duration for a specific pharmaceutical or electronics shipment (e.g., from Aurobindo Pharma to Nigeria) purely from macro weekly rail percentage changes.
* **Future Roadmap Role (Phase 2/3):** This dataset is preserved in the repository as a candidate external macro signal overlay on future trend dashboards.

---

### **`trade_customs_dataset.csv` — Cross-Border Trade & Customs Delay Dataset**
- **File Location:** [`ml/datasets/trade_customs_dataset.csv`](file:///c:/Coding/Hackathons/Devpost_AI%20Builders/ml/datasets/trade_customs_dataset.csv) (1.87 MB)
- **Role:** Evaluated during initial EDA exploration phase. Kept as a secondary benchmark baseline for synthetic customs clearance testing.

---

### **`supply_chain_data.csv` — Generic Supply Chain Dataset**
- **File Location:** [`ml/datasets/supply_chain_data.csv`](file:///c:/Coding/Hackathons/Devpost_AI%20Builders/ml/datasets/supply_chain_data.csv) (21.0 KB)
- **Role:** Small sample dataset used during initial feature engineering concept testing before switching to USAID SCMS.

---

## 📋 Summary Table of Workspace Datasets

| File Name | File Path | Size | Status | Primary Usage / Role |
| :--- | :--- | :---: | :---: | :--- |
| **`SCMS_Delivery_History_Dataset.csv`** | `ml/datasets/` | 3.78 MB | 🟢 **ACTIVE** | **Primary ML Training Dataset** (XGBoost, SHAP, Supabase) |
| **`scms_benchmark.csv`** | `backend/data/` | 494 KB | 🟢 **ACTIVE** | **Backend Dev Mode Benchmark** (2,908 filtered rows) |
| **`export.csv`** | `ml/datasets/` | 33.6 KB | 🟡 Reference | Macro weekly freight indicators (Data.gov) |
| **`trade_customs_dataset.csv`** | `ml/datasets/` | 1.87 MB | 🟡 Reference | Initial EDA customs delay exploration dataset |
| **`supply_chain_data.csv`** | `ml/datasets/` | 21.0 KB | 🟡 Reference | Early prototyping sample dataset |

---

## 🚀 3. FUTURE EXPANSION DATASETS (External Reference Sources for Future Model Training)

*(Curated collection of external datasets for potential specialized AI logistics model development in future phases)*

### 1. **DataCo Supply Chain Dataset (Kaggle)**
- 🌐 **Link:** [DataCo Supply Chain Dataset on Kaggle](https://www.kaggle.com/datasets/evilspirit05/datasupplychain)
- 📊 **Size / Scope:** ~180,000+ shipment records with 53 attributes.
- 🎯 **Potential Model Use Cases:**
  - Train **E-Commerce & Retail Shipping Risk** models (`Late_delivery_risk`).
  - Train **Fraud & Payment Risk Detection** models for international cross-border transactions.

### 2. **Global Supply Chain Disruptions 2015–2024 (Kaggle)**
- 🌐 **Link:** [Global Supply Chain Disruptions on Kaggle](https://www.kaggle.com/datasets/devpassive/supply-chain-disruptions-2015-2024)
- 📊 **Size / Scope:** Weekly port-level disruption signals, ocean freight tariffs, and disruption indices.
- 🎯 **Potential Model Use Cases:**
  - Train **Port Congestion Forecasting** models (predicting container dwell times per maritime port).
  - Train **Freight Rate Spike Forecasters**.

### 3. **Open-Meteo Historical & Real-Time Weather API**
- 🌐 **Link:** [Open-Meteo Historical Marine & Weather API](https://open-meteo.com/en/docs/historical-weather-api)
- 📊 **Size / Scope:** Open marine weather telematics API (wind speeds, wave heights, storm alerts) without API key requirements.
- 🎯 **Potential Model Use Cases:**
  - Train **Weather-Driven Lead Time Adjusters** (automated lead time adjustments during severe marine storms along shipping lanes).

### 4. **World Bank Logistics Performance Index (LPI)**
- 🌐 **Link:** [World Bank LPI Portal](https://lpi.worldbank.org/)
- 📊 **Size / Scope:** National customs efficiency scores, port connectivity ratings, and international logistics reliability indices.
- 🎯 **Potential Model Use Cases:**
  - Train **Country-Level Customs Risk Scoring** models (automated country-to-country customs friction scoring).

### 5. **UNCTAD Maritime Transport & AIS Vessel Traffic Statistics**
- 🌐 **Link:** [UNCTAD Maritime Statistics Portal](https://unctad.org/topic/transport-and-trade-logistics/maritime-statistics)
- 📊 **Size / Scope:** Global merchant fleet statistics, port call dwell times, and strategic chokepoint congestion metrics (Suez & Panama Canals).
- 🎯 **Potential Model Use Cases:**
  - Train **Vessel ETA & Chokepoint Delay Predictors** for major maritime corridors.