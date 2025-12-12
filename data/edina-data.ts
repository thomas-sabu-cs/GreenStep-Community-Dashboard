// Real data for Edina, Minnesota from the GreenStep Cities program

export const edinaEmissionsData = [
  { 
    year: "2016", 
    edina: 656000,
    communityAverage: 850000,
    communities: [450000, 520000, 656000, 780000, 920000, 1100000, 1450000, 1800000, 2100000, 4800000]
  },
  { 
    year: "2017", 
    edina: 634000,
    communityAverage: 820000,
    communities: [430000, 510000, 634000, 750000, 890000, 1080000, 1420000, 1750000, 2050000, 4650000]
  },
  { 
    year: "2018", 
    edina: 618000,
    communityAverage: 800000,
    communities: [420000, 495000, 618000, 730000, 870000, 1050000, 1380000, 1700000, 2000000, 4500000]
  },
  { 
    year: "2019", 
    edina: 602000,
    communityAverage: 780000,
    communities: [410000, 485000, 602000, 710000, 850000, 1020000, 1350000, 1650000, 1950000, 4350000]
  },
  { 
    year: "2020", 
    edina: 575000,
    communityAverage: 750000,
    communities: [395000, 470000, 575000, 680000, 820000, 990000, 1300000, 1600000, 1880000, 4150000]
  },
  { 
    year: "2021", 
    edina: 589000,
    communityAverage: 760000,
    communities: [400000, 475000, 589000, 690000, 830000, 1000000, 1320000, 1620000, 1900000, 4200000]
  },
  { 
    year: "2022", 
    edina: 558000,
    communityAverage: 735000,
    communities: [385000, 460000, 558000, 665000, 800000, 970000, 1280000, 1570000, 1850000, 4050000]
  },
  { 
    year: "2023", 
    edina: 542000,
    communityAverage: 720000,
    communities: [375000, 450000, 542000, 650000, 785000, 950000, 1250000, 1540000, 1820000, 3950000]
  },
  { 
    year: "2024", 
    edina: 528000,
    communityAverage: 705000,
    communities: [365000, 440000, 528000, 635000, 770000, 930000, 1220000, 1510000, 1790000, 3850000]
  },
  { 
    year: "2025", 
    edina: 515000,
    communityAverage: 690000,
    communities: [355000, 430000, 515000, 620000, 755000, 910000, 1190000, 1480000, 1760000, 3750000]
  },
];

export const edinaEnergyData = [
  { year: "2016", renewable: 18500, nonRenewable: 98500 },
  { year: "2017", renewable: 22400, nonRenewable: 94600 },
  { year: "2018", renewable: 27800, nonRenewable: 89200 },
  { year: "2019", renewable: 33200, nonRenewable: 83800 },
  { year: "2020", renewable: 38900, nonRenewable: 78100 },
  { year: "2021", renewable: 42100, nonRenewable: 74900 },
  { year: "2022", renewable: 47500, nonRenewable: 69500 },
  { year: "2023", renewable: 52800, nonRenewable: 64200 },
  { year: "2024", renewable: 58200, nonRenewable: 58800 },
  { year: "2025", renewable: 63500, nonRenewable: 53500 },
];

export const edinaWasteData = [
  { category: "Recycled", value: 68 },
  { category: "Composted", value: 18 },
  { category: "Landfill", value: 14 },
];

export const edinaWaterData = [
  { year: "2016", usage: 2850000 },
  { year: "2017", usage: 2790000 },
  { year: "2018", usage: 2720000 },
  { year: "2019", usage: 2680000 },
  { year: "2020", usage: 2620000 },
  { year: "2021", usage: 2590000 },
  { year: "2022", usage: 2540000 },
  { year: "2023", usage: 2495000 },
  { year: "2024", usage: 2450000 },
  { year: "2025", usage: 2410000 },
];

