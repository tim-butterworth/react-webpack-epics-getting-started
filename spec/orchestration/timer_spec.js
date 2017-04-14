import {timeEpic} from '../../src/orchestration/timer';
import Rx from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import _ from 'lodash';

let testScheduler = new Rx.TestScheduler();

const timeUnits = (units) => _(units).range().reduce((accume, index) => accume + "-", "")

describe('TimerEpic', () => {
    let testObservable;
    beforeEach(() => {
	testObservable = testScheduler.createColdObservable(
	    'a'+timeUnits(1000)+'|',
	    {
		a: {type: 'PING'},
		b: {type: 'SOMETHING'}
	    }
	);
    });
    
    it('works', () => {
	let result;
	let epic = timeEpic(testObservable, testScheduler);

	epic.subscribe((_result) => {
	    debugger;
	    result = _result;
	});
	testScheduler.flush();
	
	expect(result).toEqual({type: 'PONG'});

	testScheduler.expectObservable();
    });
});
