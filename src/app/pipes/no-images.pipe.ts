import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noImages'
})
export class NoImagesPipe implements PipeTransform {

  transform(images: any[]): any {


  if (!images) {
      return 'assets/img/noimage.png.png';
  }
  if (images.length  > 0) {
      return images[0].url;
} else {
  return 'assets/img/noimage.png.png';
}

  }

}
