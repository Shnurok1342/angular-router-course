import {Component, OnInit} from '@angular/core';
import {LessonDetail} from '../model/lesson-detail';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson-detail.component.html',
  styleUrls: ['./lesson-detail.component.css']
})
export class LessonDetailComponent implements OnInit {
  lesson: LessonDetail;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.lesson = this.route.snapshot.data['lesson'];
  }

  previous(lesson: LessonDetail) {
    this.router.navigate(['lessons', lesson.seqNo - 1],
      { relativeTo: this.route.parent });
  }

  next(lesson: LessonDetail) {
    this.router.navigate(['lessons', lesson.seqNo + 1],
      { relativeTo: this.route.parent });
  }
}
