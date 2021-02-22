// 參數若不指定型別的話會為 any
const add = (a: number, b: number) => {
  return a + b;
};

const subtract = (a: number, b: number): number => {
  return a - b;
};

// 具名函式
function divide(a: number, b: number): number {
  return a / b;
}

// anonymous function
const multiple = function (a: number, b: number): number {
  return a * b;
};

// void
const logger = (message: string): void => {
  console.log(message);
  return;
};

// never
const throwError = (message: string): never => {
  throw new Error(message);
};

const throwError2 = (message: string): void => {
  if (!message) throw new Error(message);
};

// destruturing with annotations
const forecast = {
  date: new Date(),
  weather: 'sunny',
};

const logWeather = ({ date, weather }: { date: Date; weather: string }): void => {
  console.log(date);
  console.log(weather);
};

logWeather(forecast);
