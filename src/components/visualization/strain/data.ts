
const baseData = [
  { year: '2020', civicLoad: 4.5, resourceBuffer: 5.8, usagePerCitizen: 1.2, strainIndex: 0.78 },
  { year: '2021', civicLoad: 4.7, resourceBuffer: 5.6, usagePerCitizen: 1.25, strainIndex: 0.84 },
  { year: '2022', civicLoad: 4.9, resourceBuffer: 5.3, usagePerCitizen: 1.3, strainIndex: 0.92 },
  { year: '2023', civicLoad: 5.2, resourceBuffer: 5.0, usagePerCitizen: 1.4, strainIndex: 1.04 },
  { year: '2024', civicLoad: 5.4, resourceBuffer: 4.8, usagePerCitizen: 1.5, strainIndex: 1.12 },
  { year: '2025', civicLoad: 5.7, resourceBuffer: 4.6, usagePerCitizen: 1.55, strainIndex: 1.24 }
];

export const scenarioData = {
  statusQuo: [
    ...baseData,
    { year: '2026', civicLoad: 6.0, resourceBuffer: 4.3, usagePerCitizen: 1.6, strainIndex: 1.39 },
    { year: '2027', civicLoad: 6.3, resourceBuffer: 4.0, usagePerCitizen: 1.65, strainIndex: 1.57 },
    { year: '2028', civicLoad: 6.6, resourceBuffer: 3.7, usagePerCitizen: 1.7, strainIndex: 1.78 },
  ],
  rebalanced: [
    ...baseData,
    { year: '2026', civicLoad: 5.8, resourceBuffer: 4.9, usagePerCitizen: 1.4, strainIndex: 1.18 },
    { year: '2027', civicLoad: 5.9, resourceBuffer: 5.2, usagePerCitizen: 1.25, strainIndex: 1.13 },
    { year: '2028', civicLoad: 6.0, resourceBuffer: 5.5, usagePerCitizen: 1.1, strainIndex: 1.09 },
  ],
  collapse: [
    ...baseData,
    { year: '2026', civicLoad: 6.2, resourceBuffer: 4.0, usagePerCitizen: 1.8, strainIndex: 1.55 },
    { year: '2027', civicLoad: 6.7, resourceBuffer: 3.2, usagePerCitizen: 2.1, strainIndex: 2.09 },
    { year: '2028', civicLoad: 7.2, resourceBuffer: 2.3, usagePerCitizen: 2.4, strainIndex: 3.13 },
  ]
};
