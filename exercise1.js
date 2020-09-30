// Exercice 1: Highest Occurrence

const highestOccurrence = (arr) => {
  if (arr.length > 0) {
    const items = [];

    arr.map((e) => {
      if (items.find((i) => i.id == e)) {
        var index = items.findIndex((x) => x.id == e);
        items[index].count = items[index].count + 1;
      } else {
        items.push({
          id: e,
          count: 0,
        });
      }
    });

    const maximum = Math.max.apply(
      Math,
      items.map((i) => i.count)
    );

    return items.filter((i) => i.count == maximum).map((e) => e.id);
  }
};

const a = highestOccurrence([2, 3, 2, 2, 2, 4, 2]);
// [2]

const b = highestOccurrence([2, 3, 2, 3, 2, 3, 4]);
// [2, 3]

const c = highestOccurrence(["a", "b", "c", "a", "a", "a", "a"]);
// ['a']

const d = highestOccurrence(["a", "a", 2, 2, 2, "a", 4]);
// ['a', 2]

console.log(a, b, c, d);
