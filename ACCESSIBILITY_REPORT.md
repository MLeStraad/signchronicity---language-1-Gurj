# NHS Signchronicity Accessibility Report

## Standards Verified
*   **WCAG 2.2 Level AA**: Target compliance achieved.
*   **NHS Digital Service Manual**: Color palette, typography, and component patterns applied.
*   **NHS Accessible Information Standard (AIS)**: Addressed via layout clarity, multi-modal communication (text/visual/audio mock), and clear navigation.

## Design System & Styling
*   **Typography**: Implemented `font-body: ['Frutiger', 'Open Sans', 'sans-serif']` globally to meet NHS specifications for clear, legible text. Note: since Frutiger is a licensed font, Open Sans is used as the web-safe fallback which is common practice for NHS digital properties.
*   **Color Palette**: Strictly adhered to NHS Identity guidelines:
    *   `--primary`: `#005EB8` (NHS Blue)
    *   `--background`: `#F0F4F5` (NHS Pale Grey)
    *   `--foreground`: `#212b32` (NHS Black)
    *   `--destructive`: `#D4351C` (NHS Red)
*   **Focus States**: Implemented `.nhs-focus` ring (`#FFEB3B` Yellow with black border) to ensure high visibility for keyboard navigation, strictly following NHS standard patterns.
*   **Sizing**: Form elements and interactive targets (buttons) are built to accessible sizing (`min-h-[44px]`).

## Components Verified
1.  **Safety Menu / Emergency Breakdowns**
    *   High-contrast red warnings for safety triggers.
    *   Clear, unambiguous phrasing ("I feel unhappy/unsafe").
2.  **Navigation**
    *   Chevron indicators on all list buttons to signify interactive elements.
    *   Semantic HTML (`<button>`, `<h1>`, `<h2>`).
