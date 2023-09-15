ction(e) 
    const target = e.target;
    if (target.classList.contains('todo__action')) {
      const action = target.dataset.todoAction;
      const elemItem = target.closest('.todo__item');
      if (action === 'deleted' && elemItem.dataset.todoState === 'deleted') {
        elemItem.remove();
      } else {
        elemItem.dataset.todoState = action;
      }
      this.save();
    } else if (target.classList.contains('todo__add')) {
      this.add();
      this.save();
    }
    if (target.classList.contains('todo__action')) {
        // ...
      } else if (target.classList.contains('todo__add')) {
        // ...
      }
      this.add();
this.save();
const action = target.dataset.todoAction;
const elemItem = target.closest('.todo__item');
if (action === 'deleted' && elemItem.dataset.todoState === 'deleted') {
  elemItem.remove();
} else {
  elemItem.dataset.todoState = action;
}
this.save();
todo.init();
// polyfill closest
if (!Element.prototype.matches) {
  Element.prototype.matches = Element.prototype.msMatchesSelector 
}
if (!Element.prototype.closest) {
  Element.prototype.closest = function(s) {
    var el = this;
    do {
      if (Element.prototype.matches.call(el, s)) return el;
      el = el.parentElement || el.parentNode;
    } while (el !== null && el.nodeType === 1);
    return null;
  };
}
// polyfill closest
if (!Element.prototype.matches) {
  Element.prototype.matches = Element.prototype.msMatchesSelector 
}
if (!Element.prototype.closest) {
  Element.prototype.closest = function(s) {
    var el = this;
    do {
      if (Element.prototype.matches.call(el, s)) return el;
      el = el.parentElement || el.parentNode;
    } while (el !== null && el.nodeType === 1);
    return null;
  };
}
// polyfill closest
  Element.prototype.matches = Element.prototype.msMatchesSelector 
if (!Element.prototype.matches) {
}
if (!Element.prototype.closest) {
  Element.prototype.closest = function(s) {
    var el = this;
    do {
      if (Element.prototype.matches.call(el, s)) return el;
      el = el.parentElement || el.parentNode;
    } while (el !== null && el.nodeType === 1);
    return null;
  };
}
//polyfill remove
if (!('remove' in Element.prototype)) {
  Element.prototype.remove = function() {
    if (this.parentNode) {
      this.parentNode.removeChild(this);
    }
  };
}