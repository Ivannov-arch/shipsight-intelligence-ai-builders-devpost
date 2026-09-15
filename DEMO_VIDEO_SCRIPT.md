# 🎬 ShipSight Intelligence — Demo Video Script
**Target Duration:** ~4 Minutes 30 Seconds (Under the 5:00 limit)  
**Submission Category:** Demo Video Showcase  
**Language:** English  

---

## ⏱️ Video Structure & Timing Breakdown

| Segment | Duration | Focus Area |
| :--- | :--- | :--- |
| **1. Hook & The Problem** | 0:00 – 0:45 | Real-world supply chain dilemma & pain points |
| **2. Solution Overview** | 0:45 – 1:20 | Introducing ShipSight Intelligence & high-level architecture |
| **3. Live Demo: Single Prediction & Explainability** | 1:20 – 2:40 | Form input, ML delay score, SHAP factor breakdown & Gemini AI plan |
| **4. Live Demo: Bulk Manifest & Dev Mode** | 2:40 – 3:35 | High-volume batch CSV upload & Historical Benchmark verification |
| **5. The Role of AI in the Product** | 3:35 – 4:10 | How XGBoost + SHAP + Google Gemini LLM work synergistically |
| **6. Impact & Closing** | 4:10 – 4:45 | Measurable business value & final call to action |

---

## 📜 Full Step-by-Step Script & Storyboard

### **PART 1: The Problem (0:00 – 0:45)**

| Timestamp & Visual / Screen Action | Voiceover / Narration Script |
| :--- | :--- |
| **0:00 – 0:15**<br>*Visual:* Presenter on camera or high-quality b-roll of cargo ships/freight, transitioning cleanly to the **ShipSight Intelligence Homepage** hero section. | *"Global supply chains manage trillions of dollars in goods every year, but cross-border shipping remains fraught with unpredictability. Delays aren't just an inconvenience—they cause stockouts, breach strict customer SLAs, and cost businesses billions of dollars annually."* |
| **0:15 – 0:45**<br>*Visual:* Scroll down to the **"The Problem with Traditional Supply Chains"** section on the homepage, highlighting the 3 problem cards (*No Early Warning, Siloed Data, Reactive Planning*). | *"Today, logistics teams face three critical bottlenecks:*<br>• **No early warning:** *Delays are typically detected only after a vessel misses its dock window.*<br>• **Siloed data:** *Customs clearance timelines, freight modes, and carrier histories live in disconnected databases.*<br>• **Reactive firefighting:** *Teams scramble to find alternatives when it’s already too late and too costly to mitigate.*<br><br>*What if you could accurately predict a delay before the cargo even leaves the manufacturing facility?"* |

---

### **PART 2: The Solution (0:45 – 1:20)**

| Timestamp & Visual / Screen Action | Voiceover / Narration Script |
| :--- | :--- |
| **0:45 – 1:05**<br>*Visual:* Zoom in on the ShipSight hero headline and the statistics ticker (*2,900+ Shipments, 93% Accuracy, <2s Processing*). | *"Introducing **ShipSight Intelligence**—an AI-driven shipment delay predictor designed to transform reactive supply chain operations into proactive decision-making."* |
| **1:05 – 1:20**<br>*Visual:* Hover over navigation items or show a quick architecture view highlighting: Single Prediction, Bulk Manifest Upload, and Explainable AI. | *"By combining machine learning predictive models with explainable AI and generative action plans, ShipSight empowers supply chain managers to foresee risks, understand their exact root causes, and execute immediate counter-measures."* |

---

### **PART 3: Live Demo — Single Shipment & Explainability (1:20 – 2:40)**

