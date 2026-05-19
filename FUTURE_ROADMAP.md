# Signchronicity Future Roadmap

## Architectural Core Principles
**Crucial Context:** Signchronicity is primarily a **user-held application** deployed directly on patient devices.
- **Zero Integration:** It deliberately features *no integration* with the NHS Spine, EMIS, or any other central clinical system.
- **Total Privacy:** The app stores *no* NHS numbers, and *no* diagnostic or medical data.
- **Core Function:** It is strictly a standalone, local-first communication bridge.
- **Fail-safes:** Dedicated clinical deployments will only exist as fail-safes to combat digital poverty and prevent discrimination.

## DTAC Compliance & Future Features
This document outlines the planned future features and compliance steps for Signchronicity, guided by the principles above.

### 1. Onboarding Processes
- **Implementation Placeholder:** Future pull requests will implement the fully developed onboarding screens.
- **My Info Pop-up:** Onboarding data will securely and locally inform the "My Info" popup component.

### 2. Theme Management
- **Dark/Light Theme:** Introduce a robust theme toggler adhering strictly to NHS Accessible Information Standards (high contrast capabilities). Determine the current status of dark theme support within the shadcn/ui foundation and finalize implementation.

### 3. Safety Menu Expansion
- **Practice Manager Details:** Update the safety menu pop-up to dynamically or statically display relevant Practice Manager contact details, fulfilling clinical safety requirements.

### 4. Media Asset Management
- All media assets must be placed within the Next.js `public/` directory.
- **Video Assets:** `public/videos/`
- **Audio Assets:** `public/audio/`

### 5. DTAC Compliance Audit
- Conduct a full Digital Technology Assessment Criteria (DTAC) audit to ensure clinical safety, data protection, technical security, interoperability, and usability and accessibility standards are met before deployment.
