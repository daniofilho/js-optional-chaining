const data = [
  {
    id: 1,
    name: "Lorem",
    address: {
      city: "Itatiba",
      state: {
        id: "SP",
        label: "São Paulo",
        population: {
          quantity: 150000,
        },
      },
    },
  },
  {
    id: 2,
    name: "Ipsum",
  },
];

// Para imprimir um conteúdo específico que houver dentro de data geralmente faria assim:
console.log("---- Sem Optional Chaining ----");
data.map((user) => {
  console.log(`\nUsuário: ${user.name}`);
  if (
    user.address &&
    user.address.state &&
    user.address.state.population &&
    user.address.state.population.quantity // Perceba essa quantidade de &&
  ) {
    console.log(
      `Mora em uma cidade com população de ${user.address.state.population.quantity} habitantes!`
    );
  }
});

// O mesmo código pode ser reescrito com Optional Chaining da seguinte forma
console.log("---- Com Optional Chaining ----");
data.map((user) => {
  // O ? define que se não houver aquele item, já volta undefined
  const population = user.address?.state?.population?.quantity;

  console.log(`\nUsuário: ${user.name}`);
  if (population)
    console.log(
      `Mora em uma cidade com população de ${population} habitantes!`
    );
});
