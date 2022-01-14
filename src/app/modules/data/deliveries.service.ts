import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeliveriesService {

  constructor() { }

  areaDataDeliveries(){
    return[{
        name: 'Deliveries',
        data: [700, 650,630,690, 710,740, 730, 735, 725, 735, 750, 755]
    }]
  }

  pieDataDeliveries(){
    return[{
      name: 'Brands',
      colorByPoint: true,
      data:[{
        name:'available suppliers',
        y:30,
        sliced:true,
        selected: true
      }, {
        name:'unavailable suppliers',
        y:20,
        sliced:true,
        selected: true
      }
    ]

    }]
  }

}
