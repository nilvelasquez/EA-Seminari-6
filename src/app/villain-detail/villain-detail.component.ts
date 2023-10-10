import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Villain } from '../villain';
import { VillainService } from '../villain.service';

@Component({
  selector: 'app-villain-detail',
  templateUrl: './villain-detail.component.html',
  styleUrls: ['./villain-detail.component.css']
})
export class VillainDetailComponent implements OnInit {
  villain: Villain | undefined;

  constructor(
    private route: ActivatedRoute,
    private villainService: VillainService,
    private location: Location
  ) {}
  
  ngOnInit(): void {
    this.getVillain();
  }

  getVillain(){
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.villainService.getVillain(id)
      .subscribe(villain => this.villain = villain);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.villain) {
      this.villainService.updateVillain(this.villain)
        .subscribe(() => this.goBack());
    }
  }

}
