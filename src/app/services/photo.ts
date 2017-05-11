export class Photo{

  constructor(public id: string, public server: string, public farm: string, public secret: string, public owner: string){}

  get getUrl(): string{
    return 'https://farm' + this.farm + '.staticflickr.com/' + this.server + '/' + this.id + '_' + this.secret + '_q.jpg';
  }

  get getInfo(): string{
    return 'https://www.flickr.com/photos/' + this.owner + '/' + this.id;
  }

}
