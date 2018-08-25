export function createTemplate(template, style) {
        let tmpl = document.createElement('template');
        style = style ? '<style>' + style + '</style>' : '';
        tmpl.innerHTML = style + template;
        return tmpl;
    }

