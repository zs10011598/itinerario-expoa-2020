function getTime(value, utc) {
	var parts = value.split('/');
	parts[1] -= 1;
	if (utc) {
		return Date.UTC(parts[2], parts[1], parts[0]);
	}
	return new Date(parts[2], parts[1], parts[0]).getTime();
}