"use client";
import React from 'react';
import { SubMenuScreen } from '@/components/phase2/SubMenuScreen';

export default function BloodTestAppointment() {
  const items = [
    "Get my blood test"
  ];
  return <SubMenuScreen title="Blood test appointment" items={items} nextRoute="/home/appointments/blood/translate" />;
}
