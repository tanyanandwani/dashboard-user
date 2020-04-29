import {InMemoryDbService} from 'angular-in-memory-web-api';
import {Item} from "../../model/Item";

export class ItemsService implements InMemoryDbService{
  
  createDb(){ 
    const items: Item[]=[
      {
      "id": 1,
      "username": "Tanya Nandwani",
      "email":"tanya@gmail.com",
      "rating":4,
      "status": "Completed",
      "duration":"10 days",
      "subject":"Maths",
      "completed":"100%"
    },
    {
      "id": 2,
      "username": "Tanya Nandwani",
      "email":"tanya@gmail.com",
      "rating":4,
      "status": "Completed",
      "duration":"10 days",
      "subject":"Hindi",
      "completed":"100%"
    },
    {
      "id": 3,
      "username": "Tanya Nandwani",
      "email":"tanya@gmail.com",
      "rating":4,
      "status": "Completed",
      "duration":"10 days",
      "subject":"Hindi",
      "completed":"100%"
    },
    {
      "id": 4,
      "username": "Tanya Nandwani",
      "email":"tanya@gmail.com",
      "rating":4,
      "status": "Inprogress",
      "duration":"10 days",
      "subject":"English",
      "completed":"60%"
    },
    {
      "id": 5,
      "username": "Tanya Nandwani",
      "email":"tanya@gmail.com",
      "rating":4,
      "status": "Inprogress",
      "duration":"10 days",
      "subject":"English",
      "completed":"40%"
    },
    {
      "id": 6,
      "username": "Tanya Nandwani",
      "email":"tanya@gmail.com",
      "rating":4,
      "status": "NotStarted",
      "duration":"10 days",
      "subject":"Maths",
      "completed":"0%"
    },
    {
      "id": 7,
      "username": "Tanya Nandwani",
      "email":"tanya@gmail.com",
      "rating":4,
      "status": "NotStarted",
      "duration":"10 days",
      "subject":"Maths",
      "completed":"0%"
    },
    {
      "id": 8,
      "username": "Tanya Nandwani",
      "email":"tanya@gmail.com",
      "rating":4,
      "status": "Inprogress",
      "duration":"10 days",
      "subject":"Maths",
      "completed":"70%"
    },
    {
      "id": 9,
      "username": "Tanya Nandwani",
      "email":"tanya@gmail.com",
      "rating":4,
      "status": "Inprogress",
      "duration":"10 days",
      "subject":"Science",
      "completed":"50%"
    },
    {
      "id": 10,
      "username": "Tanya Nandwani",
      "email":"tanya@gmail.com",
      "rating":4,
      "status": "Completed",
      "duration":"10 days",
      "subject":"Science",
      "completed":"100%"
    },
    {
      "id": 11,
      "username": "Tanya Nandwani",
      "email":"tanya@gmail.com",
      "rating":4,
      "status": "Completed",
      "duration":"10 days",
      "subject":"General knowledge",
      "completed":"100%"
    },
    {
      "id": 12,
      "username": "Tanya Nandwani",
      "email":"tanya@gmail.com",
      "rating":4,
      "status": "Completed",
      "duration":"10 days",
      "subject":"General knowledge",
      "completed":"100%"
    }
    ];
    return {items};

    
  }
  

}


