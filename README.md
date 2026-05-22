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

### 2. Patient Check-in (`/home/patient-check-in`)
After selecting a service, the patient is presented with a clear, full-screen display of their name and appointment details. This screen is shown to the receptionist to facilitate a smooth, non-verbal check-in.

### 3. Waiting Screen (`/waiting`)
A simple, calming screen displayed while the patient waits to be called for their appointment. It provides a clear visual cue that the check-in process is complete.

### 4. Consultation Menu (e.g., `/home/gp-appointment`)
Once called, the patient navigates to this menu. It allows them to select the specific reason for their visit (e.g., "A new health issue," "Medication query"). This screen also provides an optional link to the staff onboarding video.

### 5. Video Onboarding for Staff (`/video`)
A critical 32-second instructional video. It's designed to be shown to NHS staff before the consultation to quickly explain the app's function, ensuring a smooth interaction. Includes clinical safety notes and interaction guidelines.

### 6. Translation Screen (`/service/[type]`)
The core multimodal translation engine.
- **Staff Side**: Listens to English speech and displays corresponding localized (e.g., Gujarati) video clips.
- **Patient Side**: Displays the signer/speaker and provides a "Please say again" button.
- **Verified Response**: Patients record a response, verify the transcribed text, and send it as an English voice reply.

### 7. Safety Hub (`/safety`)
Accessible via the persistent red "Stop!" button. Provides:
- **Immediate Intervention**: Videos for staff explaining why the consultation has stopped.
- **Advocacy**: Localized help for HealthWatch and the Care Quality Commission (CQC).
- **Complaints**: A step-by-step guide to the NHS formal complaints process.

### 8. Settings (`/settings`)
Allows the user to manage their personal information (name, date of birth) and security preferences (PIN, biometrics) locally on their device.

## Functional Flows

### The "Arrival" Flow
1. Patient arrives at the clinic and selects their service on the **Home Screen**.
2. They use the **Patient Check-in** screen to confirm their name and details with the receptionist.
3. Upon completion, they transition to the **Waiting Screen**.

### The "Consultation" Flow
1. The **Waiting Screen** alerts the patient when their name is called.
2. The patient selects their appointment type from the **Consultation Menu**.
3. They enter the **Translation Screen** for the duration of the clinical encounter.
