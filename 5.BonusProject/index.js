function Operation(task) {
	this.task = task;
}

Operation.prototype.combine = function(operation) {
	this.task = this.task.concat(operation.task);
}

Operation.prototype.apply = function(string) {
	let cursor = 0;
	
	this.task.forEach(function(item, index){
		if ( item.hasOwnProperty('move') ) {
			cursor = cursor+item.move;
		} else if ( item.hasOwnProperty('insert') ) {
			string = [string.slice(0, cursor), item.insert, string.slice(cursor)].join('');
			cursor = cursor + item.insert.length;
		} else if ( item.hasOwnProperty('delete') ) {
			string = string.substring(0,cursor) + string.substring(cursor+item.delete, str.length);
		}
	});

	return string;
}

Operation.combine = function(op1, op2) {
	let result = [];
	
	result.push(op1);
	result.push(op2);
	
	return result;
}

module.exports = {
	Operation: Operation
}