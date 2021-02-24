// interface 命名首字使用大寫並於最前方加上大寫I
// 就算在 interface 中只定義部分屬性，依然可以使用
// 儘管內容相差甚遠，但 oldCivic 和 drink 中都共同擁有 summary 這個方法
interface IReportable {
  summary(): string; // 會回傳字串的方法
}

const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary() {
    return `Name: ${this.name}`;
  },
};

const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar!`;
  },
};

const printSummary = (item: IReportable): void => {
  console.log(item.summary());
};

printSummary(oldCivic);
printSummary(drink);