| Timestamp & Visual / Screen Action | Voiceover / Narration Script |
| :--- | :--- |
| **1:20 – 1:40**<br>*Visual:* Click **"Start Predicting"** (navigate to `/predict`). Fill in sample shipment parameters (e.g. Origin: Vietnam, Destination: Nigeria, Air Freight, Weight, Dosage/Item Category, Scheduled Delivery Date). | *"Let’s dive into a live demonstration. Here on the **Single Prediction** page, a logistics coordinator inputs upcoming shipment parameters—origin country, destination port, transport mode, freight costs, and manufacturing timelines."* |
| **1:40 – 2:05**<br>*Visual:* Click **"Analyze Shipment Risk"**. Show the rapid loading state (<2s), then the Results Dashboard appears with a **High Risk / Delay Predicted** badge and estimated delay days. | *"In under two seconds, our model processes the shipment parameters. In this example, it identifies a **High Risk** flag with an estimated **14-day delay** beyond the scheduled delivery date."* |
| **2:05 – 2:25**<br>*Visual:* Scroll down to the **SHAP Feature Importance & Factor Breakdown** chart. Hover over top contributors (e.g., Destination Port Congestion, Freight Mode, Line Item Value). | *"Critically, ShipSight is not a black box. Powered by **SHAP (SHapley Additive exPlanations)**, the system visualizes the exact factors driving this risk score. Here, historical customs clearance latency at the destination port and the chosen freight lane contributed 68% to the delay probability."* |
| **2:25 – 2:40**<br>*Visual:* Highlight the **Gemini AI Intelligent Action Plan** box with its structured bullet points (Alternative routing, carrier escalation, buffer inventory). | *"Next, the system triggers our **Generative AI mitigation advisor**. Using Google Gemini, it synthesizes the SHAP risk factors and generates a prioritized, actionable mitigation plan—such as switching the final-mile carrier or rerouting through a lower-congestion entry hub."* |

---

### **PART 4: Live Demo — Bulk Manifest & Dev Mode (2:40 – 3:35)**

| Timestamp & Visual / Screen Action | Voiceover / Narration Script |
| :--- | :--- |
| **2:40 – 3:10**<br>*Visual:* Navigate to `/bulk`. Click **"Download Sample Template"**, then drag-and-drop the `sample_manifest.csv`. Show the batch processing bar and the resulting Risk Heatmap & Summary Cards. | *"For enterprise workflows, ShipSight handles high-volume operations through **Bulk Manifest Analysis**. You can upload a multi-order CSV or Excel manifest with hundreds of shipments. In seconds, ShipSight categorizes every order into risk tiers, providing a fleet-level risk distribution and flagging high-priority shipments that require immediate intervention."* |
| **3:10 – 3:35**<br>*Visual:* Toggle **Dev Benchmark Mode**. Click the row selector or Next/Prev button to inspect historical shipments, comparing the AI Prediction side-by-side against Ground Truth data. | *"To demonstrate our model's reliability, we built a **Dev Benchmark Mode** connected to historical SCMS shipment data. Users and auditors can step through real-world records to compare our AI's predicted delay against actual ground-truth delivery logs—verifying high fidelity across diverse international routes."* |

---

### **PART 5: The Role of AI in ShipSight (3:35 – 4:10)**

| Timestamp & Visual / Screen Action | Voiceover / Narration Script |
| :--- | :--- |
| **3:35 – 4:10**<br>*Visual:* Clean summary slide or quick split-screen showing: <br>1. **XGBoost** (Predictive ML)<br>2. **SHAP** (Explainable AI)<br>3. **Google Gemini** (Generative AI Actions) | *"Let’s summarize how AI powers ShipSight at every layer:*<br>1. **Predictive Engine:** *Trained XGBoost models evaluate complex, non-linear interactions across historical freight data to forecast delay probability and duration.*<br>2. **Explainable AI (XAI):** *SHAP interpretability bridges the gap between raw data and logistics domain expertise by exposing the 'why' behind each score.*<br>3. **Generative Intelligence:** *Google Gemini transforms numerical analytics into concrete, executive-ready operational mitigation strategies."* |

---

### **PART 6: Impact & Closing (4:10 – 4:45)**

| Timestamp & Visual / Screen Action | Voiceover / Narration Script |
| :--- | :--- |
| **4:10 – 4:35**<br>*Visual:* Return to homepage or a polished closing slide showing project links, GitHub repo, and key metrics. | *"ShipSight Intelligence transforms supply chain risk management from a costly guessing game into a predictable, transparent, and proactive workflow. By saving days in transit and preventing costly SLA penalties, we empower teams to deliver on time, every time."* |
| **4:35 – 4:45**<br>*Visual:* Logo, team members/credits, and "Thank You". | *"Thank you for watching our demonstration of ShipSight Intelligence."* |

---

## 💡 Practical Recording Tips

1. **Resolution & Scaling:** Record at 1080p (1920x1080) at 100% or 110% browser zoom for clean text readability.
2. **Smooth Cursor Movements:** When demonstrating single prediction and bulk upload, pause for 1 second before clicking so viewers can follow your mouse cursor naturally.
3. **Audio Delivery:** Maintain a steady, confident cadence (approx. 130–140 words per minute).
4. **Dev Server Prep:** Ensure both frontend (`localhost:3000`) and backend (`localhost:8000`) are warm and running before starting the recording for instant <2s response times.
