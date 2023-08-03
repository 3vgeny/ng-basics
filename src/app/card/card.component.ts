import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../app.component';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() card!: Card;
  @Input() index!: number;

  title = 'My Card Title';
  text: string = 'My sample text';

  cardDate: Date = new Date();
  textColor: string = 'black';
  ngOnInit() {}
  changeTitle() {
    this.card.title = 'Title has been changed!';
  }
  // inputHendler(event: any) {
  //   const value = event.target.value;
  //   this.title = value;
  // }
  // --------the same in a different way-------------------
  // inputHendler(value: any) {
  //   this.title = value;
  // }
  changeHendler() {
    console.log(this.title);
  }
}

// ------------------------------Example add img in tamplate---------------------------------------------------------------
// imgUrl: string = 'https://angular.io/assets/images/logos/angular/angular.png';
// disabled = false;
// ngOnInit() {
//   setTimeout(() => {
//     this.imgUrl =
//       'https://www.primefaces.org/wp-content/uploads/2019/05/primevue-logo-200.png';
//     this.disabled = true;
//   }, 3000);
// }
//   getInfo(): string {
//     return 'This My Info';
//   }
