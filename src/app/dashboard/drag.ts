import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'simple-dnd',
    template: `
<h4>Transfer custom data in Drag-and-Drop</h4>
<div class="row">
    <div class="col-sm-4">
        <div class="panel panel-success">
            <div class="panel-heading">Available to drag</div>
            <div class="panel-body">
                <div class="panel panel-default" dnd-draggable [dragEnabled]="true" [dragData]="transferData">
                    <div class="panel-body">
                        <div>Drag Me</div>
                         <img [src]="transferData.url" />
                        <div>{{transferData | json}}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="col-sm-8">
        <div dnd-droppable class="panel panel-info" (onDropSuccess)="transferDataSuccess($event)">
            <div class="panel-heading">Place to drop (Items:{{receivedData.length}})</div>
            <div class="panel-body">
                <div [hidden]="!receivedData.length > 0" *ngFor="let data of receivedData">
                <button type="button" class="close" aria-label="Close" (click)="removeImg(data)">
  <span aria-hidden="true">&times;</span>
</button>              
                <img [src]="data.dragData.url" />
                </div>
            </div>
        </div>
    </div>
</div>`
})
export class SimpleDndComponent {
     transferData: Object = {id: 1, msg: 'Hello',url:'https://angular.io/assets/images/logos/angular/angular.png'};
    receivedData: Array<any> = [];

    transferDataSuccess($event: any) {
        this.receivedData.push($event);
    }
    removeImg(obj){
 let index: number = this.receivedData.indexOf(obj);
    if (index !== -1) {
        this.receivedData.splice(index, 1);
    }     
    }
}