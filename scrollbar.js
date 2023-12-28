import { fromEvent } from "rxjs";
import { map } from "rxjs/operators";

const scrollEv$ = fromEvent( document, 'scroll');

function getCurrentPercent(element) {
  const {
    scrollTop,
    scrollHeight,
    clientHeight
  } = element;

  return (scrollTop / (scrollHeight - clientHeight)) * 100;
}

const progress$ = scrollEv$
.pipe(map(({target}) => getCurrentPercent(target.documentElement)));

progress$.subscribe(console.log);