
//These are expoerted INTERFACE for cast types
export interface UsersIntrfc{
name: string;
email:string;
phone:number;
occupation: string;
}


//These are expoerted INTERFACE for cast types
export interface StaticContInterface{
    title: string;
    description:string;
    }


//These are expoerted ENUMS for const static text
export enum description{
    homeDesc ="Welcome to FlashCard Loader, This is a web app which is responsive and uses technical stack like React Js, Next Js, Apollo client, Server, GraphQL." ,
    aboutUsDesc = "This is a technical task, which exhbits exposure on React Js, Next Js, Apollo client, Server, GraphQL."
}  

export enum visbibleCards{
    count= 1
}