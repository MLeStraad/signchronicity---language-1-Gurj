"use client";
import React from 'react';
import { SubMenuScreen } from '@/components/phase2/SubMenuScreen';

export default function NurseAppointment() {
  const items = [
    "Wound Care/Dressings",
    "Blood pressure monitoring",
    "Minor illness/injury",
    "Vaccination",
    "Cervical Smear",
    "Chronic Disease Management",
    "Sexual Health",
    "Blood tests",
    "Continence management",
    "Results follow up",
    "Something else"
  ];
  return <SubMenuScreen title="Practice Nurse appointment" items={items} nextRoute="/home/appointments/nurse/translate" />;
}
