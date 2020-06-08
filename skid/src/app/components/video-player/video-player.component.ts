import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Metadata } from '../../models/Metadata';
import { episode_data } from '../../../assets/episode_data';
import * as Hls from 'hls.js';

@Component({
  selector: 'video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss']
})

export class VideoPlayerComponent implements OnInit {
  @Input() episode: Number;
  src: string;
  poster: string;
  hls: Hls;
  player: any;
  metadata: Metadata;
  show_info: Boolean;
  video_codec: string;
  audio_codec: string;
  hls_supported: Boolean;
  video_supported: Boolean;
  audio_supported: Boolean;

  constructor() {
    this.video_codec = 'video/mp4; codecs="mp4a.40.2"';
    this.audio_codec = 'audio/mp4; codecs="avc1.640034"';
    this.hls_supported = Hls.isSupported();
    this.video_supported = MediaSource.isTypeSupported(this.video_codec);
    this.audio_supported = MediaSource.isTypeSupported(this.audio_codec) || true;

  }

  @ViewChild('parent', { static: false }) parent: { nativeElement: { querySelector: (arg0: string) => any; }; };
  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.populateMetadata();
    this.hls = new Hls();
    this.player = this.parent.nativeElement.querySelector('video');
    console.debug('Ep: ' + this.episode)
    if(this.episode != null && this.hls_supported && this.video_supported && this.audio_supported){
      this.loadStream();
    }
    else {
      var support = this.parent.nativeElement.querySelector('.support');
      var nosupport = this.parent.nativeElement.querySelector('.nosupport');
      support.style.display = 'none';
      nosupport.style.display = 'inline';
    }
  }

  populateMetadata() {
    this.metadata = new Metadata(episode_data.find(x => x['number'] == this.episode));
    console.debug(this.metadata);

    var title = this.parent.nativeElement.querySelector('h2');
    var subtitle = this.parent.nativeElement.querySelector('p');

    var meta_title = this.parent.nativeElement.querySelector('#meta > p:nth-child(1)');
    var ep_prod = this.parent.nativeElement.querySelector('#meta > p:nth-child(2)');
    var description = this.parent.nativeElement.querySelector('#meta > p:nth-child(3)');
    var us_airdate = this.parent.nativeElement.querySelector('#meta > p:nth-child(4)');
    var fr_airdate = this.parent.nativeElement.querySelector('#meta > p:nth-child(5)');

    title.innerHTML = this.metadata.title;
    subtitle.innerHTML = this.metadata.production_code.toShortString();

    meta_title.innerHTML = this.metadata.title;
    ep_prod.innerHTML += this.metadata.production_code.toString();
    us_airdate.innerHTML += this.metadata.us_airdate;
    fr_airdate.innerHTML += this.metadata.fr_airdate;
    description.innerHTML = this.metadata.description;
  }

  loadStream(): void {
    this.hls.attachMedia(this.player);
    this.src = "https://media.foxtrotfanatics.com/" + this.episode + "/master.m3u8";
    this.poster = "https://media.foxtrotfanatics.com/" + this.episode + "/thumbnail.png"
    this.player.setAttribute('poster', this.poster);

    this.hls.loadSource(this.src);
  }
}
