var Switcher = (function() {
    return {
        init(target) {
            let c;
            let ctx;
            let width, height;
            let on_color, off_color, circle_color;
            let status;
        
            let border = 2;
        
            c = document.querySelector(`#${target}`);
            ctx = c.getContext("2d");
    
            width = c.width;
            height = c.height;
    
            on_color = c.getAttribute("on");
            off_color = c.getAttribute("off");
            circle_color = c.getAttribute("circle");
            status = c.getAttribute("status");
    
            if (status == "on")
                on();
            else
                off();
    
            c.onclick = function() {
                if (status == "on") {
                    off();
                    status = "off";
                } else {
                    on();
                    status = "on";
                }
                c.setAttribute("status", status);
            }
        
            function on() {
                // 滑块从左往右
                let x = height / 2;
        
                let handle = setInterval(function() {
        
                    ctx.clearRect(0, 0, width, height);
        
                    ctx.beginPath();
        
                    ctx.fillStyle = on_color;
                    
                    ctx.arc(height / 2, height / 2, height / 2, 0, Math.PI * 2);
        
                    ctx.arc(width - height / 2, height / 2, height / 2, 0, Math.PI * 2);
        
                    ctx.fill();
                    
                    ctx.fillRect(height / 2, 0, width - height, height);
        
                    ctx.beginPath();
        
                    ctx.fillStyle = circle_color;
        
                    x++;
                    ctx.arc(x, height / 2, height / 2 - border, 0, Math.PI * 2);
                    if (x == width - height / 2)
                        clearInterval(handle);
        
                    ctx.fill();
                }, 20);
        
            }
        
            function off() {
                let x = width - height / 2;
        
                let handle = setInterval(function() {
        
                    ctx.clearRect(0, 0, width, height);
        
                    ctx.beginPath();
        
                    ctx.fillStyle = off_color;
        
                    ctx.arc(height / 2, height / 2, height / 2, 0, Math.PI * 2);
        
                    ctx.arc(width - height / 2, height / 2, height / 2, 0, Math.PI * 2);
        
                    ctx.fill();
        
                    ctx.fillRect(height / 2, 0, width - height, height);
        
                    ctx.beginPath();
        
                    ctx.fillStyle = circle_color;
        
                    x--;
                    ctx.arc(x, height / 2, height / 2 - border, 0, Math.PI * 2);
                    if (x == height / 2)
                        clearInterval(handle);
        
                    ctx.fill();
                }, 20);
        
            }        
        }
    };
})();