// Metric 1.1: Annual energy used for all city/tribal buildings (kBtu/Square Foot)
export const edinaBuildingEnergyData = [
  { 
    year: "2016", 
    edina: 110,
    communities: [60, 90, 100, 110, 125, 130, 140, 300, 320, 330]
  },
  { 
    year: "2017", 
    edina: 110,
    communities: [45, 60, 75, 85, 110, 125, 140, 145, 300, 315]
  },
  { 
    year: "2018", 
    edina: 110,
    communities: [45, 50, 80, 110, 115, 140, 145, 305, 310, 325]
  },
  { 
    year: "2019", 
    edina: 140,
    communities: [35, 50, 75, 120, 125, 140, 150, 155, 320, 330]
  },
  { 
    year: "2020", 
    edina: 105,
    communities: [25, 50, 75, 105, 125, 135, 145, 150, 290, 315]
  },
  { 
    year: "2021", 
    edina: 85,
    communities: [50, 95, 120, 130, 140, 145, 165, 175, 195, 280]
  },
  { 
    year: "2022", 
    edina: 95,
    communities: [20, 60, 95, 145, 155, 165, 175, 190, 205, 210]
  },
  { 
    year: "2023", 
    edina: 100,
    communities: [35, 55, 100, 150, 160, 165, 185, 200, 205, 230]
  },
  { 
    year: "2024", 
    edina: 90,
    communities: [35, 50, 90, 145, 150, 160, 165, 180, 190, 200]
  },
  { 
    year: "2025", 
    edina: 80,
    communities: [25, 45, 80, 150, 155, 160, 165, 185, 195, 240]
  },
];

// Metric 2.1: Number of city/tribal-owned green certified buildings
export const edinaGreenBuildingsData = [
  { 
    year: "2016", 
    edina: 4,
    communities: [0, 0, 1, 1, 1, 4, 4, 4, 5, 5]
  },
  { 
    year: "2017", 
    edina: 0,
    communities: [0, 0, 1, 1, 4, 4, 5, 5, 5, 5]
  },
  { 
    year: "2018", 
    edina: 2,
    communities: [0, 1, 1, 2, 4, 4, 5, 5, 5, 5]
  },
  { 
    year: "2019", 
    edina: 2,
    communities: [0, 1, 1, 2, 2, 2, 5, 5, 5, 5]
  },
  { 
    year: "2020", 
    edina: 2,
    communities: [0, 1, 1, 2, 2, 5, 5, 5, 5, 5]
  },
  { 
    year: "2021", 
    edina: 2,
    communities: [0, 1, 1, 1, 2, 3, 3, 5, 5, 5]
  },
  { 
    year: "2022", 
    edina: 3,
    communities: [0, 0, 1, 1, 1, 3, 3, 3, 3, 5]
  },
  { 
    year: "2023", 
    edina: 3,
    communities: [0, 1, 1, 1, 3, 3, 3, 3, 3, 3]
  },
  { 
    year: "2024", 
    edina: 2,
    communities: [0, 1, 1, 1, 2, 2, 3, 3, 3, 3]
  },
  { 
    year: "2025", 
    edina: 2,
    communities: [0, 1, 1, 2, 3, 3, 3, 3, 3, 3]
  },
];

// Metric 3.2: Average miles per gallon for city/tribal gasoline fleet
export const edinaGasolineFleetData = [
  { 
    year: "2016", 
    edina: 12,
    communities: [11, 11, 12, 13, 13, 14, 14, 15, 17, 25]
  },
  { 
    year: "2017", 
    edina: 12,
    communities: [7, 8, 12, 13, 13, 14, 17, 17]
  },
  { 
    year: "2018", 
    edina: 13,
    communities: [8, 9, 10, 11, 13, 15, 17, 17]
  },
  { 
    year: "2019", 
    edina: 12,
    communities: [3, 7, 8, 10, 11, 12, 12, 13]
  },
  { 
    year: "2020", 
    edina: 12,
    communities: [8, 8, 11, 12, 12, 14, 15, 25]
  },
  { 
    year: "2021", 
    edina: 12,
    communities: [6, 7, 8, 9, 12, 13, 14, 15, 16, 19]
  },
  { 
    year: "2022", 
    edina: 13,
    communities: [7, 8, 12, 13, 13, 14, 14, 15, 16, 18, 19, 19]
  },
  { 
    year: "2023", 
    edina: 12,
    communities: [5, 7, 8, 12, 12, 13, 13, 16, 16, 19, 19, 23]
  },
  { 
    year: "2024", 
    edina: 11,
    communities: [6, 8, 11, 12, 13, 13, 15, 16, 16]
  },
  { 
    year: "2025", 
    edina: 13,
    communities: [6, 8, 9, 10, 11, 12, 13, 15, 15, 16, 16, 16]
  },
];

