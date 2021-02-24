const dring = { color: 'brown', carbonated: true, sugar: 40 };

// tuple
const pepsi: [string, boolean, number] = ['brown', true, 40];
// pepsi[0] = 40; // 報錯
// type alias
type Drink = [string, boolean, number];
const sprite: Drink = ['clear', true, 40];
const tea: Drink = ['brown', false, 0];
