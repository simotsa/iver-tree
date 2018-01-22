<polymer-element name="fin-hypergrid-dnd-list" attributes="label list" assetpath="/components/fin-hypergrid-dnd-list/">
  <template>
    <!-- <link href='http://fonts.googleapis.com/css?family=Roboto:400,700' rel='stylesheet' type='text/css'> -->
    <style type="text/css">:host {
  display: block;
  position: relative;
}
* {
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
}
.dnd-header {
  z-index: 1;
  font-family: 'Roboto', sans-serif;
  text-transform: capitalize;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 46px;
  background-color: #00796b;
  color: white;
  margin-left: 5%;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  overflow: hidden;
}
.list {
  background-color: white;
  position: absolute;
  top: 46px;
  left: 5%;
  right: 5%;
  overflow-y: auto;
  list-style-type: none;
  margin: 0px;
  padding-top: 0px;
  padding-left: 0px;
  bottom: 10%;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
}
.controls {
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  bottom: 0%;
  height: 10%;
}

.level1 {
  opacity: 0.7;
  z-index: 2;
  position: absolute;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  -webkit-transform: translate(-2px,-2px);
     -moz-transform: translate(-2px,-2px);
      -ms-transform: translate(-2px,-2px);
       -o-transform: translate(-2px,-2px);
          transform: translate(-2px,-2px);
}
.level2 {
  opacity: 0.7;
  z-index: 2;
  position: absolute;
  border: 1px solid #e0e0e0;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  -webkit-transform: translate(-4px,-4px);
     -moz-transform: translate(-4px,-4px);
      -ms-transform: translate(-4px,-4px);
       -o-transform: translate(-4px,-4px);
          transform: translate(-4px,-4px);
}
.level3 {
  opacity: 0.7;
  z-index: 2;
  position: absolute;
  border: 1px solid #e0e0e0;
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  -webkit-transform: translate(-6px,-6px);
     -moz-transform: translate(-6px,-6px);
      -ms-transform: translate(-6px,-6px);
       -o-transform: translate(-6px,-6px);
          transform: translate(-6px,-6px);
}
.level4 {
  opacity: 0.7;
  z-index: 2;
  position: absolute;
  border: 1px solid #e0e0e0;
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  -webkit-transform: translate(-8px,-8px);
     -moz-transform: translate(-8px,-8px);
      -ms-transform: translate(-8px,-8px);
       -o-transform: translate(-8px,-8px);
          transform: translate(-8px,-8px);
}
.level5 {
  opacity: 0.7;
  z-index: 2;
  position: absolute;
  border: 1px solid #e0e0e0;
  box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
  -webkit-transform: translate(-10px,-10px);
     -moz-transform: translate(-10px,-10px);
      -ms-transform: translate(-10px,-10px);
       -o-transform: translate(-10px,-10px);
          transform: translate(-10px,-10px);
}
.spacer {
  visibility: hidden;
  overflow: hidden;
}
.transition {
  transition: height 200ms ease-in;
}
.beSmall {
  height: 0px;
}
.beBig {
  height: 51px;
}
</style>

        <div class="font-special toolbar dnd-header">{{title}}</div>
        <ul id="ulist" class="font-special list" touch-action="pan-y" size="3">
          <template repeat="{{item, i in list}}">
            <li value="{{idAdapter(i)}}_spacer" class="spacer beSmall"></li>
            <li value="{{idAdapter(i)}}" class="item" style="-moz-user-select: none;-webkit-user-select: none;-ms-user-select: none;user-select:none;white-space:nowrap;line-height: 46px;list-style-type: none;font-family: 'Roboto', sans-serif;border-bottom: 1px solid #e0e0e0;text-transform: capitalize;cursor: move;background-color: white;color: black;">
              <span style="font-size: 30px;color: #b6b6b6;margin: 8px;position: relative;top: 2px;cursor: move;">
                ⬤
              </span>
              {{labelAdapter(item)}}
            </li>
          </template>
            <li value="last_spacer" class="spacer beSmall"></li>
        </ul>
      

  </template>
  <script>

