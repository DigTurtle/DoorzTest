
            var theThing = document.querySelector("#thing");
            var container = document.querySelector("#contentContainer");

            container.addEventListener("click", getClickPosition, false);

            function getClickPosition(e) {
                var parentPosition = getPosition(e.currentTarget);
                var xPosition = e.clientX - parentPosition.x - (theThing.clientWidth / 2);
                var yPosition = e.clientY - parentPosition.y - (theThing.clientHeight / 2);

                theThing.style.left = xPosition + "px";
                theThing.style.top = yPosition + "px";
            }

            function getPosition(element) {
                var xPosition = 0;
                var yPosition = 0;

                while (element) {
                    xPosition += (element.offsetLeft - element.scrollLeft + element.clientLeft);
                    yPosition += (element.offsetTop - element.scrollTop + element.clientTop);
                    element = element.offsetParent;
                }
                return {x: xPosition, y: yPosition};
            }