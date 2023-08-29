import { Component, Input } from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})


export class HeroDetailComponent {
  @Input() hero?: Hero;

  constructor(
    private activatedRoute: ActivatedRoute, // hold information about the route (Hero's Details)
    private location: Location,             // gets hero data to display
    private heroService: HeroService) {}    // allows you to navigate back and forth through different views


    ngOnInit(): void {
      this.getHero();
    }

    getHero(): void {
      const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
      this.heroService.getHero(id).subscribe(hero => this.hero = hero);
    }

    goBack(): void {
      this.location.back();
    }

    save(): void {
      if(this.hero) {
        this.heroService.updateHero(this.hero).subscribe(() => this.goBack());
      }
    }
  }
