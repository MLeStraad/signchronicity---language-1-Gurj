"use client";
import React from 'react';
import { SubMenuScreen } from '@/components/phase2/SubMenuScreen';

export default function GPAppointment() {
  const items = [
    "A new health issue",
    "An unresolved health issue",
    "An existing illness",
    "Chronic Disease Management",
    "A Fit Note",
    "A Carer's Issue",
    "Pain management",
    "Referral follow up",
    "Diagnostic or results review",
    "GP advice ONLY",
    "Something else"
  ];
  return <SubMenuScreen title="GP appointment" items={items} nextRoute="/home/appointments/gp/translate" />;
}
