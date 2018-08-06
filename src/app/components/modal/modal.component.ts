import { Component, OnInit, ViewChild } from '@angular/core';
import { BootstrapService } from '../../services/bootstrap.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  isOpen;
  closeResult: string;
  @ViewChild('crearpedido') modalInstance;
  constructor(
    public modalService: NgbModal,
    public bootstrapService: BootstrapService
  ) {}
  ngOnInit() {
    this.bootstrapService.change.subscribe(isOpen => {
      this.isOpen = isOpen;
      console.log(this.isOpen);
      this.modalService.open(this.modalInstance);
    });
  }
}
