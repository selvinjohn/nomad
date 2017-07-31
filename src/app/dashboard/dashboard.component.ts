import { Component, OnInit, ViewChild  } from '@angular/core';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @ViewChild('myModal')
    modal: ModalComponent;
  
  cssClass: string = 'modal-content';
  animation: boolean = true;
  keyboard: boolean = true;
  backdrop: string | boolean = true;
    size: string = 'lg';

    close() {
        this.modal.close();
    }
    
    open() {
        this.modal.open();
    }

}
