import {Component, OnInit} from '@angular/core';
import {LessonDetail} from '../model/lesson-detail';
import {Observable} from 'rxjs';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson-detail.component.html',
  styleUrls: ['./lesson-detail.component.css']
})
export class LessonDetailComponent implements OnInit {
  lesson: LessonDetail;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.lesson = this.route.snapshot.data['lesson'];
  }
}
