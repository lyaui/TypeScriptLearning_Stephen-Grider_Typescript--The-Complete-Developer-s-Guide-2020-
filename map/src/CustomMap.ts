// Instructions to every other class
// on how they can be an argument to 'addMarker
export interface IMappable {
  location: {
    lat: number;
    lng: number;
  };
  markContent(): string;
  color: string;
}

export class CustomMap {
  // 設定成 private 只能透過 class 內的方法來操作
  private googleMap: google.maps.Map;
  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId) as HTMLElement, {
      zoom: 1,
      center: { lat: 0, lng: 0 },
    });
  }
  addMarker(mappable: IMappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: { lat: mappable.location.lat, lng: mappable.location.lng },
    });
    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mappable.markContent(),
      });
      infoWindow.open(this.googleMap, marker);
    });
  }
}
