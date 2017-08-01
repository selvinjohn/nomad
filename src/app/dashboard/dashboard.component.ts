import { Component, OnInit, ViewChild  } from '@angular/core';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  selectedTemplate:any;

  onSelect(template){
    this.selectedTemplate = template
    // template.active = !template.active;
  }

  templates: any = [
    {
      name:"Post Card",
      id:"1",
      active:true
    },
    {
      name:"Classic Right",
      id:"2",
      active:false
    },
    {
      name:"Classic Left",
      id:"3",
      active:false
    },
    {
      name:"Branded",
      id:"4",
      active:false
    },
  ];

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
