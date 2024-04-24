export interface IProducts{
  headphones?: [IProductItem],
  wireless?: [IProductItem]
}

export interface IProductItem{
  id: string,
  img?: string,
  name: string,
  price: number,
  discountedPrice?: number,
  rate: number;
  count?: number;
}
