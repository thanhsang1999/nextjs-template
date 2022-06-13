export function isNull(obj: any) {
	if (obj === null) {
		return true;
	} else if (obj === undefined) {
		return true;
	} else if (obj === '') {
		return true;
	} else if (Array.isArray(obj) && obj.length === 0) {
		return true;
	} else if (
		Object.keys(obj).length === 0 &&
		Object.getPrototypeOf(obj) === Object.prototype
	) {
		return true;
	} else if (!!!obj) {
		return true;
	} else {
		return false;
	}
}
export function nonNull(obj:any){
	return !isNull(obj);
}