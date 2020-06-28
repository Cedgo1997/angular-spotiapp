import { Component, OnInit } from '@angular/core';

// Import to use id's as a param

import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: [
  ]
})
export class ArtistComponent {

  constructor(private _router: ActivatedRoute) {

      this._router.params.subscribe(params => {
        params['id'];
      })

   }

}
