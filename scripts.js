let Info = function() {
    this.create = function(tagName) {
        return document.createElement(tagName);
    }
    this.attr = function(element, name, value) {
        return element.setAttribute(name, value);
    }
    this.addClass = function(element, className) {
        return element.classList.add(className);
    }
    this.html = function(element, value) {
        return element.innerHTML = value;
    }
    this.append = function(element, newElement, beforeElement) {
        return element.appendChild(newElement);
    } 
}

let info = new Info();

let header = info.create('div');
info.addClass(header, 'headerAll');
info.append(document.body, header);

let main = info.create('div');
info.addClass(main, 'mainAll');
info.append(header, main);

let div1 = info.create('div');
info.addClass(div1, 'left');
info.append(main, div1);

let div2 = info.create('div');
info.addClass(div2, 'center');
info.append(main, div2);

let div3 = info.create('div');
info.addClass(div3, 'right');
info.append(main, div3);

//button
let button = info.create('button');
info.addClass(button, 'button');
button.innerHTML = 'LEARN MORE';
info.append(header, button);

//left
let icon1 = info.create('img');
info.attr(icon1, 'src', 'img/Icon1.png');
info.append(div1, icon1);

let h1 = info.create('h1');
h1.innerHTML = 'VARIOUS ASPECTS';
info.append(div1, h1);

let p = info.create('p');
p.innerHTML = 'If you’ve hung around kids at all in the last few years, you know they love YouTube, even though the video site is only supposed to be for people 13 and up. Now, Google is planning to roll out a YouTube app specifically aimed at kids.';
info.append(div1, p);

//center
let icon2 = info.create('img');
info.attr(icon2, 'src', 'img/Icon2.png');
info.append(div2, icon2);

let h2 = info.create('h1');
h2.innerHTML = 'MAKING PROjECT';
info.append(div2, h2);

let p1 = info.create('p');
p1.innerHTML = 'The State Department announced new policies Tuesday stipulating that U.S. drones can only be exported through government programs and that the receiving country needs to agree to certain conditions about what the drone will be used for.';
info.append(div2, p1);

//right
let icon3 = info.create('img');
info.attr(icon3, 'src', 'img/Icon3.png');
info.append(div3, icon3);

let h3 = info.create('h1');
h3.innerHTML = 'WHO NEEDS SIPERIAN';
info.append(div3, h3);

let p2 = info.create('p');
p2.innerHTML = 'The U.S. has succeeded in embedding virtually untouchable implants that are capable of spying on and even damaging foreign computer networks, according to a new report from a Russian cybersecurity company.';
info.append(div3, p2);