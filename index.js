import {randomLcg, randomNumber} from "d3-random";

const seed = 0.44871573888282423; // any number in [0, 1)
const random = randomNormal.source(randomLcg(seed))(0, 1);

random(); // -0.6253955998897069
console.log(random())