/* global PolymerGestures */
'use strict';

(function() {
    var noop = function() {

    };
    Polymer('fin-hypergrid-dnd-list', { /* jshint ignore:line  */
        label: 'label',
        id: 'id',
        attached: function() {
            // populate the element’s data model
            // (the salutations array)
            this.title = this.title || 'title';
            this.list = this.list || [{
                id: 0,
                label: 'list item zero',
            }, {
                id: 1,
                label: 'list item one',
            }, {
                id: 2,
                label: 'list item two',
            }, {
                id: 3,
                label: 'list item three',
            }, {
                id: 4,
                label: 'list item four',
            }, {
                id: 5,
                label: 'list item five',
            }, {
                id: 6,
                label: 'list item six',
            }, {
                id: 7,
                label: 'list item seven',
            }, {
                id: 8,
                label: 'list item eight',
            }, {
                id: 9,
                label: 'list item nine',
            }, ];
            var parent = this.parentElement;
            var self = this;
            parent.oncontextmenu = function() {
                return false;
            };
            PolymerGestures.addEventListener(this.$.ulist, 'trackstart', function(e) {
                var li = e.path[0];
                if (li.nodeName !== 'LI') {
                    return; // not a list item; ignore
                }
                self.initiateItemDrag(li, e);
            });
        },
        getRowHeights: function() {
            var bounds = this.$.ulist.getBoundingClientRect();
            var items = this.$.ulist.querySelectorAll('li.item').array();
            if (items.length === 0) {
                return [0];
            }
            var boundries = items.map(function(e) {
                return e.getBoundingClientRect().top - bounds.top;
            });
            var last = items[items.length - 1];
            boundries.push(boundries[boundries.length - 1] + last.getBoundingClientRect().height);
            boundries[0] = 0;
            return boundries;

        },
        //these can be overriden, or the label and id values can be override
        labelAdapter: function(item) {
            if (typeof item === 'object') {
                return item[this.label];
            }
            return item;
        },
        idAdapter: function(item) {
            if (typeof item === 'object') {
                return item[this.id];
            }
            return item;
        },
        //I've just been dragged over, this is the notification
        handleDragHoverEnter: function(dragged, x, y) {
            noop(dragged, x, y);
        },

        //I've just had a dragging operation leave me and
        //begin hovering over another drag target
        handleDragHoverExit: function(dragged, x, y) {
            noop(dragged, x, y);
            this.correctItemState();
        },

        //I'm being dragged over
        handleDragOver: function(dragged, x, y) {
            var self = this;
            var bounds = this.$.ulist.getBoundingClientRect();
            //var items = this.$.ulist.querySelectorAll('li.item').array();
            var boundries = this.getRowHeights();
            var localY = y - bounds.top;
            var minValue = 1000000;
            var minIndex = 0;
            for (var i = 0; i < boundries.length; i++) {
                var distance = Math.abs(localY - boundries[i]);
                if (distance < minValue) {
                    minIndex = i;
                    minValue = distance;
                }
            }
            var overRow = minIndex;
            if (this.overRow !== overRow) {
                if (this.isTransition) {
                    return;
                }
                this.isTransition = true;
                var spacers = this.$.ulist.querySelectorAll('li.spacer');
                //shrink previous if it exists
                if (this.overRow || this.overRow === 0) {
                    var previous = this.$.ulist.querySelector('li.spacer.beBig');
                    if (previous) {
                        previous.classList.add('transition');
                        requestAnimationFrame(function() {
                            previous.classList.remove('beBig');
                            previous.classList.add('beSmall');
                        });
                    }
                }

                //expand current
                this.overRow = overRow;
                var spacer = spacers[overRow];
                spacer.classList.add('transition');
                requestAnimationFrame(function() {
                    spacer.classList.remove('beSmall');
                    spacer.classList.add('beBig');
                    setTimeout(function() {
                        spacer.classList.remove('transition');
                        self.isTransition = false;
                    }, 210);
                });
            }
        },
        handleDrag: function(e) {
            if (!this.dragFodder) {
                return;
            }
            var dragFodderRect = this.dragFodder.getBoundingClientRect();
            var cxo = dragFodderRect.width / 2;
            var cyo = dragFodderRect.height / 2;

            var globalX = (e.x || e.clientX) - this.dragEventStart[0];
            var globalY = (e.y || e.clientY) - this.dragEventStart[1];
            //var sx = this.dragItemStart[0];
            //var sy = this.dragItemStart[1];
            this.setCssLocation(this.dragFodder.style, globalX, globalY);

            //lets check for a drag over....
            //we need to make invisible briefly so as not to
            //obscure what it's over
            this.dragFodder.style.display = 'none';
            var dropTarget = document.elementFromPoint(globalX + cxo, globalY + cyo);
            this.dragFodder.style.display = '';

            if (dropTarget && dropTarget.handleDragOver) {
                if (this.currentDropTarget !== dropTarget) {
                    if (!dropTarget.canDropItem(this.list, dropTarget.list, this.dragFodder.sourceIndex, this.dragFodder.dragItem, e)) {
                        return;
                    }
                    if (this.currentDropTarget) {
                        this.currentDropTarget.handleDragHoverExit(this.dragFodder, globalX + cxo, globalY + cyo);
                    }
                    this.currentDropTarget = dropTarget;
                    this.currentDropTarget.handleDragHoverEnter(this.dragFodder, globalX + cxo, globalY + cyo);
                }
                dropTarget.handleDragOver(this.dragFodder, globalX + cxo, globalY + cyo);
            }
        },

        //lets notify the drop target of a drop
        //the dropItem contains it's source, dragSource
        handleDrop: function(e) {

            noop(e);

            var dropTarget = this.currentDropTarget;
            var dragFodder = this.dragFodder;

            dropTarget.listItemDropped(dragFodder);
        },

        //ive had a list item dropped on me do the proper thing
        listItemDropped: function(listItem) {

            var self = this;

            var dropSpacer = this.$.ulist.querySelector('li.spacer.beBig');
            var items = this.$.ulist.querySelectorAll('li').array();
            var sourceItem = listItem.dragItem;
            var insertIndex = items.indexOf(dropSpacer) / 2;

            var targetRect = dropSpacer.getBoundingClientRect();
            var targetTop = targetRect.top;
            var targetLeft = targetRect.left;

            listItem.style.webkitTransition = '-webkit-transform 150ms ease-in';
            listItem.style.MozTransition = '-moz-transform 150ms ease-in';
            listItem.style.msTransition = '-ms-transform 150ms ease-in';
            listItem.style.oTransition = '-o-transform 150ms ease-in';
            listItem.style.transition = 'transform 150ms ease-in';

            requestAnimationFrame(function() {
                self.setCssLocation(listItem.style, targetLeft, targetTop);
                setTimeout(function() {
                    listItem.parentElement.removeChild(listItem);
                    dropSpacer.classList.remove('beBig');
                    dropSpacer.classList.add('beSmall');
                    self.list.splice(insertIndex, 0, sourceItem);
                    self.overRow = undefined;
                }, 170);
            });




            //this.correctItemState();

            //remove the item from body
        },

        //this function can be replaced to
        //control what can be dragged out and what cannot
        canDragItem: function(list, item, index, e) {
            noop(list, item, index, e);

            //some examples....
            //return list.length > 1; // 1 item must be left
            //return item !== 'sector'; // can't remove sector

            //default allow anything to be dragged out
            return true;
        },

        //this function can be replaced to
        //control what can be dragged out and what cannot
        //the api could be done better given more time,
        //but this will suffice for current needs
        canDropItem: function(sourceList, myList, sourceIndex, item, e) {
            noop(sourceList, myList, sourceIndex, item, e);

            //some examples....
            //return ['sector', 'gics', 'strategy'].indexOf(item) > -1; // 1 item must be in this list
            //return item !== 'sector'; // can't drop sector here

            //default allow anything to be dragged out
            return true;
        },

        initiateItemDrag: function(li, e) {

            //let' attach the this as the drag source to
            //the item were dragging around
            li.dragSource = this;
            li.dragIndex = parseInt(li.getAttribute('value'));
            li.dragItem = this.list[li.dragIndex];

            if (!this.canDragItem(this.list, li.dragItem, li.dragIndex, e)) {
                return;
            }

            this.overRow = undefined;
            var transitions = this.$.ulist.querySelectorAll('.transition').array();
            transitions.forEach(function(e) {
                e.classList.remove('transition');
            });
            e.preventDefault();
            var goAwayer = li.nextElementSibling;
            var bounds = li.getBoundingClientRect();

            var self = this;
            var parent = this.$.ulist;
            var parentBounds = parent.getBoundingClientRect();
            //li.classList.add('level3');
            li.style.width = parentBounds.width + 'px';
            // if (this.dragFodder) {
            //     document.body.removeChild(this.dragFodder);
            // }


            this.list.splice(li.dragIndex, 1);

            this.dragFodder = li;
            this.dragEventStart = [(e.x || e.clientX) - bounds.left, (e.y || e.clientY) - bounds.top];
            //this.dragItemStart = [bounds.left - parentBounds.left, bounds.top - parentBounds.top];

            //lets insert this guy and do a transition to
            //shrink his height
            //goAwayer.classList.remove('transition');
            goAwayer.classList.add('beBig');
            goAwayer.classList.remove('beSmall');

            document.body.appendChild(li);
            PolymerGestures.addEventListener(li, 'track', function(e) {
                self.handleDrag(e);
            });

            PolymerGestures.addEventListener(li, 'trackend', function(e) {
                self.handleDrop(e);
            });

            // PolymerGestures.addEventListener(li, 'up', function(e) {
            //     console.log('up', e);
            // });

            requestAnimationFrame(function() {
                //goAwayer.classList.remove('beBig');
                //goAwayer.classList.add('beSmall');
                //goAwayer.classList.add('transition');
                //wait a little longer than the transition
                //and remove the spacer so as not to have
                //duplicate spacers
                setTimeout(function() {
                    goAwayer.classList.remove('transition');
                }, 210);
            });
            //make the new guy generate touch events

        },
        setCssLocation: function(style, x, y) {
            style.position = 'fixed';
            style.zIndex = 10;
            style.top = 0;
            style.left = 0;
            style.webkitTransform = 'translate(' + x + 'px, ' + y + 'px)';
            style.MozTransform = 'translate(' + x + 'px, ' + y + 'px)';
            style.mmsTransform = 'translate(' + x + 'px, ' + y + 'px)';
            style.oTransform = 'translate(' + x + 'px, ' + y + 'px)';
            style.transform = 'translate(' + x + 'px, ' + y + 'px)';
            style.border = '1px solid #bbbbbb';
            style.boxShadow = '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)';
        },

        //I no longer have a drop prospect, it has hovered over another drop prospect, correct my expansion state
        correctItemState: function() {
            var self = this;
            var spacer = this.$.ulist.querySelector('li.spacer.beBig');
            if (spacer) {
                requestAnimationFrame(function() {
                    spacer.classList.remove('beBig');
                    spacer.classList.add('beSmall');
                    spacer.classList.add('transition');
                    //wait a little longer than the transition
                    //and remove the spacer so as not to have
                    //duplicate spacers
                    setTimeout(function() {
                        spacer.classList.remove('transition');
                        self.overRow = undefined;
                    }, 210);
                });
            }
        },
    });

})();

  </script>
</polymer-element>