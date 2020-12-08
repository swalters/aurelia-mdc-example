export class App {
  public message: string = 'Hello World!';

  checkValue: boolean= false;

  toggle1: boolean = true;


  toggle() {
    this.toggle1 = !this.toggle1;
  }
}
