function t(t, i) {
	for (var e in i) t[e] = i[e]
}
var i = Object.create;
var e = function() {
	var e, n;
	if (typeof i === "function") {
		e = function() {
			this.data = i(null)
		};
		n = {
			get: function(t) {
				return this.data[t]
			},
			has: function(t) {
				return !!this.data[t]
			}
		}
	} else {
		e = function() {
			this.data = {}
		};
		n = {
			get: function(t) {
				if (this.has(t)) return this.data[t]
			},
			has: function(t) {
				return Object.prototype.hasOwnProperty.call(this.data, t)
			}
		}
	}
	t(n, {
		set: function(t, i) {
			this.data[t] = i
		},
		del: function(t) {
			var i = this.get(t);
			if (typeof i !== "undefined") {
				delete this.data[t];
				return i
			}
		}
	});
	t(e.prototype, n);
	return e
}();

function n(t, i, e) {
	this.key = t;
	this.val = i;
	this.index = e
}

function r(t) {
	if (typeof t !== "number") throw new TypeError("max is requried");
	this.max(t);
	this.reset()
}

t(r.prototype, {
	set: function(t, i) {
		var e = this._byKey.get(t);
		if (e) {
			this._touch(e);
			e.val = i;
			return
		}
		e = new n(t, i, this._head++);
		this._byKey.set(t, e);
		this._byOrder[e.index] = e;
		this._len++;
		this._trim()
	},
	del: function(t) {
		var i = this._byKey.del(t);
		if (!i) return;
		delete this._byOrder[i.index];
		this._len--;
		if (this._len === 0) {
			this._head = this._tail = 0
		} else {
			if (i.index === this._head - 1) this._pop();
			if (i.index === this._tail) this._shift()
		}
		return i.val
	},
	get: function(t) {
		var i = this._byKey.get(t);
		if (i) {
			this._touch(i);
			return i.val
		}
	},
	peek: function(t) {
		var i = this._byKey.get(t);
		if (i) return i.val
	},
	has: function(t) {
		return this._byKey.has(t)
	},
	length: function() {
		return this._len
	},
	reset: function() {
		this._byKey = new e;
		this._byOrder = i ? i(null) : {};
		this._head = 0;
		this._tail = 0;
		this._len = 0
	},
	max: function(t) {
		if (typeof t !== "number") return this._max;
		if (t < 1) throw new TypeError("max should be a positive number");
		var i = (this._max || 0) > t;
		this._max = t;
		if (i) this._trim()
	},
	keys: function() {
		var t = 0,
			i = this._tail,
			e = this._head,
			n = new Array(this._len);
		for (var r = i; r < e; r++) {
			var h = this._byOrder[r];
			if (h) n[t++] = h.key
		}
		return n
	},
	_touch: function(t) {
		if (t.index !== this._head - 1) {
			var i = t.index === this._tail;
			delete this._byOrder[t.index];
			t.index = this._head++;
			this._byOrder[t.index] = t;
			if (i) this._shift()
		}
	},
	_trim: function() {
		var t = this._max;
		while (t < this._len) {
			var i = this._byOrder[this._tail];
			this.del(i.key)
		}
	},
	_shift: function() {
		var t = this._tail,
			i = this._head;
		for (var e = t; e < i; e++) {
			var n = this._byOrder[e];
			if (n) {
				this._tail = e;
				return n
			}
		}
	},
	_pop: function() {
		var t = this._tail,
			i = this._head;
		for (var e = i - 1; e >= t; e--) {
			var n = this._byOrder[e];
			if (n) {
				this._head = e + 1;
				return n
			}
		}
	}
})

const SimpleLRU = r;

export default SimpleLRU;