import { Component } from '@angular/core';
import { SocketioService } from './services/socketio.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';

  constructor(private socketService: SocketioService) { }
  ngOnInit() {
    this.socketService.setupSocketConnection();
  }
  ngOnDestroy() {
    this.socketService.disconnect();
  }
}
