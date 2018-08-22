export function createTemplate(template, style) {
        let tmpl = document.createElement('template');
        style = style ? '<style>' + style + '</style>' : '';
        tmpl.innerHTML = style + template;
        console.log("воспользовались супер классом");
        return tmpl;
    }

