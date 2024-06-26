export interface Apartment{
    id:number;
    name:string;
    description:string;
    city:string;
    owner:string;
    address:string;
    src:string;
    price:string;
    priceInCurrentCurrency?: string;
    rating:number;
    latitud:number;
    longitud:number;
    nearbyPlaces: { [key: string]: any };
    
}