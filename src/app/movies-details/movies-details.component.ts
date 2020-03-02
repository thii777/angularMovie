import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieDbService } from '../movie-db.service';

@Component({
  selector: 'app-movies-details',
  templateUrl: './movies-details.component.html',
  styleUrls: ['./movies-details.component.scss']
})
export class MoviesDetailsComponent implements OnInit {
  movieId: string;
  movie: any;
  loading: boolean = false

  constructor(private router: ActivatedRoute, private movieDbService: MovieDbService) { }

  ngOnInit(): void {
    this.movieId = this.router.snapshot.params['id']
    this.getDetails()
  }

  async getDetails(){
    if(this.loading) {return}
    try {
      let res = await this.movieDbService.getById(this.movieId)
      const credits = await this.movieDbService.getCredits(this.movieId)
      console.log(credits)
      console.log(res)
      this.movie = res
      this.movie.actors = credits.cast.splice(0, 4)
      this.movie.director = credits.crew.find(crewMember => crewMember.job === 'Director')
    } catch(error){
      console.error(error)
    }  finally {
      this.loading = false
    }
  }

  return(){
    window.history.back()
  }

}
