"use client";
import React from 'react';
import { SubMenuScreen } from '@/components/phase2/SubMenuScreen';

export default function PharmacyVisit() {
  const items = [
    "Get my prescription",
    "Get someone else's prescription",
    "Pharmacy First Scheme",
    "Get over-the-counter medicines",
    "Vaccinations",
    "Blood pressure monitoring",
    "Consult a Pharmacist",
    "Consult a Pharmacist Privately",
    "Something else"
  ];
  return <SubMenuScreen title="Pharmacy visit" items={items} nextRoute="/home/pharmacy/translate" />;
}
