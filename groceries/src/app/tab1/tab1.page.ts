import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  //Page Title
  title = "Grocery List";

  //List of Groceries
  items = [
    {
      name: "Milk",
      quantity: 2
    },
    {
      name: "Lettuce",
      quantity:1
    },
    {
      name: "Apple",
      quantity:5
    },
    {
      name: "Pasta Sauce",
      quantity:1
    },
    {
      name: "Tomato",
      quantity:3
    },
    {
      name: "Corn",
      quantity:2
    }
  ];

  constructor(public toastCtrl: ToastController, public alertCtrl: AlertController) {

  }

  //Remove item from items array
  async removeItem(item, index){
    const delItemName = item.name;
    this.items.splice(index, 1);

    const toast = this.toastCtrl.create({
      message: 'Removed ' + delItemName + ".",
      duration: 3000
    });
    (await toast).present();
  }

  //prompt user to provide new item details and add it to items array
  async showAddItemPrompt(){
    const prompt = this.alertCtrl.create({
      header: "Add Item",
      message: "Enter an item and quantity.",
      inputs: [
        {
          name: 'name',
          placeholder: 'Item Name'
        },
        {
          name: 'quantity',
          placeholder: 'Quantity'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel Clicked');
          }
        },
        {
          text: 'Save',
          handler: async item => {
            this.items.push(item);
            const toast = this.toastCtrl.create({
              message: 'Added ' + item.name,
              duration: 3000
            });
            (await (toast)).present();
          }
        }
      ]

    });
    (await prompt).present();
  }

  //Call prompt
  async addItem(){
    this.showAddItemPrompt();
  }
}
