import { Component }  from '@angular/core';

import { FlickrSearchService }  from '../../services/flickr-search.service';
import { Photo }  from '../../services/photo';

@Component({
  selector: 'photos',
  templateUrl:'./photos.component.html',
  styleUrls:['./photos.component.css'],
})


export class PhotosComponent {

  photos: Array<Photo> = [];
  pages: Array<any>;
  show: boolean;
  api_key = '01d7d390e96398e5c04ea2a39cc458a2';
  searchStr: string = '';
  page: number = 1;
  showSelected: boolean = false;
  searchArr: Array<string>=[];
  showLoading: boolean = true;

  constructor(public flickrService: FlickrSearchService){ }

  onScroll(){
    this.page += 1;
    console.log(this.page);
    this.searchPhoto(this.page);
  }
  loadingP(s: boolean){
    if(s === true){
       this.showLoading = true;
    }else{
      this.showLoading = false;
    }
  }

  public a: string;
  onSelectImg(pho){
    this.a = pho.replace(/_q.jpg/, '_b.jpg');
    this.showSelected = true;
  }

  getData(d){
    this.loadingP(false);
    if(d.photos.photo.length === 0){
      this.onScroll();
    }else{
      d.photos.photo.forEach(photo => {
        this.photos.push(new Photo(
          photo.id,
          photo.server,
          photo.farm,
          photo.secret,
          photo.owner
        ));
      })
    }

  }

   searchPhoto(p?: number){
     var elm = document.getElementById('scrollDiv');

     var url = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=' + this.api_key + '&text=' + this.searchStr + '&per_page=56' + '&page=' + p + '&format=json&nojsoncallback=1';
     if(this.searchStr === ''){
       this.show = false;
     }else{
       this.show = true;
       this.flickrService.searchPhoto(url).subscribe(
         data => {

           if(p === undefined){
             this.photos = [];
             this.page = 1;
             this.getData(data);
             elm.scrollTop = 10;
           }else{
             this.getData(data);
           }

         },
         err => { console.log(err)}
       );
     }

     this.loadingP(true);

  }
}
