import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pomodoro';
  temporizador = 25

  iniciarContagem() {
    console.log('asdasasd')
    setTimeout( ()=>{ 
      this.temporizador--
      if (this.temporizador > 0) {
        this.iniciarContagem();
      } else {
        alert('O tempo acabou')
      }
    }, 1000)
  }

}
