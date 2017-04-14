import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/map';

export const timeEpic = (action$) => {
    return action$
	.filter(action => {
	    return action.type === 'PING';
	})
	.delay(1000)
	.map(() => {
	    console.log("Make it happen");
	    return {type: 'PONG'}
	});
}
