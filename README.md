# Signchronicity

**Signchronicity** is a patient-controlled, local-first translation tool designed for rigid compliance within NHS clinical environments.

## Project Vision
To provide a professional, trustworthy communication bridge for non-English speaking patients that operates with **zero ongoing costs** and **total data privacy**. 

**Crucial Context:** Signchronicity is primarily a **user-held application** deployed directly on patient devices.
- It features **zero integration** with the NHS Spine, EMIS, or any other central clinical system.
- It stores **no** NHS numbers, and **no** diagnostic or medical data.
- Dedicated clinical deployments will only exist as fail-safes to combat digital poverty and prevent discrimination.

## Technical Architecture
- **Local Inference Engine**: Powered by `@xenova/transformers`, running OpenAI's Whisper (STT) and Meta's NLLB (Translation) locally in the browser via WebAssembly and WebWorkers.
- **Multimodal Interaction**: A hybrid engine that triggers high-quality pre-recorded localized video assets based on real-time English speech intent detection.
- **Privacy First**: No patient audio or transcription data ever leaves the local device. No API keys or cloud services are required for the core translation pipeline.
- **Standalone Philosophy**: Each language-specific version is a standalone PWA designed primarily for patient-held devices.

## NHS Digital Standards
- **Typography**: Rigidly adheres to the **Frutiger** font stack with Open Sans as the digital fallback.
- **Visual Identity**: Official NHS color palette (NHS Blue #005EB8) and sharp clinical radii.
- **Accessibility**: Compliant with **WCAG 2.2** and the **NHS Accessible Information Standard**, featuring high-visibility focus states and accessible touch targets.

## Screen-by-Screen Guide

### 1. Home Screen (`/`)
The primary navigation hub. Features high-contrast "Menu Buttons" for clinic check-ins and app settings. Designed for one-handed thumb interaction.

### 2. Video Onboarding (`/video`)
A critical 32-second instructional video. Designed to be shown to NHS staff to explain the app's function. Includes clinical safety notes and interaction guidelines.

### 3. Service Check-in (`/service/[type]`)
The multimodal active listening screen.
- **Staff Side**: Listens to English speech and displays corresponding localized (e.g., Gujarati) video clips.
- **Patient Side**: Displays the signer/speaker and provides a "Please say again" button.
- **Verified Response**: Patients record a response, verify the transcribed text, and send it as an English voice reply.

### 4. Waiting Area
A passive listening state that monitors for the patient's name. Features an "Active Listening" toggle and a high-priority "Rapid Alert" animation (flashing yellow/red) when triggered.

### 5. Appointment Translation (`/translate`)
The deep consultation interface. Supports long-form transcription and dual-camera feed visualization to maintain eye contact between clinician and patient while the "digital interpreter" works.

### 6. Safety Hub (`/safety`)
Accessible via the persistent red "Stop!" button. Provides:
- **Immediate Intervention**: Videos for staff explaining why the consultation has stopped.
- **Advocacy**: Localized help for HealthWatch and the Care Quality Commission (CQC).
- **Complaints**: A step-by-step guide to the NHS formal complaints process.

## Functional Flows

### The "Arrival" Flow
1. Patient arrives at the clinic and selects their service on the **Home Screen**.
2. They use the **Check-in Translation** to confirm their name and details with the receptionist.
3. Upon completion, they transition to the **Waiting Screen**.

### The "Consultation" Flow
1. The **Waiting Screen** alerts the patient when their name is called.
2. The patient selects their appointment type from the **Consultation Menu**.
3. They enter the **Translation Screen** for the duration of the clinical encounter.

### The "Safety" Flow
1. If at any point the patient feels unsafe or misunderstood, they hit the **"Stop!" button**.
2. They are taken to the **Safety Hub** where they can play a video for the clinician explaining the need for a face-to-face interpreter or ending the session safely.

## Tech Stack
- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS & ShadCN UI (Rigid NHS Theme)
- **AI/ML**: Transformers.js (Local Wasm Inference)
- **Icons**: Lucide React
