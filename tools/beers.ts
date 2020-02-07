import beersData from "../files/beersData.json";

export class BeerDescription {
  fr: string = '';
  en: string = '';
};

export class BeerLabel {
  center: number = 0;
  angle: number = 0;
  yCenter: number = 0;
  containerId: string = '';
};

export class Beer {
  id: string = '';
  name: string = '';
  brewerId: string = '';
  description: BeerDescription = new BeerDescription();
  style: string = '';
  percentage: number = 0;
  imageUrl: string = '';
  label: BeerLabel = new BeerLabel();
  createdAt: Date = new Date();
  score?: number = 0;
};

export const getBeers = (): Beer[] => {
  let beersParsed : Beer[] = [];
  let beersJson = beersData.data;

  beersJson.forEach((beerJson) => {
    let beerParsed = new Beer();
    Object.assign(beerParsed, beerJson);
    beerParsed.score = parseFloat((Math.random() * 10).toFixed(1));
    beersParsed.push(beerParsed);
  });

  return beersParsed;
};