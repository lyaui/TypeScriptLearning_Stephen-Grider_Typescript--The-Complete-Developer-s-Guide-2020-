const carMakerInitial: string[] = [];
const carMakers: string[] = ['ford', 'toyota', 'chevy'];
const dates: Date[] = [new Date(), new Date()];

const carsByMakeInitial: string[][] = [];
const carsByMake: string[][] = [['f150'], ['corolla'], ['camaro']];

// Help with inference when extrating values
const car = carMakers[0];

// prevent incompatible values from
carMakers.push(100); // 報錯

// Help with 'map'

carMakers.map((car: string): string => {
  return car;
});

// Flexible types
const importantDates: (Date | string)[] = [new Date(), '2030-10-10'];
importantDates.push(new Date());
importantDates.push('2030-10-10');
