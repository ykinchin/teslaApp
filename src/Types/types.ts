export interface ISlider {
  imageSrc: any;
  imgAlt: string;
  index: number;
  style: string;
}

export interface IContent {
  title: string;
  text: string;
  imgAlt: string;
  imgSrc: string;
}

export interface IParams {
  range: string;
  peakPower: string;
  wheels: string;
  weight: string;
  battery: string;
  topSpeed: string;
}

export interface IModels {
  modelName: string;
  modelIcon: string;
  paramsIcon: string;
  iconAlt: string;
  banner: string;
  price: string;
  params: IParams;
}
