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

  constructor(public flickrService: FlickrSearchService){ }

  searchStr: string = '';
  page: number = 1;
  api_key = '01d7d390e96398e5c04ea2a39cc458a2';
  showSelected: boolean = false;
  onScroll(){
    this.page += 1;
    console.log(this.page)
    this.searchPhoto(this.page);
  }
  public a;
  onSelectImg(pho){
    this.a = pho.replace(/_q.jpg/, '_b.jpg');
    this.showSelected = true;
  }

   searchPhoto(p?: number){
     var url = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=' + this.api_key + '&text=' + this.searchStr + '&per_page=56' + '&page=' + p + '&format=json&nojsoncallback=1';

     if(this.searchStr === ''){
       this.show = false;
     }else{
       this.show = true;
       this.flickrService.searchPhoto(url).subscribe(
         data => {
           data['photos']['photo'].forEach(photo => {
             this.photos.push(new Photo(
               photo.id,
               photo.server,
               photo.farm,
               photo.secret,
               photo.owner
             ));
           })

         },
         err => { console.log(err)}
       );

     }

  }


}
