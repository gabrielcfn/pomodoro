import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pomodoro';
  temporizador = 25;

  iniciarContagem() {
    setTimeout( ()=>{ 
      this.temporizador--
      if (this.temporizador > 0) {
        this.iniciarContagem();
      } else {
        alert('O tempo acabou')
        this.temporizador = 25;
      }
    }, 1000)
  }

}