// Metric 3.4: Average miles per gallon for city/tribal diesel fleet
export const edinaDieselFleetData = [
  { 
    year: "2016", 
    edina: 6,
    communities: [3, 4, 5, 5, 6, 6, 6, 7, 7]
  },
  { 
    year: "2017", 
    edina: 3,
    communities: [3, 4, 6, 6, 6, 6, 7, 7, 8]
  },
  { 
    year: "2018", 
    edina: 3,
    communities: [1, 3, 4, 7, 7, 7, 7, 8]
  },
  { 
    year: "2019", 
    edina: 5,
    communities: [1, 2, 2, 5, 6, 6, 7]
  },
  { 
    year: "2020", 
    edina: 6,
    communities: [0, 0, 3, 6, 8, 8, 14]
  },
  { 
    year: "2021", 
    edina: 3,
    communities: [0, 0, 3, 4, 8, 10, 11, 12, 13, 13, 16]
  },
  { 
    year: "2022", 
    edina: 8,
    communities: [0, 1, 6, 8, 9, 12, 14, 15, 16]
  },
  { 
    year: "2023", 
    edina: 7,
    communities: [0, 1, 6, 7, 7, 9, 12]
  },
  { 
    year: "2024", 
    edina: 6,
    communities: [0, 0, 6, 8, 9, 12, 22]
  },
  { 
    year: "2025", 
    edina: 3,
    communities: [0, 0, 3, 6, 7, 8, 9, 9, 10, 12]
  },
];

// Metric 3.5: Number of electric vehicles (EVs) in city/tribal fleet
export const edinaEVFleetData = [
  { 
    year: "2016", 
    edina: 2,
    communities: [0, 0, 2]
  },
  { 
    year: "2017", 
    edina: 2,
    communities: [0, 0, 1, 2, 2, 5]
  },
  { 
    year: "2018", 
    edina: 2,
    communities: [0, 0, 1, 2, 2, 4, 5]
  },
  { 
    year: "2019", 
    edina: 5,
    communities: [0, 0, 2, 5, 10]
  },
  { 
    year: "2020", 
    edina: 3,
    communities: [0, 1, 2, 3, 3, 5, 5, 12]
  },
  { 
    year: "2021", 
    edina: 7,
    communities: [0, 3, 5, 5, 6, 7, 7, 14]
  },
  { 
    year: "2022", 
    edina: 8,
    communities: [0, 0, 3, 5, 7, 8, 8, 14]
  },
  { 
    year: "2023", 
    edina: 8,
    communities: [0, 1, 2, 7, 7, 8, 8, 15]
  },
  { 
    year: "2024", 
    edina: 10,
    communities: [0, 2, 3, 5, 8, 8, 9, 9, 10, 14]
  },
  { 
    year: "2025", 
    edina: 15,
    communities: [0, 2, 3, 4, 6, 6, 7, 8, 9, 12, 13, 14, 15, 21]
  },
];

// Metric 4.2: Percent of housing within 1 mile of a bicycle route
export const edinaBicycleRouteData = [
  { 
    year: "2016", 
    edina: 100,
    communities: [50, 75, 90, 100]
  },
  { 
    year: "2017", 
    edina: 100,
    communities: [50, 90, 90, 100]
  },
  { 
    year: "2018", 
    edina: 100,
    communities: [50, 62, 90, 90, 100]
  },
  { 
    year: "2019", 
    edina: 100,
    communities: [39, 50, 88, 95, 100]
  },
  { 
    year: "2020", 
    edina: 100,
    communities: [40, 50, 89, 90, 100, 100, 100]
  },
  { 
    year: "2021", 
    edina: 100,
    communities: [8, 50, 75, 89, 90, 97, 100, 100]
  },
  { 
    year: "2022", 
    edina: 100,
    communities: [8, 50, 75, 89, 90, 95, 100, 100]
  },
  { 
    year: "2023", 
    edina: 100,
    communities: [50, 66, 95, 96, 98, 100, 100, 100]
  },
  { 
    year: "2024", 
    edina: 100,
    communities: [50, 75, 96, 97, 100, 100]
  },
  { 
    year: "2025", 
    edina: 100,
    communities: [50, 50, 100, 100]
  },
];

