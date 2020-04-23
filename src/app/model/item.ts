// export class Item {
//   constructor( 
//     public id = 0, public username = '', public email = '', public rating = 0,
//     public status = '',public duration = '',public subject = '',public completed = '',
// ) {}
// }

// export const enum Item {
//  id,
//  username,
//  email,
//  rating,
//  status,
//  duration,
//  subject,
//  completed
// }
export interface Item {
  id: number;
  username: string;
  email:string;
  rating:number;
  status: string;
  duration: string;
  subject:string;
  completed:string;
}