document.addEventListener("DOMContentLoaded", () => {
  const nRandom = getRandom(1, 150);
  fetchApi(nRandom);
});

const getRandom = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};
const fetchApi = async (id) => {
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