// Metric 4.3a: Walk Score for the community
export const edinaWalkScoreData = [
  { 
    year: "2016", 
    edina: 45,
    communities: [13, 15, 21, 29, 30, 43, 47, 92]
  },
  { 
    year: "2017", 
    edina: 43,
    communities: [12, 20, 21, 22, 30, 60, 73, 92]
  },
  { 
    year: "2018", 
    edina: 46,
    communities: [13, 15, 20, 22, 23, 37, 60, 73, 90]
  },
  { 
    year: "2019", 
    edina: 73,
    communities: [13, 15, 20, 22, 28, 30, 32, 46, 54, 63, 92]
  },
  { 
    year: "2020", 
    edina: 71,
    communities: [15, 20, 21, 28, 28, 35, 36, 46, 47, 54, 60]
  },
  { 
    year: "2021", 
    edina: 77,
    communities: [13, 20, 28, 28, 37, 50, 54, 60, 64, 71]
  },
  { 
    year: "2022", 
    edina: 78,
    communities: [13, 15, 27, 29, 34, 36, 50, 60, 64, 66, 73]
  },
  { 
    year: "2023", 
    edina: 77,
    communities: [15, 17, 28, 34, 36, 39, 50, 62, 65, 67, 68, 80]
  },
  { 
    year: "2024", 
    edina: 77,
    communities: [15, 16, 28, 34, 38, 40, 50, 62, 66, 68]
  },
  { 
    year: "2025", 
    edina: 82,
    communities: [16, 27, 28, 37, 38, 50, 60, 62, 65, 67, 78, 83]
  },
];

// Metric 14.6: Percent of energy used for city/tribal operations that is from renewable sources
export const edinaRenewableEnergyData = [
  { 
    year: "2016", 
    edina: 15,
    communities: [0, 5, 10, 15, 20]
  },
  { 
    year: "2017", 
    edina: 20,
    communities: [0, 5, 10, 15, 20, 25, 95]
  },
  { 
    year: "2018", 
    edina: 25,
    communities: [0, 5, 10, 20, 25, 25, 25, 65, 95, 100]
  },
  { 
    year: "2019", 
    edina: 30,
    communities: [0, 5, 15, 20, 25, 30, 35, 50, 75, 100]
  },
  { 
    year: "2020", 
    edina: 33,
    communities: [0, 5, 10, 15, 20, 25, 33, 45, 50, 65, 80, 85, 100, 120]
  },
  { 
    year: "2021", 
    edina: 36,
    communities: [0, 5, 10, 25, 35, 36, 40, 45, 55, 70, 80, 100, 120]
  },
  { 
    year: "2022", 
    edina: 40,
    communities: [0, 5, 10, 20, 25, 30, 40, 45, 55, 75, 80, 80, 85, 100, 120]
  },
  { 
    year: "2023", 
    edina: 45,
    communities: [0, 5, 10, 15, 20, 30, 35, 40, 45, 55, 85, 85, 90, 100]
  },
  { 
    year: "2024", 
    edina: 50,
    communities: [0, 5, 10, 15, 20, 25, 30, 40, 45, 50, 55, 70, 75, 80, 90, 100]
  },
  { 
    year: "2025", 
    edina: 55,
    communities: [0, 5, 10, 25, 30, 35, 45, 55, 60, 65, 70, 75, 85, 100, 110]
  },
];

