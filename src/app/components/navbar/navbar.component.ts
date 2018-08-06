import { Component, OnInit } from '@angular/core';
import { BootstrapService } from '../../services/bootstrap.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor(public bootstrapService: BootstrapService) {}
  ngOnInit() {}
  openModal() {
    this.bootstrapService.toggle();
  }
}