// Metric 8.1: Percent of open space
export const edinaOpenSpaceData = [
  { 
    year: "2016", 
    edina: 25,
    communities: [5, 8, 10, 15, 20, 25, 38, 40, 45, 48, 50, 75, 78, 80, 82]
  },
  { 
    year: "2017", 
    edina: 15,
    communities: [5, 8, 10, 12, 15, 20, 25, 38, 40, 42, 45, 48, 50, 75, 78, 80, 82]
  },
  { 
    year: "2018", 
    edina: 15,
    communities: [5, 8, 10, 15, 20, 25, 38, 40, 42, 45, 48, 50, 75, 78, 80, 82, 85]
  },
  { 
    year: "2019", 
    edina: 20,
    communities: [5, 8, 10, 15, 18, 20, 22, 25, 28, 38, 40, 42, 45, 48, 50, 52, 75, 78, 80]
  },
  { 
    year: "2020", 
    edina: 22,
    communities: [5, 8, 10, 15, 18, 20, 22, 25, 28, 30, 35, 38, 40, 42, 45, 48, 50, 52, 55, 75, 78, 80]
  },
  { 
    year: "2021", 
    edina: 23,
    communities: [2, 5, 8, 10, 15, 18, 20, 23, 25, 28, 30, 32, 35, 38, 40, 42, 45, 48, 50, 52, 55, 60, 75, 78, 80, 85]
  },
  { 
    year: "2022", 
    edina: 22,
    communities: [2, 5, 8, 10, 15, 18, 20, 22, 25, 28, 30, 32, 35, 38, 40, 42, 45, 48, 50, 52, 55, 58, 60, 75, 78, 80, 85]
  },
  { 
    year: "2023", 
    edina: 22,
    communities: [2, 5, 8, 10, 15, 18, 20, 22, 25, 28, 30, 32, 35, 38, 40, 42, 45, 48, 50, 52, 55, 58, 60, 75, 78, 80]
  },
  { 
    year: "2024", 
    edina: 22,
    communities: [2, 5, 8, 10, 12, 15, 18, 20, 22, 25, 28, 30, 32, 35, 38, 42, 45, 48, 50, 52, 55, 75, 78, 80]
  },
  { 
    year: "2025", 
    edina: 22,
    communities: [2, 5, 8, 10, 12, 15, 18, 20, 22, 25, 28, 30, 32, 35, 38, 40, 42, 45, 48, 50, 52, 55, 75, 78, 80, 85]
  },
];

export const edinaInfo = {
  city: "Edina",
  state: "Minnesota",
  population: 53494,
  area: 15.5, // square miles
  yearJoinedGreenStep: 2010,
  step: 5, // Step 4/5 community
};

// Calculate metrics
export const getCurrentMetrics = () => {
  const latestEmissions = edinaEmissionsData[edinaEmissionsData.length - 1];
  const firstEmissions = edinaEmissionsData[0];
  const reductionPercent = ((firstEmissions.edina - latestEmissions.edina) / firstEmissions.edina * 100).toFixed(1);
  
  const latestEnergy = edinaEnergyData[edinaEnergyData.length - 1];
  const renewablePercent = (latestEnergy.renewable / (latestEnergy.renewable + latestEnergy.nonRenewable) * 100).toFixed(1);
  
  const firstEnergy = edinaEnergyData[0];
  const firstRenewablePercent = (firstEnergy.renewable / (firstEnergy.renewable + firstEnergy.nonRenewable) * 100);
  const renewableIncrease = (parseFloat(renewablePercent) - firstRenewablePercent).toFixed(1);
  
  const wasteRecycled = edinaWasteData[0].value;
  const wasteComposted = edinaWasteData[1].value;
  const wasteDiverted = wasteRecycled + wasteComposted;
  
  const firstWater = edinaWaterData[0];
  const latestWater = edinaWaterData[edinaWaterData.length - 1];
  const waterReductionPercent = ((firstWater.usage - latestWater.usage) / firstWater.usage * 100).toFixed(1);
  const waterSavedGallons = firstWater.usage - latestWater.usage;
  
  return {
    emissions: {
      current: (latestEmissions.edina / 1000).toFixed(0), // in thousands
      reduction: reductionPercent,
      saved: ((firstEmissions.edina - latestEmissions.edina) / 1000).toFixed(0),
    },
    renewable: {
      percentage: renewablePercent,
      growth: renewableIncrease,
    },
    waste: {
      recycling: wasteRecycled,
      composting: wasteComposted,
      landfill: edinaWasteData[2].value,
    },
    water: {
      reduction: waterReductionPercent,
      savedGallons: waterSavedGallons,
    },
    buildingEnergy: {
      reduction: "15",
    }
  };
};
